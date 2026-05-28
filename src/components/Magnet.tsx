import { useRef, useState, ReactNode, useCallback } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [transform, setTransform] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const threshold = Math.max(rect.width, rect.height) / 2 + padding

      if (dist < threshold) {
        if (!active) setActive(true)
        setTransform({ x: dx / strength, y: dy / strength })
      } else {
        if (active) {
          setActive(false)
          setTransform({ x: 0, y: 0 })
        }
      }
    },
    [active, padding, strength]
  )

  const handleMouseLeave = useCallback(() => {
    setActive(false)
    setTransform({ x: 0, y: 0 })
  }, [])

  const attachRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (ref.current) {
        window.removeEventListener('mousemove', handleMouseMove)
      }
      ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      if (node) {
        window.addEventListener('mousemove', handleMouseMove)
        node.addEventListener('mouseleave', handleMouseLeave)
      }
    },
    [handleMouseMove, handleMouseLeave]
  )

  return (
    <div
      ref={attachRef}
      className={className}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

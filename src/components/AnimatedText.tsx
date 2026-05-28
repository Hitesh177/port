import { useRef, CSSProperties } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface AnimatedCharProps {
  char: string
  progress: MotionValue<number>
  start: number
  end: number
}

function AnimatedChar({ char, progress, start, end }: AnimatedCharProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <span style={{ opacity: 0 }}>{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={{ position: 'relative', ...style }}>
      {chars.map((char, i) => {
        const start = i / chars.length
        const end = Math.min((i + 1) / chars.length + 0.1, 1)
        return (
          <AnimatedChar
            key={i}
            char={char}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        )
      })}
    </p>
  )
}

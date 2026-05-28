import { motion } from 'framer-motion'
import { ReactNode, ElementType } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: ElementType
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as,
}: FadeInProps) {
  const MotionEl = as ? motion.create(as as ElementType) : motion.div

  return (
    <MotionEl
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
    >
      {children}
    </MotionEl>
  )
}

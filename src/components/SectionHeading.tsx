import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  compact?: boolean
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, compact = false, children }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${compact ? 'compact' : ''}`}>
      <p className="eyebrow"><span></span>{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

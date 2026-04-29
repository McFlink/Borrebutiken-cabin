import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  className?: string
  labelledBy?: string
}>

export function Section({ id, className, labelledBy, children }: SectionProps) {
  const classes = ['section', className].filter(Boolean).join(' ')

  return (
    <section id={id} className={classes} aria-labelledby={labelledBy}>
      <div className="container">{children}</div>
    </section>
  )
}

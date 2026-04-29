type Props = {
  id?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ id, title, subtitle, centered = false }: Props) {
  const classes = ['section-heading', centered ? 'section-heading--centered' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <h2 id={id}>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  )
}

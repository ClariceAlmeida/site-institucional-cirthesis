type SectionTitleProps = { eyebrow: string; title: string; text?: string };

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return <header className="section-title"><span>{eyebrow}</span><h1>{title}</h1>{text && <p>{text}</p>}</header>;
}

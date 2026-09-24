type CtaProps = { onClick: () => void; children?: string };

export function Cta({ onClick, children = 'Quero participar' }: CtaProps) {
  return <button className="button button-primary" onClick={onClick}>{children} <b>→</b></button>;
}

import { useSheetData } from '../hooks/useSheetData';
import { CSV_URL_EQUIPE } from '../config/sheets';
import { SectionTitle } from '../components/SectionTitle';
import type { Equipe } from '../types/sheet';

export function About() {
  const { data: team } = useSheetData<Equipe>(CSV_URL_EQUIPE);
  return (
    <>
    <main className="wrap page">
      <SectionTitle eyebrow="O projeto" title="Onde a arte encontra a comunidade." text="Um projeto que usa o circo como prática de educação, cuidado e transformação."/>
      <div className="two-col">
        <div className="image-placeholder red-shape">CIRTHESIS<br/>É ENCONTRO</div>
        <div>
          <h2>Nossa história</h2>
          <p>Cirthesis nasce do desejo de tornar a prática circense acessível, acolhedora e viva.</p>
          <p>Em cada encontro, construímos um ambiente de escuta, experimentação e troca. A técnica é importante, mas a descoberta também.</p>
          <h2>O que nos move</h2>
          <div className="pill-list">
            <span>Inclusão</span>
            <span>Experimentação</span>
            <span>Autonomia</span>
            <span>Coletividade</span>
          </div>
        </div>
      </div>
      {team.length > 0 && (
        <section className="team">
          <p className="eyebrow">Quem faz acontecer</p>
          <h2>Nossa equipe</h2>
          <div className="team-grid">
            {team.map((person) => (
              <article key={person.nome} className="team-card">
                {person.url_foto ? (
                  <div className="circle">
                    <img src={person.url_foto} alt={person.nome} />
                  </div>
                ) : (
                  <div className="avatar circle">✦</div>
                )}
                <p className="eyebrow">{person.papel}</p>
                <h3>{person.nome}</h3>
                <p>{person.descricao}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>;
    </>
  )
}

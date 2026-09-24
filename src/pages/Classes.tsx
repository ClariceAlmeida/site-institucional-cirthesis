import { Cta } from '../components/Cta';
import { SectionTitle } from '../components/SectionTitle';
import { CSV_URL_AULAS } from '../config/sheets';
import { useSheetData } from '../hooks/useSheetData';
import type { Aula } from '../types/sheet';
import type { Navigate } from '../types/navigation';

export function Classes({ go }: { go: Navigate }) {
  const { data: classes } = useSheetData<Aula>(CSV_URL_AULAS);
  const cards = classes.length ? classes : [{ modalidade: 'Carregando...', professor: '...', sobre_o_prof: 'Aguarde enquanto carregamos as informações.', sobre_a_aula: '', dias: '...', horarios: '...', vagas: '...' }];
  return (
    <>
    <main className="wrap page classes-page">
      <SectionTitle eyebrow="Aulas" title="Quem conduz cada encontro." text="Conheça as pessoas responsáveis pelas práticas, os dias e os horários de cada aula."/>
      <div className="teacher-list">{cards.map((classItem, i) => 
        <article className={`teacher-card tc${i % 3}`} key={`${classItem.modalidade}-${classItem.professor}`}>
          <div className="teacher-index">0{i + 1}</div>
          <div className="teacher-main">
            <p className="eyebrow">{classItem.professor}</p>
            <h2>{classItem.modalidade}</h2>
              <p className="teacher-bio">{classItem.sobre_a_aula}</p>
          </div>
          <div className="class-details">
            <div>
              <span>Dias</span>
              <b>{classItem.dias}</b>
            </div>
            <div>
              <span>Horário</span>
              <b>{classItem.horarios}</b>
            </div>
            <div>
              <span>Vagas</span>
              <b>{classItem.vagas}</b>
            </div>
          </div>
        </article>)}
      </div>
      <section className="notice">
        <div>
          <p className="eyebrow">Como funciona</p>
          <h2>Chegue como você é.</h2>
          <p>As aulas têm propostas adaptáveis e acompanhamento da equipe. Consulte as informações acima e entre em contato para participar.</p>
        </div>
        <Cta onClick={() => go('contato')} />
      </section>
    </main>;
    </>
  );
}

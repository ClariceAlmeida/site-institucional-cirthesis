import { Cta } from '../components/Cta';
import { Page } from '../types/navigation';
import { Geral } from '../types/sheet';
import { CSV_URL_GERAL } from '../config/sheets';
import { useSheetData } from '../hooks/useSheetData';

const fallback: Geral = {
  frase_inicial: 'O circo é um espaço para mover, criar e pertencer.',
  sobre_projeto: 'Cirthesis é um projeto que aproxima pessoas da arte circense por meio de práticas inclusivas, criativas e coletivas.',
  sobre_circo: 'Aqui, o circo se torna encontro: um lugar para experimentar o corpo, aprender com o outro e celebrar novas possibilidades.',
  beneficios_circo: 'Consciência corporal, Força e flexibilidade, Criatividade, Cooperação, Confiança',
  como_as_aulas_funcionam: 'As atividades são conduzidas de forma progressiva e segura, respeitando o ritmo de cada participante. Não é preciso ter experiência anterior.',
};


export function Home({ go }: { go: (page: Page) => void }) {
  const { data, loading } = useSheetData<Geral>(CSV_URL_GERAL);
  const geral = data[0] || fallback;
  const benefits = (geral.beneficios_circo || fallback.beneficios_circo!).split(',').map((item) => item.trim()).filter(Boolean);
  return(
    <>
    <section className="hero">
        <div className="hero-copy">
            <p className="eyebrow">Extensão · arte · movimento</p>
            <h1>{geral.frase_inicial}</h1>
            <p>Uma comunidade que aprende, se expressa e cria junto — dentro e fora da lona.</p>
            <Cta onClick={() => go('contato')} />
        </div>
        <div className="hero-art" aria-label="Ilustração abstrata de uma artista circense">
            {geral.foto_video_destaque ? (
                <>
                    <img src={geral.foto_video_destaque} alt={geral.alt_foto} />
                    <p>CIR<br/>THESIS</p>
                </>
            ) : (
                <>
                    <img src="/logo-cirthesis.png" alt="Logo Cirthesis" />
                    <p>CIR<br/>THESIS</p>
                </>
            )}
        </div>
    </section>
    <section className="intro-grid wrap">
        <article>
            <p className="eyebrow">Sobre o projeto</p>
            <h2>Circo para todos os corpos.</h2>
            <p>{geral.sobre_projeto}</p>
            <button className="text-link" onClick={() => go('sobre')}>Conheça nossa história →</button>
            </article>
        <article className="paper">
            <p className="eyebrow">Cirthesis</p>
            <p>{geral.sobre_circo}</p>
        </article>
    </section>
    <section className="benefits wrap">
        <div>
            <p className="eyebrow">Por que praticar?</p>
            <h2>O que o circo desperta.</h2>
        </div>
        <ul>
            {benefits.map((benefit) => 
                <li key={benefit}>
                    <span>✦</span>
                    {benefit}
                </li>
            )}
        </ul>
    </section>
    <section className="process wrap">
        <div className="process-art">01 
            <span>✦</span>
        </div>
        <div>
            <p className="eyebrow">Primeira vez?</p>
            <h2>Seu ponto de partida é aqui.</h2>
            <p>{loading ? 'Preparando as informações...' : geral.como_as_aulas_funcionam}</p>
            <Cta onClick={() => go('aulas')} children="Conhecer as aulas" />
        </div>
    </section>
    </>
  );
}
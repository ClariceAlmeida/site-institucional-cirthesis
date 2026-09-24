import { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';

const questions = [['Preciso ter experiência com circo?','Não. As atividades são pensadas para acolher iniciantes e pessoas com diferentes vivências corporais.'],['Quem pode participar?','A programação indica em cada atividade o público a que se destina. Em caso de dúvida, fale com a nossa equipe.'],['O que devo levar?','Venha com roupas confortáveis, garrafinha de água e disposição para experimentar.'],['As atividades são gratuitas?','Consulte a programação de cada atividade. As informações de inscrição estarão sempre na agenda.']];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <main className="wrap page faq">
      <SectionTitle eyebrow="Dúvidas frequentes" title="Tudo bem perguntar."/>
      {questions.map(([question, answer], index) => 
        <article className={open === index ? 'open' : ''} key={question}>
          <button onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{question}</span>
            <b>{open === index ? '−' : '+'}</b>
          </button>{open === index && <p>{answer}</p>}
        </article>
      )}
    </main>
  )
}

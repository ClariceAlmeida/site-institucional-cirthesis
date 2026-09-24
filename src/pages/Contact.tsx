import { useState } from 'react';

export function Contact() {
  const [sent, setSent] = useState(false);
  return(
    <main className="contact-page">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">Fale com a gente</p>
          <h1>Vamos colocar essa ideia em movimento?</h1>
          <p>Para mais informações, propor uma parceria ou tirar uma dúvida, escreva para nós.</p>
          <a href="mailto:circo@ufpr.com" className="contact-link">circo@ufpr.com</a>
          <p>
            <a href="https://www.instagram.com/cirthesis/" target="_blank" rel="noopener noreferrer" className="social contact-link">Instagram · @cirthesis</a>
          </p>
        </div>
          <a id="matricula-link" href="https://docs.google.com/forms/d/e/1FAIpQLSe-iwlR7QP7DWvNXdsE2NtPcecbQJcmdITKarSGpg9BVR36xg/viewform" target="_blank" rel="noopener noreferrer">
            <button className="button button-primary">
              Realizar matrícula
            </button>
          </a>
      </div>
    </main>
  )
}

import { useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Classes } from './pages/Classes';
import { Contact } from './pages/Contact';
import { Faq } from './pages/Faq';
import { Gallery } from './pages/Gallery';
import { Posts } from './pages/Posts';
import type { Page } from './types/navigation';
import type { Geral } from './types/sheet';


const nav: { id: Page; label: string }[] = [
  { id: 'inicio', label: 'Início' }, { id: 'sobre', label: 'O projeto' }, { id: 'aulas', label: 'Aulas' },
  { id: 'posts', label: 'Blog' }, { id: 'galeria', label: 'Galeria' }, { id: 'faq', label: 'Dúvidas' },
];



export function App() {
  const [page, setPage] = useState<Page>('inicio');
  const go = (next: Page) => { setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const content = page === 'inicio' ? <Home go={go}/> : page === 'sobre' ? <About/> : page === 'aulas' ? <Classes go={go}/> : page === 'posts' ? <Posts go={go}/> : page === 'galeria' ? <Gallery/> : page === 'faq' ? <Faq/> : <Contact/>;
  return (
    <>
      <header className="topbar">
        <button className="brand" onClick={() => go('inicio')} aria-label="Ir para início">CIR<span>THESIS</span></button>
        <nav>
          {nav.map((item) => 
            <button className={page === item.id ? 'active' : ''} onClick={() => go(item.id)} key={item.id}>{item.label}</button>
          )}
        </nav>
        <button className="contact-button" onClick={() => go('contato')}>Contato</button>
      </header>
      {content}
      <footer>
        <button className="brand" onClick={() => go('inicio')}>CIR<span>THESIS</span></button>
          <p>Arte, movimento e encontro.</p>
          <p>© {new Date().getFullYear()} Cirthesis</p>
      </footer>
    </>
  )
}

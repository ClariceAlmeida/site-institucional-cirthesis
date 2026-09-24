import { useState } from 'react';
import { Cta } from '../components/Cta';
import { SectionTitle } from '../components/SectionTitle';
import { CSV_URL_POSTS } from '../config/sheets';
import { useSheetData } from '../hooks/useSheetData';
import type { Navigate } from '../types/navigation';
import type { Post } from '../types/sheet';
import ReactMarkdown from 'react-markdown';


const formatDate = (date: string) => {
  const simpleDate = date.match(/^(\d{1,2})\/(\d{1,2})$/);
  if (simpleDate) return { day: simpleDate[1].padStart(2, '0'), month: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'][Number(simpleDate[2]) - 1] || '' };
  const parsed = new Date(`${date}T12:00:00`);
  return Number.isNaN(parsed.valueOf()) ? { day: '—', month: '' } : { day: String(parsed.getDate()).padStart(2, '0'), month: parsed.toLocaleString('pt-BR', { month: 'long' }) };
};

export function Posts({ go }: { go: Navigate }) {
  const { data } = useSheetData<Post>(CSV_URL_POSTS);
  const entries = data.length ? data : "Nenhum post encontrado.".split('\n').map((line, index) => ({ titulo: line, data: '', post: '', url_foto_post: '', autor_do_post: '' }));
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  if (selectedPost) {
    const date = formatDate(selectedPost.data);
    const paragraphs = selectedPost.post.split(/\n{2,}/).filter(Boolean);
    return (
      <>
        <main className="wrap page post-reading">
          <button className="back-link" onClick={() => setSelectedPost(null)}>← Voltar para o blog</button>
          <article>
            <header>
              <p className="eyebrow">{date.day} · {date.month}</p>
              <h1>{selectedPost.titulo}</h1>
            </header>
            {selectedPost.url_foto_post && <img className="post-cover" src={selectedPost.url_foto_post} alt={selectedPost.titulo} />}
            <div className="post-content">
              <ReactMarkdown>{paragraphs.join('\n\n')}</ReactMarkdown>
            </div>
            {selectedPost.autor_do_post && (
              <div className="post-author">
                <p>Por {selectedPost.autor_do_post}</p>
              </div>
            )}
          </article>
        </main>;
      </>
    )
  }

  return (
    <main className="wrap page posts-page">
      <SectionTitle eyebrow="Blog" title="Novidades em movimento." text="Acompanhe aulas, oficinas, apresentações e histórias da Cirthesis." />
      <div className="post-grid">
        {entries.map((entry, index) => { 
          const date = formatDate(entry.data);
          const summary = entry.post.replace(/\s+/g, ' ').trim(); 
          return (
            <article className={`post-card pc${index % 3}`} key={`${entry.data}-${entry.titulo}`}>
              <button className="post-card-open" onClick={() => setSelectedPost(entry)} aria-label={`Ler ${entry.titulo}`}>
                <div className="post-image">{entry.url_foto_post ? <img src={entry.url_foto_post} alt="" /> : <span>✦</span>}</div>
                <div className="post-card-body">
                  <time>{date.day} <span>{date.month}</span></time>
                  <h2>{entry.titulo}</h2>
                  <p><ReactMarkdown>{summary}</ReactMarkdown></p>
                  <span className="read-more">Ler post <b>→</b></span>
                </div>
              </button>
            </article>
          );
        })}
      </div>
      <p className="center">
        <Cta onClick={() => go('contato')} children="Receber novidades" />
      </p>
    </main>
  );
}

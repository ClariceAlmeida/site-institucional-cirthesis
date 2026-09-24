import { SectionTitle } from '../components/SectionTitle';
import { CSV_URL_MIDIAS } from '../config/sheets';
import { useSheetData } from '../hooks/useSheetData';
import type { Midia } from '../types/sheet';

export function Gallery() {
  const { data: media } = useSheetData<Midia>(CSV_URL_MIDIAS);
  const items = media.length ? media : ['Sem imagens no momento'].map((titulo) => (
    { titulo, tipo:'imagem' as const, url:'', descricao:'' }
  ));
  
  const youtubeId = (url: string) => url.match(/(?:youtu\.be\/|v=|embed\/)([^?&/]+)/)?.[1];
  
  return ( 
    <main className="wrap page">
      <SectionTitle eyebrow="Memórias em movimento" title="Cada encontro deixa um traço." text="Registros das práticas, oficinas e apresentações da Cirthesis."/>
      <div className="gallery">
        {items.map((item, index) => 
          <figure className={`g${index % 6}`} key={`${item.titulo}-${index}`}>
            {item.url && item.tipo === 'imagem' ? 
              <img src={item.url} alt={item.descricao || item.titulo}/> : 
              item.url && item.tipo === 'video' && youtubeId(item.url) ? 
              <iframe src={`https://www.youtube.com/embed/${youtubeId(item.url)}`} title={item.titulo} allowFullScreen/> : 
              <div>
                <span>✦</span>
              </div>
            }
            <figcaption>{item.titulo}</figcaption>
          </figure>
        )}
      </div>
    </main>
  )
}

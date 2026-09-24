export interface Geral {
  frase_inicial?: string;
  sobre_projeto?: string;
  sobre_circo?: string;
  beneficios_circo?: string;
  como_as_aulas_funcionam?: string;
  tipo_da_midia?: string;
  foto_video_destaque?: string;
  alt_foto?: string;
}

export interface Aula {
  professor: string;
  modalidade: string;
  sobre_a_aula: string;
  dias: string;
  horarios: string;
  vagas: string;
}

export interface Post {
  data: string;
  titulo: string;
  post: string;
  url_foto_post?: string;
  autor_do_post?: string;
}

export interface Equipe {
  nome: string;
  papel: string;
  descricao: string;
  url_foto: string;
}

export interface Midia {
  titulo: string;
  tipo: 'imagem' | 'video';
  url: string;
  descricao?: string;
}

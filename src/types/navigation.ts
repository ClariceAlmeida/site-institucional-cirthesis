export type Page = 'inicio' | 'sobre' | 'aulas' | 'posts' | 'galeria' | 'faq' | 'contato';

export type Navigate = (page: Page) => void;

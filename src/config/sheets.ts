export const CSV_URL_GERAL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRirHxAcSMTcY-JES1ysXCjWWKXOwZLdHR-ygCDsKrnPcsVRLS4zr4GIuOi3HZAqRf9mOVhSBN65XZy/pub?gid=0&single=true&output=csv';

const SHEET_BASE_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRirHxAcSMTcY-JES1ysXCjWWKXOwZLdHR-ygCDsKrnPcsVRLS4zr4GIuOi3HZAqRf9mOVhSBN65XZy/pub';
const csvFromGid = (gid?: string) => gid ? `${SHEET_BASE_URL}?gid=${gid}&single=true&output=csv` : '';

export const CSV_URL_AULAS = csvFromGid(import.meta.env.VITE_GID_AULAS);
export const CSV_URL_POSTS = csvFromGid(import.meta.env.VITE_GID_POSTS);
export const CSV_URL_EQUIPE = csvFromGid(import.meta.env.VITE_GID_EQUIPE);
export const CSV_URL_MIDIAS = csvFromGid(import.meta.env.VITE_GID_MIDIAS);

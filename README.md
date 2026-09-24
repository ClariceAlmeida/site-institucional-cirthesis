# 🎪 Cirthesis - Website Institucional & Headless CMS

> **Projeto de Extensão Universitária**  
> **Curso:** Análise e Desenvolvimento de Sistemas (ADS)  
> **Instituição:** PUCPR / UFPR (Circo UFPR)  
> **Status:** 🟢 Online & Funcional

Plataforma web desenvolvida para o projeto de extensão **Cirthesis** com o objetivo de oferecer um canal oficial de comunicação para a comunidade de Curitiba e prover um gerenciamento de conteúdo autônomo e sem custos (R$ 0,00/mês) para a equipe do projeto.

---

## 🎯 Objetivos do Projeto

- **Comunidade Externa:** Acesso rápido, claro e responsivo à grade de horários, eventos, posts informativos e valores sociais das aulas de artes circenses.
- **Equipe Interna (Professores e Coordenação):** Gestão autônoma de conteúdo via **Google Sheets**, dispensando banco de dados pago, infraestrutura complexa ou conhecimentos em programação.
- **Formação Acadêmica:** Aplicação prática de conceitos de Engenharia de Software, Interface Homem-Computador (IHC), arquitetura desacoplada e consumo de APIs.

---

## 🛠️ Stack Tecnológica

- **Front-end:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **CMS Headless:** [Google Sheets API](https://developers.google.com/sheets/api) (dados tabulares convertidos em JSON)
- **Data Parsing:** [PapaParse](https://www.papaparse.com/) (parsing de CSV em tempo real)
- **Formatação de Conteúdo:** [React Markdown](https://github.com/remarkjs/react-markdown)
- **Hospedagem:** [Vercel](https://vercel.app/)

---

## 📊 Arquitetura de Dados (Headless CMS via Google Sheets)

Para garantir sustentabilidade financeira e usabilidade pela equipe do projeto, a solução utiliza abas do Google Sheets como tabelas de dados:

- `Geral`: Configurações institucionais, avisos e contatos.
- `Aula`: Grade de horários, dias e turmas disponíveis.
- `Post`: Feed de publicações com suporte a formatação em Markdown.
- `Equipe`: Quadro de professores, monitores e coordenação.
-  `Mídias`: Imagens e vídeos de aulas e outros conteúdos.

---

## 🚀 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/ClariceAlmeida/site-institucional-cirthesis.git](https://github.com/ClariceAlmeida/site-institucional-cirthesis.git)
   cd cirthesis

# LabIA — Artificial Intelligence Research Lab

Site institucional do grupo de pesquisa LabIA (Laboratório de Inteligência Artificial) do Instituto de Computação da UFBA. Disponível em <https://labia.ufba.br>.

## Como editar o site

Todas as informações do site ficam em arquivos **CSV** dentro de [`src/_data/csv/`](./src/_data/csv). Para alterar qualquer conteúdo, edite o CSV correspondente e faça push. Uma GitHub Action compila e publica o site automaticamente.

### `students.csv` — Alunos atuais e ex-alunos

Cada linha é um aluno ou ex-aluno. As informações aparecem na página [**Team**](https://labia.ufba.br/pages/team), nas seções *Current Students* e *Former Members*. Os alunos são ordenados alfabeticamente por nome em tempo de compilação.

| Coluna | Descrição | Valores possíveis |
|---|---|---|
| `status` | Situação do aluno | `current` (ativo) ou `alumni` (ex-aluno) |
| `level` | Nível acadêmico | `phd`, `msc`, `undergrad` |
| `name` | Nome completo | — |
| `photo` | Nome do arquivo em `assets/img/team/` | — |
| `lattes` | URL do currículo Lattes | — |
| `email` | E-mail de contato | — |

### `collaborators.csv` — Colaboradores internacionais

Cada linha é um colaborador internacional. Aparece na página [**Team**](https://labia.ufba.br/pages/team), seção *International Collaborators*. Os colaboradores são ordenados alfabeticamente por nome em tempo de compilação.

| Coluna | Descrição |
|---|---|
| `name` | Nome completo |
| `photo` | Nome do arquivo em `assets/img/team/` |
| `country` | País em inglês (ex: `Portugal`, `New Zealand`) |
| `flag` | Emoji da bandeira (ex: `🇵🇹`, `🇳🇿`) |
| `scholar` | URL do Google Scholar |

### `faculty.csv` — Docentes

Cada linha é um docente. As informações aparecem na [**home**](https://labia.ufba.br) (cards de preview), na página [**Team**](https://labia.ufba.br/pages/team) (perfis completos), na página [**Publications**](https://labia.ufba.br/pages/publications) (links acadêmicos) e na página [**Contact**](https://labia.ufba.br/pages/contact) (emails).

| Coluna | Descrição | Onde aparece |
|---|---|---|
| `name` | Nome completo | Em todas as páginas |
| `photo` | Nome do arquivo em `assets/img/team/` | Avatar em todas as páginas |
| `role` | Cargo (ex: `Assistant Professor`) | Home, Team |
| `department` | Departamento (ex: `Department of Computer Science`) | Team (perfil completo) |
| `researchArea` | Área principal (ex: `Computational Intelligence`, `Optimization`) | Team, Publications, Contact |
| `email` | E-mail institucional | Team, Contact |
| `bio` | Biografia completa | Team (perfil completo) |
| `bioShort` | Biografia resumida (1–2 frases) | Home (card de preview) |
| `scholar` | URL do Google Scholar | Home, Team, Publications |
| `lattes` | URL do Lattes | Home, Team, Publications |

### `areas.csv` — Áreas de pesquisa

Aparece na [**home**](https://labia.ufba.br) (4 áreas principais) e na página [**Research**](https://labia.ufba.br/pages/research) (todas as 6 áreas com descrições expandidas).

| Coluna | Descrição |
|---|---|
| `name` | Nome da área (ex: `Machine Learning`) |
| `icon` | Emoji representativo |
| `iconClass` | Classe CSS para cor do ícone. Use `ai`, `ml`, `ds`, `opt` para as cores existentes. Deixe vazio para usar `iconStyle`. |
| `iconStyle` | Estilo CSS inline para o ícone. Use quando `iconClass` não cobre a cor desejada. Ex: `background: rgba(244, 63, 94, 0.1); color: #f43f5e;` |
| `description` | Descrição da área (1–2 frases) |
| `tags` | Tópicos separados por `;` (ex: `Time Series;Clustering;Text Mining`) |

As 4 primeiras áreas do CSV aparecem na home. Todas as áreas aparecem na página Research.

### `applications.csv` — Domínios de aplicação

Aparece na [**home**](https://labia.ufba.br) e na página [**Research**](https://labia.ufba.br/pages/research), seção *Application Areas*.

| Coluna | Descrição |
|---|---|
| `emoji` | Emoji representativo |
| `name` | Nome do domínio (ex: `Medicine`) |
| `description` | Descrição (1–2 frases) |

### Adicionar foto de uma pessoa

Coloque o arquivo `.webp` em `src/assets/img/team/` e referencie o nome exato do arquivo na coluna `photo` do CSV correspondente.

---

## Desenvolvimento local

### Requisitos

- [Node.js](https://nodejs.org/) >= 18

### Instalação

```bash
npm install
```

### Servidor local

```bash
npm run dev
```

Acesse `http://localhost:8080`. Alterações nos templates e CSVs são refletidas automaticamente.

### Build

```bash
npm run build
```

Gera o site estático em `_site/`.

---

## Stack

- [Eleventy (11ty)](https://www.11ty.dev/) — gerador de site estático (SSG)
- [Nunjucks](https://mozilla.github.io/nunjucks/) — linguagem de templates
- CSV como fonte de dados (editável por qualquer software de planilhas: (ex.: Google Sheets, Excel, LibreOffice))

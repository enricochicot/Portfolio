# Portfólio

Portfólio pessoal de Enrico Leite, implementado como uma aplicação web de página única (SPA) com React, React Router e Vite. O site apresenta o perfil, as tecnologias, os projetos e os canais de contato.

## Requisitos

- Node.js e npm compatíveis com o Vite 5.

## Desenvolvimento

```bash
npm install
npm run dev
```

Outros comandos disponíveis:

```bash
npm run build    # gera a versão de produção em dist/
npm run preview  # serve localmente a versão gerada
```

## Rotas

| Caminho | Página |
| --- | --- |
| `/` | Apresentação e atalhos para projetos e contato |
| `/sobre` | Formação, localização, tecnologias e hobbies |
| `/projetos` | Projetos com links para o GitHub |
| `/contato` | E-mail e perfil do GitHub |

O conteúdo de perfil e projetos é mantido em `src/data.js`. A aplicação não possui backend, persistência, formulário de envio ou autenticação.

## Estrutura

- [`src/README.md`](./src/README.md): composição, dados e estilos da aplicação.
- [`src/components/README.md`](./src/components/README.md): navegação e rodapé compartilhados.
- [`src/pages/README.md`](./src/pages/README.md): páginas e rotas.
- [`docs/README.md`](./docs/README.md): índice dos documentos de arquitetura e objetivo.

## Documentação

- [Arquitetura do Sistema](./docs/SYSTEM_ARCHITECTURE.md)
- [Objetivo do Sistema](./docs/SYSTEM_OBJECTIVE.md)

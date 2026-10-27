# Módulo `src`

Este diretório contém a aplicação React: inicialização, composição das rotas, dados que alimentam as páginas, estilos globais e os módulos de componentes e páginas.

## Arquivos

- `main.jsx`: cria a raiz React, ativa `StrictMode`, configura `BrowserRouter`, importa `App` e o CSS.
- `App.jsx`: monta Navbar, área principal, rotas e Footer.
- `data.js`: exporta `profile` e `projects`; edite aqui o conteúdo atualmente exibido pelo site.
- `index.css`: estilos e tokens globais. O CSS é carregado por `main.jsx`.
- `components/`: elementos compartilhados entre páginas.
- `pages/`: conteúdo associado às rotas.

## Regras locais

- Use React Router para navegação interna.
- Mantenha dados compartilhados em `data.js`, em vez de duplicá-los em páginas.
- Preserve os campos consumidos pelas páginas (`profile` e objetos `projects`) ao alterar os dados.
- A aplicação e os textos atuais usam português brasileiro.
- Não há API, estado global, backend ou testes configurados neste módulo.

Consulte [Arquitetura do Sistema](../docs/SYSTEM_ARCHITECTURE.md) e [Objetivo do Sistema](../docs/SYSTEM_OBJECTIVE.md) para contexto transversal.

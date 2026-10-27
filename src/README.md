# Módulo `src`

Este diretório contém os módulos da aplicação. Para detalhes de arquitetura, rotas, dependências e limites técnicos, consulte [Arquitetura do Sistema](../docs/SYSTEM_ARCHITECTURE.md).

## Arquivos

- `main.jsx`: cria a raiz React, ativa `StrictMode`, configura `BrowserRouter`, importa `App` e o CSS.
- `App.jsx`: monta Navbar, área principal, rotas e Footer.
- `data.js`: exporta `profile` e `projects`; edite aqui o conteúdo atualmente exibido pelo site.
- `index.css`: estilos e tokens globais. O CSS é carregado por `main.jsx`.
- `components/`: elementos compartilhados entre páginas.
- `pages/`: conteúdo associado às rotas.

Para o propósito do produto e os fluxos disponíveis, consulte [Objetivo do Sistema](../docs/SYSTEM_OBJECTIVE.md).

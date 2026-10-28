# Módulo `src`

Este diretório contém os módulos da aplicação. Para detalhes de arquitetura, rotas, dependências e limites técnicos, consulte [Arquitetura do Sistema](../docs/SYSTEM_ARCHITECTURE.md).

## Arquivos

- `main.jsx`: cria a raiz React, ativa `StrictMode`, configura `BrowserRouter`, importa `App` e o CSS.
- `App.jsx`: monta Navbar, área principal, rotas e Footer.
- `data.js`: exporta `profile` e `projects`; edite aqui o conteúdo atualmente exibido pelo site.
- `App.css`: tokens (variáveis CSS), reset e layout base, carregado por `main.jsx`. Cada página e componente tem seu próprio CSS ao lado do `.jsx`, com seletores escopados pela classe raiz da tela (ex.: `.home-page`).
- `components/`: elementos compartilhados entre páginas.
- `pages/`: conteúdo associado às rotas.

Para o propósito do produto e os fluxos disponíveis, consulte [Objetivo do Sistema](../docs/SYSTEM_OBJECTIVE.md).

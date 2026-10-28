# Componentes compartilhados

Este módulo contém elementos de interface usados ao redor das páginas:

- `Navbar.jsx`: cabeçalho com nome do perfil e links para início, sobre, projetos e contato. Usa `NavLink` para destacar a rota ativa e `Link` para o logotipo.
- `Footer.jsx`: rodapé com o ano atual e o nome importado de `profile`.

Ambos consomem `profile` de `../data.js`. `App.jsx` os renderiza fora da seleção de rotas, portanto aparecem também quando a rota não é encontrada.

Em telas de até 760 px, a navegação fica em um menu acionado por botão. O menu fecha ao selecionar um link ou pressionar Escape.

Ao alterar a navegação, mantenha os caminhos sincronizados com as rotas de `src/App.jsx`. Cada componente importa seu próprio CSS (`Navbar.css`, `Footer.css`).

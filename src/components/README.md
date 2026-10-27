# Componentes compartilhados

Este módulo contém elementos de interface usados ao redor das páginas:

- `Navbar.jsx`: cabeçalho com nome do perfil e links para início, sobre, projetos e contato. Usa `NavLink` para destacar a rota ativa e `Link` para o logotipo.
- `Footer.jsx`: rodapé com o ano atual e o nome importado de `profile`.

Ambos consomem `profile` de `../data.js`. `App.jsx` os renderiza fora da seleção de rotas, portanto aparecem também quando a rota não é encontrada.

Ao alterar a navegação, mantenha os caminhos sincronizados com as rotas de `src/App.jsx`. Os estilos correspondentes estão em `src/index.css`.

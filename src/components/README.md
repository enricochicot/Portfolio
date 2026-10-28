# Componentes compartilhados

Este módulo contém elementos de interface usados ao redor das páginas:

- `Navbar.jsx`: cabeçalho com nome do perfil, links para início, sobre, projetos e contato e controles para alternar idioma (BR/EN) e tema (dark/light). Usa `NavLink` para destacar a rota ativa e `Link` para o logotipo.
- `Footer.jsx`: rodapé com o ano atual e o nome importado de `profile`; os rótulos acompanham o idioma selecionado.

`Footer.jsx` consome `profile` de `../data.js`. `App.jsx` renderiza ambos fora da seleção de rotas, portanto aparecem também quando a rota não é encontrada.

`App.jsx` controla o idioma e o tema e fornece os textos localizados aos componentes e páginas. O idioma padrão é português brasileiro e o tema padrão é escuro.

Em telas de até 760 px, a navegação fica em um menu acionado por botão. O menu fecha ao selecionar um link ou pressionar Escape.

Ao alterar a navegação, mantenha os caminhos sincronizados com as rotas de `src/App.jsx`. Cada componente importa seu próprio CSS (`Navbar.css`, `Footer.css`).

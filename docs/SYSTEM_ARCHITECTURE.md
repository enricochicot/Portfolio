# Arquitetura do Sistema

## 1. Escopo e estado atual

O sistema é um site de portfólio pessoal, entregue como aplicação web de página única (SPA). O navegador recebe o ponto de entrada HTML e executa uma aplicação React; as rotas são resolvidas no cliente. Perfil, habilidades, hobbies e projetos são dados estáticos importados de `src/data.js`.

O código não implementa servidor de aplicação, API, banco de dados, autenticação, autorização, telemetria, testes automatizados ou integração de envio de mensagens. O contato é feito por links `mailto:` e GitHub. Portanto, não há operações de escrita nem estado de negócio persistido.

## 2. Componentes e responsabilidades

| Área | Arquivos | Responsabilidade |
| --- | --- | --- |
| Inicialização | `index.html`, `src/main.jsx` | Define o documento HTML, o elemento `#root`, cria a raiz React, ativa `React.StrictMode`, instala `BrowserRouter` e importa o CSS global. |
| Composição e rotas | `src/App.jsx` | Mantém Navbar e Footer ao redor do conteúdo, associa os caminhos às páginas e controla os idiomas e temas disponíveis. Inclui uma resposta simples para caminhos não reconhecidos. |
| Componentes compartilhados | `src/components/Navbar.jsx`, `src/components/Footer.jsx` | Apresenta a navegação entre rotas, a identidade do perfil e o rodapé com ano corrente. |
| Páginas | `src/pages/<Tela>/<Tela>.jsx`; especificações em `docs/specs/<tela>.md` | Cada tela mantém o componente no código e sua especificação em Markdown fora de `src`. |
| Conteúdo | `src/data.js` | Exporta os objetos `profile` e `projects`, consumidos pelas páginas e componentes. |
| Estilos | `src/App.css` e um `.css` por página/componente | `App.css` define tokens e layout base; cada tela e componente tem seu CSS escopado.|
| Build | `vite.config.js`, `package.json` | Configura Vite com o plugin React e scripts de desenvolvimento, build e preview. |
| Idiomas | `src/translations.js` | Mantém os textos da interface em português brasileiro e inglês, selecionados pelos controles da Navbar. |

## 3. Dependências

Versões declaradas em `package.json`:

### Produção

- `react` `^18.3.1` e `react-dom` `^18.3.1`: componentes e renderização React.
- `react-router-dom` `^6.26.2`: roteamento do lado do cliente com `BrowserRouter`, `Routes`, `Route`, `Link` e `NavLink`.

### Desenvolvimento e build

- `vite` `^5.4.8`: servidor de desenvolvimento e empacotamento.
- `@vitejs/plugin-react` `^4.3.1`: integração do React com Vite.

O projeto declara `"type": "module"` e usa imports/exports ES Modules. Não há biblioteca de componentes, solução de estado global, cliente HTTP ou dependência de formulário declarados.

## 4. Inicialização e fluxo de renderização

1. `index.html` define o idioma `pt-BR`, metadados de viewport, título e o elemento `<div id="root">`.
2. O documento carrega `src/main.jsx` como módulo.
3. `main.jsx` cria a raiz usando `ReactDOM.createRoot`, aplica `React.StrictMode`, envolve a aplicação em `BrowserRouter` e importa `App.css`.
4. `App.jsx` renderiza o cabeçalho, o conteúdo da rota dentro de `main.container` e o rodapé.
5. O React Router seleciona a página conforme o caminho atual. Uma URL sem correspondência exibe “Página não encontrada”.
6. `App.jsx` compartilha o idioma ativo com as páginas e atualiza o atributo `lang` do documento; o tema selecionado é aplicado em `data-theme` no elemento raiz.
7. As páginas leem o conteúdo estático de `data.js`; não há requisição remota ou carregamento assíncrono.

## 5. Rotas e navegação

| Caminho | Componente | Comportamento |
| --- | --- | --- |
| `/` | `src/pages/Home/Home.jsx` (`Home`) | Exibe nome, função, foco e links internos para projetos e contato. |
| `/sobre` | `src/pages/About/About.jsx` (`About`) | Exibe formação, função, localização, foco, habilidades e hobbies. |
| `/projetos` | `src/pages/Projects/Projects.jsx` (`Projects`) | Percorre a coleção `projects` e apresenta cartões com título, descrição, tecnologia e link externo ao GitHub. |
| `/contato` | `src/pages/Contact/Contact.jsx` (`Contact`) | Exibe link de e-mail `mailto:` e link externo para GitHub. |
| `*` | elemento inline em `App` | Exibe uma mensagem básica de página não encontrada. |

O menu usa `NavLink`, com `end` aplicado à rota `/` para que a indicação de ativo não corresponda a todas as subrotas. Os botões das páginas usam `Link` para navegação interna, evitando navegação externa desnecessária.

`BrowserRouter` usa a History API do navegador. O código-fonte não configura regras de fallback no servidor de hospedagem; uma implantação deve encaminhar caminhos da SPA para `index.html` para que o acesso direto a rotas como `/sobre` funcione.

## 6. Dados e contratos observáveis

`profile` é um objeto único com `name`, `role`, `location`, `education`, `focus`, `email`, `github`, `hobbies` e `skills`. `hobbies` e `skills` são arrays de texto.

`projects` é uma lista de objetos com `title`, `description`, `tech` e `link`. `Projects` usa `title` como chave React, portanto os títulos precisam ser únicos na lista. O conteúdo é mantido no código-fonte e suas alterações exigem novo build e publicação.

Não há validação de schema em tempo de compilação ou execução: os dados são JavaScript sem TypeScript ou validação externa. Os componentes assumem a presença dos campos que consomem.

## 7. Padrões e regras técnicas extraídas

- Componentes React são funções e exportações padrão; `profile` e `projects` são exportações nomeadas.
- Páginas e componentes compartilhados ficam separados em `src/pages/` e `src/components/`.
- Cada página e componente importa seu próprio CSS, escopado pela classe raiz da tela; só tokens e layout base ficam em `src/App.css`.
- As cores globais são expostas por custom properties em `:root` (`--bg`, `--surface`, `--text`, `--muted`, `--accent`).
- O idioma inicial é português brasileiro e pode ser alternado para inglês; os textos da interface são mantidos em `src/translations.js`.
- O tema inicial é escuro e pode ser alternado para claro; os tokens de tema ficam em `src/App.css`.
- Links externos de projetos e GitHub abrem nova aba (`target="_blank"`) e usam `rel="noreferrer"`. Links internos usam React Router.
- A configuração observável do Vite consiste no plugin React; não há aliases, variáveis de ambiente ou configuração adicional declarada.
- `.gitignore` exclui `node_modules`, `dist` e `.DS_Store`.
- Os únicos scripts de pacote são `dev`, `build` e `preview`; não há script de teste ou lint configurado.

## 8. Build e validação

- `npm run dev`: inicia o servidor de desenvolvimento Vite.
- `npm run build`: gera os artefatos de produção em `dist/`.
- `npm run preview`: serve localmente os artefatos gerados.

Como não existem testes automatizados ou verificações de tipos declaradas, mudanças em navegação, conteúdo e layout devem ser verificadas com o build e uma conferência manual das rotas relevantes.

## 9. Limites e considerações para evolução

- O sistema é somente de apresentação e direcionamento a serviços externos; mensagens não são recebidas pela aplicação.
- A hospedagem deve suportar fallback de SPA para URLs com `BrowserRouter`.
- Conteúdo editável por usuário, publicação via CMS, armazenamento e processamento de contato exigiriam serviços e requisitos que não existem no código atual.
- Acessibilidade, SEO avançado, telemetria e testes não têm configuração dedicada identificável na implementação; devem ser avaliados ao evoluir o produto, sem presumir que já estejam cobertos.

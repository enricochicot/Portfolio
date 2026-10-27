# Páginas

Cada componente deste diretório corresponde a uma rota configurada em `src/App.jsx`:

| Arquivo | Rota | Responsabilidade |
| --- | --- | --- |
| `Home.jsx` | `/` | Apresentação e links internos para projetos e contato. |
| `About.jsx` | `/sobre` | Formação, função, localização, foco, habilidades e hobbies. |
| `Projects.jsx` | `/projetos` | Lista de projetos e links externos para seus repositórios GitHub. |
| `Contact.jsx` | `/contato` | Links `mailto:` e para o perfil GitHub. |

As páginas são componentes React funcionais e importam conteúdo de `../data.js`; a apresentação visual reutiliza classes globais de `src/index.css`. Links entre páginas devem usar React Router. Links para serviços externos podem navegar diretamente ao destino.

Não há carregamento de API ou estado de formulário. O contato encaminha o visitante para fora da aplicação.

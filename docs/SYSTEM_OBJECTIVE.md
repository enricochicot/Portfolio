# Objetivo do Sistema

## 1. Propósito

O sistema apresenta Enrico Leite e seu trabalho em um portfólio público. A implementação atual reúne informações pessoais e profissionais, habilidades, projetos com links para seus repositórios e meios externos de contato.

O propósito de negócio inferível é apoiar a divulgação do perfil profissional e facilitar que visitantes conheçam os projetos ou iniciem contato. O código não especifica metas comerciais, métricas de conversão, público prioritário ou processo de recrutamento; essas interpretações devem ser confirmadas antes de orientar funcionalidades que dependam delas.

## 2. Atores

### Visitante

Pessoa que acessa o site para conhecer o perfil, a experiência declarada, projetos ou formas de contato. Pode ser recrutador, colaborador, cliente potencial ou outro visitante; esses perfis são possibilidades, não segmentos definidos pelo código.

### Proprietário do portfólio

Enrico Leite, cujos dados são exibidos. No estado atual, a manutenção do conteúdo é feita por alteração do código em `src/data.js` e publicação de uma nova versão; não existe painel administrativo.

### Serviços externos

- GitHub: destino dos links de projetos e do perfil.
- Aplicativo de e-mail do visitante: destino do link `mailto:`.

São destinos de navegação, não integrações controladas ou monitoradas pela aplicação.

## 3. Fluxos disponíveis

1. **Conhecer a apresentação:** visitante abre `/`, vê nome, função e foco e pode seguir para projetos ou contato.
2. **Conhecer o perfil:** visitante abre `/sobre` e consulta formação, localização, foco, tecnologias e hobbies.
3. **Explorar projetos:** visitante abre `/projetos`, consulta cada resumo e pode abrir o repositório correspondente no GitHub.
4. **Iniciar contato:** visitante abre `/contato` e escolhe o e-mail ou o perfil do GitHub. O envio ou a conversa ocorre fora do sistema.
5. **Navegar pelo site:** visitante usa o menu compartilhado para alternar entre as quatro rotas; o rodapé apresenta o ano corrente e o nome do proprietário.
6. **Acessar rota não cadastrada:** a aplicação apresenta a mensagem “Página não encontrada”.

## 4. Capacidades e limites funcionais

### Capacidades existentes

- Apresentar informações de perfil, habilidades e interesses.
- Listar projetos, suas tecnologias e descrições resumidas.
- Direcionar visitantes para repositórios GitHub e canais de contato externos.
- Fornecer navegação cliente entre páginas e uma resposta básica para rotas desconhecidas.

### Fora do escopo atual do código

- Envio e armazenamento de mensagens ou formulários.
- Cadastro, login, permissões ou área administrativa.
- Edição de conteúdo sem alteração e publicação do código.
- Busca, filtros de projetos, métricas de uso ou personalização.
- Integrações de backend, API ou banco de dados.
- Confirmação de que links externos existem ou de que uma mensagem foi recebida.

Esses limites descrevem a implementação observada; não são decisões permanentes sobre o produto.

## 5. Conteúdo apresentado

O perfil expõe nome, função, localização, formação, foco profissional, e-mail, GitHub, hobbies e habilidades. Cada projeto possui título, descrição, tecnologia e URL. A origem atual de todos esses dados é estática e única: `src/data.js`.

O idioma do documento está definido como `pt-BR`, e os textos de navegação e conteúdo estão em português. Uma futura expansão de idiomas deve tratar tanto os textos da interface quanto os dados de conteúdo.

## 6. Princípios para futuras funcionalidades

- Preservar a função central de apresentar o perfil e facilitar o acesso aos projetos e contatos.
- Distinguir navegação e contato externos de funcionalidades processadas pelo próprio site.
- Antes de adicionar formulário, CMS, análise ou outra integração, definir necessidade de negócio, responsável, dados tratados e comportamento esperado; nada disso está definido pela implementação existente.
- Manter conteúdo e apresentação coerentes entre páginas que compartilham os mesmos dados de perfil.
- Tratar experiência móvel, acessibilidade, privacidade e comportamento de hospedagem como requisitos a especificar e validar nas evoluções, não como garantias já documentadas pelo código.

## 7. Questões de negócio ainda não respondidas

O código não determina o público principal, a ação prioritária esperada do visitante, critérios para incluir ou destacar projetos, frequência de atualização do conteúdo, idiomas futuros ou indicadores de sucesso. Essas decisões precisam de validação com o proprietário do portfólio antes de se tornarem requisitos.

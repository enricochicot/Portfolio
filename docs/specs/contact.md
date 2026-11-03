## Tela de contato

A tela de contato ajuda visitantes em geral a escolher como iniciar uma conversa com o autor do portfólio. E-mail e GitHub são as duas opções disponíveis e devem ter o mesmo destaque.

### Seções da Tela

- **Título e introdução:** Apresentam a tela e orientam o visitante a escolher um canal.
- **Canais de contato:** Exibem e-mail e GitHub com rótulos claros e igual prioridade visual.
- **Rodapé:** Mantém o rodapé compartilhado do site.

### Comportamento

- O e-mail usa o endereço de `profile.email` e um link `mailto:`.
- O GitHub usa a URL de `profile.github` e abre em uma nova aba com `rel="noreferrer"`.
- Os links devem permanecer identificáveis e utilizáveis por teclado, com foco visível.
- A tela não oferece formulário nem envia ou armazena mensagens; o contato acontece fora do site.

### Estilização e compatibilidade

- Em telas largas, organiza título e introdução ao lado de duas linhas de contato destacadas; e-mail e GitHub mantêm a mesma prioridade visual.
- Em telas estreitas, empilha a introdução e as opções, preservando a leitura e a área acionável dos links.
- Segue os tokens globais e os estilos próprios da tela em `src/pages/Contact/Contact.css`.
- Mantém o layout responsivo e a compatibilidade com os temas claro e escuro.
- Todo o conteúdo textual possui versões em português brasileiro e inglês em `src/translations.js`.

### Fora de escopo

- Não adicionar outros canais de contato, como localização ou LinkedIn, sem novos requisitos e dados.
- Não incluir formulário, integração de envio, armazenamento de mensagens ou confirmação de recebimento.

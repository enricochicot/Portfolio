---
name: portfolio-context
description: "Use ao implementar, revisar ou documentar este portfólio, especialmente em tarefas sobre páginas React, navegação, conteúdo, estilos ou build."
---

# Contexto do portfólio

Use esta skill para trabalhar neste repositório. Baseie mudanças na implementação existente e evite presumir funcionalidades que não estejam presentes no código.

## Antes de começar

1. Leia `README.md` para entender os comandos e localizar a documentação.
2. Consulte `docs/SYSTEM_ARCHITECTURE.md` para detalhes técnicos e `docs/SYSTEM_OBJECTIVE.md` para propósito, atores, fluxos e limites do produto.
3. Leia o README do diretório afetado e inspecione os arquivos de código relacionados antes de editar.

## Orientações de implementação

- Faça a menor alteração completa que atenda ao pedido e siga os padrões encontrados no código e na documentação canônica.
- Ao alterar rotas, confira a consistência entre a configuração de rotas e os links de navegação.
- Evite duplicar conteúdo compartilhado; identifique a fonte de dados ou componente existente antes de criar outro.
- Não adicione dependências ou infraestrutura sem necessidade demonstrada pelo requisito.
- Atualize a documentação diretamente relacionada quando o comportamento ou a arquitetura mudar.

## Design e interface

- Para criar, revisar ou alterar a interface, siga a skill instalada [Impeccable](../impeccable/SKILL.md) e consulte a referência específica do comando adequado; não duplique aqui as regras detalhadas da biblioteca.
- Em tarefas de interface, siga o fluxo de preparação da skill, incluindo a execução de `scripts/impeccable context` uma vez por sessão e a leitura de `reference/craft-floor.md` imediatamente antes de editar UI.
- Escolha o comando conforme a necessidade, como `layout` para estrutura e espaçamento, `typeset` para tipografia, `audit` para verificações técnicas ou `polish` para refinamento final.
- Para a apresentação do portfólio e a vitrine de projetos, use o modo “Experience”; nas demais superfícies, determine o modo conforme a tarefa e a orientação do Impeccable. Preserve o conteúdo factual e o português brasileiro definidos no projeto; reutilize os tokens CSS e padrões existentes, especialmente os de `src/index.css`.
- Impeccable fornece orientação e ferramentas para agentes de design; não é uma dependência de interface em tempo de execução. Não adicione um pacote npm de UI só por causa desta integração.

## Validação

1. Para mudanças de código, execute `npm run build`.
2. Se a alteração afetar navegação ou comportamento visual, confira manualmente as páginas relevantes.
3. Informe o que mudou e sinalize validações que não puderam ser concluídas.

Os documentos de arquitetura e objetivo são a referência detalhada do sistema. Mantenha nesta skill somente orientações de trabalho para o agente, evitando repetir seu conteúdo.

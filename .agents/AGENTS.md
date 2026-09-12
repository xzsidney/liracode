# Regras Operacionais e Diretrizes (LiraCode)

## Proteção Contra Perda de Dados
A IA está PROIBIDA de executar ações destrutivas no banco de dados e arquivos de configuração, tais como:
- Executar queries de `DROP TABLE`, `TRUNCATE` ou `DELETE` em massa.
- Executar comandos de sincronização destrutiva (`force: true`, `--accept-data-loss` ou reset de migrações).

**EXCEÇÃO:** A única forma de realizar essas ações é caso a IA siga OBRIGATORIAMENTE os dois passos abaixo:
1. Parar a execução e enviar um alerta destacado avisando o usuário sobre a possível perda de dados.
2. Aguardar o usuário responder no chat com uma autorização explícita confirmando a destruição dos dados.

---

## Execução FULL de Planos (Override de Permissão)
Se o usuário digitar comandos autorizando o modo full (ex: `"executar o [nome do plano] full"` ou `"Pode executar em modo full"`), a IA recebe **SINAL VERDE ABSOLUTO** para iniciar a execução do plano imediatamente e de forma autônoma, sem pedir confirmações intermediárias no chat.
- Esta regra autoriza commits e push direto ao terminar as tarefas, sem necessidade de perguntar novamente.
- **EXCEÇÃO: PROTEÇÃO DE DADOS.** Esta regra **NÃO** sobrescreve a "Proteção Contra Perda de Dados". Operações destrutivas continuam exigindo autorização explícita prévia.

---

## Documentação Contínua da Arquitetura e do Conceito Central
Sempre que a IA construir ou modificar funcionalidades do projeto, é **OBRIGATÓRIO** atualizar imediatamente os arquivos na pasta `doc/`:
1. `doc/CONCEITO_CENTRAL.md`: Manter atualizada a visão do produto (Portal dos Pais), estrutura pedagógica de 12 semanas, objetivos familiares e diretrizes educacionais.
2. `doc/BACKEND_ROTAS.md`: Mapear a localização de cada rota REST ou renderização de views, detalhando parâmetros e dados fornecidos.
3. `doc/BANCO_DE_DADOS.md`: Caso venha a existir banco de dados no futuro, mapear tabelas, campos e relacionamentos.

---

## Identidade Visual & Paleta de Cores Oficial
Toda a interface do usuário (UI/UX) do LiraCode deve seguir estritamente a seguinte paleta de cores nobre e temática:
- 🍷 **Cor Primária:** Bordô / Vinho Nobre (`#800020`, `#9b111e`, `#6b0f24`, `#4a0e17`) — Botões principais, elementos de destaque, bordas nobres e acentos heroicos.
- 🌌 **Cor Secundária:** Azul Real (`#0f172a`, `#1e3a8a`, `#1d4ed8`, `#2563eb`) — Fundos profundos, superfícies de cards, barras de progresso e elementos arcanos/táticos.
- 👑 **Cor Terciária:** Dourado Imperial (`#d4af37`, `#f59e0b`, `#fbbf24`, `#facc15`) — Ouro, títulos de honra, estrelas de progresso, conquistas, insígnias e detalhes de prestígio.

---

## Arquitetura Técnica do LiraCode
- **Backend:** Node.js com Express e EJS para renderização server-side rápida e manutenível.
- **Frontend:** HTML5 semântico, CSS3 moderno (Flexbox/Grid, variáveis CSS, totalmente responsivo mobile-first).
- **Dados:** Fonte central de dados em `src/data/` permitindo controle ágil da semana ativa e módulos.

---

## Regra de Ferramentas
A IA está proibida de usar comandos de terminal (como `powershell`, `cat`, etc) para ler ou buscar conteúdos de arquivos. Ela DEVE obrigatoriamente usar suas ferramentas nativas (`view_file`, `grep_search`).

# 📡 LiraCode — Rotas do Backend

Este documento mapeia todas as rotas servidas pela aplicação Node.js / Express do LiraCode.

---

## 1. Rotas Web (Renderização Server-Side / EJS)

### `GET /`
- **Descrição:** Home page do Portal dos Pais.
- **Controlador/Handler:** Renderiza `views/index.ejs`.
- **Dados Fornecidos à View:**
  - `curso`: Informações gerais (título, público-alvo, duração de 12 semanas, formato de 90 min).
  - `semanaAtual`: Objeto da semana em destaque selecionada (número, módulo, tema, objetivos, projeto prático, dica para os pais).
  - `modulos`: Lista dos 4 módulos completos e suas respectivas semanas detalhadas com status (`concluida`, `em-andamento`, `proxima`).
  - `dicasFamilia`: Coleção de orientações e conselhos pedagógicos para os pais.
- **Resposta:** HTML completo renderizado com status `200 OK`.

---

## 2. Rotas de Arquivos Estáticos
- **Prefixo:** `/css`, `/js`, `/images`
- **Diretório servido:** `public/`
- **Mapeamento:** `express.static(path.join(__dirname, '../public'))`

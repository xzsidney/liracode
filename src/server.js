const express = require('express');
const path = require('path');
const {
  SEMANA_ATUAL,
  dadosCurso,
  estudantesOficiais,
  familiasConectadas,
  galeriaMomentos,
  perguntasAlmoco,
  modulos,
  dicasFamilia,
  obterSemanasComStatus,
  obterSemanaAtual
} = require('./data/cronograma');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do motor de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Arquivos estáticos (CSS, JS, Imagens)
app.use(express.static(path.join(__dirname, '../public')));

// Helper para cálculo de métricas de progresso
function calcularProgresso(semanaNumero) {
  const totalSemanas = 12;
  const concluidas = Math.max(0, semanaNumero - 1);
  const porcentagemGeral = Math.round((concluidas / totalSemanas) * 100);
  return {
    totalSemanas,
    concluidas,
    porcentagemGeral,
    statusTexto: `${concluidas} de ${totalSemanas} aulas concluídas (${porcentagemGeral}%)`
  };
}

// 1. ROTA PRINCIPAL: Home Leve, Acolhedora e Nobre
app.get('/', (req, res) => {
  const semanaEmDestaque = obterSemanaAtual(SEMANA_ATUAL);
  res.render('index', {
    paginaAtiva: 'inicio',
    curso: dadosCurso,
    semanaAtual: semanaEmDestaque,
    semanaNumeroAtual: SEMANA_ATUAL,
    estudantes: estudantesOficiais,
    familias: familiasConectadas,
    momentos: galeriaMomentos
  });
});

// 2. ROTA DA TRILHA DE ESTUDOS: Cronograma 12 Semanas, Aula 02 & Downloads
app.get('/trilha', (req, res) => {
  const semanaRequisitada = parseInt(req.query.semana, 10);
  const semanaNumero = (!isNaN(semanaRequisitada) && semanaRequisitada >= 1 && semanaRequisitada <= 12)
    ? semanaRequisitada
    : SEMANA_ATUAL;

  const semanaEmDestaque = obterSemanaAtual(semanaNumero);
  const modulosCompletos = obterSemanasComStatus(semanaNumero);
  const progresso = calcularProgresso(semanaNumero);

  res.render('trilha', {
    paginaAtiva: 'trilha',
    curso: dadosCurso,
    semanaAtual: semanaEmDestaque,
    semanaNumeroAtual: semanaNumero,
    modulos: modulosCompletos,
    progresso
  });
});

// 3. ROTA DA ÁREA DOS PAIS & FAMÍLIA: Acompanhamento Semanal & Perguntas de Almoço
app.get('/pais', (req, res) => {
  const semanaEmDestaque = obterSemanaAtual(SEMANA_ATUAL);
  const progresso = calcularProgresso(SEMANA_ATUAL);

  res.render('pais', {
    paginaAtiva: 'pais',
    curso: dadosCurso,
    semanaAtual: semanaEmDestaque,
    semanaNumeroAtual: SEMANA_ATUAL,
    estudantes: estudantesOficiais,
    familias: familiasConectadas,
    dicasFamilia,
    perguntasAlmoco,
    progresso
  });
});

// Inicialização do Servidor
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🛡️  LiraCode - Sistema Principal`);
    console.log(`🚀 Home Leve:        http://localhost:${PORT}/`);
    console.log(`🧭 Trilha Completa:  http://localhost:${PORT}/trilha`);
    console.log(`👨‍👩‍👧‍👦 Portal dos Pais:  http://localhost:${PORT}/pais`);
    console.log(`====================================================`);
  });
}

module.exports = app;


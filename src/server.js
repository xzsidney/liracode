const express = require('express');
const path = require('path');
const {
  SEMANA_ATUAL,
  dadosCurso,
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

// Rota principal: Home Page do Portal dos Pais
app.get('/', (req, res) => {
  // Permite visualizar semanas específicas via query param (?semana=4) para testes e navegação
  const semanaRequisitada = parseInt(req.query.semana, 10);
  const semanaNumero = (!isNaN(semanaRequisitada) && semanaRequisitada >= 1 && semanaRequisitada <= 12)
    ? semanaRequisitada
    : SEMANA_ATUAL;

  const semanaEmDestaque = obterSemanaAtual(semanaNumero);
  const modulosCompletos = obterSemanasComStatus(semanaNumero);

  // Calcular métricas gerais de progresso
  const totalSemanas = 12;
  const isInicioCurso = (semanaNumero === 1);
  const concluidas = isInicioCurso ? 0 : (semanaNumero - 1);
  const porcentagemGeral = isInicioCurso ? 0 : Math.round((concluidas / totalSemanas) * 100);

  res.render('index', {
    curso: dadosCurso,
    semanaAtual: semanaEmDestaque,
    semanaNumeroAtual: semanaNumero,
    modulos: modulosCompletos,
    dicasFamilia,
    isInicioCurso,
    progresso: {
      totalSemanas,
      concluidas,
      porcentagemGeral,
      statusTexto: isInicioCurso 
        ? "Preparação para o Primeiro Encontro! 0 de 12 aulas concluídas" 
        : `${concluidas} de ${totalSemanas} aulas concluídas (${porcentagemGeral}%)`
    }
  });
});

// Inicialização do Servidor
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🏛️  LiraCode - Portal dos Pais`);
    console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
    console.log(`====================================================`);
  });
}

module.exports = app;

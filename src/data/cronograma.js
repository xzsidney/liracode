/**
 * Dados do Cronograma de Lógica de Programação com Node.js (12 Semanas)
 * Adaptado para o Portal dos Pais (LiraCode)
 */

// Configure aqui a semana atual do curso (1 a 12)
const SEMANA_ATUAL = 3;

const dadosCurso = {
  nome: "LiraCode",
  titulo: "Lógica de Programação com Node.js",
  subtitulo: "Acompanhamento Pedagógico para Pais e Responsáveis",
  faixaEtaria: "Jovens de 14 a 17 anos",
  formato: "1 encontro semanal de 90 minutos",
  duracaoTotal: "12 semanas (3 meses)",
  ferramentas: ["Node.js", "Visual Studio Code", "readline-sync", "Terminal"],
  contatoSuporte: {
    whatsapp: "(11) 99999-8888",
    email: "suporte@liracode.com.br",
    horarioAtendimento: "Segunda a Sexta, das 09h às 18h"
  }
};

const modulos = [
  {
    id: 1,
    nome: "Módulo 1",
    titulo: "Primeiros Passos e Raciocínio Lógico",
    periodo: "Semanas 1 a 3",
    descricao: "Construção da base do pensamento computacional, comandos no terminal, variáveis e interação com teclado.",
    icone: "🌱",
    semanas: [
      {
        numero: 1,
        titulo: "O que é Programar e como o Computador Pensa?",
        resumo: "Compreensão de algoritmos (receitas lógicas) e execução do primeiro script JavaScript no terminal.",
        objetivos: [
          "Entender o conceito de algoritmo e sequência lógica.",
          "Conhecer o terminal e rodar comandos com Node.js.",
          "Exibir dados e mensagens na tela com console.log()."
        ],
        projeto: {
          nome: "Script de Apresentação Pessoal",
          descricao: "Criação de um programa interativo que apresenta o perfil do jovem, seus interesses e metas no curso."
        },
        dicaParaPais: "Pergunte ao seu filho como ele explicaria uma 'receita de bolo' para um robô que não sabe improvisar!"
      },
      {
        numero: 2,
        titulo: "A Memória do Programa (Variáveis e Tipos de Dados)",
        resumo: "Como o computador guarda informações na memória usando caixinhas chamadas variáveis (let e const).",
        objetivos: [
          "Diferenciar valores fixos (const) de mutáveis (let).",
          "Aprender tipos básicos: Textos (Strings), Números (Numbers) e Lógicos (Booleans).",
          "Criar frases dinâmicas com Template Strings."
        ],
        projeto: {
          nome: "Ficha de Personagem de RPG",
          descricao: "Guarda nome, classe, nível de poder e vida do herói, exibindo um relatório formatado no terminal."
        },
        dicaParaPais: "Peça para ele mostrar a 'ficha de herói' dele no terminal e pergunte quais atributos ele escolheu."
      },
      {
        numero: 3,
        titulo: "Interagindo com o Usuário (Entrada e Saída)",
        resumo: "O programa passa a ouvir o usuário! Captura de respostas pelo teclado e conversão de textos em números.",
        objetivos: [
          "Capturar entradas do teclado usando o pacote readline-sync.",
          "Converter texto em números para operações matemáticas (Number / parseInt).",
          "Realizar cálculos automáticos no terminal."
        ],
        projeto: {
          nome: "Gerador de Histórias Malucas",
          descricao: "O programa pede palavras misteriosas ao usuário e monta uma história cômica personalizada."
        },
        dicaParaPais: "Jogue o 'Gerador de Histórias' com ele! Responda as perguntas que o programa dele fizer e divirtam-se."
      }
    ]
  },
  {
    id: 2,
    nome: "Módulo 2",
    titulo: "Tomada de Decisão e Regras",
    periodo: "Semanas 4 a 6",
    descricao: "Capacitar o código a tomar rumos diferentes com base em condições lógicas e regras inteligentes.",
    icone: "⚖️",
    semanas: [
      {
        numero: 4,
        titulo: "Tomando Decisões (if, else if, else)",
        resumo: "Ensinando o computador a fazer escolhas com base em condições verdadeiras ou falsas.",
        objetivos: [
          "Estruturar condições com if, else if e else.",
          "Usar comparadores de valores (maior, menor, igualdade estrita ===)."
        ],
        projeto: {
          nome: "Calculador de Média Escolar Inteligente",
          descricao: "Calcula a média de notas e define status automático (Aprovado, Recuperação ou Reprovado)."
        },
        dicaParaPais: "Discuta como nós mesmos tomamos decisões 'se estiver chovendo, levo guarda-chuva; senão, vou de óculos'."
      },
      {
        numero: 5,
        titulo: "Lógica Combinada (Operadores &&, ||, !)",
        resumo: "Combinação de múltiplos critérios lógicos para regras sofisticadas de validação e segurança.",
        objetivos: [
          "Compreender o operador E (&&) — todos devem ser verdadeiros.",
          "Compreender o operador OU (||) — basta um ser verdadeiro.",
          "Aplicar negação lógica (!)."
        ],
        projeto: {
          nome: "Sistema de Segurança de Masmorra",
          descricao: "Libera ou bloqueia acessos a portas secretas avaliando chaves, nível de força e feitiços ativos."
        },
        dicaParaPais: "Eles estão aprendendo álgebra booleana de forma divertida. Valorize o raciocínio dedutivo!"
      },
      {
        numero: 6,
        titulo: "Desafio em Duplas e Jogo de Adivinhação v1",
        resumo: "Integração de todo o conhecimento dos dois módulos com geração de números randômicos.",
        objetivos: [
          "Gerar números aleatórios com Math.random().",
          "Trabalhar em equipe resolvendo problemas e dando dicas de maior/menor."
        ],
        projeto: {
          nome: "Jogo de Adivinhação (v1 - Pistas Rápidas)",
          descricao: "O computador sorteia um número secreto e desafia o jogador dando pistas se o chute foi alto ou baixo."
        },
        dicaParaPais: "Pergunte como foi trabalhar em dupla. O desenvolvimento de habilidades interpessoais é essencial."
      }
    ]
  },
  {
    id: 3,
    nome: "Módulo 3",
    titulo: "Repetições, Listas e Modularização",
    periodo: "Semanas 7 a 9",
    descricao: "Automatização em grande escala com loops, armazenamento em coleções (Arrays) e funções limpas.",
    icone: "🔄",
    semanas: [
      {
        numero: 7,
        titulo: "Repetindo Tarefas sem Repetir Código (while e for)",
        resumo: "Loops de repetição automática com controle de parada para evitar loops infinitos.",
        objetivos: [
          "Utilizar laços while para repetições sob condição.",
          "Utilizar laços for para contagens pré-determinadas.",
          "Controlar contadores e acumuladores (i++)."
        ],
        projeto: {
          nome: "Jogo de Adivinhação com Tentativas Contínuas",
          descricao: "O jogador tenta até acertar o número secreto e descobre o ranking de tentativas necessárias."
        },
        dicaParaPais: "Comente como o computador é ótimo em fazer tarefas repetitivas sem cansar — basta saber instruí-lo!"
      },
      {
        numero: 8,
        titulo: "Guardando Conjuntos de Dados (Arrays / Listas)",
        resumo: "Como agrupar dezenas ou centenas de informações numa única variável e percorrê-las.",
        objetivos: [
          "Criar listas (arrays) e acessar elementos por índice zero.",
          "Adicionar (.push) e remover (.splice) itens dinamicamente.",
          "Percorrer listas inteiras com laço for."
        ],
        projeto: {
          nome: "Inventário de RPG / Gerenciador de Tarefas",
          descricao: "Menu interativo contínuo para cadastrar itens, listar inventário e remover itens usados."
        },
        dicaParaPais: "Peça para seu filho mostrar a lista dele rodando. É o primeiro passo para criar sistemas reais!"
      },
      {
        numero: 9,
        titulo: "Modularizando o Código com Funções",
        resumo: "Divisão do código em blocos reutilizáveis, organizados e eficientes (Princípio DRY).",
        objetivos: [
          "Escrever funções personalizadas com parâmetros e retorno.",
          "Evitar repetição desnecessária de código.",
          "Criar cálculos modulares e independentes."
        ],
        projeto: {
          nome: "Mini-biblioteca de Utilitários de Cálculo",
          descricao: "Funções reutilizáveis para calcular dano de batalha, descontos de compras e conversões numéricas."
        },
        dicaParaPais: "Aqui o código começa a ficar profissional e modular. Incentive a organização e clareza nos nomes."
      }
    ]
  },
  {
    id: 4,
    nome: "Módulo 4",
    titulo: "Projeto Integrador Final & Demo Day",
    periodo: "Semanas 10 a 12",
    descricao: "Criação de um projeto autoral do início ao fim, depuração de erros reais e apresentação para os colegas.",
    icone: "🏆",
    semanas: [
      {
        numero: 10,
        titulo: "Definição do Escopo e Arquitetura",
        resumo: "Planejamento arquitetural no papel antes da codificação: dividindo grandes problemas em etapas.",
        objetivos: [
          "Escolher entre: RPG de Batalha em Turnos, Cofrinho/Controle Financeiro ou Quiz Temático com Ranking.",
          "Desenhar o fluxo de telas/menus e preparar as variáveis globais."
        ],
        projeto: {
          nome: "Estrutura Base do Projeto Final",
          descricao: "Criação do esqueleto e menu principal do projeto escolhido."
        },
        dicaParaPais: "Converse sobre qual dos 3 temas ele escolheu e ajude-o a manter o escopo focado para não se sobrecarregar."
      },
      {
        numero: 11,
        titulo: "Implementação Guiada e Depuração",
        resumo: "Codificação intensa com suporte técnico e aprendizado prático de leitura de erros no terminal.",
        objetivos: [
          "Identificar e corrigir bugs lendo stack traces vermelhos do Node.js.",
          "Prevenir travamentos com validação de entradas inválidas.",
          "Aplicar boas práticas de indentação e legibilidade."
        ],
        projeto: {
          nome: "Projeto Final Funcional e Blindado",
          descricao: "Finalização da lógica central sem travamentos em casos inesperados."
        },
        dicaParaPais: "Se ele disser que teve erro no código, celebre! Erros são o combustível do aprendizado de um programador."
      },
      {
        numero: 12,
        titulo: "Refinamento e Apresentação (Demo Day)",
        resumo: "Polimento final e apresentação técnica de 3 a 5 minutos demonstrando a criação ao vivo.",
        objetivos: [
          "Comunicar claramente a ideia do projeto e a lógica construída.",
          "Compartilhar qual foi o maior desafio superado.",
          "Celebrar a formatura no módulo básico de lógica com Node.js."
        ],
        projeto: {
          nome: "Apresentação Demo Day & Certificado",
          descricao: "Execução ao vivo do projeto completo no terminal e entrega dos certificados simbólicos."
        },
        dicaParaPais: "Dia de orgulho! Pergunte como foi a apresentação e parabenize a dedicação nas 12 semanas."
      }
    ]
  }
];

const dicasFamilia = [
  {
    icone: "🐞",
    titulo: "Erros no terminal são ferramentas, não falhas",
    descricao: "Quando o Node.js mostra um texto vermelho com erro, ele está ensinando exatamente a linha que precisa de atenção. Ajude seu filho a respirar fundo e ler o que o computador está dizendo."
  },
  {
    icone: "🗣️",
    titulo: "Peça para ele explicar como fez",
    descricao: "Uma das melhores formas de fixar lógica é o 'Efeito Professor'. Pergunte: 'Como o computador sabe quem ganhou essa partida?'. Ao explicar, o raciocínio dele se consolida."
  },
  {
    icone: "🧠",
    titulo: "Lógica vale para a vida toda",
    descricao: "Aprender variáveis, condições e repetições treina o cérebro para resolver problemas complexos por partes (decomposição). Essa habilidade é útil em qualquer profissão futura."
  },
  {
    icone: "⏳",
    titulo: "Respeite o tempo de raciocínio",
    descricao: "Programação exige concentração e momentos de silêncio para pensar. Se ele estiver travado, uma pausa para um copo de água costuma destravar as melhores ideias."
  }
];

// Helper para calcular status de cada semana
function obterSemanasComStatus(semanaAtual) {
  return modulos.map(modulo => {
    const semanasProcessadas = modulo.semanas.map(sem => {
      let status = "proxima";
      if (sem.numero < semanaAtual) {
        status = "concluida";
      } else if (sem.numero === semanaAtual) {
        status = "em-andamento";
      }
      return {
        ...sem,
        status,
        moduloNome: modulo.nome
      };
    });

    const concluidasNoModulo = semanasProcessadas.filter(s => s.status === "concluida").length;
    const temEmAndamento = semanasProcessadas.some(s => s.status === "em-andamento");

    let statusModulo = "proximo";
    if (concluidasNoModulo === semanasProcessadas.length) {
      statusModulo = "concluido";
    } else if (temEmAndamento || concluidasNoModulo > 0) {
      statusModulo = "em-andamento";
    }

    return {
      ...modulo,
      status: statusModulo,
      semanas: semanasProcessadas
    };
  });
}

// Obter a semana atual detalhada
function obterSemanaAtual(semanaNumero) {
  for (const mod of modulos) {
    const encontrada = mod.semanas.find(s => s.numero === semanaNumero);
    if (encontrada) {
      return {
        ...encontrada,
        moduloNome: mod.nome,
        moduloTitulo: mod.titulo
      };
    }
  }
  return modulos[0].semanas[0];
}

module.exports = {
  SEMANA_ATUAL,
  dadosCurso,
  modulos,
  dicasFamilia,
  obterSemanasComStatus,
  obterSemanaAtual
};

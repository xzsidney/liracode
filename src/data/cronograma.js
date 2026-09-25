/**
 * Dados do Cronograma de Lógica de Programação com Node.js (12 Semanas)
 * Adaptado para o Portal dos Pais (LiraCode)
 */

// Configure aqui a semana atual do curso (1 a 12)
const SEMANA_ATUAL = 2;

const dadosCurso = {
  nome: "LiraCode",
  titulo: "Aprenda a controlar o computador, não apenas usá-lo",
  subtitulo: "Acompanhamento Pedagógico para Pais e Responsáveis",
  faixaEtaria: "Jovens de 10 a 16 anos",
  formato: "Aulas práticas aos sábados (90 minutos)",
  duracaoTotal: "12 semanas de imersão prática",
  statusTurma: "Turma Oficial Ativa • 6 Estudantes Conectados",
  mentor: "Sidney (veterano da era do processador 486)",
  ferramentas: ["Windows Explorer Avançado", "Node.js", "Visual Studio Code", "Git & GitHub", "Terminal"],
  contatoSuporte: {
    whatsapp: "(11) 99999-8888",
    email: "suporte@liracode.com.br",
    horarioAtendimento: "Segunda a Sábado, das 09h às 18h"
  }
};

// Turma Oficial de 6 Estudantes
const estudantesOficiais = [
  { nome: "Ana Luiza", responsavel: "Isabela", parentesco: "Mãe", badge: "Turma LiraCode" },
  { nome: "Isabely", responsavel: "Alessandra", parentesco: "Mãe", badge: "Turma LiraCode" },
  { nome: "Enzo", responsavel: "Alessandra", parentesco: "Mãe", badge: "Turma LiraCode" },
  { nome: "Samuel", responsavel: "Yara", parentesco: "Mãe", badge: "Turma LiraCode" },
  { nome: "Paulo", responsavel: "Elaine e Sidney", parentesco: "Pais", badge: "Turma LiraCode" },
  { nome: "Jennifer", responsavel: "Elaine e Sidney", parentesco: "Pais", badge: "Turma LiraCode" }
];

// Rede de Famílias Conectadas
const familiasConectadas = [
  { responsavel: "Isabela", aluno: "Ana Luiza", parentesco: "Mãe da Ana Luiza", icone: "fa-solid fa-heart" },
  { responsavel: "Alessandra", aluno: "Isabely e Enzo", parentesco: "Mãe da Isabely e do Enzo", icone: "fa-solid fa-heart" },
  { responsavel: "Yara", aluno: "Samuel", parentesco: "Mãe do Samuel", icone: "fa-solid fa-heart" },
  { responsavel: "Elaine & Sidney", aluno: "Jennifer e Paulo", parentesco: "Pais da Jennifer e do Paulo", icone: "fa-solid fa-heart" }
];

const galeriaMomentos = [
  {
    id: 1,
    titulo: "Primeiros Comandos no Terminal",
    subtitulo: "Semana 01 • O Início de Tudo",
    descricao: "A sensação indescritível de digitar os primeiros comandos no terminal preto e ver o computador responder com precisão matemática.",
    categoria: "Prática em Sala",
    icone: "fa-solid fa-terminal",
    gradiente: "from-brand-red to-red-950",
    corBorda: "border-red-500/40",
    detalhe: "Ambiente DOS / Node.js"
  },
  {
    id: 2,
    titulo: "A Gaveta Digital dos Arquivos",
    subtitulo: "Semana 01 • Organização & CRUD",
    descricao: "Criação de pastas estruturadas no Windows e o primeiro arquivo .txt com a Ficha Pessoal de cada um dos 6 alunos.",
    categoria: "Fundamentos",
    icone: "fa-solid fa-folder-tree",
    gradiente: "from-brand-blue to-blue-950",
    corBorda: "border-blue-500/40",
    detalhe: "Sistema de Arquivos"
  },
  {
    id: 3,
    titulo: "O Crachá dos Arquivos & Cibersegurança",
    subtitulo: "Semana 02 • Aula Atual",
    descricao: "Desmascarando arquivos com extensões ocultas no Windows (.json, .png, .exe) e aprendendo segurança ativa na prática.",
    categoria: "Cibersegurança",
    icone: "fa-solid fa-shield-halved",
    gradiente: "from-amber-600 to-amber-950",
    corBorda: "border-brand-gold/60",
    detalhe: "Extensões & Riscos"
  },
  {
    id: 4,
    titulo: "A Turma Reunida no Laboratório",
    subtitulo: "Encontro aos Sábados",
    descricao: "Ana Luiza, Isabely, Enzo, Samuel, Paulo e Jennifer aprendendo juntos a controlar o computador com raciocínio e segurança.",
    categoria: "Companheirismo",
    icone: "fa-solid fa-users",
    gradiente: "from-brand-darkred to-slate-900",
    corBorda: "border-brand-gold/40",
    detalhe: "6 Estudantes Oficiais"
  }
];

const perguntasAlmoco = [
  {
    pergunta: "Filho, por que nunca devemos clicar num arquivo que termina com .exe se alguém mandar no Discord?",
    motivo: "Estimula o aluno a explicar o perigo de executáveis e a pegadinha da extensão dupla (ex: foto.png.exe)."
  },
  {
    pergunta: "Como você mudou os pontos de vida do seu herói no arquivo personagem.json?",
    motivo: "Mostra que arquivos de configuração guardam dados estruturados que humanos e programas conseguem ler e editar."
  },
  {
    pergunta: "O que o Windows esconde quando a opção 'Mostrar extensões de nomes de arquivos' está desmarcada?",
    motivo: "Reforça o hábito de segurança que eles ativaram no Explorador de Arquivos do Windows na aula prática."
  },
  {
    pergunta: "Qual é a diferença entre um arquivo de texto (.txt), uma imagem (.png) e um programa (.exe)?",
    motivo: "Exercita o conceito do 'crachá' do arquivo e como o computador sabe qual programa deve abrir cada item."
  }
];

const modulos = [
  {
    id: 1,
    nome: "Módulo 1",
    titulo: "Fundamentos do Sistema Operacional & Arquivos",
    periodo: "Semanas 1 a 3",
    descricao: "Entendendo a anatomia do computador: gavetas digitais, extensões de arquivos, cibersegurança e o primeiro contato com a Web.",
    icone: "🛡️",
    semanas: [
      {
        numero: 1,
        titulo: "O Computador e as Gavetas Digitais (Pastas e Arquivos .txt)",
        resumo: "Conceito de pastas como gavetas organizadas, criação de arquivos no Bloco de Notas, ciclo CRUD manual (Criar, Ler, Atualizar, Deletar) e elaboração da Ficha Pessoal do aluno.",
        objetivos: [
          "Compreender a hierarquia de pastas e diretórios no Windows.",
          "Criar arquivos de texto puro (.txt) usando o Bloco de Notas.",
          "Salvar, renomear, mover e deletar com segurança sem perder dados.",
          "Criar a primeira Ficha Pessoal do aluno, semente do futuro portfólio web."
        ],
        projeto: {
          nome: "Ficha Pessoal do Aluno (.txt)",
          descricao: "Arquivo estruturado com nome, interesses, apelido de camisa e aspirações tecnológicas."
        },
        dicaParaPais: "Parabenize seu filho por ter organizado suas primeiras pastas sozinho. Pergunte: 'Filho, onde você guardou sua Ficha Pessoal no computador?'."
      },
      {
        numero: 2,
        titulo: "O Crachá dos Arquivos: Extensões (.txt, .json, .png, .exe) e Cibersegurança",
        resumo: "Desmascarando o Explorador do Windows ao exibir extensões ocultas. Análise prática de arquivos de texto (.txt), dados estruturados (.json), imagens (.png) e o perigo real dos executáveis (.exe / .bat). Prevenção contra armadilhas e malware.",
        objetivos: [
          "Ativar no Windows a exibição de extensões de arquivos ocultas.",
          "Inspecionar e editar a ficha de dados `personagem.json` no Bloco de Notas.",
          "Diferenciar arquivos inofensivos de arquivos executáveis perigosos (.exe / .bat).",
          "Aprender a regra de ouro da cibersegurança: desmascarar truques como `foto_do_passeio.png.exe`."
        ],
        projeto: {
          nome: "Laboratório de Extensões & Modificação de JSON",
          descricao: "Edição de atributos de jogo em formato JSON e teste seguro com arquivos de lote (.bat)."
        },
        dicaParaPais: "Converse no almoço sobre como a internet tem armadilhas disfarçadas. Deixe ele te ensinar a ativar as extensões de arquivos no seu computador!"
      },
      {
        numero: 3,
        titulo: "A Ficha do Aluno vira Web (Estrutura Semântica HTML5)",
        resumo: "Transformando o arquivo de texto puro em uma página web real acessível pelo navegador, usando as tags essenciais do HTML5.",
        objetivos: [
          "Compreender como o navegador interpreta tags HTML.",
          "Montar títulos, parágrafos, listas e imagens.",
          "Publicar a Ficha do Aluno no Laboratório LiraCode."
        ],
        projeto: {
          nome: "Primeira Página Web da Ficha Pessoal",
          descricao: "Apresentação online com foto, camisa oficial e descrição estruturada em HTML5."
        },
        dicaParaPais: "Peça para ele abrir a página dele no navegador e mostre que aquilo é um site real nascendo!"
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
  estudantesOficiais,
  familiasConectadas,
  galeriaMomentos,
  perguntasAlmoco,
  modulos,
  dicasFamilia,
  obterSemanasComStatus,
  obterSemanaAtual
};

<?php
/**
 * LiraCode • Dados do Cronograma & Turma Oficial
 * Backend Didático em PHP
 */

define('SEMANA_ATUAL', 3);

$dadosCurso = [
    'nome' => 'LiraCode',
    'titulo' => 'Aprenda a controlar o computador, não apenas usá-lo',
    'subtitulo' => 'Acompanhamento Pedagógico para Pais e Responsáveis',
    'faixaEtaria' => 'Jovens de 10 a 16 anos',
    'formato' => 'Aulas práticas aos sábados (90 minutos)',
    'duracaoTotal' => '12 semanas de imersão prática',
    'statusTurma' => 'Turma Oficial Ativa • 5 Estudantes Conectados',
    'mentor' => 'Sidney (veterano da era do processador 486)',
    'ferramentas' => ['Windows Explorer Avançado', 'Lógica de Programação', 'Visual Studio Code', 'Git & GitHub', 'Terminal'],
    'contatoSuporte' => [
        'whatsapp' => '(11) 99999-8888',
        'email' => 'suporte@liracode.com.br',
        'horarioAtendimento' => 'Segunda a Sábado, das 09h às 18h'
    ]
];

// Turma Oficial de 5 Estudantes com Avatares 3D Protegidos (Privacy by Design)
$estudantesOficiais = [
    [
        'nome' => 'Enzo',
        'responsavel' => 'Alessandra',
        'parentesco' => 'Mãe',
        'badge' => 'Guardião da Cibersegurança',
        'statusHonra' => 'Nível 02 • Especialista em Arquivos',
        'avatarRosto' => '/images/avatares/enzo-avatar.png',
        'avatarCorpo' => '/images/avatares/enzo-corpo.png'
    ],
    [
        'nome' => 'Paulo Henrique',
        'responsavel' => 'Elaine e Sidney',
        'parentesco' => 'Pais',
        'badge' => 'Estrategista de Código',
        'statusHonra' => 'Nível 02 • Analista de Sistemas',
        'avatarRosto' => '/images/avatares/paulo-avatar.png',
        'avatarCorpo' => '/images/avatares/paulo-corpo.png'
    ],
    [
        'nome' => 'Jennifer',
        'responsavel' => 'Elaine e Sidney',
        'parentesco' => 'Pais',
        'badge' => 'Arquiteta Criativa',
        'statusHonra' => 'Nível 02 • Mestre de Estrutura',
        'avatarRosto' => '/images/avatares/jennifer-avatar.png',
        'avatarCorpo' => '/images/avatares/jennifer-corpo.png'
    ],
    [
        'nome' => 'Ana Luiza',
        'responsavel' => 'Isabela',
        'parentesco' => 'Mãe',
        'badge' => 'Exploradora Digital',
        'statusHonra' => 'Nível 02 • Detetive de Malwares',
        'avatarRosto' => '/images/avatares/analuiza-avatar.png',
        'avatarCorpo' => '/images/avatares/analuiza-corpo.png'
    ],
    [
        'nome' => 'Isabely',
        'responsavel' => 'Alessandra',
        'parentesco' => 'Mãe',
        'badge' => 'Sentinela de Dados',
        'statusHonra' => 'Nível 02 • Inspetora de Segurança',
        'avatarRosto' => '/images/avatares/isabely-avatar.png',
        'avatarCorpo' => '/images/avatares/isabely-corpo.png'
    ]
];

// Rede de Famílias Conectadas (3 Famílias Oficiais)
$familiasConectadas = [
    ['responsavel' => 'Isabela', 'aluno' => 'Ana Luiza', 'parentesco' => 'Mãe da Ana Luiza', 'icone' => 'fa-solid fa-heart'],
    ['responsavel' => 'Alessandra', 'aluno' => 'Isabely e Enzo', 'parentesco' => 'Mãe da Isabely e do Enzo', 'icone' => 'fa-solid fa-heart'],
    ['responsavel' => 'Elaine & Sidney', 'aluno' => 'Jennifer e Paulo Henrique', 'parentesco' => 'Pais da Jennifer e do Paulo Henrique', 'icone' => 'fa-solid fa-heart']
];

$galeriaMomentos = [
    [
        'id' => 1,
        'titulo' => 'Primeiros Comandos no Terminal',
        'subtitulo' => 'Semana 01 • O Início de Tudo',
        'descricao' => 'A sensação indescritível de digitar os primeiros comandos no terminal preto e ver o computador responder com precisão matemática.',
        'categoria' => 'Prática em Sala',
        'icone' => 'fa-solid fa-terminal',
        'gradiente' => 'from-brand-red to-red-950',
        'corBorda' => 'border-red-500/40',
        'detalhe' => 'Ambiente DOS / Terminal'
    ],
    [
        'id' => 2,
        'titulo' => 'A Gaveta Digital dos Arquivos',
        'subtitulo' => 'Semana 01 • Organização & CRUD',
        'descricao' => 'Criação de pastas estruturadas no Windows e o primeiro arquivo .txt com a Ficha Pessoal de cada um dos 5 estudantes pioneiros.',
        'categoria' => 'Fundamentos',
        'icone' => 'fa-solid fa-folder-tree',
        'gradiente' => 'from-brand-blue to-blue-950',
        'corBorda' => 'border-blue-500/40',
        'detalhe' => 'Sistema de Arquivos'
    ],
    [
        'id' => 3,
        'titulo' => 'O Crachá dos Arquivos & Cibersegurança',
        'subtitulo' => 'Semana 02 • Aula Atual',
        'descricao' => 'Desmascarando arquivos com extensões ocultas no Windows (.json, .png, .exe) e aprendendo segurança ativa na prática.',
        'categoria' => 'Cibersegurança',
        'icone' => 'fa-solid fa-shield-halved',
        'gradiente' => 'from-amber-600 to-amber-950',
        'corBorda' => 'border-brand-gold/60',
        'detalhe' => 'Extensões & Riscos'
    ],
    [
        'id' => 4,
        'titulo' => 'A Turma Reunida no Laboratório',
        'subtitulo' => 'Encontro aos Sábados',
        'descricao' => 'Enzo, Paulo Henrique, Jennifer, Ana Luiza e Isabely aprendendo juntos a controlar o computador com raciocínio e segurança.',
        'categoria' => 'Companheirismo',
        'icone' => 'fa-solid fa-users',
        'gradiente' => 'from-brand-darkred to-slate-900',
        'corBorda' => 'border-brand-gold/40',
        'detalhe' => '5 Estudantes Oficiais'
    ]
];

$perguntasAlmoco = [
    [
        'pergunta' => 'Filho, por que nunca devemos clicar num arquivo que termina com .exe se alguém mandar no Discord?',
        'motivo' => 'Estimula o aluno a explicar o perigo de executáveis e a pegadinha da extensão dupla (ex: foto.png.exe).'
    ],
    [
        'pergunta' => 'Como você mudou os pontos de vida do seu herói no arquivo personagem.json?',
        'motivo' => 'Mostra que arquivos de configuração guardam dados estruturados que humanos e programas conseguem ler e editar.'
    ],
    [
        'pergunta' => 'O que o Windows esconde quando a opção "Mostrar extensões de nomes de arquivos" está desmarcada?',
        'motivo' => 'Reforça o hábito de segurança que eles ativaram no Explorador de Arquivos do Windows na aula prática.'
    ],
    [
        'pergunta' => 'Qual é a diferença entre um arquivo de texto (.txt), uma imagem (.png) e um programa (.exe)?',
        'motivo' => 'Exercita o conceito do "crachá" do arquivo e como o computador sabe qual programa deve abrir cada item.'
    ]
];

$modulos = [
    [
        'id' => 1,
        'nome' => 'Módulo 1',
        'titulo' => 'Fundamentos do Sistema Operacional & Arquivos',
        'periodo' => 'Semanas 1 a 3',
        'descricao' => 'Entendendo a anatomia do computador: gavetas digitais, extensões de arquivos, cibersegurança e o primeiro contato com a Web.',
        'icone' => '🛡️',
        'semanas' => [
            [
                'numero' => 1,
                'titulo' => 'O Computador e as Gavetas Digitais (Pastas e Arquivos .txt)',
                'resumo' => 'Conceito de pastas como gavetas organizadas, criação de arquivos no Bloco de Notas, ciclo CRUD manual e elaboração da Ficha Pessoal do aluno.',
                'objetivos' => [
                    'Compreender a hierarquia de pastas e diretórios no Windows.',
                    'Criar arquivos de texto puro (.txt) usando o Bloco de Notas.',
                    'Salvar, renomear, mover e deletar com segurança sem perder dados.',
                    'Criar a primeira Ficha Pessoal do aluno, semente do futuro portfólio web.'
                ],
                'projeto' => [
                    'nome' => 'Ficha Pessoal do Aluno (.txt)',
                    'descricao' => 'Arquivo estruturado com nome, interesses, apelido de camisa e aspirações tecnológicas.'
                ],
                'dicaParaPais' => 'Parabenize seu filho por ter organizado suas primeiras pastas sozinho. Pergunte: "Filho, onde você guardou sua Ficha Pessoal no computador?".'
            ],
            [
                'numero' => 2,
                'titulo' => 'O Crachá dos Arquivos: Extensões (.txt, .json, .png, .exe) e Cibersegurança',
                'resumo' => 'Desmascarando o Explorador do Windows ao exibir extensões ocultas. Análise prática de arquivos de texto (.txt), dados estruturados (.json), imagens (.png) e o perigo real dos executáveis (.exe / .bat). Prevenção contra armadilhas e malware.',
                'objetivos' => [
                    'Ativar no Windows a exibição de extensões de arquivos ocultas.',
                    'Inspecionar e editar a ficha de dados personagem.json no Bloco de Notas.',
                    'Diferenciar arquivos inofensivos de arquivos executáveis perigosos (.exe / .bat).',
                    'Aprender a regra de ouro da cibersegurança: desmascarar truques como foto_do_passeio.png.exe.'
                ],
                'projeto' => [
                    'nome' => 'Laboratório de Extensões & Modificação de JSON',
                    'descricao' => 'Edição de atributos de jogo em formato JSON e teste seguro com arquivos de lote (.bat).'
                ],
                'dicaParaPais' => 'Converse no almoço sobre como a internet tem armadilhas disfarçadas. Deixe ele te ensinar a ativar as extensões de arquivos no seu computador!'
            ],
            [
                'numero' => 3,
                'titulo' => 'A Ficha do Aluno vira Web (Estrutura Semântica HTML5)',
                'resumo' => 'Transformando o arquivo de texto puro em uma página web real acessível pelo navegador, usando as tags essenciais do HTML5.',
                'objetivos' => [
                    'Compreender como o navegador interpreta tags HTML.',
                    'Montar títulos, parágrafos, listas e imagens.',
                    'Publicar a Ficha do Aluno no Laboratório LiraCode.'
                ],
                'projeto' => [
                    'nome' => 'Primeira Página Web da Ficha Pessoal',
                    'descricao' => 'Apresentação online com foto, camisa oficial e descrição estruturada em HTML5.'
                ],
                'dicaParaPais' => 'Peça para ele abrir a página dele no navegador e mostre que aquilo é um site real nascendo!'
            ]
        ]
    ]
];

// Funções Helpers
function obterSemanaAtual($semanaNumero, $modulos) {
    foreach ($modulos as $mod) {
        foreach ($mod['semanas'] as $sem) {
            if ($sem['numero'] === $semanaNumero) {
                $sem['moduloNome'] = $mod['nome'];
                $sem['moduloTitulo'] = $mod['titulo'];
                return $sem;
            }
        }
    }
    return $modulos[0]['semanas'][0];
}

function calcularProgresso($semanaNumero, $totalSemanas = 12) {
    $concluidas = max(0, $semanaNumero - 1);
    $porcentagemGeral = round(($concluidas / $totalSemanas) * 100);
    return [
        'totalSemanas' => $totalSemanas,
        'concluidas' => $concluidas,
        'porcentagemGeral' => $porcentagemGeral,
        'statusTexto' => "{$concluidas} de {$totalSemanas} aulas concluídas ({$porcentagemGeral}%)"
    ];
}

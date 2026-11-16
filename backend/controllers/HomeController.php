<?php
/**
 * LiraCode • Controlador da Página Inicial (Home)
 * Backend Didático em PHP
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../data/cronograma.php';

class HomeController {
    public function index() {
        global $dadosCurso, $estudantesOficiais, $familiasConectadas, $galeriaMomentos, $modulos;

        $semanaEmDestaque = obterSemanaAtual(SEMANA_ATUAL, $modulos);
        $progresso = calcularProgresso(SEMANA_ATUAL);

        $dados = [
            'titulo' => 'LiraCode • Aprenda a controlar o computador, não apenas usá-lo',
            'paginaAtiva' => 'inicio',
            'curso' => $dadosCurso,
            'semanaAtual' => $semanaEmDestaque,
            'semanaNumeroAtual' => SEMANA_ATUAL,
            'estudantes' => $estudantesOficiais,
            'familias' => $familiasConectadas,
            'momentos' => $galeriaMomentos,
            'progresso' => $progresso
        ];

        // Extrai variáveis para a view
        extract($dados);

        // Renderiza a view da Home
        require_once VIEWS_PATH . '/home.view.php';
    }
}

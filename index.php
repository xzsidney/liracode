<?php
/**
 * LiraCode • Ponto de Entrada Oficial (Front Controller)
 * Monólito Didático: Backend & Frontend em PHP
 */

// Tratamento para arquivos estáticos quando rodar via servidor embutido do PHP (php -S)
if (php_sapi_name() === 'cli-server') {
    $path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
    $publicFile = __DIR__ . '/public' . $path;
    if ($path !== '/' && file_exists($publicFile)) {
        return false; // Deixa o PHP embutido servir o arquivo estático direto
    }
}

// Carrega o controlador principal
require_once __DIR__ . '/backend/controllers/HomeController.php';

// Roteador Básico da Fase 1
$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);

$controller = new HomeController();

switch ($uri) {
    case '/':
    case '/index.php':
    default:
        $controller->index();
        break;
}

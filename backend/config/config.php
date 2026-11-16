<?php
/**
 * LiraCode • Configurações Globais do Sistema
 * Monólito Didático: Backend & Frontend
 */

define('APP_NAME', 'LiraCode');
define('APP_TAGLINE', 'Aprenda a controlar o computador, não apenas usá-lo');
define('APP_URL', 'https://liracode.com.br');

// Diretórios do Sistema
define('BASE_PATH', dirname(__DIR__, 2));
define('BACKEND_PATH', BASE_PATH . '/backend');
define('PUBLIC_PATH', BASE_PATH . '/public');
define('VIEWS_PATH', BACKEND_PATH . '/views');

// Configurações Futuras do Banco de Dados (MySQL Hostinger)
define('DB_HOST', 'localhost');
define('DB_NAME', 'liracode_db');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');

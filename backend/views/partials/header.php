<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= isset($titulo) ? htmlspecialchars($titulo) : 'Projeto LiraCode • Aprenda a controlar o computador, não apenas usá-lo' ?></title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- FontAwesome 6 Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts Oficiais: Cinzel, Plus Jakarta Sans & Fira Code -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Fira+Code:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Tailwind Configuration com a Paleta Nobre Homologada -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              red: '#b91c1c',        /* Bordô Rubro */
              darkred: '#881337',    /* Vinho Nobre */
              blue: '#1e3a8a',       /* Azul Real */
              darkblue: '#0a0f1d',   /* Azul Noite Profundo (Fundo) */
              midnight: '#0f172a',   /* Slate Nobre */
              gold: '#eab308',       /* Dourado Imperial */
              goldlight: '#fde047',  /* Dourado Claro */
              accent: '#f59e0b'      /* Âmbar Acento */
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            display: ['"Cinzel"', 'serif'],
            mono: ['"Fira Code"', 'monospace']
          }
        }
      }
    }
  </script>

  <!-- Estilos Próprios LiraCode -->
  <link rel="stylesheet" href="/css/style.css">
</head>
<body class="jersey-pattern text-slate-100 font-sans min-h-screen antialiased flex flex-col selection:bg-brand-gold selection:text-slate-950">

  <!-- =========================================================================
       BARRA SUPERIOR REGAL / CABEÇALHO NOBRE
       ========================================================================= -->
  <header class="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b-2 border-brand-gold/40 shadow-xl shadow-black/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo Oficial com Brasão Nobre & Tipografia Cinzel -->
        <a href="/" class="flex items-center gap-3.5 group">
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
            <img 
              src="/images/brasao-moderno.png" 
              alt="Brasão Oficial LiraCode" 
              class="relative w-12 h-12 object-contain crest-glow transform group-hover:scale-105 transition duration-300"
            >
          </div>
          <div>
            <span class="font-display font-black text-2xl tracking-wider text-white flex items-center">
              LIRA<span class="text-brand-gold drop-shadow-[0_2px_8px_rgba(234,179,8,0.5)]">CODE</span>
            </span>
            <span class="block text-[10px] uppercase font-bold tracking-[0.25em] text-amber-300 font-sans">
              Família • Lógica • Segurança
            </span>
          </div>
        </a>

        <!-- Navegação Desktop Nobre -->
        <nav class="hidden md:flex items-center gap-2">
          <!-- Item: Início -->
          <a 
            href="/" 
            class="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 <?= (isset($paginaAtiva) && $paginaAtiva === 'inicio') ? 'bg-brand-gold/15 text-amber-300 border border-brand-gold/50 shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800/60' ?>"
          >
            <i class="fa-solid fa-house mr-1.5 text-xs text-brand-gold"></i> Início
          </a>

          <!-- Item: Portal dos Pais -->
          <a 
            href="/pais" 
            class="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 <?= (isset($paginaAtiva) && $paginaAtiva === 'pais') ? 'bg-brand-gold/15 text-amber-300 border border-brand-gold/50 shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800/60' ?>"
          >
            <i class="fa-solid fa-people-roof mr-1.5 text-xs text-brand-gold"></i> Portal da Família
          </a>

          <!-- Item: Trilha 12 Semanas -->
          <a 
            href="/trilha" 
            class="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 <?= (isset($paginaAtiva) && $paginaAtiva === 'trilha') ? 'bg-brand-gold/15 text-amber-300 border border-brand-gold/50 shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800/60' ?>"
          >
            <i class="fa-solid fa-compass mr-1.5 text-xs text-brand-gold"></i> Trilha de Aulas
          </a>

          <!-- Botão Destaque: Vitrine dos Alunos -->
          <a 
            href="https://aula.liracode.com.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="ml-3 px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-brand-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border border-brand-gold/50 shadow-lg shadow-blue-900/30 transition-all duration-200 flex items-center gap-2 group"
          >
            <i class="fa-solid fa-laptop-code text-sky-300 group-hover:scale-110 transition-transform"></i>
            <span>Trabalhos dos Alunos</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-sky-200"></i>
          </a>
        </nav>

        <!-- Menu Mobile Button -->
        <div class="flex items-center md:hidden">
          <button 
            type="button" 
            onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" 
            class="p-2.5 rounded-xl bg-slate-900 border border-brand-gold/40 text-brand-gold hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Abrir Menu"
          >
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
        </div>

      </div>
    </div>

    <!-- Menu Dropdown Mobile -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-brand-gold/30 bg-slate-950/98 px-4 pt-3 pb-5 space-y-2">
      <a href="/" class="block px-4 py-2.5 rounded-xl text-sm font-semibold <?= (isset($paginaAtiva) && $paginaAtiva === 'inicio') ? 'bg-brand-gold/15 text-amber-300 border border-brand-gold/40' : 'text-slate-300 hover:bg-slate-900' ?>">
        <i class="fa-solid fa-house mr-2 text-brand-gold"></i> Início
      </a>
      <a href="/pais" class="block px-4 py-2.5 rounded-xl text-sm font-semibold <?= (isset($paginaAtiva) && $paginaAtiva === 'pais') ? 'bg-brand-gold/15 text-amber-300 border border-brand-gold/40' : 'text-slate-300 hover:bg-slate-900' ?>">
        <i class="fa-solid fa-people-roof mr-2 text-brand-gold"></i> Portal da Família
      </a>
      <a href="/trilha" class="block px-4 py-2.5 rounded-xl text-sm font-semibold <?= (isset($paginaAtiva) && $paginaAtiva === 'trilha') ? 'bg-brand-gold/15 text-amber-300 border border-brand-gold/40' : 'text-slate-300 hover:bg-slate-900' ?>">
        <i class="fa-solid fa-compass mr-2 text-brand-gold"></i> Trilha de Aulas
      </a>
      <a href="https://aula.liracode.com.br/" target="_blank" rel="noopener noreferrer" class="block px-4 py-2.5 rounded-xl text-sm font-bold bg-brand-blue/40 text-sky-300 border border-brand-gold/40">
        <i class="fa-solid fa-laptop-code mr-2"></i> Ver Trabalhos dos Alunos
      </a>
    </div>
  </header>

export interface StandaloneFile {
  filename: string;
  language: string;
  description: string;
  content: string;
}

export const STANDALONE_MANIFEST_JSON = `{
  "id": "/",
  "name": "Comunicação Assertiva com a Liderança",
  "short_name": "Assertividade",
  "description": "Como Alinhar, Negociar e Dar Feedback Sem Risco. PWA Corporativo Executivo.",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#070d18",
  "theme_color": "#0b1b36",
  "icons": [
    {
      "src": "./icon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any"
    },
    {
      "src": "./pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "./pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "./pwa-maskable-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "categories": ["education", "business", "productivity"]
}`;

export const STANDALONE_SW_JS = `// Service Worker para PWA Offline no GitHub Pages
const CACHE_NAME = 'assertiva-curso-ghpages-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Fazendo cache de recursos essenciais');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[SW] Aviso de cache:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removendo cache antigo:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});`;

export const STANDALONE_STYLES_CSS = `/* styles.css - Visual Tecnológico Azulado Padrão EdTech Corporativa */
:root {
  --bg-main: #070d18;
  --bg-card: #0c1626;
  --bg-card-hover: #112038;
  --border-color: #1e3a5f;
  --border-light: #2d5485;
  --accent-cyan: #38bdf8;
  --accent-blue: #2563eb;
  --accent-glow: rgba(56, 189, 248, 0.18);
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-main);
  color: var(--text-main);
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  padding-bottom: 60px;
}

/* Header & Barra Superior */
.app-header {
  background: rgba(12, 22, 38, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 40;
  padding: 12px 20px;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #0b1b36, #0284c7);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--accent-cyan);
  box-shadow: 0 0 12px var(--accent-glow);
}

.brand-title h1 {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
}

.brand-title p {
  font-size: 0.75rem;
  color: var(--accent-cyan);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-pwa-install {
  background: linear-gradient(135deg, #0284c7, #2563eb);
  color: #fff;
  border: 1px solid #38bdf8;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px rgba(2, 132, 199, 0.25);
  transition: all 0.2s ease;
}

.btn-pwa-install:hover {
  filter: brightness(1.15);
  transform: translateY(-1px);
}

/* Barra de Progresso Global */
.progress-strip {
  background: #08111e;
  border-bottom: 1px solid var(--border-color);
  padding: 10px 20px;
}

.progress-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.progress-info {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.progress-info strong {
  color: #fff;
}

.progress-track {
  flex: 1;
  max-width: 400px;
  height: 8px;
  background: #112238;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #0284c7, #38bdf8);
  width: 0%;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 8px var(--accent-cyan);
}

.progress-badge {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-cyan);
  font-family: var(--font-mono);
}

/* Layout Principal */
.main-wrapper {
  max-width: 1400px;
  margin: 24px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 24px;
}

@media (max-width: 1024px) {
  .main-wrapper {
    grid-template-columns: 1fr;
  }
}

/* Player de Vídeo e Aula Ativa */
.player-container {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

.video-responsive-box {
  position: relative;
  padding-top: 56.25%; /* 16:9 */
  background: #02060d;
}

.video-element, .video-placeholder-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-placeholder-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #0b2244 0%, #030814 100%);
  padding: 24px;
  text-align: center;
}

.video-play-pulse {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(56, 189, 248, 0.15);
  border: 2px solid var(--accent-cyan);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 24px var(--accent-glow);
  transition: transform 0.2s ease;
  margin-bottom: 16px;
}

.video-play-pulse:hover {
  transform: scale(1.08);
}

.video-src-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border-color);
  color: var(--accent-cyan);
  padding: 4px 10px;
  border-radius: 6px;
  margin-top: 8px;
}

.lesson-meta-bar {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: #091322;
}

.lesson-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-cyan);
  background: rgba(56, 189, 248, 0.1);
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.lesson-title-box h2 {
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  margin-top: 6px;
}

.lesson-title-box p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.btn-complete-lesson {
  background: #0f243e;
  color: #cbd5e1;
  border: 1px solid var(--border-color);
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.btn-complete-lesson.completed {
  background: rgba(16, 185, 129, 0.15);
  border-color: var(--success);
  color: var(--success);
}

.btn-exercise-highlight {
  background: linear-gradient(135deg, #0284c7, #2563eb);
  color: #fff;
  border: 1px solid var(--accent-cyan);
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 20px rgba(56, 189, 248, 0.25);
  transition: all 0.2s ease;
}

.btn-exercise-highlight:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(56, 189, 248, 0.4);
}

.lesson-details-body {
  padding: 24px;
}

.framework-card {
  background: #081424;
  border-left: 4px solid var(--accent-cyan);
  border-radius: 0 8px 8px 0;
  padding: 14px 18px;
  margin-bottom: 20px;
}

.framework-card strong {
  color: var(--accent-cyan);
  display: block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.key-points-list {
  list-style: none;
  display: grid;
  gap: 10px;
}

.key-points-list li {
  font-size: 0.92rem;
  color: var(--text-muted);
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.key-points-list li::before {
  content: '▸';
  color: var(--accent-cyan);
  font-weight: bold;
}

/* Sidebar de Aulas */
.sidebar-wrapper {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 850px;
}

.sidebar-header {
  padding: 16px 20px;
  background: #091322;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-header h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}

.modules-accordion {
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.module-group {
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background: #08111e;
  overflow: hidden;
}

.module-header {
  padding: 12px 14px;
  background: #0d1a2d;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-cyan);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.module-lessons-list {
  display: flex;
  flex-direction: column;
}

.lesson-item-btn {
  width: 100%;
  text-align: left;
  padding: 12px 14px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(30, 58, 95, 0.4);
  color: var(--text-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  transition: background 0.15s ease;
}

.lesson-item-btn:hover {
  background: rgba(56, 189, 248, 0.05);
}

.lesson-item-btn.active {
  background: rgba(2, 132, 199, 0.18);
  border-left: 3px solid var(--accent-cyan);
}

.lesson-item-info h4 {
  font-size: 0.88rem;
  font-weight: 600;
  color: #fff;
}

.lesson-item-info span {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.lesson-check-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: transparent;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.lesson-check-icon.checked {
  background: var(--success);
  border-color: var(--success);
  color: #fff;
}

/* Modal de Exercício */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(2, 6, 13, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-overlay.hidden {
  display: none;
}

.modal-card {
  background: #0b182b;
  border: 1px solid var(--border-light);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px var(--accent-glow);
  border-radius: 16px;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #07101d;
}

.modal-header h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
}

.btn-close-modal {
  background: transparent;
  border: none;
  color: var(--text-dim);
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
}

.modal-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.case-scenario-box {
  background: #07111e;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 16px;
}

.case-scenario-box strong {
  color: var(--accent-cyan);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 6px;
}

.case-scenario-box p {
  font-size: 0.92rem;
  color: #e2e8f0;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.exercise-option-btn {
  background: #0d1e33;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 14px 18px;
  text-align: left;
  color: #cbd5e1;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1.5;
}

.exercise-option-btn:hover {
  background: #122844;
  border-color: var(--accent-cyan);
}

.exercise-option-btn.selected-correct {
  background: rgba(16, 185, 129, 0.15);
  border-color: var(--success);
  color: #fff;
}

.exercise-option-btn.selected-incorrect {
  background: rgba(239, 68, 68, 0.15);
  border-color: var(--danger);
  color: #fff;
}

.exercise-feedback-box {
  border-radius: 10px;
  padding: 16px;
  margin-top: 10px;
  display: none;
}

.exercise-feedback-box.active {
  display: block;
}

.exercise-feedback-box.correct {
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid var(--success);
}

.exercise-feedback-box.incorrect {
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid var(--warning);
}

/* Ferramentas e Recursos de Apoio */
.resources-section {
  max-width: 1400px;
  margin: 40px auto 20px;
  padding: 0 20px;
}

.section-title-wrap {
  margin-bottom: 24px;
}

.section-title-wrap h2 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
}

.section-title-wrap p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.resources-tabs {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 24px;
  overflow-x: auto;
}

.tab-btn {
  background: transparent;
  border: none;
  padding: 10px 18px;
  color: var(--text-dim);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.tab-btn.active {
  color: var(--accent-cyan);
  border-bottom-color: var(--accent-cyan);
}

.tab-content-panel {
  display: none;
}

.tab-content-panel.active {
  display: block;
}

/* Roleplay Table */
.roleplay-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}

.roleplay-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 12px;
}

@media (max-width: 768px) {
  .roleplay-grid {
    grid-template-columns: 1fr;
  }
}

.roleplay-col {
  padding: 14px;
  border-radius: 8px;
  font-size: 0.88rem;
}

.roleplay-col.reactive {
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.roleplay-col.assertive {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

/* Templates */
.template-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}

.template-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.template-box {
  background: #050b14;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: #cbd5e1;
  white-space: pre-wrap;
  user-select: text;
}

.btn-copy {
  background: #112845;
  color: var(--accent-cyan);
  border: 1px solid var(--border-color);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-copy:hover {
  background: #173760;
  border-color: var(--accent-cyan);
}

/* Checklist */
.checklist-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
}

.checklist-score-gauge {
  background: #091322;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(30, 58, 95, 0.4);
}

.checklist-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #0284c7;
  cursor: pointer;
  margin-top: 2px;
}
`;

export const STANDALONE_INDEX_HTML = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Comunicação Assertiva com a Liderança — PWA</title>
  <meta name="description" content="Como Alinhar, Negociar e Dar Feedback Sem Risco. PWA Corporativo com 13 aulas, exercícios práticos e ferramentas executivas." />

  <!-- PWA & Mobile Icons -->
  <link rel="manifest" href="./manifest.json" />
  <meta name="theme-color" content="#070d18" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <link rel="icon" type="image/svg+xml" href="./icon.svg" />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>

  <!-- Top App Header -->
  <header class="app-header">
    <div class="header-container">
      <div class="brand">
        <div class="brand-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <polyline points="9 11 12 8 15 11"></polyline>
            <line x1="12" y1="8" x2="12" y2="14"></line>
          </svg>
        </div>
        <div class="brand-title">
          <h1>Comunicação Assertiva com a Liderança</h1>
          <p>Como Alinhar, Negociar e Dar Feedback Sem Risco</p>
        </div>
      </div>

      <div class="header-actions">
        <button id="btnPWAInstall" class="btn-pwa-install" style="display: none;">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Instalar no Celular
        </button>
      </div>
    </div>
  </header>

  <!-- Barra de Progresso Global -->
  <div class="progress-strip">
    <div class="progress-container">
      <div class="progress-info">
        <span>Progresso do Curso:</span>
        <strong id="progressLessonsCount">0 de 13 aulas concluídas</strong>
      </div>
      <div class="progress-track">
        <div id="progressBarFill" class="progress-fill"></div>
      </div>
      <div id="progressPercentBadge" class="progress-badge">0%</div>
    </div>
  </div>

  <!-- Layout Principal: Player + Sidebar -->
  <main class="main-wrapper">
    
    <!-- Seção Central: Player e Detalhes da Aula -->
    <section class="player-container">
      <div class="video-responsive-box">
        <div class="video-placeholder-overlay" id="videoOverlay">
          <div class="video-play-pulse" id="btnPlayVideo" title="Iniciar Reprodução">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#38bdf8" stroke="none">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
          <h3 id="playerVideoTitle" style="color: #fff; font-size: 1.1rem; font-weight: 700;">Aula 01: A Mente do Gestor</h3>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 4px;">Player de vídeo corporativo responsivo</p>
          <div class="video-src-badge" id="videoSrcLabel">src="URL_DO_VIDEO_AQUI"</div>
        </div>
      </div>

      <!-- Barra de Metadados e Ação -->
      <div class="lesson-meta-bar">
        <div class="lesson-title-box">
          <span class="lesson-tag" id="lessonModuleTag">Módulo 1</span>
          <h2 id="lessonMainTitle">Aula 01: A Mente do Gestor</h2>
          <p id="lessonSubtitle">Foco em soluções de negócio vs. relatar problemas.</p>
        </div>

        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
          <button id="btnToggleComplete" class="btn-complete-lesson">
            <span>Marcar como Concluída</span>
          </button>

          <button id="btnOpenExercise" class="btn-exercise-highlight">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Resolver Exercício da Aula
          </button>
        </div>
      </div>

      <!-- Conteúdo Técnico e Takeaways da Aula -->
      <div class="lesson-details-body">
        <div class="framework-card">
          <strong>Framework Chave da Aula</strong>
          <p id="lessonFrameworkText">Regra 1-3-1: 1 Problema, 3 Soluções Viáveis, 1 Recomendação Clara.</p>
        </div>

        <h4 style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 10px;">Pilares Fundamentais:</h4>
        <ul class="key-points-list" id="lessonKeyPoints">
          <!-- Injetado via app.js -->
        </ul>
      </div>
    </section>

    <!-- Sidebar de 13 Aulas em 4 Módulos -->
    <aside class="sidebar-wrapper">
      <div class="sidebar-header">
        <h3>Grade Curricular (13 Aulas)</h3>
        <span style="font-size: 0.75rem; color: #38bdf8; font-family: monospace;" id="sidebarCompletedCount">0/13</span>
      </div>
      <div class="modules-accordion" id="modulesListContainer">
        <!-- Renderizado dinamicamente via app.js -->
      </div>
    </aside>

  </main>

  <!-- Modal Interativo de Exercício -->
  <div class="modal-overlay hidden" id="exerciseModal">
    <div class="modal-card">
      <div class="modal-header">
        <h3 id="modalExerciseTitle">Exercício Prático — Aula 01</h3>
        <button class="btn-close-modal" id="btnCloseModal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="case-scenario-box">
          <strong>Estudo de Caso Corporativo</strong>
          <p id="modalScenarioText">Cenário situacional...</p>
        </div>

        <p style="font-weight: 600; font-size: 0.95rem; color: #fff;" id="modalQuestionText">Qual é a abordagem mais assertiva?</p>

        <div class="options-container" id="modalOptionsContainer">
          <!-- Opções geradas via app.js -->
        </div>

        <div class="exercise-feedback-box" id="modalFeedbackBox">
          <strong id="feedbackTitle">Análise Assertiva</strong>
          <p id="feedbackText" style="font-size: 0.88rem; margin-top: 4px;">Explicação detalhada...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Área de Ferramental e Recursos de Apoio -->
  <section class="resources-section">
    <div class="section-title-wrap">
      <h2>Ferramental Executivo e Recursos de Apoio</h2>
      <p>Modelos prontos, matrizes de roleplay e checklist rápido para aplicação no dia a dia com a liderança.</p>
    </div>

    <!-- Abas de Navegação dos Recursos -->
    <div class="resources-tabs">
      <button class="tab-btn active" data-tab="tab-templates">Templates Copiáveis</button>
      <button class="tab-btn" data-tab="tab-roleplay">Quadro de Roleplay</button>
      <button class="tab-btn" data-tab="tab-checklist">Checklist Pré-Conversa (5 Min)</button>
    </div>

    <!-- Aba 1: Templates Copiáveis -->
    <div class="tab-content-panel active" id="tab-templates">
      <div id="templatesListContainer">
        <!-- Injetado dinamicamente via app.js -->
      </div>
    </div>

    <!-- Aba 2: Quadro de Roleplay -->
    <div class="tab-content-panel" id="tab-roleplay">
      <div id="roleplayContainer">
        <!-- Injetado dinamicamente via app.js -->
      </div>
    </div>

    <!-- Aba 3: Checklist Pré-Conversa -->
    <div class="tab-content-panel" id="tab-checklist">
      <div class="checklist-card">
        <div class="checklist-score-gauge">
          <div>
            <h4 style="font-size: 1rem; color: #fff; font-weight: 700;">Prontidão para a Conversa</h4>
            <p style="font-size: 0.85rem; color: #94a3b8;">Revise os 6 pontos antes de reuniões decisivas de alinhamento ou feedback.</p>
          </div>
          <div style="font-family: monospace; font-size: 1.25rem; font-weight: 800; color: #38bdf8;" id="checklistScore">0 / 6</div>
        </div>

        <div id="checklistItemsList">
          <!-- Injetado dinamicamente via app.js -->
        </div>
      </div>
    </div>
  </section>

  <!-- Script da Aplicação -->
  <script src="./app.js"></script>
</body>
</html>`;

export const STANDALONE_APP_JS = `// app.js - Plataforma PWA Comunicação Assertiva com a Liderança
const COURSE_DATA = {
  modules: [
    {
      id: 1,
      title: "Módulo 1: O Que a Liderança Realmente Espera da Sua Comunicação",
      lessons: [
        {
          id: "aula-01",
          number: 1,
          moduleId: 1,
          title: "Aula 01: A Mente do Gestor",
          subtitle: "Foco em soluções de negócio vs. relatar problemas.",
          duration: "14 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Regra 1-3-1: 1 Problema, 3 Soluções Viáveis, 1 Recomendação Clara.",
          keyPoints: [
            "Gestores operam sob restrição severa de tempo e pressão constante da diretoria.",
            "Trazer um problema isolado transfere ansiedade; trazer alternativas demonstra maturidade de líder.",
            "Sempre quantifique o custo de não agir antes de pedir uma decisão executiva."
          ],
          exercise: {
            scenario: "Um fornecedor crítico atrasou a entrega do módulo de pagamentos em 5 dias, comprometendo o lançamento da próxima semana. Seu gestor acabou de te chamar.",
            question: "Qual abordagem de comunicação é verdadeiramente assertiva?",
            options: [
              {
                text: "Oi chefe, o fornecedor atrasou de novo e infelizmente não vamos conseguir entregar na semana que vem por causa deles.",
                isAssertive: false,
                classification: "Passiva / Reativa",
                feedback: "Postura de vítima. Transfere a culpa sem propor contingência, gerando irritação imediata no gestor."
              },
              {
                text: "Temos um desvio de 5 dias no módulo de pagamentos pelo fornecedor. Já tracei 2 caminhos: lançar o beta com pagamento manual ou mobilizar squad interna por 48h com custo adicional de R$ 3.500. Recomendo a opção 1 para preservar o orçamento.",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Perfeita aplicação da Regra 1-3-1: fato objetivo, impacto claro e alternativas viáveis com recomendação pronta."
              },
              {
                text: "Eu já avisei semana passada que esse fornecedor era ruim, agora não adianta cobrar a equipe se atrasar tudo.",
                isAssertive: false,
                classification: "Passivo-Agressiva",
                feedback: "Defensiva ('eu avisei'). Não resolve o cronograma da empresa e desgasta sua reputação interpessoal."
              }
            ]
          }
        },
        {
          id: "aula-02",
          number: 2,
          moduleId: 1,
          title: "Aula 02: Mapeamento de Perfil",
          subtitle: "Como lidar com chefes analíticos, pragmáticos, relacionais e visionários.",
          duration: "18 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Matriz dos 4 Perfis de Liderança (Analítico, Pragmático, Relacional, Visionário).",
          keyPoints: [
            "Pragmático: Vá direto à conclusão em 30 segundos; foque em tempo e ROI.",
            "Analítico: Apresente dados, premissas de cálculo e riscos previamente mitigados.",
            "Relacional: Comece alinhando o impacto humano e clima das pessoas.",
            "Visionário: Conecte sua proposta ao objetivo estratégico trimestral da organização."
          ],
          exercise: {
            scenario: "Seu gestor possui perfil estritamente Pragmático (foco em velocidade e resultados). Você precisa pedir autorização para contratar uma nova ferramenta.",
            question: "Como iniciar a conversa para capturar a atenção dele?",
            options: [
              {
                text: "Quero te contar a história de como a equipe começou a perder tempo mês passado, passo a passo, analisando 12 sistemas diferentes...",
                isAssertive: false,
                classification: "Passiva / Reativa",
                feedback: "Prolixa. O líder pragmático perde o interesse no primeiro minuto e assumirá falta de síntese."
              },
              {
                text: "Objetivo: reduzir 15h semanais de retrabalho com payback em 45 dias. A ferramenta custa R$ 800/mês e economiza R$ 4.200 em horas extras. Posso mostrar o ROI em 2 minutos?",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Excelente calibração ao perfil Pragmático: número, benefício financeiro e delimitação de tempo."
              },
              {
                text: "Você nunca para pra ouvir o time de verdade, mas essa ferramenta é urgente.",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Ataque emocional que fecha qualquer canal de negociação."
              }
            ]
          }
        },
        {
          id: "aula-03",
          number: 3,
          moduleId: 1,
          title: "Aula 03: Timing e Canais",
          subtitle: "Escolhendo estrategicamente entre 1:1, e-mail e mensagens instantâneas.",
          duration: "12 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Pirâmide de Fricção: Síncrono vs. Assíncrono.",
          keyPoints: [
            "Chat (Slack/Teams): Notificações rápidas e bloqueios operacionais de 1 linha.",
            "E-mail: Formalização de acordos, prestação de contas com histórico auditável.",
            "Reunião 1:1: Conversas difíceis, negociação de prazos e alinhamento de expectativas.",
            "Nunca trate divergências técnicas ou críticas profundas em canais públicos ou grupos."
          ],
          exercise: {
            scenario: "Você discorda da decisão tomada pelo gestor em reunião geral com a diretoria sobre o cancelamento de um recurso que sua equipe criou.",
            question: "Qual é o canal e timing corretos para se posicionar?",
            options: [
              {
                text: "Interromper na frente da diretoria para provar tecnicamente que a decisão está errada.",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Violação de lealdade hierárquica pública. Gera constrangimento e quebra a confiança."
              },
              {
                text: "Aguardar o término da reunião geral, solicitar 15 minutos em 1:1 reservado no mesmo dia e apresentar os dados com respeito.",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Maturidade sênior: preserva o líder publicamente e negocia no fórum adequado com dados."
              },
              {
                text: "Mandar indiretas irônicas no chat do Teams durante a apresentação.",
                isAssertive: false,
                classification: "Passivo-Agressiva",
                feedback: "Comportamento tóxico que desqualifica seu profissionalismo."
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Módulo 2: CNV Aplicada à Hierarquia (Comunicação Não Violenta Vertical)",
      lessons: [
        {
          id: "aula-04",
          number: 4,
          moduleId: 2,
          title: "Aula 04: Os 4 Passos no Corporativo",
          subtitle: "Fatos, Impacto Operacional, Necessidade e Pedido Viável.",
          duration: "16 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Modelo FINP: Fato Inquestionável + Impacto + Necessidade + Pedido.",
          keyPoints: [
            "Fato: O que uma câmera filmaria, sem adjetivos acusatórios.",
            "Impacto: O reflexo direto nas metas do setor ou na qualidade da entrega.",
            "Necessidade: O pilar técnico que viabiliza o resultado excelente.",
            "Pedido Viável: Ação concreta, binária e com prazo claro para fechamento de acordo."
          ],
          exercise: {
            scenario: "Seu gestor costuma enviar demandas complexas às 21h cobrando respostas para a manhã seguinte.",
            question: "Como aplicar o FINP de forma assertiva?",
            options: [
              {
                text: "Você não respeita o horário de ninguém e quer que façamos milagres de madrugada.",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Julgamento agressivo que aciona reatividade e discussão defensiva."
              },
              {
                text: "Nas últimas 2 semanas, recebi 4 demandas após as 21h com prazo para as 8h. Quando isso ocorre, o tempo de validação fica sob risco. Para mantermos o padrão, proponho que demandas após as 19h entrem na fila das 9h do dia seguinte. Podemos fechar esse acordo?",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "FINP exemplar: fatos numéricos, impacto no padrão, necessidade de rigor e pedido viável."
              },
              {
                text: "Ignorar as mensagens e reclamar com outros analistas no café.",
                isAssertive: false,
                classification: "Passivo-Agressiva",
                feedback: "Não soluciona o problema e desgasta o clima em fofocas."
              }
            ]
          }
        },
        {
          id: "aula-05",
          number: 5,
          moduleId: 2,
          title: "Aula 05: Dizer 'Não' com Estratégia",
          subtitle: "Técnicas de priorização conjunta e limites sem confronto.",
          duration: "15 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "O Sim Condicional com Trade-off Transparente.",
          keyPoints: [
            "Evite o 'não' puro; utilize o 'Sim Condicional' acompanhado do impacto em outras frentes.",
            "Transfira a escolha do trade-off para o líder: qual projeto atual deve ser pausado?",
            "Mantenha a fila de prioridades visível para desarmar a ilusão de capacidade infinita."
          ],
          exercise: {
            scenario: "Sua agenda está em 100% de capacidade com a entrega regulatória. O gestor pede uma apresentação extra urgente para quinta.",
            question: "Qual resposta equilibra assertividade e lealdade?",
            options: [
              {
                text: "Impossível, você sabe que estou afogado com o projeto regulatório. Peça para outro.",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Confronto inflexível que rotula você como profissional resistente."
              },
              {
                text: "Consigo montar sim! Minha prioridade hoje é o relatório regulatório da sexta. Se eu fizer a apresentação, o relatório atrasará 2 dias. Faz sentido trocarmos essa prioridade ou prefere que eu apoie um analista para montar a estrutura?",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Sim Condicional: expõe a consequência no prazo regulatório e oferece alternativa de liderança."
              },
              {
                text: "Tá bom... (aceita calado, vira a noite e entrega os dois incompletos).",
                isAssertive: false,
                classification: "Passiva / Reativa",
                feedback: "Submissão que gera esgotamento e falha de entrega."
              }
            ]
          }
        },
        {
          id: "aula-06",
          number: 6,
          moduleId: 2,
          title: "Aula 06: Laboratório de Reenquadramento",
          subtitle: "Transformando reclamações em propostas técnicas.",
          duration: "13 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Reenquadramento Problem-to-Proposal.",
          keyPoints: [
            "Reclamações consomem capital de confiança; propostas técnicas geram autonomia.",
            "Quantifique as perdas de processo antes de sugerir a mudança de rotina.",
            "Proponha testes pilotos com duração delimitada (15 dias) para diminuir a percepção de risco."
          ],
          exercise: {
            scenario: "A equipe perde horas retrabalhando briefings confusos enviados pelas áreas parceiras.",
            question: "Como reenquadrar essa dor em proposta executiva?",
            options: [
              {
                text: "Mapeei que gastamos 12h semanais retrabalhando briefings incompletos. Criei um checklist padrão de 5 campos obrigatórios. Quero rodar um piloto de 15 dias para medirmos a redução. Posso iniciar nesta segunda?",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Reenquadramento de alto nível: dados de desperdício, solução pronta e teste piloto de baixo risco."
              },
              {
                text: "Ninguém nesta empresa sabe passar briefing direito, é uma bagunça.",
                isAssertive: false,
                classification: "Passivo-Agressiva",
                feedback: "Reclamação estéril que ataca colegas sem construir solução."
              },
              {
                text: "Se não mudarem os briefings, eu vou recusar todas as demandas.",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Ameaça infantil que fere conduta e compliance."
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Módulo 3: Recebendo Feedbacks Difíceis com Inteligência Emocional",
      lessons: [
        {
          id: "aula-07",
          number: 7,
          moduleId: 3,
          title: "Aula 07: Desarmando a Reatividade",
          subtitle: "Como controlar os mecanismos de defesa e escutar ativamente.",
          duration: "15 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Pausa Tática de 3 Segundos e Parafraseamento Investigativo.",
          keyPoints: [
            "Separe sua identidade profissional do fato operacional apontado pelo gestor.",
            "Não interrompa com justificativas rápidas nos primeiros minutos de conversa.",
            "Parafraseie a fala do líder para desacelerar o tom emocional e ganhar clareza."
          ],
          exercise: {
            scenario: "Seu gestor diz duramente: 'Você foi imaturo na apresentação para o cliente hoje e quase perdeu a conta.'",
            question: "Qual o primeiro movimento assertivo?",
            options: [
              {
                text: "Imaturo foi você, que nem revisou nada comigo antes!",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Explosão reativa que destrói a relação hierárquica."
              },
              {
                text: "Entendo sua preocupação com a conta, o cliente é prioridade. Para que eu corrija imediatamente: qual momento específico da apresentação você avaliou como imaturo?",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Valida a intenção de negócio e exige dados factuais específicos em vez do rótulo subjetivo."
              },
              {
                text: "Apenas abaixar a cabeça e pedir desculpas aos prantos sem entender o erro.",
                isAssertive: false,
                classification: "Passiva / Reativa",
                feedback: "Submissão que impede o aprendizado técnico."
              }
            ]
          }
        },
        {
          id: "aula-08",
          number: 8,
          moduleId: 3,
          title: "Aula 08: Perguntas de Filtro",
          subtitle: "Como converter críticas vagas em metas mensuráveis de entrega.",
          duration: "17 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Funil Socrático de Desambiguação de Críticas Vagas.",
          keyPoints: [
            "Criticas como 'seja mais proativo' ou 'falta visão de dono' precisam de tradução operacional.",
            "Pergunte pelo comportamento observável em 30 dias para calibrar a expectativa.",
            "Defina entregáveis verificáveis para afastar avaliações pautadas em impressões de humor."
          ],
          exercise: {
            scenario: "O líder diz: 'Você cumpre os prazos, mas falta ser mais estratégico.'",
            question: "Como converter isso em meta concreta?",
            options: [
              {
                text: "Quero muito desenvolver essa visão alinhada ao seu padrão. Nos projetos do próximo mês, que tipo de iniciativa específica você gostaria de ver partindo de mim antes de você me pedir?",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Força o gestor a traduzir adjetivos vagos em entregáveis práticos e mensuráveis."
              },
              {
                text: "Você nunca está satisfeito com nada que faço!",
                isAssertive: false,
                classification: "Passivo-Agressiva",
                feedback: "Reatividade vitimista que fecha a conversa de desenvolvimento."
              },
              {
                text: "Ok, vou tentar... (e vai embora sem saber o que fazer).",
                isAssertive: false,
                classification: "Passiva / Reativa",
                feedback: "Acordo vazio que perpetua a insatisfação no próximo ciclo."
              }
            ]
          }
        },
        {
          id: "aula-09",
          number: 9,
          moduleId: 3,
          title: "Aula 09: Fechamento do Ciclo",
          subtitle: "Formalização do alinhamento por e-mail e definição de data para follow-up.",
          duration: "12 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Técnica do E-mail Espelho de Confirmação.",
          keyPoints: [
            "Conversas orais dependem da memória seletiva de curto prazo.",
            "Envie o e-mail espelho até 3 horas após a reunião consolidando os 3 combinados principais.",
            "Defina uma data explícita de checkpoint para revisar a evolução das ações."
          ],
          exercise: {
            scenario: "Você teve uma conversa de 45 min ajustando o escopo de um projeto com o gestor.",
            question: "Qual o melhor fechamento operacional?",
            options: [
              {
                text: "Enviar um e-mail estruturado resumindo os 3 combinados, prazos de cada parte e sugerindo um checkpoint de 15 min no dia 25.",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Cria registro compartilhado, reduz ruídos e agenda o retorno com profissionalismo sênior."
              },
              {
                text: "Não registrar nada para não parecer burocrático.",
                isAssertive: false,
                classification: "Passiva / Reativa",
                feedback: "Deixa os acordos desprotegidos em caso de divergência futura."
              },
              {
                text: "Mandar um áudio de 6 minutos no WhatsApp com opiniões soltas.",
                isAssertive: false,
                classification: "Passivo-Agressiva",
                feedback: "Inadequado para histórico profissional auditável."
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Módulo 4: Upward Feedback — Como Dar Feedback para Cima com Segurança",
      lessons: [
        {
          id: "aula-10",
          number: 10,
          moduleId: 4,
          title: "Aula 10: Matriz de Viabilidade",
          subtitle: "Leitura de cenário: quando vale a pena falar e quando recuar.",
          duration: "16 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Matriz de Risco Político vs. Impacto Operacional.",
          keyPoints: [
            "Dar feedback para a chefia exige capital de confiança previamente acumulado.",
            "Avalie o nível de receptividade do líder e o tempo de convivência na equipe.",
            "Em líderes punitivos com impacto cosmético, a estratégia prudente é o contorno técnico."
          ],
          exercise: {
            scenario: "Seu gestor assumiu a equipe há 3 semanas e costuma interromper seu raciocínio em reuniões com pares. Você ainda não tem capital de relacionamento.",
            question: "Como agir segundo a Matriz de Viabilidade?",
            options: [
              {
                text: "Confrontá-lo na próxima reunião para não parecer fraco.",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Risco político altíssimo com líder recém-chegado. Soará como insubordinação."
              },
              {
                text: "Construir entregas impecáveis nas próximas semanas, mapear o padrão dele e abordar o tema em 1:1 reservado a partir da semana 5.",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Leitura estratégica perfeita: capital de confiança antes de intervenções comportamentais delicadas."
              },
              {
                text: "Fazer piadas com os outros analistas para desgastar a imagem dele.",
                isAssertive: false,
                classification: "Passivo-Agressiva",
                feedback: "Sabotagem que fere o código ético e expõe seu próprio emprego."
              }
            ]
          }
        },
        {
          id: "aula-11",
          number: 11,
          moduleId: 4,
          title: "Aula 11: O Framework SCI Invertido",
          subtitle: "Aplicando Situação, Comportamento e Impacto com a chefia.",
          duration: "18 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Framework SCI Invertido (Situação + Comportamento + Impacto de Negócio).",
          keyPoints: [
            "Situação: Contexto específico e verificável de data e local.",
            "Comportamento: A ação exata observada, sem adjetivação pessoal.",
            "Impacto: O prejuízo para o cronograma, orçamento ou meta compartilhada.",
            "Encerre convidando o líder para desenhar o fluxo de melhoria conjunto."
          ],
          exercise: {
            scenario: "O gestor muda requisitos técnicos no meio do sprint via chat sem registrar no Jira, gerando retrabalho na squad.",
            question: "Como aplicar o SCI Invertido em 1:1?",
            options: [
              {
                text: "Na última quinta (Situação), quando a mudança no banco foi pedida no chat sem registro (Comportamento), o time precisou refazer 16h de testes e o prazo do MVP ficou sob risco (Impacto). Podemos alinhar que mudanças passem por 5 min de validação comigo antes de entrar no sprint?",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "SCI Invertido cirúrgico: fato neutro, impacto mensurado e proposta de alinhamento construtivo."
              },
              {
                text: "Você não sabe o que quer e fica mudando de ideia toda hora.",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Julgamento adjetivado que fecha o diálogo e cria atrito."
              },
              {
                text: "Atrasar o projeto de propósito para ele aprender a registrar.",
                isAssertive: false,
                classification: "Passivo-Agressiva",
                feedback: "Sabotagem corporativa velada que destrói sua credibilidade."
              }
            ]
          }
        },
        {
          id: "aula-12",
          number: 12,
          moduleId: 4,
          title: "Aula 12: Construção de Acordos",
          subtitle: "Como alinhar fluxos de trabalho e prevenir desgastes futuros.",
          duration: "14 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Contrato Psicológico e SLA Interno de Comunicação.",
          keyPoints: [
            "Conflitos contínuos revelam falta de acordos explícitos de trabalho.",
            "Defina janelas de resposta para urgências reais vs. planejamento assíncrono.",
            "Crie cadências de visibilidade para diminuir a ansiedade de microgerenciamento."
          ],
          exercise: {
            scenario: "O gestor cobra status a cada 2 horas no WhatsApp, interrompendo sua concentração em tarefas complexas.",
            question: "Como negociar um acordo operacional saudável?",
            options: [
              {
                text: "Para te dar 100% de visibilidade e conseguir focar nos blocos de código, proponho enviar um resumo consolidado às 11h e às 17h. Se houver algum bloqueio grave, eu te aciono na hora. Podemos testar essa cadência por uma semana?",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Atende à necessidade de segurança do líder e protege suas janelas de trabalho focado."
              },
              {
                text: "Bloquear o gestor ou postar indiretas nas redes sociais.",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Comportamento imaturo com risco de desligamento sumário."
              },
              {
                text: "Responder apenas com 'ok' visivelmente irritado.",
                isAssertive: false,
                classification: "Passivo-Agressiva",
                feedback: "Aumenta a desconfiança do líder, que continuará cobrando com mais frequência."
              }
            ]
          }
        },
        {
          id: "aula-13",
          number: 13,
          moduleId: 4,
          title: "Aula 13: Simulação Real e Plano de Ação",
          subtitle: "Elaboração do seu plano de comunicação de 30 dias.",
          duration: "20 min",
          videoSrc: "URL_DO_VIDEO_AQUI",
          framework: "Plano Estratégico Executivo de 30 Dias (Diagnóstico, Aplicação, Consolidação).",
          keyPoints: [
            "Dias 1 a 10: Mapeamento do estilo decisório do líder e gatilhos de estresse.",
            "Dias 11 a 20: Prática sistemática da Regra 1-3-1 e do Sim Condicional.",
            "Dias 21 a 30: Condução de 1:1 estruturada de alinhamento e calibração de acordos."
          ],
          exercise: {
            scenario: "Você concluiu as aulas do curso e quer iniciar sua evolução prática no trabalho amanhã.",
            question: "Qual o primeiro passo mais estratégico?",
            options: [
              {
                text: "Observar e mapear o perfil predominante do gestor, aplicar a Regra 1-3-1 nos próximos e-mails e usar o checklist de 5 minutos antes de reuniões críticas.",
                isAssertive: true,
                classification: "Assertiva",
                feedback: "Execução estratégica gradual: diagnóstico neutro, melhoria de soluções e uso contínuo das ferramentas."
              },
              {
                text: "Chegar amanhã impondo todas as técnicas e exigindo mudanças imediatas da chefia.",
                isAssertive: false,
                classification: "Agressiva",
                feedback: "Soará como arrogância teórica repentina e gerará resistência."
              },
              {
                text: "Guardar o curso e continuar agindo da mesma forma por insegurança.",
                isAssertive: false,
                classification: "Passiva / Reativa",
                feedback: "Sem prática diária deliberada, nenhuma habilidade se desenvolve."
              }
            ]
          }
        }
      ]
    }
  ],
  roleplay: [
    {
      context: "Demanda urgente repassada às 17h50 no final do expediente",
      reactive: "Todo dia a mesma coisa! Eu tenho vida fora daqui e não sou obrigado a ficar até mais tarde sem aviso.",
      assertive: "Consigo atender essa demanda sim. Como já estou encerrando as entregas de hoje, posso priorizá-la logo às 8h30 de amanhã ou pausar o relatório de hoje agora. Qual das opções melhor atende a estratégia?"
    },
    {
      context: "Feedback genérico: 'Você precisa vestir mais a camisa da empresa'",
      reactive: "Eu me mato de trabalhar e você não valoriza nada! Se for pra ser assim, nem me esforço mais.",
      assertive: "Quero garantir que minha entrega esteja 100% alinhada às expectativas. Para que eu calibre minhas ações: que comportamento observável ou iniciativa prática você gostaria de ver partindo de mim no próximo mês?"
    },
    {
      context: "Mudança repentina de prioridade no meio do projeto sem aviso prévio",
      reactive: "Desisto! Não adianta planejar nada aqui porque vocês mudam de ideia todo dia.",
      assertive: "Entendi a mudança de rumo. Para alinharmos os impactos: com essa nova frente, o cronograma anterior terá um acréscimo de 10 dias úteis. Posso atualizar os stakeholders com essa premissa?"
    }
  ],
  templates: [
    {
      title: "Follow-up Executivo Pós-Reunião",
      category: "Follow-up",
      content: \`Assunto: [Alinhamento & Próximos Passos] - Reunião sobre [Projeto]

Olá [Nome do Gestor],

Obrigado pelo tempo e direcionamento de hoje. Para consolidarmos o combinado:

1. Decisão: Aprovamos a abordagem [Opção A] para atingir [Meta].
2. Responsabilidades:
- [Meu Nome]: Entrega de [Item 1] até [Data/Hora].
- [Gestor/Outro]: Validação de [Item 2] até [Data/Hora].
3. Checkpoint: Alinhamento de 15 min no dia [Data] para validar os primeiros indicadores.

Qualquer ajuste, estou à disposição.

Abraço,
[Seu Nome]\`
    },
    {
      title: "Solicitação Estratégica de 1:1",
      category: "1:1",
      content: \`Olá [Nome do Gestor], tudo bem?

Gostaria de agendar 20 minutos com você esta semana para tratarmos de [Tema Específico].

Pauta em 3 tópicos:
1. Status das 2 entregas prioritárias;
2. Bloqueador que preciso do seu direcionamento de negócio;
3. Proposta de melhoria no fluxo de homologação.

Opções de horário:
- Terça às 14h30
- Quarta às 10h00

Caso prefira outro dia, fico à disposição.

Obrigado,
[Seu Nome]\`
    },
    {
      title: "Renegociação Estratégica de Prazos",
      category: "Prazos",
      content: \`Assunto: [Atualização de Cronograma & Mitigação] - Projeto [Nome]

Olá [Nome do Gestor],

Identificamos um desvio decorrente de [Fato Objetivo, ex: atraso na API externa].

Para proteger a meta principal, formulei 2 cenários:
• Cenário A (Recomendado): Lançar no dia [Data] contendo o escopo core e postergar os módulos extras.
• Cenário B: Entregar o escopo completo com prorrogação de [X dias], mantendo testes rigorosos.

Qual caminho melhor atende o posicionamento da área perante a diretoria?

Abraço,
[Seu Nome]\`
    }
  ],
  checklist: [
    { text: "Separei fatos numéricos e concretos em vez de opiniões subjetivas?" },
    { text: "Estruturei a proposta pela Regra 1-3-1 (1 problema, 3 soluções, 1 recomendação)?" },
    { text: "Adaptei a abordagem ao perfil do líder (Pragmático, Analítico, Relacional ou Visionário)?" },
    { text: "Estou ciente da Pausa Tática de 3 segundos para não interromper com justificativas?" },
    { text: "Meu pedido final é específico, realizável e com prazo claro?" },
    { text: "Preparei o modelo mental do e-mail de confirmação para enviar logo após a reunião?" }
  ]
};

// Estado da Aplicação e LocalStorage
let currentLessonId = localStorage.getItem('assertiva_current_lesson') || 'aula-01';
let completedLessons = JSON.parse(localStorage.getItem('assertiva_completed_lessons') || '[]');
let checklistAnswers = JSON.parse(localStorage.getItem('assertiva_checklist') || '[]');
let deferredInstallPrompt = null;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  loadLesson(currentLessonId);
  updateProgressUI();
  renderRoleplay();
  renderTemplates();
  renderChecklist();
  setupTabs();
  setupPWA();
  setupEventListeners();
});

// Encontrar aula por ID
function findLesson(id) {
  for (const mod of COURSE_DATA.modules) {
    const lesson = mod.lessons.find(l => l.id === id);
    if (lesson) return lesson;
  }
  return COURSE_DATA.modules[0].lessons[0];
}

// Carregar Aula no Player e Conteúdo
function loadLesson(id) {
  const lesson = findLesson(id);
  currentLessonId = lesson.id;
  localStorage.setItem('assertiva_current_lesson', currentLessonId);

  document.getElementById('lessonModuleTag').textContent = \`Módulo \${lesson.moduleId}\`;
  document.getElementById('lessonMainTitle').textContent = lesson.title;
  document.getElementById('playerVideoTitle').textContent = lesson.title;
  document.getElementById('lessonSubtitle').textContent = lesson.subtitle;
  document.getElementById('videoSrcLabel').textContent = \`src="\${lesson.videoSrc}"\`;
  document.getElementById('lessonFrameworkText').textContent = lesson.framework;

  // Renderizar Key Points
  const kpList = document.getElementById('lessonKeyPoints');
  kpList.innerHTML = '';
  lesson.keyPoints.forEach(pt => {
    const li = document.createElement('li');
    li.textContent = pt;
    kpList.appendChild(li);
  });

  // Atualizar Botão de Concluída
  const btnComplete = document.getElementById('btnToggleComplete');
  const isDone = completedLessons.includes(lesson.id);
  if (isDone) {
    btnComplete.classList.add('completed');
    btnComplete.innerHTML = \`
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      Concluída
    \`;
  } else {
    btnComplete.classList.remove('completed');
    btnComplete.innerHTML = '<span>Marcar como Concluída</span>';
  }

  // Atualizar itens ativos no sidebar
  document.querySelectorAll('.lesson-item-btn').forEach(btn => {
    if (btn.dataset.id === lesson.id) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Renderizar Sidebar das 13 Aulas
function renderSidebar() {
  const container = document.getElementById('modulesListContainer');
  container.innerHTML = '';

  COURSE_DATA.modules.forEach(mod => {
    const modGroup = document.createElement('div');
    modGroup.className = 'module-group';

    const header = document.createElement('div');
    header.className = 'module-header';
    header.innerHTML = \`<span>\${mod.title}</span>\`;
    modGroup.appendChild(header);

    const list = document.createElement('div');
    list.className = 'module-lessons-list';

    mod.lessons.forEach(l => {
      const isDone = completedLessons.includes(l.id);
      const btn = document.createElement('button');
      btn.className = \`lesson-item-btn \${l.id === currentLessonId ? 'active' : ''}\`;
      btn.dataset.id = l.id;

      btn.innerHTML = \`
        <div class="lesson-item-info">
          <h4>\${l.title}</h4>
          <span>\${l.duration} • \${l.subtitle.substring(0, 40)}...</span>
        </div>
        <div class="lesson-check-icon \${isDone ? 'checked' : ''}" id="check-\${l.id}">✓</div>
      \`;

      btn.addEventListener('click', () => loadLesson(l.id));
      list.appendChild(btn);
    });

    modGroup.appendChild(list);
    container.appendChild(modGroup);
  });
}

// Atualizar UI de Progresso Geral (0 a 100%)
function updateProgressUI() {
  const total = 13;
  const count = completedLessons.length;
  const pct = Math.round((count / total) * 100);

  document.getElementById('progressBarFill').style.width = \`\${pct}%\`;
  document.getElementById('progressPercentBadge').textContent = \`\${pct}%\`;
  document.getElementById('progressLessonsCount').textContent = \`\${count} de \${total} aulas concluídas\`;
  document.getElementById('sidebarCompletedCount').textContent = \`\${count}/\${total}\`;
}

// Alternar Conclusão da Aula Ativa
function toggleLessonCompletion() {
  const idx = completedLessons.indexOf(currentLessonId);
  if (idx > -1) {
    completedLessons.splice(idx, 1);
  } else {
    completedLessons.push(currentLessonId);
  }
  localStorage.setItem('assertiva_completed_lessons', JSON.stringify(completedLessons));

  loadLesson(currentLessonId);
  updateProgressUI();
  renderSidebar();
}

// Modal de Exercício Interativo
function openExerciseModal() {
  const lesson = findLesson(currentLessonId);
  const modal = document.getElementById('exerciseModal');
  const ex = lesson.exercise;

  document.getElementById('modalExerciseTitle').textContent = \`Exercício Prático — \${lesson.title}\`;
  document.getElementById('modalScenarioText').textContent = ex.scenario;
  document.getElementById('modalQuestionText').textContent = ex.question;

  const optContainer = document.getElementById('modalOptionsContainer');
  optContainer.innerHTML = '';

  const feedbackBox = document.getElementById('modalFeedbackBox');
  feedbackBox.className = 'exercise-feedback-box';
  feedbackBox.style.display = 'none';

  ex.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'exercise-option-btn';
    btn.textContent = opt.text;

    btn.addEventListener('click', () => {
      // Destacar botões
      document.querySelectorAll('.exercise-option-btn').forEach(b => {
        b.className = 'exercise-option-btn';
        b.disabled = true;
      });

      if (opt.isAssertive) {
        btn.classList.add('selected-correct');
        feedbackBox.className = 'exercise-feedback-box active correct';
        document.getElementById('feedbackTitle').textContent = '✓ Resposta Assertiva e Estratégica';
      } else {
        btn.classList.add('selected-incorrect');
        feedbackBox.className = 'exercise-feedback-box active incorrect';
        document.getElementById('feedbackTitle').textContent = \`⚠️ Classificação: \${opt.classification}\`;
      }

      document.getElementById('feedbackText').textContent = opt.feedback;
      feedbackBox.style.display = 'block';

      // Marcar aula como concluída automaticamente se acertar
      if (opt.isAssertive && !completedLessons.includes(lesson.id)) {
        completedLessons.push(lesson.id);
        localStorage.setItem('assertiva_completed_lessons', JSON.stringify(completedLessons));
        updateProgressUI();
        renderSidebar();
        loadLesson(lesson.id);
      }
    });

    optContainer.appendChild(btn);
  });

  modal.classList.remove('hidden');
}

function closeExerciseModal() {
  document.getElementById('exerciseModal').classList.add('hidden');
}

// Renderizar Roleplay
function renderRoleplay() {
  const container = document.getElementById('roleplayContainer');
  container.innerHTML = '';

  COURSE_DATA.roleplay.forEach(item => {
    const card = document.createElement('div');
    card.className = 'roleplay-card';
    card.innerHTML = \`
      <h4 style="font-size: 0.95rem; color: #fff; font-weight: 700;">Situação: \${item.context}</h4>
      <div class="roleplay-grid">
        <div class="roleplay-col reactive">
          <strong style="color: #ef4444; display: block; margin-bottom: 4px; font-size: 0.8rem; text-transform: uppercase;">Reação Reativa / Vítima</strong>
          <p style="color: #fca5a5;">\${item.reactive}</p>
        </div>
        <div class="roleplay-col assertive">
          <strong style="color: #10b981; display: block; margin-bottom: 4px; font-size: 0.8rem; text-transform: uppercase;">Resposta Estratégica / Assertiva</strong>
          <p style="color: #86efac;">\${item.assertive}</p>
        </div>
      </div>
    \`;
    container.appendChild(card);
  });
}

// Renderizar Templates
function renderTemplates() {
  const container = document.getElementById('templatesListContainer');
  container.innerHTML = '';

  COURSE_DATA.templates.forEach((tmpl, i) => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.innerHTML = \`
      <div class="template-header">
        <div>
          <span style="font-size: 0.75rem; color: #38bdf8; font-weight: 700; text-transform: uppercase;">\${tmpl.category}</span>
          <h4 style="font-size: 1rem; color: #fff; font-weight: 700;">\${tmpl.title}</h4>
        </div>
        <button class="btn-copy" id="btnCopyTmpl-\${i}">Copiar Template</button>
      </div>
      <div class="template-box">\${tmpl.content}</div>
    \`;

    card.querySelector(\`#btnCopyTmpl-\${i}\`).addEventListener('click', (e) => {
      navigator.clipboard.writeText(tmpl.content).then(() => {
        const btn = e.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copiado!';
        btn.style.borderColor = '#10b981';
        btn.style.color = '#10b981';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 2000);
      });
    });

    container.appendChild(card);
  });
}

// Renderizar Checklist
function renderChecklist() {
  const container = document.getElementById('checklistItemsList');
  container.innerHTML = '';

  COURSE_DATA.checklist.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'checklist-item';
    const isChecked = checklistAnswers.includes(i);

    div.innerHTML = \`
      <input type="checkbox" id="chk-\${i}" \${isChecked ? 'checked' : ''} />
      <label for="chk-\${i}" style="color: #e2e8f0; font-size: 0.92rem; cursor: pointer; flex: 1;">
        \${item.text}
      </label>
    \`;

    div.querySelector('input').addEventListener('change', (e) => {
      if (e.target.checked) {
        if (!checklistAnswers.includes(i)) checklistAnswers.push(i);
      } else {
        checklistAnswers = checklistAnswers.filter(x => x !== i);
      }
      localStorage.setItem('assertiva_checklist', JSON.stringify(checklistAnswers));
      updateChecklistScore();
    });

    container.appendChild(div);
  });

  updateChecklistScore();
}

function updateChecklistScore() {
  const total = COURSE_DATA.checklist.length;
  const checked = checklistAnswers.length;
  const el = document.getElementById('checklistScore');
  if (el) {
    el.textContent = \`\${checked} / \${total}\`;
    if (checked === total) {
      el.style.color = '#10b981';
    } else {
      el.style.color = '#38bdf8';
    }
  }
}

// Abas de Navegação
function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content-panel').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.tab;
      document.getElementById(targetId).classList.add('active');
    });
  });
}

// PWA Install Prompt Handler
function setupPWA() {
  const btnInstall = document.getElementById('btnPWAInstall');

  // Verificar se já está rodando standalone
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone) {
    btnInstall.style.display = 'none';
    return;
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    btnInstall.style.display = 'inline-flex';
  });

  btnInstall.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      if (outcome === 'accepted') {
        btnInstall.style.display = 'none';
        deferredInstallPrompt = null;
      }
    } else {
      alert('Para instalar no iOS: toque no botão Compartilhar do Safari e escolha "Adicionar à Tela de Início".');
    }
  });

  window.addEventListener('appinstalled', () => {
    btnInstall.style.display = 'none';
    deferredInstallPrompt = null;
    console.log('[PWA] Aplicativo instalado com sucesso!');
  });
}

// Event Listeners Gerais
function setupEventListeners() {
  document.getElementById('btnToggleComplete').addEventListener('click', toggleLessonCompletion);
  document.getElementById('btnOpenExercise').addEventListener('click', openExerciseModal);
  document.getElementById('btnCloseModal').addEventListener('click', closeExerciseModal);
  document.getElementById('exerciseModal').addEventListener('click', (e) => {
    if (e.target.id === 'exerciseModal') closeExerciseModal();
  });
  document.getElementById('btnPlayVideo').addEventListener('click', () => {
    alert('Vídeo demonstrativo: Substitua a tag src="URL_DO_VIDEO_AQUI" pelo link do seu servidor ou serviço de hospedagem de vídeos (YouTube, Vimeo, Cloudflare Stream ou MP4).');
  });
}

// Registro do Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('[PWA] Service Worker registrado no escopo:', reg.scope))
      .catch((err) => console.warn('[PWA] Erro ao registrar Service Worker:', err));
  });
}
`;

export const STANDALONE_FILES: StandaloneFile[] = [
  {
    filename: 'index.html',
    language: 'html',
    description: 'Layout mobile-first, player responsivo, barra de progresso, sidebar de 13 aulas, modal de exercícios e seções de apoio.',
    content: STANDALONE_INDEX_HTML
  },
  {
    filename: 'styles.css',
    language: 'css',
    description: 'Design corporativo tecnológico azulado com paleta elegante em tons sóbrios, variáveis CSS e responsividade completa.',
    content: STANDALONE_STYLES_CSS
  },
  {
    filename: 'app.js',
    language: 'javascript',
    description: 'Lógica completa das 13 aulas, persistência de progresso no localStorage, modal de casos com feedback imediato e PWA install prompt.',
    content: STANDALONE_APP_JS
  },
  {
    filename: 'manifest.json',
    language: 'json',
    description: 'Configuração PWA instalável com display: standalone, temas azul-escuro, ícones e atalhos rápidos.',
    content: STANDALONE_MANIFEST_JSON
  },
  {
    filename: 'sw.js',
    language: 'javascript',
    description: 'Service Worker para cache de arquivos estáticos, funcionamento offline e suporte a deploy no GitHub Pages.',
    content: STANDALONE_SW_JS
  }
];

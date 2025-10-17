// Nome e versão do cache - MUDAR O NÚMERO CADA VEZ QUE O CONTEÚDO DE urlsToCache MUDAR
const CACHE_NAME = 'soro-bombeiros-cache-v2';

// Lista de arquivos estáticos a serem cacheados
// Inclui os arquivos essenciais da shell e os novos ícones PWA.
const urlsToCache = [
  '/', // Cacha a página inicial
  '/index.html',
  // Arquivos estáticos do projeto
  '/src/main.jsx', 
  '/src/index.css', 
  
  // Ícone da aplicação no <head> do index.html
  '/src/assets/Logo.svg', 
  
  // Ícones PWA (dentro da pasta public/iconsPwa/)
  '/iconsPwa/S.O.R.O 180x180.png',
  '/iconsPwa/S.O.R.O 1024x1024.png',
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando e abrindo cache...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache aberto, adicionando URLs...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptando Requisições e Servindo do Cache (Estratégia Cache-First)
self.addEventListener('fetch', event => {
  // Ignora requisições não-GET e requisições externas (para não quebrar a API do backend)
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna o arquivo do cache se ele existir
        if (response) {
          return response;
        }
        
        // Se não estiver no cache, faz a requisição normal (e adiciona ao cache se for bem-sucedida)
        return fetch(event.request).then(
          response => {
            // Verifica se recebemos uma resposta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona a resposta para que o Service Worker possa armazená-la em cache
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Limpeza de Caches Antigos (Ativação)
self.addEventListener('activate', event => {
  console.log('Service Worker: Ativado. Limpando caches antigos...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
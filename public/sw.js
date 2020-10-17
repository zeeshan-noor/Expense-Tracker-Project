

var CACHE_NAME =  'expense-tracker'
var filesToCache = [
    '/',
    "/static/js/bundle.js",
    "/static/js/main.chunk.js",
    "/static/js/0.chunk.js",
    '/index.html',
 
]

self.addEventListener("activate", function(e) {
  console.log("[ServiceWorker] Activate");
});


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
   caches.open(CACHE_NAME).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});


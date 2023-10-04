const CACHE_NAME = 'cache-v1'

const precacheResources = [
    'index.html',
    'index.js',
    'manifest.json',
    '/src/components/boton-lit.js',
    '/src/components/cardprofile-lit.js',
    '/src/components/combo-lit.js',
    '/src/components/game-lit.js',
    '/src/views/home-view.js',
    '/src/views/game-view.js',
    '/assets/images/topo.png',
    '/assets/images/icons/icon-72x72.png',
    '/assets/images/icons/perfil-del-usuario.png',
    '/assets/images/icons/martillo.png',

    
]

self.addEventListener('install', (event) => {
    console.log('Service worker install event!')
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(precacheResources)
            })
            .then(function () {
                // `skipWaiting()` forces the waiting ServiceWorker to become the
                // active ServiceWorker, triggering the `onactivate` event.
                // Together with `Clients.claim()` this allows a worker to take effect
                // immediately in the client(s).
                return self.skipWaiting()
            })
    );
});

// Activate event
// Be sure to call self.clients.claim()
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    return caches.delete(cacheName)
                })
                // `claim()` sets this worker as the active worker for all clients that
                // match the workers scope and triggers an `oncontrollerchange` event for
                // the clients.
            ).then(() => self.clients.claim())
        })
    );
});

self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request)
  event.respondWith(
      caches.match(event.request)
      .then((res) => {
        return res || fetch(event.request);        
      })
      .catch(console.log())
  );
});
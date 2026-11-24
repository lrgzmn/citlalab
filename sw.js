/* Guarda la app en el teléfono para que abra sin internet.
   Cuando cambies algo (por ejemplo, al agregar una ficha), sube el número de VERSION
   para que todos reciban la actualización. El avance de los alumnos NO se borra al actualizar. */
var VERSION = 'repaso-v9-2';
var ARCHIVOS = ['./', 'index.html', 'css/styles.css', 'js/core.js', 'js/catalogo.js', 'js/art.js', 'js/sfx.js', 'js/store.js', 'js/app.js', 'js/lectura.js', 'js/extras.js', 'maestro.html',
  'data/lista.js', 'data/semana.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png',
  'fonts/atkinson-hyperlegible-latin-400-normal.woff2', 'fonts/atkinson-hyperlegible-latin-700-normal.woff2', 'fonts/opendyslexic-latin-400-normal.woff2', 'fonts/opendyslexic-latin-700-normal.woff2'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(ARCHIVOS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
/* Primero intenta la red (para ver cambios nuevos); si no hay internet, usa lo guardado.
   Las fichas de data/ se guardan solas la primera vez que se abren. */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(function (r) {
    if (r && r.ok) { var copia = r.clone(); caches.open(VERSION).then(function (c) { c.put(e.request, copia); }); }
    return r;
  }).catch(function () { return caches.match(e.request); }));
});

const CACHE_NAME = 'word-creator-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js',
  'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js',
  'https://cdn.jsdelivr.net/npm/@babel/standalone@7.22.9/babel.min.js',
  'https://cdn.jsdelivr.net/npm/docx@7.8.2/build/index.js',
  'https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
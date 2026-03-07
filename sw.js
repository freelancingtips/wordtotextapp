const CACHE_NAME = "wordtotext-cache-v1";
const urlsToCache = [
  "/wordtotextapp/",
  "/wordtotextapp/index.html",
  "/wordtotextapp/styles.css",
  "/wordtotextapp/app.js",
  "/wordtotextapp/assets/logo.png",
  "https://unpkg.com/mammoth/mammoth.browser.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// TO PUSH AN UPDATE TO USERS: Change "v2" to "v3", "v4", etc.
const CACHE_NAME = "lettuce-guess-v2";

const assets = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json",
  "./logo.png"
];

// Install the new update
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
  self.skipWaiting(); // Forces the app to update immediately
});

// Clean up old memory when the version number changes
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Deletes old versions automatically
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Load from memory if offline
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});

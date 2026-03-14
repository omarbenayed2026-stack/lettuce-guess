// TO PUSH AN UPDATE TO USERS: Change "v1" to "v2", "v3", etc.
const CACHE_NAME = "lettuce-guess-v1";

const assets = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json",
  "./logo.png"
];

// Install the new service worker and save files to memory
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
  self.skipWaiting(); // Forces the new update to install immediately
});

// Clean up old versions of the app when the version number changes
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Deletes old versions!
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of the app immediately
});

// Load from memory if offline
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});

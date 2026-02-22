const cacheName = "azchahome-cache-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/sw.js",
  "/assets/menu/loadscreen.jpg",
  "/assets/menu/banner1.jpg",
  "/assets/menu/banner2.jpg",
  "/assets/menu/background1.jpg",
  "/assets/menu/icon1.png",
  "/assets/menu/icon2.png",
  "/assets/menu/icon3.png",
  "/assets/menu/icon4.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => 
      Promise.all(cacheNames.map((c) => c !== cacheName ? caches.delete(c) : null))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
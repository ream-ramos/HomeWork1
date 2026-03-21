self.addEventListener("install", event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open("todo-cache-v2").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/ht.png",
                "/ht1.png"
            ]);
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

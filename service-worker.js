self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("todo-cache").then(function(cache) {
            return cache.addAll([
                "/index.html",
                "/ht.png",
                "/ht1.png"
            ]);
        })
    );
});
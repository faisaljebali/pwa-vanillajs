const staticRecipes = "recipes-app";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/recipe1.jpg",
  "/images/recipe2.jpg",
  "/images/recipe3.jpg",
  "/images/recipe4.jpg",
  "/images/recipe5.jpg",
  "/images/recipe6.jpg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticRecipes).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
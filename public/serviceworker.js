const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

// Install service worker
const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache')

            return cache.addAll(urlsToCache);
        })
    )

});

self.addEventListener('fetch', (event) => {

});

self.addEventListener('activate', (event) => {

});

// Listen for requests

// activate the service worker

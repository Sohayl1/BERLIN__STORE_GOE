// sw.js - أبسط كود عشان يرضي شروط PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // هنا ممكن تضيف كود الكاش، بس ده كفاية للتثبيت
    e.respondWith(fetch(e.request));
});
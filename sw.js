// ملف sw.js
self.addEventListener('install', (e) => {
    console.log('[Service Worker] تم التثبيت');
});

self.addEventListener('fetch', (e) => {
    // الكود ده ضروري عشان جوجل يعتبره تطبيق
    e.respondWith(fetch(e.request));
});
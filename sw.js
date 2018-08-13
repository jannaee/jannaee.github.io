/*
  Adding a service worker.
*/ 


//How to automatically change cache version?
const cacheName = 'v3';
const cachedFiles= [
  '/',
  '/index.html',
  'css/main.css',
  'js/main.js',
  'img/WorkLife-Hero.png'
];

// cache of items and installing of sw is successful.
self.addEventListener('install', function(event){
  console.log("[Step 2a. Service Worker from sw.js] Installed");
  event.waitUntil(
    caches.open(cacheName).then(
      function(cache){
        console.log("[Step 2b. Caching files...]")
      return cache.addAll(cachedFiles);
    })
  );
});

//allows old cache to be removed by removing any old files matching the previous cacheName
self.addEventListener('activate', function(event){
  console.log("[Step 3a. Service Worker from sw.js] Activated")

  event.waitUntil(//loop through anything in the cache and remove anything that doesn't relate to the original cacheName variable 
  
  
  caches.keys().then(function(cacheNames){
      return Promise.all(cacheNames.map(function(thiscacheName){
        if (thiscacheName !== cacheName){
          console.log("[Step 3b. Service Worker] Removing Cache", thiscacheName)
          return caches.delete(thiscacheName);
        }
      }))
    })


  )//end of waitUntil method
});

// the fetch event intercepts and allows custom responses to network
self.addEventListener('fetch', function(event) {
  console.log("[Step 4. Service Worker from sw.js] Fetching", event.request.url);

  event.respondWith(
    caches.match(event.request).then(//check to see if that url exists first then respond
      function(response){
        if (response){
          console.log("[Service worker] Found in cache", event.request.url); //if this url is in the cache return it
          return response;
        }
        //clone the request and response
        let requestClone = event.request.clone();
        fetch (requestClone)
      return fetch(event.request);
    })
  );
});
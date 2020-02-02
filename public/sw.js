importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2b86a7cf32262f242aa5.js",
    "revision": "a7fdb9662f9f5021de42d0252730f2bb"
  },
  {
    "url": "/_nuxt/2e42f478fc467c2801c0.js",
    "revision": "db13ad0f6e38ee58379b3622a68d8b75"
  },
  {
    "url": "/_nuxt/38f9518640567a9ece3e.js",
    "revision": "bb16ba972296f26fa8e4611de405f5a9"
  },
  {
    "url": "/_nuxt/40764b6798e5a53c8143.js",
    "revision": "d7a2d3c98e14160d8cf3ddde1147509b"
  },
  {
    "url": "/_nuxt/4242f4aa17aa12ba3dec.js",
    "revision": "4dd119d93ef2b8ab4cb11c8e388008ab"
  },
  {
    "url": "/_nuxt/4f5aa8efe615404e7d97.js",
    "revision": "b3512ecffcc9f1359dd19c4a7d383c8b"
  },
  {
    "url": "/_nuxt/57aa409b6b8152fbc6dc.js",
    "revision": "a19344a1e06e3e7f4013ce7278fe83ec"
  },
  {
    "url": "/_nuxt/5a428e510ca59cd86439.js",
    "revision": "a6f62e332d671ecfe245321cd218b6b6"
  },
  {
    "url": "/_nuxt/701a6b0063270f522e62.js",
    "revision": "8956dd32660e8a9a878f55b936ad03e4"
  },
  {
    "url": "/_nuxt/8b1e84f719cde5a436ca.js",
    "revision": "e7126a5d93c247ca87e8bba6b6bbd93d"
  },
  {
    "url": "/_nuxt/9418d5aa03329f7208a3.js",
    "revision": "dd01380b984bb6830b93f87ebd43d754"
  },
  {
    "url": "/_nuxt/de81a02c72bb64ef1556.js",
    "revision": "100c1a73ac75feac8eb3a6ebaa974d24"
  },
  {
    "url": "/_nuxt/e4075f0c93a58caf77a1.js",
    "revision": "88b5d15e47da32059acbcf92fe6e3794"
  },
  {
    "url": "/_nuxt/e63a1a53275717242d04.js",
    "revision": "37c9f08908fc3175c41dbcfecf3c8bdf"
  },
  {
    "url": "/_nuxt/f5ad8c08ac0ff20075fb.js",
    "revision": "fa97007f9e1b757c97210e3558854cbc"
  }
], {
  "cacheId": "hale-homes",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

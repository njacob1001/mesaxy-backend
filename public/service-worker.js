"use strict";var precacheConfig=[["./assets/img/og-image.jpg","19c986f67fed6cf79037896c13b69dbb"],["./favicon.ico","6c3a27e60d56c89d43ac8f91747c3c86"],["./icon_1024x1024.png","fe67d1c78094fcbd5b58efc1a54957f3"],["./icon_128x128.png","eb55b362e48857f7b9d2561c0f06f85a"],["./icon_16x16.png","29876ed5393ca5f11df4ee5f43e388aa"],["./icon_192x192.png","d9628b73b335b1a7d87aaf0d19ed3726"],["./icon_256x256.png","ebe2e4a5ba857ca6c9a30f1fb17e65ea"],["./icon_32x32.png","805247b358133b7ebeef283f75f4a286"],["./icon_384x384.png","1e82d53efa18d68408487d7b498a4e7f"],["./icon_512x512.png","162d72f8c4bfbb671566367ef6fe39d2"],["./icon_64x64.png","9bd531cfb4ffb97578b452b92d635d9d"],["./icon_96x96.png","fe3205be25415f5bd4f8705b90a2b396"],["./index.html","7ed08bfe4afa635a2687568e230b558a"],["./main-642c1d68f1b61d9330fb.css","31d89d6590f050e59e3123c155cc7593"],["./main-7864e8db1828312024ae.js","c85e587d17e51e0c064aacfcb7482634"],["./manifest.json","bd399018c81507ee2960d6867d4572ff"]],cacheName="sw-precache-v3-nombre-de-proyecto-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),a=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));var r="C:UsersjacobDesktopReact Projectsmesaxypublicindex.html";!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL(r,self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});
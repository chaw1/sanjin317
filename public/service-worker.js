if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),f={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/21_eVxYUVOrNj87UIKS4a/_buildManifest.js",revision:"5b20162b36d41054cb40914025338538"},{url:"/_next/static/21_eVxYUVOrNj87UIKS4a/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/19123e00.cbadf3f811fde858.js",revision:"cbadf3f811fde858"},{url:"/_next/static/chunks/31a343ae-66b23442e48fb86e.js",revision:"66b23442e48fb86e"},{url:"/_next/static/chunks/337.aa8b94386a1e3e6e.js",revision:"aa8b94386a1e3e6e"},{url:"/_next/static/chunks/448.f668e5144a788dcd.js",revision:"f668e5144a788dcd"},{url:"/_next/static/chunks/530.37a2983f78cf0bae.js",revision:"37a2983f78cf0bae"},{url:"/_next/static/chunks/551-7bebebfe9c492317.js",revision:"7bebebfe9c492317"},{url:"/_next/static/chunks/557.f482b4913ced26dc.js",revision:"f482b4913ced26dc"},{url:"/_next/static/chunks/6927e416.808bf6ae04394ff9.js",revision:"808bf6ae04394ff9"},{url:"/_next/static/chunks/828.ae8b0f6e9f446e34.js",revision:"ae8b0f6e9f446e34"},{url:"/_next/static/chunks/fa467bb9-d24c8a8e4f7cf9e0.js",revision:"d24c8a8e4f7cf9e0"},{url:"/_next/static/chunks/framework-fda0a023b274c574.js",revision:"fda0a023b274c574"},{url:"/_next/static/chunks/main-27f7e0773ce67318.js",revision:"27f7e0773ce67318"},{url:"/_next/static/chunks/pages/_app-e9db96bca25810aa.js",revision:"e9db96bca25810aa"},{url:"/_next/static/chunks/pages/_error-e25760ab1f22da04.js",revision:"e25760ab1f22da04"},{url:"/_next/static/chunks/pages/index-ad38b269e266a4c8.js",revision:"ad38b269e266a4c8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7cae2c124383b8eb.js",revision:"7cae2c124383b8eb"},{url:"/_next/static/css/9021ea1e0784d42f.css",revision:"9021ea1e0784d42f"},{url:"/_next/static/css/b078a62f2fd1a389.css",revision:"b078a62f2fd1a389"},{url:"/_next/static/media/56d4c7a1c09c3371-s.woff2",revision:"43b1d1276722d640d51608db4600bb69"},{url:"/_next/static/media/7e6a2e30184bb114-s.p.woff2",revision:"bca21fe1983e7d9137ef6e68e05f3aee"},{url:"/assets/annualmeeting.mp4",revision:"754daf094607b4537cb8d93adb3cf820"},{url:"/assets/infinitevps.webm",revision:"f7b371e070057472204ab2ae0b8915d4"},{url:"/assets/logo.webp",revision:"65c9a0758232b4ebb67062c77dc51dd4"},{url:"/assets/portfolio.webm",revision:"3c5c99872974c5db962f4aa1d8da08ce"},{url:"/assets/postliveshow.mp4",revision:"1793ebe8008e770e27cabcd2b06933c7"},{url:"/assets/scene.splinecode",revision:"a86155ea39bd500447e9c825ef110b58"},{url:"/assets/sell.mp4",revision:"afbd90981ccc6d568f8d8dfdee688d79"},{url:"/assets/stage.mp4",revision:"0bcb34219ae01672f73a90268e171c54"},{url:"/assets/test1.gif",revision:"332c4e1f8de5b39464e9590466fd5337"},{url:"/assets/test2.gif",revision:"17378062886b5de790c5acd6494328f6"},{url:"/assets/test3.gif",revision:"e4a023243bf187c3a2ea897ad549b8e9"},{url:"/assets/test4.gif",revision:"52f8d2eac5d9d961f79fe306a0e4620e"},{url:"/assets/test5.gif",revision:"f16b8ba45f7a6b13e65dd99730e55bdb"},{url:"/assets/test6.gif",revision:"2dee6271e596e647d3710c231e112e1f"},{url:"/assets/test7.gif",revision:"d3df9ae31b4e893247e70bc9f995085a"},{url:"/assets/test8.gif",revision:"c067f72557c13e3119227cc46ced0f8c"},{url:"/assets/testsanjin.png",revision:"4ab672cada6e1d0dc8a0f5ae39de74eb"},{url:"/assets/train.mp4",revision:"5fb435a6d1f8fec8996fbf45c082c3c9"},{url:"/assets/translate_bot.webm",revision:"9fc3ca04ec7b1aa9e328d64f5a0532ca"},{url:"/assets/unqueue.webm",revision:"04cd7ece4cb5b88a718605b596046cc9"},{url:"/assets/wrona.jpeg",revision:"89872f2806610edde5ea90ee8afbace6"},{url:"/favicon.ico",revision:"9f394dd2d1f01ab67d08ad0a0d2fc977"},{url:"/fonts/ClashGrotesk-Variable.woff2",revision:"218f4f81bdee5932a127929c6d693f0c"},{url:"/icon-192x192.png",revision:"3d82a3c3a8f93ada0df0fac471f90a04"},{url:"/icon-256x256.png",revision:"163a0793bd04edca75d788db5be7e16f"},{url:"/icon-384x384.png",revision:"60d91c093fdce918a995cebcf4cfe957"},{url:"/icon-512x512.png",revision:"2d8845afaf9400bfd34c4b160c448e36"},{url:"/manifest.json",revision:"397c15f89afa2472849bffb802a53190"},{url:"/robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

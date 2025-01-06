import"./chunk-2K2C3UZW.js";function L(e){return new Promise(function(o,c,n){(n=new XMLHttpRequest).open("GET",e,n.withCredentials=!0),n.onload=function(){n.status===200?o():c()},n.send()})}var y,T=(y=document.createElement("link")).relList&&y.relList.supports&&y.relList.supports("prefetch")?function(e){return new Promise(function(o,c,n){(n=document.createElement("link")).rel="prefetch",n.href=e,n.onload=o,n.onerror=c,document.head.appendChild(n)})}:L,A=window.requestIdleCallback||function(e){var o=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-o))}})},1)},d=new Set,p=new Set,w=!1;function S(e){if(e){if(e.saveData)return new Error("Save-Data is enabled");if(/2g/.test(e.effectiveType))return new Error("network conditions are poor")}return!0}function R(e){if(e||(e={}),window.IntersectionObserver){var o=function(s){s=s||1;var r=[],i=0;function t(){i<s&&r.length>0&&(r.shift()(),i++)}return[function(l){r.push(l)>1||t()},function(){i--,t()}]}(e.throttle||1/0),c=o[0],n=o[1],u=e.limit||1/0,a=e.origins||[location.hostname],h=e.ignores||[],g=e.delay||0,f=[],v=e.timeoutFn||A,m=typeof e.hrefFn=="function"&&e.hrefFn,P=e.prerender||!1;w=e.prerenderAndPrefetch||!1;var E=new IntersectionObserver(function(s){s.forEach(function(r){if(r.isIntersecting)f.push((r=r.target).href),function(t,l){l?setTimeout(t,l):t()}(function(){f.indexOf(r.href)!==-1&&(E.unobserve(r),(w||P)&&p.size<1?j(m?m(r):r.href).catch(function(t){if(!e.onError)throw t;e.onError(t)}):d.size<u&&!P&&c(function(){b(m?m(r):r.href,e.priority).then(n).catch(function(t){n(),e.onError&&e.onError(t)})}))},g);else{var i=f.indexOf((r=r.target).href);i>-1&&f.splice(i)}})},{threshold:e.threshold||0});return v(function(){(e.el||document).querySelectorAll("a").forEach(function(s){a.length&&!a.includes(s.hostname)||function r(i,t){return Array.isArray(t)?t.some(function(l){return r(i,l)}):(t.test||t).call(t,i.href,i)}(s,h)||E.observe(s)})},{timeout:e.timeout||2e3}),function(){d.clear(),E.disconnect()}}}function b(e,o,c){var n=S(navigator.connection);return n instanceof Error?Promise.reject(new Error("Cannot prefetch, "+n.message)):(p.size>0&&!w&&console.warn("[Warning] You are using both prefetching and prerendering on the same document"),Promise.all([].concat(e).map(function(u){if(!d.has(u))return d.add(u),(o?function(a){return window.fetch?fetch(a,{credentials:"include"}):L(a)}:T)(new URL(u,location.href).toString())})))}function j(e,o){var c=S(navigator.connection);if(c instanceof Error)return Promise.reject(new Error("Cannot prerender, "+c.message));if(!HTMLScriptElement.supports("speculationrules"))return b(e),Promise.reject(new Error("This browser does not support the speculation rules API. Falling back to prefetch."));if(document.querySelector('script[type="speculationrules"]'))return Promise.reject(new Error("Speculation Rules is already defined and cannot be altered."));for(var n=0,u=[].concat(e);n<u.length;n+=1){var a=u[n];if(window.location.origin!==new URL(a,window.location.href).origin)return Promise.reject(new Error("Only same origin URLs are allowed: "+a));p.add(a)}d.size>0&&!w&&console.warn("[Warning] You are using both prefetching and prerendering on the same document");var h=function(g){var f=document.createElement("script");f.type="speculationrules",f.text='{"prerender":[{"source": "list","urls": ["'+Array.from(g).join('","')+'"]}]}';try{document.head.appendChild(f)}catch(v){return v}return!0}(p);return h===!0?Promise.resolve():Promise.reject(h)}export{R as listen,b as prefetch,j as prerender};/*! For license information please see quicklink-EZ2NH64C.js.LEGAL.txt */

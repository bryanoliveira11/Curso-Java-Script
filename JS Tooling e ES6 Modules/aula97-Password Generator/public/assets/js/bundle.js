(()=>{"use strict";var n,e,r,o,t,a,i,c,A,s,u,p,d,l,f,m,C,g,h,E,b,v,y,x={122:(n,e,r)=>{r.d(e,{Z:()=>c});var o=r(537),t=r.n(o),a=r(645),i=r.n(a)()(t());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),i.push([n.id,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.password-generated {\n  font-size: 2rem;\n  color: var(--primary-color);\n}\n\n.btn-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.generate-password {\n  font-size: 1.5rem;\n  background: var(--primary-color);\n  color: #fff;\n  outline: 0;\n  border: 0;\n  border-radius: 0.2rem;\n  padding: 0.5rem;\n  width: 95%;\n  transition: all 300ms ease-in-out;\n}\n\n.generate-password:hover {\n  cursor: pointer;\n  scale: 1.1;\n}\n\ninput[type=\"checkbox\"] {\n  width: 1.3rem;\n  height: 1.3rem;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,gCAAgC;EAChC,WAAW;EACX,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,eAAe;EACf,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,cAAc;AAChB",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.password-generated {\n  font-size: 2rem;\n  color: var(--primary-color);\n}\n\n.btn-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.generate-password {\n  font-size: 1.5rem;\n  background: var(--primary-color);\n  color: #fff;\n  outline: 0;\n  border: 0;\n  border-radius: 0.2rem;\n  padding: 0.5rem;\n  width: 95%;\n  transition: all 300ms ease-in-out;\n}\n\n.generate-password:hover {\n  cursor: pointer;\n  scale: 1.1;\n}\n\ninput[type=\"checkbox\"] {\n  width: 1.3rem;\n  height: 1.3rem;\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),t&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=t):u[4]="".concat(t)),e.push(u))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===n){r=o;break}return r}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var A=n[c],s=o.base?A[0]+o.base:A[0],u=a[s]||0,p="".concat(s," ").concat(u);a[s]=u+1;var d=r(p),l={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)e[d].references++,e[d].updater(l);else{var f=t(l,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function t(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var A=o(n,t),s=0;s<a.length;s++){var u=r(a[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=A}}},569:n=>{var e={};n.exports=function(n,r){var o=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var t=void 0!==r.layer;t&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,t&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},B={};function k(n){var e=B[n];if(void 0!==e)return e.exports;var r=B[n]={id:n,exports:{}};return x[n](r,r.exports,k),r.exports}k.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return k.d(e,{a:e}),e},k.d=(n,e)=>{for(var r in e)k.o(e,r)&&!k.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},k.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),k.nc=void 0,n=function(n,e){return Math.floor(Math.random()*(e-n)+n)},e=function(){return",.;`^@#$%&*_+-=()"[n(0,17)]},r=document.querySelector(".password-generated"),o=document.querySelector(".passwd-length"),t=document.querySelector(".chk-upper"),a=document.querySelector(".chk-lower"),i=document.querySelector(".chk-number"),c=document.querySelector(".chk-symbol"),A=document.querySelector(".generate-password"),s=k(379),u=k.n(s),p=k(795),d=k.n(p),l=k(569),f=k.n(l),m=k(565),C=k.n(m),g=k(216),h=k.n(g),E=k(589),b=k.n(E),v=k(122),(y={}).styleTagTransform=b(),y.setAttributes=C(),y.insert=f().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=h(),u()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,A.addEventListener("click",(function(){var A;A=function(r,o,t,a,i){var c=[];r=Number(r);for(var A=0;A<=r;A++)o&&c.push(String.fromCharCode(n(65,91))),t&&c.push(String.fromCharCode(n(97,123))),a&&c.push(String.fromCharCode(n(48,58))),i&&c.push(e());return c.join("").slice(0,r)}(o.value,t.checked,a.checked,i.checked,c.checked),r.innerHTML=A||"No Options Selected."}))})();
//# sourceMappingURL=bundle.js.map
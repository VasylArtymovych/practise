parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"U9gd":[function(require,module,exports) {
const e=document.querySelector(".player"),t=e.querySelector(".toggle"),n=e.querySelector(".viewer"),r=e.querySelectorAll("[data-skip]"),s=e.querySelectorAll(".player__slider"),a=e.querySelector(".progress__filled"),c=e.querySelector(".progress");let o=!1;function i(){const e=n.paused?"play":"pause";n[e]()}function d(){const e=n.paused?"▶️":"❚ ❚";t.textContent=e}function u(e){n.currentTime+=parseFloat(e.currentTarget.dataset.skip)}function l(e){const t=e.currentTarget.name,r=e.currentTarget.value;n[t]=r}function p(){const e=n.currentTime/n.duration*100;a.style.flexBasis=`${e}%`}function v(e){const t=e.offsetX/c.offsetWidth*n.duration;n.currentTime=t}t.addEventListener("click",i),n.addEventListener("click",i),n.addEventListener("play",d),n.addEventListener("pause",d),n.addEventListener("timeupdate",p),c.addEventListener("click",v),c.addEventListener("mousedown",()=>o=!0),c.addEventListener("mouseup",()=>o=!1),c.addEventListener("mousemove",()=>{o&&v(event)}),r.forEach(e=>{e.addEventListener("click",u)}),s.forEach(e=>{e.addEventListener("input",l)});
},{}]},{},["U9gd"], null)
//# sourceMappingURL=/practise/script.0345902d.js.map
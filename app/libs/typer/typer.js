!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.typer=t():e.typer=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(1);var i=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},o=["typer","cursor-block","cursor-soft","cursor-hard","no-cursor"],u="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@$^*()".split("");e.exports=function(e,t){var n=[],a=document.body,l={};if("String"===f(e)&&(e=document.querySelector(e)),e.getAttribute("data-typer"))throw"You've already called Typer on this element.";t=d(t),n.speedSet=!0,n.voids=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"],n.classNames=o,n.uuid=i(),e.setAttribute("data-typer",n.uuid);var c={cursor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n.cursorRan)return console.warn('You can only call ".cursor" once.'),this;if(n.cursorRan=!0,!1===e)return n.cursor="no-cursor",this;var t=e.color,r=e.blink,i=e.block,o=[];return t&&function(e,t){n.style=document.createElement("style"),n.style.appendChild(document.createTextNode("")),document.head.appendChild(n.style);var r=document.styleSheets[document.styleSheets.length-1];"insertRule"in r?r.insertRule("".concat(e,"{").concat(t,"}"),0):r.addRule(e,t)}('[data-typer="'.concat(n.uuid,'"] .typer::after'),"background-color:".concat(t)),o.push("cursor-".concat("hard"===r?"hard":"soft")),!0===i&&o.push("cursor-block"),n.cursor=o.join(" "),this},line:function(e,t){return h("line",e,t),n.typing||(n.typing=!0,m()),this},continue:function(e,t){return h("continue",e,t),this},military:function(e,t){return h("military",e,t),n.typing||(n.typing=!0,m()),this},pause:function(e){return n.push({pause:+e||500}),this},emit:function(e,t){return t?"String"===f(t)&&(t=document.querySelector(t)):t=a,n.push({emit:e,el:t}),this},listen:function(e,t){return t?"String"===f(t)&&(t=document.querySelector(t)):t=a,n.push({listen:e,el:t}),this},back:function(e,t){return n.push({back:e,speed:t}),this},empty:function(){return n.push({empty:!0}),this},run:function(e){return n.push({run:e}),this},end:function(e,t){return n.push({end:!0}),n.cb=function(){return p(e,t)},T("end")},halt:function(){if(!n.typing)return this;var e='You can\'t call ".halt" while Typer is in %s mode.';return n.pause?console.warn(e,"pause"):n.listening?console.warn(e,"listen"):void(n.halt=!0)},resume:function(){if(!n.typing)return this;if(!n.complete){if(n.halt=!1,!n.resume)return console.warn('You called ".resume" before calling ".halt".');n.resume(),n.resume=null}},kill:w};function s(e){return{}.toString.call(e).slice(8,-1)}function f(e){var t=s(e);if("html"!==t.slice(0,4).toLowerCase()&&"String"!==t)throw"You need to provide a string selector, such as '.some-class', or an html element.";return t}function d(e){var r=s(e);if(void 0===e)return n.speedSet?t:70;if("Number"===r&&!isNaN(e))return e;if("Object"===r){var i=e.hasOwnProperty("min"),o=e.hasOwnProperty("max"),u=e.hasOwnProperty("speed");if(u&&!isNaN(e.speed))return e.speed;if(i&&o&&e.min<e.max)return e;if(!Object.keys(e).length&&n.speedSet)return t;if(!i&&!o&&!u)return t}throw"You have provided an invalid value for speed."}function p(t,r){n.style&&n.style.remove(),n.newDiv&&v(),e.removeAttribute("data-typer"),a.removeEventListener("killTyper",w),n.newDiv&&n.newDiv.classList.add("white-space"),n.newDiv="","function"==typeof t?t(e):"function"==typeof r&&r(e),!0!==t&&!0!==r||a.dispatchEvent(new Event("typerFinished"))}function v(){o.forEach(function(e){return n.newDiv.classList.remove(e)})}function h(e,t,i){var o="line"===e,u="continue"===e;if(t||i)if("Object"===s(t))(o||u&&t.container)&&n.push(l(t));else if(isNaN(i))n.push(l(i,t));else{var a;n.push((r(a={},e,t),r(a,"speed",d(i)),r(a,"html",!0),a))}else o&&n.push({line:1});function l(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,u=n.container,a=n.totalTime,l=n.military,c=!i&&("String"===s(u)?document.querySelector(u).textContent:u.textContent);return r(t={},e,i||c),r(t,"speed",d(n)),r(t,"html",!1!==n.html),r(t,"element",o?n.element:null),r(t,"military",function(e){if(!e)return null;if(+e)return{speed:+e,chars:3};if("Object"===s(e))return{speed:+e.speed||50,chars:+e.chars||3};throw"You have provided an invalid value for military."}(l)),r(t,"totalTime",a),t}}function m(){if(n.item>=0||(n.item=0),n.item===n.length)return n.complete=!0,a.removeEventListener("killTyper",w);n.ks||(n.ks=!0,a.addEventListener("killTyper",w)),n.cursor||(n.cursor="cursor-soft"),n.type=setInterval(function(){if(!n.length)return clearInterval(n.type);var r=n[n.item];r.line?y(r):r.continue?function(e){clearInterval(n.type),b(e)}(r):r.pause?function(e){clearInterval(n.type),n.pause=setTimeout(function(){n.pause=null,n.item++,m()},e.pause)}(r):r.emit?function(e){clearInterval(n.type),e.el.dispatchEvent(new Event(e.emit)),n.item++,m()}(r):r.listen?function(e){var t=e.el,r=e.listen;function i(e){n.listening=!1,t.removeEventListener(e.type,i),n.killed||(n.item++,m())}clearInterval(n.type),n.listening=!0,t.addEventListener(r,i),l={el:t,type:r,fxn:i}}(r):r.back?function(e){var r=e.back,i=e.speed;if(clearInterval(n.type),!n.newDiv||!n.newDiv.textContent)return n.item++,m();var o=function e(t){var r=0;return Array.from(t.childNodes).forEach(function(t){n.voids.includes(t.nodeName)&&r++,t.childNodes.length&&(r+=e(t))}),r}(n.newDiv),u=n.newDiv.textContent.length;if("empty"===r){if(!i||i>=u)n.newDiv.innerHTML="";else{var a=n.newDiv.cloneNode(!0),l=s(a);i<0&&(i+=u);for(var c=0;c<i;c++)l();f(a),n.newDiv.innerHTML=a.innerHTML}return n.item++,m()}function s(e){var o=0,u=function e(t){var n=[],r=Array.from(t.childNodes);return r.length?(r.forEach(function(t){t.childNodes.length?n=n.concat(e(t)):n.push(t)}),n):n}(e||n.newDiv).reverse();return function a(){if(n.halt)return n.resume=function(){return n.goBack=setInterval(a,i||t)},clearInterval(n.goBack);var l=u[0],c=n.voids.includes(l.nodeName);c?(l.remove(),u.shift()):(l.textContent=l.textContent.slice(0,-1),l.length||u.shift()),e||++o===r&&(clearInterval(n.goBack),f(n.newDiv),n.item++,m())}}function f(e){Array.from(e.childNodes).forEach(function(e){n.voids.includes(e.nodeName)||(e.childNodes.length&&f(e),"#text"===e.nodeName||e.innerHTML.length||e.remove(),"#text"!==e.nodeName||e.length||e.remove())})}r>u+o&&(r="all"),"all"===r&&(r=u+o),r<0&&(r=u+o- -1*r),n.goBack=setInterval(s(),i||t)}(r):r.empty?(e.innerHTML="",y({line:1})):r.run?function(t){var r=t.run;clearInterval(n.type),r(e),n.item++,m()}(r):r.end&&(clearInterval(n.type),n.cb())},0)}function y(t){clearInterval(n.type),n.newDiv&&(v(),n.newDiv.classList.add("white-space"),n.newDiv.innerHTML||(n.newDiv.innerHTML=" "));var r=document.createElement(t.element||"div");if(r.setAttribute("data-typer-child",n.uuid),r.className="".concat(n.cursor," typer white-space"),e.appendChild(r),n.newDiv=r,1===t.line)return n.item++,m();b(t)}function g(e,t){var r="Object"===s(e)?function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}(e.min,e.max):e;n.halt?n.resume=function(){return n.iterator=setTimeout(t,r)}:n.iterator=setTimeout(t,r)}function b(e){var t=e.line||e.continue,r=document.createElement("div");if(Array.isArray(t))return function(){var i=0,o=e.totalTime?e.totalTime/t.length:e.speed;g(o,function u(){var l=t[i++];r.textContent=l,n.newDiv.innerHTML+=e.html?l:r.innerHTML,i===t.length?a():g(o,u)})}();function i(){return u[Math.floor(Math.random()*u.length)]}function o(t,r,o){var u=0,a=e.military,l=a.speed,c=a.chars;t.innerHTML+=i(),n.military=setInterval(function(){if(u===c)return t.innerHTML=t.innerHTML.slice(0,-1)+r,clearInterval(n.military),o();t.innerHTML=t.innerHTML.slice(0,-1)+i(),u++},l)}function a(){return clearInterval(n.iterator),n.item++,m()}r.innerHTML=t,e.html?function(){var t=function e(t,r){var i=[];t=Array.from(t);for(var o=0;o<t.length;o++){var u=t[o],a=u.nodeName;"#text"===a?i.push({parent:r,content:u.textContent}):u.childNodes.length?function(){var t=document.createElement(a);Array.from(u.attributes).forEach(function(e){t.setAttribute(e.name,e.value)}),i.push({parent:r,newNode:t}),i=i.concat(e(u.childNodes,t))}():n.voids.includes(a)&&i.push({parent:r,voidNode:u})}return i}(r.childNodes,n.newDiv),i=0,u=0,l=t[i++],c=e.totalTime?e.totalTime/l.content.length:e.speed;g(c,function n(){if(l.content&&u===l.content.length&&(u=0,l=t[i++]),!l)return a();if(l.content){if(e.military)return o(l.parent,l.content[u++],function(){g(c,n)});l.parent.innerHTML+=l.content[u++]}else l.parent.appendChild(l.voidNode||l.newNode),l=t[i++];g(c,n)})}():function(){var i=0,u=e.totalTime?e.totalTime/t.length:e.speed;g(u,function l(){if(i===t.length)return a();var c=t[i];if(e.military)return o(n.newDiv,c,function(){i++,g(u,l)});"String"!==s(t)&&(r.textContent=c,c=r.innerHTML),n.newDiv.innerHTML+=c,i++,g(u,l)})}()}function w(){return n.typing?(l.el&&l.el.removeEventListener(l.type,l.fxn),clearInterval(n.type),clearInterval(n.iterator),clearInterval(n.goBack),clearInterval(n.military),clearTimeout(n.pause),p(),T("kill")):c}function T(e){var t='WARNING: you tried to call ".%s" after ".'.concat(e,'" has already been called.\nThe public API has been nullified.');function r(e){return console.warn(t,e),c}return Object.keys(c).forEach(function(t){"kill"===t&&"end"===e||(c[t]=r.bind(null,t))}),"kill"===e&&(n.killed&&r(),n.killed=!0),c}return c}},function(e,t,n){}])});
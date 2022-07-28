(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[5],{46981:(t,e)=>{"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0});var n={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function r(){if(void 0!==o)return o;o="";var t=document.createElement("p").style;for(var e in n)e+"Transform"in t&&(o=e);return o}function i(){return r()?"".concat(r(),"TransitionProperty"):"transitionProperty"}function a(){return r()?"".concat(r(),"Transform"):"transform"}function f(t,e){var o=i();o&&(t.style[o]=e,"transitionProperty"!==o&&(t.style.transitionProperty=e))}function l(t,e){var o=a();o&&(t.style[o]=e,"transform"!==o&&(t.style.transform=e))}var u,c=/matrix\((.*)\)/,s=/matrix3d\((.*)\)/;function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t){var e=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=e}function h(t,e,o){var n=o;if("object"!==p(e))return"undefined"!==typeof n?("number"===typeof n&&(n="".concat(n,"px")),void(t.style[e]=n)):u(t,e);for(var r in e)e.hasOwnProperty(r)&&h(t,r,e[r])}function g(t,e){var o=t["page".concat(e?"Y":"X","Offset")],n="scroll".concat(e?"Top":"Left");if("number"!==typeof o){var r=t.document;"number"!==typeof(o=r.documentElement[n])&&(o=r.body[n])}return o}function m(t){return g(t)}function v(t){return g(t,!0)}function y(t){var e=function(t){var e,o,n,r=t.ownerDocument,i=r.body,a=r&&r.documentElement;return o=(e=t.getBoundingClientRect()).left,n=e.top,{left:o-=a.clientLeft||i.clientLeft||0,top:n-=a.clientTop||i.clientTop||0}}(t),o=t.ownerDocument,n=o.defaultView||o.parentWindow;return e.left+=m(n),e.top+=v(n),e}function w(t){return null!==t&&void 0!==t&&t==t.window}function b(t){return w(t)?t.document:9===t.nodeType?t:t.ownerDocument}var x=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),W=/^(top|right|bottom|left)$/;function O(t,e){return"left"===t?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function S(t){return"left"===t?"right":"right"===t?"left":"top"===t?"bottom":"bottom"===t?"top":void 0}function P(t,e,o){"static"===h(t,"position")&&(t.style.position="relative");var n=-999,r=-999,a=O("left",o),l=O("top",o),u=S(a),c=S(l);"left"!==a&&(n=999),"top"!==l&&(r=999);var s,p="",g=y(t);("left"in e||"top"in e)&&(p=(s=t).style.transitionProperty||s.style[i()]||"",f(t,"none")),"left"in e&&(t.style[u]="",t.style[a]="".concat(n,"px")),"top"in e&&(t.style[c]="",t.style[l]="".concat(r,"px")),d(t);var m=y(t),v={};for(var w in e)if(e.hasOwnProperty(w)){var b=O(w,o),x="left"===w?n:r,W=g[w]-m[w];v[b]=b===w?x+W:x-W}h(t,v),d(t),("left"in e||"top"in e)&&f(t,p);var P={};for(var j in e)if(e.hasOwnProperty(j)){var T=O(j,o),C=e[j]-g[j];P[T]=j===T?v[T]+C:v[T]-C}h(t,P)}function j(t,e){var o=y(t),n=function(t){var e=window.getComputedStyle(t,null),o=e.getPropertyValue("transform")||e.getPropertyValue(a());if(o&&"none"!==o){var n=o.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(n[12]||n[4],0),y:parseFloat(n[13]||n[5],0)}}return{x:0,y:0}}(t),r={x:n.x,y:n.y};"left"in e&&(r.x=n.x+e.left-o.left),"top"in e&&(r.y=n.y+e.top-o.top),function(t,e){var o=window.getComputedStyle(t,null),n=o.getPropertyValue("transform")||o.getPropertyValue(a());if(n&&"none"!==n){var r,i=n.match(c);i?((r=(i=i[1]).split(",").map((function(t){return parseFloat(t,10)})))[4]=e.x,r[5]=e.y,l(t,"matrix(".concat(r.join(","),")"))):((r=n.match(s)[1].split(",").map((function(t){return parseFloat(t,10)})))[12]=e.x,r[13]=e.y,l(t,"matrix3d(".concat(r.join(","),")")))}else l(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}(t,r)}function T(t,e){for(var o=0;o<t.length;o++)e(t[o])}function C(t){return"border-box"===u(t,"boxSizing")}"undefined"!==typeof window&&(u=window.getComputedStyle?function(t,e,o){var n=o,r="",i=b(t);return(n=n||i.defaultView.getComputedStyle(t,null))&&(r=n.getPropertyValue(e)||n[e]),r}:function(t,e){var o=t.currentStyle&&t.currentStyle[e];if(x.test(o)&&!W.test(e)){var n=t.style,r=n.left,i=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,n.left="fontSize"===e?"1em":o||0,o=n.pixelLeft+"px",n.left=r,t.runtimeStyle.left=i}return""===o?"auto":o});var M=["margin","border","padding"];function D(t,e,o){var n,r={},i=t.style;for(n in e)e.hasOwnProperty(n)&&(r[n]=i[n],i[n]=e[n]);for(n in o.call(t),e)e.hasOwnProperty(n)&&(i[n]=r[n])}function E(t,e,o){var n,r,i,a=0;for(r=0;r<e.length;r++)if(n=e[r])for(i=0;i<o.length;i++){var f=void 0;f="border"===n?"".concat(n).concat(o[i],"Width"):n+o[i],a+=parseFloat(u(t,f))||0}return a}var H={getParent:function(t){var e=t;do{e=11===e.nodeType&&e.host?e.host:e.parentNode}while(e&&1!==e.nodeType&&9!==e.nodeType);return e}};function V(t,e,o){var n=o;if(w(t))return"width"===e?H.viewportWidth(t):H.viewportHeight(t);if(9===t.nodeType)return"width"===e?H.docWidth(t):H.docHeight(t);var r="width"===e?["Left","Right"]:["Top","Bottom"],i="width"===e?t.getBoundingClientRect().width:t.getBoundingClientRect().height,a=C(t),f=0;(null===i||void 0===i||i<=0)&&(i=void 0,(null===(f=u(t,e))||void 0===f||Number(f)<0)&&(f=t.style[e]||0),f=parseFloat(f)||0),void 0===n&&(n=a?1:-1);var l=void 0!==i||a,c=i||f;return-1===n?l?c-E(t,["border","padding"],r):f:l?1===n?c:c+(2===n?-E(t,["border"],r):E(t,["margin"],r)):f+E(t,M.slice(n),r)}T(["Width","Height"],(function(t){H["doc".concat(t)]=function(e){var o=e.document;return Math.max(o.documentElement["scroll".concat(t)],o.body["scroll".concat(t)],H["viewport".concat(t)](o))},H["viewport".concat(t)]=function(e){var o="client".concat(t),n=e.document,r=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var X={position:"absolute",visibility:"hidden",display:"block"};function Y(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var n,r=e[0];return 0!==r.offsetWidth?n=V.apply(void 0,e):D(r,X,(function(){n=V.apply(void 0,e)})),n}function k(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}T(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);H["outer".concat(e)]=function(e,o){return e&&Y(e,t,o?0:1)};var o="width"===t?["Left","Right"]:["Top","Bottom"];H[t]=function(e,n){var r=n;return void 0!==r?e?(C(e)&&(r+=E(e,["padding","border"],o)),h(e,t,r)):void 0:e&&Y(e,t,-1)}}));var L={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},getDocument:b,offset:function(t,e,o){if("undefined"===typeof e)return y(t);!function(t,e,o){if(o.ignoreShake){var n=y(t),r=n.left.toFixed(0),i=n.top.toFixed(0),f=e.left.toFixed(0),l=e.top.toFixed(0);if(r===f&&i===l)return}o.useCssRight||o.useCssBottom?P(t,e,o):o.useCssTransform&&a()in document.body.style?j(t,e):P(t,e,o)}(t,e,o||{})},isWindow:w,each:T,css:h,clone:function(t){var e,o={};for(e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);if(t.overflow)for(e in t)t.hasOwnProperty(e)&&(o.overflow[e]=t.overflow[e]);return o},mix:k,getWindowScrollLeft:function(t){return m(t)},getWindowScrollTop:function(t){return v(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++)L.mix(t,e<0||arguments.length<=e?void 0:arguments[e]);return t},viewportWidth:0,viewportHeight:0};k(L,H);var B=L.getParent;function F(t){if(L.isWindow(t)||9===t.nodeType)return null;var e,o=L.getDocument(t).body,n=L.css(t,"position");if(!("fixed"===n||"absolute"===n))return"html"===t.nodeName.toLowerCase()?null:B(t);for(e=B(t);e&&e!==o&&9!==e.nodeType;e=B(e))if("static"!==(n=L.css(e,"position")))return e;return null}var R=L.getParent;function _(t,e){for(var o={left:0,right:1/0,top:0,bottom:1/0},n=F(t),r=L.getDocument(t),i=r.defaultView||r.parentWindow,a=r.body,f=r.documentElement;n;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===n.clientWidth||n===a||n===f||"visible"===L.css(n,"overflow")){if(n===a||n===f)break}else{var l=L.offset(n);l.left+=n.clientLeft,l.top+=n.clientTop,o.top=Math.max(o.top,l.top),o.right=Math.min(o.right,l.left+n.clientWidth),o.bottom=Math.min(o.bottom,l.top+n.clientHeight),o.left=Math.max(o.left,l.left)}n=F(n)}var u=null;L.isWindow(t)||9===t.nodeType||(u=t.style.position,"absolute"===L.css(t,"position")&&(t.style.position="fixed"));var c=L.getWindowScrollLeft(i),s=L.getWindowScrollTop(i),p=L.viewportWidth(i),d=L.viewportHeight(i),h=f.scrollWidth,g=f.scrollHeight,m=window.getComputedStyle(a);if("hidden"===m.overflowX&&(h=i.innerWidth),"hidden"===m.overflowY&&(g=i.innerHeight),t.style&&(t.style.position=u),e||function(t){if(L.isWindow(t)||9===t.nodeType)return!1;var e=L.getDocument(t),o=e.body,n=null;for(n=R(t);n&&n!==o&&n!==e;n=R(n))if("fixed"===L.css(n,"position"))return!0;return!1}(t))o.left=Math.max(o.left,c),o.top=Math.max(o.top,s),o.right=Math.min(o.right,c+p),o.bottom=Math.min(o.bottom,s+d);else{var v=Math.max(h,c+p);o.right=Math.min(o.right,v);var y=Math.max(g,s+d);o.bottom=Math.min(o.bottom,y)}return o.top>=0&&o.left>=0&&o.bottom>o.top&&o.right>o.left?o:null}function z(t){var e,o,n;if(L.isWindow(t)||9===t.nodeType){var r=L.getWindow(t);e={left:L.getWindowScrollLeft(r),top:L.getWindowScrollTop(r)},o=L.viewportWidth(r),n=L.viewportHeight(r)}else e=L.offset(t),o=L.outerWidth(t),n=L.outerHeight(t);return e.width=o,e.height=n,e}function A(t,e){var o=e.charAt(0),n=e.charAt(1),r=t.width,i=t.height,a=t.left,f=t.top;return"c"===o?f+=i/2:"b"===o&&(f+=i),"c"===n?a+=r/2:"r"===n&&(a+=r),{left:a,top:f}}function I(t,e,o,n,r){var i=A(e,o[1]),a=A(t,o[0]),f=[a.left-i.left,a.top-i.top];return{left:Math.round(t.left-f[0]+n[0]-r[0]),top:Math.round(t.top-f[1]+n[1]-r[1])}}function N(t,e,o){return t.left<o.left||t.left+e.width>o.right}function $(t,e,o){return t.top<o.top||t.top+e.height>o.bottom}function U(t,e,o){var n=[];return L.each(t,(function(t){n.push(t.replace(e,(function(t){return o[t]})))})),n}function Z(t,e){return t[e]=-t[e],t}function q(t,e){return(/%$/.test(t)?parseInt(t.substring(0,t.length-1),10)/100*e:parseInt(t,10))||0}function G(t,e){t[0]=q(t[0],e.width),t[1]=q(t[1],e.height)}function J(t,e,o,n){var r=o.points,i=o.offset||[0,0],a=o.targetOffset||[0,0],f=o.overflow,l=o.source||t;i=[].concat(i),a=[].concat(a);var u={},c=0,s=_(l,!(!(f=f||{})||!f.alwaysByViewport)),p=z(l);G(i,p),G(a,e);var d=I(p,e,r,i,a),h=L.merge(p,d);if(s&&(f.adjustX||f.adjustY)&&n){if(f.adjustX&&N(d,p,s)){var g=U(r,/[lr]/gi,{l:"r",r:"l"}),m=Z(i,0),v=Z(a,0);(function(t,e,o){return t.left>o.right||t.left+e.width<o.left})(I(p,e,g,m,v),p,s)||(c=1,r=g,i=m,a=v)}if(f.adjustY&&$(d,p,s)){var y=U(r,/[tb]/gi,{t:"b",b:"t"}),w=Z(i,1),b=Z(a,1);(function(t,e,o){return t.top>o.bottom||t.top+e.height<o.top})(I(p,e,y,w,b),p,s)||(c=1,r=y,i=w,a=b)}c&&(d=I(p,e,r,i,a),L.mix(h,d));var x=N(d,p,s),W=$(d,p,s);if(x||W){var O=r;x&&(O=U(r,/[lr]/gi,{l:"r",r:"l"})),W&&(O=U(r,/[tb]/gi,{t:"b",b:"t"})),r=O,i=o.offset||[0,0],a=o.targetOffset||[0,0]}u.adjustX=f.adjustX&&x,u.adjustY=f.adjustY&&W,(u.adjustX||u.adjustY)&&(h=function(t,e,o,n){var r=L.clone(t),i={width:e.width,height:e.height};return n.adjustX&&r.left<o.left&&(r.left=o.left),n.resizeWidth&&r.left>=o.left&&r.left+i.width>o.right&&(i.width-=r.left+i.width-o.right),n.adjustX&&r.left+i.width>o.right&&(r.left=Math.max(o.right-i.width,o.left)),n.adjustY&&r.top<o.top&&(r.top=o.top),n.resizeHeight&&r.top>=o.top&&r.top+i.height>o.bottom&&(i.height-=r.top+i.height-o.bottom),n.adjustY&&r.top+i.height>o.bottom&&(r.top=Math.max(o.bottom-i.height,o.top)),L.mix(r,i)}(d,p,s,u))}return h.width!==p.width&&L.css(l,"width",L.width(l)+h.width-p.width),h.height!==p.height&&L.css(l,"height",L.height(l)+h.height-p.height),L.offset(l,{left:h.left,top:h.top},{useCssRight:o.useCssRight,useCssBottom:o.useCssBottom,useCssTransform:o.useCssTransform,ignoreShake:o.ignoreShake}),{points:r,offset:i,targetOffset:a,overflow:u}}function K(t,e,o){var n=o.target||e;return J(t,z(n),o,!function(t,e){var o=_(t,e),n=z(t);return!o||n.left+n.width<=o.left||n.top+n.height<=o.top||n.left>=o.right||n.top>=o.bottom}(n,o.overflow&&o.overflow.alwaysByViewport))}function Q(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function tt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(o),!0).forEach((function(e){et(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Q(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function et(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}K.__getOffsetParent=F,K.__getVisibleRectForElement=_,e.alignElement=K,e.alignPoint=function(t,e,o){var n,r,i=L.getDocument(t),a=i.defaultView||i.parentWindow,f=L.getWindowScrollLeft(a),l=L.getWindowScrollTop(a),u=L.viewportWidth(a),c=L.viewportHeight(a),s={left:n="pageX"in e?e.pageX:f+e.clientX,top:r="pageY"in e?e.pageY:l+e.clientY,width:0,height:0},p=n>=0&&n<=f+u&&r>=0&&r<=l+c,d=[o.points[0],"cc"];return J(t,s,tt(tt({},o),{},{points:d}),p)},e.default=K}}]);
//# sourceMappingURL=npm.dom-align.02371f7d8c723072aaf3.chunk.js.map
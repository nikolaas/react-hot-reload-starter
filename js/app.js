!function(e){function t(t){for(var r,a,l=t[0],i=t[1],u=t[2],s=0,f=[];s<l.length;s++)a=l[s],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(m&&m(t);f.length;)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={4:0},o={4:0},c=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[];a[e]?t.push(a[e]):0!==a[e]&&{0:1,1:1,2:1}[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+e+".css?hash="+{0:"7e99e75c281483c8b4ed",1:"0565f520986ea60cd740",2:"87e68bc945331a90f572"}[e],a=l.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=(s=o[c]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===r||i===a))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){var s;if((i=(s=u[c]).getAttribute("data-href"))===r||i===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},m.href=a,document.getElementsByTagName("head")[0].appendChild(m)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var c=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=l.p+"js/"+({}[e]||e)+".js?hash=e2b4e2b4fb1714bb8fa9";var u=setTimeout(function(){s({type:"timeout",target:i})},12e4);function s(t){i.onerror=i.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}}i.onerror=i.onload=s,c.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var m=u;c.push([411,3]),n()}({120:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(1),c=n.n(o),l=n(83),i=n(25),u=(n(179),function(e){var t=e.className,n=e.name,r=e.children;return a.a.createElement("div",{className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("Popup",t)},a.a.createElement("span",null,n),a.a.createElement("div",{className:"Popup__content"},r))});u.propTypes={className:c.a.string,name:c.a.any,children:c.a.any},u.defaultProps={className:void 0,name:null,children:null};n(177);var s=function(e){var t=e.className;return a.a.createElement("nav",{className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("Nav",t)},a.a.createElement(i.b,{className:"Nav__item Nav__link",to:"/get-started"},"Get Started"),a.a.createElement(u,{className:"Nav__item",name:"Examples"},a.a.createElement("ul",{className:"Nav__menu"},a.a.createElement("li",{className:"Nav__menu-item"},a.a.createElement(i.b,{className:"Nav__link",to:"/sync-counter"},"Sync Counter")),a.a.createElement("li",{className:"Nav__menu-item"},a.a.createElement(i.b,{className:"Nav__link",to:"/async-computer"},"Async Computer")))),a.a.createElement("a",{className:"Nav__item Nav__link",href:"https://github.com/nikolaas/react-hot-reload-starter"},"View on GitHub"))};s.propTypes={className:c.a.string},s.defaultProps={className:void 0};n(175);var m=function(e){var t=e.contentClassName,n=e.contentStyle,r=e.children;return a.a.createElement("div",{className:"BaseLayout"},a.a.createElement(l.a,{minimize:!0},a.a.createElement(s,null)),a.a.createElement("main",{className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("container","BaseLayout__content",t),style:n},r))};m.propTypes={contentClassName:c.a.string,contentStyle:c.a.object,children:c.a.any},m.defaultProps={contentClassName:null,contentStyle:null,children:null},n.d(t,"a",function(){return m})},121:function(e,t,n){"use strict";var r=n(62),a=n(40),o=n(165),c=n.n(o);var l=void 0;l=function(e,t,n){var r=a.d.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n));return Object(a.e)(e,t,r)};var i=void 0,u=function(e,t){Object(r.b)(e,t),i.replaceReducer(Object(r.a)())},s=function(e,t){if(i)throw new Error("Store already configured");return i=function(e,t){var n=[Object(a.a)(c.a)];return l(e,t,n)}(e,t)};n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u})},173:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(172),c=n.n(o),l=n(171),i=n(122),u=n(25),s=n(121),m=n(62),f=n(52),p=(n(193),n(1)),d=n.n(p),v=n(164),h=n.n(v),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={delay:200,pastDelay:!1},n.timeout=setTimeout(function(){n.setState({pastDelay:!0}),n.timeout=null},n.state.delay),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),y(t,[{key:"componentWillUnmount",value:function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}},{key:"render",value:function(){return this.state.pastDelay?a.a.createElement("div",null,"Loading..."):null}}]),t}(),g=function(e){var t=e.error;return a.a.createElement("div",null,a.a.createElement("p",null,"Error occurred:"),a.a.createElement("p",null,String(t)))};g.propTypes={error:d.a.any},g.defaultProps={error:null};var E,N=function(e){var t,n,r,o,c=function(e){return e.component?e:{component:e}}(e),l=function(e){var t=null;return function(){return null==t&&(t=e()),t}}((n=(t=c).component,r=t.loadingComponent,o=t.errorComponent,function(){return h()(n,{LoadingComponent:r||b,ErrorComponent:o||g,onError:function(e){console.error("The error occurred when loading async component",e)}})})),i=function(e){var t=l();return a.a.createElement(t,e)};return i.displayName="async("+(e.name||"Component")+")",i},_=n(83),w=(n(181),function(){return a.a.createElement("div",{className:"Main"},a.a.createElement(_.a,null),a.a.createElement("main",{className:"Main__content"},a.a.createElement(u.b,{className:"Main__get-started",to:"/get-started"},"Get started")))}),j=n(120),O={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},P=function(){return a.a.createElement(j.a,{contentStyle:O},a.a.createElement("main",null,a.a.createElement("h1",null,"Sorry :("),a.a.createElement("h2",null,"Page not found")))},x=N(function(){return n.e(2).then(n.bind(null,422))}),z=N(function(){return n.e(1).then(n.bind(null,423))}),C=N(function(){return n.e(0).then(n.bind(null,424))}),T=Object(s.a)(Object(m.a)());E=function(){return a.a.createElement(f.b,null,a.a.createElement(f.a,{exact:!0,path:"/",component:w}),a.a.createElement(f.a,{exact:!0,path:"/get-started",component:x}),a.a.createElement(f.a,{exact:!0,path:"/sync-counter",component:z}),a.a.createElement(f.a,{exact:!0,path:"/async-computer",component:C}),a.a.createElement(f.a,{component:P}))},c.a.render(a.a.createElement(l.AppContainer,null,a.a.createElement(u.a,{basename:""},a.a.createElement(i.a,{store:T},a.a.createElement(E,null)))),document.getElementById("root"))},175:function(e,t,n){},177:function(e,t,n){},179:function(e,t,n){},181:function(e,t,n){},183:function(e,t,n){},193:function(e,t,n){},411:function(e,t,n){n(410),e.exports=n(173)},62:function(e,t,n){"use strict";var r=n(40),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"@@INIT":return 0;case"increment":return e+t.payload;default:return e}};n.d(t,"b",function(){return l}),n.d(t,"a",function(){return i});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c={},l=function(e,t){if(!t)throw new Error("reducer must be function");c[e]!==t&&(c[e]=t)},i=function(){return Object(r.c)(o({},c,{counter:a}))}},83:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(1),c=n.n(o),l=n(25),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var u=e=>{let{styles:t={}}=e,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["styles"]);return a.a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3"},n),a.a.createElement("g",{fill:"#61DAFB"},a.a.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),a.a.createElement("circle",{cx:"420.9",cy:"296.5",r:"45.7"})))},s=(n(183),function(e){var t=e.className,n=e.minimize,r=e.children,o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("Header",n&&"Header--minimize",!n&&"Header--animated",t);return a.a.createElement("header",{className:o},a.a.createElement(l.b,{className:"Header__link",to:"/"},a.a.createElement(u,{className:"Header__logo"})),a.a.createElement(l.b,{className:"Header__link",to:"/"},a.a.createElement("h1",{className:"Header__title"},"React Hot Reload Starter",a.a.createElement("span",{className:"Header__version"},"v","0.0.1"))),r)});s.propTypes={className:c.a.string,minimize:c.a.bool,children:c.a.any},s.defaultProps={className:void 0,minimize:!1,children:null},n.d(t,"a",function(){return s})}});
//# sourceMappingURL=app.js.map?hash=e2b4e2b4fb1714bb8fa9
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{413:function(e,n,t){"use strict";var r=t(2),a=t.n(r),c=t(1),l=t.n(c),u=(t(415),function(e){var n=e.className,t=e.title,r=e.children;return a.a.createElement("article",{className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}("Article",n)},a.a.createElement("h2",{className:"Article__title"},t),r)});u.propTypes={className:l.a.string,title:l.a.any,children:l.a.any},u.defaultProps={className:null,title:null,children:null},t.d(n,"a",function(){return u})},415:function(e,n,t){},423:function(e,n,t){"use strict";t.r(n);var r=t(121),a=t(2),c=t.n(a),l=t(1),u=t.n(l),o=t(122),i=t(120),s=t(413);var m=function(e){var n=e.counter,t=e.onIncrement;return c.a.createElement(i.a,null,c.a.createElement(s.a,{title:"Counter"},c.a.createElement("p",{className:"SyncCounter__value"},"Counter: ",c.a.createElement("span",{style:{color:"#f00"}},n)),c.a.createElement("button",{onClick:function(){return t()}},"Increment")))};m.propTypes={counter:u.a.number,onIncrement:u.a.func.isRequired},m.defaultProps={counter:0};var f={onIncrement:function(){return{type:"increment",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}},p=Object(o.b)(function(e){return{counter:e.syncCounter}},f)(m);Object(r.b)("syncCounter",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"@@INIT":return 0;case"increment":return e+n.payload;default:return e}});n.default=p}}]);
//# sourceMappingURL=1.js.map?hash=96fcaca586777546a8cf
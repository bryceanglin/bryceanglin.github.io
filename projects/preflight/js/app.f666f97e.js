(function(e){function t(t){for(var r,a,c=t[0],l=t[1],u=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"38930846"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"7db9f352"}[e]+".css",o=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],s=u.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/projects/preflight/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2aa5":function(e,t,n){"use strict";var r=n("8f8e"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("h1",[e._v("PreFlight")])]),n("v-main",[n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1),n("NavigationBar")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-bottom-navigation",{attrs:{grow:"",fixed:"",color:"primary"}},[n("v-btn",{attrs:{to:"/plan"}},[n("span",[e._v("Plan")]),n("v-icon",[e._v("mdi-airplane-takeoff")])],1),n("v-btn",{attrs:{to:"calculate"}},[n("span",[e._v("Calculate")]),n("v-icon",[e._v("mdi-calculator-variant")])],1),n("v-btn",{attrs:{to:"aircraft"}},[n("span",[e._v("My Aircraft")]),n("v-icon",[e._v("mdi-airplane")])],1),n("v-btn",{attrs:{to:"settings"}},[n("span",[e._v("Settings")]),n("v-icon",[e._v("mdi-cog")])],1)],1)},c=[],l={data:function(){return{}}},u=l,s=(n("ea29"),n("2877")),f=n("6544"),p=n.n(f),d=n("b81c"),v=n("8336"),m=n("132d"),h=Object(s["a"])(u,i,c,!1,null,"a199e220",null),g=h.exports;p()(h,{VBottomNavigation:d["a"],VBtn:v["a"],VIcon:m["a"]});var b={name:"Navigation",components:{NavigationBar:g},data:function(){return{}}},y=b,w=(n("2aa5"),n("7496")),_=n("40dc"),j=n("a523"),A=n("a75b"),k=n("f6c4"),O=Object(s["a"])(y,a,o,!1,null,"4beeb349",null),C=O.exports;p()(O,{VApp:w["a"],VAppBar:_["a"],VContainer:j["a"],VContent:A["a"],VMain:k["a"]});var S=n("9483");Object(S["a"])("".concat("/projects/preflight/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var E=n("8c4f"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:e.aircraft,label:"Select an Aircraft","prepend-icon":"mdi-airplane"}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-autocomplete",{attrs:{items:e.airports,label:"Where from?","prepend-icon":"mdi-map-marker"}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-autocomplete",{attrs:{items:e.airports,label:"Where to?","prepend-icon":"mdi-map-marker"}})],1)],1)},x=[],F={name:"Plan",data:function(){return{aircraft:["Aircraft1","Aircraft2"],airports:["LAX","LAS"]}}},N=F,V=n("c6a6"),B=n("62ad"),T=n("0fd9"),L=n("b974"),M=Object(s["a"])(N,P,x,!1,null,null,null),$=M.exports;p()(M,{VAutocomplete:V["a"],VCol:B["a"],VRow:T["a"],VSelect:L["a"]});var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Calculate!")])},D=[],I={},J=Object(s["a"])(I,q,D,!1,null,null,null),W=J.exports;r["a"].use(E["a"]);var H=[{path:"/plan",name:"Plan",component:$},{path:"/calculate",name:"Calculate",component:W},{path:"/aircraft",name:"Aircraft",component:function(){return n.e("about").then(n.bind(null,"cd01"))}},{path:"/settings",name:"Settings",component:function(){return n.e("about").then(n.bind(null,"26d3"))}}],K=new E["a"]({mode:"history",base:"/projects/preflight/",routes:H}),R=K,U=n("2f62");r["a"].use(U["a"]);var X=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=n("f309");r["a"].use(z["a"]);var G=new z["a"]({theme:{themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}},dark:!1}});r["a"].config.productionTip=!1,new r["a"]({router:R,store:X,vuetify:G,render:function(e){return e(C)}}).$mount("#app")},"8f8e":function(e,t,n){},ea29:function(e,t,n){"use strict";var r=n("f968"),a=n.n(r);a.a},f968:function(e,t,n){}});
//# sourceMappingURL=app.f666f97e.js.map
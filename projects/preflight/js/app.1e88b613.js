(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},i={app:0},o=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fb84e1d4"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"2cd37714"}[e]+".css",i=l.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],f.parentNode.removeChild(f),a(o)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/projects/preflight/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c34":function(e,t,a){},"21f0":function(e,t,a){"use strict";var n=a("0c34"),r=a.n(n);r.a},4603:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("HeaderBar"),a("v-main",[a("router-view")],1),a("NavigationBar")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-bottom-navigation",{attrs:{value:e.activeBtn,grow:"",fixed:"",color:"primary"}},[a("v-btn",{attrs:{to:"/plan"}},[a("span",[e._v("Plan")]),a("v-icon",[e._v("mdi-airplane-takeoff")])],1),a("v-btn",{attrs:{to:"calculate"}},[a("span",[e._v("Calculate")]),a("v-icon",[e._v("mdi-calculator-variant")])],1),a("v-btn",{attrs:{to:"aircraft"}},[a("span",[e._v("Aircraft")]),a("v-icon",[e._v("mdi-airplane")])],1),a("v-btn",{attrs:{to:"settings"}},[a("span",[e._v("Settings")]),a("v-icon",[e._v("mdi-cog")])],1)],1)},s=[],l={data:function(){return{activeBtn:0}}},c=l,u=(a("79af"),a("2877")),d=a("6544"),f=a.n(d),m=a("b81c"),p=a("8336"),v=a("132d"),g=Object(u["a"])(c,o,s,!1,null,"357f3c54",null),h=g.exports;f()(g,{VBottomNavigation:m["a"],VBtn:p["a"],VIcon:v["a"]});var b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"","elevate-on-scroll":"",color:"header"}},[a("v-spacer"),a("h1",[e._v("PreFlight")]),a("v-spacer")],1)},k=[],w=a("40dc"),y=a("2fa4"),D={},x=Object(u["a"])(D,b,k,!1,null,null,null),A=x.exports;f()(x,{VAppBar:w["a"],VSpacer:y["a"]});var T={name:"Navigation",components:{NavigationBar:h,HeaderBar:A},data:function(){return{}},created:function(){this.$store.commit("setAircraft",[{name:"4 Seater (Club)",tailNumber:8675309,img:"https://arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/JHA6HH3KLRA6PMGUE4TIQPKKFY.jpg"},{name:"Vishnu's Baller Aircraft",tailNumber:8673309,img:"https://www.ataviation.co.uk/wp-content/uploads/2020/05/IMG_8808.jpg"},{name:"Bryce's Baller Aircraft",tailNumber:8673309,img:"https://cdn1.creativecirclemedia.com/mountaineagle/original/20190830-170551-phptoNniC.jpg"},{name:"Amy's Baller Aircraft",tailNumber:8673309,img:"https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/e/56/e56e05dd-9f7d-5279-9359-201780ad00ef/5e7119bddfd0a.image.jpg"},{name:"Katie's Baller Aircraft",tailNumber:8673309,img:"https://static-23.sinclairstoryline.com/resources/media/7e2ec005-80d7-44a2-95ea-fd23ea70dbcf-large16x9_dn6Air4BremertonPlaneCrash_frame_21716.jpg?1565140814211"}])}},_=T,P=(a("d56f"),a("7496")),F=a("f6c4"),E=Object(u["a"])(_,r,i,!1,null,"204fa204",null),L=E.exports;f()(E,{VApp:P["a"],VMain:F["a"]});var N=a("9483");Object(N["a"])("".concat("/projects/preflight/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var S=a("8c4f"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":"",fluid:""}},[1===e.step?a("v-row",{attrs:{dense:"",align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"12",sm:"10"}},[a("h2",[e._v(" Flight Planner ")])]),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("FlightPicker"),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-btn",{attrs:{block:"",color:"primary",disabled:!this.$store.state.selectedAircraft,large:""},on:{click:e.next}},[e._v("Next")])],1),a("v-col",{attrs:{cols:"0",sm:"1"}})],1):e._e(),2===e.step?a("v-row",{attrs:{dense:"",align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"12",sm:"10"}},[a("h2",[e._v(" Flight Planner ")])]),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("AirportData"),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-btn",{attrs:{block:"",color:"primary",large:""},on:{click:e.previous}},[e._v("Previous")])],1),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-btn",{attrs:{block:"",color:"primary",disabled:"",large:""},on:{click:e.next}},[e._v("Next")])],1),a("v-col",{attrs:{cols:"0",sm:"1"}})],1):e._e()],1)},C=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"12",sm:"10"}},[a("v-select",{attrs:{outlined:"","hide-details":"",items:this.$store.getters.aircraftNames,label:"Which aircraft?","prepend-inner-icon":"mdi-airplane"},model:{value:e.selectedAircraft,callback:function(t){e.selectedAircraft=t},expression:"selectedAircraft"}})],1),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-autocomplete",{attrs:{outlined:"",items:e.airports,label:"Where from?",clearable:"","hide-details":"","prepend-inner-icon":"mdi-map-marker"},model:{value:e.takeoffAirport,callback:function(t){e.takeoffAirport=t},expression:"takeoffAirport"}})],1),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-autocomplete",{attrs:{outlined:"",items:e.airports,label:"Where to?",clearable:"","hide-details":"","prepend-inner-icon":"mdi-map-marker"},model:{value:e.landingAirport,callback:function(t){e.landingAirport=t},expression:"landingAirport"}})],1),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{"hide-details":"",label:"What day?","prepend-inner-icon":"mdi-calendar",readonly:"",outlined:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",r,!1),n))]}}]),model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[a("v-date-picker",{on:{input:function(t){e.dateMenu=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.time=t},"update:return-value":function(t){e.time=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{outlined:"","hide-details":"",label:"What time?","prepend-inner-icon":"mdi-clock-outline",readonly:""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},"v-text-field",r,!1),n))]}}]),model:{value:e.timeMenu,callback:function(t){e.timeMenu=t},expression:"timeMenu"}},[e.timeMenu?a("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.menu.save(e.time)}},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}):e._e()],1)],1),a("v-col",{attrs:{cols:"0",sm:"1"}})],1)},B=[],M=(a("a9e3"),a("b64b"),{name:"FlightPicker",data:function(){return{dateMenu:!1,timeMenu:!1,date:void 0,time:void 0,airports:[]}},created:function(){this.loadAirportCodes()},computed:{selectedAircraft:{get:function(){return this.$store.state.selectedAircraft},set:function(e){this.$store.commit("selectAircraft",e)}},takeoffAirport:{get:function(){return this.$store.state.takeoffAirport},set:function(e){this.$store.commit("setTakeoffAirport",e),this.attemptToPopulateData("takeoff")}},landingAirport:{get:function(){return this.$store.state.landingAirport},set:function(e){this.$store.commit("setLandingAirport",e),this.attemptToPopulateData("landing")}}},methods:{parseAirportCodes:function(e){for(var t=[],a=e.getElementsByTagName("Station"),n=0;n<a.length;n++){var r=a[n],i=r.getElementsByTagName("station_id")[0].innerHTML,o=r.getElementsByTagName("site")[0].innerHTML,s=r.getElementsByTagName("state")[0].innerHTML;t.push({value:i,text:o+", "+s+" ("+i+")"})}return t},loadAirportCodes:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=stations&requestType=retrieve&format=xml&stationString=~us",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/xml"}}).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(t){var a=e.parseAirportCodes(t);e.airports=a}))},parseMetarXml:function(e){var t={},a=e.getElementsByTagName("METAR")[0];return a?(t.autofilled=!0,t.latitude=Number(a.getElementsByTagName("latitude")[0].innerHTML),t.longitude=Number(a.getElementsByTagName("longitude")[0].innerHTML),t.temperature=Number(a.getElementsByTagName("temp_c")[0].innerHTML),t.windSpeed=Number(a.getElementsByTagName("wind_speed_kt")[0].innerHTML),t.elevation=Number(a.getElementsByTagName("elevation_m")[0].innerHTML),t.windDirection=Number(a.getElementsByTagName("wind_dir_degrees")[0].innerHTML),t.observationTime=new Date(a.getElementsByTagName("observation_time")[0].innerHTML),t.localPressure=Number(a.getElementsByTagName("altim_in_hg")[0].innerHTML),t):t},attemptToPopulateData:function(e){var t,a,n=this;if("takeoff"===e)this.$store.commit("resetTakeoffData"),t=this.$store.state.takeoffAirport,a="setTakeoffData";else{if("landing"!==e)return;this.$store.commit("resetLandingData"),t=this.$store.state.landingAirport,a="setLandingData"}fetch("https://cors-anywhere.herokuapp.com/https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString="+t+"&hoursBeforeNow=12&mostRecent=true",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/xml"}}).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){if(void 0!==e){var t=n.parseMetarXml(e);Object.keys(t).length>0&&n.$store.commit(a,t)}}))}}}),O=M,W=(a("21f0"),a("c6a6")),V=a("62ad"),H=a("2e4b"),U=a("e449"),R=a("0fd9"),q=a("b974"),K=a("8654"),G=a("c964"),I=Object(u["a"])(O,j,B,!1,null,"1edb9aa6",null),J=I.exports;f()(I,{VAutocomplete:W["a"],VCol:V["a"],VDatePicker:H["a"],VMenu:U["a"],VRow:R["a"],VSelect:q["a"],VTextField:K["a"],VTimePicker:G["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{dense:"",align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("h3",[e._v(" Takeoff ")])]),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("h3",[e._v(" Landing ")])]),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:e.temperatureLabel(),"prepend-inner-icon":"mdi-thermometer","hide-details":"",type:"number"},model:{value:e.takeoffTemperature,callback:function(t){e.takeoffTemperature=t},expression:"takeoffTemperature"}})],1),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:e.temperatureLabel(),"prepend-inner-icon":"mdi-thermometer","hide-details":"",type:"number"},model:{value:e.landingTemperature,callback:function(t){e.landingTemperature=t},expression:"landingTemperature"}})],1),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:e.elevationLabel(),"prepend-inner-icon":"mdi-elevation-rise","hide-details":"",type:"number"},model:{value:e.takeoffElevation,callback:function(t){e.takeoffElevation=t},expression:"takeoffElevation"}})],1),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:e.elevationLabel(),"prepend-inner-icon":"mdi-elevation-rise","hide-details":"",type:"number"},model:{value:e.landingElevation,callback:function(t){e.landingElevation=t},expression:"landingElevation"}})],1),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:"Wind Speed (kt)","prepend-inner-icon":"mdi-weather-windy","hide-details":"",type:"number"},model:{value:e.takeoffWindSpeed,callback:function(t){e.takeoffWindSpeed=t},expression:"takeoffWindSpeed"}})],1),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:"Wind Speed (kt)","prepend-inner-icon":"mdi-weather-windy","hide-details":"",type:"number"},model:{value:e.landingWindSpeed,callback:function(t){e.landingWindSpeed=t},expression:"landingWindSpeed"}})],1),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:"Wind Direction (degrees)","prepend-inner-icon":"mdi-compass-outline","hide-details":"",type:"number"},model:{value:e.takeoffWindDirection,callback:function(t){e.takeoffWindDirection=t},expression:"takeoffWindDirection"}})],1),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:"Wind Direction (degrees)","prepend-inner-icon":"mdi-compass-outline","hide-details":"",type:"number"},model:{value:e.landingWindDirection,callback:function(t){e.landingWindDirection=t},expression:"landingWindDirection"}})],1),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"0",sm:"1"}}),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:"Local Pressure (in. Hg)","prepend-inner-icon":"mdi-altimeter","hide-details":"",type:"number"},model:{value:e.takeoffLocalPressure,callback:function(t){e.takeoffLocalPressure=t},expression:"takeoffLocalPressure"}})],1),a("v-col",{attrs:{cols:"6",sm:"5"}},[a("v-text-field",{attrs:{outlined:"",label:"Local Pressure (in. Hg)","prepend-inner-icon":"mdi-altimeter","hide-details":"",type:"number"},model:{value:e.landingLocalPressure,callback:function(t){e.landingLocalPressure=t},expression:"landingLocalPressure"}})],1),a("v-col",{attrs:{cols:"0",sm:"1"}})],1)},z=[],Q={name:"AirportData",methods:{temperatureLabel:function(){return"Temperature ("+this.$store.state.temperatureUnits+")"},elevationLabel:function(){return"Elevation ("+this.$store.state.elevationUnits+")"}},computed:{takeoffTemperature:{get:function(){return this.$store.getters.takeoffTemperature},set:function(e){this.$store.commit("updateTakeoffData",{temperature:e})}},landingTemperature:{get:function(){return this.$store.getters.landingTemperature},set:function(e){this.$store.commit("updateLandingData",{temperature:e})}},takeoffElevation:{get:function(){return this.$store.getters.takeoffElevation},set:function(e){this.$store.commit("updateTakeoffData",{elevation:e})}},landingElevation:{get:function(){return this.$store.getters.landingElevation},set:function(e){this.$store.commit("updateLandingData",{elevation:e})}},takeoffWindSpeed:{get:function(){return this.$store.state.takeoffData.windSpeed},set:function(e){this.$store.commit("updateTakeoffData",{windSpeed:e})}},landingWindSpeed:{get:function(){return this.$store.state.landingData.windSpeed},set:function(e){this.$store.commit("updateLandingData",{windSpeed:e})}},takeoffWindDirection:{get:function(){return this.$store.state.takeoffData.windDirection},set:function(e){this.$store.commit("updateTakeoffData",{windDirection:e})}},landingWindDirection:{get:function(){return this.$store.state.landingData.windDirection},set:function(e){this.$store.commit("updateLandingData",{windDirection:e})}},takeoffLocalPressure:{get:function(){return this.$store.state.takeoffData.localPressure},set:function(e){this.$store.commit("updateTakeoffData",{localPressure:e})}},landingLocalPressure:{get:function(){return this.$store.state.landingData.localPressure},set:function(e){this.$store.commit("updateLandingData",{localPressure:e})}}}},Y=Q,Z=(a("ebdb"),Object(u["a"])(Y,X,z,!1,null,"908e6a76",null)),ee=Z.exports;f()(Z,{VCol:V["a"],VRow:R["a"],VTextField:K["a"]});var te=a("bc3a"),ae=a.n(te);ae.a.defaults.withCredentials=!1;var ne={name:"Plan",components:{FlightPicker:J,AirportData:ee},data:function(){return{step:1}},methods:{next:function(){this.step++},previous:function(){this.step--}}},re=ne,ie=a("a523"),oe=Object(u["a"])(re,$,C,!1,null,null,null),se=oe.exports;f()(oe,{VBtn:p["a"],VCol:V["a"],VContainer:ie["a"],VRow:R["a"]}),n["a"].use(S["a"]);var le=[{path:"/",redirect:"/plan"},{path:"/plan",name:"Plan",component:se},{path:"/calculate",name:"Calculate",component:function(){return a.e("about").then(a.bind(null,"98c1"))}},{path:"/aircraft",name:"Aircraft",component:function(){return a.e("about").then(a.bind(null,"cd01"))}},{path:"/settings",name:"Settings",component:function(){return a.e("about").then(a.bind(null,"26d3"))}}],ce=new S["a"]({mode:"hash",base:"/projects/preflight/",routes:le}),ue=ce,de=(a("d81d"),a("b0c0"),a("b680"),a("5530")),fe=a("2f62");n["a"].use(fe["a"]);var me=new fe["a"].Store({state:{aircraft:[],temperatureUnits:"Farenheit",elevationUnits:"Feet",takeoffAirport:void 0,takeoffData:{autofilled:!1,observation_time:void 0,airportCode:void 0,elevation:void 0,temperature:void 0,windSpeed:void 0,windDirection:void 0,localPressure:void 0},landingAirport:void 0,landingData:{autofilled:!1,observation_time:void 0,airportCode:void 0,elevation:void 0,temperature:void 0,windSpeed:void 0,windDirection:void 0,localPressure:void 0},selectedAircraft:void 0},getters:{aircraftNames:function(e,t){return e.aircraft.map((function(e){return e.name}))},aircraftFromName:function(e,t){return function(t){for(var a,n;n<e.aircraft.length;n++)if(a=e.aircraft[n],a.name===t)return a}},takeoffTemperature:function(e,t){return void 0===e.takeoffData.temperature||"Celsius"===e.temperatureUnits?e.takeoffData.temperature:"Farenheit"===e.temperatureUnits?(9*e.takeoffData.temperature/5+32).toFixed(2):void 0},landingTemperature:function(e,t){return void 0===e.landingData.temperature||"Celsius"===e.temperatureUnits?e.landingData.temperature:(9*e.landingData.temperature/5+32).toFixed(2)},takeoffElevation:function(e,t){return void 0===e.takeoffData.elevation||"Meters"===e.elevationUnits?e.takeoffData.elevation:"Feet"===e.elevationUnits?(3.28084*e.takeoffData.elevation).toFixed(2):void 0},landingElevation:function(e,t){return void 0===e.landingData.elevation||"Celsius"===e.temperatureUnits?e.landingData.elevation:(3.28084*e.landingData.elevation).toFixed(2)}},mutations:{setAircraft:function(e,t){e.aircraft=t},selectAircraft:function(e,t){e.selectedAircraft=t},setTakeoffAirport:function(e,t){e.takeoffAirport=t},setTakeoffData:function(e,t){e.takeoffData=t},updateTakeoffData:function(e,t){e.takeoffData=Object(de["a"])(Object(de["a"])({},e.takeoffData),t)},setLandingAirport:function(e,t){e.landingAirport=t},setLandingData:function(e,t){e.landingData=t},updateLanding:function(e,t){e.landingData=Object(de["a"])(Object(de["a"])({},e.landingData),t)},resetTakeoffData:function(e){e.takeoffData={autofilled:!1,observation_time:void 0,airportCode:void 0,elevation:void 0,temperature:void 0,windSpeed:void 0,windDirection:void 0,localPressure:void 0}},resetLandingData:function(e){e.landingData={autofilled:!1,observation_time:void 0,airportCode:void 0,elevation:void 0,temperature:void 0,windSpeed:void 0,windDirection:void 0,localPressure:void 0}},setTemperatureUnits:function(e,t){e.temperatureUnits=t}},actions:{},modules:{}}),pe=a("f309");n["a"].use(pe["a"]);var ve=new pe["a"]({theme:{themes:{light:{header:"#FFFFFF",background:"#FAFAFA",primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},dark:{header:"#000000",background:"#0A0A0A",primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}},dark:!1}});n["a"].config.productionTip=!1,new n["a"]({router:ue,store:me,vuetify:ve,render:function(e){return e(L)}}).$mount("#app")},"79af":function(e,t,a){"use strict";var n=a("90b1"),r=a.n(n);r.a},"90b1":function(e,t,a){},baab:function(e,t,a){},d56f:function(e,t,a){"use strict";var n=a("4603"),r=a.n(n);r.a},ebdb:function(e,t,a){"use strict";var n=a("baab"),r=a.n(n);r.a}});
//# sourceMappingURL=app.1e88b613.js.map
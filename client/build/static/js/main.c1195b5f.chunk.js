(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t){e.exports={GET_COUNTRIES:"GET_COUNTRIES",GET_COUNTRY:"GET_COUNTRY",GET_CONTINENTS:"GET_CONTINENTS",GET_ACT_COUNTRY:"GET_ACT_COUNTRY",GET_ORDER_A_Z:"GET_ORDER_A_Z",GET_ORDER_Z_A:"GET_ORDER_Z_A",POPULATION_A:"POPULATION_A",POPULATION_D:"POPULATION_D",RESET:"RESET",RESETC:"RESETC"}},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t){e.exports={Validations:function(e){var t=e.array,n=e.nombre,c=e.duration,i=e.dificulty,a=e.season,r={};return 0===n.length&&(r.nombre="Write the name of the activity"),n.length>15?r.nombre="No puede superar lo 15 caracteres":void 0===i?r.dificulty="Choose the difficulty":0===c.length?r.duration="Put the duration of the activity":void 0===a?r.season="Choose the season":t.length||(r.arr="Choose the country that relates"),console.log(r),r}}},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t),n.d(t,"reducer",(function(){return o}));var c=n(8),i=n(7),a=n(10),r={countries:[],countriesOrigin:[],country:[],activ:[],activities:[]};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_COUNTRIES:return Object(i.a)(Object(i.a)({},e),{},{countries:t.payload,countriesOrigin:t.payload});case a.GET_COUNTRY:return Object(i.a)(Object(i.a)({},e),{},{country:[t.payload]});case a.GET_CONTINENTS:var n=Object(c.a)(e.countriesOrigin).filter((function(e){return e.continent===t.payload}));return Object(i.a)(Object(i.a)({},e),{},{countries:n});case a.GET_ACT_COUNTRY:for(var o=Object(c.a)(e.countriesOrigin).filter((function(e){return e.activities.length})),l=[],s=0;s<o.length;s++){for(var j=0;j<o[s].activities.length;j++)o[s].activities[j].name===t.payload&&l.push(o[s]);console.log(l)}return Object(i.a)(Object(i.a)({},e),{},{activ:l});case a.GET_ORDER_A_Z:var u=Object(c.a)(e.countriesOrigin).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));return console.log(u),Object(i.a)(Object(i.a)({},e),{},{countries:u});case a.GET_ORDER_Z_A:var d=Object(c.a)(e.countriesOrigin).sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}));return Object(i.a)(Object(i.a)({},e),{},{countries:d});case a.POPULATION_A:var b=Object(c.a)(e.countriesOrigin).sort((function(e,t){return e.population>t.population?-1:e.population<t.population?1:0}));return Object(i.a)(Object(i.a)({},e),{},{countries:b});case a.POPULATION_D:var O=Object(c.a)(e.countriesOrigin).sort((function(e,t){return e.population<t.population?-1:e.population>t.population?1:0}));return Object(i.a)(Object(i.a)({},e),{},{countries:O});case a.RESET:var h=Object(c.a)(e.countriesOrigin);return Object(i.a)(Object(i.a)({},e),{},{countries:h});case a.RESETC:return Object(i.a)(Object(i.a)({},e),{},{country:[]});default:return Object(i.a)({},e)}}},64:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(25),r=n.n(a),o=(n(49),n(50),n(4)),l=(n(51),n(12)),s=n(66),j=n(1);function u(){return Object(c.useEffect)((function(){s.a.get("https://countrieswww.fly.dev")}),[]),Object(j.jsx)("div",{className:"Conteiner",children:Object(j.jsxs)("div",{className:"caja",children:[Object(j.jsx)("h1",{id:"text",children:"Welcome to App!!"}),Object(j.jsx)("div",{className:"flex items-center justify-center",children:Object(j.jsx)(l.b,{to:"/home",children:Object(j.jsx)("button",{className:"mi-boton",children:"Ingresar"})})})]})})}var d=n(7),b=n(5),O=n(8),h=n(11),p=n(10),x="https://countrieswww.fly.dev";function v(e){return function(t){s.a.get("".concat(x,"/countries?name=").concat(e)).then((function(e){return t({type:p.GET_COUNTRY,payload:e.data})})).catch((function(){window.alert("No se encontro el pais")}))}}function f(e){return function(t){t({type:p.GET_CONTINENTS,payload:e})}}n(38);function m(e){var t=Object(h.c)((function(e){return e.countries})),n=Object(h.b)();return Object(c.useEffect)((function(){t.length||n((function(e){s.a.get(x).then((function(t){return e({type:p.GET_COUNTRIES,payload:t.data})}))}))})),Object(j.jsx)("div",{className:"Cards",children:e.currentData.map((function(e){return Object(j.jsx)(l.b,{id:"Card",to:"/detail",children:Object(j.jsxs)("div",{onClick:function(){return t=e.name,void n(v(t));var t},children:[Object(j.jsx)("img",{src:e.image,height:200,width:320,alt:"img"}),Object(j.jsx)("h3",{id:"Text",children:e.name}),Object(j.jsx)("h4",{id:"Text2",children:e.continent})]},e.id)})}))})}n(39),n(60);function g(e){var t=e.page,n=e.handleButton,c=e.handleNext,i=e.handlePrevious,a=e.arr;return console.log(t.currentPage),console.log(a),Object(j.jsxs)("div",{children:[1!==t.currentPage?Object(j.jsx)("button",{id:"Previous",onClick:i,children:"Previous"}):null,a.map((function(e){return Object(j.jsx)("button",{value:e,id:e!==t.currentPage?"Buttons":"Buttons1",onClick:n,children:e})})),t.currentPage<a.length&&1!==a.length?Object(j.jsx)("button",{id:"Next",onClick:c,children:"Next"}):null]})}var y="https://countrieswww.fly.dev/activities";function T(e){for(var t=Object(O.a)(e.countries),n=Object(c.useState)({currentPage:1,pageSize:9}),i=Object(b.a)(n,2),a=i[0],r=i[1],o=Object(h.c)((function(e){return e.activ})),l=Math.round(e.countries.length/9),u=[],x=1;x<=l;x++)u.push(x);var v=(a.currentPage-1)*a.pageSize,T=v+a.pageSize;console.log(o);var E=t?t.slice(v,T):null,C=function(){r(Object(d.a)(Object(d.a)({},a),{},{currentPage:a.currentPage-1}))},N=function(){r(Object(d.a)(Object(d.a)({},a),{},{currentPage:a.currentPage+1}))};function A(e){r(Object(d.a)(Object(d.a)({},a),{},{currentPage:parseInt(e.target.value)}))}var S=Object(c.useState)(),_=Object(b.a)(S,2),P=_[0],R=_[1];Object(c.useEffect)((function(){s.a.get("https://countrieswww.fly.dev"),s.a.get(y).then((function(e){R(e.data)})),w((function(e){e({type:p.RESETC})}))}),[]);var w=Object(h.b)();function D(e){var t,n,c,i,o,l=e.target,s=l.value,j=l.name;r(Object(d.a)(Object(d.a)({},a),{},{currentPage:1})),"Filter1"===j&&w(f(s)),"Filter2"===j&&w((t=s,function(e){e({type:p.GET_ACT_COUNTRY,payload:t})})),"Filter3"===j&&("A-Z"===s&&w((o=s,function(e){e({type:p.GET_ORDER_A_Z,payload:o})})),"Z-A"===s&&w((i=s,function(e){e({type:p.GET_ORDER_Z_A,payload:i})})),"Population(+)"===s&&w((c=s,function(e){e({type:p.POPULATION_A,payload:c})})),"Population(-)"===s&&w((n=s,function(e){e({type:p.POPULATION_D,payload:n})})))}return Object(j.jsxs)("div",{className:"Home",children:[Object(j.jsx)("h1",{id:"title",children:"Countries"}),Object(j.jsxs)("div",{className:"HP",children:[e.countries.length?Object(j.jsx)("div",{className:"Orderbar",children:Object(j.jsxs)("div",{className:"Filtrado",children:[Object(j.jsxs)("select",{id:"Order",name:"Filter3",defaultValue:"DEFAULT",onChange:D,children:[Object(j.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select Order"}),Object(j.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(j.jsx)("option",{value:"Z-A",children:"Z-A"}),Object(j.jsx)("option",{value:"Population(+)",children:"Population(+)"}),Object(j.jsx)("option",{value:"Population(-)",children:"Population(-)"})]}),Object(j.jsxs)("select",{id:"Filter",name:"Filter1",defaultValue:"DEFAULT",onChange:D,children:[Object(j.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select Continent"}),Object(j.jsx)("option",{value:"Antarctica",children:"Antarctica"}),Object(j.jsx)("option",{value:"South America",children:"South America"}),Object(j.jsx)("option",{value:"Asia",children:"Asia"}),Object(j.jsx)("option",{value:"Africa",children:"Africa"}),Object(j.jsx)("option",{value:"Europe",children:"Europe"}),Object(j.jsx)("option",{value:"North America",children:"North America"}),Object(j.jsx)("option",{value:"Oceania",children:"Oceania"})]}),Object(j.jsxs)("select",{id:"Filter2",name:"Filter2",defaultValue:"DEFAULT",onChange:D,children:[Object(j.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select Activity"}),P?P.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name})})):null]}),Object(j.jsx)("button",{onClick:function(){window.location.reload()},id:"reset",children:"Reset"})]})}):null,Object(j.jsxs)("div",{style:{flexDirection:"column"},children:[Object(j.jsx)(m,{currentData:o.length?o:E,page:a,handlePrevious:C,handleNext:N,arr:u,handleButton:A}),o.length?null:Object(j.jsx)(g,{page:a,handleNext:N,handlePrevious:C,arr:u,handleButton:A})]})]})]})}var E=n(44);function C(){var e=Object(o.l)(),t=Object(h.b)();var n=Object(c.useState)(""),i=Object(b.a)(n,2),a=i[0],r=i[1];return Object(j.jsxs)("div",{className:"/home"===e.pathname?"navBar":"navBar2",children:[Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("input",{className:"input",onChange:function(e){return function(e){r(e.target.value)}(e)},value:a,type:"text",name:"search",placeholder:"Write the name of a country"}),Object(j.jsx)(l.b,{to:"/detail",children:a.length?Object(j.jsx)(E.a,{id:"lupa",color:"black",size:23,onClickCapture:function(){t(v(a))},onClick:function(e){r("")}}):null})]}),Object(j.jsxs)("div",{className:"Buttons",children:[Object(j.jsx)(l.b,{to:"/form",children:Object(j.jsx)("button",{id:"Button1",children:"NewActivity"})}),Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("button",{id:"Button2",children:"Exit"})})]})]})}n(61);function N(){var e=Object(h.c)((function(e){return e.country})),t=Object(o.n)(),n=Object(c.useState)(!0),i=Object(b.a)(n,2),a=i[0],r=i[1];return Object(c.useEffect)((function(){setTimeout((function(){r(!1)}),2e3)}),[]),console.log(e,"hola"),Object(j.jsxs)("div",{className:"detail",children:[a?Object(j.jsx)("div",{className:"text4",children:Object(j.jsx)("h1",{children:"Cargando..."})}):Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:e.length?Object(j.jsxs)("div",{className:"containerD",children:[Object(j.jsxs)("div",{className:"Caja",children:[Object(j.jsx)("h1",{className:"red",children:e[0].id}),Object(j.jsx)("h2",{children:e[0].name}),Object(j.jsx)("img",{src:e[0].image,alt:"img"}),Object(j.jsx)("h3",{className:"red",children:"Continent:"}),Object(j.jsx)("p",{children:e[0].continent}),Object(j.jsx)("h3",{className:"red",children:"Capital:"}),Object(j.jsx)("p",{children:e[0].capital}),e.subregion?Object(j.jsxs)("h3",{className:"red",children:["Subregion:",Object(j.jsx)("p",{id:"subregion",children:e[0].subregion})]}):null,e?Object(j.jsxs)("h3",{className:"red",children:["area:",Object(j.jsx)("p",{id:"subregion",children:e[0].area})]}):null,Object(j.jsx)("h3",{className:"red",children:"population:"}),Object(j.jsx)("p",{children:e[0].population})]}),e[0].activities.length?Object(j.jsxs)("div",{className:"Caja2",children:[Object(j.jsx)("h1",{children:"Activities"}),Object(j.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:e[0].activities.map((function(e){return Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"20px",backgroundColor:"rgb(255, 115, 65)",padding:"10px",borderRadius:"10px"},children:[Object(j.jsx)("h5",{children:e.name}),Object(j.jsxs)("div",{style:{fontSize:"17px",textAlign:"start"},children:[Object(j.jsxs)("p",{children:["dificulty: ",e.dificulty]}),Object(j.jsxs)("p",{children:["duration: ",e.duration]}),Object(j.jsxs)("p",{children:["season: ",e.season]})]})]})}))})]}):null]}):t("/home")}),Object(j.jsx)(l.b,{to:"/home",children:Object(j.jsx)("button",{id:"Boton1",children:"Volver"})})]})}var A=n(41),S=(n(62),"https://countrieswww.fly.dev/activities");function _(){var e=Object(h.b)(),t=Object(c.useState)(void 0),n=Object(b.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(""),o=Object(b.a)(r,2),u=o[0],d=o[1],p=Object(c.useState)(""),x=Object(b.a)(p,2),v=x[0],m=x[1],g=Object(c.useState)(void 0),y=Object(b.a)(g,2),T=y[0],E=y[1],C=Object(c.useState)([]),N=Object(b.a)(C,2),_=N[0],P=N[1],R=Object(c.useState)({arr:"",nombre:"",duration:"",dificulty:"",season:""}),w=Object(b.a)(R,2),D=w[0],U=w[1],F=Object(c.useState)(!1),G=Object(b.a)(F,2),I=G[0],k=G[1],L=Object(h.c)((function(e){return e.countries}));function B(e){var t=Object(O.a)(_),n=e.target,c=n.value,r=n.name;"nombre"===r?m(v=c):"dificulty"===r?a(i=c):"duration"===r?d(u=c):"season"===r&&E(T=c),U(Object(A.Validations)({nombre:v,dificulty:i,duration:u,season:T,array:t}))}function Z(e){var t=e.target.value;if(_.includes(t)){var n=_.filter((function(e){return e!==t}));P(n)}else P([].concat(Object(O.a)(_),[e.target.value]))}return Object(j.jsxs)("div",{className:"form",children:["Create Activity",Object(j.jsxs)("form",{className:"formulario",children:[Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("br",{}),D.nombre?Object(j.jsx)("p",{id:"warning",children:D.nombre}):null,Object(j.jsx)("input",{name:"nombre",type:"text",placeholder:"Write name of activity",value:v,onChange:B}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Dificulty"}),D.dificulty?Object(j.jsx)("p",{id:"warning",children:D.dificulty}):null,Object(j.jsxs)("div",{id:"dificulty",children:[Object(j.jsxs)("p",{children:["1",Object(j.jsx)("input",{type:"radio",name:"dificulty",value:1,onClick:B})]}),Object(j.jsxs)("p",{children:["2",Object(j.jsx)("input",{type:"radio",name:"dificulty",value:2,onClick:B})]}),Object(j.jsxs)("p",{children:["3",Object(j.jsx)("input",{type:"radio",name:"dificulty",value:3,onClick:B})]}),Object(j.jsxs)("p",{children:["4",Object(j.jsx)("input",{type:"radio",name:"dificulty",value:4,onClick:B})]}),Object(j.jsxs)("p",{children:["5",Object(j.jsx)("input",{type:"radio",name:"dificulty",value:5,onClick:B})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Duration "}),Object(j.jsx)("p",{id:"text1",children:"*Hour:Min:Sec*"}),D.duration?Object(j.jsx)("p",{id:"warning",children:D.duration}):null,Object(j.jsx)("input",{name:"duration",type:"text",placeholder:"ej: 01:20:00",value:u,onChange:B}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Season"}),D.season?Object(j.jsx)("p",{id:"warning",children:D.season}):null,Object(j.jsxs)("select",{name:"season",defaultValue:"DEFAULT",onChange:B,children:[Object(j.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select Season"}),Object(j.jsx)("option",{value:"Verano",children:"Summer"}),Object(j.jsx)("option",{value:"Oto\xf1o",children:"Autumn"}),Object(j.jsx)("option",{value:"Invierno",children:"Winter"}),Object(j.jsx)("option",{value:"Primavera",children:"Spring"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Select Continent"}),D.arr?Object(j.jsx)("p",{id:"warning",children:D.arr}):null,Object(j.jsx)("div",{id:"country",children:_.length?_.map((function(e){return Object(j.jsxs)("p",{name:"country",id:"p",children:[e,","]})})):null}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{}),Object(j.jsxs)("select",{name:"Filter1",defaultValue:"DEFAULT",onChange:function(t){var n=t.target,c=n.value;"Filter1"===n.name&&e(f(c)),"DEFAULT"!==c&&k(!0)},children:[Object(j.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select Continent"}),Object(j.jsx)("option",{value:"Antarctica",children:"Antarctica"}),Object(j.jsx)("option",{value:"South America",children:"South America"}),Object(j.jsx)("option",{value:"Asia",children:"Asia"}),Object(j.jsx)("option",{value:"Africa",children:"Africa"}),Object(j.jsx)("option",{value:"Europe",children:"Europe"}),Object(j.jsx)("option",{value:"North America",children:"North America"}),Object(j.jsx)("option",{value:"Oceania",children:"Oceania"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Select Countries"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{id:"paises",children:I?L.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[e.name,Object(j.jsx)("input",{type:"checkbox",value:e.id,name:"country",onClickCapture:Z,onClick:B})]}),Object(j.jsx)("br",{})]})})):null}),Object(j.jsx)("button",{id:"Submit",onClick:function(e){var t=Object(O.a)(_);if(e.preventDefault(),!t.length||""===v||""===u||void 0===i||void 0===T)return window.alert("Faltan Datos");var n={countryId:t,name:v,duration:u,dificulty:i,season:T};s.a.post(S,n,{headers:{"Content-Type":"application/json"}}).then((function(e){window.alert("Actividades subidas")})).catch((function(e){console.error(e)})),d(""),m(""),P([])},children:"Submit"})]}),Object(j.jsx)(l.b,{to:"/home",children:Object(j.jsx)("button",{id:"Button",onClick:function(){setTimeout((function(){window.location.reload()}),100)},children:"Volver"})})]})}var P=function(){var e=Object(o.l)(),t=Object(h.c)((function(e){return e.countries}));return Object(j.jsxs)("div",{className:"App",children:["/"===e.pathname||"/form"===e.pathname?null:Object(j.jsx)("div",{children:Object(j.jsx)(C,{})}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",element:Object(j.jsx)(u,{})}),Object(j.jsx)(o.a,{path:"/home",element:Object(j.jsx)(T,{countries:t})}),Object(j.jsx)(o.a,{path:"/detail",element:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{path:"/form",element:Object(j.jsx)(_,{})})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},w=n(32),D=n(42),U=n(43),F=n(63).reducer,G=Object(w.createStore)(F,Object(D.composeWithDevTools)(Object(w.applyMiddleware)(U.a)));r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(h.a,{store:G,children:Object(j.jsx)(P,{})})})}),document.getElementById("root")),R()}},[[64,1,2]]]);
//# sourceMappingURL=main.c1195b5f.chunk.js.map
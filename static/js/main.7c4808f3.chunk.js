(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(8),r=c.n(a),l=(c(15),c(16),c(17),c(2)),i=c.n(l),o=c(4),j=c(3),u=(c(19),c(0)),b=function(){return Object(u.jsx)("div",{className:"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})},d="https://pokeapi.co/api/v2/",m=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",e.next=3,fetch("".concat(d).concat(t));case 3:if((c=e.sent).ok){e.next=6;break}throw new Error("".concat(c.status," - ").concat(c.statusText));case 6:return e.abrupt("return",c.json());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(i.a.mark((function e(t){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("pokemon/?limit=".concat(t));case 2:return c=e.sent,s=c.results,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=c(10),_=c(9),f=c.n(_),O=(c(21),function(e){var t=e.pokemons,c=e.setSelectedType,s=e.selectedType,n=function(){var e=[];return t.forEach((function(t){return t.types.forEach((function(t){return e.push(t.type.name)}))})),Object(h.a)(new Set(e))}();return Object(u.jsx)("form",{className:"Layout__filter Filter",children:Object(u.jsxs)("select",{onChange:function(e){c(e.target.value)},defaultValue:"",className:f()("Filter__select",{"Filter__select--default":!s}),children:[Object(u.jsx)("option",{value:"",disabled:!0,className:"Filter__option--default",children:"Choose pok\xe9mon type"}),Object(u.jsx)("option",{value:"all",className:"Filter__option",children:"all"}),n.map((function(e){return Object(u.jsx)("option",{value:e,className:"Filter__option",children:e},e)}))]})})}),x=(c(22),function(e){var t=e.pokemon,c=e.selectPokemon,s=t.sprites,n=t.name,a=t.types;return Object(u.jsxs)("button",{type:"button",onClick:function(){return c(t)},className:"Layout__clickable-card",children:[Object(u.jsx)("img",{src:s.front_default,alt:n,className:"Card__image"}),Object(u.jsx)("p",{className:"Card__name",children:n}),Object(u.jsx)("div",{className:"Card__types",children:a.map((function(e){return Object(u.jsx)("p",{className:"Card__type Card__type--".concat(e.type.name),children:e.type.name},e.type.url)}))})]})}),k=(c(23),function(e){var t=e.pokemons,c=e.selectPokemon,s=e.visibleCount;return Object(u.jsx)("ul",{className:"Layout__list",children:t.slice(0,s).map((function(e){return Object(u.jsx)("li",{className:"Layout__card Card",children:Object(u.jsx)(x,{pokemon:e,selectPokemon:c})},e.id)}))})}),v=(c(24),function(e){var t=e.types,c=e.stats,s=e.weight,n=e.moves,a=c.attack,r=c.defense,l=c.hp,i=c.spAttack,o=c.spDefense,j=c.speed;return Object(u.jsx)("table",{className:"SelectedCard__table Table",children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Table__element",children:"Type"}),Object(u.jsx)("td",{className:"Table__element",children:t.join(" ")})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Table__element",children:"Attack"}),Object(u.jsx)("td",{className:"Table__element",children:a})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Table__element",children:"Defense"}),Object(u.jsx)("td",{className:"Table__element",children:r})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Table__element",children:"HP"}),Object(u.jsx)("td",{className:"Table__element",children:l})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Table__element",children:"SP Attack"}),Object(u.jsx)("td",{className:"Table__element",children:i})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Table__element",children:"SP Defense"}),Object(u.jsx)("td",{className:"Table__element",children:o})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Table__element",children:"Speed"}),Object(u.jsx)("td",{className:"Table__element",children:j})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Table__element",children:"Weight"}),Object(u.jsx)("td",{className:"Table__element",children:s})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Table__element",children:"Total moves"}),Object(u.jsx)("td",{className:"Table__element",children:n})]})]})})}),N=(c(25),function(e){var t=e.selectedPokemon,c=t.image,s=t.name,n=t.id,a=t.types,r=t.stats,l=t.moves,i=t.weight;return a&&r&&Object(u.jsx)("div",{className:"Layout__selected",children:Object(u.jsxs)("div",{className:"SelectedCard Layout__selected-card",children:[Object(u.jsx)("img",{src:c,alt:s,className:"SelectedCard__image"}),Object(u.jsx)("h2",{className:"SelectedCard__name",children:"".concat(s," #").concat(n)}),Object(u.jsx)(v,{types:a,stats:r,weight:i,moves:l})]})})}),y=(c(26),c(27),function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(j.a)(a,2),l=r[0],d=r[1],m=Object(s.useState)(!1),h=Object(j.a)(m,2),_=h[0],f=h[1],x=Object(s.useState)(""),v=Object(j.a)(x,2),y=v[0],T=v[1],g=Object(s.useState)([]),w=Object(j.a)(g,2),S=w[0],C=w[1],L=Object(s.useState)(12),P=Object(j.a)(L,2),A=P[0],E=P[1],F=Object(s.useState)(null),D=Object(j.a)(F,2),J=D[0],B=D[1];Object(s.useEffect)((function(){Object(o.a)(i.a.mark((function e(){var t,c,s,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,p(84);case 4:for(t=e.sent,c=[],s=0;s<t.length;s+=1)a=fetch(t[s].url).then((function(e){return e.json()})),c.push(a);return e.next=9,Promise.all(c);case 9:r=e.sent,y||C(r),n(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),f(!0);case 17:d(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))()}),[]),Object(s.useEffect)((function(){var e;e="all"===y?c:c.filter((function(e){return e.types.find((function(e){return e.type.name===y}))})),C(e),E(12)}),[y]);var H=function(e){var t={};return e.stats.map((function(e){switch(e.stat.name){case"attack":t.attack=e.base_stat;break;case"defense":t.defense=e.base_stat;break;case"speed":t.speed=e.base_stat;break;case"hp":t.hp=e.base_stat;break;case"special-defense":t.spDefense=e.base_stat;break;case"special-attack":t.spAttack=e.base_stat}return t})),t},I=function(e){return e.types.map((function(e){return e.type.name}))};return Object(u.jsxs)("div",{className:"Layout",children:[_&&Object(u.jsx)("p",{className:"Error",children:"Looks like we have a problem. An error occurred while loading this page."}),l&&Object(u.jsx)(b,{}),c.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{pokemons:c,selectedType:y,setSelectedType:T}),Object(u.jsx)(k,{visibleCount:A,pokemons:S,selectPokemon:function(e){B({id:e.id,name:e.name,image:e.sprites.front_default,types:I(e),stats:H(e),weight:e.weight,moves:e.moves.length})}}),Object(u.jsx)("button",{type:"button",className:"Layout__button",onClick:function(){E((function(e){return e+12}))},disabled:S.length<=A,children:"Load more"})]}),J&&Object(u.jsx)(N,{selectedPokemon:J})]})}),T=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"App__title",children:"Pok\xe9dex"}),Object(u.jsx)(y,{})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.7c4808f3.chunk.js.map
(function(t){function e(e){for(var n,a,s=e[0],u=e[1],c=e[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HelloWorld",{attrs:{msg:"BOOGERS!"}})],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",{class:{blinking:0==t.timerSeconds}},[t._v("Bogglish "+t._s(t.timerDisplay))]),r("button",{attrs:{role:"button"},on:{click:t.shake}},[t._v("Shake")]),r("div",{staticClass:"board"},[r("table",t._l(t.board,(function(e,n){return r("tr",{key:n},t._l(e,(function(e,n){return r("td",{key:n},[r("div",{staticClass:"cube"},[t._v(t._s(e))])])})),0)})),0)])])},s=[],u={name:"HelloWorld",created:function(){var t=this;this.shake(),setInterval((function(){t.timerTick()}),1e3)},methods:{shake:function(){c(this.letterCubes),this.board=[];for(var t=0;t<4;t++){for(var e=[],r=0;r<4;r++)e.push(this.letterCubes[4*t+r][0]);this.board.push(e)}this.timerSeconds=180,new Audio("./Shake.m4a").play()},timerTick:function(){if(this.timerSeconds>0){this.timerSeconds--;var t=new Date(0);t.setSeconds(this.timerSeconds),this.timerDisplay=t.toISOString().substr(11,8),0==this.timerSeconds&&new Audio("./awooga-awooga-awooga.mp3").play()}}},data:function(){return{timeouts:{},timerSeconds:0,timerDisplay:"",letterCubes:[["I","S","P","E","N","H"],["F","O","X","I","B","R"],["B","I","T","Y","A","L"],["D","U","T","N","O","K"],["C","A","L","S","E","R"],["V","E","N","Z","A","D"],["G","E","K","Y","U","L"],["P","U","T","L","E","S"],["S","O","D","W","E","N"],["B","O","M","J","A","Qu"],["V","E","G","N","I","T"],["L","U","R","W","I","G"],["M","E","C","P","A","D"],["I","E","H","Y","E","F"],["C","O","I","T","A","A"],["S","A","M","R","O","H"]],board:[["","","",""],["","","",""],["","","",""],["","","",""]]}}};function c(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=[t[r],t[e]];t[e]=n[0],t[r]=n[1],Array.isArray(t[e])&&c(t[e])}}var l=u,f=(r("c9f3"),r("2877")),p=Object(f["a"])(l,a,s,!1,null,"cc5923ec",null),d=p.exports,h={name:"app",components:{HelloWorld:d}},v=h,b=(r("034f"),Object(f["a"])(v,o,i,!1,null,null,null)),m=b.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,r){},c006:function(t,e,r){},c9f3:function(t,e,r){"use strict";var n=r("c006"),o=r.n(n);o.a}});
//# sourceMappingURL=app.b906cf89.js.map
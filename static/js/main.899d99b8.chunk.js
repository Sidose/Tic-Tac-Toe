(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(t,e,n){t.exports=n(23)},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(1),c=n.n(o),u=n(3),i=n(2),s=(n(21),{onAdd:function(t){return{type:"ADD",payload:t.target.getAttribute("data")}},onClear:function(){return{type:"CLEAR"}}}),l=Object(u.b)((function(t){return{state:t}}),s)((function(t){var e=t.onAdd,n=t.onClear,r=t.state,o=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=r.squares,u=r.count;function i(t){var r=u%2===0?"X":"O";e(t),s()&&(alert(r+" won!"),setTimeout((function(){n()}),3e3))}var s=function(){var t=u%2===0?"X":"O",e=!1;for(var n in o){var r=0;for(var a in o[n])if(c[o[n][a]]===t&&(r+=1),3===r){e=!0;break}}return e};return a.a.createElement("div",{className:"tic-tac-toe"},c.map((function(t,e){return a.a.createElement("div",{className:"ttt-grid",key:e,onClick:i,data:e},c[e])})))})),f=n(9),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{squares:new Array(9).fill(""),count:0},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD":var n=e.payload,r=t.squares;if(""===r[n]){var a=t.count%2===0?"X":"O";return r[n]=a,Object(f.a)({},t,{squares:r,count:t.count+1})}return alert("it is impossible"),t;case"CLEAR":return{squares:new Array(9).fill(""),count:0};default:return t}},v=(n(22),Object(i.b)(d));c.a.render(a.a.createElement(u.a,{store:v},a.a.createElement(l,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.899d99b8.chunk.js.map
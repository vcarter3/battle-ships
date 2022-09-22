(()=>{"use strict";var t={137:(t,r,e)=>{e.d(r,{Z:()=>s});var n=e(81),o=e.n(n),a=e(645),i=e.n(a)()(o());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Work+Sans&display=swap);"]),i.push([t.id,'body{font-family:"Work Sans",sans-serif;color:#727272;background-color:#286aa2;color:#0e3958}.main{display:flex;flex-direction:row;justify-content:center;text-align:center}.main .grid{border:1rem solid #0e3958;border-radius:10%;margin:2rem;padding:.5rem;display:grid;grid-template-columns:repeat(10, 2rem);grid-template-rows:repeat(10, 2rem);gap:.2rem}.main .grid div{cursor:pointer;border-radius:20%;background-color:#0e3958;user-select:none}.main .grid div[data-contents=ship]{background:#df982a}.main .grid div[data-contents=ship-up]{width:0;height:0;border:1rem solid rgba(0,0,0,0);border-top:0;border-bottom:2rem solid #df982a}.main .grid div[data-contents=ship-down]{width:0;height:0;border-style:solid;border-width:2rem 1rem 0 1rem;border-color:#df982a rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.main .grid div[data-contents=ship-left]{width:0;height:0;border-style:solid;border-width:1rem 2rem 1rem 0rem;border-color:rgba(0,0,0,0) #df982a rgba(0,0,0,0) rgba(0,0,0,0)}.main .grid div[data-contents=ship-right]{width:0;height:0;border-style:solid;border-width:1rem 0rem 1rem 2rem;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #df982a}.main .grid div[data-contents=hit]{background-image:url("https://c.tenor.com/KSTj3gSo4CIAAAAi/fire-lit.gif");background-size:contain;background-repeat:no-repeat;-webkit-transition:background-color 1000ms linear;-ms-transition:background-color 1000ms linear;transition:background-color 1000ms linear;cursor:default}.main .grid div[data-contents=miss]{background-color:#cb542c;cursor:default}',""]);const s=i},645:t=>{t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var e="",n=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),n&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=t(r),n&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(t,e,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var r=[];function e(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function n(t,n){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],d=n.base?c[0]+n.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var h=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)r[h].references++,r[h].updater(f);else{var p=o(f,n);n.byIndex=s,r.splice(s,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function o(t,r){var e=r.domAPI(r);return e.update(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap&&r.supports===t.supports&&r.layer===t.layer)return;e.update(t=r)}else e.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=n(t,o),d=0;d<a.length;d++){var u=e(a[d]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:t=>{var r={};t.exports=function(t,e){var n=function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},216:t=>{t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},565:(t,r,e)=>{t.exports=function(t){var r=e.nc;r&&t.setAttribute("nonce",r)}},795:t=>{t.exports=function(t){var r=t.insertStyleElement(t);return{update:function(e){!function(t,r,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,o&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,t,r.options)}(r,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)}}}},589:t=>{t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,exports:{}};return t[n](a,a.exports,e),a.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.nc=void 0,(()=>{var t=function(t){this.hit=function(t){this.hitLocations.push(t)},this.isSunk=function(){return this.hitLocations.length===this.length},this.length=t,this.hitLocations=[]},r=function(){var r=[],e=[],n=[],o=function(){for(var t=0;t<10;t++){r[t]=[],n[t]=[],e[t]=[];for(var o=0;o<10;o++)r[t][o]=null,n[t][o]=null,e[t][o]=null}};o();var a=function(t,n,o,a){if(i(t,n,o,a))return!1;if(a){e[t][n]="up",e[t+o.length-1][n]="down";for(var s=0;s<o.length;s++)r[t+s][n]=o;return!0}for(e[t][n]="left",e[t][n+o.length-1]="right",s=0;s<o.length;s++)r[t][n+s]=o;return!0},i=function(t,e,n,o){if(o){if(t+n.length>9)return!0;for(var a=0;a<n.length;a++)if(r[t+a][e])return!0}else{if(e+n.length>9)return!0;for(a=0;a<n.length;a++)if(r[t][e+a])return!0}};return{initBoard:o,placeShip:a,receiveAttack:function(t,e){if(r[t][e]){var o=0;if(e>0&&r[t][e-1]||e<9&&r[t][e+1])for(var a=0;e-a>=0&&r[t][e-a];)o++,a++;else if(t>0&&r[t-1][e]||t<9&&r[t+1][e])for(a=0;e-a>=0&&r[t-a][e];)o++,a++;return r[t][e].hit(o),!0}return n[t][e]=!0,!1},gameOver:function(){for(var t=0;t<10;t++)for(var e=0;e<10;e++)if(r[t][e]&&!r[t][e].isSunk())return!1;return!0},board:r,shipEnds:e,randomlyPlaceShips:function(){var r=[],e=new t(5),n=new t(4),o=new t(3),i=new t(3),s=new t(2);r.push(e,n,o,i,s);for(var c=0;c<r.length;){var d=Math.floor(10*Math.random()),u=Math.floor(10*Math.random()),l=1===Math.floor(2*Math.random());a(d,u,r[c],l)&&(c+=1)}}}},n=function(){function t(t){this.name=t,this.hitCoordinates=[],this.hunt=[]}return t.prototype.attack=function(t,r,e){return this.alreadyHit(t,r)?-1:(this.hitCoordinates.push([t,r]),e.receiveAttack(t,r))},t.prototype.validPosition=function(t){for(var r=0,e=t;r<e.length;r++){var n=e[r];if(n>9||n<0)return!1}return!0},t.prototype.getNeighbours=function(t,r){var e=this,n=[];return[[0,1],[1,0],[0,-1],[-1,0]].forEach((function(o){var a=o[0],i=o[1],s=[t+a,r+i];e.validPosition(s)&&!e.alreadyHit(t+a,r+i)&&n.push(s)})),n},t.prototype.randomAttack=function(t){if(100!==this.hitCoordinates.length){var r,e;if(this.hunt.length>0)return r=this.hunt[0][0],e=this.hunt[0][1],this.hitCoordinates.push([r,e]),t.receiveAttack(r,e)&&(this.hunt=this.hunt.concat(this.getNeighbours(r,e))),this.hunt.shift(),[r,e];for(var n=Math.floor(10*Math.random()),o=Math.floor(10*Math.random());this.alreadyHit(n,o);)n=Math.floor(10*Math.random()),o=Math.floor(10*Math.random());return this.hitCoordinates.push([n,o]),t.receiveAttack(n,o)&&(this.hunt=this.hunt.concat(this.getNeighbours(n,o))),[n,o]}},t.prototype.alreadyHit=function(t,r){for(var e=0;e<this.hitCoordinates.length;e++)if(t===this.hitCoordinates[e][0]&&r===this.hitCoordinates[e][1])return!0;return!1},t}(),o=document.querySelector(".main");function a(t,r,e,n){var a=document.createElement("div");a.className="player";var i=document.createElement("h1");i.className="title",i.textContent=t.name+" ships";var s=document.createElement("div");s.className="grid "+t.name;for(var c=0;c<r.length;c++)for(var d=0;d<r.length;d++){var u=document.createElement("div");u.dataset.row=c.toString(),u.dataset.col=d.toString(),null!=r[c][d]&&(null!=e[c][d]?u.dataset.contents="ship-"+e[c][d]:u.dataset.contents="ship"),s.appendChild(u)}a.appendChild(i),a.appendChild(s),o.appendChild(a)}var i=e(379),s=e.n(i),c=e(795),d=e.n(c),u=e(569),l=e.n(u),h=e(565),f=e.n(h),p=e(216),m=e.n(p),v=e(589),g=e.n(v),b=e(137),y={};y.styleTagTransform=g(),y.setAttributes=f(),y.insert=l().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=m(),s()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals,function(){var t=r(),e=new n("Your");t.initBoard(),t.randomlyPlaceShips(),a(e,t.board,t.shipEnds);var o=r(),i=new n("Enemy");o.initBoard(),o.randomlyPlaceShips(),a(i,o.board,o.shipEnds);for(var s=document.querySelector(".player .grid.Enemy").children,c=document.querySelectorAll(".main .grid.Your div"),d=function(r){var n=s[r];s[r].addEventListener("click",(function(r){o.gameOver()||t.gameOver()?console.log("winner!"):function(r,n,a){var s=e.attack(r,n,o);if(-1!=s){a.dataset.contents=s?"hit":"miss";var d=i.randomAttack(t);d&&c.forEach((function(r){parseInt(r.dataset.row)==d[0]&&parseInt(r.dataset.col)==d[1]&&(t.board[d[0]][d[1]]?r.dataset.contents="hit":r.dataset.contents="miss")}))}}(parseInt(n.dataset.row),parseInt(n.dataset.col),r.target)}))},u=0;u<s.length;u++)d(u)}()})()})();
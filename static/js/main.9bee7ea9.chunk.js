(this.webpackJsonpfileupload=this.webpackJsonpfileupload||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(9),r=n.n(i),o=(n(15),n(2)),s=n(3),l=n.n(s),u=n(10),j=n(6),b=n.n(j),f=n(8),p=n.n(f),d=n(0);var O=function(e){return Object(d.jsx)("div",{className:isNaN(e.w)?p.a.NoDiplay:p.a.Container,children:Object(d.jsxs)("p",{children:["x : ",e.x," px ",Object(d.jsx)("br",{}),"y : ",e.y," px ",Object(d.jsx)("br",{}),"Width : ",Math.abs(e.w)," px ",Object(d.jsx)("br",{}),"Height : ",Math.abs(e.h)," px ",Object(d.jsx)("br",{})]})})};var v=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useState)(!1),i=Object(o.a)(c,2),r=i[0],s=i[1],l=Object(a.useState)([]),j=Object(o.a)(l,2),f=j[0],p=j[1],v=Object(a.useState)([]),h=Object(o.a)(v,2),x=h[0],C=h[1],_=Object(a.useState)([]),g=Object(o.a)(_,2),y=g[0],w=g[1];Object(a.useEffect)((function(){var e=t.current;e.width=.5*window.innerWidth*3,e.height=.9*window.innerHeight*3,e.style.width="".concat(.5*window.innerWidth,"px"),e.style.height="".concat(.9*window.innerHeight,"px");var a=e.getContext("2d");a.scale(3,3),a.lineCap="round",a.strokeStyle="white",a.lineWidth=3,a.fillStyle="#3cff0052",n.current=a,w([])}),[e.url]);var N=y.map((function(e,t){return Object(d.jsx)(O,{x:e[0],y:e[1],w:e[2],h:e[3]},t)}));return Object(d.jsxs)("div",{className:b.a.Container,children:[Object(d.jsx)("canvas",{className:b.a.CanvasContainer,onMouseDown:function(e){var t=e.nativeEvent,a=t.offsetX,c=t.offsetY;p([a,c]),C([a,c]),n.current.beginPath(),n.current.moveTo(a,c),s(!0)},onMouseUp:function(){n.current.closePath(),s(!1);var e=f[0],t=f[1],a=x[0]-f[0],c=x[1]-f[1];w((function(n){return[].concat(Object(u.a)(n),[[e,t,a,c]])}))},onMouseMove:function(e){var t=e.nativeEvent;if(r){var a=t.offsetX,c=t.offsetY;C([a,c]);var i=f[0],o=f[1],s=x[0]-f[0],l=x[1]-f[1];n.current.clearRect(0,0,1e3,1e3),y.map((function(e){return n.current.fillRect(e[0],e[1],e[2],e[3])})),n.current.fillRect(i,o,s,l),n.current.stroke()}},onMouseLeave:function(){s(!1)},ref:t}),Object(d.jsx)("div",{className:b.a.CardContainer,children:N})]})};var h=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(null),c=Object(o.a)(n,2),i=c[0],r=c[1],s=Object(a.useState)(!1),u=Object(o.a)(s,2),j=u[0],b=u[1];return Object(d.jsxs)("div",{style:{position:"relative"},children:[Object(d.jsx)("input",{style:{display:"none"},type:"file",onChange:function(e){e.target.files[0]!==i&&(console.log("[event.target] "+e.target),console.log(i),r(URL.createObjectURL(e.target.files[0])))},ref:t}),Object(d.jsx)("button",{className:l.a.Button,onClick:function(){t.current.click()},children:"Pick image"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:j?l.a.Container:l.a.NoDisplay,children:[Object(d.jsx)("img",{src:i,ref:e,onLoad:function(){b(!0)}}),Object(d.jsx)(v,{url:i})]}),Object(d.jsx)("p",{className:j?l.a.Detail:l.a.NoDisplay,children:"Details of selections :"})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),x()},3:function(e,t,n){e.exports={Container:"App_Container__3oTvE",NoDisplay:"App_NoDisplay__3797l",Detail:"App_Detail__38g8D",Button:"App_Button__ZyQUc"}},6:function(e,t,n){e.exports={Container:"Canvas_Container__oDB8h",CanvasContainer:"Canvas_CanvasContainer__36Mtb",CardContainer:"Canvas_CardContainer__GlMBp"}},8:function(e,t,n){e.exports={Container:"Card_Container__2XesV",NoDiplay:"Card_NoDiplay__2Pof3"}}},[[17,1,2]]]);
//# sourceMappingURL=main.9bee7ea9.chunk.js.map
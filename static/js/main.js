(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(1),o=a.n(c),s=a(2),l=function(){return n.a.createElement("svg",{className:"clipboard-icon","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"clipboard",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},n.a.createElement("path",{fill:"currentColor",d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"}))},u=a(3);a(12);u.a.configure();var i=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(20),i=Object(s.a)(o,2),m=i[0],d=i[1],h=Object(r.useState)(!0),p=Object(s.a)(h,2),b=p[0],g=p[1],f=Object(r.useState)(!0),v=Object(s.a)(f,2),E=v[0],w=v[1],O=Object(r.useState)(!0),k=Object(s.a)(O,2),C=k[0],N=k[1],j=Object(r.useState)(!0),y=Object(s.a)(j,2),x=y[0],P=y[1],S=Object(r.useRef)(),_=function(e){if(b||E||C||x){var t="";E&&(t+="abcdefghijklmnopqrstuvwxyz"),b&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),C&&(t+="0123456789"),c(I(t+="!'^+%&/()=?_#$\xbd\xa7{[]}|;:>\xf7`<.*-@\xe9"))}else B("You must select at least one option",!0)},I=function(e){for(var t="",a=e.length,r=0;r<m;r++){var n=T(a);t+=e.charAt(n)}return t},T=function(e){return Math.round(Math.random()*e)};Object(r.useEffect)((function(){_()}),[]);var B=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?u.a.error(e,{position:u.a.POSITION.TOP_CENTER,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):Object(u.a)(e,{position:u.a.POSITION.TOP_CENTER,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return n.a.createElement("div",{className:"m-container"},n.a.createElement("div",{className:"m-generator"},n.a.createElement("h2",{className:"m-generator__header"},"Password Generator"),n.a.createElement("div",{className:"m-generator__password"},a,n.a.createElement("button",{className:"m-generator__passwordGenerateBtn",onClick:function(e){!function(){var e=document.createElement("textarea");e.innerText=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove(),S.current.disabled=!0,setTimeout((function(){S.current.disabled=!1}),3e3)}(),B("Password successfully copied to clipboard")},ref:S},n.a.createElement(l,null))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password-length"},"Password length"),n.a.createElement("input",{name:"password-length",id:"password-length",type:"number",max:"20",min:"10",defaultValue:m,onChange:function(e){return d(e.target.value)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"uppercase-letters"},"Include uppercase letters"),n.a.createElement("input",{id:"uppercase-letters",name:"uppercase-letters",type:"checkbox",checked:b,onChange:function(e){return g(e.target.checked)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"lowercase-letters"},"Include lowercase letters"),n.a.createElement("input",{id:"lowercase-letters",name:"lowercase-letters",type:"checkbox",checked:E,onChange:function(e){return w(e.target.checked)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"include-numbers"},"Include Numbers"),n.a.createElement("input",{id:"include-numbers",name:"include-numbers",type:"checkbox",checked:C,onChange:function(e){return N(e.target.checked)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"include-symbols"},"Include Symbols"),n.a.createElement("input",{id:"include-symbols",name:"include-symbols",type:"checkbox",checked:x,onChange:function(e){return P(e.target.checked)}})),n.a.createElement("button",{className:"m-generator__btn",onClick:_},"Generate Password")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.80f52c08.chunk.js.map
(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={someClass:"Affairs_someClass__3Gflh",buttons:"Affairs_buttons__2gsPC",button:"Affairs_button__2ovPX"}},function(e,t,a){e.exports={error:"SuperInputText_error__1UXOA",errorText:"SuperInputText_errorText__1ZALS",textInput:"SuperInputText_textInput__21IDn",superInput:"SuperInputText_superInput__2tPeh",rightInput:"SuperInputText_rightInput__3Wood",errorInput:"SuperInputText_errorInput__28Ncp"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__2y4Z-",input:"Greeting_input__1Xau6",error:"Greeting_error__kR3lv"}},function(e,t,a){e.exports={appWrapper:"Message_appWrapper__3R9xI",name:"Message_name__3dFVe",time:"Message_time__3KjM4"}},,,function(e,t,a){e.exports={components:"Header_components__33GI3",active:"Header_active__-JYHC"}},,function(e,t,a){e.exports={hw6style:"HW6_hw6style__ofcDR",spanStyle:"HW6_spanStyle__2dDoo"}},,,,,function(e,t,a){e.exports={red:"SuperButton_red__2NXq6"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2A-_q",spanClassName:"SuperCheckbox_spanClassName__3EBpW"}},,,,function(e,t,a){e.exports={App:"App_App__qwHIX"}},,function(e,t,a){e.exports={blue:"HW4_blue__oa95J",column:"HW4_column__2hFqi",test:"HW4_test__2JVgH"}},function(e,t,a){e.exports={img:"Error404_img__em6eA"}},,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=(a(35),a(25)),u=a.n(o),i=a(6),s=a(13),m=a.n(s);var p=function(){return r.a.createElement("div",{className:m.a.components},r.a.createElement(i.b,{activeClassName:m.a.active,to:"/pre-junior"},"PreJunior"),r.a.createElement(i.b,{activeClassName:m.a.active,to:"/junior"},"Junior"),r.a.createElement(i.b,{activeClassName:m.a.active,to:"/juniorPlus"},"JuniorPlus"))},E=a(1),d=a(10),f=a.n(d);var v=function(e){return r.a.createElement("div",{className:f.a.appWrapper},r.a.createElement("div",null,r.a.createElement("img",{className:f.a.appWrapper+""+f.a.img,src:e.avatar,alt:""})),r.a.createElement("div",null,r.a.createElement("p",{className:f.a.name},e.name)),r.a.createElement("div",null,r.a.createElement("p",null,e.message)),r.a.createElement("div",null,r.a.createElement("p",{className:f.a.time},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Filimonov Kostya",b="Power in props",g="14:08";var C=function(){return r.a.createElement("div",{style:{padding:"10px 0"}},r.a.createElement(v,{avatar:_,name:h,message:b,time:g}))},N=a(2),O=a(7),k=a.n(O);var x=function(e){return r.a.createElement("div",{className:k.a.someClass},e.affair.name,r.a.createElement("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var t=e.data.map((function(t){return r.a.createElement(x,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("div",{className:k.a.buttons},r.a.createElement("button",{className:k.a.button,onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{className:k.a.button,onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{className:k.a.button,onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:k.a.button,onClick:function(){return e.setFilter("low")}},"Low")))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(n.useState)(y),t=Object(N.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(N.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(j,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e=e.filter((function(e){return e._id!==t}))}(a,e))}}))},I=a(29),w=a(9),A=a.n(w),P=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?"".concat(A.a.input," ").concat(A.a.error):A.a.input;return r.a.createElement("div",{className:A.a.someClass},r.a.createElement("input",{value:t,onChange:a,className:o,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement("span",null,l),r.a.createElement("button",{className:A.a.someClass+""+A.a.button,onClick:n},"add"),r.a.createElement("span",null,c))},T=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(N.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(N.a)(i,2),m=s[0],p=s[1],E=t.length;return r.a.createElement(P,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){o.trim()?(a(o),alert("Hello  ".concat(o.trim(),"!")),u(""),p("")):p(" \u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043f\u0443\u0441\u0442\u043e\u0435 \u0438\u043c\u044f ")},error:m,totalUsers:E})},F=a(43);var W=function(){return r.a.createElement("div",null)};var J=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(T,{users:a,addUserCallback:function(e){var t={name:e,_id:Object(F.a)()};l([].concat(Object(I.a)(a),[t]))}}),r.a.createElement(W,null))},H=a(3),B=a(8),U=a.n(B),X=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(U.a.error," ").concat(u||""),m="".concat(c?U.a.superInput+" "+U.a.errorInput:U.a.superInput+" "+U.a.rightInput);return r.a.createElement("div",{className:U.a.textInput},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m+" ".concat(o||""),id:"input1"},i)),r.a.createElement("label",{htmlFor:"{'input1'}"},"\u2192\u2192\u2192"),r.a.createElement("div",{className:U.a.errorText}," ",c&&r.a.createElement("span",{className:s},c)," "))},D=a(27),G=a.n(D),K=a(20),M=a.n(K),R=function(e){var t=e.red,a=(e.className,Object(H.a)(e,["red","className"])),n=t?M.a.red:M.a.default;return r.a.createElement("button",Object.assign({className:n},a))},q=a(21),Z=a.n(q),L=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:Z.a.spanClassName},l))};var V=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(N.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:G.a.column},r.a.createElement(X,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(R,{red:!0,onClick:o},"delete "),r.a.createElement(L,{checked:s,onChangeChecked:m},"Checkox"),r.a.createElement(L,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})))},Y=a(15),z=a.n(Y),$=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(N.a)(o,2),i=u[0],s=u[1],m=l||{},p=m.children,E=m.onDoubleClick,d=(m.className,Object(H.a)(m,["children","onDoubleClick","className"])),f="".concat(z.a.spanStyle);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(X,Object.assign({autoFocus:!0,onBlur:function(e){s(e.isPropagationStopped),t&&t(e)},onEnter:function(){s(!i),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(e.cancelable),E&&E(e)},className:f},d),p||c.value))};function Q(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ee(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}Q("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:z.a.hw6style},r.a.createElement($,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(R,{onClick:function(){Q("editable-span-value",a)}},"save"),r.a.createElement(R,{onClick:function(){l(ee("editable-span-value",a))}},"restore"))},ae=function(e){e.options,e.onChange,e.onChangeOption;var t=Object(H.a)(e,["options","onChange","onChangeOption"]),a=[];return r.a.createElement("select",Object.assign({onChange:function(e){}},t),a)},ne=function(e){e.type,e.name;var t=e.options,a=(e.value,e.onChange,e.onChangeOption,Object(H.a)(e,["type","name","options","value","onChange","onChangeOption"]),t?t.map((function(e,t){})):[]);return r.a.createElement(r.a.Fragment,null,a)},re=["x","y","z"];var le=function(){var e=Object(n.useState)(re[1]),t=Object(N.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(ae,{options:re,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ne,{name:"radio",options:re,value:a,onChangeOption:l})))};var ce=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(S,null),r.a.createElement(J,null),r.a.createElement(V,null),r.a.createElement(te,null),r.a.createElement(le,null)))},oe=a(28),ue=a.n(oe);var ie=function(){return r.a.createElement("div",{className:ue.a.img})};var se=function(){return r.a.createElement("div",null,"Junior")};var me=function(){return r.a.createElement("div",null,"JuniorPlus")},pe="/pre-junior",Ee="/junior",de="/juniorPlus";var fe=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:"PRE_JUNIOR"})}}),r.a.createElement(E.b,{path:pe,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(E.b,{path:Ee,exact:!0,render:function(){return r.a.createElement(se,null)}}),r.a.createElement(E.b,{path:de,exact:!0,render:function(){return r.a.createElement(me,null)}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",r.a.createElement(E.b,{render:function(){return r.a.createElement(ie,null)}})))};var ve=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(p,null),r.a.createElement(fe,null)))};var _e=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(ve,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.ac4af84d.chunk.js.map
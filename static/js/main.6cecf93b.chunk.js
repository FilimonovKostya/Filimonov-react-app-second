(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{28:function(e,t,a){e.exports={someClass:"Affairs_someClass__3olmb",buttons:"Affairs_buttons__2PzCn",button:"Affairs_button__2J9Y5"}},29:function(e,t,a){e.exports={error:"SuperInputText_error__3ZL8Y",errorText:"SuperInputText_errorText__2V21c",textInput:"SuperInputText_textInput__r09kN",superInput:"SuperInputText_superInput__WVMHw",rightInput:"SuperInputText_rightInput__2E6fJ",errorInput:"SuperInputText_errorInput__2o45o"}},37:function(e,t,a){e.exports={someClass:"Greeting_someClass__2e99A",input:"Greeting_input__v3YE1",error:"Greeting_error__3nmSv"}},43:function(e,t,a){e.exports={appWrapper:"Message_appWrapper__2iaxK",name:"Message_name__1IYpd",time:"Message_time__3CCQl"}},47:function(e,t,a){e.exports={components:"Header_components__F2v8a",active:"Header_active__xCVGq"}},49:function(e,t,a){e.exports={hw6style:"HW6_hw6style__2tuZz",spanStyle:"HW6_spanStyle__2zir6"}},61:function(e,t,a){e.exports={red:"SuperButton_red__mnXQJ"}},62:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__15d5b",spanClassName:"SuperCheckbox_spanClassName__UZgZ5"}},65:function(e,t,a){e.exports={dark:"HW12_dark__2-XFu","dark-text":"HW12_dark-text__3Dxxd",red:"HW12_red__1ievc","red-text":"HW12_red-text__topi8",some:"HW12_some__21Ebg","some-text":"HW12_some-text__3WPY7"}},69:function(e,t,a){e.exports={App:"App_App__3z3Z1"}},70:function(e,t,a){e.exports={blue:"HW4_blue__Mg7wZ",column:"HW4_column__3UAWS",test:"HW4_test__3v7vZ"}},75:function(e,t,a){e.exports={range:"SuperRange_range__kA6_k"}},76:function(e,t,a){e.exports={img:"Error404_img__1BDuW"}},82:function(e,t,a){e.exports=a(93)},87:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(87),a(69)),u=a.n(o),i=a(27),s=a(47),m=a.n(s);var p=function(){return r.a.createElement("div",{className:m.a.components},r.a.createElement(i.b,{activeClassName:m.a.active,to:"/pre-junior"},"PreJunior"),r.a.createElement(i.b,{activeClassName:m.a.active,to:"/junior"},"Junior"),r.a.createElement(i.b,{activeClassName:m.a.active,to:"/juniorPlus"},"JuniorPlus"))},d=a(7),E=a(43),v=a.n(E);var f=function(e){return r.a.createElement("div",{className:v.a.appWrapper},r.a.createElement("div",null,r.a.createElement("img",{className:v.a.appWrapper+""+v.a.img,src:e.avatar,alt:""})),r.a.createElement("div",null,r.a.createElement("p",{className:v.a.name},e.name)),r.a.createElement("div",null,r.a.createElement("p",null,e.message)),r.a.createElement("div",null,r.a.createElement("p",{className:v.a.time},e.time)))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Filimonov Kostya",b="Power in props",_="14:08";var C=function(){return r.a.createElement("div",{style:{padding:"10px 0"}},r.a.createElement(f,{avatar:h,name:g,message:b,time:_}))},O=a(9),k=a(28),j=a.n(k);var N=function(e){return r.a.createElement("div",{className:j.a.someClass},e.affair.name,r.a.createElement("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))};var y=function(e){var t=e.data.map((function(t){return r.a.createElement(N,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("div",{className:j.a.buttons},r.a.createElement("button",{className:j.a.button,onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{className:j.a.button,onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{className:j.a.button,onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:j.a.button,onClick:function(){return e.setFilter("low")}},"Low")))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(n.useState)(x),t=Object(O.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(O.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(y,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e=e.filter((function(e){return e._id!==t}))}(a,e))}}))},w=a(42),I=a(37),A=a.n(I),T=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?"".concat(A.a.input," ").concat(A.a.error):A.a.input;return r.a.createElement("div",{className:A.a.someClass},r.a.createElement("input",{value:t,onChange:a,className:o,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement("span",null,l),r.a.createElement("button",{className:A.a.someClass+""+A.a.button,onClick:n},"add"),r.a.createElement("span",null,c))},W=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(O.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(O.a)(i,2),m=s[0],p=s[1],d=t.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){o.trim()?(a(o),alert("Hello  ".concat(o.trim(),"!")),u(""),p("")):p(" \u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043f\u0443\u0441\u0442\u043e\u0435 \u0438\u043c\u044f ")},error:m,totalUsers:d})},H=a(127);var P=function(){return r.a.createElement("div",null)};var F=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(W,{users:a,addUserCallback:function(e){var t={name:e,_id:Object(H.a)()};l([].concat(Object(w.a)(a),[t]))}}),r.a.createElement(P,null))},D=a(15),J=a(29),G=a.n(J),L=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(D.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(G.a.error," ").concat(u||""),m="".concat(c?G.a.superInput+" "+G.a.errorInput:G.a.superInput+" "+G.a.rightInput);return r.a.createElement("div",{className:G.a.textInput},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m+" ".concat(o||""),id:"input1"},i)),r.a.createElement("label",{htmlFor:"{'input1'}"},"\u2192\u2192\u2192"),r.a.createElement("div",{className:G.a.errorText}," ",c&&r.a.createElement("span",{className:s},c)," "))},R=a(70),M=a.n(R),U=a(61),B=a.n(U),Z=function(e){var t=e.red,a=(e.className,Object(D.a)(e,["red","className"])),n=t?B.a.red:B.a.default;return r.a.createElement("button",Object.assign({className:n},a))},K=a(62),V=a.n(K),Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(D.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:V.a.spanClassName}," ",l," "))};var z=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(O.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:M.a.column},r.a.createElement(L,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(Z,{red:!0,onClick:o},"delete "),r.a.createElement(Y,{checked:s,onChangeChecked:m},"checkbox"),r.a.createElement(Y,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})))},X=a(49),q=a.n(X),Q=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(D.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(O.a)(o,2),i=u[0],s=u[1],m=l||{},p=m.children,d=m.onDoubleClick,E=(m.className,Object(D.a)(m,["children","onDoubleClick","className"])),v="".concat(q.a.spanStyle);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){s(e.isPropagationStopped),t&&t(e)},onEnter:function(){s(!i),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(e.cancelable),d&&d(e)},className:v},E),p||c.value))};function $(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ee(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:q.a.hw6style},r.a.createElement(Q,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(Z,{onClick:function(){$("editable-span-value",a)}},"save"),r.a.createElement(Z,{onClick:function(){l(ee("editable-span-value",a))}},"restore"))},ae=a(128),ne=a(129),re=a(125),le=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=e.value,l=Object(D.a)(e,["options","onChange","onChangeOption","value"]),c=null===t||void 0===t?void 0:t.map((function(e,t){return r.a.createElement("option",{key:t,selected:e,value:e}," ",e," ")}));return r.a.createElement(ae.a,{variant:"outlined"},r.a.createElement(ne.a,{htmlFor:"outlined-age-native-simple"},l.title),r.a.createElement(re.a,{native:!0,onChange:function(e){a&&a(e.currentTarget.value)},value:n},c))},ce=a(126),oe=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(D.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=a?null===a||void 0===a?void 0:a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement(ce.a,{checked:e===n,onChange:c,value:e,name:t}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ue=["x","y","z"];var ie=function(){var e=Object(n.useState)(ue[0]),t=Object(O.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(le,{options:ue,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(oe,{name:"radio",options:ue,value:a,onChangeOption:l})))},se=function(e,t){switch(t.type){case"sort":return Object(w.a)(e).sort((function(e,t){return e.name.localeCompare(t.name)}));case"sortDown":return Object(w.a)(e).sort((function(e,t){return t.name.localeCompare(e.name)}));case"check":return Object(w.a)(e).filter((function(e){return e.age>t.payload}));default:return e}},me=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var pe=function(){var e=Object(n.useState)(me),t=Object(O.a)(e,2),a=t[0],l=t[1];console.log(a);var c=a.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null," \u0418\u043c\u044f : ",e.name," , \u0412\u043e\u0437\u0440\u0430\u0441\u0442 : ",e.age," "))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){return l(se(me,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){return l(se(me,{type:"sortDown",payload:"down"}))}},"sort Down")),r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){return l(se(me,{type:"check",payload:44}))}},"Age")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var de=function(){var e=Object(n.useState)(1),t=Object(O.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(O.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(O.a)(s,2),p=m[0],d=m[1];console.log(a),console.log(u);var E=function(){clearInterval(a)};return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},"Time"," : ",null===u||void 0===u?void 0:u.toLocaleTimeString()),p&&r.a.createElement("div",null,"Date"," : ",null===u||void 0===u?void 0:u.toLocaleDateString()),r.a.createElement(Z,{onClick:function(){E();var e=window.setInterval((function(){console.log("\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 id -"+e),i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(Z,{onClick:E},"stop"))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(de,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ve=a(124),fe=a(26),he=function(e){return{type:"LOADING",boolean:e}};var ge=function(){var e=Object(fe.c)((function(e){return e.loading})),t=Object(fe.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),e?r.a.createElement(ve.a,{color:"secondary"}):r.a.createElement("div",null,r.a.createElement(Z,{onClick:function(){t(he(!0)),setTimeout((function(){t(he(!1))}),1e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},be=a(75),_e=a.n(be),Ce=function(e){e.type,e.onChange,e.onChangeRange;var t=e.className,a=e.value,n=e.setValue1,l=Object(D.a)(e,["type","onChange","onChangeRange","className","value","setValue1"]),c="".concat(_e.a.range," ").concat(t||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){n&&n(+e.currentTarget.value)},className:c,value:a},l)))},Oe=a(130),ke=function(e){var t=e.onChangeRange,a=e.value;return r.a.createElement(Oe.a,{value:a,onChange:function(e,a){t&&t(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"})};var je=function(){var e=Object(n.useState)(10),t=Object(O.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(100),o=Object(O.a)(c,2),u=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(Ce,{setValue1:l,value:a})),r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(ke,{value:[a,u],onChangeRange:function(e){Array.isArray(e)&&(l(e[0]),i(e[1]))}}),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ne=a(65),ye=a.n(Ne),xe=a(77),Se={dark:"dark",red:"red",some:"some"},we=["dark","red","some"];var Ie=function(){var e=Object(fe.c)((function(e){return e.theme.some})),t=Object(fe.b)();return r.a.createElement("div",{className:ye.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:ye.a[e+"-text"]},"homeworks 12"),r.a.createElement(le,{title:"Colors",options:we,onChangeOption:function(e){t(function(e){return{type:"CHANGING-COLOR",color:e}}(e))}}),r.a.createElement("hr",null))};var Ae=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(S,null),r.a.createElement(F,null),r.a.createElement(z,null),r.a.createElement(te,null),r.a.createElement(ie,null),r.a.createElement(pe,null),r.a.createElement(Ee,null),r.a.createElement(ge,null),r.a.createElement(je,null),r.a.createElement(Ie,null)))},Te=a(76),We=a.n(Te);var He=function(){return r.a.createElement("div",{className:We.a.img})};var Pe=function(){return r.a.createElement("div",null,"Junior")};var Fe=function(){return r.a.createElement("div",null,"JuniorPlus")},De="/pre-junior",Je="/junior",Ge="/juniorPlus";var Le=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:"PRE_JUNIOR"})}}),r.a.createElement(d.b,{path:De,render:function(){return r.a.createElement(Ae,null)}}),r.a.createElement(d.b,{path:Je,exact:!0,render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(d.b,{path:Ge,exact:!0,render:function(){return r.a.createElement(Fe,null)}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",r.a.createElement(d.b,{render:function(){return r.a.createElement(He,null)}})))};var Re=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(p,null),r.a.createElement(Le,null)))};var Me=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(Re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=a(46),Be=Object(Ue.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return t.boolean;default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGING-COLOR":return Object(xe.a)({},e,{dark:t.color,red:t.color,some:t.color});default:return e}}}),Ze=Object(Ue.c)(Be),Ke=Ze;window.store=Ze,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe.a,{store:Ke},r.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[82,1,2]]]);
//# sourceMappingURL=main.6cecf93b.chunk.js.map
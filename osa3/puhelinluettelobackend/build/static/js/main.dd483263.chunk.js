(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(14),o=t.n(c),a=t(15),r=t(3),i=t(2),l=t(4),s=t.n(l),u="http://localhost:3001/api/persons",d={getAll:function(){return s.a.get(u).then((function(e){return e.data}))},create:function(e){return s.a.post(u,e)},update:function(e,n){var t=s.a.put("".concat(u,"/").concat(e),n);return console.log("updated number for person with id: ".concat(e)),t},deleteP:function(e){s.a.delete("".concat(u,"/").concat(e)),console.log("deleted person with id: ".concat(e))}},j=(t(38),t(0)),b=function(e){var n=e.message,t=e.isGood;return null===n?null:Object(j.jsx)("div",{className:t?"notification-good":"notification-bad",children:n})},h=function(e){var n=e.filter,t=e.handleFilterChange;return Object(j.jsxs)("div",{children:["filter shown with ",Object(j.jsx)("input",{value:n,onChange:t})]})},f=function(e){var n=e.addPerson,t=e.newName,c=e.newNumber,o=e.handleNameChange,a=e.handleNumberChange;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:["name: ",Object(j.jsx)("input",{value:t,onChange:o})]}),Object(j.jsxs)("div",{children:["number: ",Object(j.jsx)("input",{value:c,onChange:a})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})})},m=function(e){var n=e.id,t=e.deletePerson;return Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return t(n)},children:"delete"})})},O=function(e){var n=e.persons,t=e.filter,c=e.deletePerson,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(j.jsx)("div",{children:o.map((function(e){return Object(j.jsx)(p,{id:e.id,name:e.name,number:e.number,deletePerson:c},e.id)}))})},p=function(e){var n=e.id,t=e.name,c=e.number,o=e.deletePerson;return Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsxs)("p",{children:[t," ",c," "]}),Object(j.jsx)(m,{id:n,deletePerson:o})]})},v=function(){var e=Object(i.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],o=Object(i.useState)(""),l=Object(r.a)(o,2),s=l[0],u=l[1],m=Object(i.useState)(""),p=Object(r.a)(m,2),v=p[0],g=p[1],x=Object(i.useState)(!1),w=Object(r.a)(x,2),P=w[0],C=w[1],N=Object(i.useState)(""),S=Object(r.a)(N,2),k=S[0],y=S[1],A=Object(i.useState)(null),E=Object(r.a)(A,2),F=E[0],G=E[1],I=Object(i.useState)(!1),J=Object(r.a)(I,2),L=J[0],T=J[1];Object(i.useEffect)((function(){console.log("getAll persons effect has run"),d.getAll().then((function(e){c(e)}))}),[P]);var B={addPerson:function(e){e.preventDefault(),console.log("add button clicked",e.target);var n={name:s,number:v};if(t.map((function(e){return e.name})).includes(n.name)){var c=window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?")),o=t.find((function(e){return e.name===n.name})).id;console.log(o),c&&d.update(o,n).then((function(e){console.log(e),G("Updated ".concat(n.name)),T(!0),C(!P)})).catch((function(e){G("Information of ".concat(n.name," has already been removed from the server"))}))}else d.create(n).then((function(e){console.log(e),G("Added ".concat(n.name)),T(!0)})),C(!P);setTimeout((function(){G(null)}),5e3)},newName:s,newNumber:v,handleNameChange:function(e){u(e.target.value)},handleNumberChange:function(e){g(e.target.value)}};return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{message:F,isGood:L}),Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(h,{filter:k,handleFilterChange:function(e){y(e.target.value)}}),Object(j.jsx)("h2",{children:"add a new"}),Object(j.jsx)(f,Object(a.a)({},B)),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(O,{persons:t,setPersons:t,filter:k,deletePerson:function(e){console.log("delete button clicked"),d.deleteP(e),G("Person deleted succesfully"),T(!0),setTimeout((function(){G(null)}),5e3),C(!P)}})]})};o.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dd483263.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},15:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),i=n.n(r),o=n(7),s=n(2),u=(n(15),n(0));function b(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),b=Object(s.a)(o,2),j=b[0],d=b[1],l=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":d(c)}},m=function(){i("")};return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(r,j),m()},children:Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"Name"}),Object(u.jsx)("input",{type:"text",value:r,onChange:l,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(u.jsx)("p",{children:"Number"}),Object(u.jsx)("input",{type:"tel",value:j,onChange:l,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",onClick:l,children:"Add contact"})]})})}var j=n(23),d=n(9),l=n(5),m=n.n(l),h=function e(t,n,c){var a=this;Object(d.a)(this,e),this.equals=function(e){return a.name===e.name},this.id=t,this.name=n,this.number=c};h.propTypes={id:m.a.string,name:m.a.string,number:m.a.string};var O=h,x=function(e){var t=e.id,n=e.name,c=e.number,a=e.onDeleteContact;return Object(u.jsxs)("li",{children:[n,": ",c,Object(u.jsx)("button",{type:"button",onClick:function(){return a(t)},children:Object(u.jsx)("p",{children:"Delete"})})]})},p=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(u.jsx)(x,{id:t,name:c,number:a,onDeleteContact:n},t)}))})})},f=function(e){var t=e.value,n=e.onChange;return Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"Find contacts by name:"}),Object(u.jsx)("input",{type:"text",value:t,onChange:n})]})})},v=n(10);function C(){var e=Object(c.useState)(Object(o.a)(v)),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),d=i[0],l=i[1],m=d?n.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())})):n;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(b,{onSubmit:function(e,t){var c=Object(j.a)(),r=new O(c,e,t);n.find((function(e){return r.equals(e)}))?alert("".concat(r.name," already exists in contacts")):a([].concat(Object(o.a)(n),[r]))}}),m.length>0&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(f,{value:d,onChange:function(e){var t=e.currentTarget.value;l(t)}}),Object(u.jsx)(p,{contacts:m,onDeleteContact:function(e){a(n.filter((function(t){return t.id!==e})))}})]})]})}n(19),n(20);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a5f7b1ba.chunk.js.map
(this.webpackJsonpbasement=this.webpackJsonpbasement||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var s=t(1),a=t(0),r=t(16),c=t.n(r),i=(t(26),t(27),t(10)),o=t(11),l=function(){return Object(s.jsxs)("footer",{id:"follow",children:[Object(s.jsx)("h5",{children:"Follow US!"}),Object(s.jsxs)("div",{className:"social-media",children:[Object(s.jsx)(i.a,{icon:o.b,size:"2x"}),Object(s.jsx)(i.a,{icon:o.a,size:"2x"}),Object(s.jsx)(i.a,{icon:o.c,size:"2x"})]})]})},j=t(20),h=t.p+"static/media/menu.33340226.svg",d=t.p+"static/media/closed.9916c4e6.svg",b=(t(33),function(){var e=Object(a.useState)(!1),n=Object(j.a)(e,2),t=n[0],r=n[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("p",{children:"b."}),Object(s.jsx)("div",{className:"hamburguer-menu",onClick:function(){return r(!t)},children:Object(s.jsx)("img",{src:t?d:h,alt:"menu"})})]}),Object(s.jsx)("div",{className:t?"menu-mobile-open":"menu-mobile",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#about",onClick:function(){return r(!t)},children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#reservation",onClick:function(){return r(!t)},children:"Make a Reservation"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#follow",onClick:function(){return r(!t)},children:"Follow Us"})})]})})]})}),u=(t(34),t.p+"static/media/bar0.806b4121.jpg"),m=function(){return Object(s.jsxs)("section",{className:"section",children:[Object(s.jsxs)("h1",{children:["Welcome",Object(s.jsx)("br",{}),"to the",Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"neon-word",children:"basement."})]}),Object(s.jsx)("img",{src:u,alt:"Basement bar"})]})},x=function(){return Object(s.jsxs)("section",{id:"about",children:[Object(s.jsx)("h4",{children:"About Us"}),Object(s.jsx)("p",{children:"Basement Bar offers an authentic and memorable experience for those sitting down to dine, or others enjoying the bar and nightlife. We offer great live entertainment whether you\u2019re in the mood to dance the night away with a DJ spinning or relax at dinner while listening to an acoustic set. Sit down and relax, or stand up and dance and have a drink with us right here at Basement Bar!"})]})},O=(t(35),function(){var e=["https://images.unsplash.com/photo-1538488881038-e252a119ace7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80","https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80","https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80","https://images.unsplash.com/photo-1528219086320-73c3c9558a26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"];return Object(s.jsxs)("section",{className:"carousel-section",children:[Object(s.jsx)("h2",{children:"Meet Us!"}),Object(s.jsx)("img",{src:e[0],alt:""}),Object(s.jsxs)("div",{className:"thumbnails",children:[Object(s.jsx)("img",{src:e[1],alt:""}),Object(s.jsx)("img",{src:e[2],alt:""}),Object(s.jsx)("img",{src:e[3],alt:""})]})]})}),p=(t(36),t(19)),f={name:"",date:"",phone:"",persons:""},g=function(e){console.log(e)},v=function(e){var n={};return e.name||(n.name="Name must be completed"),e.date||(n.date="You have to pick a date"),e.phone||(n.phone="We need your phone number"),e.persons||(n.persons="How many persons are coming?"),n},w=function(){var e=Object(p.a)({initialValues:f,onSubmit:g,validate:v});return Object(s.jsxs)("section",{className:"reservation",id:"reservation",children:[Object(s.jsx)("h3",{children:"Make a reservation"}),Object(s.jsxs)("form",{className:"reservation-form",onSubmit:e.handleSubmit,children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(s.jsx)("input",{id:"name",type:"text",name:"name",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.name}),e.touched.name&&e.errors.name?Object(s.jsx)("div",{children:e.errors.name}):null,Object(s.jsx)("label",{htmlFor:"date",children:"Date: "}),Object(s.jsx)("input",{id:"date",type:"date",name:"date",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.date}),e.touched.date&&e.errors.date?Object(s.jsx)("div",{children:e.errors.date}):null,Object(s.jsx)("label",{htmlFor:"phone",children:"Phone Number: "}),Object(s.jsx)("input",{id:"phone",type:"tel",name:"phone",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.phone}),e.touched.phone&&e.errors.phone?Object(s.jsx)("div",{children:e.errors.phone}):null,Object(s.jsx)("label",{htmlFor:"persons",children:"How Many Persons? "}),Object(s.jsx)("input",{id:"persons",type:"number",name:"persons",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.persons}),e.touched.persons&&e.errors.persons?Object(s.jsx)("div",{children:e.errors.persons}):null,Object(s.jsx)("button",{type:"submit",children:"Make a Reservation"})]})]})},y=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{}),Object(s.jsx)(m,{}),Object(s.jsx)(O,{}),Object(s.jsx)(w,{}),Object(s.jsx)(x,{}),Object(s.jsx)(l,{})]})};c.a.render(Object(s.jsx)(y,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.089954b3.chunk.js.map
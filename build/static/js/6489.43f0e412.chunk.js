"use strict";(self.webpackChunke_commerce_template=self.webpackChunke_commerce_template||[]).push([[6489],{6489:function(e,s,a){a.r(s);a(2791);var t=a(3504),n=a(1940),c=a(4483),r=a(3174),i=a(9954),o=a(184);s.default=function(e){var s=e.data;return(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("img",{src:s.image,className:"card-img-top",alt:"..."}),s.isNew&&(0,o.jsx)("span",{className:"badge bg-success position-absolute mt-2 ms-2",children:"New"}),s.isHot&&(0,o.jsx)("span",{className:"badge bg-danger position-absolute r-0 mt-2 me-2",children:"Hot"}),(s.bio>0||s.discountPrice>0)&&(0,o.jsxs)("span",{className:"rounded position-absolute p-2 bg-warning  ms-2 small ".concat(s.isNew?"mt-5":"mt-2"),children:["-",s.bio>0?s.bio+"%":"$"+s.discountPrice]}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h6",{className:"card-subtitle mb-2",children:(0,o.jsx)(t.rU,{to:s.id,className:"text-decoration-none",children:s.name})}),(0,o.jsxs)("div",{className:"my-2",children:[(0,o.jsxs)("span",{className:"fw-bold h5",children:["$",s.price]}),s.originPrice>0&&(0,o.jsxs)("del",{className:"small text-muted ms-2",children:["$",s.originPrice]}),(0,o.jsx)("span",{className:"ms-2",children:Array.from({length:s.star},(function(e,s){return(0,o.jsx)(n.r,{className:"text-warning me-1"},s)}))})]}),(0,o.jsx)("div",{className:"btn-group  d-flex",role:"group",children:(0,o.jsx)("button",{type:"button",className:"btn btn-sm btn-primary",title:"Add to cart",onClick:function(){return(0,i.m)(s.id,1)},children:(0,o.jsx)(c.G,{icon:r.qD8})})})]})]})}},9954:function(e,s,a){a.d(s,{m:function(){return c}});var t=a(1243),n=(a(2791),a(2156)),c=function(e,s){var a=localStorage.getItem("authTokens"),c=JSON.parse(a).access,r={method:"post",maxBodyLength:1/0,url:n.J.basket.update,headers:{Authorization:"Bearer "+c},data:{product_id:e,quantity:s}};t.Z.request(r).then((function(e){})).catch((function(e){}))}}}]);
//# sourceMappingURL=6489.43f0e412.chunk.js.map
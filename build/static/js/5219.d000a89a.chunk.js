"use strict";(self.webpackChunke_commerce_template=self.webpackChunke_commerce_template||[]).push([[5219],{5219:function(e,t,n){n.r(t);var a=n(2982),r=n(4165),s=n(5861),c=n(5671),o=n(3144),i=n(136),u=n(2882),d=n(2791),l=n(6612),h=(n(4483),n(1243)),m=n(2156),g=n(184),p=(0,d.lazy)((function(){return n.e(3789).then(n.bind(n,3789))})),f=(0,d.lazy)((function(){return n.e(3720).then(n.bind(n,3720))})),v=(0,d.lazy)((function(){return n.e(8038).then(n.bind(n,8038))})),x=(0,d.lazy)((function(){return Promise.all([n.e(7114),n.e(3022)]).then(n.bind(n,3022))})),P=function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(e=t.call.apply(t,[this].concat(i))).state={currentProducts:[],currentPage:null,totalPages:null,totalItems:0,view:"list",image:"",imageURLs:""},e.onSubmit=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n){var a,s,c,o,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=new FormData).append("name",n.name),a.append("bio",n.Info),a.append("address",n.address),a.append("image",e.state.image),console.log("formData",a),s=localStorage.getItem("authTokens"),c=JSON.parse(s),o=c.access,i={method:"post",maxContentLength:1/0,url:m.J.store.create,headers:{Authorization:"Bearer "+o,"Content-Type":"multipart/form-data"},data:a},h.Z.request(i).then((function(t){e.onProductsChanged(t.data)})).catch((function(e){}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onProductsChanged=function(t){e.setState({currentProducts:[].concat((0,a.Z)(e.state.currentProducts),[t])})},e.onProductsDeleted=function(t){var n=e.state.currentProducts.filter((function(e){return e.id!==t}));e.setState({currentProducts:n})},e.onPageChanged=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n){var a,s,c,o,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.getProducts(),s=localStorage.getItem("authTokens"),c=JSON.parse(s),o=c.access,i={method:"get",maxBodyLength:1/0,url:m.J.store.list,headers:{Authorization:"Bearer "+o}},h.Z.request(i).then((function(t){a=t.data;var r=n.currentPage,s=n.totalPages,c=n.pageLimit,o=(r-1)*c,i=a.slice(o,o+c);e.setState({currentPage:r,currentProducts:i,totalPages:s})})).catch((function(e){console.error(e)}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeView=function(t){e.setState({view:t})},e.onChangeImage=function(t){e.setState({image:t})},e.getProducts=function(){var e=l.a.products,t=JSON.parse(localStorage.getItem("authTokens")).access,n={method:"get",maxBodyLength:1/0,url:m.J.store.list,headers:{Authorization:"Bearer "+t}};return h.Z.request(n).then((function(t){e=(e=t.data).data})).catch((function(e){})),e},e}return(0,o.Z)(n,[{key:"UNSAFE_componentWillMount",value:function(){var e=this.getProducts().length;this.setState({totalItems:e})}},{key:"render",value:function(){var e=this;return(0,g.jsxs)(d.Fragment,{children:[(0,g.jsx)("div",{className:"p-5 bg-primary bs-cover",style:{backgroundImage:"url(../../images/banner/50-Banner.webp)"},children:(0,g.jsx)("div",{className:"container text-center",children:(0,g.jsx)("span",{className:"display-5 px-3 bg-white rounded shadow",children:"Stores"})})}),(0,g.jsx)(f,{}),(0,g.jsx)("div",{className:"container-fluid mb-3",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-3",children:(0,g.jsx)("div",{className:"card mb-3",children:(0,g.jsxs)("div",{className:"card-header",children:[(0,g.jsx)("span",{className:"align-middle",children:"Add card"}),(0,g.jsx)(x,{onSubmit:this.onSubmit,onChangeImage:this.onChangeImage})]})})}),(0,g.jsxs)("div",{className:"col-md-9",children:[(0,g.jsx)("hr",{}),(0,g.jsx)("div",{className:"row g-3",children:this.state.currentProducts.map((function(t,n){return(0,g.jsx)("div",{className:"col-md-4",children:(0,g.jsx)(v,{data:t,onProductsDeleted:e.onProductsDeleted})},n)}))}),(0,g.jsx)("hr",{}),(0,g.jsx)(p,{totalRecords:this.state.totalItems,pageLimit:9,pageNeighbours:3,onPageChanged:this.onPageChanged,sizing:"",alignment:"justify-content-center"})]})]})})]})}}]),n}(d.Component);t.default=P}}]);
//# sourceMappingURL=5219.d000a89a.chunk.js.map
(this.webpackJsonpcosmetics=this.webpackJsonpcosmetics||[]).push([[0],{63:function(n,t,e){"use strict";e.r(t);var c,r,o,i,a,s,d,b,l,j,u,p,h,f,x,O,g,m,v,y,w,k,S,C,P,E,_,T,D,A,z,F,H,U,R,B,L,M,I,N,G,Y,q,J,W,X,V,K,Q,Z,$,nn,tn=e(0),en=e.n(tn),cn=e(20),rn=e.n(cn),on=e(7),an=e(2),sn=e(3),dn=Object(sn.a)(c||(c=Object(an.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    display: flex;\n    min-height: 100vh;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  #root {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n  }\n"]))),bn=dn,ln=e(10),jn=414,un=768,pn=1024,hn={phone:"@media (max-width: ".concat(jn,"px)"),tablet:"@media (max-width: ".concat(un,"px)"),desktop:"@media (max-width: ".concat(pn,"px)")},fn=hn,xn=function(n){return"".concat("/cosmetics","/images/products/").concat(n)},On=e(1),gn=sn.b.header(r||(r=Object(an.a)(["\n  background-color: lavender;\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n"]))),mn=sn.b.h1(o||(o=Object(an.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  color: black;\n\n  "," {\n    font-size: 25px;\n  }\n"])),fn.phone),vn=sn.b.img(i||(i=Object(an.a)(["\n  width: 50px;\n"]))),yn=Object(sn.b)(ln.b)(a||(a=Object(an.a)(["\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),wn=function(){return Object(On.jsx)(gn,{children:Object(On.jsxs)(yn,{to:"/",children:[Object(On.jsx)(mn,{children:"Sklep kosmetyczny"}),Object(On.jsx)(vn,{src:xn("logo.png"),alt:"cosmetics"})]})})},kn=e(34),Sn=e(5),Cn=sn.b.nav(s||(s=Object(an.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  background-color: lavender;\n  padding: 10px;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n\n  "," {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding-right: 15px;\n  }\n"])),fn.tablet),Pn=sn.b.div(d||(d=Object(an.a)(["\n  "," {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n"])),fn.tablet),En=Object(sn.b)(ln.b)(b||(b=Object(an.a)(["\n  padding-right: 30px;\n  text-decoration: none;\n  color: black;\n\n  "," {\n    padding-right: 15px;\n  }\n"])),fn.phone),_n=sn.b.form(l||(l=Object(an.a)(["\n  "," {\n    margin-top: 10px;\n  }\n"])),fn.tablet),Tn=sn.b.input(j||(j=Object(an.a)([""]))),Dn=sn.b.button(u||(u=Object(an.a)([""]))),An=Object(Sn.f)((function(n){var t=n.categories,e=n.history.push,c=Object(tn.useState)(""),r=Object(kn.a)(c,2),o=r[0],i=r[1];return Object(On.jsxs)(Cn,{children:[Object(On.jsxs)(Pn,{children:[Object(On.jsx)(En,{to:"/sale",children:"Promocje"}),t.map((function(n){return Object(On.jsx)(En,{to:n.url,children:n.name},n.url)}))]}),Object(On.jsxs)(_n,{onSubmit:function(n){n.preventDefault(),e("/search?q=".concat(o)),i("")},children:[Object(On.jsx)(Tn,{type:"text",placeholder:"znajd\u017a produkt",value:o,onChange:function(n){i(n.target.value)}}),Object(On.jsx)(Dn,{type:"submit",children:"Szukaj"})]})]})})),zn="https://my-json-server.typicode.com/katarzyna-bloch/cosmetics",Fn=function(){return fetch("".concat(zn,"/products?hasDiscount=true")).then((function(n){return n.json()}))},Hn="FETCH_PRODUCT_DATA",Un="FETCH_PRODUCT_SUCCESS",Rn=function(n){return function(t){return t({type:Hn}),function(n){return fetch("".concat(zn,"/products/").concat(n,"?_expand=category")).then((function(n){return n.json()}))}(n).then((function(n){t({type:Un,payload:n})}))}},Bn="FETCH_SEARCH_DATA",Ln="FETCH_SEARCH_SUCCESS",Mn=function(n){return function(t){return t({type:Bn}),function(n){return fetch("".concat(zn,"/products").concat(n)).then((function(n){return n.json()}))}(n).then((function(n){t({type:Ln,payload:n})}))}},In="FETCH_CATEGORY_DATA",Nn="FETCH_CATEGORY_SUCCESS",Gn=function(n){return function(t){return t({type:In}),function(n){return fetch("".concat(zn,"/categories?url=").concat(n,"&_embed=products")).then((function(n){return n.json()})).then((function(n){return n[0]}))}(n).then((function(n){t({type:Nn,payload:n})}))}},Yn="FETCH_SALE_DATA",qn="FETCH_SALE_SUCCESS",Jn="FETCH_CATEGORIES_SUCCESS",Wn=function(){return function(n){return fetch("".concat(zn,"/categories")).then((function(n){return n.json()})).then((function(t){n({type:Jn,payload:t})}))}},Xn="FETCH_DASHBOARD_DATA",Vn="FETCH_DASHBOARD_DATA_SUCCESS",Kn=function(){return function(n){return n({type:Xn}),function(){var n=[Fn(),fetch("".concat(zn,"/products?rate_gte=7")).then((function(n){return n.json()})),fetch("".concat(zn,"/banners")).then((function(n){return n.json()}))];return Promise.all(n).then((function(n){return{saleProducts:n[0],topProducts:n[1],banners:n[2]}}))}().then((function(t){n({type:Vn,payload:t})}))}},Qn=Object(on.b)((function(n){return{categories:n.categories}}),(function(n){return{fetchCategories:function(){return n(Wn())}}}))((function(n){var t=n.fetchCategories,e=n.categories;return Object(tn.useEffect)((function(){t()}),[]),e?Object(On.jsx)(An,{categories:e}):null})),Zn=sn.b.main(p||(p=Object(an.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  padding: 25px;\n"]))),$n=sn.b.footer(h||(h=Object(an.a)(["\n  background-color: lavender;\n  padding: 12px;\n  text-align: center;\n"]))),nt=sn.b.a(f||(f=Object(an.a)(["\n  text-decoration: none;\n  color: black;\n  margin: 30px;\n\n  "," {\n    margin: 10px;\n  }\n"])),fn.phone),tt=function(){return Object(On.jsxs)($n,{children:[Object(On.jsx)(nt,{href:"http://facebook.com",target:"_blank",children:"Facebook"}),Object(On.jsx)(nt,{href:"http://instagram.com",target:"_blank",children:"Instagram"}),Object(On.jsx)(nt,{href:"http://youtube.com",target:"_blank",children:"YouTube"})]})},et=e(4),ct=e(8),rt=sn.b.div(x||(x=Object(an.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]))),ot=sn.b.div(O||(O=Object(an.a)(["\n  text-decoration: line-through;\n  font-weight: 600;\n  padding-right: 10px;\n"]))),it=sn.b.div(g||(g=Object(an.a)(["\n  font-weight: 600;\n  color:  ",";\n"])),(function(n){return n.hasDiscount?"red":"none"})),at=function(n){var t=n.oldPrice,e=n.hasDiscount,c=n.price;return Object(On.jsxs)(rt,{children:[t&&Object(On.jsx)(ot,{children:t}),Object(On.jsx)(it,{hasDiscount:e,children:c})]})},st=sn.b.div(m||(m=Object(an.a)([""]))),dt=sn.b.div(v||(v=Object(an.a)(["\n  flex-direction: row;\n  display: flex;\n  padding-top: 25px;\n\n  "," {\n    flex-direction: column;\n  }\n"])),fn.phone),bt=sn.b.div(y||(y=Object(an.a)(["\n  flex: 2;\n"]))),lt=Object(sn.b)(bt)(w||(w=Object(an.a)(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  padding: 0px 20px 20px 0px;\n\n  "," {\n    padding: 0px 0px 20px 0px;\n  }\n"])),fn.phone),jt=sn.b.img(k||(k=Object(an.a)(["\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),ut=sn.b.div(S||(S=Object(an.a)(["\n  font-family: sans-serif;\n  font-weight: 600;\n  font-size: 20px;\n  padding-bottom: 5px;\n"]))),pt=sn.b.div(C||(C=Object(an.a)(["\n  font-weight: 600;\n  padding-bottom: 15px;\n"]))),ht=sn.b.div(P||(P=Object(an.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 15px 0px;\n  border-top: 1px solid lightgrey;\n"]))),ft=Object(sn.b)(ht)(E||(E=Object(an.a)(["\n  "," {\n    flex-direction: column;\n  }\n"])),fn.tablet),xt=sn.b.div(_||(_=Object(an.a)(["\n  flex: 1;\n  font-weight: 600;\n"]))),Ot=sn.b.div(T||(T=Object(an.a)(["\n  font-weight: 600;\n  color: lightgreen;\n  flex: 1;\n"]))),gt=sn.b.div(D||(D=Object(an.a)([""]))),mt=sn.b.div(A||(A=Object(an.a)([""]))),vt=sn.b.div(z||(z=Object(an.a)(["\n  font-weight: 600;\n"]))),yt=function(n){var t=n.img,e=n.brand,c=n.name,r=n.volume,o=n.oldPrice,i=n.price,a=n.description,s=n.hasDiscount;return Object(On.jsxs)(st,{children:[Object(On.jsxs)(dt,{children:[Object(On.jsx)(lt,{children:Object(On.jsx)(jt,{src:xn(t),alt:"photo"})}),Object(On.jsxs)(bt,{children:[Object(On.jsx)(ut,{children:e}),Object(On.jsx)(pt,{children:c}),Object(On.jsxs)(ht,{children:[Object(On.jsx)(xt,{children:r}),Object(On.jsx)(at,{price:i,oldPrice:o,hasDiscount:s})]}),Object(On.jsxs)(ft,{children:[Object(On.jsx)(Ot,{children:"Produkt dost\u0119pny"}),Object(On.jsx)(gt,{children:"Dostawa gratis od 99 z\u0142"})]})]})]}),Object(On.jsxs)(mt,{children:[Object(On.jsx)(vt,{children:"Opis Produktu"}),a]})]})},wt=sn.b.div(F||(F=Object(an.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n"]))),kt=sn.b.span(H||(H=Object(an.a)(['\n  color: gray;\n  &:not(:last-child):after {\n    padding: 8px;\n    content: "/";\n  }\n']))),St=Object(sn.b)(ln.b)(U||(U=Object(an.a)(["\n  color: inherit;\n  text-decoration: none;\n  &:hover {\n    color: lightblue;\n  }\n"]))),Ct=sn.b.span(R||(R=Object(an.a)([""]))),Pt=function(n){var t=n.values;return Object(On.jsxs)(wt,{children:[Object(On.jsx)(kt,{children:Object(On.jsx)(St,{to:"/",children:"Home"})}),t.map((function(n){return Object(On.jsx)(kt,{children:n.link?Object(On.jsx)(St,{to:n.link,children:n.label}):Object(On.jsx)(Ct,{children:n.label})},n.label)}))]})},Et=sn.b.div(B||(B=Object(an.a)(["\n  max-width: 1024px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]))),_t=sn.b.img(L||(L=Object(an.a)(["\n  height: 100px;\n"]))),Tt=function(){return Object(On.jsx)(_t,{src:"https://veganvita24.pl/kalkulator/img/Loading.gif"})},Dt=Object(ct.d)(Object(on.b)((function(n){var t=n.product;return Object(et.a)({},t)}),(function(n){return{fetchProducts:function(t){return n(Rn(t))}}})),Sn.f)((function(n){var t=n.fetchProducts,e=n.product,c=n.match.params.id,r=n.loading;if(Object(tn.useEffect)((function(){t(c)}),[]),!e||r)return Object(On.jsx)(Tt,{});var o=[{label:e.category.name,link:e.category.url},{label:e.name}];return Object(On.jsxs)(Et,{children:[Object(On.jsx)(Pt,{values:o}),Object(On.jsx)(yt,Object(et.a)({},e))]})})),At=Object(sn.b)(ln.b)(M||(M=Object(an.a)(["\n  text-decoration: none;\n  color: black;\n"]))),zt=sn.b.div(I||(I=Object(an.a)(["\n  text-align: center;\n  padding: 15px;\n"]))),Ft=sn.b.img(N||(N=Object(an.a)(["\n  height: 210px;\n  width: 100%;\n  object-fit: cover;\n"]))),Ht=sn.b.div(G||(G=Object(an.a)(["\n  text-align: center;\n  padding: 5px;\n"]))),Ut=function(n){var t=n.product,e=t.name,c=t.img,r=t.id,o=t.price,i=t.oldPrice,a=t.hasDiscount,s=n.className;return Object(On.jsx)(At,{to:"/products/".concat(r),children:Object(On.jsxs)(zt,{className:s,children:[Object(On.jsx)(Ft,{src:xn(c),alt:"cosmetics"}),Object(On.jsx)(Ht,{children:e}),Object(On.jsx)(at,{hasDiscount:a,oldPrice:i,price:o})]})})},Rt=sn.b.div(Y||(Y=Object(an.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Bt=sn.b.div(q||(q=Object(an.a)(["\n  border: 1px solid transparent;\n  flex: 0 25%;\n  box-sizing: border-box;\n  border-radius: 5px;\n  \n  &:hover {\n    border-color: lightgray;\n  }\n\n  "," {\n    flex: 0 33%;\n  }\n\n  "," {\n    flex: 0 50%;\n  }\n\n  "," {\n    flex: 1 100%;\n  }\n"])),fn.desktop,fn.tablet,fn.phone),Lt=function(n){var t=n.products;return Object(On.jsx)(Rt,{children:t.map((function(n){return Object(On.jsx)(Bt,{children:Object(On.jsx)(Ut,{product:n})},n.id)}))})},Mt=sn.b.h5(J||(J=Object(an.a)(["\n  font-size: 22px;\n  text-align: center;\n  padding-bottom: 10px;\n  margin: 0;\n"]))),It=function(){return Object(On.jsx)(Mt,{children:"Nie znaleziono produktu :("})},Nt=Object(ct.d)(Object(on.b)((function(n){var t=n.searchProducts;return Object(et.a)({},t)}),(function(n){return{fetchProducts:function(t){return n(Mn(t))}}})),Sn.f)((function(n){var t=n.fetchProducts,e=n.searchProducts,c=n.location.search,r=n.loading,o=new URLSearchParams(c).get("q");return Object(tn.useEffect)((function(){t(c)}),[c]),r?Object(On.jsx)(Tt,{}):Object(On.jsx)(Et,{children:e.length>0?Object(On.jsxs)(On.Fragment,{children:[Object(On.jsxs)(Mt,{children:["Wyniki dla frazy: ",o," (",e.length,")"]}),Object(On.jsx)(Lt,{products:e})]}):Object(On.jsx)(It,{})})})),Gt=Object(sn.b)(ln.b)(W||(W=Object(an.a)(["\n  text-decoration: none;\n  color: black;\n"]))),Yt=sn.b.div(X||(X=Object(an.a)(["\n  position: relative;\n"]))),qt=sn.b.img(V||(V=Object(an.a)(["\n  width: 100%;\n  height: 500px;\n  object-fit: cover;\n"]))),Jt=sn.b.div(K||(K=Object(an.a)(["\n  font-family: cursive;\n  font-weight: 600;\n  font-size: 25px;\n  position: absolute;\n  background-color: whitesmoke;\n  padding: 2px;\n  bottom: 30px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  margin: 20px;\n \n  "," {\n    margin: 10px;\n    font-size: 20px;\n  }\n"])),fn.tablet),Wt=function(n){var t,e=n.img,c=n.url,r=n.text;return Object(On.jsx)(Yt,{children:Object(On.jsxs)(Gt,{to:c,children:[Object(On.jsx)(qt,{src:(t=e,"".concat("/cosmetics","/images/banners/").concat(t)),alt:"banners"}),Object(On.jsx)(Jt,{children:r})]})})},Xt=e(32),Vt=e.n(Xt),Kt=(e(61),e(62),sn.b.div(Q||(Q=Object(an.a)(["\n  width: 100%;\n  margin-bottom: ",";\n\n  .slick-slider {\n    width: 100%;\n    max-width: calc(100vw - 50px);\n  }\n\n  .slick-arrow.slick-prev {\n    left: 18px;\n    z-index: 1;\n  }\n  .slick-arrow.slick-next {\n    right: 18px;\n    z-index: 1;\n  }\n\n  ",";\n"])),(function(n){return n.withBottomMargin?"32px":0}),(function(n){var t=n.sideMargins;return t&&"\n    .slick-list {\n      margin-left: -".concat(t,"px;\n      margin-right: -").concat(t,"px;\n    }\n    .slick-slide > div {\n      padding-left: ").concat(t,"px;\n      padding-right: ").concat(t,"px;\n    }\n  ")}))),Qt=sn.b.div(Z||(Z=Object(an.a)([""]))),Zt=function(n){var t=n.items,e=n.settings,c=void 0===e?{}:e,r={dots:!1,infinite:!0,speed:200,draggable:!1,gap:0},o=t.length<10&&(c.dots||r.dots),i=c.gap||r.gap;return Object(On.jsx)(Kt,{withBottomMargin:o,sideMargins:i/2,children:Object(On.jsx)(Vt.a,Object(et.a)(Object(et.a)(Object(et.a)({},r),c),{},{dots:o,children:t.map((function(n,t){return Object(On.jsx)(Qt,{children:n},t)}))}))})},$t=function(n){var t=n.banners.map((function(n){return Object(On.jsx)(Wt,Object(et.a)(Object(et.a)({},n),{},{children:n.src}))}));return Object(On.jsx)(Zt,{items:t,settings:{slidesToShow:1,autoplay:!0,dots:!0}})},ne=Object(sn.b)(Ut)($||($=Object(an.a)(["\n  padding: 0;\n\n  "," {\n    height: 260px;\n  }\n"])),Ft),te=function(n){var t=n.products.map((function(n){return Object(On.jsx)(ne,{product:n},n.id)}));return Object(On.jsx)(Zt,{items:t,settings:{slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:un,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:jn,settings:{slidesToShow:1,slidesToScroll:1}}],gap:30}})},ee=Object(sn.b)(Mt)(nn||(nn=Object(an.a)(["\n  font-size: 25px;\n  margin: 20px 0;\n"]))),ce=Object(on.b)((function(n){var t=n.dashboard;return Object(et.a)({},t)}),(function(n){return{fetchDashboardData:function(){return n(Kn())}}}))((function(n){var t=n.fetchDashboardData,e=n.saleProducts,c=n.topProducts,r=n.banners,o=n.loading;return Object(tn.useEffect)((function(){t()}),[]),o?Object(On.jsx)(Tt,{}):Object(On.jsxs)(Et,{children:[Object(On.jsx)($t,{banners:r}),Object(On.jsx)(ee,{children:"W tym tygodniu w promocji"}),Object(On.jsx)(te,{products:e}),Object(On.jsx)(ee,{children:"Top oferty"}),Object(On.jsx)(te,{products:c})]})})),re=Object(ct.d)(Object(on.b)((function(n){var t=n.category;return Object(et.a)({},t)}),(function(n){return{fetchCategoryByUrl:function(t){return n(Gn(t))}}})),Sn.f)((function(n){var t=n.fetchCategoryByUrl,e=n.category,c=n.match.url,r=n.loading;return Object(tn.useEffect)((function(){t(c)}),[c]),!e||r?Object(On.jsx)(Tt,{}):Object(On.jsxs)(Et,{children:[Object(On.jsx)(Mt,{children:e.heading}),Object(On.jsx)(Lt,{products:e.products})]})})),oe=Object(on.b)((function(n){var t=n.saleProducts;return Object(et.a)({},t)}),(function(n){return{fetchProducts:function(){return n((function(n){return n({type:Yn}),Fn().then((function(t){n({type:qn,payload:t})}))}))}}}))((function(n){var t=n.fetchProducts,e=n.saleProducts,c=n.loading;return Object(tn.useEffect)((function(){t()}),[]),c?Object(On.jsx)(Tt,{}):Object(On.jsxs)(Et,{children:[Object(On.jsx)(Mt,{children:"Promocje, kt\xf3re zachwyc\u0105 ka\u017cdego"}),Object(On.jsx)(Lt,{products:e})]})})),ie=function(){return Object(On.jsxs)(Sn.c,{children:[Object(On.jsx)(Sn.a,{path:"/sale",component:oe}),Object(On.jsx)(Sn.a,{path:"/categories/:categoryUrl",component:re}),Object(On.jsx)(Sn.a,{path:"/products/:id",component:Dt}),Object(On.jsx)(Sn.a,{path:"/search",component:Nt}),Object(On.jsx)(Sn.a,{exact:!0,path:"/",component:ce})]})},ae=function(){return Object(On.jsxs)(ln.a,{children:[Object(On.jsx)(wn,{}),Object(On.jsx)(Qn,{}),Object(On.jsx)(Zn,{children:Object(On.jsx)(ie,{})}),Object(On.jsx)(tt,{})]})},se=e(33),de={product:null,loading:!1},be=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Hn:return Object(et.a)(Object(et.a)({},n),{},{loading:!0});case Un:return{product:t.payload,loading:!1};default:return n}},le={searchProducts:[],loading:!1},je=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Bn:return Object(et.a)(Object(et.a)({},n),{},{loading:!0});case Ln:return{searchProducts:t.payload,loading:!1};default:return n}},ue={category:null,loading:!1},pe=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case In:return Object(et.a)(Object(et.a)({},n),{},{loading:!0});case Nn:return{category:t.payload,loading:!1};default:return n}},he={saleProducts:[],loading:!1},fe=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Yn:return Object(et.a)(Object(et.a)({},n),{},{loading:!0});case qn:return{saleProducts:t.payload,loading:!1};default:return n}},xe=[],Oe=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Jn:return t.payload;default:return n}},ge={saleProducts:[],topProducts:[],banners:[],loading:!1},me=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xn:return Object(et.a)(Object(et.a)({},n),{},{loading:!0});case Vn:return Object(et.a)(Object(et.a)({},t.payload),{},{loading:!1});default:return n}},ve=Object(ct.c)({product:be,searchProducts:je,category:pe,saleProducts:fe,categories:Oe,dashboard:me}),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ct.d;var we=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,64)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;e(n),c(n),r(n),o(n),i(n)}))};rn.a.render(Object(On.jsx)(en.a.StrictMode,{children:Object(On.jsxs)(on.a,{store:Object(ct.e)(ve,ye(Object(ct.a)(se.a))),children:[Object(On.jsx)(bn,{}),Object(On.jsx)(ae,{})]})}),document.getElementById("root")),we()}},[[63,1,2]]]);
//# sourceMappingURL=main.84d360a6.chunk.js.map
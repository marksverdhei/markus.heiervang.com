(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{58:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),o=a(84),s=a(95),l=a(89),d=a(94),j=a(41),b=a.n(j),p=a(42),h=a.n(p),m=a(86),u=a(59),g=a(88),x=a(2),O=Object(o.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0}}}));function v(e){var t=O(),a=e.sections,n=e.title;return Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(m.a,{className:t.toolbar,children:Object(x.jsx)(u.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:t.toolbarTitle,children:n})}),Object(x.jsx)(m.a,{component:"nav",variant:"dense",className:t.toolbarSecondary,children:a.map((function(e){return Object(x.jsx)(g.a,{color:"inherit",noWrap:!0,variant:"body2",href:e.url,className:t.toolbarLink,children:e.title},e.title)}))})]})}var f=a(33),k=a(60),y=Object(o.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(f.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}}));function w(e){var t=y(),a=e.post;return Object(x.jsxs)(k.a,{className:t.mainFeaturedPost,style:{backgroundImage:"url(".concat(a.image,")")},children:[Object(x.jsx)("img",{style:{display:"none"},src:a.image,alt:a.imageText}),Object(x.jsx)("div",{className:t.overlay}),Object(x.jsx)(l.a,{container:!0,children:Object(x.jsx)(l.a,{item:!0,md:6,children:Object(x.jsxs)("div",{className:t.mainFeaturedPostContent,children:[Object(x.jsx)(u.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:a.title}),Object(x.jsx)(u.a,{variant:"h5",color:"inherit",paragraph:!0,children:a.description}),Object(x.jsx)(g.a,{variant:"subtitle1",href:"#",children:a.linkText})]})})})]})}var B=a(90),N=a(96),T=a(91),I=a(92),C=a(97),S=Object(o.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function F(e){var t=S(),a=e.post;return Object(x.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(x.jsx)(N.a,{component:"a",href:"#",children:Object(x.jsxs)(B.a,{className:t.card,children:[Object(x.jsx)("div",{className:t.cardDetails,children:Object(x.jsxs)(T.a,{children:[Object(x.jsx)(u.a,{component:"h2",variant:"h5",children:a.title}),Object(x.jsx)(u.a,{variant:"subtitle1",color:"textSecondary",children:a.date}),Object(x.jsx)(u.a,{variant:"subtitle1",paragraph:!0,children:a.description})]})}),Object(x.jsx)(C.a,{xsDown:!0,children:Object(x.jsx)(I.a,{className:t.cardMedia,image:a.image,title:a.imageTitle})})]})})})}var P=a(20),M=a(93),W=a(43),L=a(40),D=a(5),A={overrides:{h1:{component:u.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:u.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:u.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:u.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:u.a,props:{paragraph:!0}},a:{component:g.a},li:{component:Object(D.a)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object(W.a)(e,["classes"]);return Object(x.jsx)("li",{className:t.listItem,children:Object(x.jsx)(u.a,Object(P.a)({component:"span"},a))})}))}}};function G(e){return Object(x.jsx)(L.a,Object(P.a)({options:A},e))}var H=Object(o.a)((function(e){return{markdown:Object(P.a)(Object(P.a)({},e.typography.body2),{},{padding:e.spacing(3,0)})}}));function J(e){var t=H(),a=e.posts,n=e.title;return Object(x.jsxs)(l.a,{item:!0,xs:12,md:8,children:[Object(x.jsx)(u.a,{variant:"h6",gutterBottom:!0,children:n}),Object(x.jsx)(M.a,{}),null===a||void 0===a?void 0:a.map((function(e){return Object(x.jsx)(G,{className:t.markdown,children:e},e.substring(0,40))}))]})}var R=Object(o.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)}}}));function U(e){var t=R(),a=e.description,n=e.social,i=e.title;return Object(x.jsxs)(l.a,{item:!0,xs:12,md:4,children:[Object(x.jsxs)(k.a,{elevation:0,className:t.sidebarAboutBox,children:[Object(x.jsx)(u.a,{variant:"h6",gutterBottom:!0,children:i}),Object(x.jsx)(u.a,{children:a})]}),Object(x.jsx)(u.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection,children:"Social"}),n.map((function(e){return Object(x.jsx)(g.a,{display:"block",variant:"body1",href:e.url,children:Object(x.jsxs)(l.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:[Object(x.jsx)(l.a,{item:!0,children:Object(x.jsx)(e.icon,{})}),Object(x.jsx)(l.a,{item:!0,children:e.name})]})},e)}))]})}function _(){return Object(x.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(x.jsx)(g.a,{color:"inherit",href:"https://material-ui.com/",children:"Markus Heiervang"})," ",(new Date).getFullYear()]})}var z=Object(o.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0)}}}));function E(e){var t=z(),a=e.description,n=e.title;return Object(x.jsx)("footer",{className:t.footer,children:Object(x.jsxs)(d.a,{maxWidth:"lg",children:[Object(x.jsx)(u.a,{variant:"h6",align:"center",gutterBottom:!0,children:n}),Object(x.jsx)(u.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:a}),Object(x.jsx)(_,{})]})})}var X=Object(o.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),Y=[],q={title:"Welcome to my personal website",imgText:"main image description"},K=[{title:"About me",date:"",description:"I am a Machine Learning enthusiast currently pursuing a masters degree at the University of Oslo ... ",image:"portrait.jpg",imageText:"Image Text"},{title:"Portfolio",date:"",description:"Click here to view all my published projects",image:"projects.jpg",imageText:"Image Text"}],Q=["\n# Web page launch\n\nOnly time will tell if I'll ever publish something here\n"],V={title:"Useless sidebar",description:"This is a sidebar that I dont know if i'll ever use",archives:[{title:"March 2020",url:"#"}],social:[{name:"GitHub",url:"https://github.com/marksverdhei",icon:b.a},{name:"LinkedIn",url:"https://www.linkedin.com/in/markus-heiervang/",icon:h.a}]};function Z(){var e=X();return Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(s.a,{}),Object(x.jsxs)(d.a,{maxWidth:"lg",children:[Object(x.jsx)(v,{title:"Markus Heiervang",sections:Y}),Object(x.jsxs)("main",{children:[Object(x.jsx)(w,{post:q}),Object(x.jsx)(l.a,{container:!0,spacing:4,children:K.map((function(e){return Object(x.jsx)(F,{post:e},e.title)}))}),Object(x.jsxs)(l.a,{container:!0,spacing:5,className:e.mainGrid,children:[Object(x.jsx)(J,{title:"Blog",posts:Q}),Object(x.jsx)(U,{title:V.title,description:V.description,archives:V.archives,social:V.social})]})]})]}),Object(x.jsx)(E,{title:"What should I put here?",description:"I have no clue!"})]})}var $=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(Z,{})}),document.getElementById("root")),$()}},[[58,1,2]]]);
//# sourceMappingURL=main.344ec386.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("wEEd"),r=a("9eSz"),l=a.n(r),c=a("vOnD"),m=a("gf6R"),d=a("rB5o"),s=a("eZYV"),b=a("l8SF"),p=c.b.div.withConfig({displayName:"Intro__Root",componentId:"sc-18pakr5-0"})(['display:flex;flex-direction:column;align-items:center;&:after{margin:40px 0;content:"";width:100%;border-bottom:1px solid #ccc;display:block;}@media ',"{align-items:inherit;}"],b.b.tablet),g=c.b.section.withConfig({displayName:"Intro__HeadingContainer",componentId:"sc-18pakr5-1"})(["display:grid;grid-template-rows:150px auto;@media ","{grid-template-columns:repeat(2,50%);grid-template-rows:none;margin-top:",";}"],b.b.tablet,Object(d.a)(1.25)),u=c.b.div.withConfig({displayName:"Intro__PitchContainer",componentId:"sc-18pakr5-2"})(["display:flex;flex-direction:column;align-items:center;@media ","{display:block;grid-row:1;}"],b.b.tablet),f=c.b.h1.withConfig({displayName:"Intro__Greeting",componentId:"sc-18pakr5-3"})(["margin:"," 0;margin-bottom:0;"," @media ","{","}"],Object(d.a)(1/4),Object(d.b)(.25),b.b.tablet,Object(d.b)(1)),h=c.b.h4.withConfig({displayName:"Intro__SubTitle",componentId:"sc-18pakr5-4"})(["",";margin-top:0;@media ","{margin-top:",";",';&:after{margin:20px 0;content:"";width:50px;border-bottom:1px solid #ccc;display:block;}}'],Object(d.b)(-.15),b.b.tablet,Object(d.a)(1/4),Object(d.b)(.25)),w=c.b.p.withConfig({displayName:"Intro__Description",componentId:"sc-18pakr5-5"})(["",";text-align:center;@media ","{",";text-align:inherit;}"],Object(d.b)(-.3),b.b.tablet,Object(d.b)(0)),y=Object(c.b)(l.a).withConfig({displayName:"Intro__StyledImage",componentId:"sc-18pakr5-6"})(["margin-bottom:0;justify-self:center;min-width:150px;min-height:150px;border-radius:50%;@media ","{grid-row:auto;justify-self:flex-end;}"],b.b.tablet),E=function(){var e=Object(s.c)().author,t=Object(s.a)({width:150,height:150});return o.a.createElement(p,null,o.a.createElement(g,null,o.a.createElement(y,{fixed:t.childImageSharp.fixed,alt:e.name}),o.a.createElement(u,null,o.a.createElement(f,null,"Hi, I'm ",e.firstname," 👋"),o.a.createElement(h,null,e.title),o.a.createElement(w,null,e.descriptions.intro))),o.a.createElement("strong",null,o.a.createElement("i",null,"Have something worthwhile to do with your life, apart from your job. Do something constructive for this world.")),o.a.createElement("br",null),o.a.createElement(m.a,null),"Reach out to me on your favorite social :)")},j=a("Wbzz"),_=c.b.section.withConfig({displayName:"ShowcasedPostCard__Root",componentId:"sc-1924n5o-0"})(["margin-bottom:",";transition:transform 0.5s ease;&:hover{transform:scale(1.03);}a{box-shadow:none;}@media ","{margin-bottom:",";}"],Object(d.a)(.5),b.b.tablet,Object(d.a)(1)),C=c.b.h4.withConfig({displayName:"ShowcasedPostCard__Title",componentId:"sc-1924n5o-1"})(["margin:"," 0 ",";color:",";@media ","{height:",";margin:"," 0 ",";}"],Object(d.a)(.4),Object(d.a)(.4),(function(e){return e.theme.colors.accent}),b.b.tablet,Object(d.a)(2),Object(d.a)(1.25),Object(d.a)(.1)),I=c.b.span.withConfig({displayName:"ShowcasedPostCard__ContentInfo",componentId:"sc-1924n5o-2"})(["font-style:italic;font-size:",";display:block;"],Object(d.a)(.55)),O=c.b.p.withConfig({displayName:"ShowcasedPostCard__Content",componentId:"sc-1924n5o-3"})(["margin:"," 0;@media ","{max-height:",";}"],Object(d.a)(2/6),b.b.tablet,Object(d.a)(5)),x=Object(c.b)(l.a).withConfig({displayName:"ShowcasedPostCard__Cover",componentId:"sc-1924n5o-4"})(["width:100% !important;height:150px !important;@media ","{height:100px !important;display:block !important;margin-bottom:2px;}"],b.b.tablet),v=function(e){var t=e.title,a=e.slug,n=e.cover,i=e.description,r=e.date,l=e.timeToRead,c=e.location;return o.a.createElement(_,null,o.a.createElement(j.Link,{"aria-label":"Continue reading: "+t,to:"/blog"+a,state:{prevPath:c.pathname}},o.a.createElement(C,null,t),o.a.createElement(x,{fixed:n})),o.a.createElement(I,null,r," · ",l," min read"),o.a.createElement(O,{dangerouslySetInnerHTML:{__html:i.slice(0,160)}}))},k=c.b.section.withConfig({displayName:"ShowcasedPostsContainer__Root",componentId:"uprd4z-0"})(["display:flex;flex-direction:column;margin-bottom:",";@media ","{}"],Object(d.a)(1),b.b.tablet),N=c.b.h2.withConfig({displayName:"ShowcasedPostsContainer__Title",componentId:"uprd4z-1"})(["margin:0;margin:"," 0;@media ","{margin:0;}"],Object(d.a)(.5),b.b.tablet),S=c.b.div.withConfig({displayName:"ShowcasedPostsContainer__PostsContainer",componentId:"uprd4z-2"})(["display:grid;grid-template-columns:100%;grid-template-rows:none;justify-content:center;@media ","{grid-template-rows:minmax(100px,100%);grid-template-columns:repeat(3,31%);grid-gap:3.5%;}"],b.b.tablet),P=function(e){var t=e.location,a=e.title,n=e.posts;return o.a.createElement(k,null,o.a.createElement(N,{"aria-label":a+" posts section"},a),o.a.createElement(S,null,n.map((function(e){return o.a.createElement(v,{key:e.node.fields.slug,title:e.node.frontmatter.title,description:e.node.frontmatter.description,date:e.node.frontmatter.date,slug:e.node.fields.slug,cover:e.node.frontmatter.cover.childImageSharp.fixed,timeToRead:e.node.timeToRead,location:t})}))))},R=function(e){var t=e.location,a=Object(j.useStaticQuery)("254806626").allMarkdownRemark,n=a.edges.slice(0,3),i=a.edges.filter((function(e){return!n.find((function(t){return t.node.fields.slug===e.node.fields.slug}))})).filter((function(e){return e.node.frontmatter.featured})).slice(0,3);return o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{location:t,posts:n,title:"Latest Posts ⌛️"}),i.length>0&&o.a.createElement(P,{location:t,posts:i,title:"Featured Posts ✨"}))},z=function(e){var t=e.location;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement(R,{location:t}))},T=a("Ng2+"),H=a("hizP");t.default=function(e){var t=e.location,a=Object(s.c)().title,n=Object(s.b)({config:i.b.gentle,translateX:-100,location:t});return o.a.createElement(T.a,{location:t,title:a},o.a.createElement(H.a,{title:"Home"}),n.map((function(e){var a=e.props,n=e.key;return o.a.createElement(i.a.div,{key:n,style:a},o.a.createElement(z,{location:t}))})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3b62035762dc13bc29cb.js.map
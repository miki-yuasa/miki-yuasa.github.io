(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{JEac:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("Kf54"),c=a("wx7a"),o=a("Lmzm"),i=function(e){var t=e.pageContext.slug,a=e.data.allMdx.edges,n=~(null==t?void 0:t.indexOf("/")),i=n?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"neutralDark",href:"/blog/tags/"+(null==t?void 0:t.split("/")[0].toLowerCase())},null==t?void 0:t.split("/")[0])," / ",r.a.createElement("a",{className:"neutralDark",href:"/blog/tags/"+(null==t?void 0:t.toLowerCase())},null==t?void 0:t.split("/")[1])):r.a.createElement("a",{className:"neutralDark",href:"/blog/tags/"+(null==t?void 0:t.toLowerCase())},t),s=[{text:"Home",href:"/"},{text:"Blog",href:"/blog"},{text:"Tags",href:"#tags"}],u=[].concat(s,n?[{text:null==t?void 0:t.split("/")[0],href:"/blog/tags/"+(null==t?void 0:t.split("/")[0].toLowerCase())},{text:null==t?void 0:t.split("/")[1]}]:[{text:t}]),m=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(c.a,{crumbItems:u})),r.a.createElement(o.a,{iconName:"tagSolid",resultHeader:i,articles:a})),d=n?"Tag: "+t:"Category: "+t,g=n?"List of articles including "+t+" tag.":"List of articles under "+t+" category.";return r.a.createElement(l.a,{title:d,description:g,body:m})}},JUxG:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),l=a("/HN3");function c(e){var t=e.frontmatter.description,a=(null==t?void 0:t.length)>=210?(null==t?void 0:t.substr(0,210))+"...":t;return r.a.createElement("div",{className:"articleListItem"},r.a.createElement("div",null,r.a.createElement(l.a,{tags:e.frontmatter.tags}),r.a.createElement("h3",{style:{marginTop:"8px"}},r.a.createElement("a",{className:"articleList",href:"/blog/articles/"+e.frontmatter.slug},e.frontmatter.title))),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("div",{className:"articleInfo"},r.a.createElement(l.b,{date:e.frontmatter.date}))))}},Lmzm:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("tqYG"),r=a("//8a"),l=a("q1tI"),c=a.n(l),o=a("JUxG"),i=function(e){var t=e.articles.map((function(e){var t=e.node.frontmatter;return c.a.createElement(o.a,{frontmatter:t})})),a=Object(n.x)({fontSize:"1.2rem",margin:"0px 15px 0px 0"}),l=c.a.createElement(r.a,{iconName:e.iconName,className:a}),i=1==e.articles.length?"article was":"articles were";return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,l,e.resultHeader),c.a.createElement("section",null,c.a.createElement("b",null,e.articles.length)," ",i," found."),t)}},MVUp:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("JEac");t.default=function(e){var t=e.data,a=e.pageContext;return r.a.createElement(l.a,{data:t,pageContext:a})}}}]);
//# sourceMappingURL=component---src-templates-blog-cat-page-template-tsx-ebebfdce1b3618865917.js.map
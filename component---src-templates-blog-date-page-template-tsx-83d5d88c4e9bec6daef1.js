(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{CtPh:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Kf54"),c=a("wx7a"),i=a("Lmzm"),o=function(e){var t=e.pageContext.displayYear,a=void 0!==e.pageContext.displayMonth,n=a?t+"/"+e.pageContext.displayMonth:t,o=a?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"/blog/archives/"+t,className:"neutralDark"},t)," / ",r.a.createElement("a",{href:"/blog/archives/"+t+"/"+e.pageContext.displayMonth,className:"neutralDark"},e.pageContext.displayMonth)):r.a.createElement("a",{href:"/blog/archives/"+t,className:"neutralDark"},t),s=e.data.allMdx.edges,m=[{text:"Home",href:"/"},{text:"Blog",href:"/blog"},{text:"Archives",href:"#archives"}],u=[].concat(m,a?[{text:t,href:"/blog/archives/"+t},{text:e.pageContext.displayMonth}]:[{text:t}]),d=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(c.a,{crumbItems:u})),r.a.createElement(i.a,{iconName:"Calendar",resultHeader:o,articles:s})),f=a?"Month: "+n:"Year: "+n,p="List of articles in "+n+".";return r.a.createElement(l.a,{title:f,description:p,body:d})};t.default=function(e){var t=e.data,a=e.pageContext;return r.a.createElement(o,{data:t,pageContext:a})}},JUxG:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),l=a("/HN3");function c(e){var t=e.frontmatter.description,a=(null==t?void 0:t.length)>=210?(null==t?void 0:t.substr(0,210))+"...":t;return r.a.createElement("div",{className:"articleListItem"},r.a.createElement("div",null,r.a.createElement(l.a,{tags:e.frontmatter.tags}),r.a.createElement("h3",{style:{marginTop:"8px"}},r.a.createElement("a",{className:"articleList",href:"/blog/articles/"+e.frontmatter.slug},e.frontmatter.title))),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("div",{className:"articleInfo"},r.a.createElement(l.b,{date:e.frontmatter.date}))))}},Lmzm:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("tqYG"),r=a("//8a"),l=a("q1tI"),c=a.n(l),i=a("JUxG"),o=function(e){var t=e.articles.map((function(e){var t=e.node.frontmatter;return c.a.createElement(i.a,{frontmatter:t})})),a=Object(n.x)({fontSize:"1.2rem",margin:"0px 15px 0px 0"}),l=c.a.createElement(r.a,{iconName:e.iconName,className:a}),o=1==e.articles.length?"article was":"articles were";return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,l,e.resultHeader),c.a.createElement("section",null,c.a.createElement("b",null,e.articles.length)," ",o," found."),t)}}}]);
//# sourceMappingURL=component---src-templates-blog-date-page-template-tsx-83d5d88c4e9bec6daef1.js.map
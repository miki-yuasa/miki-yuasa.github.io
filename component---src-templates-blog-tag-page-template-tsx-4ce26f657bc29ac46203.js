(self.webpackChunkmikihisa_yuasa_portfolio=self.webpackChunkmikihisa_yuasa_portfolio||[]).push([[788],{599518:function(e,t,a){"use strict";a.d(t,{T:function(){return r}});var l=a(667294),n=a(460470);function r(e){var t=e.frontmatter.description,a=(null==t?void 0:t.length)>=210?(null==t?void 0:t.substr(0,210))+"...":t;return l.createElement("div",{className:"articleListItem"},l.createElement("div",null,l.createElement(n.M,{tags:e.frontmatter.tags}),l.createElement("h3",{style:{marginTop:"8px"}},l.createElement("a",{className:"articleList",href:"/blog/articles/"+e.frontmatter.slug},e.frontmatter.title))),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:a}}),l.createElement("div",{className:"articleInfo"},l.createElement(n.n,{date:e.frontmatter.date}))))}},354250:function(e,t,a){"use strict";a.d(t,{e:function(){return o}});var l=a(145759),n=a(656085),r=a(667294),i=a(599518),o=function(e){var t=e.articles.map((function(e){var t=e.node.frontmatter;return r.createElement(i.T,{frontmatter:t})})),a=(0,l.y0)({fontSize:"1.2rem",margin:"0px 15px 0px 0"}),o=r.createElement(n.xu,{iconName:e.iconName,className:a}),c=1==e.articles.length?"article was":"articles were";return r.createElement(r.Fragment,null,r.createElement("h3",null,o,e.resultHeader),r.createElement("section",null,r.createElement("b",null,e.articles.length)," ",c," found."),t)}},464589:function(e,t,a){"use strict";a.d(t,{v:function(){return o}});var l=a(667294),n=a(202134),r=a(912351),i=a(354250),o=function(e){var t=e.pageContext.slug,a=e.data.allMdx.edges,o="neutralDark",c=~(null==t?void 0:t.indexOf("/")),s=c?l.createElement(l.Fragment,null,l.createElement("a",{className:o,href:"/blog/tags/"+(null==t?void 0:t.split("/")[0].toLowerCase())},null==t?void 0:t.split("/")[0])," / ",l.createElement("a",{className:o,href:"/blog/tags/"+(null==t?void 0:t.toLowerCase())},null==t?void 0:t.split("/")[1])):l.createElement("a",{className:o,href:"/blog/tags/"+(null==t?void 0:t.toLowerCase())},t),u=[{text:"Home",href:"/"},{text:"Blog",href:"/blog"},{text:"Tags",href:"#tags"}],m=[].concat(u,c?[{text:null==t?void 0:t.split("/")[0],href:"/blog/tags/"+(null==t?void 0:t.split("/")[0].toLowerCase())},{text:null==t?void 0:t.split("/")[1]}]:[{text:t}]),f=l.createElement(l.Fragment,null,l.createElement("p",null,l.createElement(r.J,{crumbItems:m})),l.createElement(i.e,{iconName:"tagSolid",resultHeader:s,articles:a})),d=c?"Tag: "+t:"Category: "+t,g=c?"List of articles including "+t+" tag.":"List of articles under "+t+" category.";return l.createElement(n.W,{title:d,description:g,body:f})}},364874:function(e,t,a){"use strict";a.r(t);var l=a(667294),n=a(464589);t.default=function(e){var t=e.data,a=e.pageContext;return l.createElement(n.v,{data:t,pageContext:a})}}}]);
//# sourceMappingURL=component---src-templates-blog-tag-page-template-tsx-4ce26f657bc29ac46203.js.map
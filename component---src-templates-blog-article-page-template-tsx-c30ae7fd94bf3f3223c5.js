/*! For license information please see component---src-templates-blog-article-page-template-tsx-c30ae7fd94bf3f3223c5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4M6O":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},l=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),l&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!a(t[r]))return!0})).length};var o=r(n("RIqP")),i=r(n("q1tI"));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},ORnI:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("VUT9"));t.Disqus=o.default;var i=r(n("qASQ"));t.CommentCount=i.default;var a=r(n("vAJ3"));t.CommentEmbed=a.default;var l=o.default;t.default=l},SFnv:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("9eSz"),a=n.n(i),l=n("A2+M"),s=n("Kf54"),c=n("/HN3"),u=n("wx7a"),d=n("WOvX"),p=n("mrSG"),f=n("gk8b"),h=n("tqYG"),m={root:"ms-Nav",linkText:"ms-Nav-linkText",compositeLink:"ms-Nav-compositeLink",link:"ms-Nav-link",chevronButton:"ms-Nav-chevronButton",chevronIcon:"ms-Nav-chevron",navItem:"ms-Nav-navItem",navItems:"ms-Nav-navItems",group:"ms-Nav-group",groupContent:"ms-Nav-groupContent"},v={textContainer:{overflow:"hidden"},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}},g=n("9h5o"),b=n("WJ1O"),y=n("e06V"),w=n("3uSm"),k=n("CBcM"),C=n("LrGI"),x=n("DeEv"),E=n("xL1/");var O=Object(E.a)((function(e){var t=e;return Object(E.a)((function(n){if(e===n)throw new Error("Attempted to compose a component with itself.");var o=n,i=Object(E.a)((function(e){return function(t){return r.createElement(o,Object(p.a)({},t,{defaultRender:e}))}}));return function(e){var n=e.defaultRender;return r.createElement(t,Object(p.a)({},e,{defaultRender:n?i(n):o}))}}))}));var S=Object(E.a)((function(e){return Object(E.a)((function(t){var n=Object(E.a)((function(e){return function(n){return t(n,e)}}));return function(r,o){return e(r,o?n(o):t)}}))}));var _;var j,I=Object(g.a)(),L=function(e){function t(t){var n=e.call(this,t)||this;return n._focusZone=r.createRef(),n._onRenderLink=function(e){var t=n.props,o=t.styles,i=t.groups,a=t.theme,l=I(o,{theme:a,groups:i});return r.createElement("div",{className:l.linkText},e.name)},n._renderGroup=function(e,t){var o=n.props,i=o.styles,a=o.groups,l=o.theme,s=o.onRenderGroupHeader,c=void 0===s?n._renderGroupHeader:s,u=n._isGroupExpanded(e),d=I(i,{theme:l,isGroup:!0,isExpanded:u,groups:a}),f=Object(p.a)(Object(p.a)({},e),{isExpanded:u,onHeaderClick:function(t,r){n._onGroupHeaderClicked(e,t)}});return r.createElement("div",{key:t,className:d.group},f.name?c(f,n._renderGroupHeader):null,r.createElement("div",{className:d.groupContent},n._renderLinks(f.links,0)))},n._renderGroupHeader=function(e){var t=n.props,o=t.styles,i=t.groups,a=t.theme,l=t.expandButtonAriaLabel,s=e.isExpanded,c=I(o,{theme:a,isGroup:!0,isExpanded:s,groups:i}),u=(s?e.collapseAriaLabel:e.expandAriaLabel)||l,d=e.onHeaderClick,p=d?function(e){d(e,s)}:void 0;return r.createElement("button",{className:c.chevronButton,onClick:p,"aria-label":u,"aria-expanded":s},r.createElement(x.a,{className:c.chevronIcon,iconName:"ChevronDown"}),e.name)},Object(b.a)(n),n.state={isGroupCollapsed:{},isLinkExpandStateChanged:!1,selectedKey:t.initialSelectedKey||t.selectedKey},n}return Object(p.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.groups,o=e.className,i=e.isOnTop,a=e.theme;if(!n)return null;var l=n.map(this._renderGroup),s=I(t,{theme:a,className:o,isOnTop:i,groups:n});return r.createElement(k.a,{direction:C.a.vertical,componentRef:this._focusZone},r.createElement("nav",{role:"navigation",className:s.root,"aria-label":this.props.ariaLabel},l))},Object.defineProperty(t.prototype,"selectedKey",{get:function(){return this.state.selectedKey},enumerable:!0,configurable:!0}),t.prototype.focus=function(e){return void 0===e&&(e=!1),!(!this._focusZone||!this._focusZone.current)&&this._focusZone.current.focus(e)},t.prototype._renderNavLink=function(e,t,n){var o,i,a,l=this.props,s=l.styles,c=l.groups,u=l.theme,d=e.icon||e.iconProps,p=this._isLinkSelected(e),h=e.ariaCurrent,m=void 0===h?"page":h,g=I(s,{theme:u,isSelected:p,isDisabled:e.disabled,isButtonEntry:e.onClick&&!e.forceAnchor,leftPadding:14*n+3+(d?0:24),groups:c}),b=e.url&&e.target&&(!(o=e.url)||/^[a-z0-9+-.]+:\/\//i.test(o))?"noopener noreferrer":void 0,y=this.props.linkAs?(i=this.props.linkAs,a=f.a,O(i)(a)):f.a,w=this.props.onRenderLink?function(e,t){return S(e)(t)}(this.props.onRenderLink,this._onRenderLink):this._onRenderLink;return r.createElement(y,{className:g.link,styles:v,href:e.url||(e.forceAnchor?"#":void 0),iconProps:e.iconProps||{iconName:e.icon},onClick:e.onClick?this._onNavButtonLinkClicked.bind(this,e):this._onNavAnchorLinkClicked.bind(this,e),title:void 0!==e.title?e.title:e.name,target:e.target,rel:b,disabled:e.disabled,"aria-current":p?m:void 0,"aria-label":e.ariaLabel?e.ariaLabel:void 0,link:e},w(e))},t.prototype._renderCompositeLink=function(e,t,n){var o=Object(p.a)({},Object(y.d)(e,y.c,["onClick"])),i=this.props,a=i.expandButtonAriaLabel,l=i.styles,s=i.groups,c=i.theme,u=I(l,{theme:c,isExpanded:!!e.isExpanded,isSelected:this._isLinkSelected(e),isLink:!0,isDisabled:e.disabled,position:14*n+1,groups:s}),d="";return e.links&&e.links.length>0&&(d=e.collapseAriaLabel||e.expandAriaLabel?e.isExpanded?e.collapseAriaLabel:e.expandAriaLabel:a?e.name+" "+a:e.name),r.createElement("div",Object(p.a)({},o,{key:e.key||t,className:u.compositeLink}),e.links&&e.links.length>0?r.createElement("button",{className:u.chevronButton,onClick:this._onLinkExpandClicked.bind(this,e),"aria-label":d,"aria-expanded":e.isExpanded?"true":"false"},r.createElement(x.a,{className:u.chevronIcon,iconName:"ChevronDown"})):null,this._renderNavLink(e,t,n))},t.prototype._renderLink=function(e,t,n){var o=this.props,i=o.styles,a=o.groups,l=o.theme,s=I(i,{theme:l,groups:a});return r.createElement("li",{key:e.key||t,role:"listitem",className:s.navItem},this._renderCompositeLink(e,t,n),e.isExpanded?this._renderLinks(e.links,++n):null)},t.prototype._renderLinks=function(e,t){var n=this;if(!e||!e.length)return null;var o=e.map((function(e,r){return n._renderLink(e,r,t)})),i=this.props,a=i.styles,l=i.groups,s=i.theme,c=I(a,{theme:s,groups:l});return r.createElement("ul",{role:"list",className:c.navItems},o)},t.prototype._onGroupHeaderClicked=function(e,t){e.onHeaderClick&&e.onHeaderClick(t,this._isGroupExpanded(e)),this._toggleCollapsed(e),t&&(t.preventDefault(),t.stopPropagation())},t.prototype._onLinkExpandClicked=function(e,t){var n=this.props.onLinkExpandClick;n&&n(t,e),t.defaultPrevented||(e.isExpanded=!e.isExpanded,this.setState({isLinkExpandStateChanged:!0})),t.preventDefault(),t.stopPropagation()},t.prototype._preventBounce=function(e,t){!e.url&&e.forceAnchor&&t.preventDefault()},t.prototype._onNavAnchorLinkClicked=function(e,t){this._preventBounce(e,t),this.props.onLinkClick&&this.props.onLinkClick(t,e),!e.url&&e.links&&e.links.length>0&&this._onLinkExpandClicked(e,t),this.setState({selectedKey:e.key})},t.prototype._onNavButtonLinkClicked=function(e,t){this._preventBounce(e,t),e.onClick&&e.onClick(t,e),!e.url&&e.links&&e.links.length>0&&this._onLinkExpandClicked(e,t),this.setState({selectedKey:e.key})},t.prototype._isLinkSelected=function(e){if(void 0!==this.props.selectedKey)return e.key===this.props.selectedKey;if(void 0!==this.state.selectedKey)return e.key===this.state.selectedKey;if(void 0===Object(w.a)()||!e.url)return!1;(_=_||document.createElement("a")).href=e.url||"";var t=_.href;return location.href===t||(location.protocol+"//"+location.host+location.pathname===t||!!location.hash&&(location.hash===e.url||(_.href=location.hash.substring(1),_.href===t)))},t.prototype._isGroupExpanded=function(e){return e.name&&this.state.isGroupCollapsed.hasOwnProperty(e.name)?!this.state.isGroupCollapsed[e.name]:void 0===e.collapseByDefault||!e.collapseByDefault},t.prototype._toggleCollapsed=function(e){var t;if(e.name){var n=Object(p.a)(Object(p.a)({},this.state.isGroupCollapsed),((t={})[e.name]=this._isGroupExpanded(e),t));this.setState({isGroupCollapsed:n})}},t.defaultProps={groups:null},t}(r.Component),N=Object(d.a)(L,(function(e){var t,n=e.className,r=e.theme,o=e.isOnTop,i=e.isExpanded,a=e.isGroup,l=e.isLink,s=e.isSelected,c=e.isDisabled,u=e.isButtonEntry,d=e.navHeight,p=void 0===d?44:d,f=e.position,v=e.leftPadding,g=void 0===v?20:v,b=e.leftPaddingExpanded,y=void 0===b?28:b,w=e.rightPadding,k=void 0===w?20:w,C=r.palette,x=r.semanticColors,E=r.fonts,O=Object(h.o)(m,r);return{root:[O.root,n,E.medium,{overflowY:"auto",userSelect:"none",WebkitOverflowScrolling:"touch"},o&&[{position:"absolute"},h.a.slideRightIn40]],linkText:[O.linkText,{margin:"0 4px",overflow:"hidden",verticalAlign:"middle",textAlign:"left",textOverflow:"ellipsis"}],compositeLink:[O.compositeLink,{display:"block",position:"relative",color:x.bodyText},i&&"is-expanded",s&&"is-selected",c&&"is-disabled",c&&{color:x.disabledText}],link:[O.link,Object(h.n)(r),{display:"block",position:"relative",height:p,width:"100%",lineHeight:p+"px",textDecoration:"none",cursor:"pointer",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",paddingLeft:g,paddingRight:k,color:x.bodyText,selectors:(t={},t[h.e]={border:0,selectors:{":focus":{border:"1px solid WindowText"}}},t)},!c&&{selectors:{".ms-Nav-compositeLink:hover &":{backgroundColor:x.bodyBackgroundHovered}}},s&&{color:x.bodyTextChecked,fontWeight:h.d.semibold,backgroundColor:x.bodyBackgroundChecked,selectors:{"&:after":{borderLeft:"2px solid "+C.themePrimary,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,pointerEvents:"none"}}},c&&{color:x.disabledText},u&&{color:C.themePrimary}],chevronButton:[O.chevronButton,Object(h.n)(r),E.small,{display:"block",textAlign:"left",lineHeight:p+"px",margin:"5px 0",padding:"0px, "+k+"px, 0px, "+y+"px",border:"none",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",cursor:"pointer",color:x.bodyText,backgroundColor:"transparent",selectors:{"&:visited":{color:x.bodyText}}},a&&{fontSize:E.large.fontSize,width:"100%",height:p,borderBottom:"1px solid "+x.bodyDivider},l&&{display:"block",width:y-2,height:p-2,position:"absolute",top:"1px",left:f+"px",zIndex:h.h.Nav,padding:0,margin:0},s&&{color:C.themePrimary,backgroundColor:C.neutralLighterAlt,selectors:{"&:after":{borderLeft:"2px solid "+C.themePrimary,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,pointerEvents:"none"}}}],chevronIcon:[O.chevronIcon,{position:"absolute",left:"8px",height:p,lineHeight:p+"px",fontSize:E.small.fontSize,transition:"transform .1s linear"},i&&{transform:"rotate(-180deg)"},l&&{top:0}],navItem:[O.navItem,{padding:0}],navItems:[O.navItems,{listStyleType:"none",padding:0,margin:0}],group:[O.group,i&&"is-expanded"],groupContent:[O.groupContent,{display:"none",marginBottom:"40px"},h.a.slideDownIn20,i&&{display:"block"}]}}),void 0,{scope:"Nav"}),P=function(e){var t,n,i=null===(t=e.data.mdx)||void 0===t||null===(n=t.tableOfContents)||void 0===n?void 0:n.items;if(void 0===i)return o.a.createElement(o.a.Fragment,null);{var a=i.map((function(e){if(void 0===e.links)return{url:e.url,name:e.title};var t=e.links.map((function(e){return{name:e.name,url:e.url}}));return{url:e.url,name:e.title,link:t}})),l=Object(r.useState)({}),s=l[0],c=l[1],u={root:null,rootMargin:"-50% 0px",threshold:0},d=a.map((function(e){return e.name}));function p(e){e.forEach((function(e){var t,n;console.log("this is doWhenIntersect"),e.isIntersecting&&(t=e.target,n=d.indexOf(t.id),console.log(t.id),c(n))}))}Object(r.useEffect)((function(){console.log("this is inside document");var e=document.querySelectorAll("div.idBox");console.log("new observer");var t=new IntersectionObserver(p,u);console.log("for each box"),console.log(e),e.forEach((function(e){console.log("observe a box"),t.observe(e),console.log("after observe a box")}))}));var f=[{links:a}];return o.a.createElement("div",{className:"articleSidePaneToc"},o.a.createElement(N,{ariaLabel:"Nav Table of Contents",styles:{root:{boxSizing:"border-box"}},groups:f,selectedKey:String(s)}))}},D=(j=function(e,t){return(j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}j(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),q=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return D(t,e),t}(Error);function B(e,t){if(!e)throw new q(t)}function A(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var M=n("TSYQ"),R=n.n(M),T=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),H=function(){return(H=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},z=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(t){i(t)}}function l(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},G=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},W=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},U=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},V=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},K=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function F(e,t,n){var r=t.height,o=t.width,i=W(t,["height","width"]),a=H({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var s=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(s),n(l))}catch(e){console.error(e)}}),1e3);return l}var Q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,l=void 0===a?"windowCenter":a,s=n.windowWidth,c=void 0===s?550:s;F(e,H({height:i,width:c},"windowCenter"===l?V(c,i):K(c,i)),r)},t.handleClick=function(e){return z(t,void 0,void 0,(function(){var t,n,r,o,i,a,l,s,c,u;return G(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,l=t.openShareDialogOnClick,s=t.opts,c=o(a,s),r?[2]:(e.preventDefault(),n?(u=n(),U(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return l&&this.openShareDialog(c),i&&i(e,c),[2]}}))}))},t}return T(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,a=e.forwardedRef,l=(e.networkLink,e.networkName),s=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),c=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,W(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=R()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=H(H(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},c),r&&i);return o.a.createElement("button",H({},u,{"aria-label":u["aria-label"]||l,className:d,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),X=function(){return(X=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var Z=function(e,t,n,i){function a(r,a){var l=n(r),s=X({},r);return Object.keys(l).forEach((function(e){delete s[e]})),o.a.createElement(Q,X({},i,s,{forwardedRef:a,networkName:e,networkLink:t,opts:n(r)}))}return a.displayName="ShareButton-"+e,Object(r.forwardRef)(a)};var J=Z("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return B(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+A({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),Y=function(){return(Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},$=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function ee(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,i=t.iconFillColor,a=t.round,l=t.size,s=$(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",Y({viewBox:"0 0 64 64",width:l,height:l},s),a?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.a.createElement("path",{d:e.path,fill:i}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var te=ee({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var ne=Z("linkedin",(function(e,t){var n=t.title,r=t.summary,o=t.source;return B(e,"linkedin.url"),"https://linkedin.com/shareArticle"+A({url:e,mini:"true",title:n,summary:r,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),re=ee({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var oe=Z("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,i=void 0===o?[]:o,a=t.related,l=void 0===a?[]:a;return B(e,"twitter.url"),B(Array.isArray(i),"twitter.hashtags is not an array"),B(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+A({url:e,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),ie=ee({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var ae=Z("hatena",(function(e,t){var n=t.title;return B(e,"hatena.url"),"http://b.hatena.ne.jp/add?mode=confirm&url="+e+"&title="+n}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),le=ee({color:"#009ad9",networkName:"hatena",path:"M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 "});var se=Z("line",(function(e,t){var n=t.title;return B(e,"line.url"),"https://social-plugins.line.me/lineit/share"+A({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:500,windowHeight:500}),ce=ee({color:"#00b800",networkName:"line",path:"M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"}),ue=function(e){var t,n,r,i,a=null===(t=e.data.mdx)||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.title,l="https://miki-yuasa.github.io/blog/articles/"+(null===(r=e.data.mdx)||void 0===r||null===(i=r.frontmatter)||void 0===i?void 0:i.slug);return o.a.createElement("div",{className:"articleMediaButtons"},o.a.createElement("div",{className:"articleMediaButton"},o.a.createElement(J,{url:l},o.a.createElement(te,{size:32,round:!0}))),o.a.createElement("div",{className:"articleMediaButton"},o.a.createElement(ne,{url:l,title:a},o.a.createElement(re,{size:32,round:!0}))),o.a.createElement("div",{className:"articleMediaButton"},o.a.createElement(oe,{title:a,url:l},o.a.createElement(ie,{size:32,round:!0}))),o.a.createElement("div",{className:"articleMediaButton"},o.a.createElement(ae,{url:l,title:a},o.a.createElement(le,{size:32,round:!0}))),o.a.createElement("div",{className:"articleMediaButton"},o.a.createElement(se,{url:l,title:a},o.a.createElement(ce,{size:32,round:!0}))))},de=n("bBLm"),pe=n("fPds"),fe=n("qvYv"),he=function(e){return o.a.createElement(fe.a,{href:e.frontmatter.slug},"Next   ",o.a.createElement(pe.c,null))},me=function(e){return o.a.createElement(fe.a,{href:e.frontmatter.slug},o.a.createElement(pe.b,null)," Previous")},ve=function(){return o.a.createElement(fe.a,{href:"/blog"},"Blog Top")};function ge(e){var t,n,r=null===(t=e.pageContext.next)||void 0===t?void 0:t.frontmatter,i=null===(n=e.pageContext.previous)||void 0===n?void 0:n.frontmatter,a=r?o.a.createElement(he,{frontmatter:r}):o.a.createElement(o.a.Fragment,null," "),l=i?o.a.createElement(me,{frontmatter:i}):o.a.createElement(o.a.Fragment,null," "),s={root:{alignItems:"center",display:"flex",justifyContent:"center",overflow:"hidden"}},c={root:{alignItems:"center",display:"flex",justifyContent:"center",overflow:"hidden",width:80}};return o.a.createElement(de.a,{horizontal:!0,styles:{root:{overflow:"hidden",width:"100%"}},tokens:{childrenGap:0,padding:0}},o.a.createElement(de.a.Item,{disableShrink:!0,styles:c},l),o.a.createElement(de.a.Item,{grow:!0,styles:s}," "),o.a.createElement(de.a.Item,{disableShrink:!0,styles:c},o.a.createElement(ve,null)),o.a.createElement(de.a.Item,{grow:!0,styles:s}," "),o.a.createElement(de.a.Item,{disableShrink:!0,styles:c},a))}var be=n("ORnI");function ye(e){var t=e.data.mdx,n=null==t?void 0:t.frontmatter;return o.a.createElement(be.Disqus,{config:{url:"https://miki-yuasa.github.io/blog/articles/"+(null==n?void 0:n.slug),identifier:null==n?void 0:n.slug,title:null==n?void 0:n.title}})}t.default=function(e){var t,n,r,i,d,p=e.data,f=e.pageContext,h=p.mdx,m=null==h?void 0:h.frontmatter,v=null==h?void 0:h.body,g=[{text:"Home",href:"/"},{text:"Blog",href:"/blog"},{text:"Articles"},{text:null==m?void 0:m.title}],b=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,o.a.createElement(u.a,{crumbItems:g})),o.a.createElement("div",{style:{maxWidth:"760px",maxHeight:"450px",paddingTop:"5%",paddingRight:"10%",paddingLeft:"10%"}},o.a.createElement(a.a,{fluid:null==m||null===(t=m.image)||void 0===t||null===(n=t.childImageSharp)||void 0===n?void 0:n.fluid})),o.a.createElement("p",null," "),o.a.createElement("h1",null,null==m?void 0:m.title),o.a.createElement("h3",null,null==m?void 0:m.date),o.a.createElement("p",null,o.a.createElement(c.a,{tags:null==m?void 0:m.tags})),o.a.createElement(l.MDXRenderer,null,v),o.a.createElement(ue,{data:p}),o.a.createElement(ge,{pageContext:f}),o.a.createElement("br",null),o.a.createElement(ye,{data:p})),y=null==m?void 0:m.language;return o.a.createElement(s.a,{title:null==m?void 0:m.title,description:null==m?void 0:m.description,lang:y,body:b,side:o.a.createElement(o.a.Fragment,null," ",o.a.createElement(P,{data:p})),image:null==m||null===(r=m.image)||void 0===r||null===(i=r.childImageSharp)||void 0===i||null===(d=i.fluid)||void 0===d?void 0:d.src})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},VUT9:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),a=r(n("VbXa")),l=r(n("q1tI")),s=r(n("17x9")),c=n("4M6O"),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="miki-yuasa-github-io",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,c.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,c.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return l.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(l.default.Component);t.default=u,u.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string,language:s.default.string,remoteAuthS3:s.default.string,apiKey:s.default.string})}},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),i=n("lSNA"),a=n("8OQS");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n("q1tI"),u=n("7ljp").mdx,d=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=a(e,["scope","children"]),l=d(t),p=c.useMemo((function(){if(!n)return null;var e=s({React:c,mdx:u},l),t=Object.keys(e),i=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,t]);return c.createElement(p,s({},i))}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},qASQ:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),a=r(n("VbXa")),l=r(n("q1tI")),s=r(n("17x9")),c=n("4M6O"),u=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="miki-yuasa-github-io",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,i.default)(e,["config","placeholder"]);return l.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(l.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),placeholder:s.default.string}},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function i(t,n,a){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},vAJ3:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("VbXa")),i=r(n("q1tI")),a=r(n("17x9")),l=function(e){function t(){return e.apply(this,arguments)||this}(0,o.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=l,l.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},l.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}}}]);
//# sourceMappingURL=component---src-templates-blog-article-page-template-tsx-c30ae7fd94bf3f3223c5.js.map
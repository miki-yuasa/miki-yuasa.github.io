/*! For license information please see component---src-templates-blog-article-page-template-tsx-f0c4590e227db757d8ce.js.LICENSE.txt */
(self.webpackChunkmikihisa_yuasa_portfolio=self.webpackChunkmikihisa_yuasa_portfolio||[]).push([[134],{69100:function(e,t,n){var r=n(799489),o=n(257067);function i(t,n,a){return o()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},257067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},275900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},127660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return we}});var r=n(667294),o=n(951496),i=n(321274),a=n(202134),l=n(460470),s=n(912351),c=n(702822),u=n(293827),d=n(540002),p=n(429337),f={root:"ms-Nav",linkText:"ms-Nav-linkText",compositeLink:"ms-Nav-compositeLink",link:"ms-Nav-link",chevronButton:"ms-Nav-chevronButton",chevronIcon:"ms-Nav-chevron",navItem:"ms-Nav-navItem",navItems:"ms-Nav-navItems",group:"ms-Nav-group",groupContent:"ms-Nav-groupContent"},h={textContainer:{overflow:"hidden"},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}},m=n(673982),v=n(925620),g=n(230700),y=n(608189),w=n(89771),b=n(27184),k=n(273260),C=n(902954),x=n(281382);var E=(0,x.Ct)((function(e){var t=e;return(0,x.Ct)((function(n){if(e===n)throw new Error("Attempted to compose a component with itself.");var o=n,i=(0,x.Ct)((function(e){return function(t){return r.createElement(o,(0,C.pi)({},t,{defaultRender:e}))}}));return function(e){var n=e.defaultRender;return r.createElement(t,(0,C.pi)({},e,{defaultRender:n?i(n):o}))}}))}));var _=(0,x.Ct)((function(e){return(0,x.Ct)((function(t){var n=(0,x.Ct)((function(e){return function(n){return t(n,e)}}));return function(r,o){return e(r,o?n(o):t)}}))}));var S;var O,L=(0,m.y)(),N=function(e){function t(t){var n=e.call(this,t)||this;return n._focusZone=r.createRef(),n._onRenderLink=function(e){var t=n.props,o=t.styles,i=t.groups,a=t.theme,l=L(o,{theme:a,groups:i});return r.createElement("div",{className:l.linkText},e.name)},n._renderGroup=function(e,t){var o=n.props,i=o.styles,a=o.groups,l=o.theme,s=o.onRenderGroupHeader,c=void 0===s?n._renderGroupHeader:s,d=n._isGroupExpanded(e),p=L(i,{theme:l,isGroup:!0,isExpanded:d,groups:a}),f=(0,u.pi)((0,u.pi)({},e),{isExpanded:d,onHeaderClick:function(t,r){n._onGroupHeaderClicked(e,t)}});return r.createElement("div",{key:t,className:p.group},f.name?c(f,n._renderGroupHeader):null,r.createElement("div",{className:p.groupContent},n._renderLinks(f.links,0)))},n._renderGroupHeader=function(e){var t=n.props,o=t.styles,i=t.groups,a=t.theme,l=t.expandButtonAriaLabel,s=e.isExpanded,c=L(o,{theme:a,isGroup:!0,isExpanded:s,groups:i}),u=(s?e.collapseAriaLabel:e.expandAriaLabel)||l,d=e.onHeaderClick,p=d?function(e){d(e,s)}:void 0;return r.createElement("button",{className:c.chevronButton,onClick:p,"aria-label":u,"aria-expanded":s},r.createElement(k.J,{className:c.chevronIcon,iconName:"ChevronDown"}),e.name)},(0,v.l)(n),n.state={isGroupCollapsed:{},isLinkExpandStateChanged:!1,selectedKey:t.initialSelectedKey||t.selectedKey},n}return(0,u.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.groups,o=e.className,i=e.isOnTop,a=e.theme;if(!n)return null;var l=n.map(this._renderGroup),s=L(t,{theme:a,className:o,isOnTop:i,groups:n});return r.createElement(w.k,{direction:b.U.vertical,componentRef:this._focusZone},r.createElement("nav",{role:"navigation",className:s.root,"aria-label":this.props.ariaLabel},l))},Object.defineProperty(t.prototype,"selectedKey",{get:function(){return this.state.selectedKey},enumerable:!0,configurable:!0}),t.prototype.focus=function(e){return void 0===e&&(e=!1),!(!this._focusZone||!this._focusZone.current)&&this._focusZone.current.focus(e)},t.prototype._renderNavLink=function(e,t,n){var o,i,a,l=this.props,s=l.styles,c=l.groups,u=l.theme,p=e.icon||e.iconProps,f=this._isLinkSelected(e),m=e.ariaCurrent,v=void 0===m?"page":m,g=L(s,{theme:u,isSelected:f,isDisabled:e.disabled,isButtonEntry:e.onClick&&!e.forceAnchor,leftPadding:14*n+3+(p?0:24),groups:c}),y=e.url&&e.target&&(!(o=e.url)||/^[a-z0-9+-.]+:\/\//i.test(o))?"noopener noreferrer":void 0,w=this.props.linkAs?(i=this.props.linkAs,a=d.K,E(i)(a)):d.K,b=this.props.onRenderLink?function(e,t){return _(e)(t)}(this.props.onRenderLink,this._onRenderLink):this._onRenderLink;return r.createElement(w,{className:g.link,styles:h,href:e.url||(e.forceAnchor?"#":void 0),iconProps:e.iconProps||{iconName:e.icon},onClick:e.onClick?this._onNavButtonLinkClicked.bind(this,e):this._onNavAnchorLinkClicked.bind(this,e),title:void 0!==e.title?e.title:e.name,target:e.target,rel:y,disabled:e.disabled,"aria-current":f?v:void 0,"aria-label":e.ariaLabel?e.ariaLabel:void 0,link:e},b(e))},t.prototype._renderCompositeLink=function(e,t,n){var o=(0,u.pi)({},(0,g.pq)(e,g.n7,["onClick"])),i=this.props,a=i.expandButtonAriaLabel,l=i.styles,s=i.groups,c=i.theme,d=L(l,{theme:c,isExpanded:!!e.isExpanded,isSelected:this._isLinkSelected(e),isLink:!0,isDisabled:e.disabled,position:14*n+1,groups:s}),p="";return e.links&&e.links.length>0&&(p=e.collapseAriaLabel||e.expandAriaLabel?e.isExpanded?e.collapseAriaLabel:e.expandAriaLabel:a?e.name+" "+a:e.name),r.createElement("div",(0,u.pi)({},o,{key:e.key||t,className:d.compositeLink}),e.links&&e.links.length>0?r.createElement("button",{className:d.chevronButton,onClick:this._onLinkExpandClicked.bind(this,e),"aria-label":p,"aria-expanded":e.isExpanded?"true":"false"},r.createElement(k.J,{className:d.chevronIcon,iconName:"ChevronDown"})):null,this._renderNavLink(e,t,n))},t.prototype._renderLink=function(e,t,n){var o=this.props,i=o.styles,a=o.groups,l=o.theme,s=L(i,{theme:l,groups:a});return r.createElement("li",{key:e.key||t,role:"listitem",className:s.navItem},this._renderCompositeLink(e,t,n),e.isExpanded?this._renderLinks(e.links,++n):null)},t.prototype._renderLinks=function(e,t){var n=this;if(!e||!e.length)return null;var o=e.map((function(e,r){return n._renderLink(e,r,t)})),i=this.props,a=i.styles,l=i.groups,s=i.theme,c=L(a,{theme:s,groups:l});return r.createElement("ul",{role:"list",className:c.navItems},o)},t.prototype._onGroupHeaderClicked=function(e,t){e.onHeaderClick&&e.onHeaderClick(t,this._isGroupExpanded(e)),this._toggleCollapsed(e),t&&(t.preventDefault(),t.stopPropagation())},t.prototype._onLinkExpandClicked=function(e,t){var n=this.props.onLinkExpandClick;n&&n(t,e),t.defaultPrevented||(e.isExpanded=!e.isExpanded,this.setState({isLinkExpandStateChanged:!0})),t.preventDefault(),t.stopPropagation()},t.prototype._preventBounce=function(e,t){!e.url&&e.forceAnchor&&t.preventDefault()},t.prototype._onNavAnchorLinkClicked=function(e,t){this._preventBounce(e,t),this.props.onLinkClick&&this.props.onLinkClick(t,e),!e.url&&e.links&&e.links.length>0&&this._onLinkExpandClicked(e,t),this.setState({selectedKey:e.key})},t.prototype._onNavButtonLinkClicked=function(e,t){this._preventBounce(e,t),e.onClick&&e.onClick(t,e),!e.url&&e.links&&e.links.length>0&&this._onLinkExpandClicked(e,t),this.setState({selectedKey:e.key})},t.prototype._isLinkSelected=function(e){if(void 0!==this.props.selectedKey)return e.key===this.props.selectedKey;if(void 0!==this.state.selectedKey)return e.key===this.state.selectedKey;if(void 0===(0,y.J)()||!e.url)return!1;(S=S||document.createElement("a")).href=e.url||"";var t=S.href;return location.href===t||(location.protocol+"//"+location.host+location.pathname===t||!!location.hash&&(location.hash===e.url||(S.href=location.hash.substring(1),S.href===t)))},t.prototype._isGroupExpanded=function(e){return e.name&&this.state.isGroupCollapsed.hasOwnProperty(e.name)?!this.state.isGroupCollapsed[e.name]:void 0===e.collapseByDefault||!e.collapseByDefault},t.prototype._toggleCollapsed=function(e){var t;if(e.name){var n=(0,u.pi)((0,u.pi)({},this.state.isGroupCollapsed),((t={})[e.name]=this._isGroupExpanded(e),t));this.setState({isGroupCollapsed:n})}},t.defaultProps={groups:null},t}(r.Component),I=(0,c.z)(N,(function(e){var t,n=e.className,r=e.theme,o=e.isOnTop,i=e.isExpanded,a=e.isGroup,l=e.isLink,s=e.isSelected,c=e.isDisabled,u=e.isButtonEntry,d=e.navHeight,h=void 0===d?44:d,m=e.position,v=e.leftPadding,g=void 0===v?20:v,y=e.leftPaddingExpanded,w=void 0===y?28:y,b=e.rightPadding,k=void 0===b?20:b,C=r.palette,x=r.semanticColors,E=r.fonts,_=(0,p.Cn)(f,r);return{root:[_.root,n,E.medium,{overflowY:"auto",userSelect:"none",WebkitOverflowScrolling:"touch"},o&&[{position:"absolute"},p.k4.slideRightIn40]],linkText:[_.linkText,{margin:"0 4px",overflow:"hidden",verticalAlign:"middle",textAlign:"left",textOverflow:"ellipsis"}],compositeLink:[_.compositeLink,{display:"block",position:"relative",color:x.bodyText},i&&"is-expanded",s&&"is-selected",c&&"is-disabled",c&&{color:x.disabledText}],link:[_.link,(0,p.GL)(r),{display:"block",position:"relative",height:h,width:"100%",lineHeight:h+"px",textDecoration:"none",cursor:"pointer",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",paddingLeft:g,paddingRight:k,color:x.bodyText,selectors:(t={},t[p.qJ]={border:0,selectors:{":focus":{border:"1px solid WindowText"}}},t)},!c&&{selectors:{".ms-Nav-compositeLink:hover &":{backgroundColor:x.bodyBackgroundHovered}}},s&&{color:x.bodyTextChecked,fontWeight:p.lq.semibold,backgroundColor:x.bodyBackgroundChecked,selectors:{"&:after":{borderLeft:"2px solid "+C.themePrimary,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,pointerEvents:"none"}}},c&&{color:x.disabledText},u&&{color:C.themePrimary}],chevronButton:[_.chevronButton,(0,p.GL)(r),E.small,{display:"block",textAlign:"left",lineHeight:h+"px",margin:"5px 0",padding:"0px, "+k+"px, 0px, "+w+"px",border:"none",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",cursor:"pointer",color:x.bodyText,backgroundColor:"transparent",selectors:{"&:visited":{color:x.bodyText}}},a&&{fontSize:E.large.fontSize,width:"100%",height:h,borderBottom:"1px solid "+x.bodyDivider},l&&{display:"block",width:w-2,height:h-2,position:"absolute",top:"1px",left:m+"px",zIndex:p.bR.Nav,padding:0,margin:0},s&&{color:C.themePrimary,backgroundColor:C.neutralLighterAlt,selectors:{"&:after":{borderLeft:"2px solid "+C.themePrimary,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,pointerEvents:"none"}}}],chevronIcon:[_.chevronIcon,{position:"absolute",left:"8px",height:h,lineHeight:h+"px",fontSize:E.small.fontSize,transition:"transform .1s linear"},i&&{transform:"rotate(-180deg)"},l&&{top:0}],navItem:[_.navItem,{padding:0}],navItems:[_.navItems,{listStyleType:"none",padding:0,margin:0}],group:[_.group,i&&"is-expanded"],groupContent:[_.groupContent,{display:"none",marginBottom:"40px"},p.k4.slideDownIn20,i&&{display:"block"}]}}),void 0,{scope:"Nav"}),j=function(e){var t,n,o=null===(t=e.data.mdx)||void 0===t||null===(n=t.tableOfContents)||void 0===n?void 0:n.items;if(void 0===o)return r.createElement(r.Fragment,null);{var i=o.map((function(e){if(void 0===e.links)return{url:e.url,name:e.title};var t=e.links.map((function(e){return{name:e.name,url:e.url}}));return{url:e.url,name:e.title,link:t}})),a=60+57*i.length,l=(0,r.useState)({}),s=l[0],c=l[1],u={root:null,rootMargin:"-50% 0px",threshold:0},d=i.map((function(e){return e.name}));function p(e){e.forEach((function(e){var t,n;console.log("this is doWhenIntersect"),e.isIntersecting&&(t=e.target,n=d.indexOf(t.id),console.log(t.id),c(n))}))}(0,r.useEffect)((function(){console.log("this is inside document");var e=document.querySelectorAll("div.idBox");console.log("new observer");var t=new IntersectionObserver(p,u);console.log("for each box"),console.log(e),e.forEach((function(e){console.log("observe a box"),t.observe(e),console.log("after observe a box")}))}));var f=[{links:i}];return r.createElement("div",{className:"articleSidePaneToc",style:{height:a}},r.createElement(I,{ariaLabel:"Nav Table of Contents",groups:f,selectedKey:String(s)}))}},P=(O=function(e,t){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),D=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return P(t,e),t}(Error);function B(e,t){if(!e)throw new D(t)}function M(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var A=n(275900),q=n.n(A),R=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),T=function(){return(T=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},H=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(t){i(t)}}function l(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))},z=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},G=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},W=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},K=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},U=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function F(e,t,n){var r=t.height,o=t.width,i=G(t,["height","width"]),a=T({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var s=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(s),n(l))}catch(e){console.error(e)}}),1e3);return l}var Z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,l=void 0===a?"windowCenter":a,s=n.windowWidth,c=void 0===s?550:s;F(e,T({height:i,width:c},"windowCenter"===l?K(c,i):U(c,i)),r)},t.handleClick=function(e){return H(t,void 0,void 0,(function(){var t,n,r,o,i,a,l,s,c,u;return z(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,l=t.openShareDialogOnClick,s=t.opts,c=o(a,s),r?[2]:(e.preventDefault(),n?(u=n(),W(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return l&&this.openShareDialog(c),i&&i(e,c),[2]}}))}))},t}return R(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,o=e.disabled,i=e.disabledStyle,a=e.forwardedRef,l=(e.networkLink,e.networkName),s=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),c=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,G(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=q()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},n),p=T(T(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},c),o&&i);return r.createElement("button",T({},u,{"aria-label":u["aria-label"]||l,className:d,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),V=function(){return(V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var Q=function(e,t,n,o){function i(i,a){var l=n(i),s=V({},i);return Object.keys(l).forEach((function(e){delete s[e]})),r.createElement(Z,V({},o,s,{forwardedRef:a,networkName:e,networkLink:t,opts:n(i)}))}return i.displayName="ShareButton-"+e,(0,r.forwardRef)(i)};var J=Q("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return B(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+M({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),X=function(){return(X=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function $(e){var t=function(t){var n=t.bgStyle,o=t.borderRadius,i=t.iconFillColor,a=t.round,l=t.size,s=Y(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return r.createElement("svg",X({viewBox:"0 0 64 64",width:l,height:l},s),a?r.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):r.createElement("rect",{width:"64",height:"64",rx:o,ry:o,fill:e.color,style:n}),r.createElement("path",{d:e.path,fill:i}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var ee=$({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var te=Q("linkedin",(function(e,t){var n=t.title,r=t.summary,o=t.source;return B(e,"linkedin.url"),"https://linkedin.com/shareArticle"+M({url:e,mini:"true",title:n,summary:r,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),ne=$({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var re=Q("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,i=void 0===o?[]:o,a=t.related,l=void 0===a?[]:a;return B(e,"twitter.url"),B(Array.isArray(i),"twitter.hashtags is not an array"),B(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+M({url:e,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),oe=$({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var ie=Q("hatena",(function(e,t){var n=t.title;return B(e,"hatena.url"),"http://b.hatena.ne.jp/add?mode=confirm&url="+e+"&title="+n}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),ae=$({color:"#009ad9",networkName:"hatena",path:"M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 "});var le=Q("line",(function(e,t){var n=t.title;return B(e,"line.url"),"https://social-plugins.line.me/lineit/share"+M({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:500,windowHeight:500}),se=$({color:"#00b800",networkName:"line",path:"M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"}),ce=function(e){var t,n,o,i,a=null===(t=e.data.mdx)||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.title,l="https://miki-yuasa.github.io/blog/articles/"+(null===(o=e.data.mdx)||void 0===o||null===(i=o.frontmatter)||void 0===i?void 0:i.slug);return r.createElement("div",{className:"articleMediaButtons"},r.createElement("div",{className:"articleMediaButton"},r.createElement(J,{url:l},r.createElement(ee,{size:32,round:!0}))),r.createElement("div",{className:"articleMediaButton"},r.createElement(te,{url:l,title:a},r.createElement(ne,{size:32,round:!0}))),r.createElement("div",{className:"articleMediaButton"},r.createElement(re,{title:a,url:l},r.createElement(oe,{size:32,round:!0}))),r.createElement("div",{className:"articleMediaButton"},r.createElement(ie,{url:l,title:a},r.createElement(ae,{size:32,round:!0}))),r.createElement("div",{className:"articleMediaButton"},r.createElement(le,{url:l,title:a},r.createElement(se,{size:32,round:!0}))))},ue=n(497441),de=n(449967),pe=n(86297),fe=function(e){return r.createElement(pe.p,{href:"/blog/articles/"+e.frontmatter.slug},"Next   ",r.createElement(de.XC,null))},he=function(e){return r.createElement(pe.p,{href:"/blog/articles/"+e.frontmatter.slug},r.createElement(de.wy,null)," Previous")},me=function(){return r.createElement(pe.p,{href:"/blog"},"Blog Top")};function ve(e){var t,n,o=null===(t=e.pageContext.next)||void 0===t?void 0:t.frontmatter,i=null===(n=e.pageContext.previous)||void 0===n?void 0:n.frontmatter,a=o?r.createElement(fe,{frontmatter:o}):r.createElement(r.Fragment,null," "),l=i?r.createElement(he,{frontmatter:i}):r.createElement(r.Fragment,null," "),s={root:{alignItems:"center",display:"flex",justifyContent:"center",overflow:"hidden"}},c={root:{alignItems:"center",display:"flex",justifyContent:"center",overflow:"hidden",width:80}};return r.createElement(ue.K,{horizontal:!0,styles:{root:{overflow:"hidden",width:"100%"}},tokens:{childrenGap:0,padding:0}},r.createElement(ue.K.Item,{disableShrink:!0,styles:c},l),r.createElement(ue.K.Item,{grow:!0,styles:s}," "),r.createElement(ue.K.Item,{disableShrink:!0,styles:c},r.createElement(me,null)),r.createElement(ue.K.Item,{grow:!0,styles:s}," "),r.createElement(ue.K.Item,{disableShrink:!0,styles:c},a))}var ge=n(914332);function ye(e){var t=e.data.mdx,n=null==t?void 0:t.frontmatter;return r.createElement(ge.h$,{config:{url:"https://miki-yuasa.github.io/blog/articles/"+(null==n?void 0:n.slug),identifier:null==n?void 0:n.slug,title:null==n?void 0:n.title}})}var we=function(e){var t,n,c,u,d,p=e.data,f=e.pageContext,h=p.mdx,m=null==h?void 0:h.frontmatter,v=null==h?void 0:h.body,g=[{text:"Home",href:"/"},{text:"Blog",href:"/blog"},{text:"Articles"},{text:null==m?void 0:m.title}],y=r.createElement(r.Fragment,null,r.createElement("p",null,r.createElement(s.J,{crumbItems:g})),r.createElement("div",{style:{maxWidth:"760px",maxHeight:"450px",paddingTop:"5%",paddingRight:"10%",paddingLeft:"10%"}},r.createElement(o.Z,{fluid:null==m||null===(t=m.image)||void 0===t||null===(n=t.childImageSharp)||void 0===n?void 0:n.fluid})),r.createElement("p",null," "),r.createElement("h1",{className:"h1BlogTitle"},null==m?void 0:m.title),r.createElement("h3",null,null==m?void 0:m.date),r.createElement("p",null,r.createElement(l.M,{tags:null==m?void 0:m.tags})),r.createElement(i.MDXRenderer,null,v),r.createElement(ce,{data:p}),r.createElement(ve,{pageContext:f}),r.createElement("br",null),r.createElement(ye,{data:p})),w=null==m?void 0:m.language;return r.createElement(a.W,{title:null==m?void 0:m.title,description:null==m?void 0:m.description,lang:w,body:y,side:r.createElement(r.Fragment,null," ",r.createElement(j,{data:p})),image:null==m||null===(c=m.image)||void 0===c||null===(u=c.childImageSharp)||void 0===u||null===(d=u.fluid)||void 0===d?void 0:d.src})}},179413:function(e,t,n){"use strict";var r=n(595318);t.__esModule=!0,t.default=void 0;var o=r(n(967154)),i=r(n(337316)),a=r(n(385354)),l=r(n(667294)),s=r(n(45697)),c=n(89462),u=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="miki-yuasa-github-io",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,i.default)(e,["config","placeholder"]);return l.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(l.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),placeholder:s.default.string}},406748:function(e,t,n){"use strict";var r=n(595318);t.__esModule=!0,t.default=void 0;var o=r(n(385354)),i=r(n(667294)),a=r(n(45697)),l=function(e){function t(){return e.apply(this,arguments)||this}(0,o.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=l,l.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},l.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}},594838:function(e,t,n){"use strict";var r=n(595318);t.__esModule=!0,t.default=void 0;var o=r(n(967154)),i=r(n(337316)),a=r(n(385354)),l=r(n(667294)),s=r(n(45697)),c=n(89462),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="miki-yuasa-github-io",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,c.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,c.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return l.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(l.default.Component);t.default=u,u.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string,language:s.default.string,remoteAuthS3:s.default.string,apiKey:s.default.string})}},914332:function(e,t,n){"use strict";var r=n(595318);var o=r(n(594838));t.h$=o.default,r(n(179413)).default,r(n(406748)).default,o.default},89462:function(e,t,n){"use strict";var r=n(595318);t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},l=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),l&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!a(t[r]))return!0})).length};var o=r(n(319)),i=r(n(667294));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},321274:function(e,t,n){var r=n(441048);e.exports={MDXRenderer:r}},441048:function(e,t,n){var r=n(69100),o=n(319),i=n(859713),a=n(337316);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n(667294),u=n(164983).mdx,d=n(293191).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=a(e,["scope","children"]),l=d(t),p=c.useMemo((function(){if(!n)return null;var e=s({React:c,mdx:u},l),t=Object.keys(e),i=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,t]);return c.createElement(p,s({},i))}}}]);
//# sourceMappingURL=component---src-templates-blog-article-page-template-tsx-f0c4590e227db757d8ce.js.map
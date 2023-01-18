"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9514,3531],{2013:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Te});var a=n(67294),l=n(86010),r=n(10833),o=n(35281),i=n(43320),c=n(78425),s=n(74477),d=n(1116),m=n(3382),u=n(95999),b=n(12466),p=n(85936);const v="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function f(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),l=n[0],r=n[1],o=(0,a.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,s=i.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,l=null==n?void 0:n.scrollY;l&&(o.current?o.current=!1:a>=l?(s(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,p.S)((function(e){e.location.hash&&(o.current=!0,r(!1))})),{shown:l,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,v,t&&E),type:"button",onClick:n})}var h=n(16550),_=n(87524),g=n(86668),k=n(87846),C=n(87462);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S="collapseSidebarButton_PEFL",Z="collapseSidebarButtonIcon_kv0_";function N(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",S),onClick:t},a.createElement(I,{className:Z}))}var x=n(59689),y=n(63366),T=n(69688),L=Symbol("EmptyContext"),M=a.createContext(L);function w(e){var t=e.children,n=(0,a.useState)(null),l=n[0],r=n[1],o=(0,a.useMemo)((function(){return{expandedItem:l,setExpandedItem:r}}),[l]);return a.createElement(M.Provider,{value:o},t)}var A=n(86043),B=n(48596),F=n(39960),P=n(72389),H=["item","onItemClick","activePath","level","index"];function W(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function D(e){var t=e.item,n=e.onItemClick,r=e.activePath,i=e.level,s=e.index,d=(0,y.Z)(e,H),m=t.items,u=t.label,b=t.collapsible,p=t.className,v=t.href,E=(0,g.L)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,P.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),h=(0,c._F)(t,r),_=(0,B.Mg)(v,r),k=(0,A.u)({initialState:function(){return!!b&&(!h&&t.collapsed)}}),I=k.collapsed,S=k.setCollapsed,Z=function(){var e=(0,a.useContext)(M);if(e===L)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=Z.expandedItem,x=Z.setExpandedItem,w=function(e){void 0===e&&(e=!I),x(e?null:s),S(e)};return function(e){var t=e.isActive,n=e.collapsed,l=e.updateCollapsed,r=(0,T.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:h,collapsed:I,updateCollapsed:w}),(0,a.useEffect)((function(){b&&null!=N&&N!==s&&E&&S(!0)}),[b,N,s,S,E]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":I},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(F.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":h}),onClick:b?function(e){null==n||n(t),v?w(!1):(e.preventDefault(),w())}:function(){null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=f?f:"#":f},d),u),v&&b&&a.createElement(W,{categoryLabel:u,onClick:function(e){e.preventDefault(),w()}})),a.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(Q,{items:m,tabIndex:I?-1:0,onItemClick:n,activePath:r,level:i+1})))}var R=n(52263),z=n(13919),U=n(39471);const V="menuExternalLink_OET1";var j=["item","onItemClick","activePath","level","index"];function G(e){var t=e.item,n=e.onItemClick,r=e.activePath,i=e.level,s=(e.index,(0,y.Z)(e,j)),d=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,r),v=(0,z.Z)(d),E=(0,R.Z)().siteConfig.url;return d.startsWith(E)&&(s.target="_self"),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},a.createElement(F.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!v&&V,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d},v&&{onClick:n?function(){return n(t)}:void 0},s),m,!v&&a.createElement(U.Z,null)))}const K="menuHtmlItem_M9Kj";function O(e){var t=e.item,n=e.level,r=e.index,i=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[K,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}var Y=["item"];function q(e){var t=e.item,n=(0,y.Z)(e,Y);switch(t.type){case"category":return a.createElement(D,(0,C.Z)({item:t},n));case"html":return a.createElement(O,(0,C.Z)({item:t},n));default:return a.createElement(G,(0,C.Z)({item:t},n))}}var X=["items"];function J(e){var t=e.items,n=(0,y.Z)(e,X);return a.createElement(w,null,t.map((function(e,t){return a.createElement(q,(0,C.Z)({key:t,item:e,index:t},n))})))}const Q=(0,a.memo)(J),$="menu_SIkG",ee="menuWithAnnouncementBar_GW3s";function te(e){var t=e.path,n=e.sidebar,r=e.className,i=function(){var e=(0,x.nT)().isActive,t=(0,a.useState)(e),n=t[0],l=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&l(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",$,i&&ee,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:n,activePath:t,level:1})))}const ne="sidebar_njMd",ae="sidebarWithHideableNavbar_wUlq",le="sidebarHidden_VK0M",re="sidebarLogo_isFc";function oe(e){var t=e.path,n=e.sidebar,r=e.onCollapse,o=e.isHidden,i=(0,g.L)(),c=i.navbar.hideOnScroll,s=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,l.Z)(ne,c&&ae,o&&le)},c&&a.createElement(k.Z,{tabIndex:-1,className:re}),a.createElement(te,{path:t,sidebar:n}),s&&a.createElement(N,{onClick:r}))}const ie=a.memo(oe);var ce=n(13102),se=n(72961),de=function(e){var t=e.sidebar,n=e.path,r=(0,se.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(Q,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function me(e){return a.createElement(ce.Zo,{component:de,props:e})}const ue=a.memo(me);function be(e){var t=(0,_.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ie,e),l&&a.createElement(ue,e))}const pe="expandButton_m80_",ve="expandButtonIcon_BlDH";function Ee(e){var t=e.toggleSidebar;return a.createElement("div",{className:pe,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:ve}))}const fe="docSidebarContainer_b6E3",he="docSidebarContainerHidden_b3ry";function _e(e){var t,n=e.children,l=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function ge(e){var t=e.sidebar,n=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,i=(0,h.TH)().pathname,c=(0,a.useState)(!1),s=c[0],d=c[1],m=(0,a.useCallback)((function(){s&&d(!1),r((function(e){return!e}))}),[r,s]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,fe,n&&he),onTransitionEnd:function(e){e.currentTarget.classList.contains(fe)&&n&&d(!0)}},a.createElement(_e,null,a.createElement(be,{sidebar:t,path:i,onCollapse:m,isHidden:s})),s&&a.createElement(Ee,{toggleSidebar:m}))}const ke={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ce(e){var t=e.hiddenSidebarContainer,n=e.children,r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(ke.docMainContainer,(t||!r)&&ke.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",ke.docItemWrapper,t&&ke.docItemWrapperEnhanced)},n))}const Ie="docPage__5DB",Se="docsWrapper_BCFX";function Ze(e){var t=e.children,n=(0,d.V)(),l=(0,a.useState)(!1),r=l[0],o=l[1];return a.createElement(m.Z,{wrapperClassName:Se},a.createElement(f,null),a.createElement("div",{className:Ie},n&&a.createElement(ge,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),a.createElement(Ce,{hiddenSidebarContainer:r},t)))}var Ne=n(83531),xe=n(90197);function ye(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(xe.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Te(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(Ne.default,null);var i=n.docElement,m=n.sidebarName,u=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(ye,e),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(Ze,null,i)))))}},83531:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(67294),l=n(10833),r=n(3382);function o(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:"Page Not Found"}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.createElement("p",null,"We could not find what you were looking for \ud83d\ude22"))))))}}}]);
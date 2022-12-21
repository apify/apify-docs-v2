"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9514,7981],{6755:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Me});var a=n(67294),r=n(86010),o=n(71667),l=n(35281),i=n(43320),c=n(78425),d=n(74477),s=n(1116),m=n(76245),u=n(95999),b=n(12466),p=n(85936);const v="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function f(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],o=n[1],l=(0,a.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,d=i.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(l.current?l.current=!1:a>=r?(d(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((function(e){e.location.hash&&(l.current=!0,o(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,v,t&&h),type:"button",onClick:n})}var E=n(16550),g=n(87524),k=n(86668),_=n(87846),C=n(87462);function y(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function Z(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",S),onClick:t},a.createElement(y,{className:I}))}var w=n(59689),N=n(63366),x=n(902),T=Symbol("EmptyContext"),L=a.createContext(T);function A(e){var t=e.children,n=(0,a.useState)(null),r=n[0],o=n[1],l=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:o}}),[r]);return a.createElement(L.Provider,{value:l},t)}var M=n(86043),B=n(48596),F=n(39960),P=n(72389),D=["item","onItemClick","activePath","level","index"];function H(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){var t=e.item,n=e.onItemClick,o=e.activePath,i=e.level,d=e.index,s=(0,N.Z)(e,D),m=t.items,u=t.label,b=t.collapsible,p=t.className,v=t.href,h=(0,k.L)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,P.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,o),g=(0,B.Mg)(v,o),_=(0,M.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),y=_.collapsed,S=_.setCollapsed,I=function(){var e=(0,a.useContext)(L);if(e===T)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=I.expandedItem,w=I.setExpandedItem,A=function(e){void 0===e&&(e=!y),w(e?null:d),S(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,o=(0,x.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:E,collapsed:y,updateCollapsed:A}),(0,a.useEffect)((function(){b&&null!=Z&&Z!==d&&h&&S(!0)}),[b,Z,d,S,h]),a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":y},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(F.Z,(0,C.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":E}),onClick:b?function(e){null==n||n(t),v?A(!1):(e.preventDefault(),A())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!y:void 0,href:b?null!=f?f:"#":f},s),u),v&&b&&a.createElement(H,{categoryLabel:u,onClick:function(e){e.preventDefault(),A()}})),a.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:y},a.createElement(ne,{items:m,tabIndex:y?-1:0,onItemClick:n,activePath:o,level:i+1})))}var R=n(66179),V=n(75847),z={docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docBreadcrumbs:"theme-doc-breadcrumbs",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarContainer:"theme-doc-sidebar-container",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},K=n(52263),U=n(37759),j=n(13919),q=n(39471);const G="menuExternalLink_p7qP";var Y=["item","onItemClick","activePath","level","index"];function O(e){var t=e.item,n=e.onItemClick,a=e.activePath,r=e.level,o=(e.index,(0,N.Z)(e,Y)),l=t.href,i=t.label,c=t.className,d=t.autoAddBaseUrl,s=(0,U._F)(t,a),m=(0,j.Z)(l),u=(0,K.Z)().siteConfig.url;return l.startsWith(u)&&(o.target="_self"),R.createElement("li",{className:(0,V.Z)(z.docSidebarItemLink,z.docSidebarItemLinkLevel(r),"menu__list-item",c),key:i},R.createElement(F.Z,(0,C.Z)({className:(0,V.Z)("menu__link",!m&&G,{"menu__link--active":s}),autoAddBaseUrl:d,"aria-current":s?"page":void 0,to:l},m&&{onClick:n?function(){return n(t)}:void 0},o),i,!m&&R.createElement(q.Z,null)))}const X="menuHtmlItem_M9Kj";function J(e){var t=e.item,n=e.level,o=e.index,i=t.value,c=t.defaultStyle,d=t.className;return a.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),c&&[X,"menu__list-item"],d),key:o,dangerouslySetInnerHTML:{__html:i}})}var Q=["item"];function $(e){var t=e.item,n=(0,N.Z)(e,Q);switch(t.type){case"category":return a.createElement(W,(0,C.Z)({item:t},n));case"html":return a.createElement(J,(0,C.Z)({item:t},n));default:return a.createElement(O,(0,C.Z)({item:t},n))}}var ee=["items"];function te(e){var t=e.items,n=(0,N.Z)(e,ee);return a.createElement(A,null,t.map((function(e,t){return a.createElement($,(0,C.Z)({key:t,item:e,index:t},n))})))}const ne=(0,a.memo)(te),ae="menu_SIkG",re="menuWithAnnouncementBar_GW3s";function oe(e){var t=e.path,n=e.sidebar,o=e.className,i=function(){var e=(0,w.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",ae,i&&re,o)},a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(ne,{items:n,activePath:t,level:1})))}const le="sidebar_njMd",ie="sidebarWithHideableNavbar_wUlq",ce="sidebarHidden_VK0M",de="sidebarLogo_isFc";function se(e){var t=e.path,n=e.sidebar,o=e.onCollapse,l=e.isHidden,i=(0,k.L)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)(le,c&&ie,l&&ce)},c&&a.createElement(_.Z,{tabIndex:-1,className:de}),a.createElement(oe,{path:t,sidebar:n}),d&&a.createElement(Z,{onClick:o}))}const me=a.memo(se);var ue=n(13102),be=n(72961),pe=function(e){var t=e.sidebar,n=e.path,o=(0,be.e)();return a.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},a.createElement(ne,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ve(e){return a.createElement(ue.Zo,{component:pe,props:e})}const he=a.memo(ve);function fe(e){var t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(me,e),r&&a.createElement(he,e))}const Ee="expandButton_m80_",ge="expandButtonIcon_BlDH";function ke(e){var t=e.toggleSidebar;return a.createElement("div",{className:Ee,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(y,{className:ge}))}const _e="docSidebarContainer_b6E3",Ce="docSidebarContainerHidden_b3ry";function ye(e){var t,n=e.children,r=(0,s.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function Se(e){var t=e.sidebar,n=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,i=(0,E.TH)().pathname,c=(0,a.useState)(!1),d=c[0],s=c[1],m=(0,a.useCallback)((function(){d&&s(!1),o((function(e){return!e}))}),[o,d]);return a.createElement("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,_e,n&&Ce),onTransitionEnd:function(e){e.currentTarget.classList.contains(_e)&&n&&s(!0)}},a.createElement(ye,null,a.createElement(fe,{sidebar:t,path:i,onCollapse:m,isHidden:d})),d&&a.createElement(ke,{toggleSidebar:m}))}const Ie={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ze(e){var t=e.hiddenSidebarContainer,n=e.children,o=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(Ie.docMainContainer,(t||!o)&&Ie.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ie.docItemWrapper,t&&Ie.docItemWrapperEnhanced)},n))}const we="docPage__5DB",Ne="docsWrapper_BCFX";function xe(e){var t=e.children,n=(0,s.V)(),r=(0,a.useState)(!1),o=r[0],l=r[1];return a.createElement(m.Z,{wrapperClassName:Ne},a.createElement(f,null),a.createElement("div",{className:we},n&&a.createElement(Se,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(Ze,{hiddenSidebarContainer:o},t)))}var Te=n(47981),Le=n(90197);function Ae(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Le.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Me(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(Te.default,null);var i=n.docElement,m=n.sidebarName,u=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Ae,e),a.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.q,{version:t},a.createElement(s.b,{name:m,items:u},a.createElement(xe,null,i)))))}},74477:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>l});var a=n(67294),r=n(902),o=a.createContext(null);function l(e){var t=e.children,n=e.version;return a.createElement(o.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocsVersionProvider");return e}},47981:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(66179),r=n(44996),o=n(72389),l=n(35742),i=(n(65102),n(52263));function c(e){var t=e.title,n=e.description,o=e.keywords,c=e.image,d=e.children,s=function(e){var t=(0,i.Z)().siteConfig,n=t.title,a=t.titleDelimiter;return null!=e&&e.trim().length?e.trim()+" "+a+" "+n:n}(t),m=(0,r.C)().withBaseUrl,u=c?m(c,{absolute:!0}):void 0;return a.createElement(l.Z,null,t&&a.createElement("title",null,s),t&&a.createElement("meta",{property:"og:title",content:s}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),o&&a.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),u&&a.createElement("meta",{property:"og:image",content:u}),u&&a.createElement("meta",{name:"twitter:image",content:u}),d)}var d=n(39960),s=n(76245);function m(){var e=(0,r.Z)("/docs/api"),t=(0,r.Z)("/docs/1.3.1/api"),n=(0,r.Z)("/docs/2.3/api/"),l=(0,r.Z)("/docs/1.3/api/");if((0,o.Z)()){var i=window.location.pathname,m="",u=!1;if(i.startsWith(e)&&(m=n+i.substring(e.length+1),u=!0),i.match(/\/docs\/2\.\d+\.\d+\/api/)&&(m=n+i.substring(t.length+1),u=!0),i.match(/\/api\/[12]\.\d+\/\w+/)){var b=i.match(/\/api\/([12])\.\d+\/(.*)/);m=("1"===b[1]?l:n)+b[2],u=!0}if(i.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/))m=l+i.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/)[1],u=!0;u&&window.location.href!==m&&(window.location.href=m)}return a.createElement(a.Fragment,null,a.createElement(c,{title:"Page Not Found"}),a.createElement(s.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.createElement("p",null,"We could not find what you were looking for \ud83d\ude22"),a.createElement("p",null,"Recently we ",a.createElement("b",null,"released Apify SDK v3 "),"and we significantly upgraded the documentation."),a.createElement("p",null,"If you're looking for documentation of ",a.createElement("b",null,"Apify SDK v2"),",",a.createElement(d.Z,{to:"/docs/2.3/guides/apify-platform"}," you can find it here"),"."),a.createElement("p",null,"For ",a.createElement("b",null,"Apify SDK v3 docs"),", go to the ",a.createElement(d.Z,{to:"/"},"homepage"),"."))))))}}}]);
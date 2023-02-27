"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||o;return r?a.createElement(m,l(l({ref:t},s),{},{components:r})):a.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},21830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>w,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=r(74866),i=r(85162),u=["components"],p={title:"I - Launching a browser",description:"Understand what the Browser object is in Puppeteer/Playwright, how to create one, and a bit about how to interact with one.",sidebar_position:2.1,slug:"/puppeteer-playwright/browser"},s="Browser",c={unversionedId:"webscraping/puppeteer_playwright/browser",id:"webscraping/puppeteer_playwright/browser",title:"I - Launching a browser",description:"Understand what the Browser object is in Puppeteer/Playwright, how to create one, and a bit about how to interact with one.",source:"@site/sources/academy/webscraping/puppeteer_playwright/browser.md",sourceDirName:"webscraping/puppeteer_playwright",slug:"/puppeteer-playwright/browser",permalink:"/academy/puppeteer-playwright/browser",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/browser.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677513083,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:2.1,frontMatter:{title:"I - Launching a browser",description:"Understand what the Browser object is in Puppeteer/Playwright, how to create one, and a bit about how to interact with one.",sidebar_position:2.1,slug:"/puppeteer-playwright/browser"},sidebar:"academy",previous:{title:"Puppeteer & Playwright",permalink:"/academy/puppeteer-playwright"},next:{title:"II - Opening & controlling a page",permalink:"/academy/puppeteer-playwright/page"}},h={},d=[{value:"Launch options",id:"launch-options",level:2},{value:"Browser methods",id:"browser-methods",level:2},{value:"Next up",id:"next",level:2}],m={toc:d};function w(e){var t=e.components,p=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browser"},"Browser"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand what the Browser object is in Puppeteer/Playwright, how to create one, and a bit about how to interact with one.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In order to automate a browser in Playwright or Puppeteer, we need to open one up programmatically. Playwright supports Chromium, Firefox, and Webkit (Safari), while Puppeteer only supports Chromium based browsers. For ease of understanding, we've chosen to use Chromium in the Playwright examples to keep things working on the same plane."),(0,o.kt)("p",null,"Let's start by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," function in the ",(0,o.kt)("strong",{parentName:"p"},"index.js")," file we created in the intro to this course:"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nawait chromium.launch();\n\nconsole.log('launched!');\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nawait puppeteer.launch();\n\nconsole.log('launched!');\n\n")))),(0,o.kt)("p",null,"When we run this code with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"node index.js"),", a browser will open up; however, we won't actually see anything. This is because the default mode of a browser after ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()"),"ing it is ",(0,o.kt)("strong",{parentName:"p"},"headless"),", meaning that it has no visible UI."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you run this code right now, it will hang. Use ",(0,o.kt)("strong",{parentName:"p"},"control^")," + ",(0,o.kt)("strong",{parentName:"p"},"C")," to force quit the program.")),(0,o.kt)("h2",{id:"launch-options"},"Launch options"),(0,o.kt)("p",null,"In order to see what's actually happening, we can pass an ",(0,o.kt)("strong",{parentName:"p"},"options")," object (",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v13.7.0&show=api-puppeteerlaunchoptions",target:"_blank",rel:"noopener"},"Puppeteer"),", ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browser-type-launch",target:"_blank",rel:"noopener"},"Playwright"),") with ",(0,o.kt)("strong",{parentName:"p"},"headless")," set to ",(0,o.kt)("strong",{parentName:"p"},"false"),"."),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nawait chromium.launch({ headless: false });\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nawait puppeteer.launch({ headless: false });\n\n")))),(0,o.kt)("p",null,"Now we'll actually see a browser open up."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chromium browser opened by Puppeteer/Playwright",src:r(74894).Z,width:"462",height:"210"})),(0,o.kt)("p",null,"There are a whole lot more options that we can pass into the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," function, which we'll be getting into a little bit later on."),(0,o.kt)("h2",{id:"browser-methods"},"Browser methods"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," function also returns an object representation of the browser that we can use to interact with the browser right from our code. This ",(0,o.kt)("strong",{parentName:"p"},"Browser")," object (",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v13.7.0&show=api-class-browser",target:"_blank",rel:"noopener"},"Puppeteer"),", ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browser",target:"_blank",rel:"noopener"},"Playwright"),") has many functions which make it easy to do this. One of these functions is ",(0,o.kt)("inlineCode",{parentName:"p"},"close()"),". Until now, we've been using ",(0,o.kt)("strong",{parentName:"p"},"control^")," + ",(0,o.kt)("strong",{parentName:"p"},"C")," to force quit the process, but with this function, we'll no longer have to do that."),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\n// code will be here in the future\n\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// code will be here in the future\n\nawait browser.close();\n\n")))),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"Now that we can open a browser, let's move onto the ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/page",target:null,rel:null},"next lesson")," where we will learn how to create pages and visit websites programmatically."))}w.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),u=r(91980),p=r(67392),s=r(50012);function c(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:c(r);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function w(e){var t,r,a,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,p=e.groupId,c=h(e),w=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:c})})),b=w[0],g=w[1],f=m({queryString:u,groupId:p}),y=f[0],v=f[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),r=(0,s.Nk)(t),a=r[0],o=r[1],[a,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=k[0],I=k[1],P=function(){var e=null!=y?y:N;return d({value:e,tabValues:c})?e:null}();return(0,n.useEffect)((function(){P&&g(P)}),[P]),{selectedValue:b,selectValue:(0,n.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),v(e),I(e)}),[v,I,c]),tabValues:c}}var b=r(72389);const g="tabList__CuJ",f="tabItem_LNqP";function y(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,p=e.tabValues,s=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,r=s.indexOf(t),a=p[r].value;a!==i&&(c(t),u(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var a,n=s.indexOf(e.currentTarget)+1;r=null!=(a=s[n])?a:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;r=null!=(o=s[l])?o:s[s.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},p.map((function(e){var t=e.value,r=e.label,l=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:h},l,{className:(0,o.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function v(e){var t=e.lazy,r=e.children,a=e.selectedValue;if(t){var o=r.find((function(e){return e.props.value===a}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=w(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},74894:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);
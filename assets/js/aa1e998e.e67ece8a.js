"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=u(n),d=r,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(74866),s=n(85162),l=["components"],u={title:"Injecting scripts",description:"Learn how to inject scripts prior to a page's load (pre-injecting), as well as how to expose functions to be run at a later time on the page.",sidebar_position:1,slug:"/puppeteer-playwright/executing-scripts/injecting-code"},p="Injecting code",c={unversionedId:"webscraping/puppeteer_playwright/executing_scripts/injecting_code",id:"webscraping/puppeteer_playwright/executing_scripts/injecting_code",title:"Injecting scripts",description:"Learn how to inject scripts prior to a page's load (pre-injecting), as well as how to expose functions to be run at a later time on the page.",source:"@site/sources/academy/webscraping/puppeteer_playwright/executing_scripts/injecting_code.md",sourceDirName:"webscraping/puppeteer_playwright/executing_scripts",slug:"/puppeteer-playwright/executing-scripts/injecting-code",permalink:"/academy/puppeteer-playwright/executing-scripts/injecting-code",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/executing_scripts/injecting_code.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675952046,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:1,frontMatter:{title:"Injecting scripts",description:"Learn how to inject scripts prior to a page's load (pre-injecting), as well as how to expose functions to be run at a later time on the page.",sidebar_position:1,slug:"/puppeteer-playwright/executing-scripts/injecting-code"},sidebar:"academy",previous:{title:"III - Executing scripts",permalink:"/academy/puppeteer-playwright/executing-scripts"},next:{title:"Extracting data",permalink:"/academy/puppeteer-playwright/executing-scripts/collecting-data"}},g={},d=[{value:"Pre-injecting scripts",id:"pre-injecting",level:2},{value:"Exposing functions",id:"exposing-functions",level:2},{value:"Next up",id:"next",level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"injecting-code"},"Injecting code"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to inject scripts prior to a page's load (pre-injecting), as well as how to expose functions to be run at a later time on the page.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the previous lesson, we learned how to execute code on the page using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()"),", and though this fits the majority of use cases, there are still some more unusual cases. For example, what if we want to execute our custom script prior to the page's load? Or, what if we want to define a function in the page's context to be run at a later time?"),(0,o.kt)("p",null,"We'll be covering both of these cases in this brief lesson."),(0,o.kt)("h2",{id:"pre-injecting"},"Pre-injecting scripts"),(0,o.kt)("p",null,"Sometimes, you need your custom code to run before any other code is run on the page. Perhaps you need to modify an object's prototype, or even re-define certain global variables before they are used by the page's native scripts."),(0,o.kt)("p",null,"Luckily, Puppeteer and Playwright both have functions for this. In Puppeteer, we use  the ",(0,o.kt)("a",{parentName:"p",href:"https://puppeteer.github.io/puppeteer/docs/puppeteer.page.evaluateonnewdocument/",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.evaluateOnNewDocument()"))," function, while in Playwright we use ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-add-init-script",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.addInitScript()")),". We'll use these functions to override the native ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener")," function, setting it to a function that does nothing. This will prevent event listeners from being added to elements."),(0,o.kt)(i.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.addInitScript(() => {\n    // Override the prototype\n    Node.prototype.addEventListener = () => { /* do nothing */ };\n});\n\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n"))),(0,o.kt)(s.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.evaluateOnNewDocument(() => {\n    // Override the prototype\n    Node.prototype.addEventListener = null;\n});\n\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Go ahead and run this code. Can you click the ",(0,o.kt)("strong",{parentName:"p"},"I accept")," button to accept Google's cookies policy?")),(0,o.kt)("h2",{id:"exposing-functions"},"Exposing functions"),(0,o.kt)("p",null,"Here's a super awesome function we've created called ",(0,o.kt)("inlineCode",{parentName:"p"},"returnMessage()"),", which simply returns the string ",(0,o.kt)("strong",{parentName:"p"},"Apify academy!"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const returnMessage = () => 'Apify academy!';\n")),(0,o.kt)("p",null,"We want to ",(0,o.kt)("strong",{parentName:"p"},"expose")," this function to our loaded page so that it can be later executed there, which can be done with ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-expose-function",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"page.exposeFunction()")),". This will make ",(0,o.kt)("inlineCode",{parentName:"p"},"returnMessage()")," available when running scripts not only inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()"),", but also directly from DevTools."),(0,o.kt)(i.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nconst returnMessage = () => 'Apify academy!';\n\nawait page.exposeFunction(returnMessage.name, returnMessage);\n\nconst msg = await page.evaluate(() => returnMessage());\n\nconsole.log(msg);\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n"))),(0,o.kt)(s.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nconst returnMessage = () => 'Apify academy!';\n\nawait page.exposeFunction(returnMessage.name, returnMessage);\n\nconst msg = await page.evaluate(() => returnMessage());\n\nconsole.log(msg);\n\nawait page.waitForTimeout(20000);\nawait browser.close();\n\n")))),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"Next, we'll be learning a bit about how to extract data using Playwright/Puppeteer. There are two main ways to do this, so ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/executing-scripts/collecting-data",target:null,rel:null},"next exciting lesson")," will be about both of them!"))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function g(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,a,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,c=g(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:c})})),f=h[0],w=h[1],b=m({queryString:l,groupId:u}),v=b[0],y=b[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=k[0],j=k[1],N=function(){var e=null!=v?v:x;return d({value:e,tabValues:c})?e:null}();return(0,r.useEffect)((function(){N&&w(N)}),[N]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);w(e),y(e),j(e)}),[y,j,c]),tabValues:c}}var f=n(72389);const w="tabList__CuJ",b="tabItem_LNqP";function v(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,p=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(c(t),l(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var o,i=p.indexOf(e.currentTarget)-1;n=null!=(o=p[i])?o:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:g},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",w)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function x(e){var t=(0,f.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}}}]);
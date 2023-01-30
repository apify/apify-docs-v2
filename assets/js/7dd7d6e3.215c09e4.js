"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(74866),u=n(85162),l=["components"],s={title:"III - Executing scripts",description:"Understand the two different contexts which your code can be run in, and how to run custom scripts in the context of the browser.",sidebar_position:2.3,slug:"/puppeteer-playwright/executing-scripts"},c="Executing scripts",p={unversionedId:"webscraping/puppeteer_playwright/executing_scripts/index",id:"webscraping/puppeteer_playwright/executing_scripts/index",title:"III - Executing scripts",description:"Understand the two different contexts which your code can be run in, and how to run custom scripts in the context of the browser.",source:"@site/sources/academy/webscraping/puppeteer_playwright/executing_scripts/index.md",sourceDirName:"webscraping/puppeteer_playwright/executing_scripts",slug:"/puppeteer-playwright/executing-scripts",permalink:"/academy/puppeteer-playwright/executing-scripts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675097992,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:2.3,frontMatter:{title:"III - Executing scripts",description:"Understand the two different contexts which your code can be run in, and how to run custom scripts in the context of the browser.",sidebar_position:2.3,slug:"/puppeteer-playwright/executing-scripts"},sidebar:"academy",previous:{title:"Page methods",permalink:"/academy/puppeteer-playwright/page/page-methods"},next:{title:"Injecting scripts",permalink:"/academy/puppeteer-playwright/executing-scripts/injecting-code"}},d={},h=[{value:"Running code in the context of the browser",id:"running-in-browser-context",level:2},{value:"Using variables in <code>page.evaluate()</code>",id:"using-variables-in-page-evaluate",level:2},{value:"Next up",id:"next",level:2}],g={toc:h};function m(e){var t=e.components,s=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"executing-scripts"},"Executing scripts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand the two different contexts which your code can be run in, and how to run custom scripts in the context of the browser.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"An important concept to understand when dealing with headless browsers is the ",(0,o.kt)("strong",{parentName:"p"},"context")," in which your code is being run. For example, if you try to use the native ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," Node.js module (used in the previous lesson) while running code in the context of the browser, errors will be thrown saying that it is undefined. Similarly, if you are trying to use ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," or other browser-specific functions in the server-side Node.js context, errors will also be thrown."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Diagram explaining the two different contexts your code can be run in",src:n(13856).Z,width:"3178",height:"1329"}),";"),(0,o.kt)("p",null,"Here is an example of a common mistake made by beginners to Puppeteer/Playwright:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// This code is incorrect!\nimport { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\n// visit google\nawait page.goto('https://google.com/');\n\n// change background to green\ndocument.body.style.background = 'green';\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n")),(0,o.kt)("p",null,"When we try and run this, we get this error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"ReferenceError: document is not defined\n")),(0,o.kt)("p",null,"The reason this is happening is because we're trying to run browser-side code on the server-side where it is not supported. ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"document"))," is a property of the browser ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Window"))," instance that holds the rendered website; therefore, this API is not available in Node.js. So how are we supposed to run code within the context of the browser?"),(0,o.kt)("h2",{id:"running-in-browser-context"},"Running code in the context of the browser"),(0,o.kt)("p",null,"We will use ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()")," to run our code in the browser. This method takes a callback as its first parameter, which will be executed within the browser."),(0,o.kt)(i.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nawait page.evaluate(() => {\n    document.body.style.background = 'green';\n});\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n\n"))),(0,o.kt)(u.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nawait page.evaluate(() => {\n    document.body.style.background = 'green';\n});\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"Here's what we see in the automated browser when we run this code:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google with the background color changed to green",src:n(28938).Z,width:"1636",height:"1198"})),(0,o.kt)("h2",{id:"using-variables-in-page-evaluate"},"Using variables in ",(0,o.kt)("inlineCode",{parentName:"h2"},"page.evaluate()")),(0,o.kt)("p",null,"Within our code, we generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"randomString")," in the Node.js context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const randomString = Math.random().toString(36).slice(2);\n")),(0,o.kt)("p",null,"Now, let's say we want to change the title of the document to be this random string. In order to use this ",(0,o.kt)("inlineCode",{parentName:"p"},"randomString")," variable in the callback of our ",(0,o.kt)("inlineCode",{parentName:"p"},"page.evaluate()"),", we'll have to pass in a second parameter containing the variable."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It's best practice to make this second parameter an object, as you are usually passing more than one value in.")),(0,o.kt)(i.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nconst randomString = Math.random().toString(36).slice(2);\n\nawait page.evaluate(({ randomString }) => {\n    document.querySelector('title').textContent = randomString;\n}, { randomString });\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n\n"))),(0,o.kt)(u.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\n\nawait page.goto('https://google.com/');\n\nconst randomString = Math.random().toString(36).slice(2);\n\nawait page.evaluate(({ randomString }) => {\n    document.querySelector('title').textContent = randomString;\n}, { randomString });\n\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"Now, when we run this code, we can see the title change on the page's tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google with the background color changed to green",src:n(90196).Z,width:"490",height:"148"})),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/executing-scripts/injecting-code",target:null,rel:null},"next lesson")," will be a short one discussing two different ways of executing scripts on a page."))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),u=n(16550),l=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,n,r,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,p=d(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),b=m[0],f=m[1],w=g({queryString:l,groupId:s}),v=w[0],y=w[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),A=k[0],x=k[1],N=function(){var e=null!=v?v:A;return h({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){N&&f(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),x(e)}),[y,x,p]),tabValues:p}}var b=n(72389);const f="tabList__CuJ",w="tabItem_LNqP";function v(e){var t=e.className,n=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(p(t),l(r))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",w,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function A(e){var t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},13856:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/context-diagram-f9dce330596f0089d8f1f7b3755b3b01.webp"},28938:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/green-google-c009bd62b8a1b2ec669f6e5ccef214fc.png"},90196:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);
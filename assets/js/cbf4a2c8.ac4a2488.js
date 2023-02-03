"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3202],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(a),g=r,d=h["".concat(s,".").concat(g)]||h[g]||c[g]||o;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},25708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>g});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(74866),i=a(85162),s=["components"],p={title:"Page methods",description:"Understand that the Page object has many different methods to offer, and learn how to use two of them to capture a page's title and take a screenshot.",sidebar_position:3,slug:"/puppeteer-playwright/page/page-methods"},u="Page methods",c={unversionedId:"webscraping/puppeteer_playwright/page/page_methods",id:"webscraping/puppeteer_playwright/page/page_methods",title:"Page methods",description:"Understand that the Page object has many different methods to offer, and learn how to use two of them to capture a page's title and take a screenshot.",source:"@site/sources/academy/webscraping/puppeteer_playwright/page/page_methods.md",sourceDirName:"webscraping/puppeteer_playwright/page",slug:"/puppeteer-playwright/page/page-methods",permalink:"/academy/puppeteer-playwright/page/page-methods",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/page/page_methods.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675438567,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:3,frontMatter:{title:"Page methods",description:"Understand that the Page object has many different methods to offer, and learn how to use two of them to capture a page's title and take a screenshot.",sidebar_position:3,slug:"/puppeteer-playwright/page/page-methods"},sidebar:"academy",previous:{title:"Waiting for content & events",permalink:"/academy/puppeteer-playwright/page/waiting"},next:{title:"III - Executing scripts",permalink:"/academy/puppeteer-playwright/executing-scripts"}},h={},g=[{value:"Grabbing the title",id:"grabbing-the-title",level:2},{value:"Screenshotting",id:"screenshotting",level:2},{value:"Final code",id:"final-code",level:2},{value:"Next up",id:"next",level:2}],d={toc:g};function m(e){var t=e.components,p=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"page-methods"},"Page methods"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand that the Page object has many different methods to offer, and learn how to use two of them to capture a page's title and take a screenshot.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Other than having methods for interacting with a page and waiting for events and elements, the ",(0,o.kt)("strong",{parentName:"p"},"Page")," object also supports various methods for doing other things, such as ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v13.7.0&show=api-pagereloadoptions",target:"_blank",rel:"noopener"},"reloading"),", ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-screenshot",target:"_blank",rel:"noopener"},"screenshotting"),", ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-set-extra-http-headers",target:"_blank",rel:"noopener"},"changing headers"),", and collecting the ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v13.7.0&show=api-pagecontent",target:"_blank",rel:"noopener"},"page's content"),"."),(0,o.kt)("p",null,"Last lesson, we left off at a point where we are waiting for the page to navigate so that we can collect the page's title and take a screenshot of it. In this lesson, we'll be learning about the two methods we can use to easily achieve both of those things."),(0,o.kt)("h2",{id:"grabbing-the-title"},"Grabbing the title"),(0,o.kt)("p",null,"There are two main page functions which will return general data:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"page.content()")," will return the entire HTML content of the page."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"page.title()")," will return the title of the current page found in the ",(0,o.kt)("inlineCode",{parentName:"li"},"<title>")," tag.")),(0,o.kt)("p",null,"For our case, we'll utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.title()")," function to grab the title and log it to the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Grab the title and set it to a variable\nconst title = await page.title();\n\n// Log the title to the console\nconsole.log(title);\n")),(0,o.kt)("h2",{id:"screenshotting"},"Screenshotting"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()")," function will return a buffer which can be written to the filesystem as an image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Take the screenshot and write it to the filesystem\nawait page.screenshot({ path: 'screenshot.png' });\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The image will by default be ",(0,o.kt)("strong",{parentName:"p"},".png"),". To change the image to ",(0,o.kt)("strong",{parentName:"p"},".jpeg")," type, set the (optional) ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," option to ",(0,o.kt)("strong",{parentName:"p"},"jpeg"),".")),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("p",null,"Here's our final code which extracts the page's title, takes a screenshot and saves it to our project's folder as ",(0,o.kt)("inlineCode",{parentName:"p"},"screenshot.png"),":"),(0,o.kt)(l.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\n// Create a page and visit Google\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\n// Agree to the cookies policy\nawait page.click('button:has-text(\"I agree\")');\n\n// Type the query and visit the results page\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Click on the first result\nawait page.click('.g a');\nawait page.waitForLoadState('load');\n\n// Grab the page's title and log it to the console\nconst title = await page.title();\nconsole.log(title);\n\n// Take a screenshot and write it to the filesystem\nawait page.screenshot({ path: 'screenshot.png' });\n\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// Create a page and visit Google\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\n// Agree to the cookies policy\nawait page.click('button + button');\n\n// Type the query and visit the results page\nawait page.type('input[title=\"Search\"]', 'hello world');\nawait page.keyboard.press('Enter');\n\n// Wait for the first result to appear on the page,\n// then click on it\nawait page.waitForSelector('.g a');\nawait Promise.all([page.waitForNavigation(), page.click('.g a')]);\n\n// Grab the page's title and log it to the console\nconst title = await page.title();\nconsole.log(title);\n\n// Take a screenshot and write it to the filesystem\nawait page.screenshot({ path: 'screenshot.png' });\n\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"When you run this code, you should see this logged to console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'"Hello, World!" program - Wikipedia\n')),(0,o.kt)("p",null,"Additionally, you should see a new image named ",(0,o.kt)("strong",{parentName:"p"},"screenshot.png")," in your project's folder that looks something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot from Playwright/Puppeteer",src:a(80490).Z,width:"800",height:"600"})),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/executing-scripts",target:null,rel:null},"next exciting lesson"),", we'll gain a solid understanding of the two different contexts we can run our code in when using Puppeteer and Playwright, as well as how to run code in the context of the browser."))}m.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function m(e){var t,a,n,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,p=e.groupId,c=h(e),m=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),f=m[0],w=m[1],b=d({queryString:s,groupId:p}),v=b[0],y=b[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,u.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=k[0],P=k[1],T=function(){var e=null!=v?v:N;return g({value:e,tabValues:c})?e:null}();return(0,r.useEffect)((function(){T&&w(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);w(e),y(e),P(e)}),[y,P,c]),tabValues:c}}var f=a(72389);const w="tabList__CuJ",b="tabItem_LNqP";function v(e){var t=e.className,a=e.block,i=e.selectedValue,s=e.selectValue,p=e.tabValues,u=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},g=function(e){var t,a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;a=null!=(o=u[l])?o:u[u.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:g,onClick:h},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(t){var o=a.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",w)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){var t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},80490:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wikipedia-screenshot-e418e43eabee246c354755dd29f091c5.png"}}]);
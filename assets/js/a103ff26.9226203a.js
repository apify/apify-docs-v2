"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=r(74866),i=r(85162),p=["components"],l={title:"V - Using proxies",description:"Understand how to use proxies in your Puppeteer and Playwright requests, as well as a couple of the most common use cases for proxies.",sidebar_position:2.5,slug:"/puppeteer-playwright/proxies"},u="Using proxies",c={unversionedId:"webscraping/puppeteer_playwright/proxies",id:"webscraping/puppeteer_playwright/proxies",title:"V - Using proxies",description:"Understand how to use proxies in your Puppeteer and Playwright requests, as well as a couple of the most common use cases for proxies.",source:"@site/sources/academy/webscraping/puppeteer_playwright/proxies.md",sourceDirName:"webscraping/puppeteer_playwright",slug:"/puppeteer-playwright/proxies",permalink:"/academy/puppeteer-playwright/proxies",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/proxies.md",tags:[],version:"current",lastUpdatedBy:"Marcus Papin",lastUpdatedAt:1677519978,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:2.5,frontMatter:{title:"V - Using proxies",description:"Understand how to use proxies in your Puppeteer and Playwright requests, as well as a couple of the most common use cases for proxies.",sidebar_position:2.5,slug:"/puppeteer-playwright/proxies"},sidebar:"academy",previous:{title:"IV - Reading & intercepting requests",permalink:"/academy/puppeteer-playwright/reading-intercepting-requests"},next:{title:"VI - Creating multiple browser contexts",permalink:"/academy/puppeteer-playwright/browser-contexts"}},m={},d=[{value:"Adding a proxy",id:"adding-a-proxy",level:2},{value:"Authenticating a proxy",id:"authenticating-a-proxy",level:2},{value:"Next up",id:"next",level:2}],h={toc:d};function g(e){var t=e.components,l=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-proxies"},"Using proxies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand how to use proxies in your Puppeteer and Playwright requests, as well as a couple of the most common use cases for proxies.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"Proxies")," are a great way of appearing as if you are making requests from a different location. A common use case for proxies is to avoid ",(0,o.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/geolocation",target:null,rel:null},"geolocation")," restrictions. For example your favorite TV show might not be available on Netflix in your country, but it might be available for Vietnamese Netflix watchers."),(0,o.kt)("p",null,"In this lesson, we'll be learning how to use proxies with Playwright and Puppeteer. This will be demonstrated with a Vietnamese proxy that we got by running ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/mstephen190/proxy-scraper",target:"_blank",rel:"noopener"},"this")," proxy-scraping actor on the Apify platform."),(0,o.kt)("h2",{id:"adding-a-proxy"},"Adding a proxy"),(0,o.kt)("p",null,"First, let's add our familiar boilerplate code for visiting Google and also create a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy")," which will point to our proxy server:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that this proxy may no longer be working at the time of reading. If you don't have a proxy to use during this lesson, we recommend using Proxy Scraper for a list of free ones, or checking out ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify proxy"))),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\n// our proxy server\nconst proxy = '103.214.9.13:3128';\n\nconst browser = await chromium.launch({ headless: false });\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\n// our proxy server\nconst proxy = '103.214.9.13:3128';\n\nconst browser = await puppeteer.launch({ headless: false });\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"For both Puppeteer and Playwright, the proxy server's URL should be passed into the options of the ",(0,o.kt)("inlineCode",{parentName:"p"},"launch()")," function; however, it's done a bit differently depending on which library you're using."),(0,o.kt)("p",null,"In Puppeteer, the server must be passed within the ",(0,o.kt)("strong",{parentName:"p"},"--proxy-server")," ",(0,o.kt)("a",{parentName:"p",href:"https://peter.sh/experiments/chromium-command-line-switches/",target:"_blank",rel:"noopener"},"Chromium command line argument"),", while in Playwright, it can be passed into the ",(0,o.kt)("strong",{parentName:"p"},"proxy")," option."),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst proxy = '103.214.9.13:3128';\n\nconst browser = await chromium.launch({\n    headless: false,\n    // Using the \"proxy\" option\n    proxy: {\n        // Pass in the server URL\n        server: proxy,\n        \n    },\n});\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst proxy = '103.214.9.13:3128';\n\n// Using the \"args\" option, which is an array of Chromium command\n// line switches, we pass the server URL in with \"--proxy-server\"\nconst browser = await puppeteer.launch({\n    headless: false,\n    args: [`--proxy-server=${proxy}`]\n});\nconst page = await browser.newPage();\nawait page.goto('https://google.com');\n\nawait page.waitForTimeout(10000);\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"And that's it! Now, when we visit Google, it's in Vietnamese. Depending on the country of your proxy, the language will vary."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Vietnamese Google",src:r(83375).Z,width:"1610",height:"1374"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that in order to rotate through multiple proxies, you must retire a browser instance then create a new one to continue automating with a new proxy.")),(0,o.kt)("h2",{id:"authenticating-a-proxy"},"Authenticating a proxy"),(0,o.kt)("p",null,"The proxy in the last activity didn't require a username and password, but let's say that this one does:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"my.proxy.com:3001\n")),(0,o.kt)("p",null,"One might automatically assume that this would be the solution:"),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// This code is wrong!\nimport { chromium } from 'playwright';\n\nconst proxy = 'my.proxy.com:3001';\nconst username = 'someUsername';\nconst password = 'password123';\n\nconst browser = await chromium.launch({\n    headless: false,\n    proxy: {\n        server: `http://${username}:${password}@${proxy}`,\n        \n    },\n});\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// This code is wrong!\nimport puppeteer from 'puppeteer';\n\nconst proxy = 'my.proxy.com:3001';\nconst username = 'someUsername';\nconst password = 'password123';\n\nconst browser = await puppeteer.launch({\n    headless: false,\n    args: [`--proxy-server=http://${username}:${password}@${proxy}`],\n});\n\n")))),(0,o.kt)("p",null,"However, authentication parameters need to be passed in separately in order to work. In Puppeteer, the username and password need to passed into thee ",(0,o.kt)("inlineCode",{parentName:"p"},"page.authenticate()")," prior to any navigations being made, while in Playwright they just need to be passed into the ",(0,o.kt)("strong",{parentName:"p"},"proxy")," option object."),(0,o.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst proxy = 'my.proxy.com:3001';\nconst username = 'someUsername';\nconst password = 'password123';\n\nconst browser = await chromium.launch({\n    headless: false,\n    proxy: {\n        server: proxy,\n        username,\n        password,\n    },\n});\n// Proxy will now be authenticated\n\n"))),(0,o.kt)(i.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst proxy = 'my.proxy.com:3001';\nconst username = 'someUsername';\nconst password = 'password123';\n\nconst browser = await puppeteer.launch({\n    headless: false,\n    args: [`--proxy-server=${proxy}`],\n});\n\nconst page = await browser.newPage();\n\nawait page.authenticate({ username, password });\n// Proxy will now be authenticated\n\n")))),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"You already know how to launch a browser with various configurations, which means you're ready to ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/browser-contexts",target:null,rel:null},"learn about browser contexts"),". Browser contexts can be used to automate multiple sessions at once with completely different configurations. You'll also learn how to emulate different devices, such as iPhones, iPads, and Androids."))}g.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function s(e){var t=e.children,r=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(87462),n=r(67294),o=r(86010),s=r(12466),i=r(16550),p=r(91980),l=r(67392),u=r(50012);function c(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:c(r);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),s=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,p._X)(s),(0,n.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function g(e){var t,r,a,o,s=e.defaultValue,i=e.queryString,p=void 0!==i&&i,l=e.groupId,c=m(e),g=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:c})})),y=g[0],w=g[1],f=h({queryString:p,groupId:l}),b=f[0],v=f[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),r=(0,u.Nk)(t),a=r[0],o=r[1],[a,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=x[0],P=x[1],N=function(){var e=null!=b?b:k;return d({value:e,tabValues:c})?e:null}();return(0,n.useEffect)((function(){N&&w(N)}),[N]),{selectedValue:y,selectValue:(0,n.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);w(e),v(e),P(e)}),[v,P,c]),tabValues:c}}var y=r(72389);const w="tabList__CuJ",f="tabItem_LNqP";function b(e){var t=e.className,r=e.block,i=e.selectedValue,p=e.selectValue,l=e.tabValues,u=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,r=u.indexOf(t),a=l[r].value;a!==i&&(c(t),p(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,n=u.indexOf(e.currentTarget)+1;r=null!=(a=u[n])?a:u[0];break;case"ArrowLeft":var o,s=u.indexOf(e.currentTarget)-1;r=null!=(o=u[s])?o:u[u.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},l.map((function(e){var t=e.value,r=e.label,s=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:m},s,{className:(0,o.Z)("tabs__item",f,null==s?void 0:s.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function v(e){var t=e.lazy,r=e.children,a=e.selectedValue;if(t){var o=r.find((function(e){return e.props.value===a}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function x(e){var t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",w)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function k(e){var t=(0,y.Z)();return n.createElement(x,(0,a.Z)({key:String(t)},e))}},83375:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vietnamese-google-a742c6f89651d9c47a6d3701140a11cd.png"}}]);
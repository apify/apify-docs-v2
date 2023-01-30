"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(a),d=n,m=g["".concat(u,".").concat(d)]||g[d]||c[d]||o;return a?r.createElement(m,i(i({ref:t},s),{},{components:a})):r.createElement(m,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},44159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>w,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=a(74866),l=a(85162),u=["components"],p={title:"II - Opening & controlling a page",description:"Learn how to create and open a Page with a Browser, and how to use it to visit and programmatically interact with a website.",sidebar_position:2.2,slug:"/puppeteer-playwright/page"},s="Opening a page",c={unversionedId:"webscraping/puppeteer_playwright/page/index",id:"webscraping/puppeteer_playwright/page/index",title:"II - Opening & controlling a page",description:"Learn how to create and open a Page with a Browser, and how to use it to visit and programmatically interact with a website.",source:"@site/sources/academy/webscraping/puppeteer_playwright/page/index.md",sourceDirName:"webscraping/puppeteer_playwright/page",slug:"/puppeteer-playwright/page",permalink:"/academy/puppeteer-playwright/page",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675097992,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:2.2,frontMatter:{title:"II - Opening & controlling a page",description:"Learn how to create and open a Page with a Browser, and how to use it to visit and programmatically interact with a website.",sidebar_position:2.2,slug:"/puppeteer-playwright/page"},sidebar:"academy",previous:{title:"I - Launching a browser",permalink:"/academy/puppeteer-playwright/browser"},next:{title:"Interacting with a page",permalink:"/academy/puppeteer-playwright/page/interacting-with-a-page"}},g={},d=[{value:"Next up",id:"next",level:2}],m={toc:d};function w(e){var t=e.components,a=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opening-a-page"},"Opening a page"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to create and open a Page with a Browser, and how to use it to visit and programmatically interact with a website.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When you open up your regular browser and visit a website, you open up a new page (or tab) before entering the URL in the search bar and hitting the ",(0,o.kt)("strong",{parentName:"p"},"Enter")," key. In Playwright and Puppeteer, you also have to open up a new page before visiting a URL. This can be done with the ",(0,o.kt)("inlineCode",{parentName:"p"},"browser.newPage()")," function, which will return a ",(0,o.kt)("strong",{parentName:"p"},"Page")," object (",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v13.7.0&show=api-class-page",target:"_blank",rel:"noopener"},"Puppeteer"),", ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page",target:"_blank",rel:"noopener"},"Playwright"),")."),(0,o.kt)(i.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\n// Open a new page\nconst page = await browser.newPage();\n\nawait browser.close();\n\n"))),(0,o.kt)(l.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// Open a new page\nconst page = await browser.newPage();\n\nawait browser.close();\n\n")))),(0,o.kt)("p",null,"Then, we can visit a website with the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto()")," method. Let's go to ",(0,o.kt)("a",{parentName:"p",href:"https://google.com",target:"_blank",rel:"noopener"},"Google")," for now. We'll also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.waitForTimeout()")," function, which will force the program to wait for a number of seconds before quitting (otherwise, everything will just flash before our eyes and we won't really be able to tell what's going on):"),(0,o.kt)(i.Z,{groupId:"main",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Playwright",label:"Playwright",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { chromium } from 'playwright';\n\nconst browser = await chromium.launch({ headless: false });\n\n// Open a new page\nconst page = await browser.newPage();\n\n// Visit Google\nawait page.goto('https://google.com')\n\n// wait for 10 seconds before shutting down\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n\n"))),(0,o.kt)(l.Z,{value:"Puppeteer",label:"Puppeteer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch({ headless: false });\n\n// Open a new page\nconst page = await browser.newPage();\n\n// Visit Google\nawait page.goto('https://google.com');\n\n// wait for 10 seconds before shutting down\nawait page.waitForTimeout(10000)\n\nawait browser.close();\n\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you haven't already, go ahead and run this code to see what happens.")),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"Now that we know how to open up a page, ",(0,o.kt)("a",{parentName:"p",href:"/academy/puppeteer-playwright/page/interacting-with-a-page",target:null,rel:null},"let's learn")," how to automate page interaction, such as clicking, typing, and pressing keys."))}w.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>O});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),u=a(91980),p=a(67392),s=a(50012);function c(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function g(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,u._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function w(e){var t,a,r,o,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,p=e.groupId,c=g(e),w=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:c})})),h=w[0],f=w[1],b=m({queryString:u,groupId:p}),v=b[0],y=b[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,s.Nk)(t),r=a[0],o=a[1],[r,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),O=k[0],P=k[1],T=function(){var e=null!=v?v:O;return d({value:e,tabValues:c})?e:null}();return(0,n.useEffect)((function(){T&&f(T)}),[T]),{selectedValue:h,selectValue:(0,n.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),P(e)}),[y,P,c]),tabValues:c}}var h=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){var t=e.className,a=e.block,l=e.selectedValue,u=e.selectValue,p=e.tabValues,s=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var t=e.currentTarget,a=s.indexOf(t),r=p[a].value;r!==l&&(c(t),u(r))},d=function(e){var t,a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var r,n=s.indexOf(e.currentTarget)+1;a=null!=(r=s[n])?r:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;a=null!=(o=s[i])?o:s[s.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:g},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,r=e.selectedValue;if(t){var o=a.find((function(e){return e.props.value===r}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=w(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function O(e){var t=(0,h.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}}}]);
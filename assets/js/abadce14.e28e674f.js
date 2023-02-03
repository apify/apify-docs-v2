"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6956],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>h});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),u=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},c=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,w=d["".concat(i,".").concat(h)]||d[h]||p[h]||l;return a?t.createElement(w,s(s({ref:r},c),{},{components:a})):t.createElement(w,s({ref:r},c))}));function h(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<l;u++)s[u]=a[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15164:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>h});var t=a(87462),n=a(63366),l=(a(67294),a(3905)),s=a(74866),o=a(85162),i=["components"],u={title:"Headless browsers",description:"Learn how to scrape the web with a headless browser using only a few lines of code. Chrome, Firefox, Safari, Edge - all are supported.",sidebar_position:8,slug:"/web-scraping-for-beginners/crawling/headless-browser"},c="Headless browsers",p={unversionedId:"webscraping/web_scraping_for_beginners/crawling/headless_browser",id:"webscraping/web_scraping_for_beginners/crawling/headless_browser",title:"Headless browsers",description:"Learn how to scrape the web with a headless browser using only a few lines of code. Chrome, Firefox, Safari, Edge - all are supported.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/headless_browser.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/headless-browser",permalink:"/academy/web-scraping-for-beginners/crawling/headless-browser",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675423550,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:8,frontMatter:{title:"Headless browsers",description:"Learn how to scrape the web with a headless browser using only a few lines of code. Chrome, Firefox, Safari, Edge - all are supported.",sidebar_position:8,slug:"/web-scraping-for-beginners/crawling/headless-browser"},sidebar:"academy",previous:{title:"Professional scraping",permalink:"/academy/web-scraping-for-beginners/crawling/pro-scraping"},next:{title:"Processing data",permalink:"/academy/web-scraping-for-beginners/crawling/processing-data"}},d={},h=[{value:"Building a Playwright scraper",id:"playwright-scraper",level:2},{value:"Running in headless mode",id:"running-headless",level:2},{value:"Environment variable",id:"headless-env-var",level:3},{value:"Scraper code",id:"headless-code",level:3},{value:"Next up",id:"next",level:2}],w={toc:h};function g(e){var r=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},w,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"headless-browser"},"Headless browsers"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn how to scrape the web with a headless browser using only a few lines of code. Chrome, Firefox, Safari, Edge - all are supported.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"A headless browser is simply a browser that runs without a user interface (UI). This means that it's normally controlled by automated scripts. Headless browsers are very popular in scraping because they can help you render JavaScript or programmatically behave like a human user to prevent blocking. The two most popular libraries for controlling headless browsers are ",(0,l.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer")," and ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright"),". ",(0,l.kt)("strong",{parentName:"p"},"Crawlee")," supports both."),(0,l.kt)("h2",{id:"playwright-scraper"},"Building a Playwright scraper"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"We'll be focusing on Playwright today, as it was developed by the same team that created Puppeteer, and it is newer with more features and better documentation.")),(0,l.kt)("p",null,"Building a Playwright scraper with Crawlee is extremely easy. To show you how easy it really is, we'll reuse the Cheerio scraper code from the previous lesson. By changing only a few lines of code, we'll turn it into a full headless scraper."),(0,l.kt)("p",null,"First, we must not forget to install Playwright into our project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install playwright\n")),(0,l.kt)("p",null,"After Playwright installs, we can proceed with updating the scraper code. As always, the comments describe changes in the code. Everything else is the same as before."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// crawlee.js\nimport { PlaywrightCrawler, Dataset } from 'crawlee';\n// Don't forget to import cheerio, we will need it later.\nimport cheerio from 'cheerio';\n\n// Replace CheerioCrawler with PlaywrightCrawler\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        // Here, we extract the HTML from the browser and parse\n        // it with Cheerio. Thanks to that we can use exactly\n        // the same code as before, when using CheerioCrawler.\n        const $ = cheerio.load(await page.content());\n\n        if (request.userData.label === 'START') {\n            await enqueueLinks({\n                selector: 'a[href*=\"/product/\"]',\n                baseUrl: new URL(request.url).origin,\n            });\n\n            // When on the START page, we don't want to\n            // extract any data after we extract the links.\n            return;\n        }\n\n        // We copied and pasted the extraction code\n        // from the previous lesson\n        const title = $('h3').text().trim();\n        const price = $('h3 + div').text().trim();\n        const description = $('div[class*=\"Text_body\"]').text().trim();\n\n        // Because we're using a browser, we can now access\n        // dynamically loaded data. Our target site has\n        // dynamically loaded images.\n        const imageRelative = $('img[alt=\"Product Image\"]').attr('src');\n        const base = new URL(request.url).origin;\n        const image = new URL(imageRelative, base).href;\n\n        // Instead of saving the data to a variable,\n        // we immediately save everything to a file.\n        await Dataset.pushData({\n            title,\n            description,\n            price,\n            image,\n        });\n    },\n});\n\nawait crawler.addRequests([{\n    url: 'https://demo-webstore.apify.org/search/on-sale',\n    // By labeling the Request, we can very easily\n    // identify it later in the requestHandler.\n    userData: {\n        label: 'START',\n    },\n}]);\n\nawait crawler.run();\n")),(0,l.kt)("p",null,"Yup, that's it. To quickly recap, we added 2 lines and changed 1 line of code to transform our crawler from a static HTTP request crawler to a headless-browser crawler. The scraper now runs exactly the same as before, but using a full Chromium browser instead of plain HTTP requests and Cheerio. This is a taste of the true power of Crawlee."),(0,l.kt)("p",null,"Notice that we are also scraping a new piece of data - ",(0,l.kt)("inlineCode",{parentName:"p"},"image"),". We were unable to access this content before with Cheerio, as it is dynamically loaded in. If you're confused about the differences between PlaywrightCrawler/PuppeteerCrawler and CheerioCrawler, and why one might choose one over the other, give ",(0,l.kt)("a",{parentName:"p",href:"https://blog.apify.com/what-is-a-dynamic-page/",target:"_blank",rel:"noopener"},"this short article")," about dynamic pages a quick read-over."),(0,l.kt)("p",null,"Using Playwright in combination with Cheerio like this is only one of many ways how you can utilize Playwright (and Puppeteer) with Crawlee. In the advanced courses of the Academy, we will go deeper into using headless browsers for scraping and web automation (RPA) use-cases."),(0,l.kt)("h2",{id:"running-headless"},"Running in headless mode"),(0,l.kt)("p",null,"We said that headless browsers didn't have a UI, but while scraping with the above scraper code, we're sure your screen was full of browser tabs. That's because in Crawlee, browsers run ",(0,l.kt)("strong",{parentName:"p"},"headful")," (with a UI) by default. This is useful for debugging and seeing what's going on in the browser. Once the scraper is complete, we switch it to ",(0,l.kt)("strong",{parentName:"p"},"headless")," mode using one of two methods:"),(0,l.kt)("h3",{id:"headless-env-var"},"Environment variable"),(0,l.kt)("p",null,"This is the programmer's preferred solution, because you don't have to change the source code to change the behavior. All you need to do is set the ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/docs/guides/configuration#crawlee_headless",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"CRAWLEE_HEADLESS=1"))," environment variable when running your scraper, and it will automatically run headless. For example like this:"),(0,l.kt)(s.Z,{groupId:"main",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"MacOS/Linux",label:"MacOS/Linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"CRAWLEE_HEADLESS=1 node crawlee.js\n\n"))),(0,l.kt)(o.Z,{value:"Windows CMD",label:"Windows CMD",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"set CRAWLEE_HEADLESS=1 && node crawlee.js\n\n"))),(0,l.kt)(o.Z,{value:"Windows Powershell",label:"Windows Powershell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$env:CRAWLEE_HEADLESS=1; & node crawlee.js\n\n")))),(0,l.kt)("h3",{id:"headless-code"},"Scraper code"),(0,l.kt)("p",null,"If you always want the scraper to run headless, it might be better to hardcode it in the source. To do that, we need to access ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browser-type-launch-option-headless",target:"_blank",rel:"noopener"},"Playwright's launch options"),". In Crawlee we can do that ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/interface/PlaywrightLaunchContext",target:"_blank",rel:"noopener"},"in the ",(0,l.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler")," constructor"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const crawler = new PlaywrightCrawler({\n    launchContext: {\n        launchOptions: {\n            headless: true, // setting headless in code\n        },\n    },\n    requestHandler: async ({ page, request }) => {\n        // ...\n    },\n    // ...\n});\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler#launchContext",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"launchContext"))," and ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browser-type-launch",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"launchOptions"))," give you control over launching browsers with Crawlee."),(0,l.kt)("h2",{id:"next"},"Next up"),(0,l.kt)("p",null,"We learned how to scrape with Cheerio and Playwright, but how do we process the scraped data? Let's learn that in the ",(0,l.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/processing-data",target:null,rel:null},"next lesson"),"."))}g.isMDXComponent=!0},85162:(e,r,a)=>{a.d(r,{Z:()=>s});var t=a(67294),n=a(86010);const l="tabItem_Ymn6";function s(e){var r=e.children,a=e.hidden,s=e.className;return t.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},r)}},74866:(e,r,a)=>{a.d(r,{Z:()=>C});var t=a(87462),n=a(67294),l=a(86010),s=a(12466),o=a(16550),i=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function d(e){var r=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=r?r:p(a);return function(e){var r=(0,u.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,a])}function h(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function w(e){var r=e.queryString,a=void 0!==r&&r,t=e.groupId,l=(0,o.k6)(),s=function(e){var r=e.queryString,a=void 0!==r&&r,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:t});return[(0,i._X)(s),(0,n.useCallback)((function(e){if(s){var r=new URLSearchParams(l.location.search);r.set(s,e),l.replace(Object.assign({},l.location,{search:r.toString()}))}}),[s,l])]}function g(e){var r,a,t,l,s=e.defaultValue,o=e.queryString,i=void 0!==o&&o,u=e.groupId,p=d(e),g=(0,n.useState)((function(){return function(e){var r,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:p})})),f=g[0],b=g[1],m=w({queryString:i,groupId:u}),y=m[0],v=m[1],k=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(r),t=a[0],l=a[1],[t,(0,n.useCallback)((function(e){r&&l.set(e)}),[r,l])]),C=k[0],E=k[1],T=function(){var e=null!=y?y:C;return h({value:e,tabValues:p})?e:null}();return(0,n.useEffect)((function(){T&&b(T)}),[T]),{selectedValue:f,selectValue:(0,n.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),E(e)}),[v,E,p]),tabValues:p}}var f=a(72389);const b="tabList__CuJ",m="tabItem_LNqP";function y(e){var r=e.className,a=e.block,o=e.selectedValue,i=e.selectValue,u=e.tabValues,c=[],p=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,a=c.indexOf(r),t=u[a].value;t!==o&&(p(r),i(t))},h=function(e){var r,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,n=c.indexOf(e.currentTarget)+1;a=null!=(t=c[n])?t:c[0];break;case"ArrowLeft":var l,s=c.indexOf(e.currentTarget)-1;a=null!=(l=c[s])?l:c[c.length-1]}null==(r=a)||r.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},r)},u.map((function(e){var r=e.value,a=e.label,s=e.attributes;return n.createElement("li",(0,t.Z)({role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,key:r,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},s,{className:(0,l.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":o===r})}),null!=a?a:r)})))}function v(e){var r=e.lazy,a=e.children,t=e.selectedValue;if(r){var l=a.find((function(e){return e.props.value===t}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t})})))}function k(e){var r=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b)},n.createElement(y,(0,t.Z)({},e,r)),n.createElement(v,(0,t.Z)({},e,r)))}function C(e){var r=(0,f.Z)();return n.createElement(k,(0,t.Z)({key:String(r)},e))}}}]);
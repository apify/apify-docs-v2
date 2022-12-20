"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>w});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,w=u["".concat(i,".").concat(h)]||u[h]||d[h]||l;return a?r.createElement(w,o(o({ref:t},p),{},{components:a})):r.createElement(w,o({ref:t},p))}));function w(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],s={title:"Professional scraping",description:"Learn how to build scrapers quicker and get better and more robust results by using Crawlee, an open-source library for scraping in Node.js.",sidebar_position:7,slug:"/web-scraping-for-beginners/crawling/pro-scraping"},i="[](#pro-scraping) Professional scraping \ud83d\udcaa",c={unversionedId:"web_scraping_for_beginners/crawling/pro_scraping",id:"web_scraping_for_beginners/crawling/pro_scraping",title:"Professional scraping",description:"Learn how to build scrapers quicker and get better and more robust results by using Crawlee, an open-source library for scraping in Node.js.",source:"@site/sources/academy/web_scraping_for_beginners/crawling/pro_scraping.md",sourceDirName:"web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/pro-scraping",permalink:"/academy/web-scraping-for-beginners/crawling/pro-scraping",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671536597,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:7,frontMatter:{title:"Professional scraping",description:"Learn how to build scrapers quicker and get better and more robust results by using Crawlee, an open-source library for scraping in Node.js.",sidebar_position:7,slug:"/web-scraping-for-beginners/crawling/pro-scraping"},sidebar:"defaultSidebar",previous:{title:"Scraping data",permalink:"/academy/web-scraping-for-beginners/crawling/scraping-the-data"},next:{title:"Headless browsers",permalink:"/academy/web-scraping-for-beginners/crawling/headless-browser"}},p={},u=[{value:" Install Crawlee",id:"-install-crawlee",level:2},{value:" Coding the scraper",id:"-coding-the-scraper",level:2},{value:" Crawling links",id:"-crawling-links",level:2},{value:" Collecting data",id:"-collecting-data",level:2},{value:" Next up",id:"-next-up",level:2}],d={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-professional-scraping-"},(0,l.kt)("a",{parentName:"h1",href:"#pro-scraping",target:null,rel:null})," Professional scraping \ud83d\udcaa"),(0,l.kt)("p",null,"While it's definitely an interesting exercise to do all the programming manually, and we hope you enjoyed it, it's neither the most effective, nor the most efficient way of scraping websites. Because we scrape for a living at Apify, we've built a library that we use to scrape tens of millions of pages every day."),(0,l.kt)("p",null,"It's called ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee")," and it is, ",(0,l.kt)("strong",{parentName:"p"},"and always will be"),", completely open-source and ",(0,l.kt)("strong",{parentName:"p"},"free")," to use. You don't need to sign up for an Apify account or use the Apify platform. You can use it on your personal computer, on any server, or in any cloud environment you want."),(0,l.kt)("p",null,"We mentioned the benefits of developing with a dedicated scraping library in the previous lessons, but to recap:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Faster development time")," because you don't have to write boilerplate code."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Fewer bugs"),". Crawlee is fully unit-tested and battle-tested on millions of scraper runs."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Faster and cheaper scrapers")," because Crawlee automatically scales based on system resources and is optimized for enterprise-grade performance."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"More robust scrapers"),". Annoying details like retries, proxy management, error handling, and result storage are all handled automatically by Crawlee."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Helpful community"),". You can ",(0,l.kt)("a",{parentName:"li",href:"https://discord.gg/qkMS6pU4cF",target:"_blank",rel:"noopener"},"join our Discord")," or talk to us ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee",target:"_blank",rel:"noopener"},"on GitHub"),". We're almost always there to talk about scraping and programming in general!")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you're still not convinced, ",(0,l.kt)("a",{parentName:"p",href:"https://apify.com/success-stories/daltix-analytics-scrapy-python-to-apify",target:"_blank",rel:"noopener"},"read this story")," how a data analytics company saved 90% of scraping costs by switching from Scrapy (a scraping library for Python) to Crawlee. To be honest, it shocked even us! \ud83d\udcaa")),(0,l.kt)("p",null,"The Crawlee library factors away and manages the hard parts of the scraping/automation development under the hood, such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Autoscaling"),(0,l.kt)("li",{parentName:"ul"},"Request concurrency"),(0,l.kt)("li",{parentName:"ul"},"Queueing requests"),(0,l.kt)("li",{parentName:"ul"},"Data storage"),(0,l.kt)("li",{parentName:"ul"},"Using and rotating ",(0,l.kt)("a",{parentName:"li",href:"/academy/anti-scraping/mitigation/proxies",target:null,rel:null},"proxies")),(0,l.kt)("li",{parentName:"ul"},"Puppeteer/Playwright setup overhead"),(0,l.kt)("li",{parentName:"ul"},"Plus much more!")),(0,l.kt)("p",null,"As a developer, your goal is to take Crawlee, which is quite generic on its own, and write website-specific or use-case-specific ",(0,l.kt)("a",{parentName:"p",href:"/academy/getting-started/actors",target:null,rel:null},"actors"),"."),(0,l.kt)("p",null,"Crawlee and its resources can be found in various different places:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Official Crawlee documentation")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apify/crawlee",target:"_blank",rel:"noopener"},"Crawlee Github repository (source code, issues)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/crawlee",target:"_blank",rel:"noopener"},"Crawlee on NPM"))),(0,l.kt)("h2",{id:"-install-crawlee"},(0,l.kt)("a",{parentName:"h2",href:"#crawlee-installation",target:null,rel:null})," Install Crawlee"),(0,l.kt)("p",null,"To use Crawlee, we have to install it from NPM. Let's add it to our project from the previous lessons."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install crawlee@latest\n")),(0,l.kt)("p",null,"In a new file we'll call ",(0,l.kt)("strong",{parentName:"p"},"crawlee.js"),", add the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// crawlee.js\nimport { CheerioCrawler } from 'crawlee';\n\nconsole.log('Crawlee works!');\n")),(0,l.kt)("p",null,"Then, run the code using this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"node crawlee.js\n")),(0,l.kt)("p",null,"If you see ",(0,l.kt)("strong",{parentName:"p"},"Crawlee works!")," printed to the console, it means you successfully installed the Crawlee library."),(0,l.kt)("h2",{id:"-coding-the-scraper"},(0,l.kt)("a",{parentName:"h2",href:"#coding-the-scraper",target:null,rel:null})," Coding the scraper"),(0,l.kt)("p",null,"You probably noticed that we did not ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," Cheerio or got-scraping. That's because they're both already included in a component of Crawlee called ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/docs/guides/cheerio-crawler-guide",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawler")),". It automatically visits URLs that you feed to it, downloads the HTML, and parses it with Cheerio. The benefit of this over writing the code yourself is that it automatically handles errors and retries the request when one occurs. It also parallelizes the downloads, making them faster, and removes a lot of boilerplate code that you would have to write yourself."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    requestHandler: async ({ $, request }) => {\n        console.log('URL: ', request.url);\n        console.log('Title: ', $('title').text());\n    },\n});\n")),(0,l.kt)("p",null,"To feed it with URLs, we need to store them somewhere. This is where the ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/core/class/RequestQueue",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," comes in. It's a persistent storage, which means that if your crawler crashes, it doesn't have to start over, but it can continue from where it left off (which is also something that you would normally have to implement yourself). ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," automatically opens a request queue for you and assigns it to itself, so all you have to do is use the ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/docs/upgrading/upgrading-to-v3#crawleraddrequests",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"addRequests"))," function to add new requests to the queue."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    requestHandler: async ({ $, request }) => {\n        console.log('URL: ', request.url);\n        console.log('Title: ', $('title').text());\n    },\n});\n\nawait crawler.addRequests([{ url: 'https://demo-webstore.apify.org/search/on-sale' }]);\n")),(0,l.kt)("p",null,"Here, we added the first request to the crawler - the first page we want to visit. Behind the scenes, ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," will automatically create a ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestQueue"),", take the first (and currently only) URL from it, download its HTML, and parse it using Cheerio. The ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestHandler",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"requestHandler"))," is the place where we can interact with the downloaded page and collect its data. It gives you access to the parsed HTML in the ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlingContext",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"$"))," variable. You can also access various data about the request from the queue using the ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlingContext#request",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"request"))," variable."),(0,l.kt)("p",null,"When you run the code above you'll see that it prints various log messages. Among the many you'll find the URL and ",(0,l.kt)("inlineCode",{parentName:"p"},"<title>")," of the web page, which we printed out ourselves in the ",(0,l.kt)("inlineCode",{parentName:"p"},"requestHandler"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"URL: https://demo-webstore.apify.org/search/on-sale\nTitle: Fakestore\n")),(0,l.kt)("h2",{id:"-crawling-links"},(0,l.kt)("a",{parentName:"h2",href:"#crawling-links",target:null,rel:null})," Crawling links"),(0,l.kt)("p",null,"The current scraper only visits the on-sale products URL, but we want data for all the countries. We can use the ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlingContext#enqueueLinks",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"enqueueLinks()"))," function to help us with that. The function automatically extracts URLs from the current page based on a provided CSS selector and adds them to the request queue. Once added, the crawler will automatically crawl them."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// crawlee.js\nimport { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    requestHandler: async ({ $, request, enqueueLinks }) => {\n        console.log('URL: ', request.url);\n        console.log('Title: ', $('title').text());\n\n        // We only want to enqueue the URLs from the first page.\n        if (request.label === 'START') {\n            await enqueueLinks({\n                // The selector is from our earlier code.\n                selector: 'a[href*=\"/product/\"]',\n                // The baseUrl option automatically resolves relative URLs.\n                baseUrl: new URL(request.url).origin,\n            });\n        }\n    },\n});\n\nawait crawler.addRequests([{\n    url: 'https://demo-webstore.apify.org/search/on-sale',\n    // By labeling the Request, we can very easily\n    // identify it later in the requestHandler.\n    userData: {\n        label: 'START',\n    },\n}]);\n\nawait crawler.run();\n")),(0,l.kt)("p",null,"When you run the code, you'll immediately see that it crawls faster than the manually written code. This is thanks to parallelization, which allows it to run much faster. We're just keeping the default concurrency values low to be nice to the websites."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the crawler gets stuck for you at the end, it's ok. It's not actually stuck, but waiting to retry any pages that potentially failed.")),(0,l.kt)("h2",{id:"-collecting-data"},(0,l.kt)("a",{parentName:"h2",href:"#collecting-data",target:null,rel:null})," Collecting data"),(0,l.kt)("p",null,"We have the crawler in place, and it's time to collect data. We already have the extraction code from the previous lesson, so we can just copy and paste it into the ",(0,l.kt)("inlineCode",{parentName:"p"},"requestHandler")," with tiny changes."),(0,l.kt)("p",null,"The one small, but important, change we did was to use the ",(0,l.kt)("a",{parentName:"p",href:"https://crawlee.dev/docs/introduction/saving-data#whats-datasetpushdata",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"Dataset.pushData()"))," function to save the results to the run's default dataset. You will find the results in the ",(0,l.kt)("strong",{parentName:"p"},"storage")," folder, under ",(0,l.kt)("strong",{parentName:"p"},"datasets/default"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// crawlee.js\nimport { CheerioCrawler, Dataset } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    requestHandler: async ({ $, request, enqueueLinks }) => {\n        if (request.label === 'START') {\n            await enqueueLinks({\n                selector: 'a[href*=\"/product/\"]',\n                baseUrl: new URL(request.url).origin,\n            });\n\n            // When on the START page, we don't want to\n            // extract any data after we extract the links.\n            return;\n        }\n\n        // We copied and pasted the extraction code\n        // from the previous lesson\n        const title = $('h3').text().trim();\n        const price = $('h3 + div').text().trim();\n        const description = $('div[class*=\"Text_body\"]').text().trim();\n\n        // Instead of saving the data to a variable,\n        // we immediately save everything to a file.\n        await Dataset.pushData({\n            title,\n            description,\n            price,\n        });\n    },\n});\n\nawait crawler.addRequests([{\n    url: 'https://demo-webstore.apify.org/search/on-sale',\n    // By labeling the Request, we can very easily\n    // identify it later in the requestHandler.\n    userData: {\n        label: 'START',\n    },\n}]);\n\nawait crawler.run();\n")),(0,l.kt)("p",null,"By using the ",(0,l.kt)("inlineCode",{parentName:"p"},"crawlee")," library, we were able to create a faster and more robust scraper, but with less code than what was needed for the simple scraper in the earlier lessons. What we've learned so far only scratches the surface of Crawlee's full capabilities."),(0,l.kt)("h2",{id:"-next-up"},(0,l.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,l.kt)("p",null,"Crawlee is a full-featured scraping library. That's why we can use it to scrape any website at any scale. In the ",(0,l.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/headless-browser",target:null,rel:null},"next lesson")," we will change only a few lines of code and turn our scraper into a full ",(0,l.kt)("strong",{parentName:"p"},"headless browser"),"."))}h.isMDXComponent=!0}}]);
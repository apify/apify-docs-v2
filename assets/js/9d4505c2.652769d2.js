"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Challenge",description:"Test your knowledge acquired in the previous sections of this course by building an Amazon scraper using Crawlee's CheerioCrawler!",sidebar_position:1.4,slug:"/web-scraping-for-beginners/challenge"},s="Challenge",p={unversionedId:"web_scraping_for_beginners/challenge/index",id:"web_scraping_for_beginners/challenge/index",title:"Challenge",description:"Test your knowledge acquired in the previous sections of this course by building an Amazon scraper using Crawlee's CheerioCrawler!",source:"@site/sources/academy/web_scraping_for_beginners/challenge/index.md",sourceDirName:"web_scraping_for_beginners/challenge",slug:"/web-scraping-for-beginners/challenge",permalink:"/academy/web-scraping-for-beginners/challenge",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673462481,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:1.4,frontMatter:{title:"Challenge",description:"Test your knowledge acquired in the previous sections of this course by building an Amazon scraper using Crawlee's CheerioCrawler!",sidebar_position:1.4,slug:"/web-scraping-for-beginners/challenge"},sidebar:"defaultSidebar",previous:{title:"Processing data",permalink:"/academy/web-scraping-for-beginners/crawling/processing-data"},next:{title:"Initializing & setting up",permalink:"/academy/web-scraping-for-beginners/challenge/initializing-and-setting-up"}},c={},u=[{value:" Learning \ud83e\udde0",id:"-learning-",level:2},{value:" Our task",id:"-our-task",level:2},{value:" First up",id:"-first-up",level:2}],d={toc:u};function h(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"challenge"},"Challenge"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test your knowledge acquired in the previous sections of this course by building an Amazon scraper using Crawlee's CheerioCrawler!")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before moving onto the other courses in the academy, we recommend following along with this section, as it combines everything you've learned in the previous lessons into one cohesive project that helps you prove to yourself that you've thoroughly understood the material."),(0,i.kt)("p",null,"We recommend that you make sure you've gone through both the ",(0,i.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"data collection")," sections of this course to ensure the smoothest development process."),(0,i.kt)("h2",{id:"-learning-"},(0,i.kt)("a",{parentName:"h2",href:"#learning",target:null,rel:null})," Learning \ud83e\udde0"),(0,i.kt)("p",null,"Before continuing, it is highly recommended to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Look over ",(0,i.kt)("a",{parentName:"li",href:"https://crawlee.dev/docs/introduction/first-crawler",target:"_blank",rel:"noopener"},"how to build a crawler in Crawlee")," and ideally ",(0,i.kt)("strong",{parentName:"li"},"code along"),"."),(0,i.kt)("li",{parentName:"ul"},"Read ",(0,i.kt)("a",{parentName:"li",href:"https://help.apify.com/en/articles/1829103-request-labels-and-how-to-pass-data-to-other-requests",target:"_blank",rel:"noopener"},"this short article")," about ",(0,i.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/core/class/Request#label",target:"_blank",rel:"noopener"},(0,i.kt)("strong",{parentName:"a"},"request labels"))," (this will be extremely useful later on)."),(0,i.kt)("li",{parentName:"ul"},"Check out ",(0,i.kt)("a",{parentName:"li",href:"/academy/node-js/dealing-with-dynamic-pages",target:null,rel:null},"this tutorial")," about dynamic pages."),(0,i.kt)("li",{parentName:"ul"},"Read about the ",(0,i.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/core/class/RequestQueue",target:"_blank",rel:"noopener"},"RequestQueue"),".")),(0,i.kt)("h2",{id:"-our-task"},(0,i.kt)("a",{parentName:"h2",href:"#our-task",target:null,rel:null})," Our task"),(0,i.kt)("p",null,"On Amazon, we can use this link to get to the results page of any product we want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=KEYWORD\n")),(0,i.kt)("p",null,"Our crawler's input will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "keyword": "iphone"\n}\n')),(0,i.kt)("p",null,"The goal at hand is to scrape all of the products from the first page of results for whatever keyword was provided (for our test case, it will be ",(0,i.kt)("strong",{parentName:"p"},"iphone"),"), then to scrape each offer of each product, and push the results to the dataset. For context, the offers for a product look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Amazon product offers",src:n(48523).Z,width:"1464",height:"1333"})),(0,i.kt)("p",null,"In the end, we'd like our final output to look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "title": "Apple iPhone 6 a1549 16GB Space Gray Unlocked (Certified Refurbished)",\n        "asin": "B07P6Y7954",\n        "itemUrl": "https://www.amazon.com/Apple-iPhone-Unlocked-Certified-Refurbished/dp/B00YD547Q6/ref=sr_1_2?s=wireless&ie=UTF8&qid=1539772626&sr=1-2&keywords=iphone",\n        "description": "What\'s in the box: Certified Refurbished iPhone 6 Space Gray 16GB Unlocked , USB Cable/Adapter. Comes in a Generic Box with a 1 Year Limited Warranty.",\n        "keyword": "iphone",\n        "seller name": "Blutek Intl",\n        "offer": "$162.97"\n    },\n    {\n        "title": "Apple iPhone 6 a1549 16GB Space Gray Unlocked (Certified Refurbished)",\n        "asin": "B07P6Y7954",\n        "itemUrl": "https://www.amazon.com/Apple-iPhone-Unlocked-Certified-Refurbished/dp/B00YD547Q6/ref=sr_1_2?s=wireless&ie=UTF8&qid=1539772626&sr=1-2&keywords=iphone",\n        "description": "What\'s in the box: Certified Refurbished iPhone 6 Space Gray 16GB Unlocked , USB Cable/Adapter. Comes in a Generic Box with a 1 Year Limited Warranty.",\n        "keyword": "iphone",\n        "sellerName": "PLATINUM DEALS",\n        "offer": "$169.98"\n    },\n    {\n        "...": "..."\n    }\n]\n\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"asin")," is the ID of the product, which is data present on the Amazon website.")),(0,i.kt)("p",null,"Each of the items in the dataset will represent a scraped offer, and will have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"asin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"itemUrl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),". The offer-specific fields will be ",(0,i.kt)("inlineCode",{parentName:"p"},"sellerName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"offer"),"."),(0,i.kt)("h2",{id:"-first-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," First up"),(0,i.kt)("p",null,"From this course, you should have all the knowledge to build this scraper by yourself. Give it a try, then come back to compare your scraper with our solution."),(0,i.kt)("p",null,"Let's start off this section easy by ",(0,i.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/challenge/initializing-and-setting-up",target:null,rel:null},"initializing and setting up")," our project with the Crawlee CLI (don't worry, no additional install is required)."))}h.isMDXComponent=!0},48523:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/product-offers-8907344fe1a24763ebb78950723471f7.webp"}}]);
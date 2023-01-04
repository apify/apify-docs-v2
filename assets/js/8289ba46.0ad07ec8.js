"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5692],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={title:"API scraping",description:"Learn all about how the professionals scrape various types of APIs with various configurations, parameters, and requirements.",sidebar_position:3,category:"web scraping & automation",slug:"/api-scraping"},l="API scraping",p={unversionedId:"api_scraping/index",id:"api_scraping/index",title:"API scraping",description:"Learn all about how the professionals scrape various types of APIs with various configurations, parameters, and requirements.",source:"@site/sources/academy/api_scraping/index.md",sourceDirName:"api_scraping",slug:"/api-scraping",permalink:"/academy/api-scraping",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672838848,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:3,frontMatter:{title:"API scraping",description:"Learn all about how the professionals scrape various types of APIs with various configurations, parameters, and requirements.",sidebar_position:3,category:"web scraping & automation",slug:"/api-scraping"},sidebar:"defaultSidebar",previous:{title:"Scraping iFrames",permalink:"/academy/puppeteer-playwright/common-use-cases/scraping-iframes"},next:{title:"General API scraping",permalink:"/academy/api-scraping/general-api-scraping"}},c={},d=[{value:" What&#39;s an API?",id:"-whats-an-api",level:2},{value:"Different types of APIs",id:"different-types-of-apis",level:2},{value:" Advantages of API scraping",id:"-advantages-of-api-scraping",level:2},{value:"1. More reliable",id:"1-more-reliable",level:3},{value:"2. Configurable",id:"2-configurable",level:3},{value:"3. Fast and efficient",id:"3-fast-and-efficient",level:3},{value:"4. Easy on the target website",id:"4-easy-on-the-target-website",level:3},{value:" Disdvantages of API Scraping",id:"-disdvantages-of-api-scraping",level:2},{value:"1. Sometimes requires special tokens",id:"1-sometimes-requires-special-tokens",level:3},{value:"2. Potential overhead",id:"2-potential-overhead",level:3},{value:" Extra challenges",id:"-extra-challenges",level:2},{value:"1. Different data formats",id:"1-different-data-formats",level:3},{value:"2. Encoded data",id:"2-encoded-data",level:3},{value:" First up",id:"-first-up",level:2}],u={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-scraping"},"API scraping"),(0,i.kt)("p",null,"API scraping is locating a website's API endpoints, and collecting the desired data directly from their API, as opposed to parsing the data from their rendered HTML pages."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," In the next few lessons, we'll be using ",(0,i.kt)("a",{parentName:"p",href:"https://soundcloud.com",target:"_blank",rel:"noopener"},"SoundCloud's website")," as an example target, but the techniques described here can be applied to any site.")),(0,i.kt)("p",null,"In this module, we will discuss the benefits and drawbacks of API scraping, how to locate an API, how to utilize its potential features, and how to work around some common roadblocks."),(0,i.kt)("h2",{id:"-whats-an-api"},(0,i.kt)("a",{parentName:"h2",href:"#what-is-api",target:null,rel:null})," What's an API?"),(0,i.kt)("p",null,"An API is a custom service that lives on the server of any given website. They provide an intuitive way for the website's client-side pages to send and receive data to and from the server, where it can be stored in a database, manipulated, or used to perform an operation. Though not ",(0,i.kt)("strong",{parentName:"p"},"all")," sites have APIs, the majority do - especially modern web-applications. Learn more about APIs ",(0,i.kt)("a",{parentName:"p",href:"https://blog.apify.com/what-is-an-api/",target:"_blank",rel:"noopener"},"in this article"),"."),(0,i.kt)("h2",{id:"different-types-of-apis"},"Different types of APIs"),(0,i.kt)("p",null,"The vast majority of APIs our there are standard REST APIs that have different endpoints. Even though this is the case, it is important to be aware that newer API technologies such as ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/",target:"_blank",rel:"noopener"},"GraphQL")," are becoming more popular, and therefore more utilized in modern web applications."),(0,i.kt)("p",null,"A GraphQL API works differently from a standard API. All requests are ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests to a single endpoint - typically ",(0,i.kt)("inlineCode",{parentName:"p"},"https://targetdomain.com/graphql"),". Queries are passed as a payload, and are very specific (which can be difficult to deal with). Additionally, GraphQL is a language in of itself; therefore, one must at least skim their documentation for a light understanding of the technology in order to be able to effectively scrape an API that uses it."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," these concepts will be covered more in-depth later on, but it is good to be aware of them now.")),(0,i.kt)("h2",{id:"-advantages-of-api-scraping"},(0,i.kt)("a",{parentName:"h2",href:"#advantages",target:null,rel:null})," Advantages of API scraping"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"1-more-reliable"},"1. More reliable"),(0,i.kt)("p",null,"Since the data is coming directly from the site's API, as opposed from the parsing of HTML content based on CSS selectors, it can be relied on more, as it is less likely to change. Typically, websites change their APIs much less frequently than they change the structure/selectors of their pages."),(0,i.kt)("h3",{id:"2-configurable"},"2. Configurable"),(0,i.kt)("p",null,"Most APIs accept query parameters such as ",(0,i.kt)("inlineCode",{parentName:"p"},"maxPosts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"fromCountry"),". These parameters can be mapped to the configuration options of the scraper, which makes creating a scraper that supports various requirements and use-cases much easier. They can also be utilized to easily filter and/or limit data results."),(0,i.kt)("h3",{id:"3-fast-and-efficient"},"3. Fast and efficient"),(0,i.kt)("p",null,"Especially for ",(0,i.kt)("a",{parentName:"p",href:"https://blog.apify.com/what-is-a-dynamic-page/",target:"_blank",rel:"noopener"},"dynamic sites"),", in which a headless browser would otherwise be required (it can sometimes be slow and cumbersome), scraping their API can prove to be much quicker and more efficient."),(0,i.kt)("h3",{id:"4-easy-on-the-target-website"},"4. Easy on the target website"),(0,i.kt)("p",null,"Depending on the website, sending large amounts of requests to their pages could result in a slight performance decrease on their end. By using their API instead, not only does your scraper run better, but it is less demanding of the target website."),(0,i.kt)("h2",{id:"-disdvantages-of-api-scraping"},(0,i.kt)("a",{parentName:"h2",href:"#disadvantages",target:null,rel:null})," Disdvantages of API Scraping"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"1-sometimes-requires-special-tokens"},"1. Sometimes requires special tokens"),(0,i.kt)("p",null,"Many APIs will require the session cookie, an API key, or some other special value to be included within the header of the request in order to receive any data back. For certain projects, this can be a challenge."),(0,i.kt)("h3",{id:"2-potential-overhead"},"2. Potential overhead"),(0,i.kt)("p",null,"For complex APIs that require certain headers and/or payloads in order to make a successful request, return encoded data, have rate limits, or that use modern technologies such as GraphQL, there can be a slight overhead in figuring out how to utilize them in a scraper."),(0,i.kt)("h2",{id:"-extra-challenges"},(0,i.kt)("a",{parentName:"h2",href:"#extra-challenges",target:null,rel:null})," Extra challenges"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"1-different-data-formats"},"1. Different data formats"),(0,i.kt)("p",null,"APIs come in all different shapes and sizes. That means every API will vary in not only the quality of the data that it returns, but also that format that it is in. The two most common formats are JSON and HTML."),(0,i.kt)("p",null,"JSON responses are the most ideal, as they are easily manipulatable in JavaScript code. In general, no serious parsing is necessary, and the data can be easily filtered and formatted to fit a scraper's output schema."),(0,i.kt)("p",null,"APIs which output HTML are generally returning the raw HTML of a small component of the page which is already hydrated with data. In these cases, it is still worth using the API, as it is still more efficient than making a request to the entire page; even though the data does still need to be parsed from the HTML response."),(0,i.kt)("h3",{id:"2-encoded-data"},"2. Encoded data"),(0,i.kt)("p",null,"Sometimes, a response will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Scraping Academy Message",\n    "message": "SGVsbG8hIFlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBkZWNvZGVkIHRoaXMgYmFzZTY0IGVuY29kZWQgbWVzc2FnZSEgV2UgaG9wZSB5b3UncmUgbGVhcm5pbmcgYSBsb3QgZnJvbSB0aGUgQXBpZnkgU2NyYXBpbmcgQWNhZGVteSE="\n}\n')),(0,i.kt)("p",null,"Or some other encoding format. This example's ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," has some data encoded in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Base64",target:"_blank",rel:"noopener"},"Base64"),", which is one of the most common encoding types. For testing out Base64 encoding and decoding, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.base64encode.org/",target:"_blank",rel:"noopener"},"base64encode.org")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.base64decode.org/",target:"_blank",rel:"noopener"},"base64decode.org"),". Within a project where base64 decoding/encoding is necessary, the ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html",target:"_blank",rel:"noopener"},"Node.js Buffer Class")," can be used like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const value = 'SGVsbG8hIFlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBkZWNvZGVkIHRoaXMgYmFzZTY0IGVuY29kZWQgbWVzc2FnZSEgV2UgaG9wZSB5b3UncmUgbGVhcm5pbmcgYSBsb3QgZnJvbSB0aGUgQXBpZnkgU2NyYXBpbmcgQWNhZGVteSE='\n\nconst decoded = Buffer.from(value, 'base64').toString('utf-8')\n\nconsole.log(decoded)\n")),(0,i.kt)("h2",{id:"-first-up"},(0,i.kt)("a",{parentName:"h2",href:"#first",target:null,rel:null})," First up"),(0,i.kt)("p",null,"Get started with this course by learning some general knowledge about API scraping in the ",(0,i.kt)("a",{parentName:"p",href:"/academy/api-scraping/general-api-scraping",target:null,rel:null},"General API Scraping")," section! This section will teach you everything you need to know about scraping APIs before moving into more complex sections."))}h.isMDXComponent=!0}}]);
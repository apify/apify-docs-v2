"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7369],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"Web scraping techniques",description:"An introduction to the methods you can use to extract data from websites. Analyze web pages for hidden elements to find the most effective approach.",sidebar_position:4.1,slug:"/web-scraping-101/web-scraping-techniques"},l="Web scraping techniques",p={unversionedId:"web_scraping_101/web_scraping_techniques",id:"web_scraping_101/web_scraping_techniques",title:"Web scraping techniques",description:"An introduction to the methods you can use to extract data from websites. Analyze web pages for hidden elements to find the most effective approach.",source:"@site/sources/platform/web_scraping_101/web_scraping_techniques.md",sourceDirName:"web_scraping_101",slug:"/web-scraping-101/web-scraping-techniques",permalink:"/platform/web-scraping-101/web-scraping-techniques",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1672838848,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:4.1,frontMatter:{title:"Web scraping techniques",description:"An introduction to the methods you can use to extract data from websites. Analyze web pages for hidden elements to find the most effective approach.",sidebar_position:4.1,slug:"/web-scraping-101/web-scraping-techniques"},sidebar:"docs",previous:{title:"Web scraping 101",permalink:"/platform/web-scraping-101"},next:{title:"Anti-scraping techniques and how to bypass them",permalink:"/platform/web-scraping-101/anti-scraping-techniques"}},c={},h=[{value:" CSS selectors",id:"-css-selectors",level:2},{value:" Schema.org microdata",id:"-schemaorg-microdata",level:2},{value:" JSON-LD",id:"-json-ld",level:2},{value:" Internal JavaScript variables",id:"-internal-javascript-variables",level:2},{value:" XHRs",id:"-xhrs",level:2}],u={toc:h};function d(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-scraping-techniques"},"Web scraping techniques"),(0,o.kt)("p",null,"This article provides a quick summary of ways websites structure and send their information. Knowing these techniques will help you extract data quicker and more efficiently."),(0,o.kt)("p",null,"You can find more in-depth discussion and code examples for all the techniques in ",(0,o.kt)("a",{parentName:"p",href:"https://blog.apify.com/web-scraping-in-2018-forget-html-use-xhrs-metadata-or-javascript-variables-8167f252439c",target:"_blank",rel:"noopener"},"this")," article."),(0,o.kt)("h2",{id:"-css-selectors"},(0,o.kt)("a",{parentName:"h2",href:"#css-selectors",target:null,rel:null})," CSS selectors"),(0,o.kt)("p",null,"The first method you will use when trying web scraping is most likely\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors",target:"_blank",rel:"noopener"},"CSS selectors"),". They allow you to select your desired elements by type, class, ID or attributes."),(0,o.kt)("p",null,"To see which element contains the information you need (and its details), open your browser's Developer Tools. Right-click the content, then select ",(0,o.kt)("strong",{parentName:"p"},"Inspect")," on ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools",target:"_blank",rel:"noopener"},"Chrome")," and ",(0,o.kt)("strong",{parentName:"p"},"Inspect element")," on ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Tools",target:"_blank",rel:"noopener"},"Mozilla"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CSS selectors",src:a(11287).Z,width:"2982",height:"1346"})),(0,o.kt)("p",null,"If you are only looking to scrape a couple of elements from a page, this method is sufficient. For more elaborate extraction use cases, however, there are other, more effective, methods."),(0,o.kt)("h2",{id:"-schemaorg-microdata"},(0,o.kt)("a",{parentName:"h2",href:"#schema-org-microdata",target:null,rel:null})," Schema.org microdata"),(0,o.kt)("p",null,"Schemas provide a way to mark up web pages so major search engines like Google, Bing and Yahoo can understand them."),(0,o.kt)("p",null,"Pages with ",(0,o.kt)("a",{parentName:"p",href:"https://schema.org",target:"_blank",rel:"noopener"},"schema.org")," markup still use HTML. The only difference is that they add machine-readable code markers into the HTML documents. This helps cut down on ",(0,o.kt)("a",{parentName:"p",href:"https://schema.org/docs/gs.html",target:"_blank",rel:"noopener"},"ambiguity")," and allows search engines to ",(0,o.kt)("a",{parentName:"p",href:"https://moz.com/learn/seo/what-is-seo",target:"_blank",rel:"noopener"},"return more accurate results"),"."),(0,o.kt)("p",null,"If a site uses microdata, you will find it in its ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element using your browser's developer tools. It will be in a hidden element similar to the one below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div itemscope itemtype="http://schema.org/Movie">\n  <h1>Atlantics</h1>\n  <span>Director: Mati Diop</span>\n  <span>drama</span>\n  <a href="../movies/atlantics-theatrical-trailer.html">Trailer</a>\n</div>\n')),(0,o.kt)("p",null,"Check out this ",(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/1444245-scraping-data-from-websites-using-schema-org-microdata",target:"_blank",rel:"noopener"},"tutorial")," to learn how to scrape pages using Schema.org microdata."),(0,o.kt)("h2",{id:"-json-ld"},(0,o.kt)("a",{parentName:"h2",href:"#json-ld",target:null,rel:null})," JSON-LD"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#schema-org-microdata",target:null,rel:null},"Schema.org microdata"),", some sites use ",(0,o.kt)("a",{parentName:"p",href:"https://json-ld.org/",target:"_blank",rel:"noopener"},"JSON for Linking Data")," (JSON-LD). Based on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html",target:"_blank",rel:"noopener"},"JSON")," format, JSON-LD helps structure a web page's content in a way that's easy for humans and computers to read. This improves a site's ",(0,o.kt)("a",{parentName:"p",href:"https://moz.com/learn/seo/what-is-seo",target:"_blank",rel:"noopener"},"SEO"),"."),(0,o.kt)("p",null,"To see if a website uses JSON-LD, check its ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element using your browser's developer tools. You will find the JSON-LD data in a ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," element similar to the one below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JSON-LD data",src:a(97794).Z,width:"2988",height:"1568"})),(0,o.kt)("p",null,"Then, you can use the code below in your scraper to extract the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const pageFunction = (context) => {\n    // other code here\n    const jsonLD = $('script[type=\"application/ld+json\"]');\n    return JSON.parse(jsonLD.html());\n};\n")),(0,o.kt)("h2",{id:"-internal-javascript-variables"},(0,o.kt)("a",{parentName:"h2",href:"#internal-javascript-variables",target:null,rel:null})," Internal JavaScript variables"),(0,o.kt)("p",null,"You can find internal JavaScript variables in a ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tag in a web page's ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element. These variables contain custom data that is set when the page loads."),(0,o.kt)("p",null,"To use internal variables, first load the page using ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome",target:"_blank",rel:"noopener"},"headless Chrome")," (usually with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer"),"). Once it is loaded, you can return the variable that contains it using ",(0,o.kt)("inlineCode",{parentName:"p"},"return {variable_name}")," (within the page context)."),(0,o.kt)("p",null,"For example, if you are searching for Kaffeine caf\xe9 on ",(0,o.kt)("a",{parentName:"p",href:"https://www.yelp.co.uk/search?find_desc=kaffeine&find_loc=London",target:"_blank",rel:"noopener"},"Yelp"),", search for the caf\xe9's name in the page's HTML using developer tools. The data you would receive would look something like the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "city": "London",\n    "category_aliases": "cafe",\n    "biz_id": "iUockw0CUssKZLyoGJYEXA",\n    "biz_name": "Kaffeine London",\n    "latitude": 51.5074,\n    "longitude": 0.1278,\n}\n')),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://blog.apify.com/web-scraping-in-2018-forget-html-use-xhrs-metadata-or-javascript-variables-8167f252439c",target:"_blank",rel:"noopener"},"this tutorial")," for more information and code examples for scraping with internal JavaScript variables."),(0,o.kt)("h2",{id:"-xhrs"},(0,o.kt)("a",{parentName:"h2",href:"#xhrs",target:null,rel:null})," XHRs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener"},"XMLHttpRequests")," (XHRs) allow you to scrape websites that load their data ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dynamic_web_page#Client-side_scripting",target:"_blank",rel:"noopener"},"dynamically"),". When you perform the required action (e.g. click a ",(0,o.kt)("strong",{parentName:"p"},"Load more")," button), the page makes an ",(0,o.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/",target:"_blank",rel:"noopener"},"API")," call to the XHR, which returns the data that will be displayed."),(0,o.kt)("p",null,"Using XHRs, you can access an entire API's content without even looking at the page. Just find the XHR that retrieves the data you want and use it to retrieve the data in a tidy structured format."),(0,o.kt)("p",null,"You can check the XHRs a web page sends under the ",(0,o.kt)("strong",{parentName:"p"},"Network")," tab, in the ",(0,o.kt)("strong",{parentName:"p"},"XHR")," section in your browser's developer tools."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Network tab and XHR section",src:a(95326).Z,width:"2310",height:"1300"})),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://blog.apify.com/web-scraping-in-2018-forget-html-use-xhrs-metadata-or-javascript-variables-8167f252439c",target:"_blank",rel:"noopener"},"this tutorial")," for more information and code examples for scraping with XHRs."))}d.isMDXComponent=!0},11287:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/css-selectors-c680ce8cdb199c1048da65d2ce4a444f.webp"},97794:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/json-ld-71372b2d69894e41410acc69141d41f4.webp"},95326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xhrs-d7fbefde84b047a536b49888f8c66852.webp"}}]);
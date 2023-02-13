"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[325],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),h=a,m=g["".concat(s,".").concat(h)]||g[h]||d[h]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},86469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"Finding links",description:"Learn what a link looks like in HTML and how to find and extract their URLs when web scraping using both DevTools and Node.js.",sidebar_position:2,slug:"/web-scraping-for-beginners/crawling/finding-links"},s="Finding links",c={unversionedId:"webscraping/web_scraping_for_beginners/crawling/finding_links",id:"webscraping/web_scraping_for_beginners/crawling/finding_links",title:"Finding links",description:"Learn what a link looks like in HTML and how to find and extract their URLs when web scraping using both DevTools and Node.js.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/finding_links.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/finding-links",permalink:"/academy/web-scraping-for-beginners/crawling/finding-links",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/crawling/finding_links.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1676307254,formattedLastUpdatedAt:"Feb 13, 2023",sidebarPosition:2,frontMatter:{title:"Finding links",description:"Learn what a link looks like in HTML and how to find and extract their URLs when web scraping using both DevTools and Node.js.",sidebar_position:2,slug:"/web-scraping-for-beginners/crawling/finding-links"},sidebar:"academy",previous:{title:"Recap! - Data extraction",permalink:"/academy/web-scraping-for-beginners/crawling/recap-collection-basics"},next:{title:"Filtering links",permalink:"/academy/web-scraping-for-beginners/crawling/filtering-links"}},p={},d=[{value:"Extracting links \ud83d\udd17",id:"extracting-links",level:2},{value:"Extracting link URLs in Node.js",id:"Extracting-links-in-node",level:2},{value:"Next Up",id:"next",level:2}],g={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"finding-links"},"Finding links"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn what a link looks like in HTML and how to find and extract their URLs when web scraping using both DevTools and Node.js.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"There are many kinds of links on the internet, which we'll cover in the advanced Academy courses. For now, let's think of links as ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",target:"_blank",rel:"noopener"},"HTML anchor elements")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," tags. A typical link looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-HTML"},'<a href="https://example.com">This is a link to example.com</a>\n')),(0,i.kt)("p",null,'On a webpage, the link above will look like this: "',(0,i.kt)("a",{href:"https://example.com",target:"_blank",rel:"noopener noreferrer"},"This is a link to example.com"),'". When you click it, your browser will navigate to the URL in the ',(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," tag's ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute (",(0,i.kt)("inlineCode",{parentName:"p"},"https://example.com"),")."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"href")," means ",(0,i.kt)("strong",{parentName:"p"},"H"),"ypertext ",(0,i.kt)("strong",{parentName:"p"},"REF"),"erence. You don't need to remember this - just know that ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," typically means some sort of link.")),(0,i.kt)("h2",{id:"extracting-links"},"Extracting links \ud83d\udd17"),(0,i.kt)("p",null,"So, if a link is just an HTML element, and the URL is just an attribute, this means that we can extract links exactly the same way as we extracted data.\ud83d\udca1 Easy!"),(0,i.kt)("p",null,"To test this theory in the browser, we can try running the following code in our DevTools console on any website."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Select all the <a> elements.\nconst links = document.querySelectorAll('a');\n// For each of the links...\nfor (const link of links) {\n    // get the value of its 'href' attribute...\n    const url = link.href;\n    // and print it to console.\n    console.log(url);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Boom"))," \ud83d\udca5, all the links from the website have now been printed to the console. Unless you were on example.com, it's usually a lot of links. By doing this, we can get a first-hand look at how interconnected the web really is."),(0,i.kt)("h2",{id:"Extracting-links-in-node"},"Extracting link URLs in Node.js"),(0,i.kt)("p",null,"DevTools is a fun playground, but Node.js is way more useful. Let's create a new file in our project called ",(0,i.kt)("strong",{parentName:"p"},"crawler.js")," and start adding some basic crawling code. We'll start with the same boilerplate as with our original scraper, but this time, we'll download the HTML of ",(0,i.kt)("a",{parentName:"p",href:"https://demo-webstore.apify.org/",target:"_blank",rel:"noopener"},"the demo site's main page"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// crawler.js\nimport { gotScraping } from 'got-scraping';\nimport cheerio from 'cheerio';\n\n// This time we open main page\nconst response = await gotScraping('https://demo-webstore.apify.org/');\nconst html = response.body;\n\nconst $ = cheerio.load(html);\n\nconst links = $('a');\n\nfor (const link of links) {\n    const url = $(link).attr('href');\n    console.log(url);\n}\n")),(0,i.kt)("p",null,"Aside from importing libraries and downloading HTML, we loaded the HTML into Cheerio and then used it to retrieve all the ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," elements. After that, we iterated over the collected links and printed their ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attributes, which we accessed using the ",(0,i.kt)("a",{parentName:"p",href:"https://api.jquery.com/attr/",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},".attr()"))," function. Remember, Cheerio functions are exactly the same as they are in jQuery."),(0,i.kt)("h2",{id:"next"},"Next Up"),(0,i.kt)("p",null,"After running the code, you will see quite a lot of links in the terminal. Some of them may look weird because they don't start with the regular ",(0,i.kt)("strong",{parentName:"p"},"https://")," protocol. We'll learn what to do with them in the ",(0,i.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/filtering-links",target:null,rel:null},"next lesson"),"."))}h.isMDXComponent=!0}}]);
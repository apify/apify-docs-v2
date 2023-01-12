"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Filtering links",description:"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",sidebar_position:3,slug:"/web-scraping-for-beginners/crawling/filtering-links"},s="Filtering links",p={unversionedId:"webscraping/web_scraping_for_beginners/crawling/filtering_links",id:"webscraping/web_scraping_for_beginners/crawling/filtering_links",title:"Filtering links",description:"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/crawling/filtering_links.md",sourceDirName:"webscraping/web_scraping_for_beginners/crawling",slug:"/web-scraping-for-beginners/crawling/filtering-links",permalink:"/academy/web-scraping-for-beginners/crawling/filtering-links",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673533984,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:3,frontMatter:{title:"Filtering links",description:"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.",sidebar_position:3,slug:"/web-scraping-for-beginners/crawling/filtering-links"},sidebar:"academy",previous:{title:"Finding links",permalink:"/academy/web-scraping-for-beginners/crawling/finding-links"},next:{title:"Relative URLs",permalink:"/academy/web-scraping-for-beginners/crawling/relative-urls"}},c={},u=[{value:"Filtering with unique CSS selectors",id:"css-filtering",level:2},{value:"Attribute selector",id:"attribute-selector",level:3},{value:"Descendant selector",id:"descendant-selector",level:3},{value:"Filtering with pattern-matching",id:"pattern-matching-filter",level:2},{value:"Next Up",id:"next",level:2}],d={toc:u};function h(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"filtering-links"},"Filtering links"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When you collect links from a web page, you often end up with a lot of irrelevant URLs. Learn how to filter the links to only keep the ones you need.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Web pages are full of links, but frankly, most of them are useless to us. There are two approaches to filtering links: Targeting the links we're interested in by using unique CSS selectors, and collecting all links and then using pattern matching to find the sought after URLs. In real scraping scenarios, both of these two approaches are often combined for the most effective URL filtering."),(0,o.kt)("h2",{id:"css-filtering"},"Filtering with unique CSS selectors"),(0,o.kt)("p",null,"In the previous lesson, we simply grabbed all the links from the HTML document."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="DevTools" lang="javascript">\ndocument.querySelectorAll(\'a\');\n</marked-tab>\n<marked-tab header="Node.js with Cheerio" lang="javascript">\n$(\'a\');\n</marked-tab>\n')),(0,o.kt)("h3",{id:"attribute-selector"},"Attribute selector"),(0,o.kt)("p",null,"That's not the only way to do it, however. Since we're interested in the ",(0,o.kt)("inlineCode",{parentName:"p"},"href")," attributes, a first very reasonable filter is to exclusively target the ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," tags that have the ",(0,o.kt)("inlineCode",{parentName:"p"},"href")," attribute (yes, anchor tags without the attribute can and do exist). You can do that by using the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",target:"_blank",rel:"noopener"},"CSS attribute selector"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="DevTools" lang="javascript">\ndocument.querySelectorAll(\'a[href]\');\n</marked-tab>\n<marked-tab header="Node.js" lang="javascript">\n$(\'a[href]\');\n</marked-tab>\n')),(0,o.kt)("p",null,"Ensuring to always add the ",(0,o.kt)("inlineCode",{parentName:"p"},"[href]")," part of the selector will save you from nasty bug hunts on certain pages."),(0,o.kt)("p",null,"We only want the product links on this page, so we can limit the number of results by only targeting the links within the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.fit")," container to filter out some unwanted links (such as in the navbar), then further select any a tags with a ",(0,o.kt)("inlineCode",{parentName:"p"},"href")," attribute containing ",(0,o.kt)("inlineCode",{parentName:"p"},"/product/"),"."),(0,o.kt)("h3",{id:"descendant-selector"},"Descendant selector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="DevTools" lang="javascript">\ndocument.querySelectorAll(\'main.fit a[href*="/product/"]\');\n</marked-tab>\n<marked-tab header="Node.js" lang="javascript">\n$(\'main.fit a[href*="/product/"]\');\n</marked-tab>\n')),(0,o.kt)("p",null,"We already know both the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.fit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},'a[href*="/product/"]')," selectors and how they work on their own, but their combination is new. It's called a ",(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/almanac/selectors/d/descendant/",target:"_blank",rel:"noopener"},"descendant selector"),", and it selects all ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href=".../product/...">')," elements that are descendants of a ",(0,o.kt)("inlineCode",{parentName:"p"},'<main class="fit">')," element. A descendant is any element that's nested somewhere inside another element. It does not have to be a direct child of the specified parent element."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Nested HTML tags",src:n(68142).Z,width:"1270",height:"284"})),(0,o.kt)("p",null,"When we print all the URLs in the DevTools console, we can see that we've correctly filtered only the featured product links."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"for (const a of document.querySelectorAll('main.fit a[href*=\"/product/\"]')) {\n    console.log(a.href);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product URLs printed to console",src:n(64374).Z,width:"1198",height:"1052"})),(0,o.kt)("p",null,"Notice that we might have some duplicate URLs. These duplicates can be easily filtered out. ",(0,o.kt)("em",{parentName:"p"},"We will be learning about data filtering/manipulation in future lessons.")),(0,o.kt)("h2",{id:"pattern-matching-filter"},"Filtering with pattern-matching"),(0,o.kt)("p",null,"Another common way to filter links (or any text, really) is by matching patterns with regular expressions."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/regexp-introduction",target:"_blank",rel:"noopener"},"Learn more about regular expressions"))),(0,o.kt)("p",null,"We can inspect the product URLs, and we'll soon find that they all look like the following. That is, they're exactly the same except for the text after the final ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://demo-webstore.apify.org/product/crystal-chandelier-maria-theresa-for-12-light\nhttps://demo-webstore.apify.org/product/macbook-pro\nhttps://demo-webstore.apify.org/product/lightweight-jacket\n...\nhttps://demo-webstore.apify.org/product/{PRODUCT-NAME}\n")),(0,o.kt)("p",null,"Now, we'll create a regular expression that matches those links. There are many ways to do this. For simplicity, let's go with this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-RegExp"},"demo-webstore\\.apify\\.org\\/product\\/[a-z|0-9|-]*\n")),(0,o.kt)("p",null,"This regular expression matches all URLs that include the ",(0,o.kt)("inlineCode",{parentName:"p"},"demo-webstore.apify.org/product/")," substring immediately following with any number of letters or dashes ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A great way to learn more about regular expression syntax and to test your expressions are tools like ",(0,o.kt)("a",{parentName:"p",href:"https://regex101.com/",target:"_blank",rel:"noopener"},"regex101.com")," or ",(0,o.kt)("a",{parentName:"p",href:"https://regexr.com/",target:"_blank",rel:"noopener"},"regexr.com"),". It's okay if you don't get the hang of it right away!")),(0,o.kt)("p",null,"To test our regular expression in the DevTools console, we'll first create a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"RegExp"))," object and then test the URLs with the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"regExp.test(string)"))," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// To demonstrate pattern matching, we use only the 'a'\n// selector to select all links on the page.\nfor (const a of document.querySelectorAll('a')) {\n    const regExp = /demo-webstore\\.apify\\.org\\/product\\/[a-z|0-9|-]*/;\n    const url = a.href;\n    if (regExp.test(url)) console.log(url);\n}\n")),(0,o.kt)("p",null,"If you run this code in DevTools, you'll see that it produces exactly the same URLs as the CSS filter did."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Yes, filtering with CSS selectors is often the better (and just slightly more performant) option. But sometimes, it's not enough. Learning regular expressions is a very useful skill in many scenarios.")),(0,o.kt)("h2",{id:"next"},"Next Up"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling/relative-urls",target:null,rel:null},"next lesson")," we'll see how rewriting this code to Node.js is not so simple and learn about absolute and relative URLs in the process."))}h.isMDXComponent=!0},68142:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nested-tag-c8b613fa301f22e2e7fbe20188292b34.webp"},64374:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/product-urls-07e112a6c882933339d71b3ff6e8de96.webp"}}]);
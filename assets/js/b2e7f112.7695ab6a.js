"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,h=u["".concat(c,".").concat(g)]||u[g]||m[g]||n;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],s={title:"Naming your actor",description:"Apify's standards for actor naming. Learn how to choose the right name for scraping and non-scraping actors and how to optimize your actor for search engines.",sidebar_position:1,slug:"/get-most-of-actors/naming-your-actor"},c="Naming your actor",l={unversionedId:"platform/get_most_of_actors/naming_your_actor",id:"platform/get_most_of_actors/naming_your_actor",title:"Naming your actor",description:"Apify's standards for actor naming. Learn how to choose the right name for scraping and non-scraping actors and how to optimize your actor for search engines.",source:"@site/sources/academy/platform/get_most_of_actors/naming_your_actor.md",sourceDirName:"platform/get_most_of_actors",slug:"/get-most-of-actors/naming-your-actor",permalink:"/academy/get-most-of-actors/naming-your-actor",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/platform/get_most_of_actors/naming_your_actor.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677522857,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:1,frontMatter:{title:"Naming your actor",description:"Apify's standards for actor naming. Learn how to choose the right name for scraping and non-scraping actors and how to optimize your actor for search engines.",sidebar_position:1,slug:"/get-most-of-actors/naming-your-actor"},sidebar:"academy",previous:{title:"Getting the most of actors on Apify Store",permalink:"/academy/get-most-of-actors"},next:{title:"Actor README",permalink:"/academy/get-most-of-actors/actor-readme"}},p={},m=[{value:"Scrapers",id:"scrapers",level:2},{value:"Non-scraping actors",id:"non-scraping-actors",level:2},{value:"Renaming your actor",id:"renaming-your-actor",level:2},{value:"Next up",id:"next",level:2}],u={toc:m};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"naming-your-actor"},"Naming your actor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Apify's standards for actor naming. Learn how to choose the right name for scraping and non-scraping actors and how to optimize your actor for search engines.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Naming your actor can be tricky. Especially when you've spent a long time coding and are excited to show your brand-new creation to the world. To help users find your actor, we've introduced naming standards. These standards improve your actor's ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Search_engine_optimization",target:"_blank",rel:"noopener"},"search engine optimization (SEO)")," and maintain consistency in the ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Your actor's name should be 3-63 characters long.")),(0,n.kt)("h2",{id:"scrapers"},"Scrapers"),(0,n.kt)("p",null,"For actors such as ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/bernardo/youtube-scraper",target:"_blank",rel:"noopener"},"YouTube Scraper")," or ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/vaclavrut/amazon-crawler",target:"_blank",rel:"noopener"},"Amazon Scraper"),", which scrape web pages, we usually have one actor per domain. This helps with naming, as the domain name serves as your actor's name."),(0,n.kt)("p",null,"GOOD:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Technical name (actor's name in the ",(0,n.kt)("a",{parentName:"li",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify Console"),"): ",(0,n.kt)("strong",{parentName:"li"},"${domain}-scraper"),", e.g. ",(0,n.kt)("strong",{parentName:"li"},"youtube-scraper"),"."),(0,n.kt)("li",{parentName:"ul"},"Publication title for the Apify Store: ",(0,n.kt)("strong",{parentName:"li"},"${Domain} Scraper"),", e.g. ",(0,n.kt)("strong",{parentName:"li"},"YouTube Scraper"),"."),(0,n.kt)("li",{parentName:"ul"},"Name of the GitHub repository: ",(0,n.kt)("strong",{parentName:"li"},"actor-${domain}-scraper"),", e.g. ",(0,n.kt)("strong",{parentName:"li"},"actor-youtube-scraper"),".")),(0,n.kt)("p",null,"AVOID:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Technical name: ",(0,n.kt)("strong",{parentName:"li"},"the-scraper-of-${domain}"),", e.g. ",(0,n.kt)("strong",{parentName:"li"},"the-scraper-of-youtube"),"."),(0,n.kt)("li",{parentName:"ul"},"Publication title: ",(0,n.kt)("strong",{parentName:"li"},"The Scraper of ${Domain}"),", e.g. ",(0,n.kt)("strong",{parentName:"li"},"The Scraper of YouTube"),"."),(0,n.kt)("li",{parentName:"ul"},"GitHub repository: ",(0,n.kt)("strong",{parentName:"li"},"actor-the-scraper-of-${domain}"),", e.g. ",(0,n.kt)("strong",{parentName:"li"},"actor-the-scraper-of-youtube"),".")),(0,n.kt)("p",null,"If your actor only caters to a specific service on a domain (and you don't plan on extending it), add the service to the actor's name."),(0,n.kt)("p",null,"For example,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Technical name: ",(0,n.kt)("strong",{parentName:"li"},"${domain}-${service}-scraper"),", e.g. ",(0,n.kt)("strong",{parentName:"li"},"google-search-scraper"),"."),(0,n.kt)("li",{parentName:"ul"},"Publication title: ",(0,n.kt)("strong",{parentName:"li"},"${Domain} ${Service} Scraper"),", e.g. ",(0,n.kt)("a",{parentName:"li",href:"https://apify.com/apify/google-search-scraper",target:"_blank",rel:"noopener"},(0,n.kt)("strong",{parentName:"a"},"Google Search Scraper")),"."),(0,n.kt)("li",{parentName:"ul"},"GitHub repository: ",(0,n.kt)("strong",{parentName:"li"},"actor-${domain}-${service}-scraper"),", e.g. ",(0,n.kt)("strong",{parentName:"li"},"actor-google-search-scraper"),".")),(0,n.kt)("h2",{id:"non-scraping-actors"},"Non-scraping actors"),(0,n.kt)("p",null,"Naming for non-scraping actors is more liberal. Being creative and considering SEO and user experience are good places to start. Think about what your users will type into a search engine when looking for your actor. What is your actor's function?"),(0,n.kt)("p",null,"If you're having trouble, you can always run your ideas by the Apify team using the chat icon in the bottom-right corner."),(0,n.kt)("p",null,"Below are examples for the ",(0,n.kt)("a",{parentName:"p",href:"https://apify.com/lukaskrivka/google-sheets",target:"_blank",rel:"noopener"},"Google Sheets")," actor."),(0,n.kt)("p",null,"GOOD:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Technical name: ",(0,n.kt)("strong",{parentName:"li"},"google-sheets"),"."),(0,n.kt)("li",{parentName:"ul"},"Publication title: ",(0,n.kt)("strong",{parentName:"li"},"Google Sheets Import & Export"),"."),(0,n.kt)("li",{parentName:"ul"},"GitHub repository: ",(0,n.kt)("strong",{parentName:"li"},"actor-google-sheets"),".")),(0,n.kt)("p",null,"AVOID:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Technical name: ",(0,n.kt)("strong",{parentName:"li"},"import-to-and-export-from-google-sheets"),"."),(0,n.kt)("li",{parentName:"ul"},"Publication title: ",(0,n.kt)("strong",{parentName:"li"},"Actor for Importing to and Exporting from Google Sheets"),"."),(0,n.kt)("li",{parentName:"ul"},"GitHub repository: ",(0,n.kt)("strong",{parentName:"li"},"actor-for-import-and-export-google-sheets"),".")),(0,n.kt)("h2",{id:"renaming-your-actor"},"Renaming your actor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning!")," Changing your actor's ",(0,n.kt)("strong",{parentName:"p"},"technical name")," may break current integrations for that actor's users. This is why some actors in the Apify Store don't have consistent naming. For the same reason, it is best to change the actor's name early, before you build a steady user base."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"publication title"),", however, can be changed without any problems."),(0,n.kt)("h2",{id:"next"},"Next up"),(0,n.kt)("p",null,"Now that your actor is properly named and you know the differences between your actor's technical name and publication title, it's time to take the ",(0,n.kt)("a",{parentName:"p",href:"/academy/get-most-of-actors/actor-readme",target:null,rel:null},"next step"),"! into making your actor public in Apify Store by ensuring that it has a well-structured and comprehensive README."))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Locating API endpoints",description:"Learn how to effectively locate a website's API endpoints, and learn how to use them to get the data you want faster and more reliably.",sidebar_position:1,slug:"/api-scraping/general-api-scraping/locating-and-learning"},l="Locating API endpoints",p={unversionedId:"webscraping/api_scraping/general_api_scraping/locating_and_learning",id:"webscraping/api_scraping/general_api_scraping/locating_and_learning",title:"Locating API endpoints",description:"Learn how to effectively locate a website's API endpoints, and learn how to use them to get the data you want faster and more reliably.",source:"@site/sources/academy/webscraping/api_scraping/general_api_scraping/locating_and_learning.md",sourceDirName:"webscraping/api_scraping/general_api_scraping",slug:"/api-scraping/general-api-scraping/locating-and-learning",permalink:"/academy/api-scraping/general-api-scraping/locating-and-learning",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/api_scraping/general_api_scraping/locating_and_learning.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675427001,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:1,frontMatter:{title:"Locating API endpoints",description:"Learn how to effectively locate a website's API endpoints, and learn how to use them to get the data you want faster and more reliably.",sidebar_position:1,slug:"/api-scraping/general-api-scraping/locating-and-learning"},sidebar:"academy",previous:{title:"General API scraping",permalink:"/academy/api-scraping/general-api-scraping"},next:{title:"Cookies, headers, and tokens",permalink:"/academy/api-scraping/general-api-scraping/cookies-headers-tokens"}},c={},d=[{value:"Learning the API",id:"learning-the-api",level:2},{value:"Next up",id:"next",level:2}],u={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"locating-endpoints"},"Locating API endpoints"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to effectively locate a website's API endpoints, and learn how to use them to get the data you want faster and more reliably.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In order to retrieve a website's API endpoints, as well as other data about them, the ",(0,o.kt)("strong",{parentName:"p"},"Network")," tab within Chrome's (or another browser's) DevTools can be used. This tab allows you to see the all of the various network requests being made, and even allows you to filter them based on request type, response type, or by a keyword."),(0,o.kt)("p",null,"On our target page, we'll open up the Network tab, and filter by request type of ",(0,o.kt)("inlineCode",{parentName:"p"},"Fetch/XHR"),", as opposed to the default of ",(0,o.kt)("inlineCode",{parentName:"p"},"All"),". Next, we'll do some action on the page which causes the request for the target data to be sent, which will enable us to view the request in DevTools. The types of actions that need to be done can vary depending on the website, the type of page, and the type of data being returned. Sometimes, reloading the page is enough, while other times, a button must be clicked, or the page must be scrolled. For our example use case, reloading the page is sufficient."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Here's what we can see see in the Network tab after reloading the page:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Network tab results after completing an action on the page which results in the API being called",src:a(42817).Z,width:"1458",height:"1185"})),(0,o.kt)("p",null,"Let's say that our target data is a full list of Ti\xebsto's uploaded songs on SoundCloud. We can use the ",(0,o.kt)("strong",{parentName:"p"},"Filter")," option to search for the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"tracks"),", and see if any endpoints have been hit that include that word. Multiple results may still be in the list when using this feature, so it is important to carefully examine the payloads and responses of each request in order to ensure that the correct one is found."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The keyword/piece of data that is used in this filtered search should be a target keyword or a piece of target data that that can be assumed will most likely be a part of the endpoint.")),(0,o.kt)("p",null,"After a little bit of digging through the different response values of each request in our filtered list within the Network tab, we can discover this endpoint, which returns a JSON list including 20 of Ti\xebsto's latest tracks:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Endpoint found in the Network tab",src:a(39826).Z,width:"1774",height:"1788"})),(0,o.kt)("h2",{id:"learning-the-api"},"Learning the API"),(0,o.kt)("p",null,"The majority of APIs, especially for popular sites that serve up large amounts of data, are configurable through different parameters, query options, or payload values. A lot of times, an endpoint discovered through the Network tab will reveal at least a few of these options."),(0,o.kt)("p",null,"Here's what our target endpoint's URL looks like coming directly from the Network tab:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api-v2.soundcloud.com/users/141707/tracks?representation=&client_id=zdUqm51WRIAByd0lVLntcaWRKzuEIB4X&limit=20&offset=0&linked_partitioning=1&app_version=1646987254&app_locale=en\n")),(0,o.kt)("p",null,"Since our request doesn't have any body/payload, we just need to analyze the URL. We can break this URL down into chunks that help us understand what each value does."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Breaking down the request url into understandable chunks",src:a(19510).Z,width:"2748",height:"1776"})),(0,o.kt)("p",null,"Understanding an API's various configurations helps with creating a game-plan on how to best scrape it, as many of the parameters can be utilized for easy pagination, or easy data-filtering. Additionally, these values can be mapped to a scraper's configuration options, which overall makes the scraper more versatile."),(0,o.kt)("p",null,"Let's say we want to receive all of the user's tracks in one request. Based on our observations of the endpoint's different parameters, we can modify the URL and utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," option to return more than just twenty songs. The ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," option is extremely common with most APIs, and allows the person making the request to literally limit the maximum number of results to be returned in the request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api-v2.soundcloud.com/users/141707/tracks?client_id=zdUqm51WRIAByd0lVLntcaWRKzuEIB4X&limit=99999\n")),(0,o.kt)("p",null,"By using the ridiculously large number of ",(0,o.kt)("inlineCode",{parentName:"p"},"99999"),", we ensure that all of the user's tracks will be captured in this single request. Luckily, with SoundCloud's API, there is no cap to the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," parameter; however, most other APIs will have a limit to ensure that hundreds of thousands of results aren't retrieved at one time. For this use-case, setting a massive results limit is not much of a risk, as most users don't have a track-count over 500 anyways, but receiving too many results at once can result in overflow errors."),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/academy/api-scraping/general-api-scraping/cookies-headers-tokens",target:null,rel:null},"Next lesson")," will be all about cookies, headers, and tokens, and how they're relevant when scraping an API."))}h.isMDXComponent=!0},19510:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/analyzing-the-url-d13462b4beaa20eb6bab7d8f95091507.png"},39826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/endpoint-found-6c93a91aff4ad378bf5b5b1baceeba3e.png"},42817:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/results-in-network-tab-be10d5fd17e35bf8aafca9b2899cdccd.png"}}]);
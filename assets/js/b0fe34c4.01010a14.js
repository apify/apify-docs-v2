"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Processing the same page multiple times with different setups in Web Scraper",description:"Solving a common problem with scraper automatically deduplicating the same URLs",sidebar_position:15.6,slug:"/node-js/processing-multiple-pages-web-scraper"},l=void 0,p={unversionedId:"tutorials/node_js/processing_multiple_pages_web_scraper",id:"tutorials/node_js/processing_multiple_pages_web_scraper",title:"Processing the same page multiple times with different setups in Web Scraper",description:"Solving a common problem with scraper automatically deduplicating the same URLs",source:"@site/sources/academy/tutorials/node_js/processing_multiple_pages_web_scraper.md",sourceDirName:"tutorials/node_js",slug:"/node-js/processing-multiple-pages-web-scraper",permalink:"/academy/node-js/processing-multiple-pages-web-scraper",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/tutorials/node_js/processing_multiple_pages_web_scraper.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677522857,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:15.6,frontMatter:{title:"Processing the same page multiple times with different setups in Web Scraper",description:"Solving a common problem with scraper automatically deduplicating the same URLs",sidebar_position:15.6,slug:"/node-js/processing-multiple-pages-web-scraper"},sidebar:"academy",previous:{title:"Submitting a form with file attachment",permalink:"/academy/node-js/submitting-form-with-file-attachment"},next:{title:"How to add external libraries to Web Scraper",permalink:"/academy/node-js/add-external-libraries-web-scraper"}},u={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There is a certain scraping scenario in which you need to process the same URL many times, but each time with a different setup (e.g. filling in a form with different data each time). This is easy to do with Apify, but how to go about it may not be obvious at first glance."),(0,o.kt)("p",null,"We'll show you how to do this with a simple example: starting a scraper with an array of keywords, inputting each of the keywords separately into Google, and retrieving the results on the last page. The tutorial will be split into these three main parts."),(0,o.kt)("p",null,"This whole thing could be done in a much easier way, by directly enqueuing the search URL, but we're choosing this approach to demonstrate some of the not so obvious features of the Apify scraper."),(0,o.kt)("h1",{id:"enqueuing-start-pages-for-all-keywords"},"Enqueuing start pages for all keywords"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solving a common problem with scraper automatically deduplicating the same URLs")),(0,o.kt)("hr",null),(0,o.kt)("p",null,'First, we need to start the scraper on the page from which we\'re going to do our enqueuing. To do that, we create one start URL with the label "enqueue" and URL "',(0,o.kt)("a",{parentName:"p",href:"https://example.com/",target:"_blank",rel:"noopener"},"https://example.com"),'". Now we can proceed to enqueue all the pages. The first part of our pageFunction will look like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function pageFunction(context) {\nconst $ = context.jQuery;\n\nif (context.request.userData.label === 'enqueue') {\n\n// parse input keywords\n\xa0 \xa0 const keywords = context.customData;\n\n// process all the keywords\n for (const keyword of keywords) {\n\xa0 \xa0 \xa0 \xa0 // enqueue the page and pass the keyword in\n\xa0 \xa0 \xa0 \xa0 // the interceptRequestData attribute\n\xa0 \xa0 \xa0 \xa0 await context.enqueueRequest({\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 url: 'https://google.com',\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 uniqueKey: Math.random() + '',\n userData: {\n label: 'fill-form',\n keyword,\n }\n\xa0 \xa0 \xa0 \xa0 });\n\xa0 \xa0 }\n // No return here because we don't extract any data yet\n}\n}\n")),(0,o.kt)("p",null,"To set the keywords, we're using the customData scraper parameter. This is useful for smaller data sets, but may not be perfect for bigger ones. For such cases you may want to use something like ",(0,o.kt)("a",{parentName:"p",href:"http://kb.apify.com/integration/importing-a-list-of-urls-from-an-external-source",target:"_blank",rel:"noopener"},"Importing a list of URLs from an external source"),"."),(0,o.kt)("p",null,"Since we're enqueuing the same page more than once, we need to set our own uniqueKey so the page will be added to the queue (by default uniqueKey is set to be the same as the URL). The label for the next page will be \"fill-form\". We're passing the keyword to the next page in the userData field (this can contain any data)."),(0,o.kt)("h1",{id:"inputting-the-keyword-into-google"},"Inputting the keyword into Google"),(0,o.kt)("p",null,"Now we come to the next page (Google). We need to retrieve the keyword and input it into the Google search bar. This will be the next part of the pageFunction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Add this code into the previous pageFunction\nelse if (context.request.userData.label === 'fill-form'){\n\n// retrieve the keyword\n\xa0 \xa0 const { keyword } = context.request.userData;\n\n// input the keyword into the search bar\n\xa0 \xa0 $('#lst-ib').val(keyword);\n\n// submit the form\n\xa0 \xa0 $('#tsf').submit();\n}\n")),(0,o.kt)("p",null,'For the next page to correctly enqueue, we\'re going to need a new pseudoURL. Create a pseudoURL with the label "result" and the URL "',(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/search?%5B.+%5D",target:"_blank",rel:"noopener"},"https://www.google.com/search?[.+]"),'".'),(0,o.kt)("p",null,"Now we're on the last page and can finally extract the results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Add this code into the previous pageFunction\nelse if (context.request.userData.label === 'result') {\n\n// create result array\n\xa0 \xa0 const result = [];\n\n// process all the results\n\xa0 \xa0 $('.rc').each(function(index, elem){\n\n// wrap element in jQuery\n\xa0 \xa0 \xa0 \xa0 const gResult = $(elem);\n\n// lookup link and text\n\xa0 \xa0 \xa0 \xa0 const link = gResult.find('.r a');\n\xa0 \xa0 \xa0 \xa0 const text = gResult.find('.s .st');\n\n// extract data and add it to result array\n\xa0 \xa0 \xa0 result.push({\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 name: link.text(),\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 link: link.attr('href'),\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 text: text.text(),\n\xa0 \xa0 \xa0 \xa0 });\n\n});\n\n    // Now we finally return\n\nreturn result;\n}\n")),(0,o.kt)("p",null,"To test the scraper, set the customData to something like this ",(0,o.kt)("inlineCode",{parentName:"p"},'["apple", "orange", "banana"]')," and push the Run button to start."))}m.isMDXComponent=!0}}]);
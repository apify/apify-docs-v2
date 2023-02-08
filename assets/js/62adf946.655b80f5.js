"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},68631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"Scraping iFrames",description:"Extracting data from iFrames can be frustrating. In this tutorial, we will learn how to scrape information from iFrames using Puppeteer or Playwright.",sidebar_position:5,slug:"/puppeteer-playwright/common-use-cases/scraping-iframes"},p="Scraping iFrames",l={unversionedId:"webscraping/puppeteer_playwright/common_use_cases/scraping_iframes",id:"webscraping/puppeteer_playwright/common_use_cases/scraping_iframes",title:"Scraping iFrames",description:"Extracting data from iFrames can be frustrating. In this tutorial, we will learn how to scrape information from iFrames using Puppeteer or Playwright.",source:"@site/sources/academy/webscraping/puppeteer_playwright/common_use_cases/scraping_iframes.md",sourceDirName:"webscraping/puppeteer_playwright/common_use_cases",slug:"/puppeteer-playwright/common-use-cases/scraping-iframes",permalink:"/academy/puppeteer-playwright/common-use-cases/scraping-iframes",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/puppeteer_playwright/common_use_cases/scraping_iframes.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675852910,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:5,frontMatter:{title:"Scraping iFrames",description:"Extracting data from iFrames can be frustrating. In this tutorial, we will learn how to scrape information from iFrames using Puppeteer or Playwright.",sidebar_position:5,slug:"/puppeteer-playwright/common-use-cases/scraping-iframes"},sidebar:"academy",previous:{title:"Submitting a form with a file attachment",permalink:"/academy/puppeteer-playwright/common-use-cases/submitting-a-form-with-a-file-attachment"},next:{title:"API scraping",permalink:"/academy/api-scraping"}},c={},m=[{value:"Finding the right <code>&lt;iframe&gt;</code>",id:"finding-the-right-iframe",level:2}],u={toc:m};function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scraping-iframes"},"Scraping iFrames"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extracting data from iFrames can be frustrating. In this tutorial, we will learn how to scrape information from iFrames using Puppeteer or Playwright.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Getting information from inside iFrames is a known pain, especially for new developers. After spending some time on Stack Overflow, you usually find answers like jQuery's ",(0,i.kt)("inlineCode",{parentName:"p"},"contents()")," method or native contentDocument property, which can guide you to the insides of an iframe. But still, getting the right identifiers and holding that new context is a little annoying. Fortunately, you can make everything simpler and more straightforward by scraping iFrames with Puppeteer."),(0,i.kt)("h2",{id:"finding-the-right-iframe"},"Finding the right ",(0,i.kt)("inlineCode",{parentName:"h2"},"<iframe>")),(0,i.kt)("p",null,"If you are using basic methods of page objects like ",(0,i.kt)("inlineCode",{parentName:"p"},"page.evaluate()"),", you are actually already working with frames. Behind the scenes, Puppeteer will call ",(0,i.kt)("inlineCode",{parentName:"p"},"page.mainFrame().evaluate()"),", so most of the methods you are using with page object can be used the same way with frame object. To access frames, you need to loop over the main frame's child frames and identify the one you want to use."),(0,i.kt)("p",null,"As a simple demonstration, we'll scrape the Twitter widget iFrame from ",(0,i.kt)("a",{parentName:"p",href:"https://www.imdb.com/",target:"_blank",rel:"noopener"},"IMDB"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch() ;\n\nconst page = await browser.newPage();\n\nawait page.goto('https://www.imdb.com');\nawait page.waitFor(5000); // we need to wait for Twitter widget to load\n\nlet twitterFrame; // this will be populated later by our identified frame\n\nfor (const frame of page.mainFrame().childFrames()) {\n    // Here you can use few identifying methods like url(),name(),title()\n    if (frame.url().includes('twitter')){\n        console.log('we found the Twitter iframe')\n        twitterFrame = frame \n        // we assign this frame to myFrame to use it later\n    }\n}\n\nawait browser.close();\n")),(0,i.kt)("p",null,"If it is hard to identify the iframe you want to access, don't worry. You can already use any Puppeteer method on the frame object to help you identify it, scrape it or manipulate it. You can also go through any nested frames."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let twitterFrame;\n\nfor (const frame of page.mainFrame().childFrames()) {\n    if (frame.url().includes('twitter')){\n        for(const nestedFrame of frame.childFrames()){\n             const tweetList = await nestedFrame.$('.timeline-TweetList')\n             if(tweetList){\n                 console.log('We found the frame with tweet list')\n                 twitterFrame = nestedFrame\n             }\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Here we used some more advanced techniques to find a nested ",(0,i.kt)("inlineCode",{parentName:"p"},"<iframe>"),". Now when we have it assigned to our twitterFrame object, the hard work is over and we can start working with it (almost) like with a regular page object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const textFeed = await twitterFrame.$$eval('.timeline-Tweet-text', pElements => pElements.map((elem) => elem.textContent));\n\nfor (const text of textFeed){\n    console.log(text)\n    console.log('**********')\n}\n")),(0,i.kt)("p",null,"With a little more effort, we could also follow different links from the feed or even play a video, but that is not within the scope of this article. For all references about page and frame objects (and Puppeteer generally), you should study ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/puppeteer/latest/puppeteer/Frame-class.html",target:"_blank",rel:"noopener"},"the documentation"),". New versions are released quite often, so checking the docs regularly can help you to stay on top of web scraping and automation."))}f.isMDXComponent=!0}}]);
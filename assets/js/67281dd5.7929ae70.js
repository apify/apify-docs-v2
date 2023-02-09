"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[1556],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},29624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"How to analyze pages and fix errors",description:"Learn to deal with random crashes in your web scraping and automation jobs. Find our the essentials of debugging and fixing problems in your actors.",sidebar_position:3.91,slug:"/tutorials/analyze-pages-and-fix-errors"},l="How to analyze pages and fix errors",p={unversionedId:"tutorials/analyze_pages_and_fix_errors",id:"tutorials/analyze_pages_and_fix_errors",title:"How to analyze pages and fix errors",description:"Learn to deal with random crashes in your web scraping and automation jobs. Find our the essentials of debugging and fixing problems in your actors.",source:"@site/sources/platform/tutorials/analyze_pages_and_fix_errors.md",sourceDirName:"tutorials",slug:"/tutorials/analyze-pages-and-fix-errors",permalink:"/platform/tutorials/analyze-pages-and-fix-errors",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/analyze_pages_and_fix_errors.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675952046,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:3.91,frontMatter:{title:"How to analyze pages and fix errors",description:"Learn to deal with random crashes in your web scraping and automation jobs. Find our the essentials of debugging and fixing problems in your actors.",sidebar_position:3.91,slug:"/tutorials/analyze-pages-and-fix-errors"},sidebar:"docs",previous:{title:"Scrape websites using the sitemap",permalink:"/platform/tutorials/scrape-websites-using-the-sitemap"},next:{title:"Scrape paginated sites",permalink:"/platform/tutorials/scrape-paginated-sites"}},u={},c=[{value:"Possible problems",id:"possible-problems",level:2},{value:"Analysis",id:"analysis",level:2},{value:"Logging",id:"logging",level:3},{value:"Example of a structured log",id:"example-of-a-structured-log",level:4},{value:"Errors",id:"errors",level:4},{value:"Saving snapshots",id:"saving-snapshots",level:3},{value:"How to save a snapshot",id:"how-to-save-a-snapshot",level:4},{value:"When to save snapshots",id:"when-to-save-snapshots",level:4},{value:"Error reporting",id:"error-reporting",level:3}],h={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-analyze-pages-and-fix-errors"},"How to analyze pages and fix errors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn to deal with random crashes in your web scraping and automation jobs. Find our the essentials of debugging and fixing problems in your actors.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Debugging is essential in programming. Even if you would not call yourself a programmer, having basic debugging skills will make building and maintaining ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/apify-scrapers",target:null,rel:null},"scrapers")," and ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/integrations/run-actor-and-retrieve-data-via-api",target:null,rel:null},"integration actors")," on Apify easier. It will help you avoid hiring an expensive developer and solve your issues faster."),(0,o.kt)("p",null,"This article covers the absolute basics. It discusses the most common problems and the simplest tools for analyzing the issue."),(0,o.kt)("h2",{id:"possible-problems"},"Possible problems"),(0,o.kt)("p",null,"It is often tricky to see the full scope of what can go wrong. We assume once the code is set up correctly, it will keep working. Unfortunately, that is rarely true in the realm of web scraping and automation."),(0,o.kt)("p",null,"Websites change, they introduce new ",(0,o.kt)("a",{parentName:"p",href:"/platform/web-scraping-101/anti-scraping-techniques",target:null,rel:null},"anti-scraping technologies"),", programming tools change and, in addition, people make mistakes."),(0,o.kt)("p",null,"Here are the most common reasons your working solution may break."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The website changes its layout or ",(0,o.kt)("a",{parentName:"p",href:"https://www.datafeedwatch.com/academy/data-feed",target:"_blank",rel:"noopener"},"data feed"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A site's layout changes depending on location or uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=XDoKXaGrUxE&feature=youtu.be",target:"_blank",rel:"noopener"},"A/B testing"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A page starts to block you (recognizes you as a bot).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The website ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/scraping-dynamic-content",target:null,rel:null},"loads its data later dynamically"),", so the code works only sometimes, if you are slow or lucky enough.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You made a mistake when updating your code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The code worked locally but not on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"Apify platform"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have lost access to ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy",target:null,rel:null},"Apify proxy")," (your proxy trial is over).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have upgraded your ",(0,o.kt)("a",{parentName:"p",href:"https://www.quora.com/What-is-a-dependency-in-coding",target:"_blank",rel:"noopener"},"dependencies")," (other software that you rely upon) and the new versions no longer work (this is harder to debug)."))),(0,o.kt)("p",null,"This is a long list, and it is by no means complete. However, if you use the right tools and remember the most common causes, you can find the problem quickly."),(0,o.kt)("h2",{id:"analysis"},"Analysis"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/web-scraping-101",target:null,rel:null},"Web scraping")," and ",(0,o.kt)("a",{parentName:"p",href:"/platform/robotic-process-automation",target:null,rel:null},"automation")," are very specific types of programming. It is not possible to rely on specialized debugging tools, since the code does not output the same results every time."),(0,o.kt)("p",null,"Many issues are edge cases, which occur in just one of a thousand pages or are time-dependent. Because of this, you cannot rely only on ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deterministic_algorithm",target:"_blank",rel:"noopener"},"determinism"),"."),(0,o.kt)("h3",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Logging is an essential tool for any programmer. When used correctly, they help you capture a surprising amount of information."),(0,o.kt)("p",null,"Note that Apify logs are ",(0,o.kt)("a",{parentName:"p",href:"/platform/actors/limits",target:null,rel:null},"not infinite"),". If you see messages with skipped lines, consider toning down your logging."),(0,o.kt)("p",null,"General rules for logging:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Usually, ",(0,o.kt)("strong",{parentName:"p"},"many logs")," is better than ",(0,o.kt)("strong",{parentName:"p"},"no logs"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Putting more information into one line, rather than logging multiple short lines, helps reduce the overall log size.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Focus on numbers. Log how many items you extract from a page, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Structure your logs and use the same structure in all your logs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Append the current page's URL to each log. This lets you immediately open that page and review it."))),(0,o.kt)("h4",{id:"example-of-a-structured-log"},"Example of a structured log"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"[CATEGORY]: Products: 20, Unique products: 4, Next page: true --- https://apify.com/store\n")),(0,o.kt)("p",null,"The log begins with the ",(0,o.kt)("strong",{parentName:"p"},"page type"),". Usually, we use labels such as ",(0,o.kt)("strong",{parentName:"p"},"[CATEGORY]")," and ",(0,o.kt)("strong",{parentName:"p"},"[DETAIL]"),". Then, we log important numbers and other information. Finally, we add the page's URL, so we can check if the log is correct."),(0,o.kt)("h4",{id:"errors"},"Errors"),(0,o.kt)("p",null,"Errors require a different approach because, if your code crashes, your usual logs will not be called. Instead, exception handlers will print the error, but these are usually ugly messages with a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stack_trace",target:"_blank",rel:"noopener"},"stack trace")," that only Apify experts will understand."),(0,o.kt)("p",null,"You can overcome this by adding ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch",target:"_blank",rel:"noopener"},"try/catch blocks")," into your code. In the catch block, explain what happened and re-throw the error (so the request is automatically retried)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n    // Sensitive code block\n    // ...\n} catch (error) {\n    // You know where the code crashed so you can explain here\n    console.error('Request failed during login with an error:');\n    throw error;\n}\n")),(0,o.kt)("p",null,"Read more information about logging and error handling in our public wiki about ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/apify-public/wiki/-/wikis/writing-actors/how-to-write-and-not-write-an-actor",target:"_blank",rel:"noopener"},"developer best practices"),"."),(0,o.kt)("h3",{id:"saving-snapshots"},"Saving snapshots"),(0,o.kt)("p",null,"By snapshots, we mean ",(0,o.kt)("strong",{parentName:"p"},"screenshots")," if you use a ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js/docs/examples/capture-screenshot",target:"_blank",rel:"noopener"},"browser + Puppeteer/Playwright")," and ",(0,o.kt)("strong",{parentName:"p"},"HTML")," saved into a ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"key-value store")," that you can easily display in your browser. Snapshots are useful throughout your code but especially important in error handling."),(0,o.kt)("p",null,"Note that an error can happen only in a few pages out of a thousand and look completely random. There is not much you can do other than save and analyze a snapshot."),(0,o.kt)("p",null,"Snapshots can tell you if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A website has changed its layout. This can also mean A/B testing or different content for different locations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have been blocked \u2013 you open a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CAPTCHA",target:"_blank",rel:"noopener"},"CAPTCHA")," or ",(0,o.kt)("strong",{parentName:"p"},"Access Denied")," page.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Data load later dynamically \u2013 the page is empty.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The page was redirected \u2013 the content is different."))),(0,o.kt)("h4",{id:"how-to-save-a-snapshot"},"How to save a snapshot"),(0,o.kt)("p",null,"In Apify scrapers (",(0,o.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),"), ",(0,o.kt)("strong",{parentName:"p"},"Cheerio Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/cheerio-scraper",target:"_blank",rel:"noopener"},"apify/cheerio-scraper"),"), ",(0,o.kt)("strong",{parentName:"p"},"Playwright Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/playwright-scraper",target:"_blank",rel:"noopener"},"apify/playwright-scraper"),")) and ",(0,o.kt)("strong",{parentName:"p"},"Puppeteer Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/puppeteer-scraper",target:"_blank",rel:"noopener"},"apify/puppeteer-scraper"),")), you can use their built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"context.saveSnapshot()")," function. Once called, it saves a screenshot and HTML into the run's ",(0,o.kt)("strong",{parentName:"p"},"key-value store"),"."),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"building your own actors")," with ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev",target:"_blank",rel:"noopener"},"Puppeteer")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://docs-v2.apify.com/sdk-js",target:"_blank",rel:"noopener"},"Apify SDK")," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee")," packages, you can use the powerful ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/namespace/puppeteerUtils#saveSnapshot",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"puppeteerUtils.saveSnapshot()"))," function. It allows you to name the screenshot, so you can identify it later."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cheerio.js.org",target:"_blank",rel:"noopener"},"Cheerio"),"-based actors do not have a helper function because they allow taking snapshots with a single line of code. Just save the HTML with the correct content type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nconst html = $('html').html();\nawait Actor.setValue('SNAPSHOT', html, { contentType: 'text/html' });\n// ...\nawait Actor.exit();\n")),(0,o.kt)("h4",{id:"when-to-save-snapshots"},"When to save snapshots"),(0,o.kt)("p",null,"The most common approach is to save on error. We can enhance our previous try/catch block like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport { puppeteerUtils } from 'crawlee';\n\nawait Actor.init();\n// ...\n// storeId is ID of current key value store, where we save snapshots\nconst storeId = Actor.getEnv().defaultKeyValueStoreId;\ntry {\n    // Sensitive code block\n    // ...\n} catch (error) {\n    // Change the way you save it depending on what tool you use\n    const randomNumber = Math.random();\n    const key = `ERROR-LOGIN-${randomNumber}`;\n    await puppeteerUtils.saveSnapshot(page, { key });\n    const screenshotLink = `https://api.apify.com/v2/key-value-stores/${storeId}/records/${key}.jpg`\n\n    // You know where the code crashed so you can explain here\n    console.error(`Request failed during login with an error. Screenshot: ${screenshotLink}`);\n    throw error;\n}\n// ...\nawait Actor.exit();\n")),(0,o.kt)("p",null,"To make the error snapshot descriptive, we name it ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR-LOGIN"),". We add a random number so the next ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR-LOGIN"),"s would not overwrite this one and we can see all the snapshots. If you can use an ID of some sort, it is even better."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Beware"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The snapshot's ",(0,o.kt)("strong",{parentName:"p"},"name")," (key) can only contain letter, number, dot and dash characters. Other characters will cause an error, which makes the random number a safe pick.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not overdo the snapshots. Once you get out of the testing phase, limit them to critical places. Saving snapshots uses resources."))),(0,o.kt)("h3",{id:"error-reporting"},"Error reporting"),(0,o.kt)("p",null,"Logging and snapshotting are great tools but once you reach a certain run size, it may be hard to read through them all. For a large project, it is handy to create a more sophisticated reporting system. For example, let's just look at simple ",(0,o.kt)("strong",{parentName:"p"},"dataset")," reporting."),(0,o.kt)("p",null,"This example extends our ",(0,o.kt)("a",{parentName:"p",href:"#when-to-save-snapshots",target:null,rel:null},"previous snapshot solution")," by creating a ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage",target:null,rel:null},"named dataset")," (named datasets have infinite retention), where we will accumulate error reports. Those reports will explain what happened and will link to a saved snapshot, so we can do a quick visual check."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport { puppeteerUtils } from 'crawlee';\n\nawait Actor.init();\n// ...\n// Let's create reporting dataset\n// If you already have one, this will continue adding to it\nconst reportingDataset = await Actor.openDataset('REPORTING');\n\n// storeId is ID of current key-value store, where we save snapshots\nconst storeId = Actor.getEnv().defaultKeyValueStoreId;\n\n// We can also capture actor and run IDs\n// to have easy access in the reporting dataset\nconst { actorId, actorRunId } = Actor.getEnv();\nconst linkToRun = `https://console.apify.com/actors/actorId#/runs/actorRunId`;\n\ntry {\n    // Sensitive code block\n    // ...\n} catch (error) {\n    // Change the way you save it depending on what tool you use\n    const randomNumber = Math.random();\n    const key = `ERROR-LOGIN-${randomNumber}`;\n    await puppeteerUtils.saveSnapshot(page, { key });\n\n    const screenshotLink = `https://api.apify.com/v2/key-value-stores/${storeId}/records/${key}.jpg?disableRedirect=true`;\n\n    // We create a report object\n    const report = {\n        errorType: 'login',\n        errorMessage: error.toString(),\n\n        // You will have to adjust the keys if you save them in a non-standard way\n        htmlSnapshot: `https://api.apify.com/v2/key-value-stores/${storeId}/records/${key}.html?disableRedirect=true`,\n        screenshot: screenshotLink,\n        run: linkToRun,\n    };\n\n    // And we push the report\n    await reportingDataset.pushData(report);\n\n    // You know where the code crashed so you can explain here\n    console.error(\n        `Request failed during login with an error. Screenshot: ${screenshotLink}`\n    );\n    throw error;\n}\n// ...\nawait Actor.exit();\n")))}d.isMDXComponent=!0}}]);
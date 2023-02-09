"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Scraping with Web Scraper",menuTitle:"Web Scraper",description:"Learn how to scrape a website using Apify's Web Scraper. Build an actor's page function, extract information from a web page and download your data.",externalSourceUrl:"https://raw.githubusercontent.com/apifytech/actor-scraper/master/docs/build/web-scraper-tutorial.md",sidebar_position:2,slug:"/tutorials/apify-scrapers/web-scraper"},s=void 0,p={unversionedId:"tutorials/apify_scrapers/web_scraper",id:"tutorials/apify_scrapers/web_scraper",title:"Scraping with Web Scraper",description:"Learn how to scrape a website using Apify's Web Scraper. Build an actor's page function, extract information from a web page and download your data.",source:"@site/sources/platform/tutorials/apify_scrapers/web_scraper.md",sourceDirName:"tutorials/apify_scrapers",slug:"/tutorials/apify-scrapers/web-scraper",permalink:"/platform/tutorials/apify-scrapers/web-scraper",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/apify_scrapers/web_scraper.md",tags:[],version:"current",lastUpdatedBy:"Jan B\xe1rta",lastUpdatedAt:1675957009,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:2,frontMatter:{title:"Scraping with Web Scraper",menuTitle:"Web Scraper",description:"Learn how to scrape a website using Apify's Web Scraper. Build an actor's page function, extract information from a web page and download your data.",externalSourceUrl:"https://raw.githubusercontent.com/apifytech/actor-scraper/master/docs/build/web-scraper-tutorial.md",sidebar_position:2,slug:"/tutorials/apify-scrapers/web-scraper"},sidebar:"docs",previous:{title:"Getting started with Apify scrapers",permalink:"/platform/tutorials/apify-scrapers/getting-started"},next:{title:"Scraping with Cheerio Scraper",permalink:"/platform/tutorials/apify-scrapers/cheerio-scraper"}},u={},c=[{value:" Getting to know our tools",id:"-getting-to-know-our-tools",level:2},{value:" Building our Page function",id:"-building-our-page-function",level:2},{value:" Title",id:"-title",level:3},{value:" Description",id:"-description",level:3},{value:" Modified date",id:"-modified-date",level:3},{value:" Run count",id:"-run-count",level:3},{value:" Wrapping it up",id:"-wrapping-it-up",level:3},{value:" Test run",id:"-test-run",level:3},{value:" Pagination",id:"-pagination",level:2},{value:" Waiting for dynamic content",id:"-waiting-for-dynamic-content",level:3},{value:"The <code>context.waitFor()</code> function",id:"the-contextwaitfor-function",level:4},{value:" How to paginate",id:"-how-to-paginate",level:3},{value:"Waiting for the button",id:"waiting-for-the-button",level:4},{value:"Clicking the button",id:"clicking-the-button",level:4},{value:"Repeating the process",id:"repeating-the-process",level:4},{value:" Plugging it into the pageFunction",id:"-plugging-it-into-the-pagefunction",level:3},{value:" Downloading the scraped data",id:"-downloading-the-scraped-data",level:2},{value:" Clean items",id:"-clean-items",level:3},{value:" Bonus: Making your code neater",id:"-bonus-making-your-code-neater",level:2},{value:" Final word",id:"-final-word",level:2},{value:" What&#39;s next?",id:"-whats-next",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:""}),(0,o.kt)("p",null,"This scraping tutorial will go into the nitty gritty details of extracting data from ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"https://apify.com/store")),"\nusing ",(0,o.kt)("strong",{parentName:"p"},"Web Scraper")," (",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"apify/web-scraper"),"). If you arrived here from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/tutorials/apify-scrapers/getting-started",target:"_blank",rel:"noopener"},"Getting started with Apify scrapers"),",\ntutorial, great! You are ready to continue where we left off. If you haven't seen the Getting started yet,\ncheck it out, it will help you learn about Apify and scraping in general and set you up for this tutorial,\nbecause this one builds on topics and code examples discussed there."),(0,o.kt)("h2",{id:"-getting-to-know-our-tools"},(0,o.kt)("a",{parentName:"h2",href:"#getting-to-know-our-tools",target:null,rel:null})," Getting to know our tools"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/scraping/tutorial/introduction",target:"_blank",rel:"noopener"},"Getting started with Apify scrapers")," tutorial,\nwe've confirmed that the scraper works as expected, so now it's time to add more data to the results."),(0,o.kt)("p",null,"To do that, we'll be using the ",(0,o.kt)("a",{parentName:"p",href:"https://jquery.com/",target:"_blank",rel:"noopener"},"jQuery library"),", because it provides some nice tools\nand a lot of people familiar with JavaScript already know how to use it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://api.jquery.com/",target:"_blank",rel:"noopener"},"Check out the jQuery docs")," if you're not familiar with it. And if you just don't want to use it, that's okay. Everything can be done using pure JavaScript, too.")),(0,o.kt)("p",null,"To add jQuery, all we need to do is turn on ",(0,o.kt)("strong",{parentName:"p"},"Inject jQuery")," under the  ",(0,o.kt)("strong",{parentName:"p"},"Input and options")," tab.\nThis will add a ",(0,o.kt)("inlineCode",{parentName:"p"},"context.jQuery")," function that you can use."),(0,o.kt)("p",null,"Now that's out of the way, let's open one of the actor detail pages in the Store, for example\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/web-scraper",target:"_blank",rel:"noopener"},"Web Scraper")," page and use our DevTools-Fu to scrape some data."),(0,o.kt)("h2",{id:"-building-our-page-function"},(0,o.kt)("a",{parentName:"h2",href:"#building-our-page-function",target:null,rel:null})," Building our Page function"),(0,o.kt)("p",null,"Before we start, let's do a quick recap of the data we chose to scrape:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"URL")," - The URL that goes directly to the actor's detail page."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Unique identifier")," - Such as ",(0,o.kt)("strong",{parentName:"li"},"apify/web-scraper"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Title")," - The title visible in the actor's detail page."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Description")," - The actor's description."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Last modification date")," - When the actor was last modified."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Number of runs")," - How many times the actor was run.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apifytech/actor-scraper/master/docs/img/scraping-practice.webp",alt:"$1"})),(0,o.kt)("p",null,"We've already scraped number 1 and 2 in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/tutorials/apify-scrapers/getting-started",target:"_blank",rel:"noopener"},"Getting started with Apify scrapers"),"\ntutorial, so let's get to the next one on the list: title."),(0,o.kt)("h3",{id:"-title"},(0,o.kt)("a",{parentName:"h3",href:"#title",target:null,rel:null})," Title"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apifytech/actor-scraper/master/docs/img/title.webp",alt:"$1"})),(0,o.kt)("p",null,"By using the element selector tool, we find out that the title is there under an ",(0,o.kt)("inlineCode",{parentName:"p"},"<h1>")," tag, as titles should be.\nMaybe surprisingly, we find that there are actually two ",(0,o.kt)("inlineCode",{parentName:"p"},"<h1>")," tags on the detail page. This should get us thinking.\nIs there any parent element that includes our ",(0,o.kt)("inlineCode",{parentName:"p"},"<h1>")," tag, but not the other ones? Yes, there is! There is a ",(0,o.kt)("inlineCode",{parentName:"p"},"<header>"),"\nelement that we can use to select only the heading we're interested in."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Remember that you can press CTRL+F (CMD+F) in the Elements tab of DevTools to open the search bar where you can quickly search for elements using\ntheir selectors. And always make sure to use the DevTools to verify your scraping process and assumptions. It's faster than changing the crawler\ncode all the time.")),(0,o.kt)("p",null,"To get the title we just need to find it using a ",(0,o.kt)("inlineCode",{parentName:"p"},"header h1")," selector, which selects all ",(0,o.kt)("inlineCode",{parentName:"p"},"<h1>")," elements that have a ",(0,o.kt)("inlineCode",{parentName:"p"},"<header>")," ancestor.\nAnd as we already know, there's only one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Using jQuery.\nreturn {\n    title: $('header h1').text(),\n};\n")),(0,o.kt)("h3",{id:"-description"},(0,o.kt)("a",{parentName:"h3",href:"#description",target:null,rel:null})," Description"),(0,o.kt)("p",null,"Getting the actor's description is a little more involved, but still pretty straightforward. We can't just simply search for a ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>")," tag, because\nthere's a lot of them in the page. We need to narrow our search down a little. Using the DevTools we find that the actor description is nested within\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"<header>")," element too, same as the title. Moreover, the actual description is nested inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"<span>")," tag with a class ",(0,o.kt)("inlineCode",{parentName:"p"},"actor-description"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apifytech/actor-scraper/master/docs/img/description.webp",alt:"$1"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"return {\n    title: $('header h1').text(),\n    description: $('header span.actor-description').text(),\n};\n")),(0,o.kt)("h3",{id:"-modified-date"},(0,o.kt)("a",{parentName:"h3",href:"#modified-date",target:null,rel:null})," Modified date"),(0,o.kt)("p",null,"The DevTools tell us that the ",(0,o.kt)("inlineCode",{parentName:"p"},"modifiedDate")," can be found in a ",(0,o.kt)("inlineCode",{parentName:"p"},"<time>")," element."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apifytech/actor-scraper/master/docs/img/modified-date.webp",alt:"$1"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"return {\n    title: $('header h1').text(),\n    description: $('header span.actor-description').text(),\n    modifiedDate: new Date(\n        Number(\n            $('ul.ActorHeader-stats time').attr('datetime'),\n        ),\n    ),\n};\n")),(0,o.kt)("p",null,"It might look a little too complex at first glance, but let us walk you through it. We find all the ",(0,o.kt)("inlineCode",{parentName:"p"},"<time>")," elements. Then, we read its ",(0,o.kt)("inlineCode",{parentName:"p"},"datetime")," attribute, because that's where a unix timestamp is stored as a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,o.kt)("p",null,"But we would much rather see a readable date in our results, not a unix timestamp, so we need to convert it. Unfortunately the ",(0,o.kt)("inlineCode",{parentName:"p"},"new Date()"),"\nconstructor will not accept a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", so we cast the ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Number()")," function before actually calling ",(0,o.kt)("inlineCode",{parentName:"p"},"new Date()"),".\nPhew!"),(0,o.kt)("h3",{id:"-run-count"},(0,o.kt)("a",{parentName:"h3",href:"#run-count",target:null,rel:null})," Run count"),(0,o.kt)("p",null,"And so we're finishing up with the ",(0,o.kt)("inlineCode",{parentName:"p"},"runCount"),". There's no specific element like ",(0,o.kt)("inlineCode",{parentName:"p"},"<time>"),", so we need to create\na complex selector and then do a transformation on the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"return {\n    title: $('header h1').text(),\n    description: $('header span.actor-description').text(),\n    modifiedDate: new Date(\n        Number(\n            $('ul.ActorHeader-stats time').attr('datetime'),\n        ),\n    ),\n    runCount: Number(\n        $('ul.ActorHeader-stats > li:nth-of-type(3)')\n            .text()\n            .match(/[\\d,]+/)[0]\n            .replace(/,/g, ''),\n    ),\n};\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ul.ActorHeader-stats > li:nth-of-type(3)")," looks complicated, but it only reads that we're looking for a ",(0,o.kt)("inlineCode",{parentName:"p"},'<ul class="ActorHeader-stats ...">')," element and within that\nelement we're looking for the third ",(0,o.kt)("inlineCode",{parentName:"p"},"<li>")," element. We grab its text, but we're only interested in the number of runs. So we parse the number out\nusing a regular expression, but its type is still a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", so we finally convert the result to a ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," by wrapping it with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Number()")," call."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The numbers are formatted with commas as thousands separators (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"'1,234,567'"),"), so to extract it, we\nfirst use regular expression ",(0,o.kt)("inlineCode",{parentName:"p"},"/[\\d,]+/")," - it will search for consecutive number or comma characters.\nThen we extract the match via ",(0,o.kt)("inlineCode",{parentName:"p"},".match(/[\\d,]+/)[0]")," and finally remove all the commas by calling ",(0,o.kt)("inlineCode",{parentName:"p"},".replace(/,/g, '')"),".\nWe need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"/,/g")," with the global modifier to support large numbers with multiple separators, without it\nwe would replace only the very first occurrence."),(0,o.kt)("p",{parentName:"blockquote"},"This will give us a string (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"'1234567'"),") that can be converted via ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," function.")),(0,o.kt)("h3",{id:"-wrapping-it-up"},(0,o.kt)("a",{parentName:"h3",href:"#wrapping-it-up",target:null,rel:null})," Wrapping it up"),(0,o.kt)("p",null,"And there we have it! All the data we needed in a single object. For the sake of completeness, let's add\nthe properties we parsed from the URL earlier and we're good to go."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { url } = request;\n\n// ...\n\nconst uniqueIdentifier = url.split('/').slice(-2).join('/');\n\nreturn {\n    url,\n    uniqueIdentifier,\n    title: $('header h1').text(),\n    description: $('header span.actor-description').text(),\n    modifiedDate: new Date(\n        Number(\n            $('ul.ActorHeader-stats time').attr('datetime'),\n        ),\n    ),\n    runCount: Number(\n        $('ul.ActorHeader-stats > li:nth-of-type(3)')\n            .text()\n            .match(/[\\d,]+/)[0]\n            .replace(/,/g, ''),\n    ),\n};\n")),(0,o.kt)("p",null,"All we need to do now is add this to our ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function pageFunction(context) {\n    // use jQuery as $\n    const { request, log, skipLinks, jQuery: $ } = context;\n\n    if (request.userData.label === 'START') {\n        log.info('Store opened!');\n        // Do some stuff later.\n    }\n    if (request.userData.label === 'DETAIL') {\n        const { url } = request;\n        log.info(`Scraping ${url}`);\n        await skipLinks();\n\n        // Do some scraping.\n        const uniqueIdentifier = url\n            .split('/')\n            .slice(-2)\n            .join('/');\n\n        return {\n            url,\n            uniqueIdentifier,\n            title: $('header h1').text(),\n            description: $('header span.actor-description').text(),\n            modifiedDate: new Date(\n                Number(\n                    $('ul.ActorHeader-stats time').attr('datetime'),\n                ),\n            ),\n            runCount: Number(\n                $('ul.ActorHeader-stats > li:nth-of-type(3)')\n                    .text()\n                    .match(/[\\d,]+/)[0]\n                    .replace(/,/g, ''),\n            ),\n        };\n    }\n}\n")),(0,o.kt)("h3",{id:"-test-run"},(0,o.kt)("a",{parentName:"h3",href:"#test-run",target:null,rel:null})," Test run"),(0,o.kt)("p",null,"As always, try hitting that ",(0,o.kt)("strong",{parentName:"p"},"Save & Run")," button  and visit\nthe ",(0,o.kt)("strong",{parentName:"p"},"Dataset")," preview of clean items. You should see a nice table of all the attributes correctly scraped.\nYou nailed it!"),(0,o.kt)("h2",{id:"-pagination"},(0,o.kt)("a",{parentName:"h2",href:"#pagination",target:null,rel:null})," Pagination"),(0,o.kt)("p",null,'Pagination is just a term that represents "going to the next page of results". You may have noticed that we did not\nactually scrape all the actors, just the first page of results. That\'s because to load the rest of the actors,\none needs to click the ',(0,o.kt)("strong",{parentName:"p"},"Show more")," button at the very bottom of the list. This is pagination."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is a typical form of JavaScript pagination, sometimes called infinite scroll. Other pages may just use links\nthat take you to the next page. If you encounter those, just make a ",(0,o.kt)("strong",{parentName:"p"},"Pseudo URL")," for those links and they will\nbe automatically enqueued to the request queue. Use a label to let the scraper know what kind of URL it's processing.")),(0,o.kt)("h3",{id:"-waiting-for-dynamic-content"},(0,o.kt)("a",{parentName:"h3",href:"#waiting-for-dynamic-content",target:null,rel:null})," Waiting for dynamic content"),(0,o.kt)("p",null,"Before we talk about paginating, we need to have a quick look at dynamic content. Since Apify Store is a JavaScript\napplication (as many, if not most, modern websites are), the button might not exist in the page when the scraper\nruns the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,o.kt)("p",null,"How is this possible? Because the scraper only waits with executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," for the page to load its HTML.\nIf there's additional JavaScript that modifies the DOM afterwards, the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," may execute before this\nJavaScript had the time to run."),(0,o.kt)("p",null,"At first, you may think that the scraper is broken, but it just cannot wait for all the JavaScript in the page\nto finish executing. For a lot of pages, there's always some JavaScript executing or some network requests being made.\nIt would never stop waiting. It is therefore up to you, the programmer, to wait for the elements you need.\nFortunately, we have an easy solution."),(0,o.kt)("h4",{id:"the-contextwaitfor-function"},"The ",(0,o.kt)("inlineCode",{parentName:"h4"},"context.waitFor()")," function"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitFor()")," is a function that's available on the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," object passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," and helps you with,\nwell, waiting for stuff. It accepts either a number of milliseconds to wait, a selector to await in the page,\nor a function to execute. It will stop waiting once the time elapses, the selector appears or the provided function\nreturns ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Waits for 2 seconds.\nawait waitFor(2000);\n// Waits until an element with id "my-id" appears\n// in the page.\nawait waitFor(\'#my-id\');\n// Waits until a "myObject" variable appears\n// on the window object.\nawait waitFor(() => !!window.myObject);\n')),(0,o.kt)("p",null,"The selector may never be found and the function might never return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", so the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor()")," function also has\na timeout. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"20")," seconds. You can override it by providing an options object as the second parameter,\nwith a ",(0,o.kt)("inlineCode",{parentName:"p"},"timeoutMillis")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await waitFor('.bad-class', { timeoutMillis: 5000 });\n")),(0,o.kt)("p",null,"With those tools, you should be able to handle any dynamic content the website throws at you."),(0,o.kt)("h3",{id:"-how-to-paginate"},(0,o.kt)("a",{parentName:"h3",href:"#how-to-paginate",target:null,rel:null})," How to paginate"),(0,o.kt)("p",null,"With the theory out of the way, this should be pretty easy. The algorithm is a loop:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Wait for the ",(0,o.kt)("strong",{parentName:"li"},"Show more")," button."),(0,o.kt)("li",{parentName:"ol"},"Click it."),(0,o.kt)("li",{parentName:"ol"},"Is there another ",(0,o.kt)("strong",{parentName:"li"},"Show more")," button?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Yes? Repeat the above. (loop)"),(0,o.kt)("li",{parentName:"ul"},"No? We're done. We have all the actors.")))),(0,o.kt)("h4",{id:"waiting-for-the-button"},"Waiting for the button"),(0,o.kt)("p",null,"Before we can wait for the button, we need to know its unique selector. A quick look in the DevTools tells us\nthat the button's class is some weird randomly generated string, but fortunately, there's an enclosing ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>"),"\nwith a class of ",(0,o.kt)("inlineCode",{parentName:"p"},"show-more"),". Great! Our unique selector:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"div.show-more > button\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Don't forget to confirm our assumption in the DevTools finder tool (CTRL/CMD + F).")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apifytech/actor-scraper/master/docs/img/waiting-for-the-button.webp",alt:"$1"})),(0,o.kt)("p",null,"Now that we know what to wait for, we just plug it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor()")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await waitFor('div.show-more > button');\n")),(0,o.kt)("h4",{id:"clicking-the-button"},"Clicking the button"),(0,o.kt)("p",null,"We have a unique selector for the button and we know that it's already rendered in the page. Clicking it is a piece of cake. We'll use jQuery again, but feel free to use plain JavaScript, it works the same."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$('div.show-more > button').click()\n")),(0,o.kt)("p",null,"This will show the next page of actors."),(0,o.kt)("h4",{id:"repeating-the-process"},"Repeating the process"),(0,o.kt)("p",null,"We've shown two function calls, but how do we make this work together in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction"),"?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function pageFunction(context) {\n\n// ...\n\nlet timeoutMillis; // undefined\nconst buttonSelector = 'div.show-more > button';\nwhile (true) {\n    log.info('Waiting for the \"Show more\" button.');\n    try {\n        // Default timeout first time.\n        await waitFor(buttonSelector, { timeoutMillis });\n        // 2 sec timeout after the first.\n        timeoutMillis = 2000;\n    } catch (err) {\n        // Ignore the timeout error.\n        log.info('Could not find the \"Show more button\", '\n            + 'we\\'ve reached the end.');\n        break;\n    }\n    log.info('Clicking the \"Show more\" button.');\n    $(buttonSelector).click();\n}\n\n// ...\n\n}\n")),(0,o.kt)("p",null,"We want to run this until the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor()")," function throws, so that's why we use a ",(0,o.kt)("inlineCode",{parentName:"p"},"while(true)")," loop. We're also not\ninterested in the error, because we're expecting it, so we just ignore it and print a log message instead."),(0,o.kt)("p",null,"You might be wondering what's up with the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeoutMillis"),". Well, for the first page load, we want to wait longer,\nso that all the page's JavaScript has had a chance to execute, but for the other iterations, the JavaScript is\nalready loaded and we're just waiting for the page to re-render so waiting for ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," seconds is enough to confirm\nthat the button is not there. We don't want to stall the scraper for ",(0,o.kt)("inlineCode",{parentName:"p"},"20")," seconds just to make sure that there's\nno button."),(0,o.kt)("h3",{id:"-plugging-it-into-the-pagefunction"},(0,o.kt)("a",{parentName:"h3",href:"#plugging-it-into-the-page-function",target:null,rel:null})," Plugging it into the pageFunction"),(0,o.kt)("p",null,"We've got the general algorithm ready, so all that's left is to integrate it into our earlier ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction"),".\nRemember the ",(0,o.kt)("inlineCode",{parentName:"p"},"// Do some stuff later")," comment? Let's replace it. And don't forget to destructure the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor()"),"\nfunction on the first line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function pageFunction(context) {\n    const { request,\n        log,\n        skipLinks,\n        jQuery: $,\n        waitFor,\n    } = context;\n\n    if (request.userData.label === 'START') {\n        log.info('Store opened!');\n        let timeoutMillis; // undefined\n        const buttonSelector = 'div.show-more > button';\n        while (true) {\n            log.info('Waiting for the \"Show more\" button.');\n            try {\n                // Default timeout first time.\n                await waitFor(buttonSelector, { timeoutMillis });\n                // 2 sec timeout after the first.\n                timeoutMillis = 2000;\n            } catch (err) {\n                // Ignore the timeout error.\n                log.info('Could not find the \"Show more button\", '\n                    + 'we\\'ve reached the end.');\n                break;\n            }\n            log.info('Clicking the \"Show more\" button.');\n            $(buttonSelector).click();\n        }\n    }\n    if (request.userData.label === 'DETAIL') {\n        const { url } = request;\n        log.info(`Scraping ${url}`);\n        await skipLinks();\n\n        // Do some scraping.\n        const uniqueIdentifier = url\n            .split('/')\n            .slice(-2)\n            .join('/');\n\n        return {\n            url,\n            uniqueIdentifier,\n            title: $('header h1').text(),\n            description: $('header span.actor-description').text(),\n            modifiedDate: new Date(\n                Number(\n                    $('ul.ActorHeader-stats time').attr('datetime'),\n                ),\n            ),\n            runCount: Number(\n                $('ul.ActorHeader-stats > li:nth-of-type(3)')\n                    .text()\n                    .match(/[\\d,]+/)[0]\n                    .replace(/,/g, ''),\n            ),\n        };\n    }\n}\n")),(0,o.kt)("p",null,"That's it! You can now remove the ",(0,o.kt)("strong",{parentName:"p"},"Max pages per run")," limit, ",(0,o.kt)("strong",{parentName:"p"},"Save & Run")," your task and watch the scraper paginate\nthrough all the actors and then scrape all of their data. After it succeeds, open the ",(0,o.kt)("strong",{parentName:"p"},"Dataset")," tab again click on ",(0,o.kt)("strong",{parentName:"p"},"Preview"),". You should have a table of all the actor's details in front of you. If you do, great job!\nYou've successfully scraped Apify Store. And if not, no worries, just go through the code examples again,\nit's probably just some typo."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apifytech/actor-scraper/master/docs/img/plugging-it-into-the-pagefunction.webp",alt:"$1"})),(0,o.kt)("h2",{id:"-downloading-the-scraped-data"},(0,o.kt)("a",{parentName:"h2",href:"#downloading-our-scraped-data",target:null,rel:null})," Downloading the scraped data"),(0,o.kt)("p",null,"You already know the ",(0,o.kt)("strong",{parentName:"p"},"Dataset")," tab of the run console since this is where we've always previewed our data. Notice the row of data formats such as JSON, CSV, and Excel. Below it are options for viewing and downloading the data. Go ahead and try it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you prefer working with an API, you can find the example endpoint under the API tab: ",(0,o.kt)("strong",{parentName:"p"},"Get dataset items"),".")),(0,o.kt)("h3",{id:"-clean-items"},(0,o.kt)("a",{parentName:"h3",href:"#clean-items",target:null,rel:null})," Clean items"),(0,o.kt)("p",null,"You can view and download your data without modifications, or you can choose to only get ",(0,o.kt)("strong",{parentName:"p"},"clean")," items. Data that aren't cleaned include a record\nfor each ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," invocation, even if you did not return any results. The record also includes hidden fields\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"#debug"),", where you can find a variety of information that can help you with debugging your scrapers."),(0,o.kt)("p",null,"Clean items, on the other hand, include only the data you returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction"),". If you're only interested in the data you scraped, this format is what you will be using most of the time."),(0,o.kt)("p",null,"To control this, open the ",(0,o.kt)("strong",{parentName:"p"},"Advanced options")," view on the ",(0,o.kt)("strong",{parentName:"p"},"Dataset")," tab."),(0,o.kt)("h2",{id:"-bonus-making-your-code-neater"},(0,o.kt)("a",{parentName:"h2",href:"#bonus-making-your-code-neater",target:null,rel:null})," Bonus: Making your code neater"),(0,o.kt)("p",null,"You may have noticed that the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," gets quite bulky. To make better sense of your code and have an easier\ntime maintaining or extending your task, feel free to define other functions inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction"),"\nthat encapsulate all the different logic. You can, for example, define a function for each of the different pages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function pageFunction(context) {\n    switch (context.request.userData.label) {\n        case 'START': return handleStart(context);\n        case 'DETAIL': return handleDetail(context);\n    }\n\n    async function handleStart({ log, waitFor }) {\n        log.info('Store opened!');\n        let timeoutMillis; // undefined\n        const buttonSelector = 'div.show-more > button';\n        while (true) {\n            log.info('Waiting for the \"Show more\" button.');\n            try {\n                // Default timeout first time.\n                await waitFor(buttonSelector, { timeoutMillis });\n                // 2 sec timeout after the first.\n                timeoutMillis = 2000;\n            } catch (err) {\n                // Ignore the timeout error.\n                log.info('Could not find the \"Show more button\", '\n                    + 'we\\'ve reached the end.');\n                break;\n            }\n            log.info('Clicking the \"Show more\" button.');\n            $(buttonSelector).click();\n        }\n    }\n\n    async function handleDetail({\n        request,\n        log,\n        skipLinks,\n        jQuery: $,\n    }) {\n        const { url } = request;\n        log.info(`Scraping ${url}`);\n        await skipLinks();\n\n        // Do some scraping.\n        const uniqueIdentifier = url\n            .split('/')\n            .slice(-2)\n            .join('/');\n\n        return {\n            url,\n            uniqueIdentifier,\n            title: $('header h1').text(),\n            description: $('header span.actor-description').text(),\n            modifiedDate: new Date(\n                Number(\n                    $('ul.ActorHeader-stats time').attr('datetime'),\n                ),\n            ),\n            runCount: Number(\n                $('ul.ActorHeader-stats > li:nth-of-type(3)')\n                    .text()\n                    .match(/[\\d,]+/)[0]\n                    .replace(/,/g, ''),\n            ),\n        };\n    }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're confused by the functions being declared below their executions, it's called hoisting and it's a feature\nof JavaScript. It helps you put what matters on top, if you so desire.")),(0,o.kt)("h2",{id:"-final-word"},(0,o.kt)("a",{parentName:"h2",href:"#final-word",target:null,rel:null})," Final word"),(0,o.kt)("p",null,"Thank you for reading this whole tutorial! Really! It's important to us that our users have the best information available to them so that they can use Apify easily and effectively. We're glad that you made it all the way here and congratulations on creating your first scraping task. We hope that you liked the tutorial and if there's anything you'd like to ask, ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/jyEM2PRvMU",target:"_blank",rel:"noopener"},"join us on Discord"),"!"),(0,o.kt)("h2",{id:"-whats-next"},(0,o.kt)("a",{parentName:"h2",href:"#whats-next",target:null,rel:null})," What's next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check out the ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/",target:null,rel:null},"Apify SDK")," and its ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/docs/guides/getting-started",target:null,rel:null},"Getting started")," tutorial if you'd like to try building your own actors. It's a bit more complex and involved than writing a simple ",(0,o.kt)("inlineCode",{parentName:"li"},"pageFunction"),", but it allows you to fine-tune all the details of your scraper to your liking."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/actors",target:"_blank",rel:"noopener"},"Take a deep dive into actors"),", from how they work to ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/actors/publishing",target:"_blank",rel:"noopener"},"publishing")," them in Apify Store, and even ",(0,o.kt)("a",{parentName:"li",href:"https://blog.apify.com/make-regular-passive-income-developing-web-automation-actors-b0392278d085/",target:"_blank",rel:"noopener"},"making money")," on actors."),(0,o.kt)("li",{parentName:"ul"},"Found out you're not into the coding part but would still to use Apify actors? Check out our ",(0,o.kt)("a",{parentName:"li",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"ready-made solutions")," or ",(0,o.kt)("a",{parentName:"li",href:"https://apify.com/custom-solutions",target:"_blank",rel:"noopener"},"order a custom actor")," from an Apify-certified developer.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to scrape a website using Apify's Web Scraper. Build an actor's page function, extract information from a web page and download your data.")),(0,o.kt)("hr",null))}h.isMDXComponent=!0}}]);
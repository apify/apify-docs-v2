"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),g=r,m=h["".concat(l,".").concat(g)]||h[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Handling pagination",description:"Learn about the three most popular API pagination techniques and how to handle each of them when scraping an API with pagination.",sidebar_position:3,slug:"/api-scraping/general-api-scraping/handling-pagination"},l="[](#handling-pagination) Handling pagination",p={unversionedId:"api_scraping/general_api_scraping/handling_pagination",id:"api_scraping/general_api_scraping/handling_pagination",title:"Handling pagination",description:"Learn about the three most popular API pagination techniques and how to handle each of them when scraping an API with pagination.",source:"@site/sources/academy/api_scraping/general_api_scraping/handling_pagination.md",sourceDirName:"api_scraping/general_api_scraping",slug:"/api-scraping/general-api-scraping/handling-pagination",permalink:"/academy/api-scraping/general-api-scraping/handling-pagination",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673462481,formattedLastUpdatedAt:"Jan 11, 2023",sidebarPosition:3,frontMatter:{title:"Handling pagination",description:"Learn about the three most popular API pagination techniques and how to handle each of them when scraping an API with pagination.",sidebar_position:3,slug:"/api-scraping/general-api-scraping/handling-pagination"},sidebar:"defaultSidebar",previous:{title:"Cookies, headers, and tokens",permalink:"/academy/api-scraping/general-api-scraping/cookies-headers-tokens"},next:{title:"GraphQL scraping",permalink:"/academy/api-scraping/graphql-scraping"}},c={},u=[{value:" Page-number pagination",id:"-page-number-pagination",level:2},{value:" Offset pagination",id:"-offset-pagination",level:2},{value:" Cursor pagination",id:"-cursor-pagination",level:2},{value:" Using &quot;next page&quot;",id:"-using-next-page",level:2},{value:" Mini project",id:"-mini-project",level:2},{value:" Final note",id:"-final-note",level:2},{value:" Next up",id:"-next-up",level:2}],h={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-handling-pagination"},(0,i.kt)("a",{parentName:"h1",href:"#handling-pagination",target:null,rel:null})," Handling pagination"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about the three most popular API pagination techniques and how to handle each of them when scraping an API with pagination.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"When scraping large APIs, you'll quickly realize that most APIs limit the number of results it responds back with. For some APIs, the max number of results is 5, while for others it's 2000. Either way, they all have something in common - pagination."),(0,i.kt)("p",null,"If you've never dealt with it before, trying to scrape thousands to hundreds of thousands of items from an API with pagination can be a bit challenging. In this lesson, we'll be discussing a few of the different types of pagination, as well as how to work with them."),(0,i.kt)("h2",{id:"-page-number-pagination"},(0,i.kt)("a",{parentName:"h2",href:"#page-number",target:null,rel:null})," Page-number pagination"),(0,i.kt)("p",null,"The most common and rudimentary form of pagination is by simply having page numbers, which can be compared to paginating through a typical e-commerce website."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://apify-docs.s3.amazonaws.com/master/docs/assets/tutorials/images/pagination.webp",alt:"Amazon pagination"})),(0,i.kt)("p",null,"This implementation makes it fairly straightforward to programmatically paginate through an API, as it pretty much entails just incrementing up or down in order to receive the next set of items. The page number is usually provided right in the parameters of the request URL; however, some APIs require it to be provided in the request body instead."),(0,i.kt)("h2",{id:"-offset-pagination"},(0,i.kt)("a",{parentName:"h2",href:"#offset-pagination",target:null,rel:null})," Offset pagination"),(0,i.kt)("p",null,"The second most popular pagination technique used is based on using a ",(0,i.kt)("strong",{parentName:"p"},"limit")," parameter along with an ",(0,i.kt)("strong",{parentName:"p"},"offset")," parameter. The ",(0,i.kt)("strong",{parentName:"p"},"limit")," says how many records should be returned in a single request, while the ",(0,i.kt)("strong",{parentName:"p"},"offset")," parameter says how many records should be skipped."),(0,i.kt)("p",null,"For example, let's say that we have this dataset and an API route to retrieve its items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const myAwesomeDataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\n")),(0,i.kt)("p",null,"If we were to make a request with the ",(0,i.kt)("strong",{parentName:"p"},"limit")," set to ",(0,i.kt)("strong",{parentName:"p"},"5")," and the ",(0,i.kt)("strong",{parentName:"p"},"offset")," parameter also set to ",(0,i.kt)("strong",{parentName:"p"},"5"),", the API would skip over the first five items and return ",(0,i.kt)("inlineCode",{parentName:"p"},"[6, 7, 8, 9, 10]"),"."),(0,i.kt)("h2",{id:"-cursor-pagination"},(0,i.kt)("a",{parentName:"h2",href:"#cursor-pagination",target:null,rel:null})," Cursor pagination"),(0,i.kt)("p",null,"Becoming more and more common is cursor-based pagination. Like with offset-based pagination, a ",(0,i.kt)("strong",{parentName:"p"},"limit")," parameter is usually present; however, instead of ",(0,i.kt)("strong",{parentName:"p"},"offset"),", ",(0,i.kt)("strong",{parentName:"p"},"cursor")," is used instead. A cursor is just a marker (sometimes a token, a date, or just a number) for an item in the dataset. All results returned back from the API will be records that come after the item matching the ",(0,i.kt)("strong",{parentName:"p"},"cursor")," parameter provided."),(0,i.kt)("p",null,"One of the most painful things about scraping APIs with cursor pagination is that you can't skip to, for example, the 5th page. You have to paginate through each page one by one."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: SoundCloud ",(0,i.kt)("a",{parentName:"p",href:"https://developers.soundcloud.com/blog/pagination-updates-on-our-api",target:"_blank",rel:"noopener"},"migrated")," over to using cursor-based pagination; however, they did not change the parameter name from ",(0,i.kt)("strong",{parentName:"p"},"offset")," to ",(0,i.kt)("strong",{parentName:"p"},"cursor"),". Always be on the lookout for this type of stuff!")),(0,i.kt)("h2",{id:"-using-next-page"},(0,i.kt)("a",{parentName:"h2",href:"#using-next-page",target:null,rel:null}),' Using "next page"'),(0,i.kt)("p",null,"In a minute, we're going to create a mini-project which will scrape the first 100 of Ti\xebsto's tracks by keeping a ",(0,i.kt)("strong",{parentName:"p"},"limit")," of 20 and paginating through until we've scraped 100 items."),(0,i.kt)("p",null,"Luckily for us, SoundCloud's API (and many others) provides a ",(0,i.kt)("strong",{parentName:"p"},"next_href")," property in each response, which means we don't have to directly deal with setting the ",(0,i.kt)("strong",{parentName:"p"},"offset")," (cursor) parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'//...\n{\n    "next_href": "https://api-v2.soundcloud.com/users/141707/tracks?offset=2020-03-13T00%3A00%3A00.000Z%2Ctracks%2C00774168919&limit=20&representation=https%3A%2F%2Fapi-v2.soundcloud.com%2Fusers%2F141707%2Ftracks%3Flimit%3D20",\n    "query_urn": null\n}\n')),(0,i.kt)("p",null,"This URL can take various different forms, and can be given different names; however, they all generally do the same thing - bring you to the next page of results."),(0,i.kt)("h2",{id:"-mini-project"},(0,i.kt)("a",{parentName:"h2",href:"#mini-project",target:null,rel:null})," Mini project"),(0,i.kt)("p",null,"First, create a new folder called ",(0,i.kt)("strong",{parentName:"p"},"pagination-tutorial")," and run this command inside of it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize the project and install the puppeteer\n# and got-scraping packages\nnpm init -y && npm i puppeteer got-scraping\n")),(0,i.kt)("p",null,"Now, make a new file called ",(0,i.kt)("strong",{parentName:"p"},"scrapeClientId"),", copying the ",(0,i.kt)("strong",{parentName:"p"},"client_id")," scraping code from the previous lesson and making a slight modification:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// scrapeClientId.js\nconst puppeteer = require('puppeteer');\n\nconst scrapeClientId = async () => {\n    const browser = await puppeteer.launch({ headless: true });\n    const page = await browser.newPage();\n\n    let clientId = null;\n\n    page.on('response', async (res) => {\n        const id = new URL(res._url).searchParams.get('client_id') ?? null;\n        if (id) clientId = id;\n    });\n\n    await page.goto('https://soundcloud.com/tiesto/tracks');\n    await page.waitForSelector('.sc-classic');\n    await browser.close();\n\n    // return the client_id\n    return clientId;\n};\n\n// export the function to be used in a different file\nmodule.exports = scrapeClientId;\n")),(0,i.kt)("p",null,"Now, in a new file called ",(0,i.kt)("strong",{parentName:"p"},"index.js")," we'll write the skeleton for our pagination and item-scraping code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nconst scrapeClientId = require('./scrapeClientId');\n// we will need gotScraping to make HTTP requests\nconst { gotScraping } = require('got-scraping');\n\nconst scrape100Items = async () => {\n    // the initial request URL\n    let nextHref = 'https://api-v2.soundcloud.com/users/141707/tracks?limit=20&offset=0';\n\n    // create an array for all of our scraped items to live\n    let items = [];\n\n    // scrape the client ID with the script from the\n    // previous lesson\n    const clientId = await scrapeClientId();\n\n    // More code will go here\n};\n")),(0,i.kt)("p",null,"Let's now take a step back and think about the condition on which we should continue paginating:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the API responds with a ",(0,i.kt)("strong",{parentName:"li"},"next_href")," set to ",(0,i.kt)("strong",{parentName:"li"},"null"),", that means that there are no more pages, and that we have scraped all of the possible items and we should stop paginating."),(0,i.kt)("li",{parentName:"ol"},"If our items list has 100 records or more, we should stop paginating. Otherwise, we should continue until 100+ items has been reached.")),(0,i.kt)("p",null,"With a full understanding of this condition, we can translate it into code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// continue making requests until either we've reached 100+ items\nwhile (items.flat().length < 100) {\n    // if the \"next_href\" wasn't present in the last call, there\n    // are no more pages. return what we have and stop paginating.\n    if (!nextHref) return items.flat();\n\n    // continue paginating\n}\n")),(0,i.kt)("p",null,"All that's left to do now is flesh out this ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop with pagination logic and finally return the ",(0,i.kt)("strong",{parentName:"p"},"items")," array once the loop has finished."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that it's better to add requests to a requests queue rather than processing them in memory. The crawlers offered by ",(0,i.kt)("a",{parentName:"p",href:"https://crawlee.dev/docs/",target:"_blank",rel:"noopener"},"Crawlee")," provide this functionality out of the box.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nconst scrapeClientId = require('./scrapeClientId');\nconst { gotScraping } = require('got-scraping');\n\nconst scrape100Items = async () => {\n    let nextHref = 'https://api-v2.soundcloud.com/users/141707/tracks?limit=20&offset=0';\n    let items = [];\n\n    const clientId = await scrapeClientId();\n\n    while (items.flat().length < 100) {\n        if (!nextHref) return items.flat();\n\n        // set the \"client_id\" URL parameter of the\n        // nextHref URL\n        const nextURL = new URL(nextHref);\n        nextURL.searchParams.set('client_id', clientId);\n\n        // make the paginated request and push its results\n        // into the in-memory \"items\" array\n        const res = await gotScraping(nextURL);\n        const json = JSON.parse(res.body);\n        items.push(json.collection);\n\n        // queue the next link for the next loop iteration\n        nextHref = json.next_href;\n    }\n\n    // return an array of all our scraped items\n    // once the loop has finished\n    return items.flat();\n};\n\n// test run\n(async () => {\n    // run the function\n    const data = await scrape100Items();\n\n    // log the length of the items array\n    console.log(data.length);\n})();\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We are using the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},".flat()"))," method when returning the ",(0,i.kt)("strong",{parentName:"p"},"items")," array to turn our array of arrays into a single array of items.")),(0,i.kt)("p",null,"Here's what the output of this code looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"105\n")),(0,i.kt)("h2",{id:"-final-note"},(0,i.kt)("a",{parentName:"h2",href:"#final-note",target:null,rel:null})," Final note"),(0,i.kt)("p",null,"Sometimes, APIs have limited pagination. That means that they limit the total number of results that can appear for a set of pages, or that they limit the pages to a certain number. To learn how to handle these cases, take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/tutorials/scrape-paginated-sites",target:"_blank",rel:"noopener"},"this short article"),"."),(0,i.kt)("h2",{id:"-next-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,i.kt)("p",null,"This is the last lesson in the API scraping tutorial for now, but be on the lookout for more lessons soon to come! So far, you've learned how to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Locate API endpoints"),(0,i.kt)("li",{parentName:"ol"},"Understand located API endpoints and their parameters"),(0,i.kt)("li",{parentName:"ol"},"Parse and modify cookies"),(0,i.kt)("li",{parentName:"ol"},"Modify/set headers"),(0,i.kt)("li",{parentName:"ol"},"Farm API tokens using Puppeteer"),(0,i.kt)("li",{parentName:"ol"},"Use paginated APIs")),(0,i.kt)("p",null,"If you'd still like to read more API scraping, check out the ",(0,i.kt)("a",{parentName:"p",href:"/academy/api-scraping/graphql-scraping",target:null,rel:null},(0,i.kt)("strong",{parentName:"a"},"GraphQL scraping"))," course! GraphQL is the king of API scraping."))}g.isMDXComponent=!0}}]);
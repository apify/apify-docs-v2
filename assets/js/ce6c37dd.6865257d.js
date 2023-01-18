"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[7176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={title:"Running a web server on the Apify platform",description:"A web server running in an actor can act as a communication channel with the outside world. Learn how to easily set one up with Node.js.",sidebar_position:11,category:"apify platform",slug:"/running-a-web-server"},i="Running a web server on the Apify platform",p={unversionedId:"platform/running_a_web_server",id:"platform/running_a_web_server",title:"Running a web server on the Apify platform",description:"A web server running in an actor can act as a communication channel with the outside world. Learn how to easily set one up with Node.js.",source:"@site/sources/academy/platform/running_a_web_server.md",sourceDirName:"platform",slug:"/running-a-web-server",permalink:"/academy/running-a-web-server",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1674042341,formattedLastUpdatedAt:"Jan 18, 2023",sidebarPosition:11,frontMatter:{title:"Running a web server on the Apify platform",description:"A web server running in an actor can act as a communication channel with the outside world. Learn how to easily set one up with Node.js.",sidebar_position:11,category:"apify platform",slug:"/running-a-web-server"},sidebar:"academy",previous:{title:"Monetizing your actor",permalink:"/academy/get-most-of-actors/monetizing-your-actor"},next:{title:"Expert scraping with Apify",permalink:"/academy/expert-scraping-with-apify"}},c={},u=[{value:"Building the actor",id:"building-the-actor",level:2},{value:"Final code",id:"final-code",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-web-server-on-the-apify-platform"},"Running a web server on the Apify platform"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A web server running in an actor can act as a communication channel with the outside world. Learn how to easily set one up with Node.js.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Sometimes, an actor needs a channel for communication with other systems (or humans). This channel might be used to receive commands, to provide info about progress, or both. To implement this, we will run a HTTP web server inside the actor that will provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An API to receive commands."),(0,o.kt)("li",{parentName:"ul"},"An HTML page displaying output data.")),(0,o.kt)("p",null,"Running a web server in an actor is a piece of cake! Each actor run is available at a unique URL (container URL) which always takes the form ",(0,o.kt)("inlineCode",{parentName:"p"},"https://CONTAINER-KEY.runs.apify.net"),". This URL is available in the ",(0,o.kt)("a",{parentName:"p",href:"/api/v2#/reference/actor-runs/run-object-and-its-storages/get-run",target:null,rel:null},(0,o.kt)("strong",{parentName:"a"},"actor run")," object")," returned by the Apify API, as well as in the Apify console."),(0,o.kt)("p",null,"If you start a web server on the port defined by the ",(0,o.kt)("strong",{parentName:"p"},"APIFY_CONTAINER_PORT")," environment variable (the default value is ",(0,o.kt)("strong",{parentName:"p"},"4321"),"), the container URL becomes available and gets displayed in the ",(0,o.kt)("strong",{parentName:"p"},"Live View")," tab in the actor run console."),(0,o.kt)("p",null,"For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/actor/run#container-web-server",target:"_blank",rel:"noopener"},"the documentation"),"."),(0,o.kt)("h2",{id:"building-the-actor"},"Building the actor"),(0,o.kt)("p",null,"Let's try to build the following actor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The actor will provide an API to receive URLs to be processed."),(0,o.kt)("li",{parentName:"ul"},"For each URL, the actor will create a screenshot."),(0,o.kt)("li",{parentName:"ul"},"The screenshot will be stored in the key-value store."),(0,o.kt)("li",{parentName:"ul"},"The actor will provide a web page displaying thumbnails linked to screenshots and a HTML form to submit new URLs.")),(0,o.kt)("p",null,"To achieve this we will use the following technologies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com",target:"_blank",rel:"noopener"},"Express.js")," framework to create the server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pptr.dev",target:"_blank",rel:"noopener"},"Puppeteer")," to grab screenshots."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com",target:null,rel:null},"Apify SDK")," to access Apify storages to store the screenshots.")),(0,o.kt)("p",null,"Our server needs two paths:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/")," - Index path will display a page form to submit a new URL and the thumbnails of processed URLs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/add-url")," - Will provide an API to add new URLs using a HTTP POST request.")),(0,o.kt)("p",null,"First, we'll import ",(0,o.kt)("inlineCode",{parentName:"p"},"express")," and create an Express.js app. Then, we'll add some middleware that will allow us to receive form submissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\nimport express from 'express';\n\nconst app = express()\n\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n")),(0,o.kt)("p",null,"Now we need to read the following environment variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"APIFY_CONTAINER_PORT")," contains a port number where we must start the server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"APIFY_CONTAINER_URL")," contains a URL under which we can access the container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"APIFY_DEFAULT_KEY_VALUE_STORE_ID")," is simply the ID of the default key-value store of this actor where we can store screenshots.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { \n    APIFY_CONTAINER_PORT, \n    APIFY_CONTAINER_URL, \n    APIFY_DEFAULT_KEY_VALUE_STORE_ID,\n} = process.env;\n")),(0,o.kt)("p",null,"Next, we'll create an array of the processed URLs where the ",(0,o.kt)("strong",{parentName:"p"},"n"),"th URL has its screenshot stored under the key ",(0,o.kt)("strong",{parentName:"p"},"n"),".jpg in the key-value store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const processedUrls = [];\n")),(0,o.kt)("p",null,"After that, the index route is ready to be defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'app.get(\'/\', (req, res) => {\n    let listItems = \'\';\n\n    // For each of the processed\n    processedUrls.forEach((url, index) => {\n        const imageUrl = `https://api.apify.com/v2/key-value-stores/${APIFY_DEFAULT_KEY_VALUE_STORE_ID}/records/${index}.jpg`;\n\n        // Display the screenshots below the form\n        listItems += `<li>\n    <a href="${imageUrl}" target="_blank">\n        <img src="${imageUrl}" width="300px" />\n        <br />\n        ${url}\n    </a>\n</li>`;\n    });\n\n    const pageHtml = `<html>\n    <head><title>Example</title></head>\n    <body>\n        <form method="POST" action="${APIFY_CONTAINER_URL}/add-url">\n            URL: <input type="text" name="url" placeholder="http://example.com" />\n            <input type="submit" value="Add" />\n            <hr />\n            <ul>${listItems}</ul>\n        </form>\n    </body>\n</html>`;\n\n    res.send(pageHtml);\n});\n')),(0,o.kt)("p",null,"And then the a second path that receives the new URL submitted using the HTML form; after the URL is processed, it redirects the user back to the root path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/add-url', async (req, res) => {\n    const { url } = req.body;\n    console.log(`Got new URL: ${url}`);\n\n    // Start chrome browser and open new page ...\n    const browser = await Actor.launchPuppeteer();\n    const page = await browser.newPage();\n\n    // ... go to our URL and grab a screenshot ...\n    await page.goto(url);\n    const screenshot = await page.screenshot({ type: 'jpeg' });\n\n    // ... close browser ...\n    await page.close();\n    await browser.close(); \n\n    // ... save screenshot to key-value store and add URL to processedUrls.\n    await Actor.setValue(`${processedUrls.length}.jpg`, screenshot, { contentType: 'image/jpeg' });\n    processedUrls.push(url);\n\n    res.redirect('/');\n});\n")),(0,o.kt)("p",null,"And finally we need to start the web server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Start the web server!\napp.listen(APIFY_CONTAINER_PORT, () => {\n    console.log(`Application is listening at URL ${APIFY_CONTAINER_URL}.`);\n});\n")),(0,o.kt)("h3",{id:"final-code"},"Final code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Actor } from \'apify\';\nimport express from \'express\';\n\nconst app = express()\n\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\nconst {\n    APIFY_CONTAINER_PORT,\n    APIFY_CONTAINER_URL,\n    APIFY_DEFAULT_KEY_VALUE_STORE_ID,\n} = process.env;\n\nconst processedUrls = [];\n\napp.get(\'/\', (req, res) => {\n    let listItems = \'\';\n\n    // For each of the processed\n    processedUrls.forEach((url, index) => {\n        const imageUrl = `https://api.apify.com/v2/key-value-stores/${APIFY_DEFAULT_KEY_VALUE_STORE_ID}/records/${index}.jpg`;\n\n        // Display the screenshots below the form\n        listItems += `<li>\n    <a href="${imageUrl}" target="_blank">\n        <img src="${imageUrl}" width="300px" />\n        <br />\n        ${url}\n    </a>\n</li>`;\n    });\n\n    const pageHtml = `<html>\n    <head><title>Example</title></head>\n    <body>\n        <form method="POST" action="${APIFY_CONTAINER_URL}/add-url">\n            URL: <input type="text" name="url" placeholder="http://example.com" />\n            <input type="submit" value="Add" />\n            <hr />\n            <ul>${listItems}</ul>\n        </form>\n    </body>\n</html>`;\n\n    res.send(pageHtml);\n});\n\napp.post(\'/add-url\', async (req, res) => {\n    const { url } = req.body;\n    console.log(`Got new URL: ${url}`);\n\n    // Start chrome browser and open new page ...\n    const browser = await Apify.launchPuppeteer();\n    const page = await browser.newPage();\n\n    // ... go to our URL and grab a screenshot ...\n    await page.goto(url);\n    const screenshot = await page.screenshot({ type: \'jpeg\' });\n\n    // ... close browser ...\n    await page.close();\n    await browser.close(); \n\n    // ... save screenshot to key-value store and add URL to processedUrls.\n    await Apify.setValue(`${processedUrls.length}.jpg`, screenshot, { contentType: \'image/jpeg\' });\n    processedUrls.push(url);\n\n    res.redirect(\'/\');\n});\n\napp.listen(APIFY_CONTAINER_PORT, () => {\n    console.log(`Application is listening at URL ${APIFY_CONTAINER_URL}.`);\n});\n')),(0,o.kt)("p",null,"When we deploy and run this actor on the Apify platform, then we can open the ",(0,o.kt)("strong",{parentName:"p"},"Live View")," tab in the actor console to submit the URL to your actor through the form. After the URL is successfully submitted, it appears in the actor log."),(0,o.kt)("p",null,"With that we're done! And our application works like a charm :)"),(0,o.kt)("p",null,"The complete code of this actor is available ",(0,o.kt)("a",{parentName:"p",href:"https://www.apify.com/apify/example-web-server",target:"_blank",rel:"noopener"},"here"),". You can run it there or copy it to your account."))}h.isMDXComponent=!0}}]);
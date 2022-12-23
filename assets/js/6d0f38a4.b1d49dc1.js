"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2517],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"I - Integrating webhooks",description:"Learn how to integrate webhooks into your actors. Webhooks are a super powerful tool, and can be used to do almost anything!",sidebar_position:1,slug:"/expert-scraping-with-apify/solutions/integrating-webhooks"},l="[](#integrating-webhooks) Integrating webhooks",c={unversionedId:"expert_scraping_with_apify/solutions/integrating_webhooks",id:"expert_scraping_with_apify/solutions/integrating_webhooks",title:"I - Integrating webhooks",description:"Learn how to integrate webhooks into your actors. Webhooks are a super powerful tool, and can be used to do almost anything!",source:"@site/sources/academy/expert_scraping_with_apify/solutions/integrating_webhooks.md",sourceDirName:"expert_scraping_with_apify/solutions",slug:"/expert-scraping-with-apify/solutions/integrating-webhooks",permalink:"/academy/expert-scraping-with-apify/solutions/integrating-webhooks",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671803343,formattedLastUpdatedAt:"Dec 23, 2022",sidebarPosition:1,frontMatter:{title:"I - Integrating webhooks",description:"Learn how to integrate webhooks into your actors. Webhooks are a super powerful tool, and can be used to do almost anything!",sidebar_position:1,slug:"/expert-scraping-with-apify/solutions/integrating-webhooks"},sidebar:"defaultSidebar",previous:{title:"Solutions",permalink:"/academy/expert-scraping-with-apify/solutions"},next:{title:"II - Managing source",permalink:"/academy/expert-scraping-with-apify/solutions/managing-source"}},p={},u=[{value:" Building the new actor",id:"-building-the-new-actor",level:2},{value:" Setting up the webhook",id:"-setting-up-the-webhook",level:2},{value:" Making sure it worked",id:"-making-sure-it-worked",level:2},{value:" Quiz answers \ud83d\udcdd",id:"-quiz-answers-",level:2},{value:" Wrap up",id:"-wrap-up",level:2}],h={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-integrating-webhooks"},(0,o.kt)("a",{parentName:"h1",href:"#integrating-webhooks",target:null,rel:null})," Integrating webhooks"),(0,o.kt)("p",null,"In this lesson we'll be writing a new actor and integrating it with our beloved Amazon scraping actor. First, we'll navigate to the same directory our ",(0,o.kt)("strong",{parentName:"p"},"demo-actor")," folder lives, and run ",(0,o.kt)("inlineCode",{parentName:"p"},"apify create filter-actor")," ",(0,o.kt)("em",{parentName:"p"},"(once again, you can name the actor whatever you want, but for this lesson, we'll be calling the new actor ",(0,o.kt)("strong",{parentName:"em"},"filter-actor"),")"),". When prompted for which type of boilerplate to start out with, select ",(0,o.kt)("strong",{parentName:"p"},"Empty"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Selecting an empty template to start with",src:a(33440).Z,width:"1128",height:"290"})),(0,o.kt)("p",null,"Cool! Now, we're ready to get started."),(0,o.kt)("h2",{id:"-building-the-new-actor"},(0,o.kt)("a",{parentName:"h2",href:"#building-the-new-actor",target:null,rel:null})," Building the new actor"),(0,o.kt)("p",null,"First of all, we should clear out any of the boilerplate code within ",(0,o.kt)("strong",{parentName:"p"},"main.js")," to get a clean slate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nimport { Actor } from 'apify';\n\nawait Actor.init();\n\n// ...\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,"We'll be passing the ID of the Amazon actor's default dataset along to the new actor, so we can expect that as an input:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { datasetId } = await Actor.getInput();\nconst dataset = await Actor.openDataset(datasetId);\n// ...\n")),(0,o.kt)("p",null,"Next, we'll grab hold of the dataset's items with the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset.getData()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { items } = await dataset.getData();\n")),(0,o.kt)("p",null,"There are a few different methods that can be used to achieve the goal output of this actor, but using the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Array.reduce()"))," is the most concise:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const filtered = items.reduce((acc, curr) => {\n    // Grab the price of the item matching our current\n    // item's ASIN in the map. If it doesn't exist, set\n    // \"prevPrice\" to null\n    const prevPrice = acc?.[curr.asin] ? +acc[curr.asin].offer.slice(1) : null;\n\n    // Grab the price of our current offer\n    const price = +curr.offer.slice(1);\n\n    // If the item doesn't yet exist in the map, add it.\n    // Or, if the current offer's price is less than the\n    // saved one, replace the saved one\n    if (!acc[curr.asin] || prevPrice > price) acc[curr.asin] = curr;\n\n    // Return the map\n    return acc;\n}, {});\n")),(0,o.kt)("p",null,"The results should be an array, so finally, we can take the map we just created and push an array of all of its values to the actor's default dataset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await Actor.pushData(Object.values(filtered));\n")),(0,o.kt)("p",null,"Our final code looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n\nconst { datasetId } = await Actor.getInput();\nconst dataset = await Actor.openDataset(datasetId);\n\nconst { items } = await dataset.getData();\n\nconst filtered = items.reduce((acc, curr) => {\n    const prevPrice = acc?.[curr.asin] ? +acc[curr.asin].offer.slice(1) : null;\n    const price = +curr.offer.slice(1);\n\n    if (!acc[curr.asin] || prevPrice > price) acc[curr.asin] = curr;\n\n    return acc;\n}, {});\n\nawait Actor.pushData(Object.values(filtered));\n\nawait Actor.exit();\n")),(0,o.kt)("p",null,"Cool! But ",(0,o.kt)("strong",{parentName:"p"},"wait"),", don't forget to configure the ",(0,o.kt)("strong",{parentName:"p"},"INPUT_SCHEMA.json")," file as well! It's not necessary to do this step, as we'll be calling the actor through Apify's API within a webhook, but it's still good to get into the habit of writing quality input schemas that describe the input values your actors are expecting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Amazon Filter Actor",\n    "type": "object",\n    "schemaVersion": 1,\n    "properties": {\n        "datasetId": {\n            "title": "Dataset ID",\n            "type": "string",\n            "description": "Enter the ID of the dataset.",\n            "editor": "textfield"\n        }\n    },\n    "required": ["datasetId"]\n}\n')),(0,o.kt)("p",null,"Now we're done, and we can push it up to the Apify platform with the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify push")," command."),(0,o.kt)("h2",{id:"-setting-up-the-webhook"},(0,o.kt)("a",{parentName:"h2",href:"#setting-up-the-webhook",target:null,rel:null})," Setting up the webhook"),(0,o.kt)("p",null,"Since we'll be calling the actor via the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/tutorials/integrations/run-actor-and-retrieve-data-via-api#run-an-actor-or-task",target:"_blank",rel:"noopener"},"Apify API"),", we'll need to grab hold of the ID of the actor we just created and pushed to the platform. The ID is always accessible through the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," page of the actor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Actor ID in actor settings",src:a(25191).Z,width:"1492",height:"1300"})),(0,o.kt)("p",null,"With this ",(0,o.kt)("inlineCode",{parentName:"p"},"actorId"),", and our ",(0,o.kt)("inlineCode",{parentName:"p"},"token"),", which is retrievable through ",(0,o.kt)("strong",{parentName:"p"},"Settings > Integrations")," on the Apify Console, we can construct a link which will call the actor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/Yk1bieximsduYDydP/runs?token=YOUR_TOKEN_HERE\n")),(0,o.kt)("p",null,"We can also use our username and the name of the actor like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://api.apify.com/v2/acts/USERNAME~filter-actor/runs?token=YOUR_TOKEN_HERE\n")),(0,o.kt)("p",null,"Whichever one you choose is totally up to preference."),(0,o.kt)("p",null,"Next, within the actor, we will click the ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," tab and choose ",(0,o.kt)("strong",{parentName:"p"},"Webhook"),", then fill out the details to look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configuring a webhook",src:a(33510).Z,width:"1552",height:"876"})),(0,o.kt)("p",null,"We have chosen to run the webhook once the actor has succeeded, which means that its default dataset will surely be populated. Since the filtering actor is expecting the default dataset ID of the Amazon actor, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," variable to grab hold of the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultDatasetId"),"."),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),", then run the Amazon ",(0,o.kt)("strong",{parentName:"p"},"demo-actor")," again."),(0,o.kt)("h2",{id:"-making-sure-it-worked"},(0,o.kt)("a",{parentName:"h2",href:"#checking-the-webhook",target:null,rel:null})," Making sure it worked"),(0,o.kt)("p",null,"If everything worked, then at the end of the ",(0,o.kt)("strong",{parentName:"p"},"demo-actor"),"'s run, we should see this within the ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Webhook succeeded",src:a(11642).Z,width:"1702",height:"124"})),(0,o.kt)("p",null,"Additionally, we should be able to see that our ",(0,o.kt)("strong",{parentName:"p"},"filter-actor")," was run, and have access to its dataset:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dataset preview",src:a(28667).Z,width:"2016",height:"1160"})),(0,o.kt)("h2",{id:"-quiz-answers-"},(0,o.kt)("a",{parentName:"h2",href:"#quiz-answers",target:null,rel:null})," Quiz answers \ud83d\udcdd"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: How do you allocate more CPU for an actor's run?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," On the platform, more memory can be allocated in the actor's input configuration, and the default allocated CPU can be changed in the actor's ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab. When running locally, you can used the ",(0,o.kt)("strong",{parentName:"p"},"APIFY_MEMORY_MBYTES")," environment variable to set allocated CPU. 4GB is equal to 1 CPU core on the Apify platform."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: Within itself, can you get the exact time that an actor was started?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," Yes. The time the actor was started can be retrieved through the ",(0,o.kt)("inlineCode",{parentName:"p"},"startedAt")," property from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor.getEnv()")," function, or directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.APIFY_STARTED_AT")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: What are the types of default storages connected to an actor's run?")),(0,o.kt)("p",null,"Every actor's run is given a default key-value store and a default dataset. The default key value store by default has the ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTPUT")," keys. The actor's request queue is also stored."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: Can you change the allocated memory of an actor while it's running?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," Not while it's running. You'd need to stop it and run a new one. However, there is an option to soft abort an actor, then resurrect then run with a different memory configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: How can you run an actor with Puppeteer on the Apify platform with headless mode set to ",(0,o.kt)("inlineCode",{parentName:"strong"},"false"),"?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," This can be done by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"actor-node-puppeteer-chrome")," Docker image and making sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"launchContext.launchOptions.headless")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawlerOptions")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h2",{id:"-wrap-up"},(0,o.kt)("a",{parentName:"h2",href:"#wrap-up",target:null,rel:null})," Wrap up"),(0,o.kt)("p",null,"See that?! Integrating webhooks is a piece of cake on the Apify platform! You'll soon discover that the platform factors away a lot of complex things and allows you to focus on what's most important - developing and releasing actors."))}d.isMDXComponent=!0},25191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-settings-babfc12dc5223fb45baf14312ea944c7.webp"},33510:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adding-webhook-bc3bf8e1601ac7975dd68e9d1940d660.webp"},28667:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataset-preview-b75e6e4c7a2035bca1d08498c255f42f.webp"},33440:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-empty-e351352cc516f35ed2682ead8244c46b.webp"},11642:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,UklGRrImAABXRUJQVlA4IKYmAABwxQCdASqmBnwAPqlUpE4mJKOiIxMJSMAVCWdu/HyZUAULysZkLMOXeQq9jtD+jjlsvU7+4vqA8170Of6T0uupE9ADy6PZW8qTVV/Gv9O/Gjwf/vH9j/Y7+5eo/kT9a+1nq4f4Xh29M/mf+76KfyP7Z/kf7T+3f939uP9p4K/KP+29Qj8u/nn+R8T/ZB7V/rf+36hHtJ9a/53g7f2f+K9TP0T/EewB/NP6//2/Xf/eeDt98/2n7R/AP/TP8l+w3u3f2f/4/2Xnx+qv/n/svgS/n/+F/7vrn///3Afuj///dr/c0UjmUvac4LZjrRFYKT490a1KYjrRFYKT490a1KYjrRFYKT490a1KYjrRFYKT490a1KYjrRFYKT490a1KYjrRFYKT490a1KYjrRFYKT490a1KYjrRFYKT49y2iSrf6v+NK5F8lyL5LkXyXIvkuRfJci+S5F8lyL5LkXyXIvkuRfJci2ULVhRbKMb1PM4R972BR5aeUPA113qinCtV0QQwovkuRfJci+S5F8lyL5LkXyXIvkuRfJci+S5F8lyL5KkIw9hOHuv3mkPQNUAetDHGqHEfDw1TARX3KsNGoy6ezwYIHD+0fObAqBLNGwEMPpNGRBt/CB3x+A4dx8nawTIFjsQPCDRlkd6K/ibOXwHy4rohHD6gw7+pY4l4sSL2wiBylqTG9IamE9I1bvat/s1T9AEMZoWFVnhxsEh2EXjLfrbfzQqAzHWZVms0L3277CPJcpxhs9dfhlqpc3u/TjAIpoJ3cCht7Y6kgoOyNSLcgATIGe5rINIBJp5Xz3XzVGx9ZUqySyNdUu0t6YlgdGgmLNks+YuufCCrNCxvKF+nxco2pnGIUpgMSC58b5cyvr88g6KTKbK8n1Z9we0N73FFWFrhTv53MT1MX6F/khjaBdfL+qByiVN4R3PwI96kc7Qxqo9Kq6/2wM8YqA3PvmRMMz4MKL5LkXyXItGyowJpoJKD0WopcO+aEY3lAXeD0g53T7SRPwc7DNxU23tpbcbD7VJogDfA/bgFK1L/s7553dwgrgbZouACu2b8MWdZYLO/mv29bNsiYGHC4O75OAXoRTO5S1hFIAXkvUl6nW8kkNmzs/gCQKTUztnAz9XThpj10+304LXzys+ifHZDzVVBeyWy3oQ/RnzOk6yH3e564wyg0sPidZBEDoWy/pF8nIZtChtUBwAvvtKwyD0DMig2s3ND5cLRSazdzD8GJkEW54V0EwZ9BhpY+tukLDsAcL5Y0cZ5dj3KeDc29wZo2YRt97hVKnYeMbP3NPeBbO3p2USIFGYiLl1AjQGQUQMidJTUqFIsP5y527pUhu40e0csh7N7PkifImcgTSb4RtVaV653ZZM0nfaYE3LWR+pa+TShhRfJci+S5Bctq7OyZDKUZDOpy3/GZUcFJnzqiiE3GpyJpCUmmBW0IlV7uP7Rtsyw66QNvHVrh3Uq9j117XriyyEeMdO4ntICkFRHoahSXZiMZXkUVQvqGEEDYSFdN5kYbK/gOASkFi8ohmsm8oeF2AtwlE/cHnDFQC9wzqNNbyS4CwetXW3j2UlqqoFlNvs6+Yo8bP0ixhywcVp1rUSnBt4dyHlzX4W3CBycL9KnJZv4m0QhRmioNBr1i3/bpM5LKRhetdfqS+S5F8lyL5LkXyZyRTktRTVTgdJkHL4OG7+oiMjmZmLEmhzwmXXUzm4K+CZWRX3pjkiuNpogfjSeG4uEwCGo+C/UR9BmEkHZcZZm4nK2YdRqnHNfKq7m7/rgQc0w1hc9NjpA//IAQ6K4B5wv85xYJozBzfiNgRDhsBvFNR5OZQL2LJEf+AnDyUQ8/Z0Sjei8j0ZI9zzSMfKVErXlbeL8kk/ggyGoFLux84qpcOCTealXLOzkVZ6rLZ9e0UIaLEfeUx0+B4//gwovkuRfJci+S5F8lyL5LkXyXIvkuRfJci+S5F8lyL5LkX6wpgz0UUomA1r5NTPx+yl1hZGckO+num4ehUJN+i9PcmtSmI60RWCk+PdGtSmI60RWCk+PdGtSmI60RWCk+PdGtSmI60RWCk+PdGtSmI60RWCk+PdGtSmI60RWCk+PdGtSmHyzr2Ck+PdGtSmI6ujaGBmAAP1JWTJs/UmEth8E4bEjvOMiNkRsiNkRsiNkRsiNkRsiNkRsiNkRsiNkRsiNkRsiNkRsiNkRsiNkRsiNkRsiNlo7gfawXXJldpOgFUE0M7KBQAAAAAAAALHfpPgdD7YcEMFzSPAc/BqYv54G0QCIB6VZixp01xdVaGuokZc/zbQaDEIuemaq0+ODCwLdVdNJCqIFliXFuxIWOUQ05v+BPb/FJrMc303tZhwV+6qB6r2AAAAAAADpo1JeWUZPW185qq0BahxDlWiNRCixgDt6oX11Lvo8NVxEDCvRRXpsK1cuPqix17bS1Qokt7Jl0JA2jnDpzlm1kU72Ico/2p5enKt8ervXEAqjy/vIF99obam0L3ckJ6/eEeFFzUjUHimeB7hwrZLuF8yvKm2pFMOAJhjP9oFDhKN+P9MczXxPFBbiskM9bMbx82VJL2flJidg0vVahPk6GtYdXQn4k/h7xO151w2G/QOIBn/Yz1kzdVZNNMx2Go5q9+yMV5h7nuAT2hZy222p+ZhNPnXQTDDiXo3eAmPaLkEw+EeLdMlsjmkzWJ75bcCZBj95pJRMXVWxUzw8vo6TUIbSJylpvMy4GmmU0EXk32I5kzAomY7zTE8E9mDFQ0GaykSvsVSUl7OA1D2ewXPOHzgsciy3N22INyEtCYqlc0n4tYuQjm3uqHjajHximpy/pB+coc2WGLkWnVhmwOPvVD6Mk2dOE/M4VTzr/A5cP3rTsYskHZp6TFreHquA9EV2GXOG6xDKlqV1Qc2pi4Ll897GBwqfELKeZ+Dfm63Tvr8YJMBdzjlo06qb2LPB0XU7eJ2g36O+JBuoDv8mQTa+qvB7+z0BiTaD1hQwxaCnl+SLBMmUsTQI2B5iG3MKYsC8VX1g4Hhqufw1mNg4z6bIFMgutqfc8JD2HYibiBZCGjHXBEL5a67fX6clrbxhKhYsviUf4V9kDyXneDXgvXukq6QLJp6s9Gr+KIuO50kVP7KHLLqYg2qFrD7aTmDJDiZC9nUYNfJE3xXWZBUTof+lLFo+/dRjXAny5CcNuXJfshrbukJAJA0eU2HK/N1ftbXfuIud9zsC3Jrqtw1zY2Pzfrs7lrwJ/dsZiOovugriBLgHnKkwHD6a3tqPmZ2HJeMJFlJUGjrKk5+K2SA3xFh9i+y3lxKSaznfVpTEBqH8Nm2u2hxw8lrHe3tbmDc/9z417p1kcxd5xF4G3hJUoG8+hhdWpmcK4kgeT9+I3xUWvhYJKsLFUp99qv3FB39Kvv9iS5wLX9DJMIY0sfU2afxo33kbS16ONjASrb5kbfzFnXsSMrPz3Pv2RbztTHadeplvV4GmZ6f4ZYHnYxqcZKaFzUqeYL4M1nyovNju+F2I0O+8PwAX9oTgmb9jyTzKCStHEacoi600va/eDQ0Jxf1NxioteCtNfQllMA+ZynXpDm+JRJdFvDVrNAhRouxAnqc0C9cwu62tGKnLiAMtFNWFQyaIY+Cd0XnyrZjiSsi95nLw9Tn/M8pUfcfpEHfKqybDNyKRiXzgC1QTEsJS5jawKculI187hFhGqIg+0CgWNt4CAVRVYLma2sNeWTPCHbGJlZ5ra3rOI/F514CjTSET6E3i+WEkTTS5jvZMn1BKk7+n58UwjEMdFKhoO/CFoucydUdZ32NBZD8KXQ2N53F4E+PgUKaqGC9QJJIiyuvsxPvoJv6wtfE+vFYZioEjhYSfCZvPlVAZ+rzg7rt2Q2lmjqs9NbBfxleU4KTuUVI6+mdYGr1HQIBmqjwXcPy96cIFnVJmMOqE5dwnrw1mV0CUCYiWoegG8QFC6ibcIu9OpVQrLWF4wTBw1ZmSqAn4nuDfekStKyciHY3cC0VmGu+h76lukyLk9sGda8Md7wX15sFP9KsXQx+LNI+WEHApahAVF0/nxThLjlfNqql2zswkDcLyn9iuSzPWhwVliOzhhMupubODwpsU3GXDGOcC9Qi6lEorwlQP115oq7/yQFezH4LUyNexyWFT0XgwdrTJERHLWQfXpT/TTol5JMmTvjZRdE1+metZ41zD/ZlRgyHSKTWBZTTsQ4RuQtguDk72UV1xSwGWYdx63jl9cBK7Tbg8zruaUsSKXsEYTO+JtrRKtWXE1mBeTjRd7ef9gFpBuU0ErNwICT9UITTLLK9ddNYQ1tzvYcV/uTB+ERRVMFfNnEN/vQ6iBbcuzk/OGJiB8ixYBb2NcKfU9mqBrPg5fLo8As1GPIWJpCQMJsK4WPzzw8RN/8S4U6hbzr8HOMAeX+joXh/s7CtKDX4WfZU5ZEBNd5lLRHVVCjY+fKvutbPUnNXIoQcCMoF/ps6t6DB6z4P0OigXRgYlO+qu6LrBG760/A4qhJp0Uh8eS/zPWuDAjgntvxeV7N1sMbImHl8yqc/7Q0BKEKHyX3Ftkbc9Zqqkr3GU0oh8ZuXfoHUUY064YT39Yd0zwwInsmaH+/7PhD2Pbo6TQfQdBs5W36ZsK2o8k0+PKmp4rmkopTaDxkh4Xcf1Rxw8sfNSY0uMROXl5vJPqxhE3DADzrchaKMAp7Q1tu/rHJfSlbAJakGDwZ9aAXrR4qi5kbHxYw+p/vWIdLNr/n/UDbww1qU6wLtJr88PxF5wyQBarTZHt4+jW0tPUTd+oXNO7SOMLaCoCcZLMhtGgUDD3J15M9kx3o/mGo6HW21xXKrLE7Gm30NVv+UCB6TxCRnTIgtydTm7hDZwmEtYOcsknY5r8KbsndvQ7fDSE1Oo8cuSMZwS/uIfN8GTNkNN9dcYXLw7W7kyUc8vb0QBByTLyEGrSrxQrS6s69qcVnu1joan0zeqMfV2XDeL0Pylm6Fn9FMIH6erSo+Qt66AcU/TAcUAN2sQKgRsM9GCTalhi3DECDAqptNaQuKe//i2SCHXfCDyjUA4fC2bnVJkqWyNJT+ORBlESJhVZcN87xeAUnzvEZzPj/A4bwDc/mJS4A5F6GAxszAQJWwdh9oTwXAnXrq4lraGcjnXh+wZTTMTguc5WTFa4DubUUCDy6MY2eA6V54jsOFz0hffU4howOezHLQdyyaK8YtDXn5+EZ6fhFs/6oIlR3R5DQ7AL+tNiY4f2VDuRNHQeGl3Ah2vkLNMIi4RGFXE1wUGzwB/hXeOGK8M4XtEpJ/OLfu1R/TOXtASzcGPZY6M5EYaAFlTOj9XdVFwjx+03USBZ/LkXN+Amt0Mc6HXWT0dyjW+Eqa9KIynKli2072zkcOWgangCt65MdUbXg8UXGwAFNcnv7qPHssys+Dur9yEst7FKtcLgSJuFbxUMxVJeatI2Vok9C+xukXFIhHLI+UiQwmJF5M3Nrp+sPSC+qFtlaBtQMyd5fMQs7pKqlPYA+6wg1RsXvQxnB4n8ANRro8qvFjP5Wie+aYtmkqGW54E/j2cBwzQVqdNT6NCfve6rlLzIJsE2WKD/fAg/LH+CX+s+37bC3+xfMCVh3yET/+iNHuxZ6PXhwMyjTmXzlGzlxA4uGBunYyht1SAH+3JlSaZ6giDFvofWI1wya5C9UfkUtmMlFk4mUMj2N1+bcFEHtLRAGzUFodD3S4HfrovV6P0UWoNW1+qTZWoDlpb7rA2mm0fxqxLsN3s48gGuSURDnYz9OMR+kefzv3+9MgV9BUkMlWsFo1H/kcDqnyY+R3avTmxzf9XArznVU7Kxee4DYE/JNPbf6jipdv+oAyLF9XUA+VDa79C/0z/W3mSdORmygIdnVlNk++YrKOf34mnar7P4B82RYm9Z7DsSnaMufx0XTiLb5UnHjxmEmvhq/hOyIbISIAJpxBTTtTBhbnpB5LcbimYmy0zbW7fDWShBFpzo0NdUikXGZ1Ud4ZFm25b6ngrWWM6/w/qQ0IiYZIqM8QjOzg+4gEr1aJlXXvOBQzdB5YgMyB0S9ldlYHUU0/se8ROAIy/UwtRvfpQQlD53mfRLtNaGPLRoAs414d2V7jRdQvepjPtUsBC9/teML/X0+vNNLjHgNC1Hq20apgKkZ5XAhXQqPKrVoyRPZfR08aNggcyfrqpkn8rwq/O7kiR+bniij+nsJwFvB1DPXKpmVScxM0skUVBxLFA/12lRxduL+yb2VQ1WF1pSAesGTDkZSpoeImeOCGitVf8au1/NUdU11wIfXuovO4xrsX2ctqnm+Nlx8gawu7q0ZYnYHiLboNcnRCHYJYrkZSa8kUbdBPfKxDflUcd2RyUQOS6RskKMsG3o0xe+YvowtbdxYfimb5r/rkzree/GbBsuUGdD+SDL9X5fYdmCnfPEYWgJ/VOs+MlLhkuET8ADFVPjGY7A+3Zd5N4RQ/kYW/Bc+hBFCiIC1zt0W2Ae9XrywE6GH3wEsSb/aNOgKMaFixpfEdq0xbAnEmy4fhky/Dm44D9XH4p787QKri9KmkU0ntO7a4c8b9HRCYNPH6byGkXk1YAITOhisqmvRq3YBHw5U5RPFAMYFNc0JBCKepGKTs8S/KOoJg3kCQLhhoTLxuGyqHLYXGQ9zENnmGRVXzTH8zvB7EBxAXb4Zkr/1/h2Zr4a6nr4YbNF+C+SqCk4EL7eE+Rqjxq0mhamZYZYr9PUl2RZdbWy+onXeUQk5G8qJNPdzkTG+m36gMHy+7EpduCcoc86jj2p5DTciQxHJ/zEaTCOO/94nhgJEMw7mPClkWjDMwk8E16BWx9Wv7sXbH2rvyzNSnUxrjBtYvk2eQ0WHSZ3AgITETKavahP3HBHFVRljENv2cLd6XMcsN9DtEuVmGoDO63LqBk+fx9a9HCw9lJfYCLmjYDmWJSay5Rb31kFcwIL6cQ/ZQcIdyMa8WofaPi6cNB1AiyI4O7hdswic/WZY2RfbrawRK0skIXGVHhMSLZ0s0npnsgiTJ/VN/6hTKuNOHQuWTqs61OW5PiT2PY8D342uOg+WR/oFOClPKhuOUnsOMR5RPnS0BzqqBMsO034Ns2HSEfo9pRBl5X2p2AnQw/A7DC7ZjQvwpx6Z6U05wgop6WtmhG3m4lrUKs0e6kBrPLHr8HqcY9ZgbpIyEygcf/O0pIxjoxGCFcrQEJ5f/9GhzIHDz2n6Rrm6W4i8Jmogna+YXKfvPkmYQIXLi496TQpJzeEHCJeo3qMH6YcJXzI8YNDIu0t5H0WmaFZPsZOrUxrpU48DHDE0Cxi/f0B8Gu787VAot99Il6OSJuMNxyE277z0t4Hy/Vvrp6ZJsMZ+Dvpq9bTDJ7qgDi4rVItnKmWMeCjQSFNohpmgpaSoAQYwcwXNNuPq1mmy6XaMCfzCXJBDepFd+kamDj7OS4jXdBiwTTRlAUCsaeEps91lXeT+jnUXY3/ublveExSkAObeZGEpJrMIAno9y1P2J5s08cBQaA0O34if5+6v1QIfTTrto151oZSSAgUr4NhEwzXH0eXNcsRWkbx+zAUIiJlbZPWr5f04fJuXHd6i8OJwjBAQKeEx/HdVQ3HChNE4jOrgwVI28sZTtYsTsXHnMuBHOxP+QHpJ93Izw2YLxwyaTF5WrQf5nKoEj+HW95GB6uw6r45oIyaqIWnSvY69DP0tDvyZ1casDswIksFoe2xvjjVTi4oz1tctjdrhXYvAkypU2HWr7wdfzu9YYQJAfKExsq5w5oXm0T7/pAzmssv5QVJqoxXXXaNCfZ6o/crZMeQkyFyZwTQKmenHegEmIzsXtlek/avQgqoYvWwxbaR/fJrZf0eKmzc9Cy0M2HX+nKce81nyW66tF5E1OXBOF1ZcDuMuHWichmeoMl41Jxd4vzt5aCc0PbzXr7/wAKdnt3gznr4J5TCYlmEAUXTpPNZkYCwT0Q9QRENC87ePOiYH5GlwaLZAXviUBhL3zCNtqM+aT2cE76rUDIGxwrZIk6MHoLj81K5dCV8TUkWi4kOBZKFKjFhk1MDJeaD5f6yOljfGYloKMTUPf1ZjasIs//wQwuldOb9VubCirf4c2FeraI4sEOhENvzfkfYkMPSOfSjUoZRoTZATf5EnaBkU5B0b/CcRnzEQIzjHNuJrlKLnAhH6KOOPdno/2xrD/wiltIXWZiby4UL2d/Ow9kVrviok2+FPP3h/gN6a14FQdN30QjJWhENJBarhcbskMKdZY0XNquRW5BPTLEK4rQnIRfd7W34bo/req9pGLu6FzRGrt3PxIbzsMIAcknCv/YfvCCOAXrkRNmElC+NRTfkc2qDM2AQwuwriCSa41tM07p9unquwKGXYzzYFskKwzEunAzSTT745kFPcR7lJFj1Q5lqndVJsBqwHtuRtwz0R9m7chSzW94QAAHpvnL/vfEhuEsf0I51Npm5fYCaWeCaWK8C7P86VjOKEAHY6PihjgTshKjcwXhCqljO362uNMrZd2oyocjWg7npk4ZD4XyXx4TE3B8Hz8IurKbxKCtIeYxp/p2MtaX/t/UNS5I8o3shfZ1C8xE3QT6lvPwf7S/X28JcRPboj+bYBWT/1ptRRIbB6rlpyBAaK8/xuFU37LcJo2e52/yfcXCrUvvSEU+5mr3tFG3yRoyssbkz3t8L9O7m3cbDudHCrPuHH43PC11r+wWmNnqAW3R7bVEdBt3SX0zXcLmOhA9JadumYjqQn0ZnHcC/61UwAZadMTbGBmv43O9PSSPz+SHQtTNFx24Mz+tNbVtfAecEfhOjvUSaTeODNRNKWLM+yN3UNj8C0UkO3W1uibJ9Fwj49mC7ApMptmVfc6wTPv9CGaOCHaQ8zKeRnOEm7jmDEFfHyWuMD3PjO8JzcbxDqKzYh7O9A3uXKb3stc9V7pZPh+FNq48NpJ1fcfM900tdwOfddrvwqiGXf4JR+23r/B7PmH6shZZefHyskHNGQ4+7BsT+aO9Q9O998e08R7LVTlqPEkgdLEK01DDFvRrnEZwgrqT7iMJwEcc2DWAYHBsO8fVvUykuH0akiUzbREyzIXIU62eN7bo4/dEl2pptL3x6fFHc9YMb1IWi3dqzV5HYDGNtDSWq1Ra+Iaw8ms8SWeWk/wyo0sLYEgKjGpTPc+rc32V1Ukrf4TbCdFf5/KpoZ4odnJp/9tX4JjEkieQX9lPrDqh2o2/Ag2WWTcfxIpuU97P6GX5PEWZukK4Gy4ljMWfP/8Ce/7GsCTHvFswQ8l7Y7Z5g+6VUSaVRd6VwbU6Z8qD1Hh9y36Yv2cffATYCF5HCxwuZd70DEgSVZf00mGwfeOk9LLKpPmcCtKEvJckGZTA8B9Lrj8DnusF+CCfsSc+axsruLqpZGl0p8Qi60IYJDTPsJ+rcNwR/XUyG81QrqnLCv1nNDezeaACi5Wf7jaLXC018axer2+CV+xqnbdnUiZND4HOBRF/OrHQN7ItzpQiRDqvCm4tSFj8/rdOEFL1hYv1kPg1Kr5Be9l2g7iYBwXjWXTlsX1uqSOi3SXj5Ix/wXU+tbKlEByQpp5Cx8U3AvGGw+zQ0Rahm8gDcwAK415g+/Y2VKSisJNY9lz8ENyYeAJ49NNqakhuGi30epTMoho/lZWSGpyKWmeovtRAwKWIeI9gDhj5zi24J5L/yfMp+DDCK6P6kCpgeE9m1LQPRIZssNV/KRnZ14J33nUozbiFhHA/aOB63EqcIFjXLSudyQLzjPb88urjHCft+n9W2LPPqRtPdzAqS3GKs7Nf93v1d6jFtAR1eJrNK1JvhbDpsGUA5l7bBOOQm5pW5D1AWwFtSnJ1pIPCNAGoCSeyn+krrQF6OgmyVfpiT5zxP62L03HPQSwFJlc2z+/vhdHUPWPvjn/BXwQrmCipqyWYCiXVwVNQcq7ZszTCVBH8Eb1uwBPHmmWQEDYwwPxTCJm3n2XlPxiJf5c7QGH7k/gttnpVvwuv5vNfxIMscvcKIQiSEAmwHpQw9Jm0HiRN5r+8ofs8SxPaBs5RUDQYU8Fm/l/FMPz0WEgBhRC7tGZ9YDi3nPIdomRxsywJTMf0iEPL1GNi3IplOgxIQnAS+MvLWVrVbaBWvDjjMfDqbiSYaxR2qUqKMuNpauhLyzyP3ZTjOWTeV2E6moPbrAIFnTaH7xmq29z1P2eLFJw4FaNLx6lJ4gerBnQ3QKle9ynnVRHwnMEdWo3/49Txl8/YoKf0HCXpOniWChSgew8gTeFUj/eKG3iSbOPFOgsznrvXHoWIx6Px26g+yGJvqgwHchtRiO8UXPel2yS2uOZkSNcey4Pd+OC+LWXhOwtv2gX2ekHcYBI2AnKtH0elB4kgwrBrSm221PzMJ9xfjvQl/j6H7V4QGajVism7iyj//zGXGPvnwrBAW7scONFKVDIgtcrp7Lo2jLuggOZX6UuPL0FpRtj800bmbeUq7zX/fPmN1Ng2B9267TjM2TbM75qPtRn0aE4kW9P43R2Emj+aJbnXwvsepKUgb1JSOB9PEeeSXWGGAVmtIt1KxAtcCgm9IIw9nht9o6eP9QRVed3PyB9u3X6Zs97LXxrw5+7xL+75xbrX43jj1bAjis0BzHecaIA+WWfPDlasoBSNpwovtOlMe+GRhKSI1X9KmNqR0BhzT1vxhT6IfeYv+2qFQQ21+QOyrXXYEJJGMTk2/oL+rZ0hVutQk/1PWU0hJ0q4Uf10lz4XwLYc+cy1AZe6tvmluDMJt7x+/irqU4PQR4HFZSP6uvK/d5hGyupBrfOcGbMBkQm07YAwy+F5xdVD5t2315gXLBKyXeowXPFeCrkb6qraUx1dtSM6jGzuiw+oU7FIBXnTWRhOB+3eZgtS7Q+dZUCwm9raVFVIKtziuhKCwMWcNcMIoanujZvJO+mueaVyllHOFCJS0vyz5iPTFDGEn0AceTDy4nRcFFuo43/DvVysSHlJzW1VzJ/8drHzNmVxVB2IIqjDhlD61q8PUyNxUpzLMengrHzxKPa4OId9Gb6dlwWfjPf2H4uZTqbxq6cS4d/1g4lOSTM9CkvEoJIA+chUwJYSEHcq14vSsV2BFUwEwixnVluHAOMvTu2AhuhtrtySLJ8XXYf1Aqp83lX6IINUuXTy7hcTXGF89tIVwW2TTB/zEfkys3PZ6VyutNYGAmdqCdD0bT2yr2ZPUGyDQ1a/uksT7vuGNipfDgSuMA0IIm+AcjRzoYrdVgIpSE2pnDFBXTmwUvCXTNk8vRAABQRqvlh0LjNB8P+c1WQAfkpJEJ2/RtaL2IcWRL25ts4/FwP0vHXSn3h4KOOLnWYsst9zA1weHzSTzwHlRUOtp5seOm4Cpb3zylh+GjHblJLSDfLj96ErR2b1iEZlQDIcfWp/40QDQ97qilm0FNvukvylzA8k1u1nfrVcTPHXfdwIpBKgRY88PkQmCi1QCUKDUdzQYGYup0ggKtb7qRszlcIC+VbRFjj34yU89EF3lEJKjFhmxJuvMouCNLT/1fXpOregLOJK/W9HoaVuWUCVg5zV+ptrhaG2AAAELIkxWPaWmE7YF1C9UeQQMnAB8hTqqLoUc7i4WbuGFXanzgzMJpqZntMy1sBw+YxmkK51NpFw1lhJc9VZGL1WaBCgRJrVik4IS2ofKCCYIVRB1U0w/MckHrQ72EO0XHDtNKONYNKSG9AUqbM5VWz4HzHEYK5HXhLGPDlTKDkNlybUwEUmrIgUyuPYQtyTaFYVKapzdWQelDHHp1GwpHvNHDykQkb5vNFVKob9ypSqkNlTA58fW2/p6S4+pDB3m1aq97g57aMjdrr037rPibOeYXkO+m4G9FUdJ2hiehMAwapFIJGmoK8na0CuQ0XLm3Dc/0Y1pGNPhIzNarS+WXgBDiT+R96e8NstI/4hHmhswa2sexxA6h7grg9dsXxFuDvZ6SkZkFKv8NRth6h7WOTOSMvbdivSO/4EXSkTCNmRdIp3L2geR0OaiK20X/z+NutJ2d1/xXWDvRwlwnDagHgqyOjnjuxMYiViBh+18jU/nQi3O8rXWDWpxyy13eNnbld0L7oN2NNzgiSYj++H1dSaeVRzPeniY417kMDyJ2OShNrNnLUBu+rCM6PX1S1XvyWYUYKi2LtiwtXnjIECs6KQCGOVmTi/Dgs0qIIxYOgaPbEw8YDl96A4bIeoXngwb/D1zhc26v1Hl38yhU6pvx8x9Jm93QsXjG7kxM+lkQxCwvEwByZM1vqlTkvg0nz6tdWEyLVrz8V2qPgQvZPsvDTp/8q9Z0mDzvrW78A22nqmLcsQWxyYONIhWXxJelH/gEei6f5XbsGcFCgsL3JZcvQX16AK/j5gnjT378y2ntNcpgNtMF8uMn5a4i0hcR1SFF0R4pzPEqbv8PqOHx5OPXEVPQ7yqMe1KcXIgQwXwrN0asdhfGpRu/gcZDUx55JXKOcRXDB8GMUvr2U0fkNr8fwQbFFIFEEtEqTV3A+cl2q+pw2p/g5SQfVVFHlOGO9CgTOBpeAh0wJzBoIrGUPHk50sDP3Wr5G7/Uj95jxAG+k++uMY29kWt0VrH9oMlOv3vpmli6AMLkfzTP2q+6iq31qgekApQ0O0pl+r4B0VG9f1wH4m7pul9tOBsLZHyC5G92Xp9eI1YmAJV/PiG/2iefincP7HJHhO5OQuR/eV4OpnzD7C8jx+AXCRKjBs1j2GKWAKfvMBZNsyCiFO2sWVrbIfDo7qKtEkTgcTFjaMtQSuaCl6AvRzsStqYV+LH4lQbl4RQmCRXJgmWj16QlivdTV7OPg9DqQdijndKsYdPhAFh80JGMz52m7/kEFBSeeJ76iP6TnBeZ4I/GeQ++g1m5NWloCwGRdKZEQhpyJmoj1RWMrE/qYQ9ZmzvZMdO1DKiRrGRCIgN8psqSpgQp+5FPNON7403awK8Reyb1R9Hbtm/ZnkXqRCQlhW2jyFEMiocm7lNjpmMwtDW873pofSoT4M2w/dXM4Q15wWky/Iy4KhXUeFLayOvxTV3474vtvcAfiQxMdd0QB2paJuYLpzNSs/HtMvR96TKNd3UmXAIEA4AFx4Vt1PtYro4O4cXhJzqJN6Mx1OWF2ftenrZ9V4HPDWIAAAAAAAAEkgUuBiYdAEJxZ0oGl0V4YlwdbAc8g4EJMCG386+UuLmBo0t0ojvcYhFXq0Xcbv/9//v/9//v/9//v/9//v/9//v/9//v/9//v/9//v/950lm6MYT2VqqhPGrV7dNq5kxVm38RYEGYgAAA="}}]);
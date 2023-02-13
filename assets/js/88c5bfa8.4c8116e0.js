"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Fingerprinting",description:"Understand browser fingerprinting, an advanced technique used by browsers to track user data and even block bots from accessing them.",sidebar_position:2,slug:"/anti-scraping/techniques/fingerprinting"},l="Fingerprinting",d={unversionedId:"webscraping/anti_scraping/techniques/fingerprinting",id:"webscraping/anti_scraping/techniques/fingerprinting",title:"Fingerprinting",description:"Understand browser fingerprinting, an advanced technique used by browsers to track user data and even block bots from accessing them.",source:"@site/sources/academy/webscraping/anti_scraping/techniques/fingerprinting.md",sourceDirName:"webscraping/anti_scraping/techniques",slug:"/anti-scraping/techniques/fingerprinting",permalink:"/academy/anti-scraping/techniques/fingerprinting",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/anti_scraping/techniques/fingerprinting.md",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1676307254,formattedLastUpdatedAt:"Feb 13, 2023",sidebarPosition:2,frontMatter:{title:"Fingerprinting",description:"Understand browser fingerprinting, an advanced technique used by browsers to track user data and even block bots from accessing them.",sidebar_position:2,slug:"/anti-scraping/techniques/fingerprinting"},sidebar:"academy",previous:{title:"Rate-limiting",permalink:"/academy/anti-scraping/techniques/rate-limiting"},next:{title:"Geolocation",permalink:"/academy/anti-scraping/techniques/geolocation"}},p={},c=[{value:"What makes up a fingerprint?",id:"what-makes-up-a-fingerprint",level:2},{value:"From HTTP headers",id:"from-http-headers",level:3},{value:"From window properties",id:"from-window-properties",level:3},{value:"From function calls",id:"from-function-calls",level:3},{value:"With canvases",id:"with-canvases",level:3},{value:"From AudioContext",id:"from-audiocontext",level:3},{value:"From BatteryManager",id:"from-batterymanager",level:3},{value:"Fingerprint example",id:"fingerprint-example",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Randomization",id:"randomization",level:3},{value:"Data obfuscation",id:"data-obfuscation",level:3},{value:"Encoding",id:"encoding",level:3},{value:"Detecting fingerprinting scripts",id:"detecting-fingerprinting-scripts",level:2},{value:"Manual de-obfuscation",id:"manual-de-obfuscation",level:3},{value:"Using browser extensions",id:"using-browser-extensions",level:3},{value:"Anti-bot fingerprinting",id:"anti-bot-fingerprinting",level:2},{value:"Next up",id:"next",level:2}],h={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fingerprinting"},"Fingerprinting"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Understand browser fingerprinting, an advanced technique used by browsers to track user data and even block bots from accessing them.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Browser fingerprinting is a method that some websites use to collect information about a browser's type and version, as well as the operating system being used, any active plugins, the time zone and language of the machine, the screen resolution, and various other active settings. All of this information is called the ",(0,i.kt)("strong",{parentName:"p"},"fingerprint")," of the browser, and the act of collecting it is called ",(0,i.kt)("strong",{parentName:"p"},"fingerprinting"),"."),(0,i.kt)("p",null,"Yup! Surprisingly enough, browsers provide a lot of information about the user (and even their machine) that is easily accessible to websites! Browser fingerprinting wouldn't even be possible if it weren't for the sheer amount of information browsers provide, and the fact that each fingerprint is unique."),(0,i.kt)("p",null,"Based on ",(0,i.kt)("a",{parentName:"p",href:"https://www.eff.org/press/archives/2010/05/13",target:"_blank",rel:"noopener"},"research")," carried out by the Electronic Frontier Foundation, 84% of collected fingerprints are globally exclusive, and they found that the next 9% were in sets with a size of two. They also stated that even though fingerprints are dynamic, new ones can be matched up with old ones with 99.1% correctness. This makes fingerprinting a very viable option for websites who want to track the online behavior of their users in order to serve hyper-personalized advertisements to them. In some cases, it is also used to aid in preventing bots from accessing the websites (or certain sections of it)."),(0,i.kt)("h2",{id:"what-makes-up-a-fingerprint"},"What makes up a fingerprint?"),(0,i.kt)("p",null,"To collect a good fingerprint, websites must collect them from various places."),(0,i.kt)("h3",{id:"from-http-headers"},"From HTTP headers"),(0,i.kt)("p",null,"There are a few ",(0,i.kt)("a",{parentName:"p",href:"/academy/concepts/http-headers",target:null,rel:null},"HTTP headers")," which can be used to create a fingerprint about a user. Here  are some of the main ones:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"User-Agent")," provides information about the  browser and its operating system (including its versions)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Accept")," tells the server what content types the browser can render and send, and ",(0,i.kt)("strong",{parentName:"li"},"Content-Encoding")," provides data about the content compression."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Content-Language")," and ",(0,i.kt)("strong",{parentName:"li"},"Accept-Language")," both indicate the user's (and browser's) preferred language."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Referer")," gives the server the address of the previous page from which the link was followed.")),(0,i.kt)("p",null,"A few other headers commonly used for fingerprinting can be seen below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fingerprinted headers",src:n(92552).Z,width:"1023",height:"655"})),(0,i.kt)("h3",{id:"from-window-properties"},"From window properties"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," is defined as a global variable that is accessible from an JavaScript running in the browser. It is home to a vast amount of functions, variables, and constructors, and most of the global configuration is stored there."),(0,i.kt)("p",null,"Most of the attributes that are used for fingerprinting are stored under the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.navigator")," object, which holds methods and info about the user's state and identity starting with the ",(0,i.kt)("strong",{parentName:"p"},"User-Agent")," itself and ending with the device's battery status. All of these properties can be used to fingerprint a device; however, most fingerprinting solutions (such as ",(0,i.kt)("a",{parentName:"p",href:"https://valve.github.io/fingerprintjs/",target:"_blank",rel:"noopener"},"Valve"),") only use the most crucial ones."),(0,i.kt)("p",null,"Here is a list of some of the most crucial properties on the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object used for fingerprinting:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"screen.width")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1680")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the width of the device screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"screen.height")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1050")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the height of the device screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"screen.availWidth")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1680")),(0,i.kt)("td",{parentName:"tr",align:null},"The portion of the screen width available to the browser window.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"screen.availHeight")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1050")),(0,i.kt)("td",{parentName:"tr",align:null},"The portion of the screen height available to the browser window.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.userAgent")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'Mozilla/5.0 (X11; Linux x86_64; rv:90.0) Gecko/20100101 Firefox/90.0'")),(0,i.kt)("td",{parentName:"tr",align:null},"Same as the HTTP header.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.platform")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'MacIntel'")),(0,i.kt)("td",{parentName:"tr",align:null},"The platform the browser is running on.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.cookieEnabled")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether or not the browser accepts cookies.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.doNotTrack")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'1'")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the browser's Do Not Track settings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.buildID")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"20181001000000")),(0,i.kt)("td",{parentName:"tr",align:null},"The build ID of the browser.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.product")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'Gecko'")),(0,i.kt)("td",{parentName:"tr",align:null},"The layout engine used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.productSub")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"20030107")),(0,i.kt)("td",{parentName:"tr",align:null},"The version of the layout engine used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.vendor")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'Google Inc.'")),(0,i.kt)("td",{parentName:"tr",align:null},"Vendor of the browser.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.hardwareConcurrency")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4")),(0,i.kt)("td",{parentName:"tr",align:null},"The number of logical processors the user's computer has available to run threads on.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.javaEnabled")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether or not the user has enabled Java.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.deviceMemory")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8")),(0,i.kt)("td",{parentName:"tr",align:null},"Approximately the amount of user memory (in gigabytes).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.language")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'en-US'")),(0,i.kt)("td",{parentName:"tr",align:null},"The user's primary language.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigator.languages")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['en-US', 'cs-CZ', 'es']")),(0,i.kt)("td",{parentName:"tr",align:null},"Other user languages.")))),(0,i.kt)("h3",{id:"from-function-calls"},"From function calls"),(0,i.kt)("p",null,"Fingerprinting tools can also collect pieces of information that are retrieved by calling specific functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Get the WebGL vendor information\nWebGLRenderingContext.getParameter(37445)\n\n// Get the WebGL renderer information\nWebGLRenderingContext.getParameter(37446)\n\n// Pass any codec into this function (ex. "audio/aac"). It will return\n// either "maybe," "probably," or "" indicating whether\n// or not the browser can play that codec. An empty\n// string means that  it can\'t be played.\nHTMLMediaElement.canPlayType(\'some/codec\')\n\n// can ask for a permission if it is not already enabled.\n// allows you to know which permissions the user has\n// enabled, and which are disabled\nnavigator.permissions.query(\'some_permission\')\n')),(0,i.kt)("h3",{id:"with-canvases"},"With canvases"),(0,i.kt)("p",null,"This technique is based on rendering ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",target:"_blank",rel:"noopener"},"WebGL")," scenes to a canvas element and observing the pixels rendered. WebGL rendering is tightly connected with the hardware, and therefore provides high entropy. Here's a quick breakdown of how it works:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A JavaScript script creates a ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"<canvas>")," element")," and renders some font or a custom shape."),(0,i.kt)("li",{parentName:"ol"},"The script then gets the pixel-map from the ",(0,i.kt)("inlineCode",{parentName:"li"},"<canvas>")," element."),(0,i.kt)("li",{parentName:"ol"},"The collected pixel-map is stored in a cryptographic hash specific to the device's hardware.")),(0,i.kt)("p",null,"Canvas fingerprinting takes advantage of the CSS3 feature for importing fonts into CSS (called ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts",target:"_blank",rel:"noopener"},"WebFonts"),"). This means it's not required to use just the machine's preinstalled fonts."),(0,i.kt)("p",null,"Here's an example of multiple WebGL scenes visibly being rendered differently on different machines:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Differences in canvas element renderings",src:n(33542).Z,width:"718",height:"778"})),(0,i.kt)("h3",{id:"from-audiocontext"},"From AudioContext"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioContext",target:"_blank",rel:"noopener"},"AudioContext")," API represents an audio-processing graph built from audio modules linked together, each represented by an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioNode",target:"_blank",rel:"noopener"},"AudioNode")," (",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode",target:"_blank",rel:"noopener"},"OscillatorNode"),")."),(0,i.kt)("p",null,"In the simplest cases, the fingerprint can be obtained by simply checking for the existence of AudioContext. However, this doesn't provide very much information. In advanced cases, the technique used to collect a fingerprint from AudioContext is quite similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<canvas>")," method:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Audio is passed through an OscillatorNode."),(0,i.kt)("li",{parentName:"ol"},"The signal is processed and collected."),(0,i.kt)("li",{parentName:"ol"},"The collected signal is cryptographically hashed to provide a short ID.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A downfall of this method is that two same machines with the same browser will get the same ID.")),(0,i.kt)("h3",{id:"from-batterymanager"},"From BatteryManager"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"navigator.getBattery()")," function returns a promise which resolves with a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager",target:"_blank",rel:"noopener"},"BatteryManager")," interface. BatteryManager offers information about whether or not the battery is charging, and how much time is left until the battery has fully discharged/charged."),(0,i.kt)("p",null,"On its own this method is quite weak, but it can be potent when combined with the ",(0,i.kt)("inlineCode",{parentName:"p"},"<canvas>")," and AudioContext fingerprinting techniques mentioned above."),(0,i.kt)("h2",{id:"fingerprint-example"},"Fingerprint example"),(0,i.kt)("p",null,"When all is said and done, this is what a browser fingerprint might look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userAgent": "Mozilla/5.0 (X11; Linux x86_64; rv:90.0) Gecko/20100101 Firefox/90.0",\n  "cookiesEnabled": true,\n  "timezone": "Europe/Prague",\n  "timezoneOffset": -60,\n  "audioCodecs": {\n    "ogg": "probably",\n    "mp3": "maybe",\n    "wav": "probably",\n    "m4a": "maybe",\n    "aac": "maybe"\n  },\n  "videoCodecs": {\n    "ogg": "probably", \n    "h264": "probably", \n    "webm": "probably"\n  },\n  "videoCard": [\n    "Intel Open Source Technology Center",\n    "Mesa DRI Intel(R) HD Graphics 4600 (HSW GT2)"\n  ],\n  "productSub": "20100101",\n  "hardwareConcurrency": 8,\n  "multimediaDevices": { \n    "speakers": 0, \n    "micros": 0, \n    "webcams": 0\n  },\n  "platform": "Linux x86_64",\n  "pluginsSupport": true,\n  "screenResolution": [ 1920, 1080 ],\n  "availableScreenResolution": [ 1920, 1080 ],\n  "colorDepth": 24,\n  "touchSupport": { \n    "maxTouchPoints": 0, \n    "touchEvent": false, \n    "touchStart": false\n  },\n  "languages": [ "en-US", "en" ]\n}\n')),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"There are multiple levels and different approaches sites take to collect browser fingerprints; however, they all have one thing in common: they are using a script written in JavaScript to evaluate the target browser's context and collect information about it (often times also storing it in their database, or in a cookie). These scripts are often obfuscated and difficult to track down and understand, especially if they are anti-bot scripts."),(0,i.kt)("p",null,"There are multiple levels of script obfuscation that are used to make fingerprinting scripts unreadable and hard to find:"),(0,i.kt)("h3",{id:"randomization"},"Randomization"),(0,i.kt)("p",null,"The script is modified with some random JavaScript elements. There is usually a random number of whitespaces and other strange formatting characters. Some variable and function names are also changed into somewhat cryptic strings without any readable meaning."),(0,i.kt)("h3",{id:"data-obfuscation"},"Data obfuscation"),(0,i.kt)("p",null,"There are two main data obfuscation techniques which are widely used:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"String splitting")," uses the concatenation of multiple substrings. It is mostly used alongside an ",(0,i.kt)("inlineCode",{parentName:"li"},"eval()")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"document.write()"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Keyword replacement")," allows the script to mask the accessed properties. This allows the script to have a random order of the substrings and makes it harder to detect.")),(0,i.kt)("p",null,"Often times, both of these data obfuscation techniques are used together."),(0,i.kt)("h3",{id:"encoding"},"Encoding"),(0,i.kt)("p",null,"Built-in JavaScript encoding functions are used to transform the code into, for example, hexadecimal string. Or, a custom encoding function is used and a custom decoding function decodes the code as it is evaluated in the browser."),(0,i.kt)("h2",{id:"detecting-fingerprinting-scripts"},"Detecting fingerprinting scripts"),(0,i.kt)("p",null,"As mentioned above, many sites obfuscate their fingerprinting scripts to make them harder to detect. Luckily for us, there are ways around this."),(0,i.kt)("h3",{id:"manual-de-obfuscation"},"Manual de-obfuscation"),(0,i.kt)("p",null,"Almost all sites using fingerprinting and tracking scripts try to protect them as much as much as they can. However, it is impossible to make client-side JavaScript immune to reverse engineering. It is only possible to make reverse engineering difficult and unpleasant for the developer. The procedure used to make the code as unreadable as possible is called ",(0,i.kt)("a",{parentName:"p",href:"https://www.techtarget.com/searchsecurity/definition/obfuscation#:~:text=Obfuscation%20means%20to%20make%20something,code%20is%20one%20obfuscation%20method.",target:"_blank",rel:"noopener"},"obfuscation"),"."),(0,i.kt)("p",null,"When you want to dig inside the protection code to determine exactly which data is collected, you will probably have to deobfuscate it. Be aware that this can be a very time-consuming process. Code deobfuscation can take anywhere up to 1-2-days to be at a semi-readable state."),(0,i.kt)("p",null,"We recommend watching some videos from ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCJbZGfomrHtwpdjrARoMVaA/videos",target:"_blank",rel:"noopener"},"Jarrod Overson on YouTube")," to learn the tooling necessary to deobfuscate code."),(0,i.kt)("h3",{id:"using-browser-extensions"},"Using browser extensions"),(0,i.kt)("p",null,"Because of how common it has become to obfuscate fingerprinting scripts, there are many extensions help identify fingerprinting scripts due to the fact that browser fingerprinting is such a big privacy question. Browser extensions such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/freethenation/DFPM",target:"_blank",rel:"noopener"},(0,i.kt)("strong",{parentName:"a"},"Don't Fingerprint Me"))," have been created to help detect them. In the extension's window, you can see a report on which functions commonly used for fingerprinting have been called, and which navigator properties have been accessed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Don&#39;t Fingerprint Me extension window",src:n(67025).Z,width:"1343",height:"452"})),(0,i.kt)("p",null,"This extension provides monitoring of only a few critical attributes, but in order to to deceive anti-scraping protections, the full list is needed. However, the extension does reveal the scripts that collect the fingerprints."),(0,i.kt)("h2",{id:"anti-bot-fingerprinting"},"Anti-bot fingerprinting"),(0,i.kt)("p",null,"On websites which implement advanced fingerprinting techniques, they will tie the fingerprint and certain headers (such as the ",(0,i.kt)("strong",{parentName:"p"},"User-Agent")," header) to the IP address of the user. These sites will block a user (or scraper) if it made a request with one fingerprint and set of headers, then tries to make another request on the same proxy but with a different fingerprint."),(0,i.kt)("p",null,"When dealing with these cases, it's important to sync the generation of headers and fingerprints with the rotation of proxies (this is known as session rotation)."),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/geolocation",target:null,rel:null},"Next up"),", we'll be covering ",(0,i.kt)("strong",{parentName:"p"},"geolocation")," methods that websites use to grab the location from which a request has been made, and how they relate to anti-scraping."))}u.isMDXComponent=!0},33542:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/canvas-differences-f6c668c93ead711787a67a7dac7ea62b.png"},67025:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dont-fingerprint-me-51a71cc91aec391b54c341abe69c3cf6.png"},92552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fingerprinted-headers-ec689af0e137398a072e51fb876a7a33.png"}}]);
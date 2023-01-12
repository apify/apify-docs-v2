"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Web scraping for beginners",description:"Learn how to develop web scrapers with this comprehensive and practical course. Go from beginner to expert, all in one place.",sidebar_position:1,category:"web scraping & automation",slug:"/web-scraping-for-beginners"},s="Web scraping for beginners",c={unversionedId:"webscraping/web_scraping_for_beginners/index",id:"webscraping/web_scraping_for_beginners/index",title:"Web scraping for beginners",description:"Learn how to develop web scrapers with this comprehensive and practical course. Go from beginner to expert, all in one place.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/index.md",sourceDirName:"webscraping/web_scraping_for_beginners",slug:"/web-scraping-for-beginners",permalink:"/academy/web-scraping-for-beginners",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1673530116,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:1,frontMatter:{title:"Web scraping for beginners",description:"Learn how to develop web scrapers with this comprehensive and practical course. Go from beginner to expert, all in one place.",sidebar_position:1,category:"web scraping & automation",slug:"/web-scraping-for-beginners"},sidebar:"academy",previous:{title:"Home",permalink:"/academy/"},next:{title:"Introduction",permalink:"/academy/web-scraping-for-beginners/introduction"}},p={},u=[{value:"Why learn scraper development?",id:"why-learn",level:2},{value:"Course Summary",id:"summary",level:2},{value:"Requirements",id:"requirements",level:2},{value:"JavaScript + Node.js",id:"javascript-and-node",level:3},{value:"General web development",id:"general-web-development",level:3},{value:"jQuery or Cheerio",id:"jquery-or-cheerio",level:3},{value:"Next up",id:"next",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Web scraping for beginners"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to develop web scrapers with this comprehensive and practical course. Go from beginner to expert, all in one place.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("strong",{parentName:"p"},"Web scraping for beginners"),", a comprehensive and practical web scraping course that will take you from an absolute beginner to a successful web scraper developer. This course is sponsored by ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com",target:"_blank",rel:"noopener"},"Apify"),", the web scraping and automation platform, but we will use only open-source technologies throughout all academy lessons. This means that the skills you learn will be applicable to any scraping project, and you'll be able to run your scrapers on any computer. No Apify account needed."),(0,o.kt)("h2",{id:"why-learn"},"Why learn scraper development?"),(0,o.kt)("p",null,"With so many point-and-click tools and no-code software that can help you extract data from websites, what is the point of learning scraper development? Contrary to what their marketing departments say, a point-and-click or no-code tool will never be as flexible, as powerful, or as optimized as a custom-built scraper."),(0,o.kt)("p",null,"Any software can do only what it was programmed to do. If you build your own scraper, it can do anything you want. And you can always quickly change it to do more, less, or the same, but faster or cheaper. The possibilities are endless once you know how scraping really works."),(0,o.kt)("p",null,"Scraper development is a fun and challenging way to learn web development, web technologies, and understand the internet. You will reverse-engineer websites and understand how they work internally, what technologies they use and how they communicate with their servers. You will also master your chosen programming language and core programming concepts. When you truly understand web scraping, learning other technology like React or Next.js will be a piece of cake."),(0,o.kt)("h2",{id:"summary"},"Course Summary"),(0,o.kt)("p",null,"When we set out to create the Academy, we wanted to build a complete guide to modern web scraping - a course that a beginner could use to create their first scraper, as well as a resource that professionals will continuously use to learn about advanced and niche web scraping techniques and technologies. All lessons include code examples and code-along exercises that you can use to immediately put your scraping skills into action."),(0,o.kt)("p",null,"This is what you'll learn in the ",(0,o.kt)("strong",{parentName:"p"},"Web scraping for beginners")," course:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/academy/web-scraping-for-beginners",target:null,rel:null},"Web scraping for beginners"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/academy/web-scraping-for-beginners/data-collection",target:null,rel:null},"Basics of data collection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/academy/web-scraping-for-beginners/crawling",target:null,rel:null},"Basics of crawling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/academy/web-scraping-for-beginners/best-practices",target:null,rel:null},"Best practices"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We release course content as soon as we write it instead of launching it all at the same time much later. If you want to get notified about new lessons in the academy, ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/sign-up?asrc=developers_portal",target:"_blank",rel:"noopener"},"sign up for a free Apify account")," to get our newsletters.")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"You don't need to be a developer or a software engineer to complete this course, but basic programming knowledge is recommended. Don't be afraid, though. We explain everything in great detail in the this course and provide external references that can help you level up your web scraping and development skills. If you're new to programming, pay very close attention to the instructions and examples. A seemingly insignificant thing like using ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"()")," can make a lot of difference."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you don't already have basic programming/web development knowledge and would like to be well-prepared for this course, we recommend taking a ",(0,o.kt)("a",{parentName:"p",href:"https://www.codecademy.com/learn/introduction-to-javascript",target:"_blank",rel:"noopener"},"JavaScript course")," and learning about ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/css/css_selectors.asp",target:"_blank",rel:"noopener"},"CSS Selectors"),".")),(0,o.kt)("p",null,"As you progress to the more advanced courses, the coding will get more challenging, but will still be manageable to a person with an intermediate level of programming skills."),(0,o.kt)("p",null,"Ideally, you should have at least a moderate understanding of the following concepts:"),(0,o.kt)("h3",{id:"javascript-and-node"},"JavaScript + Node.js"),(0,o.kt)("p",null,"It is recommended to understand at least the fundamentals of JavaScript and be proficient with Node.js prior to starting this course. If you are not yet comfortable with asynchronous programming (with promises and ",(0,o.kt)("inlineCode",{parentName:"p"},"async...await"),"), loops (and the different types of loops in JavaScript), modularity, or working with external packages, we would recommend studying the following resources before coming back and continuing this section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=vn3tm0quoqE&ab_channel=Fireship",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"async...await")," (YouTube)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",target:"_blank",rel:"noopener"},"JavaScript loops (MDN)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.section.io/engineering-education/how-to-use-modular-patterns-in-nodejs/",target:"_blank",rel:"noopener"},"Modularity in Node.js"))),(0,o.kt)("h3",{id:"general-web-development"},"General web development"),(0,o.kt)("p",null,"Throughout the next lessons, we will sometimes use certain technologies and terms related to the web without explaining them. This is because the knowledge of them will be ",(0,o.kt)("strong",{parentName:"p"},"assumed")," (unless we're showing something out of the ordinary)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML",target:"_blank",rel:"noopener"},"HTML")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP",target:"_blank",rel:"noopener"},"HTTP protocol")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/academy/web-scraping-for-beginners/data-collection/browser-devtools",target:null,rel:null},"DevTools"))),(0,o.kt)("h3",{id:"jquery-or-cheerio"},"jQuery or Cheerio"),(0,o.kt)("p",null,"We'll be using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"Cheerio"))," package a whole lot to parse data from HTML. This package provides a simple API using jQuery syntax to help traverse downloaded HTML within Node.js."),(0,o.kt)("h2",{id:"next"},"Next up"),(0,o.kt)("p",null,"The course begins with a small bit of theory and moves into some realistic and practical examples of collecting data from the most popular websites on the internet using your browser console. So ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/introduction",target:null,rel:null},"let's get to it!")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you already have experience with HTML, CSS, and browser DevTools, feel free to skip to the ",(0,o.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/crawling",target:null,rel:null},"Basics of crawling")," section.")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[4078],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),h=a,u=m["".concat(i,".").concat(h)]||m[h]||d[h]||r;return o?n.createElement(u,s(s({ref:t},c),{},{components:o})):n.createElement(u,s({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},89612:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),s=["components"],l={title:"Browser DevTools - I",description:"Learn about browser DevTools, a valuable tool in the world of web scraping , and how you can use them to extract data from a website.",sidebar_position:1,slug:"/web-scraping-for-beginners/data-collection/browser-devtools"},i="Browser DevTools",p={unversionedId:"webscraping/web_scraping_for_beginners/data_extraction/browser_devtools",id:"webscraping/web_scraping_for_beginners/data_extraction/browser_devtools",title:"Browser DevTools - I",description:"Learn about browser DevTools, a valuable tool in the world of web scraping , and how you can use them to extract data from a website.",source:"@site/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/browser_devtools.md",sourceDirName:"webscraping/web_scraping_for_beginners/data_extraction",slug:"/web-scraping-for-beginners/data-collection/browser-devtools",permalink:"/academy/web-scraping-for-beginners/data-collection/browser-devtools",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/web_scraping_for_beginners/data_extraction/browser_devtools.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675941697,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:1,frontMatter:{title:"Browser DevTools - I",description:"Learn about browser DevTools, a valuable tool in the world of web scraping , and how you can use them to extract data from a website.",sidebar_position:1,slug:"/web-scraping-for-beginners/data-collection/browser-devtools"},sidebar:"academy",previous:{title:"Basics of data collection",permalink:"/academy/web-scraping-for-beginners/data-collection"},next:{title:"Browser DevTools - II",permalink:"/academy/web-scraping-for-beginners/data-collection/using-devtools"}},c={},d=[{value:"Elements tab",id:"elements-tab",level:2},{value:"Selecting an element",id:"selecting-an-element",level:2},{value:"Interacting with an element",id:"interacting-with-elements",level:2},{value:"Next up",id:"next",level:2}],m={toc:d};function h(e){var t=e.components,l=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"devtools"},"Browser DevTools"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn about browser DevTools, a valuable tool in the world of web scraping , and how you can use them to extract data from a website.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Even though DevTools stands for developer tools, everyone can use them to inspect a website. Each major browser has their own DevTools. We will use Chrome DevTools as an example, but the advice is applicable to any browser, as the tools are extremely similar. To open Chrome DevTools, you can press ",(0,r.kt)("strong",{parentName:"p"},"F12")," or right-click anywhere in the page and choose ",(0,r.kt)("strong",{parentName:"p"},"Inspect"),"."),(0,r.kt)("p",null,"Now go to ",(0,r.kt)("a",{parentName:"p",href:"https://wikipedia.com",target:"_blank",rel:"noopener"},"Wikipedia")," and open your DevTools there. Inspecting the same website as us will make this lesson easier to follow."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wikipedia with Chrome DevTools open",src:o(7135).Z,width:"3382",height:"2258"})),(0,r.kt)("h2",{id:"elements-tab"},"Elements tab"),(0,r.kt)("p",null,"When you first open Chrome DevTools on Wikipedia, you will start on the Elements tab (In Firefox it's called the ",(0,r.kt)("strong",{parentName:"p"},"Inspector"),"). You can use this tab to inspect the page's HTML on the left hand side, and its CSS on the right. The items in the HTML view are called ",(0,r.kt)("a",{parentName:"p",href:"/academy/concepts/html-elements",target:null,rel:null},(0,r.kt)("strong",{parentName:"a"},"elements")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Elements tab in Chrome DevTools",src:o(53134).Z,width:"1750",height:"1596"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"On a screen that is narrow or has a small resolution, the CSS information can appear under the HTML tab, not on the right.")),(0,r.kt)("p",null,"Each element is enclosed in an HTML tag. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"<span>")," are all tags. When you add something inside of those tags, like ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>Hello!</p>")," you create an element. You can also see elements inside other elements in the ",(0,r.kt)("strong",{parentName:"p"},"Elements")," tab. This is called nesting, and it gives the page its structure."),(0,r.kt)("p",null,"At the bottom, there's the ",(0,r.kt)("strong",{parentName:"p"},"JavaScript console"),", which is a powerful tool which can be used to manipulate the website. If the console is not there, you can press ",(0,r.kt)("strong",{parentName:"p"},"ESC")," to toggle it. All of this might look super complicated at first, but don't worry, there's no need to understand everything just yet - we'll walk you through all the important things you need to know."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Console in Chrome DevTools",src:o(71959).Z,width:"1303",height:"1140"})),(0,r.kt)("h2",{id:"selecting-an-element"},"Selecting an element"),(0,r.kt)("p",null,"In the top left corner of DevTools, there's a little arrow icon with a square."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chrome DevTools element selection tool",src:o(36963).Z,width:"1378",height:"908"})),(0,r.kt)("p",null,"Click it and then hover your mouse over ",(0,r.kt)("strong",{parentName:"p"},"The Free Encyclopedia"),", Wikipedia's subtitle. DevTools will show you information about the HTML element being hovered over. Now click the element. It will be selected in the ",(0,r.kt)("strong",{parentName:"p"},"Elements")," tab, which allows for further inspection of the element and its content."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chrome DevTools element hover effect",src:o(48949).Z,width:"2046",height:"1196"})),(0,r.kt)("h2",{id:"interacting-with-elements"},"Interacting with an element"),(0,r.kt)("p",null,"After you select the subtitle element, right-click the highlighted element in the Elements tab to show a menu with available actions. For now, select ",(0,r.kt)("strong",{parentName:"p"},"Store as global variable")," (",(0,r.kt)("strong",{parentName:"p"},"Use in Console")," in Firefox). You'll see that a new variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"temp1")," (",(0,r.kt)("inlineCode",{parentName:"p"},"temp0")," in Firefox) appeared in your DevTools Console. You can now use the Console to access the element's properties using JavaScript."),(0,r.kt)("p",null,"For example, if you wanted to scrape the text inside the element, you could use the ",(0,r.kt)("inlineCode",{parentName:"p"},"textContent")," property to get it. Copy and paste (or type) the following command into your Console and press Enter. The text of your ",(0,r.kt)("inlineCode",{parentName:"p"},"temp1")," element - The Free Encyclopedia - will display in the Console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"temp1.textContent\n")),(0,r.kt)("p",null,"Now run this command to get the HTML of the element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"temp1.outerHTML\n")),(0,r.kt)("p",null,"And finally, run the next command to change the text of the element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"temp1.textContent = 'Hello World!';\n")),(0,r.kt)("p",null,"By changing HTML elements from the Console, you can change what's displayed on the page. This change only happens on your own computer so don't worry, you haven't hacked Wikipedia."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chrome DevTools JavaScript command execution",src:o(11489).Z,width:"1722",height:"1330"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can interact with the page in many more ways using the Console. If you want to dive deeper we recommend this ",(0,r.kt)("a",{parentName:"p",href:"https://javascript.info/document",target:"_blank",rel:"noopener"},"tutorial on documents"),". A web page in a browser is called a document.")),(0,r.kt)("h2",{id:"next"},"Next up"),(0,r.kt)("p",null,"In this lesson, we learned the absolute basics of interaction with a page using the DevTools. In the ",(0,r.kt)("a",{parentName:"p",href:"/academy/web-scraping-for-beginners/data-collection/using-devtools",target:null,rel:null},"next lesson"),", you will learn how to extract data from it. We will extract data about the on-sale products on the ",(0,r.kt)("a",{parentName:"p",href:"https://warehouse-theme-metal.myshopify.com",target:"_blank",rel:"noopener"},"Warehouse store"),"."),(0,r.kt)("p",null,"It isn't a real store, but a full-featured demo of a Shopify online store. And that is just perfect for our purposes. Shopify is one of the largest e-commerce platforms in the world, and it uses all the latest technologies that a real, modern e-commerce web-application would use. Learning to scrape a Shopify store is useful, because you can immediately apply the learnings to millions of websites."))}h.isMDXComponent=!0},11489:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/browser-devtools-console-commands-9f82a9905f884595024c32ee4519760a.png"},71959:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/browser-devtools-console-0752bf16933c5b7b8858dac3bbd80694.png"},36963:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/browser-devtools-element-selection-c1cf8032d6d23ad5941c7ebf2b0f1ae5.png"},53134:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/browser-devtools-elements-tab-fb7aa7fc2b9442bb7fd94dbc6955e4c8.png"},48949:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/browser-devtools-hover-b85b0699eef969e79c92fda46154bbe2.png"},7135:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/browser-devtools-wikipedia-d20b19ea46ed30572858ddc63d9e0f23.png"}}]);
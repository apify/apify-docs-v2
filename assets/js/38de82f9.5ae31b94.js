"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5402],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],p={title:"Base Docker images",description:"Learn about the Docker images you can use as your actor's base. Choose the correct base image for your actor's type and requirements.",slug:"/actors/development/base-docker-images"},l="[](#base-docker-images) Base Docker images",s={unversionedId:"actors/development/base_docker_images",id:"actors/development/base_docker_images",title:"Base Docker images",description:"Learn about the Docker images you can use as your actor's base. Choose the correct base image for your actor's type and requirements.",source:"@site/sources/platform/actors/development/base_docker_images.md",sourceDirName:"actors/development",slug:"/actors/development/base-docker-images",permalink:"/platform/actors/development/base-docker-images",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dan Nguyen",lastUpdatedAt:1672828422,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"Base Docker images",description:"Learn about the Docker images you can use as your actor's base. Choose the correct base image for your actor's type and requirements.",slug:"/actors/development/base-docker-images"},sidebar:"docs",previous:{title:"Development",permalink:"/platform/actors/development"},next:{title:"Builds",permalink:"/platform/actors/development/builds"}},c={},m=[{value:" Images with Apify SDK and Crawlee preinstalled",id:"-images-with-apify-sdk-and-crawlee-preinstalled",level:2},{value:" Images with Apify Client for Python preinstalled",id:"-images-with-apify-client-for-python-preinstalled",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-base-docker-images"},(0,o.kt)("a",{parentName:"h1",href:"#base-docker-images",target:null,rel:null})," Base Docker images"),(0,o.kt)("p",null,"Apify provides several Docker images that can be used as a base for user actors."),(0,o.kt)("p",null,"All images come in two versions: the ",(0,o.kt)("strong",{parentName:"p"},"latest")," tag corresponds to the stable version and ",(0,o.kt)("strong",{parentName:"p"},"beta")," to images where we test new features. Use the beta version at your own risk."),(0,o.kt)("p",null,"Note that all Apify Docker images are pre-cached on Apify servers in order to speed up the actor builds and runs. The source code used to generate the images is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-actor-docker",target:"_blank",rel:"noopener"},"apify-actor-docker")," GitHub repository."),(0,o.kt)("h2",{id:"-images-with-apify-sdk-and-crawlee-preinstalled"},(0,o.kt)("a",{parentName:"h2",href:"#apify-sdk-actor-images",target:null,rel:null})," Images with Apify SDK and Crawlee preinstalled"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com",target:null,rel:null},"Apify SDK for JavaScript")," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee")," are preinstalled on these images. You can read more about them in the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/guides/docker-images",target:null,rel:null},"Apify SDK Docker image guide"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Node.js 16 on Alpine Linux")," (",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apify/actor-node/",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-node")),") - slim and efficient image, contains only the most elementary tools. Note that headless browsers (Puppeteer, Playwright) are not available in this image.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Node.js 16 + Puppeteer + Chrome on Debian")," (",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apify/actor-node-puppeteer-chrome/",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-node-puppeteer-chrome")),") - larger image with the Chromium and Google Chrome browsers and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"puppeteer"))," library bundled. With this image, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/function/launchPuppeteer",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"launchPuppeteer()"))," function and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler")),". Note that Chrome requires quite a lot of resources, therefore the actor should run with at least 2048 MB of memory.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Node.js 16 + Playwright + Chrome on Debian"),"  (",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apify/actor-node-playwright-chrome/",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-node-playwright-chrome")),") - similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image, but it comes preinstalled the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"playwright"))," automation library instead of Puppeteer. With this image, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/function/launchPlaywright",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"launchPlaywright()"))," function and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler")),". This image also comes with a ",(0,o.kt)("inlineCode",{parentName:"p"},"firefox")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"webkit")," version."))),(0,o.kt)("p",null,"For a full list of available images, ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/guides/docker-images",target:null,rel:null},"see the Apify SDK Docker image guide"),". Note that some images available in the Apify UI can be marked as deprecated. This means that they should no longer be used for new projects and old projects are encouraged to migrate to one of the non-deprecated images."),(0,o.kt)("h2",{id:"-images-with-apify-client-for-python-preinstalled"},(0,o.kt)("a",{parentName:"h2",href:"#python-actor-images",target:null,rel:null})," Images with Apify Client for Python preinstalled"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/apify-client-python",target:"_blank",rel:"noopener"},"Apify API client for Python")," is preinstalled on these images."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Python 3 on Alpine Linux")," (",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/apify/actor-python/",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify/actor-python")),") - a slim image with Python 3 and the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/apify-client-python",target:"_blank",rel:"noopener"},"Apify API client for Python")," preinstalled. Comes in multiple versions containing Python 3.7, 3.8, 3.9 or 3.10.")))}d.isMDXComponent=!0}}]);
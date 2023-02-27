"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),g=n,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Bypasing Cloudflare browser check",description:"Learn how to bypass cloudflare browser challenge with crawlee.",sidebar_position:3,slug:"/anti-scraping/mitigation/cloudflare-challenge.md"},l="Bypassing Cloudflare browser check",c={unversionedId:"webscraping/anti_scraping/mitigation/cloudflare_challenge",id:"webscraping/anti_scraping/mitigation/cloudflare_challenge",title:"Bypasing Cloudflare browser check",description:"Learn how to bypass cloudflare browser challenge with crawlee.",source:"@site/sources/academy/webscraping/anti_scraping/mitigation/cloudflare_challenge.md",sourceDirName:"webscraping/anti_scraping/mitigation",slug:"/anti-scraping/mitigation/cloudflare-challenge.md",permalink:"/academy/anti-scraping/mitigation/cloudflare-challenge.md",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/anti_scraping/mitigation/cloudflare_challenge.md",tags:[],version:"current",lastUpdatedBy:"petrpatek",lastUpdatedAt:1677506637,formattedLastUpdatedAt:"Feb 27, 2023",sidebarPosition:3,frontMatter:{title:"Bypasing Cloudflare browser check",description:"Learn how to bypass cloudflare browser challenge with crawlee.",sidebar_position:3,slug:"/anti-scraping/mitigation/cloudflare-challenge.md"},sidebar:"academy",previous:{title:"Using proxies",permalink:"/academy/anti-scraping/mitigation/using-proxies"},next:{title:"Generating fingerprints",permalink:"/academy/anti-scraping/mitigation/generating-fingerprints"}},p={},u=[],d={toc:u};function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloudflare-challenge"},"Bypassing Cloudflare browser check"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to bypass cloudflare browser challenge with crawlee.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"There are a few strategies that can be employed if you find yourself stuck. One key strategy is to ensure that your browser fingerprint is consistent. In some cases, the default browser fingerprint may actually be more effective than an inconsistently generated fingerprint. Additionally, it may be beneficial to avoid masking a Linux browser to look like a Windows or macOS browser, although this will depend on the specific configuration of the website you are targeting."),(0,o.kt)("p",null,"For those using Crawlee, the library provides out-of-the-box support for generating consistent fingerprints that are able to pass the Cloudflare challenge. However, it's important to note that in some cases, the Cloudflare challenge screen may return a 403 status code even if it is evaluating the fingerprint and the request is not blocked. This can cause the default Crawlee browser crawlers to throw an error and not wait until the challenge is submitted and the page is redirected to the target webpage."),(0,o.kt)("p",null,"To address this issue, it is necessary to alter the crawler configuration. For example, you might use the following code to remove default blocked status code handling from the crawler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const crawler = new PlaywrightCrawler({\n    ...otherOptions,\n    sessionPoolOptions: {\n        blockedStatusCodes: [],\n    },\n});\n")),(0,o.kt)("p",null,"It's important to note that by removing default blocked status code handling, you should also add custom session retire logic on blocked pages to reduce retries. Additionally, you should add waiting logic to start the automation logic only after the Cloudflare challenge is solved and the page is redirected. This can be accomplished by waiting for a common selector that is available on all pages, such as a header logo."),(0,o.kt)("p",null,"In some cases, the browser may not pass the check and you may be presented with a captcha, indicating that your IP address has been graylisted. If you are working with a large pool of proxies you can retire the session and use another IP. However if you have small pool of proxies you might want to whitelist the IP. To do this, you'll need to solve the captcha to improve your IP address's reputation. There are various captcha-solving services available, such as ",(0,o.kt)("a",{parentName:"p",href:"https://anti-captcha.com/",target:"_blank",rel:"noopener"},"AntiCaptcha")," or ",(0,o.kt)("a",{parentName:"p",href:"https://anycaptcha.com/",target:"_blank",rel:"noopener"},"AnyCaptcha"),", that you can use for this purpose. For more info check the section about ",(0,o.kt)("a",{parentName:"p",href:"/academy/anti-scraping/techniques/captchas",target:null,rel:null},"Captchas"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://images.ctfassets.net/slt3lc6tev37/6sN2VXiUaJpjxqVfTbZEJd/9a4e13cbf08ce29797167c133c534e1f/image1.png",alt:"Cloudflare captcha"})),(0,o.kt)("p",null,"In summary, while Cloudflare's browser challenge is designed to protect websites from automated scraping, it can be bypassed by ensuring a consistent browser fingerprint and customizing your scraping strategy. Crawlee offers out-of-the-box support for generating consistent fingerprints, but you may need to adjust your crawler configuration to handle Cloudflare's response. By following these tips, you can successfully navigate Cloudflare's browser challenge and continue scraping the data you need."))}g.isMDXComponent=!0}}]);
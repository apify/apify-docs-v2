"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[2705],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20130:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Tips and tricks",description:"Learn how to make your automated processes more effective. Avoid common RPA pitfalls, future-proof your programs and improve your processes.",slug:"/robotic-process-automation/tips-and-tricks"},l="[](./tips-and-tricks) RPA tips and tricks",p={unversionedId:"robotic_process_automation/tips_and_tricks",id:"robotic_process_automation/tips_and_tricks",title:"Tips and tricks",description:"Learn how to make your automated processes more effective. Avoid common RPA pitfalls, future-proof your programs and improve your processes.",source:"@site/sources/platform/robotic_process_automation/tips_and_tricks.md",sourceDirName:"robotic_process_automation",slug:"/robotic-process-automation/tips-and-tricks",permalink:"/platform/robotic-process-automation/tips-and-tricks",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675423550,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{title:"Tips and tricks",description:"Learn how to make your automated processes more effective. Avoid common RPA pitfalls, future-proof your programs and improve your processes.",slug:"/robotic-process-automation/tips-and-tricks"},sidebar:"docs",previous:{title:"Robotic process automation",permalink:"/platform/robotic-process-automation"},next:{title:"Monitoring",permalink:"/platform/monitoring"}},c={},u=[{value:"Event-bound flows",id:"event-bound-flows",level:2},{value:"Proofs and verification",id:"proofs-and-verification",level:2},{value:"Presumption of failure",id:"presumption-of-failure",level:2},{value:"Targeting elements",id:"targeting-elements",level:2},{value:"DOM element selectors",id:"dom-element-selectors",level:3},{value:"Content pattern matching",id:"content-pattern-matching",level:3}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-rpa-tips-and-tricks"},(0,o.kt)("a",{parentName:"h1",href:"./tips-and-tricks",target:null,rel:null})," RPA tips and tricks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to make your automated processes more effective. Avoid common RPA pitfalls, future-proof your programs and improve your processes.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This collection of ",(0,o.kt)("a",{parentName:"p",href:"/platform/robotic-process-automation",target:null,rel:null},"robotic process automation")," (RPA) tips and tricks aims to help you make your automations work smoother and produce fewer errors."),(0,o.kt)("h2",{id:"event-bound-flows"},"Event-bound flows"),(0,o.kt)("p",null,"Always strive to make automation as fluid as possible. Listen to events and react to them as needed by triggering consecutive actions immediately."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Avoid")," any ",(0,o.kt)("strong",{parentName:"li"},"fixed-duration")," delays wherever possible."),(0,o.kt)("li",{parentName:"ul"},"Prefer fluid flow based on the ",(0,o.kt)("strong",{parentName:"li"},"occurrence of events"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Avoid:\nawait page.waitForTimeout(timeout);\n\n// Good:\nawait page.waitForFunction(function, options, args);\n\n// Good:\nawait page.waitForFunction(() => {\n    return window.location.href.includes('path');\n});\n\n// Good:\nawait page.waitForFunction(selector =>\n    document.querySelector(selector).innerText,\n    { polling: 'mutation' },\n    '[data-qa=\"btnAppleSignUp\"]',\n);\n")),(0,o.kt)("h2",{id:"proofs-and-verification"},"Proofs and verification"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Absence of evidence \u2260 evidence of absence"),"."),(0,o.kt)("p",null,"Make sure output remains consistent regardless of any changes at the target host/website:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always base all important checks on the ",(0,o.kt)("strong",{parentName:"li"},"presence")," of proof."),(0,o.kt)("li",{parentName:"ul"},"Never build any important checks on the ",(0,o.kt)("strong",{parentName:"li"},"absence")," of anything.")),(0,o.kt)("p",null,"The absence of an expected element or message does ",(0,o.kt)("strong",{parentName:"p"},"not")," prove an action has been (un)successful. The website might have been updated or expected content may no longer exist in the original form. The ",(0,o.kt)("strong",{parentName:"p"},"action relying on the absence")," of something might still be failing. Instead, it must rely on ",(0,o.kt)("strong",{parentName:"p"},"proof of presence"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good"),": Rely on the presence of an element or other content confirming a successful action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"try {\n    await page.waitForSelector('#PaymentAccepted');\n} catch (error) {\n    return OUTPUT.paymentFailure;\n}\n\nreturn OUTPUT.paymentSuccess;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid"),": Relying on the absence of an element that may have been simply updated or changed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const $paymentAmount = await page.$('#PaymentAmount');\n\nif (!$paymentAmount) return OUTPUT.paymentSuccess;\n")),(0,o.kt)("h2",{id:"presumption-of-failure"},"Presumption of failure"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Every action has failed until it has provably succeeded.")),(0,o.kt)("p",null,"Always assume an action has failed before having a proof of success. Always verify important steps to avoid false positives or false negatives."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"False positive = ",(0,o.kt)("strong",{parentName:"li"},"false / failed")," outcome reported as ",(0,o.kt)("strong",{parentName:"li"},"true / successful")," on output."),(0,o.kt)("li",{parentName:"ul"},"False negative = ",(0,o.kt)("strong",{parentName:"li"},"true / successful")," outcome reported as ",(0,o.kt)("strong",{parentName:"li"},"false / failed")," on output.")),(0,o.kt)("p",null,"Assuming any action has been successful without direct proof is dangerous. Disprove failure actively through proof of success instead. Only then consider output valid and verified."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good"),": Verify outcome through proof. Clearly disprove failure of an important action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await Promise.all([\n    page.click('submitPayment'),\n    page.waitForNavigation()\n]);\n\ntry {\n    await page.waitForFunction(selector =>\n        document.querySelector(selector).innerText.includes('Payment Success'),\n        { polling: 'mutation' },\n        '#PaymentOutcome');\n} catch (error) {\n    return OUTPUT.paymentFailure;\n};\n\nreturn OUTPUT.paymentSuccess;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid"),": Not verifying an outcome. It can easily fail despite output claiming otherwise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await Promise.all([\n    page.click('submitPayment'),\n    page.waitForNavigation()\n]);\n\nreturn OUTPUT.paymentSuccess;\n")),(0,o.kt)("h2",{id:"targeting-elements"},"Targeting elements"),(0,o.kt)("p",null,"Be both as specific and as generic as possible at the same time."),(0,o.kt)("h3",{id:"dom-element-selectors"},"DOM element selectors"),(0,o.kt)("p",null,"Make sure your ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",target:"_blank",rel:"noopener"},"CSS selectors")," have the best chance to remain valid after a website is updated."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prefer ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"higher-specificity"))," selectors over lower specificity ones (",(0,o.kt)("strong",{parentName:"li"},"#id")," over ",(0,o.kt)("strong",{parentName:"li"},".class"),")."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",target:"_blank",rel:"noopener"},(0,o.kt)("strong",{parentName:"a"},"attribute selectors"))," to search parts of attributes (prefix, suffix, etc.)."),(0,o.kt)("li",{parentName:"ul"},"Use element attributes with the ",(0,o.kt)("strong",{parentName:"li"},"lowest probability of a future change"),"."),(0,o.kt)("li",{parentName:"ul"},"Completely ",(0,o.kt)("strong",{parentName:"li"},"avoid or strip")," selectors of values that are clearly ",(0,o.kt)("strong",{parentName:"li"},"random"),"."),(0,o.kt)("li",{parentName:"ul"},"Completely ",(0,o.kt)("strong",{parentName:"li"},"avoid or strip")," selectors of values that are clearly ",(0,o.kt)("strong",{parentName:"li"},"flexible"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extend low-specificity")," selectors to reduce probability of ",(0,o.kt)("strong",{parentName:"li"},"collisions"),".")),(0,o.kt)("p",null,"Below is an example of stripping away too-specific parts of a selector that are likely random or subject to change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'#P_L_v201w3_t3_ReceiptToolStripLabel => a[id*="ReceiptToolStripLabel"]\n')),(0,o.kt)("p",null,"If you are reasonably confident a page layout will remain without any dramatic future changes ",(0,o.kt)("strong",{parentName:"p"},"and")," need to increase the selector specificity to reduce the chance of a collision with other selectors, you can extend the selector as per the principle below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'#ReceiptToolStripLabel_P_L_v201w3_t3 => table li > a[id^="ReceiptToolStripLabel"]\n')),(0,o.kt)("h3",{id:"content-pattern-matching"},"Content pattern matching"),(0,o.kt)("p",null,"Matching elements by content is already natively supported by ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright"),". Playwright is a ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js")," library that allows you to automate Chromium, Firefox and WebKit with a single API."),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/",target:"_blank",rel:"noopener"},"Puppeteer"),", you can use custom utility functions to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Polyfill",target:"_blank",rel:"noopener"},"polyfill")," this functionality."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[8674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),A=c(a),d=o,f=A["".concat(s,".").concat(d)]||A[d]||u[d]||i;return a?r.createElement(f,n(n({ref:t},p),{},{components:a})):r.createElement(f,n({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=A;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var c=2;c<i;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}A.displayName="MDXCreateElement"},45454:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=a(87462),o=a(63366),i=(a(67294),a(3905)),n=["components"],l={title:"Publishing your actor",description:"Prepare your actor for the Apify Store with a description and README file and learn how to make your actor available to the public.",sidebar_position:7.5,slug:"/actors/publishing"},s="Publishing your actor",c={unversionedId:"actors/publishing",id:"actors/publishing",title:"Publishing your actor",description:"Prepare your actor for the Apify Store with a description and README file and learn how to make your actor available to the public.",source:"@site/sources/platform/actors/publishing.md",sourceDirName:"actors",slug:"/actors/publishing",permalink:"/platform/actors/publishing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675423550,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:7.5,frontMatter:{title:"Publishing your actor",description:"Prepare your actor for the Apify Store with a description and README file and learn how to make your actor available to the public.",sidebar_position:7.5,slug:"/actors/publishing"},sidebar:"docs",previous:{title:"Paid actors",permalink:"/platform/actors/paid-actors"},next:{title:"Security",permalink:"/platform/actors/security"}},p={},u=[{value:"Description",id:"description",level:2},{value:"README",id:"readme",level:2},{value:"Make your actor Public",id:"make-your-actor-public",level:2},{value:"Actor testing",id:"actor-testing",level:2},{value:"What if my actor cannot comply with the test logic?",id:"what-if-my-actor-cannot-comply-with-the-test-logic",level:3},{value:"Advanced actor testing",id:"advanced-actor-testing",level:3}],A={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},A,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"publishing-actor"},"Publishing your actor"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prepare your actor for the Apify Store with a description and README file and learn how to make your actor available to the public.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before you make your actor public, it is important to make sure your actor has good ",(0,i.kt)("strong",{parentName:"p"},"Description")," and ",(0,i.kt)("strong",{parentName:"p"},"README")," sections so that users can understand what your actor does, how to configure its inputs, and what kind of output it returns. In this lesson, we will briefly go over each of the fields you have to fill in before publishing your actor. For more detailed information about ",(0,i.kt)("a",{parentName:"p",href:"/academy/get-most-of-actors/seo-and-promotion",target:null,rel:null},"SEO and promotion")," and ",(0,i.kt)("a",{parentName:"p",href:"/academy/get-most-of-actors/actor-readme",target:null,rel:null},"how to write a comprehensive README"),", check our guides at Apify Developer Academy."),(0,i.kt)("p",null,"You can find the Title and description configurations by going to ",(0,i.kt)("strong",{parentName:"p"},"Apify Console")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Actors")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"My Actors")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"your-actor")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Settings \u2192 Publication")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor publication settings",src:a(30452).Z,width:"1597",height:"757"})),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The actor\u2019s description is a short paragraph describing the actor\u2019s purpose. It will be displayed on the actor\u2019s page right below its title."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor title and description",src:a(64158).Z,width:"1240",height:"489"})),(0,i.kt)("p",null,"While writing your actor\u2019s description you also have the option to write an SEO title and description. The SEO title and description are used in place of the actor name and description on search engine results pages. Good SEO titles and descriptions utilize popular keywords, summarize the actor functionality, and are between 40-50 and 140-156 characters long, respectively."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SEO title and description",src:a(52711).Z,width:"1111",height:"288"})),(0,i.kt)("h2",{id:"readme"},"README"),(0,i.kt)("p",null,"The next step is to include a ",(0,i.kt)("strong",{parentName:"p"},"README")," detailing the actor\u2019s features, reasons to scrape the targeted website, and an explanation about how to use the actor."),(0,i.kt)("p",null,"Keep in mind that the actor\u2019s README is generated from your README.md file, and you can apply the same ","[SEO principles]","({{ apify_platform/publishing_actors_on_apify_store/seo_and_promotion.md}})! described in the previous lesson to your README."),(0,i.kt)("p",null,"To save some time when writing an actor\u2019s README, you can use the template below as a starting point:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zpelechova/readme-template",target:"_blank",rel:"noopener"},"https://github.com/zpelechova/readme-template")),(0,i.kt)("p",null,"Note that the complexity of the README should match the actor\u2019s complexity. This means that the template above is not immutable and that you can adapt it to fit the particularities of your actor."),(0,i.kt)("h2",{id:"make-your-actor-public"},"Make your actor Public"),(0,i.kt)("p",null,"Once you have finished coding and testing your actor, it's time to publish it."),(0,i.kt)("p",null,"From your actor\u2019s page in Apify Console, go to ",(0,i.kt)("strong",{parentName:"p"},"Publication \u2192 Display information"),', fill in all the relevant fields for your actor (e.g., "Icons","Actor name", "Description", "Categories") and save it.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor settings",src:a(483).Z,width:"3385",height:"1417"})),(0,i.kt)("p",null,"Once all the fields are filled in, you will notice that the button ",(0,i.kt)("strong",{parentName:"p"},"Publish to Store")," will turn green. Just click on it and your actor should now be available to the public on Apify Store."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Publish your actor",src:a(4592).Z,width:"1645",height:"648"})),(0,i.kt)("p",null,"To check if everything went smoothly, you can go to ",(0,i.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," and search for your actor\u2019s name."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apify Store",src:a(12147).Z,width:"1297",height:"614"})),(0,i.kt)("p",null,"Then, click on your actor\u2019s card and you will see your dedicated actor\u2019s page. This is the page where users will most likely have their first contact with your actor, so make sure to carefully review it and check if everything is set up correctly."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor page",src:a(69561).Z,width:"3802",height:"1830"})),(0,i.kt)("h2",{id:"actor-testing"},"Actor testing"),(0,i.kt)("p",null,"Apify has a QA system that regularly runs automated tests to ensure that all actors in the store are functional."),(0,i.kt)("p",null,"The test runs the actor with its default input (defined by the ",(0,i.kt)("strong",{parentName:"p"},"prefill")," option in the input schema file) and expects it to finish with a ",(0,i.kt)("strong",{parentName:"p"},"Succeeded")," status within 5 minutes of the beginning of the run."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor page",src:a(22256).Z,width:"874",height:"148"})),(0,i.kt)("p",null,"If the actor fails to complete successful runs for three consecutive days, the developer will be notified, and the actor will be labeled ",(0,i.kt)("strong",{parentName:"p"},"Under Maintenance")," until it is fixed. After another 14 days of failing runs, you will receive another notification. Finally, if the runs continue to fail after yet another 14 days, the actor will be ",(0,i.kt)("strong",{parentName:"p"},"Deprecated"),"."),(0,i.kt)("h3",{id:"what-if-my-actor-cannot-comply-with-the-test-logic"},"What if my actor cannot comply with the test logic?"),(0,i.kt)("p",null,"Actors that require some sort of authentication will always fail the tests despite being fully functional. If that's the case with your actor, please contact support at ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"mailto:support@apify.com",target:"_blank",rel:"noopener"},"support@apify.com"))," and explain your specific use case that justifies why the actor should be excluded from the automated tests."),(0,i.kt)("h3",{id:"advanced-actor-testing"},"Advanced actor testing"),(0,i.kt)("p",null,"You can easily implement your own tests and customize them to fit your actor's particularities by using our public ",(0,i.kt)("a",{parentName:"p",href:"https://apify.com/pocesar/actor-testing",target:"_blank",rel:"noopener"},"Actor Testing")," tool available on the Apify store."))}d.isMDXComponent=!0},12147:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Apify-Store-9f6dbe04a7750cf57df3953295faaad7.webp"},52711:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/actor-SEO-cf81e09f17cef87c058d377065e5f453.webp"},483:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/actor-display-information-edadffb4c2b700ad9bdbefaf1a403d64.webp"},69561:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/actor-page-7fe90bdf7cc14faa1ee5a232c0595dbb.webp"},30452:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/actor-publication-settings-609a141177aacaf7c30fa7f0a53ac11a.webp"},22256:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/actor-test-06ec218b357a5e86a8c3ea01b1050ac7.webp"},64158:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/actor-title-description-f03a3ed71321e82d7bb72f44747e26d2.webp"},4592:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/webp;base64,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"}}]);
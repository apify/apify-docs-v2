"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3552],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),h=r,y=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return o?n.createElement(y,i(i({ref:t},u),{},{components:o})):n.createElement(y,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},96909:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],l={title:"Deploying",description:"Push local code to the platform, or create a new actor on the console and integrate it with a Git repo to optionally automatically rebuild any new changes.",sidebar_position:5,slug:"/deploying-your-code/deploying"},p="Deploying",s={unversionedId:"platform/deploying_your_code/deploying",id:"platform/deploying_your_code/deploying",title:"Deploying",description:"Push local code to the platform, or create a new actor on the console and integrate it with a Git repo to optionally automatically rebuild any new changes.",source:"@site/sources/academy/platform/deploying_your_code/deploying.md",sourceDirName:"platform/deploying_your_code",slug:"/deploying-your-code/deploying",permalink:"/academy/deploying-your-code/deploying",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673533984,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:5,frontMatter:{title:"Deploying",description:"Push local code to the platform, or create a new actor on the console and integrate it with a Git repo to optionally automatically rebuild any new changes.",sidebar_position:5,slug:"/deploying-your-code/deploying"},sidebar:"academy",previous:{title:"Dockerfile",permalink:"/academy/deploying-your-code/docker-file"},next:{title:"Getting the most of actors on Apify Store",permalink:"/academy/get-most-of-actors"}},u={},c=[{value:"With a Git repository",id:"with-git-repository",level:2},{value:"Creating the actor",id:"creating-the-actor",level:3},{value:"Changing source code location",id:"change-source-code",level:3},{value:"Adding the webhook to the repository",id:"adding-repo-webhook",level:3},{value:"Without a GitHub repository (using the Apify CLI)",id:"with-apify-cli",level:2},{value:"Deployed!",id:"deployed",level:2},{value:"Wrap up",id:"next",level:2}],d={toc:c};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying"},"Deploying"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Push local code to the platform, or create a new actor on the console and integrate it with a Git repo to optionally automatically rebuild any new changes.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Once you've ",(0,a.kt)("strong",{parentName:"p"},"actorified")," your code, there are two ways to deploy your it to the Apify platform. You can either push the code directly from your local machine onto the platform, or you can create a blank actor in the web-interface, then integrate its source code with a GitHub repository."),(0,a.kt)("h2",{id:"with-git-repository"},"With a Git repository"),(0,a.kt)("p",null,"Before we deploy our project onto the Apify platform, let's ensure that we've pushed the changes we made in the last 3 lessons into our remote GitHub repository."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The benefit of using this method is that any time you push to the Git repo, the code on the platform is also updated and the actor is automatically rebuilt. Also, you don't have to use a GitHub repository - you can use GitLab or any other service you'd like.")),(0,a.kt)("h3",{id:"creating-the-actor"},"Creating the actor"),(0,a.kt)("p",null,"Before anything can be integrated, we've gotta create a new actor. Luckily, this is super easy to do. Let's head over to our ",(0,a.kt)("a",{parentName:"p",href:"https://console.apify.com?asrc=developers_portal",target:"_blank",rel:"noopener"},"Apify Console")," and click on the ",(0,a.kt)("strong",{parentName:"p"},"New")," button, then select the ",(0,a.kt)("strong",{parentName:"p"},"Empty")," template."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create new button",src:o(7091).Z,width:"800",height:"158"})),(0,a.kt)("p",null,"Easy peasy!"),(0,a.kt)("h3",{id:"change-source-code"},"Changing source code location"),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Source")," tab on the new actor's page, we'll click the dropdown menu under ",(0,a.kt)("strong",{parentName:"p"},"Source code")," and select ",(0,a.kt)("strong",{parentName:"p"},"Git repository"),". By default, this is set to ",(0,a.kt)("strong",{parentName:"p"},"Multiple source files"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select source code location",src:o(85109).Z,width:"2530",height:"766"})),(0,a.kt)("p",null,"Now we'll paste the link to our GitHub repository into the ",(0,a.kt)("strong",{parentName:"p"},"Git URL")," text field and click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."),(0,a.kt)("h3",{id:"adding-repo-webhook"},"Adding the webhook to the repository"),(0,a.kt)("p",null,"The final step is to click on ",(0,a.kt)("strong",{parentName:"p"},"API")," in the top right corner of our actor's page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"API button",src:o(16306).Z,width:"806",height:"254"})),(0,a.kt)("p",null,"And scroll through all of the links until we find the ",(0,a.kt)("strong",{parentName:"p"},"Build actor")," API endpoint. Now we'll copy this endpoint's URL, head back over to our GitHub repository and navigate to ",(0,a.kt)("strong",{parentName:"p"},"Settings > Webhooks > Add webhook"),". The final thing to do is to paste the URL and save the webhook."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding a webhook to your GithHub repo",src:o(26791).Z,width:"900",height:"669"})),(0,a.kt)("p",null,"That's it! the actor should now pull its source code from the repo and automatically build."),(0,a.kt)("h2",{id:"with-apify-cli"},"Without a GitHub repository (using the Apify CLI)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you don't yet have the Apify CLI, learn how to install it and log in by following along with ",(0,a.kt)("a",{parentName:"p",href:"/academy/tools/apify-cli",target:null,rel:null},"this brief lesson")," about it.")),(0,a.kt)("p",null,"If you're logged in to the Apify CLI, the ",(0,a.kt)("inlineCode",{parentName:"p"},"apify push")," command can be used to push the code straight onto the Apify platform from your local machine (no GitHub repository required), where it will automatically be built for you. Prior to running this command, make sure that you have an ",(0,a.kt)("strong",{parentName:"p"},".actor/actor.json")," file at the root of the project. If you don't already have one, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"apify init .")," to automatically generate one for you."),(0,a.kt)("p",null,"One important thing to note is that you can use a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file to exclude files from being pushed. When you use ",(0,a.kt)("inlineCode",{parentName:"p"},"apify push")," without a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),", the full folder contents will be pushed, meaning that even the even ",(0,a.kt)("strong",{parentName:"p"},"storage")," and ",(0,a.kt)("strong",{parentName:"p"},"node_modules")," will be pushed. These files are unnecessary to push, as they are both generated on the platform."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"apify push")," command should only really be used for quickly pushing and testing actors on the platform during development. If you are ready to make your actor public, use a Git repository instead, as you will reap the benefits of using Git and others will be able to contribute to the project.")),(0,a.kt)("h2",{id:"deployed"},"Deployed!"),(0,a.kt)("p",null,"Great! Once you've pushed your actor to the platform, you should see it in the list of actors under the ",(0,a.kt)("strong",{parentName:"p"},"Actors")," tab. If you used ",(0,a.kt)("inlineCode",{parentName:"p"},"apify push"),", you'll have access to the ",(0,a.kt)("strong",{parentName:"p"},"multifile editor")," (discussed ",(0,a.kt)("a",{parentName:"p",href:"/academy/getting-started/creating-actors",target:null,rel:null},"here"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deployed actor on the Apify platform",src:o(87748).Z,width:"1738",height:"1036"})),(0,a.kt)("p",null,"The next step is to test your actor and experiment with the vast amount of features the platform has to offer."),(0,a.kt)("h2",{id:"next"},"Wrap up"),(0,a.kt)("p",null,"That's it! In this short section, you've learned how to take your code written in any programming language and turn it into a usable actor that can run on the Apify platform! The next step is to start looking into the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.apify.com/actors/paid-actors",target:"_blank",rel:"noopener"},"paid actors")," program, which allows you to monetize your work."))}h.isMDXComponent=!0},87748:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/actor-page-e6362c6aebaa26a455db574c01452518.webp"},16306:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},26791:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/github-integration-c76d4762b63047b1b3c63c9663aa7ed0.webp"},85109:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/select-source-location-263d67317581d6ed12d41bbfd52e4d8f.webp"},7091:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/webp;base64,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"}}]);
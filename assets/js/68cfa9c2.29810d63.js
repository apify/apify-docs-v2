"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5065],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81182:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={title:"Modifying variables",description:"Learn how to modify the variables of a JSON format GraphQL query to use the API without needing to write any GraphQL language or create custom queries.",sidebar_position:1,slug:"/api-scraping/graphql-scraping/modifying-variables"},l="[](#modifying-variables) Modifying variables",p={unversionedId:"api_scraping/graphql_scraping/modifying_variables",id:"api_scraping/graphql_scraping/modifying_variables",title:"Modifying variables",description:"Learn how to modify the variables of a JSON format GraphQL query to use the API without needing to write any GraphQL language or create custom queries.",source:"@site/sources/academy/api_scraping/graphql_scraping/modifying_variables.md",sourceDirName:"api_scraping/graphql_scraping",slug:"/api-scraping/graphql-scraping/modifying-variables",permalink:"/academy/api-scraping/graphql-scraping/modifying-variables",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1670592461,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:1,frontMatter:{title:"Modifying variables",description:"Learn how to modify the variables of a JSON format GraphQL query to use the API without needing to write any GraphQL language or create custom queries.",sidebar_position:1,slug:"/api-scraping/graphql-scraping/modifying-variables"},sidebar:"defaultSidebar",previous:{title:"GraphQL scraping",permalink:"/academy/api-scraping/graphql-scraping"},next:{title:"Introspection",permalink:"/academy/api-scraping/graphql-scraping/introspection"}},u={},c=[{value:" Next up",id:"-next-up",level:2}],d={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-modifying-variables"},(0,i.kt)("a",{parentName:"h1",href:"#modifying-variables",target:null,rel:null})," Modifying variables"),(0,i.kt)("p",null,"In the introduction of this course, we searched for the term ",(0,i.kt)("strong",{parentName:"p"},"test")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://cheddar.com",target:"_blank",rel:"noopener"},"Cheddar")," website and discovered a request to their GraphQL API. The payload looked like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "query": "query SearchQuery($query: String!, $count: Int!, $cursor: String) {\n    organization {\n        ...SearchList_organization\n        id\n    }\n    }\n    fragment SearchList_organization on Organization {\n    media(\n        first: $count\n        after: $cursor\n        query: $query\n        recency_weight: 0.6\n        recency_days: 30\n        include_private: false\n        include_unpublished: false\n    ) {\n        hitCount\n        edges {\n        node {\n            _score\n            id\n            ...StandardListCard_video\n            __typename\n        }\n        cursor\n        }\n        pageInfo {\n        endCursor\n        hasNextPage\n        }\n    }\n    }\n    fragment StandardListCard_video on Slugable {\n    ...Thumbnail_video\n    ...StandardTextCard_media\n    slug\n    id\n    __typename\n    }\n    fragment Thumbnail_video on Slugable {\n    original_thumbnails: thumbnails(aspect_ratio: ORIGINAL) {\n        small\n        medium\n        large\n    }\n    sd_thumbnails: thumbnails(aspect_ratio: SD) {\n        small\n        medium\n        large\n    }\n    hd_thumbnails: thumbnails(aspect_ratio: HD) {\n        small\n        medium\n        large\n    }\n    film_thumbnails: thumbnails(aspect_ratio: FILM) {\n        small\n        medium\n        large\n    }\n    square_thumbnails: thumbnails(aspect_ratio: SQUARE) {\n        small\n        medium\n        large\n    }\n    }\n    fragment StandardTextCard_media on Slugable {\n    public_at\n    updated_at\n    title\n    hero_video {\n        duration\n    }\n    description\n    }",\n    "variables": { "query": "test","count": 10,"cursor": null },\n    "operationName": "SearchQuery"\n}\n')),(0,i.kt)("p",null,"We also learned that every GraphQL request payload will have a ",(0,i.kt)("strong",{parentName:"p"},"query")," property, which contains a stringified version of the query, and a ",(0,i.kt)("strong",{parentName:"p"},"variables")," property, which contains any parameters for the query."),(0,i.kt)("p",null,"If the query provided in the payload you find in the ",(0,i.kt)("strong",{parentName:"p"},"Network")," tab is good enough for your scraper's needs, you don't actually have to go down the GraphQL rabbit hole. Rather, you can just change the variables to receive the data you want. For example, right now, our example payload is set up to search for articles matching the keyword ",(0,i.kt)("strong",{parentName:"p"},"test"),". However, if we wanted to search for articles matching ",(0,i.kt)("strong",{parentName:"p"},"cats")," instead, we could do that by changing the ",(0,i.kt)("strong",{parentName:"p"},"query")," variable like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "...": "...",\n    "variables": { "query": "cats","count": 10,"cursor": null },\n}\n')),(0,i.kt)("p",null,"Depending on the API, just doing this can be sufficient. However, sometimes we want to utilize complex GraphQL features in order to optimize our scrapers or just to receive more data than is being provided in the response of the requst found in the ",(0,i.kt)("strong",{parentName:"p"},"Network")," tab. This is what we will be discussing in the next lessons."),(0,i.kt)("h2",{id:"-next-up"},(0,i.kt)("a",{parentName:"h2",href:"#next",target:null,rel:null})," Next up"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/api-scraping/graphql-scraping/introspection",target:null,rel:null},"next lesson")," we will be walking you through how to learn about a GraphQL API before scraping it by using ",(0,i.kt)("strong",{parentName:"p"},"introspection")," (don't worry - it's a fancy word, but a simple concept)."))}g.isMDXComponent=!0}}]);
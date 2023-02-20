"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[3078],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),g=r,h=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return a?t.createElement(h,o(o({ref:n},c),{},{components:a})):t.createElement(h,o({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78356:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Modifying variables",description:"Learn how to modify the variables of a JSON format GraphQL query to use the API without needing to write any GraphQL language or create custom queries.",sidebar_position:1,slug:"/api-scraping/graphql-scraping/modifying-variables"},p="Modifying variables",l={unversionedId:"webscraping/api_scraping/graphql_scraping/modifying_variables",id:"webscraping/api_scraping/graphql_scraping/modifying_variables",title:"Modifying variables",description:"Learn how to modify the variables of a JSON format GraphQL query to use the API without needing to write any GraphQL language or create custom queries.",source:"@site/sources/academy/webscraping/api_scraping/graphql_scraping/modifying_variables.md",sourceDirName:"webscraping/api_scraping/graphql_scraping",slug:"/api-scraping/graphql-scraping/modifying-variables",permalink:"/academy/api-scraping/graphql-scraping/modifying-variables",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/webscraping/api_scraping/graphql_scraping/modifying_variables.md",tags:[],version:"current",lastUpdatedBy:"Luk\xe1\u0161 K\u0159ivka",lastUpdatedAt:1676882966,formattedLastUpdatedAt:"Feb 20, 2023",sidebarPosition:1,frontMatter:{title:"Modifying variables",description:"Learn how to modify the variables of a JSON format GraphQL query to use the API without needing to write any GraphQL language or create custom queries.",sidebar_position:1,slug:"/api-scraping/graphql-scraping/modifying-variables"},sidebar:"academy",previous:{title:"GraphQL scraping",permalink:"/academy/api-scraping/graphql-scraping"},next:{title:"Introspection",permalink:"/academy/api-scraping/graphql-scraping/introspection"}},c={},u=[{value:"Next up",id:"next",level:2}],d={toc:u};function g(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modifying-variables"},"Modifying variables"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn how to modify the variables of a JSON format GraphQL query to use the API without needing to write any GraphQL language or create custom queries.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In the introduction of this course, we searched for the term ",(0,i.kt)("strong",{parentName:"p"},"test")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://cheddar.com",target:"_blank",rel:"noopener"},"Cheddar")," website and discovered a request to their GraphQL API. The payload looked like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "query": "query SearchQuery($query: String!, $count: Int!, $cursor: String) {\n    organization {\n        ...SearchList_organization\n        id\n    }\n    }\n    fragment SearchList_organization on Organization {\n    media(\n        first: $count\n        after: $cursor\n        query: $query\n        recency_weight: 0.6\n        recency_days: 30\n        include_private: false\n        include_unpublished: false\n    ) {\n        hitCount\n        edges {\n        node {\n            _score\n            id\n            ...StandardListCard_video\n            __typename\n        }\n        cursor\n        }\n        pageInfo {\n        endCursor\n        hasNextPage\n        }\n    }\n    }\n    fragment StandardListCard_video on Slugable {\n    ...Thumbnail_video\n    ...StandardTextCard_media\n    slug\n    id\n    __typename\n    }\n    fragment Thumbnail_video on Slugable {\n    original_thumbnails: thumbnails(aspect_ratio: ORIGINAL) {\n        small\n        medium\n        large\n    }\n    sd_thumbnails: thumbnails(aspect_ratio: SD) {\n        small\n        medium\n        large\n    }\n    hd_thumbnails: thumbnails(aspect_ratio: HD) {\n        small\n        medium\n        large\n    }\n    film_thumbnails: thumbnails(aspect_ratio: FILM) {\n        small\n        medium\n        large\n    }\n    square_thumbnails: thumbnails(aspect_ratio: SQUARE) {\n        small\n        medium\n        large\n    }\n    }\n    fragment StandardTextCard_media on Slugable {\n    public_at\n    updated_at\n    title\n    hero_video {\n        duration\n    }\n    description\n    }",\n    "variables": { "query": "test","count": 10,"cursor": null },\n    "operationName": "SearchQuery"\n}\n')),(0,i.kt)("p",null,"We also learned that every GraphQL request payload will have a ",(0,i.kt)("strong",{parentName:"p"},"query")," property, which contains a stringified version of the query, and a ",(0,i.kt)("strong",{parentName:"p"},"variables")," property, which contains any parameters for the query."),(0,i.kt)("p",null,"If the query provided in the payload you find in the ",(0,i.kt)("strong",{parentName:"p"},"Network")," tab is good enough for your scraper's needs, you don't actually have to go down the GraphQL rabbit hole. Rather, you can just change the variables to receive the data you want. For example, right now, our example payload is set up to search for articles matching the keyword ",(0,i.kt)("strong",{parentName:"p"},"test"),". However, if we wanted to search for articles matching ",(0,i.kt)("strong",{parentName:"p"},"cats")," instead, we could do that by changing the ",(0,i.kt)("strong",{parentName:"p"},"query")," variable like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "...": "...",\n    "variables": { "query": "cats","count": 10,"cursor": null },\n}\n')),(0,i.kt)("p",null,"Depending on the API, just doing this can be sufficient. However, sometimes we want to utilize complex GraphQL features in order to optimize our scrapers or just to receive more data than is being provided in the response of the requst found in the ",(0,i.kt)("strong",{parentName:"p"},"Network")," tab. This is what we will be discussing in the next lessons."),(0,i.kt)("h2",{id:"next"},"Next up"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/academy/api-scraping/graphql-scraping/introspection",target:null,rel:null},"next lesson")," we will be walking you through how to learn about a GraphQL API before scraping it by using ",(0,i.kt)("strong",{parentName:"p"},"introspection")," (don't worry - it's a fancy word, but a simple concept)."))}g.isMDXComponent=!0}}]);
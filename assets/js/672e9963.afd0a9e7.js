"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[6565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(p,".").concat(d)]||h[d]||l[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Using Apify Scrapers via API from PHP",description:"Start scrapers and fetch results from a PHP application",sidebar_position:1,slug:"/php/using-apify-scraper-with-php"},p=void 0,c={unversionedId:"php/using_apify_scraper_with_php",id:"php/using_apify_scraper_with_php",title:"Using Apify Scrapers via API from PHP",description:"Start scrapers and fetch results from a PHP application",source:"@site/sources/academy/php/using_apify_scraper_with_php.md",sourceDirName:"php",slug:"/php/using-apify-scraper-with-php",permalink:"/academy/php/using-apify-scraper-with-php",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/academy/php/using_apify_scraper_with_php.md",tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675952046,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:1,frontMatter:{title:"Using Apify Scrapers via API from PHP",description:"Start scrapers and fetch results from a PHP application",sidebar_position:1,slug:"/php/using-apify-scraper-with-php"}},u={},l=[{value:"What is our goal?",id:"what-is-our-goal",level:2},{value:"Where can I find the API endpoint for my scraper?",id:"where-can-i-find-the-api-endpoint-for-my-scraper",level:2},{value:"Starting the scraper and fetching results from PHP",id:"starting-the-scraper-and-fetching-results-from-php",level:2},{value:"Changing scraper configuration when starting the scraper",id:"changing-scraper-configuration-when-starting-the-scraper",level:2}],h={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you set up and test your scraper, you can integrate it into your application via our API. Many of the questions we get are about API integration from PHP, so we've prepared this article on using Apify's API with a PHP application."),(0,o.kt)("h2",{id:"what-is-our-goal"},"What is our goal?"),(0,o.kt)("p",null,"The main goal of this article is to give you an example of how to start your scraper and fetch results from a PHP application. We'll also show you how to alter the scraper configuration when starting the scraper."),(0,o.kt)("h2",{id:"where-can-i-find-the-api-endpoint-for-my-scraper"},"Where can I find the API endpoint for my scraper?"),(0,o.kt)("p",null,"Each actor or task you set up at Apify has its own automatically-generated API endpoint. You can find this in the API section of the scraper configuration page. The API for starting the scraper has the following format for actors:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"https://api.apify.com/v2/acts/ACTOR_ID/runs?token=API_TOKEN"))),(0,o.kt)("p",null,"and for tasks:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"https://api.apify.com/v2/actor-tasks/ACTOR_TASK_ID/runs?token=API_TOKEN"))),(0,o.kt)("p",null,"Don't forget to replace the capitalized part with your own values. You can read a more detailed article on how to work with our API ",(0,o.kt)("a",{parentName:"p",href:"https://help.apify.com/en/articles/3224035-run-actor-task-and-retrieve-data-via-api",target:"_blank",rel:"noopener"},"here"),"."),(0,o.kt)("h2",{id:"starting-the-scraper-and-fetching-results-from-php"},"Starting the scraper and fetching results from PHP"),(0,o.kt)("p",null,"We can now use this API from our PHP application. Here's an example of how to start the scraper and get a response describing the scraper run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PHP"},'<?php\n\n$ch = curl_init(\'https://api.apify.com/v2/actor-tasks/ACTOR_TASK_ID/runs?token=API_TOKEN\');\\\ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");\\\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\\\n$result_json = curl_exec($ch);\n\nIn `$result_json` you can find the response describing the scraper run:\n\n{\\\n  "data": {\\\n    "id": "HG7ML7M8z78YcAPEB",\\\n    "actId": "HDSasDasz78YcAPEB",\\\n    "userId": "BPWZBd9V9c746JAnF",\\\n    "actorTaskId": "KJHSKHausidyaJKHs",\\\n    "startedAt": "2019-11-30T07:34:24.202Z",\\\n    "finishedAt": "2019-12-12T09:30:12.202Z",\\\n    "status": "SUCCEEDED",\\\n    "meta": {\\\n      "origin": "WEB",\\\n      "clientIp": "172.234.12.34",\\\n      "userAgent": "Mozilla/5.0 (iPad)",\\\n      "scheduleId": "dWazFsPpxMigMSqHL",\\\n      "scheduledAt": "2019-06-10T11:40:00.000Z"\\\n    },\\\n    "stats": {\\\n      "inputBodyLen": 240,\\\n      "restartCount": 0,\\\n      "resurrectCount": 2,\\\n      "memAvgBytes": 35914228.4,\\\n      "memMaxBytes": 38244352,\\\n      "memCurrentBytes": 0,\\\n      "cpuAvgUsage": 0.00955965,\\\n      "cpuMaxUsage": 3.15469,\\\n      "cpuCurrentUsage": 0,\\\n      "netRxBytes": 2652,\\\n      "netTxBytes": 1338,\\\n      "durationMillis": 26239,\\\n      "runTimeSecs": 26.239,\\\n      "metamorph": 0,\\\n      "computeUnits": 0.0072886\\\n    },\\\n    "options": {\\\n      "build": "latest",\\\n      "timeoutSecs": 300,\\\n      "memoryMbytes": 1024,\\\n      "diskMbytes": 2048\\\n    },\\\n    "buildId": "7sT5jcggjjA9fNcxF",\\\n    "exitCode": 0,\\\n    "defaultKeyValueStoreId": "eJNzqsbPiopwJcgGQ",\\\n    "defaultDatasetId": "wmKPijuyDnPZAPRMk",\\\n    "defaultRequestQueueId": "FL35cSF7jrxr3BY39",\\\n    "buildNumber": "0.2.2",\\\n    "containerUrl": "https://nwfcc4btrgqt.runs.apify.com"\\\n  }\\\n}\n')),(0,o.kt)("p",null,"Even if the scraper is still running, you can fetch results (data you outputted from the pageFunction) using the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultDatasetId"),". To get complete results when the scraper is finished, you can periodically check the result dataset for scraper status or even better use a webhook, which you can set up under advanced settings on the scraper configuration page."),(0,o.kt)("p",null,"You can get the dataset items via this API"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"https://api.apify.com/v2/datasets/DATASET_ID/items"))),(0,o.kt)("h2",{id:"changing-scraper-configuration-when-starting-the-scraper"},"Changing scraper configuration when starting the scraper"),(0,o.kt)("p",null,"Sometimes you want to run your scraper and change some of its settings for the current run. A typical use case is a scraper configuration with a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"Start URLs")," when starting the crawl. You can achieve this by altering these settings when starting the scraper via API using POST data with new scraper settings."),(0,o.kt)("p",null,"Here's an example in PHP (with some basic output):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-PHP"},'<?php\n\n$data = array(\\\n\xa0 \xa0 "startUrls" => [\\\n\xa0 \xa0 \xa0 \xa0 array("url" => "http://www.example.com"),\\\n\xa0 \xa0 \xa0 \xa0 array("url" => "http://www.example.com?test2")]\\\n);\\\n$data_json = json_encode($data);\n\necho "<h1>Invoking Apify API with:</h1>";\\\necho "<pre>\\n".$data_json."</pre>";\\\necho "<br><br>";\n\n$ch = curl_init(\'https://api.apify.com/v2/actor-tasks/ACTOR_TASK_ID/runs?token=API_TOKEN\');\\\ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");\\\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $data_json);\\\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\\\ncurl_setopt($ch, CURLOPT_HTTPHEADER, array(\\\n\xa0 \xa0 \xa0 \xa0 \'Content-Type: application/json\',\\\n\xa0 \xa0 \xa0 \xa0 \'Content-Length: \' . strlen($data_json))\\\n);\\\n$result_json = curl_exec($ch);\n\necho "<h1>Result:</h1>";\\\necho "<pre>\\n".$result_json."</pre>";\n')),(0,o.kt)("p",null,"Note that this only changes the scraper settings for the current run. This enables you to run crawls in parallel with different configurations."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"mailto:support@apify.com",target:"_blank",rel:"noopener"},"Let us know")," if you come across any issues or would like to contribute examples for other languages."))}d.isMDXComponent=!0}}]);
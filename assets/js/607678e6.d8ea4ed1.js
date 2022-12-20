"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5221],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(y,p(p({ref:n},c),{},{components:t})):r.createElement(y,p({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,p[1]=s;for(var i=2;i<o;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),p=["components"],s={title:"Examples",description:"Learn how to connect to Apify's datacenter proxies from your application with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.",slug:"/proxy/datacenter-proxy/examples"},l=void 0,i={unversionedId:"proxy/datacenter_proxy/examples",id:"proxy/datacenter_proxy/examples",title:"Examples",description:"Learn how to connect to Apify's datacenter proxies from your application with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.",source:"@site/sources/platform/proxy/datacenter_proxy/examples.md",sourceDirName:"proxy/datacenter_proxy",slug:"/proxy/datacenter-proxy/examples",permalink:"/platform/proxy/datacenter-proxy/examples",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671543152,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Examples",description:"Learn how to connect to Apify's datacenter proxies from your application with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.",slug:"/proxy/datacenter-proxy/examples"},sidebar:"defaultSidebar",previous:{title:"Datacenter proxy",permalink:"/platform/proxy/datacenter-proxy"},next:{title:"Residential proxy",permalink:"/platform/proxy/residential-proxy"}},c={},u=[{value:" Using the Apify SDK and Crawlee",id:"-using-the-apify-sdk-and-crawlee",level:2},{value:" Rotate IP addresses",id:"-rotate-ip-addresses",level:3},{value:" Single IP address for multiple requests",id:"-single-ip-address-for-multiple-requests",level:3},{value:" How to use proxy groups",id:"-how-to-use-proxy-groups",level:3},{value:" Using standard libraries and languages",id:"-using-standard-libraries-and-languages",level:2},{value:" Use IP rotation",id:"-use-ip-rotation",level:3},{value:" Multiple requests with the same IP address",id:"-multiple-requests-with-the-same-ip-address",level:3},{value:" Username examples",id:"-username-examples",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-to-datacenter-proxies"},"Connect to datacenter proxies"),(0,o.kt)("p",null,"This page contains code examples for connecting to ","[datacenter proxies]","({{@link proxy/datacenter_proxy.md}}) using ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),"."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"connection settings")," page for connection parameters."),(0,o.kt)("h2",{id:"-using-the-apify-sdk-and-crawlee"},(0,o.kt)("a",{parentName:"h2",href:"#using-the-apify-sdk-and-crawlee",target:null,rel:null})," Using the Apify SDK and Crawlee"),(0,o.kt)("p",null,"If you are developing your own Apify ",(0,o.kt)("a",{parentName:"p",href:"../../../academy/getting_started/actors.md",target:null,rel:null},"actor")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com",target:null,rel:null},"Apify SDK")," and ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/",target:"_blank",rel:"noopener"},"Crawlee"),", you can use Apify Proxy in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/cheerio-crawler/class/CheerioCrawler",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))," by using the ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/api/apify/class/Actor#createProxyConfiguration",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.createProxyConfiguration()"))," function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler"))," by using the ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/api/apify/class/Actor#createProxyConfiguration",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.createProxyConfiguration()"))," function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler"))," by using the ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/api/apify/class/Actor#createProxyConfiguration",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.createProxyConfiguration()"))," function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/jsdom-crawler/class/JSDOMCrawler",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"JSDOMCrawler"))," by using the ",(0,o.kt)("a",{parentName:"li",href:"https://sdk.apify.com/api/apify/class/Actor#createProxyConfiguration",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.createProxyConfiguration()"))," function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/playwright-crawler/function/launchPlaywright",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"launchPlaywright()"))," by specifying the proxy configuration in the function's options."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crawlee.dev/api/puppeteer-crawler/function/launchPuppeteer",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"launchPuppeteer()"))," by specifying the proxy configuration in the function's options."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"got-scraping"))," ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/got-scraping",target:"_blank",rel:"noopener"},"NPM package")," by specifying proxy URL in the options.")),(0,o.kt)("p",null,"The Apify SDK's ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/ProxyConfiguration",target:null,rel:null},"ProxyConfiguration")," enables you to choose which proxies you use for all connections. You can inspect the current proxy's URL and other attributes using the ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlingContext#proxyInfo",target:"_blank",rel:"noopener"},"proxyInfo")," property of ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlingContext",target:"_blank",rel:"noopener"},"crawling context")," of your crawler's ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestHandler",target:"_blank",rel:"noopener"},"requestHandler"),"."),(0,o.kt)("h3",{id:"-rotate-ip-addresses"},(0,o.kt)("a",{parentName:"h3",href:"#rotate-ip-addresses",target:null,rel:null})," Rotate IP addresses"),(0,o.kt)("p",null,"IP addresses for each request are selected at random from all available proxy servers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"PuppeteerCrawler\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\n\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    async requestHandler({ page }) {\n        console.log(await page.content())\n    },\n});\n\nawait crawler.run(['https://proxy.apify.com/?format=json']);\n\nawait Actor.exit();\n</marked-tab>\n\n\n<marked-tab header=\"CheerioCrawler\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    async requestHandler({ body }) {\n        // ...\n        console.log(body);\n    },\n});\n\nawait crawler.run(['https://proxy.apify.com']);\n\nawait Actor.exit();\n</marked-tab>\n\n\n<marked-tab header=\"launchPuppeteer()\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { launchPuppeteer } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\nconst proxyUrl = await proxyConfiguration.newUrl();\n\nconst browser = await launchPuppeteer({ proxyUrl });\nconst page = await browser.newPage();\nawait page.goto('https://www.example.com');\nconst html = await page.content();\nawait browser.close();\n\nconsole.log('HTML:');\nconsole.log(html);\n\nawait Actor.exit();\n</marked-tab>\n\n\n<marked-tab header=\"gotScraping()\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { gotScraping } from 'got-scraping';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\nconst proxyUrl = await proxyConfiguration.newUrl();\n\nconst url = 'https://api.apify.com/v2/browser-info';\n\nconst response1 = await gotScraping({\n    url,\n    proxyUrl,\n    responseType: 'json',\n});\n\nconst response2 = await gotScraping({\n    url,\n    proxyUrl,\n    responseType: 'json',\n});\n\nconsole.log(response1.body.clientIp);\nconsole.log('Should be different than');\nconsole.log(response2.body.clientIp);\n\nawait Actor.exit();\n</marked-tab>\n")),(0,o.kt)("h3",{id:"-single-ip-address-for-multiple-requests"},(0,o.kt)("a",{parentName:"h3",href:"#single-ip-address-for-multiple-requests",target:null,rel:null})," Single IP address for multiple requests"),(0,o.kt)("p",null,"Use a single IP address until it fails (gets retired)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"maxPoolSize: 1")," specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"sessionPoolOptions")," of ",(0,o.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",target:"_blank",rel:"noopener"},"PuppeteerCrawler")," (works the same with other crawler classes) means that a single IP will be used by all browsers until it fails. Then, all running browsers are retired, a new IP is selected and new browsers opened. The browsers all use the new IP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"PuppeteerCrawler\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\n\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    sessionPoolOptions: { maxPoolSize: 1 },\n    async requestHandler({ page}) {\n        console.log(await page.content());\n    },\n});\n\nawait crawler.run([\n    'https://proxy.apify.com/?format=json',\n    'https://proxy.apify.com',\n]);\n\nawait Actor.exit();\n</marked-tab>\n\n\n<marked-tab header=\"CheerioCrawler\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    sessionPoolOptions: { maxPoolSize: 1 },\n    async requestHandler({ json }) {\n        // ...\n        console.log(json);\n    },\n});\n\nawait crawler.run([\n    'https://api.apify.com/v2/browser-info',\n    'https://proxy.apify.com/?format=json',\n]);\n\nawait Actor.exit();\n</marked-tab>\n\n\n<marked-tab header=\"launchPuppeteer()\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { launchPuppeteer } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\nconst proxyUrl = await proxyConfiguration.newUrl('my_session');\nconst browser = await launchPuppeteer({ proxyUrl });\nconst page = await browser.newPage();\n\nawait page.goto('https://proxy.apify.com/?format=json');\nconst html = await page.content();\n\nawait page.goto('https://proxy.apify.com');\nconst html2 = await page.content();\n\nawait browser.close();\n\nconsole.log(html);\nconsole.log('Should display the same clientIp as');\nconsole.log(html2);\n\nawait Actor.exit();\n</marked-tab>\n\n\n<marked-tab header=\"gotScraping()\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { gotScraping } from 'got-scraping';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\nconst proxyUrl = await proxyConfiguration.newUrl('my_session');\n\nconst response1 = await gotScraping({\n    url: 'https://api.apify.com/v2/browser-info',\n    proxyUrl,\n    responseType: 'json',\n});\n\nconst response2 = await gotScraping({\n    url: 'https://api.apify.com/v2/browser-info',\n    proxyUrl,\n    responseType: 'json',\n});\n\nconsole.log(response1.body.clientIp);\nconsole.log(\"Should be the same as\");\nconsole.log(response2.body.clientIp);\n\nawait Actor.exit();\n</marked-tab>\n")),(0,o.kt)("h3",{id:"-how-to-use-proxy-groups"},(0,o.kt)("a",{parentName:"h3",href:"#how-to-use-proxy-groups",target:null,rel:null})," How to use proxy groups"),(0,o.kt)("p",null,"For simplicity, the examples above use the automatic proxy configuration (no specific proxy groups are specified), which selects IP addresses from all available groups."),(0,o.kt)("p",null,"To use IP addresses from specific proxy groups, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"groups")," ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/interface/ProxyConfigurationOptions#groups",target:null,rel:null},"property"),"\nto ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/Actor#createProxyConfiguration",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.createProxyConfiguration()"))," and specify the group names. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Actor } from 'apify';\n\nawait Actor.init();\n// ...\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['GROUP_NAME_1', 'GROUP_NAME_2'],\n});\n// ...\nawait Actor.exit();\n")),(0,o.kt)("h2",{id:"-using-standard-libraries-and-languages"},(0,o.kt)("a",{parentName:"h2",href:"#using-standard-libraries-and-languages",target:null,rel:null})," Using standard libraries and languages"),(0,o.kt)("p",null,"You can find your proxy password on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy page")," of the Apify Console."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," field is ",(0,o.kt)("strong",{parentName:"p"},"not")," your Apify username.",(0,o.kt)("br",null),"\nInstead, you specify proxy settings (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"groups-BUYPROXIES94952"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"session-123"),").",(0,o.kt)("br",null),"\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"auto")," for default settings.")),(0,o.kt)("p",null,"For examples using ",(0,o.kt)("a",{parentName:"p",href:"https://www.php.net/",target:"_blank",rel:"noopener"},"PHP"),", you need to have the ",(0,o.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/book.curl.php",target:"_blank",rel:"noopener"},"cURL")," extension enabled in your PHP installation. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/curl.installation.php",target:"_blank",rel:"noopener"},"installation instructions")," for more information."),(0,o.kt)("p",null,"Examples in ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/download/releases/2.0/",target:"_blank",rel:"noopener"},"Python 2")," use the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/six/",target:"_blank",rel:"noopener"},"six")," library. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install six")," to enable it."),(0,o.kt)("h3",{id:"-use-ip-rotation"},(0,o.kt)("a",{parentName:"h3",href:"#use-ip-rotation",target:null,rel:null})," Use IP rotation"),(0,o.kt)("p",null,"For each request, a random IP address is chosen from all ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"available proxy groups"),". You can use random IP addresses from proxy groups by specifying the group(s) in the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," parameter."),(0,o.kt)("p",null,"A random IP address will be used for each request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Node.js (axios)" lang="javascript">\nimport axios from \'axios\';\n\nconst proxy = {\n    protocol: \'http\',\n    host: \'proxy.apify.com\',\n    port: 8000,\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    auth: { username: \'auto\', password: <YOUR_PROXY_PASSWORD> },\n};\n\nconst url = \'http://proxy.apify.com/?format=json\';\n\nconst { data } = await axios.get(url, { proxy });\n\nconsole.log(data);\n</marked-tab>\n\n\n<marked-tab header="Python 3" lang="python">\nimport urllib.request as request\nimport ssl\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = "<YOUR_PROXY_PASSWORD>"\nproxy_url = f"http://auto:{password}@proxy.apify.com:8000"\nproxy_handler = request.ProxyHandler({\n    "http": proxy_url,\n    "https": proxy_url,\n})\n\nctx = ssl.create_default_context()\nctx.check_hostname = False\nctx.verify_mode = ssl.CERT_NONE\nhttpHandler = request.HTTPSHandler(context=ctx)\n\nopener = request.build_opener(httpHandler,proxy_handler)\nprint(opener.open("http://proxy.apify.com/?format=json").read())\n</marked-tab>\n\n\n<marked-tab header="Python 2" lang="python">\nimport six\nfrom six.moves.urllib import request\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = "<YOUR_PROXY_PASSWORD>"\nproxy_url = (\n    "http://auto:%s@proxy.apify.com:8000" %\n    (password)\n)\nproxy_handler = request.ProxyHandler({\n    "http": proxy_url,\n    "https": proxy_url,\n})\nopener = request.build_opener(proxy_handler)\nprint(opener.open("http://proxy.apify.com/?format=json").read())\n</marked-tab>\n\n\n<marked-tab header="PHP" lang="php">\n<?php\n$curl = curl_init("http://proxy.apify.com/?format=json");\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($curl, CURLOPT_PROXY, "http://proxy.apify.com:8000");\n// Replace <YOUR_PROXY_PASSWORD> below with your password\n// found at https://console.apify.com/proxy\ncurl_setopt($curl, CURLOPT_PROXYUSERPWD, "auto:<YOUR_PROXY_PASSWORD>");\n$response = curl_exec($curl);\ncurl_close($curl);\nif ($response) echo $response;\n?>\n</marked-tab>\n\n\n<marked-tab header="PHP (Guzzle)" lang="php">\n<?php\nrequire \'vendor/autoload.php\';\n\n\n$client = new \\GuzzleHttp\\Client([\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    \'proxy\' => \'http://auto:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000\'\n]);\n\n$response = $client->get("http://proxy.apify.com/?format=json");\necho $response->getBody();\n</marked-tab>\n')),(0,o.kt)("h3",{id:"-multiple-requests-with-the-same-ip-address"},(0,o.kt)("a",{parentName:"h3",href:"#multiple-requests-with-the-same-ip-address",target:null,rel:null})," Multiple requests with the same IP address"),(0,o.kt)("p",null,"The IP address in the example is chosen at random from all available proxy groups."),(0,o.kt)("p",null,"To use this option, set a session name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-marked-tabs"},'<marked-tab header="Node.js (axios)" lang="javascript">\nimport axios from \'axios\';\nimport { HttpsProxyAgent } from \'hpagent\';\n\nconst httpsAgent = new HttpsProxyAgent({\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    proxy: \'http://session-my_session:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000\',\n});\nconst axiosWithProxy = axios.create({ httpsAgent });\n\nconst url = \'https://api.apify.com/v2/browser-info\';\n\nconst response1 = await axiosWithProxy.get(url);\nconst response2 = await axiosWithProxy.get(url);\n// Should return the same clientIp for both requests\nconsole.log(\'clientIp1:\', response1.data.clientIp);\nconsole.log(\'clientIp2:\', response2.data.clientIp);\n</marked-tab>\n\n\n<marked-tab header="Python 3" lang="python">\nimport urllib.request as request\nimport ssl\n\ndef do_request():\n    # Replace <YOUR_PROXY_PASSWORD> below with your password\n    # found at https://console.apify.com/proxy\n    password = "<YOUR_PROXY_PASSWORD>"\n    proxy_url = f"http://session-my_session:{password}@proxy.apify.com:8000"\n    proxy_handler = request.ProxyHandler({\n        "http": proxy_url,\n        "https": proxy_url,\n    })\n\n    ctx = ssl.create_default_context()\n    ctx.check_hostname = False\n    ctx.verify_mode = ssl.CERT_NONE\n    httpHandler = request.HTTPSHandler(context=ctx)\n\n    opener = request.build_opener(httpHandler,proxy_handler)\n    return opener.open("https://api.apify.com/v2/browser-info").read()\n\nprint(do_request())\nprint("Should return the same clientIp as ")\nprint(do_request())\n</marked-tab>\n\n\n<marked-tab header="Python 2" lang="python">\nimport six\nfrom six.moves.urllib import request\nimport ssl\n\ndef do_request():\n    # Replace <YOUR_PROXY_PASSWORD> below with your password\n    # found at https://console.apify.com/proxy\n    password = "<YOUR_PROXY_PASSWORD>"\n    proxy_url = (\n        "http://session-my_session:%s@proxy.apify.com:8000" %\n        (password)\n    )\n    proxy_handler = request.ProxyHandler({\n        "http": proxy_url,\n        "https": proxy_url,\n    })\n\n    ctx = ssl.create_default_context()\n    ctx.check_hostname = False\n    ctx.verify_mode = ssl.CERT_NONE\n    httpHandler = request.HTTPSHandler(context=ctx)\n\n    opener = request.build_opener(httpHandler,proxy_handler)\n    return opener.open("https://api.apify.com/v2/browser-info").read()\n\nprint(do_request())\nprint("Should return the same clientIp as ")\nprint(do_request())\n</marked-tab>\n\n\n<marked-tab header="PHP" lang="php">\n<?php\nfunction doRequest() {\n    $curl = curl_init("https://api.apify.com/v2/browser-info");\n    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);\n    curl_setopt($curl, CURLOPT_PROXY, "http://proxy.apify.com:8000");\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    curl_setopt($curl, CURLOPT_PROXYUSERPWD, "session-my_session:<YOUR_PROXY_PASSWORD>");\n    $response = curl_exec($curl);\n    curl_close($curl);\n    return $response;\n}\n$response1 = doRequest();\n$response2 = doRequest();\necho $response1;\necho "\\nShould return the same clientIp as\\n";\necho $response2;\n?>\n</marked-tab>\n\n\n<marked-tab header="PHP (Guzzle)" lang="php">\n<?php\nrequire \'vendor/autoload.php\';\n\n$client = new \\GuzzleHttp\\Client([\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    \'proxy\' => \'http://session-my_session:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000\'\n]);\n\n$response = $client->get("https://api.apify.com/v2/browser-info");\necho $response->getBody();\n\n// Should return the same clientIp as\n$response = $client->get("https://api.apify.com/v2/browser-info");\necho $response->getBody();\n</marked-tab>\n')),(0,o.kt)("h2",{id:"-username-examples"},(0,o.kt)("a",{parentName:"h2",href:"#username-examples",target:null,rel:null})," Username examples"),(0,o.kt)("p",null,"Use randomly allocated IP addresses from the ",(0,o.kt)("inlineCode",{parentName:"p"},"BUYPROXIES94952")," group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"groups-BUYPROXIES94952\n")),(0,o.kt)("p",null,"Use a randomly allocated IP address for multiple requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"session-new_job_123\n")),(0,o.kt)("p",null,"Use the same IP address from the ",(0,o.kt)("inlineCode",{parentName:"p"},"SHADER")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BUYPROXIES94952")," groups for multiple requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"groups-SHADER+BUYPROXIES94952,session-new_job_123\n")),(0,o.kt)("p",null,"Set a session and select an IP from the ",(0,o.kt)("inlineCode",{parentName:"p"},"BUYPROXIES94952")," group located in the USA:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"groups-BUYPROXIES94952,session-new_job_123,country-US\n")))}m.isMDXComponent=!0}}]);
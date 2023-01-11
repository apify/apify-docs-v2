"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9870],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},c=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=i(n),g=o,d=h["".concat(s,".").concat(g)]||h[g]||u[g]||a;return n?t.createElement(d,p(p({ref:r},c),{},{components:n})):t.createElement(d,p({ref:r},c))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90682:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),p=["components"],l={title:"Examples",description:"Learn how to connect to Google SERP proxies from your applications with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.",slug:"/proxy/google-serp-proxy/examples"},s=void 0,i={unversionedId:"proxy/google_serp_proxy/examples",id:"proxy/google_serp_proxy/examples",title:"Examples",description:"Learn how to connect to Google SERP proxies from your applications with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.",source:"@site/sources/platform/proxy/google_serp_proxy/examples.md",sourceDirName:"proxy/google_serp_proxy",slug:"/proxy/google-serp-proxy/examples",permalink:"/platform/proxy/google-serp-proxy/examples",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673462481,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{title:"Examples",description:"Learn how to connect to Google SERP proxies from your applications with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.",slug:"/proxy/google-serp-proxy/examples"},sidebar:"docs",previous:{title:"Google SERP proxy",permalink:"/platform/proxy/google-serp-proxy"},next:{title:"Troubleshooting",permalink:"/platform/proxy/troubleshooting"}},c={},u=[{value:" Using the Apify SDK",id:"-using-the-apify-sdk",level:2},{value:" Get a list of search results",id:"-get-a-list-of-search-results",level:3},{value:" Get a list of shopping results",id:"-get-a-list-of-shopping-results",level:3},{value:" Using standard libraries and languages",id:"-using-standard-libraries-and-languages",level:2},{value:" HTML from search results",id:"-html-from-search-results",level:3},{value:" HTML from localized shopping results",id:"-html-from-localized-shopping-results",level:3}],h={toc:u};function g(e){var r=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},h,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-to-google-serp-proxies"},"Connect to Google SERP proxies"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn how to connect to Google SERP proxies from your applications with Node.js (axios and got-scraping), Python 2 and 3 and PHP using code examples.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This page contains code examples for connecting to ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/google-serp-proxy",target:null,rel:null},"Google SERP proxies")," using ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),"."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/platform/proxy/connection-settings",target:null,rel:null},"connection settings")," page for connection parameters."),(0,a.kt)("h2",{id:"-using-the-apify-sdk"},(0,a.kt)("a",{parentName:"h2",href:"#using-the-apify-sdk",target:null,rel:null})," Using the Apify SDK"),(0,a.kt)("p",null,"If you are developing your own Apify ",(0,a.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor"),". Alternatively, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},"got-scraping")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/got-scraping",target:"_blank",rel:"noopener"},"NPM package")," by specifying proxy URL in the options."),(0,a.kt)("p",null,"Apify Proxy also works with ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/class/PuppeteerCrawler",target:"_blank",rel:"noopener"},"PuppeteerCrawler"),", ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/puppeteer-crawler/function/launchPuppeteer",target:"_blank",rel:"noopener"},"launchPuppeteer()"),", ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler",target:"_blank",rel:"noopener"},"PlaywrightCrawler"),", ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/playwright-crawler/function/launchPlaywright",target:"_blank",rel:"noopener"},"launchPlaywright()")," and ",(0,a.kt)("a",{parentName:"p",href:"https://crawlee.dev/api/jsdom-crawler/class/JSDOMCrawler",target:"_blank",rel:"noopener"},"JSDOMCrawler"),". However, ",(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," is simply the most efficient solution for this use case."),(0,a.kt)("h3",{id:"-get-a-list-of-search-results"},(0,a.kt)("a",{parentName:"h3",href:"#get-a-list-of-search-results",target:null,rel:null})," Get a list of search results"),(0,a.kt)("p",null,"Get a list of search results for the keyword ",(0,a.kt)("strong",{parentName:"p"},"wikipedia")," from the USA (",(0,a.kt)("inlineCode",{parentName:"p"},"google.com"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"CheerioCrawler\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['GOOGLE_SERP'],\n});\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    async requestHandler({ body }) {\n        // ...\n        console.log(body)\n    },\n});\n\nawait crawler.run(['http://www.google.com/search?q=wikipedia']);\n\nawait Actor.exit();\n</marked-tab>\n\n\n<marked-tab header=\"gotScraping()\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { gotScraping } from 'got-scraping';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['GOOGLE_SERP'],\n});\nconst proxyUrl = await proxyConfiguration.newUrl();\n\nconst { body } = await gotScraping({\n    url: 'http://www.google.com/search?q=wikipedia',\n    proxyUrl,\n});\n\nconsole.log(body);\n\nawait Actor.exit();\n</marked-tab>\n")),(0,a.kt)("h3",{id:"-get-a-list-of-shopping-results"},(0,a.kt)("a",{parentName:"h3",href:"#get-a-list-of-shopping-results",target:null,rel:null})," Get a list of shopping results"),(0,a.kt)("p",null,"Get a list of shopping results for the query ",(0,a.kt)("strong",{parentName:"p"},"Apple iPhone XS 64GB")," from Great Britain (",(0,a.kt)("inlineCode",{parentName:"p"},"google.co.uk"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"CheerioCrawler\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['GOOGLE_SERP'],\n});\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    async requestHandler({ body }) {\n        // ...\n        console.log(body)\n    },\n});\n\nconst query = encodeURI('Apple iPhone XS 64GB');\nawait crawler.run([`http://www.google.co.uk/search?q=${query}&tbm=shop`]);\n\nawait Actor.exit();\n</marked-tab>\n\n<marked-tab header=\"gotScraping()\" lang=\"javascript\">\nimport { Actor } from 'apify';\nimport { gotScraping } from 'got-scraping';\n\nawait Actor.init();\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['GOOGLE_SERP'],\n});\nconst proxyUrl = await proxyConfiguration.newUrl();\n\nconst query = encodeURI('Apple iPhone XS 64GB');\nconst { body } = await gotScraping({\n    url: `http://www.google.co.uk/search?tbm=shop&q=${query}`,\n    proxyUrl,\n});\n\nconsole.log(body);\n\nawait Actor.exit();\n</marked-tab>\n")),(0,a.kt)("h2",{id:"-using-standard-libraries-and-languages"},(0,a.kt)("a",{parentName:"h2",href:"#using-standard-libraries-and-languages",target:null,rel:null})," Using standard libraries and languages"),(0,a.kt)("p",null,"You can find your proxy password on the ",(0,a.kt)("a",{parentName:"p",href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy page")," of the Apify Console."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," field is ",(0,a.kt)("strong",{parentName:"p"},"not")," your Apify username.",(0,a.kt)("br",null),"\nInstead, you specify proxy settings (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"groups-GOOGLE_SERP"),").",(0,a.kt)("br",null),"\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"groups-GOOGLE_SERP")," to use proxies from all available countries.")),(0,a.kt)("p",null,"For examples using ",(0,a.kt)("a",{parentName:"p",href:"https://www.php.net/",target:"_blank",rel:"noopener"},"PHP"),", you need to have the ",(0,a.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/book.curl.php",target:"_blank",rel:"noopener"},"cURL")," extension enabled in your PHP installation. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/curl.installation.php",target:"_blank",rel:"noopener"},"installation instructions")," for more information."),(0,a.kt)("p",null,"Examples in ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/download/releases/2.0/",target:"_blank",rel:"noopener"},"Python 2")," use the ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/six/",target:"_blank",rel:"noopener"},"six")," library. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install six")," to enable it."),(0,a.kt)("h3",{id:"-html-from-search-results"},(0,a.kt)("a",{parentName:"h3",href:"#html-from-search-results",target:null,rel:null})," HTML from search results"),(0,a.kt)("p",null,"Get the HTML of search results for the keyword ",(0,a.kt)("strong",{parentName:"p"},"wikipedia")," from the USA (",(0,a.kt)("strong",{parentName:"p"},"google.com"),")."),(0,a.kt)("p",null,"Select this option by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"groups-GOOGLE_SERP"),". Add the item you want to search to the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Node.js (axios)\" lang=\"javascript\">\nimport axios from 'axios';\n\nconst proxy = {\n    protocol: 'http',\n    host: 'proxy.apify.com',\n    port: 8000,\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    auth: { username: 'groups-GOOGLE_SERP', password: <YOUR_PROXY_PASSWORD> },\n};\n\nconst url = 'http://www.google.com/search';\nconst params = { q: 'wikipedia' };\n\nconst { data } = await axios.get(url, { proxy, params });\n\nconsole.log(data);\n</marked-tab>\n\n\n<marked-tab header=\"Python 3\" lang=\"python\">\nimport urllib.request as request\nimport urllib.parse as parse\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = '<YOUR_PROXY_PASSWORD>'\nproxy_url = f\"http://groups-GOOGLE_SERP:{password}@proxy.apify.com:8000\"\n\nproxy_handler = request.ProxyHandler({\n    'http': proxy_url,\n})\n\nopener = request.build_opener(proxy_handler)\n\nquery = parse.urlencode({ 'q': 'wikipedia' })\nprint(opener.open(f\"http://www.google.com/search?{query}\").read())\n</marked-tab>\n\n\n<marked-tab header=\"Python 2\" lang=\"python\">\nimport six\nfrom six.moves.urllib import request, urlencode\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = '<YOUR_PROXY_PASSWORD>'\nproxy_url = (\n    'http://groups-GOOGLE_SERP:%s@proxy.apify.com:8000' %\n    (password)\n)\nproxy_handler = request.ProxyHandler({\n    'http': proxy_url,\n})\nopener = request.build_opener(proxy_handler)\nquery = parse.urlencode({ 'q': 'wikipedia' })\nurl = (\n    'http://www.google.com/search?%s' %\n    (query)\n)\nprint(opener.open(url).read())\n</marked-tab>\n\n\n<marked-tab header=\"PHP\" lang=\"php\">\n<?php\n$query = urlencode('wikipedia');\n$curl = curl_init('http://www.google.com/search?q=' . $query);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($curl, CURLOPT_PROXY, 'http://proxy.apify.com:8000');\n// Replace <YOUR_PROXY_PASSWORD> below with your password\n// found at https://console.apify.com/proxy\ncurl_setopt($curl, CURLOPT_PROXYUSERPWD, 'groups-GOOGLE_SERP:<YOUR_PROXY_PASSWORD>');\n$response = curl_exec($curl);\ncurl_close($curl);\necho $response;\n?>\n</marked-tab>\n\n<marked-tab header=\"PHP (Guzzle)\" lang=\"php\">\n<?php\nrequire 'vendor/autoload.php';\n\n$client = new \\GuzzleHttp\\Client([\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    'proxy' => 'http://groups-GOOGLE_SERP:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000'\n]);\n\n$response = $client->get(\"http://www.google.com/search\", [\n    'query' => ['q' => 'wikipedia']\n]);\necho $response->getBody();\n</marked-tab>\n")),(0,a.kt)("h3",{id:"-html-from-localized-shopping-results"},(0,a.kt)("a",{parentName:"h3",href:"#html-from-localized-shopping-results",target:null,rel:null})," HTML from localized shopping results"),(0,a.kt)("p",null,"Get HTML of shopping results for the query ",(0,a.kt)("strong",{parentName:"p"},"Apple iPhone XS 64GB")," from Great Britain (",(0,a.kt)("inlineCode",{parentName:"p"},"google.co.uk"),")."),(0,a.kt)("p",null,"Select this option by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"groups-GOOGLE_SERP"),". In the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," parameter, add the item you want to search and specify the ",(0,a.kt)("strong",{parentName:"p"},"shop")," page as a URL parameter."),(0,a.kt)("p",null,"Set the domain (your country of choice) in the URL (in the ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," variable)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-marked-tabs"},"<marked-tab header=\"Node.js (axios)\" lang=\"javascript\">\nimport axios from 'axios';\n\nconst proxy = {\n    protocol: 'http',\n    host: 'proxy.apify.com',\n    port: 8000,\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    auth: { username: 'groups-GOOGLE_SERP', password: <YOUR_PROXY_PASSWORD> },\n};\n\nconst url = 'http://www.google.co.uk/search';\nconst params = { q: 'Apple iPhone XS 64GB', tbm: 'shop' }\n\nconst { data } = await axios.get(url, { proxy, params });\n\nconsole.log(data);\n</marked-tab>\n\n\n<marked-tab header=\"Python 3\" lang=\"python\">\nimport urllib.request as request\nimport urllib.parse as parse\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = '<YOUR_PROXY_PASSWORD>'\nproxy_url = f\"http://groups-GOOGLE_SERP:{password}@proxy.apify.com:8000\"\nproxy_handler = request.ProxyHandler({\n    'http': proxy_url,\n})\nopener = request.build_opener(proxy_handler)\n\nquery = parse.urlencode({ 'q': 'Apple iPhone XS 64GB', 'tbm': 'shop' })\nprint(opener.open(f\"http://www.google.co.uk/search?{query}\").read())\n</marked-tab>\n\n\n<marked-tab header=\"Python 2\" lang=\"python\">\nimport six\nfrom six.moves.urllib import request, urlencode\n\n# Replace <YOUR_PROXY_PASSWORD> below with your password\n# found at https://console.apify.com/proxy\npassword = '<YOUR_PROXY_PASSWORD>'\nproxy_url = (\n    'http://groups-GOOGLE_SERP:%s@proxy.apify.com:8000' %\n    (password)\n)\nproxy_handler = request.ProxyHandler({\n    'http': proxy_url,\n})\nopener = request.build_opener(proxy_handler)\nquery = parse.urlencode({ 'q': 'Apple iPhone XS 64GB', 'tbm': 'shop' })\nurl = (\n    'http://www.google.co.uk/search?%s' %\n    (query)\n)\nprint(opener.open(url).read())\n</marked-tab>\n\n\n<marked-tab header=\"PHP\" lang=\"php\">\n<?php\n$query = urlencode('Apple iPhone XS 64GB');\n$curl = curl_init('http://www.google.co.uk/search?tbm=shop&q=' . $query);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($curl, CURLOPT_PROXY, 'http://proxy.apify.com:8000');\n// Replace <YOUR_PROXY_PASSWORD> below with your password\n// found at https://console.apify.com/proxy\ncurl_setopt($curl, CURLOPT_PROXYUSERPWD, 'groups-GOOGLE_SERP:<YOUR_PROXY_PASSWORD>');\n$response = curl_exec($curl);\ncurl_close($curl);\necho $response;\n?>\n</marked-tab>\n\n\n<marked-tab header=\"PHP (Guzzle)\" lang=\"php\">\n<?php\nrequire 'vendor/autoload.php';\n\n$client = new \\GuzzleHttp\\Client([\n    // Replace <YOUR_PROXY_PASSWORD> below with your password\n    // found at https://console.apify.com/proxy\n    'proxy' => 'http://groups-GOOGLE_SERP:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000'\n]);\n\n$response = $client->get(\"http://www.google.co.uk/search\", [\n    'query' => [\n        'q' => 'Apple iPhone XS 64GB',\n        'tbm' => 'shop'\n    ]\n]);\necho $response->getBody();\n</marked-tab>\n")))}g.isMDXComponent=!0}}]);
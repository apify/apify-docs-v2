"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[5378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=h(a),u=r,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>h,toc:()=>p});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Scrape data using Python",description:"Learn how to scrape websites using Python and its Beautiful Soup library. Follow the tutorial to analyze the target page and create a Python actor.",sidebar_position:3.93,slug:"/tutorials/scrape-data-using-python"},l=void 0,h={unversionedId:"tutorials/scrape_data_using_python",id:"tutorials/scrape_data_using_python",title:"Scrape data using Python",description:"Learn how to scrape websites using Python and its Beautiful Soup library. Follow the tutorial to analyze the target page and create a Python actor.",source:"@site/sources/platform/tutorials/scrape_data_using_python.md",sourceDirName:"tutorials",slug:"/tutorials/scrape-data-using-python",permalink:"/platform/tutorials/scrape-data-using-python",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1671803343,formattedLastUpdatedAt:"Dec 23, 2022",sidebarPosition:3.93,frontMatter:{title:"Scrape data using Python",description:"Learn how to scrape websites using Python and its Beautiful Soup library. Follow the tutorial to analyze the target page and create a Python actor.",sidebar_position:3.93,slug:"/tutorials/scrape-data-using-python"},sidebar:"docs",previous:{title:"Scrape paginated sites",permalink:"/platform/tutorials/scrape-paginated-sites"},next:{title:"Process scraped data with Python",permalink:"/platform/tutorials/process-data-using-python"}},d={},p=[{value:"Exploring the BBC Weather page",id:"exploring-the-bbc-weather-page",level:2},{value:"Understanding the URL format",id:"understanding-the-url-format",level:3},{value:"Determining the forecast&#39;s starting date",id:"determining-the-forecasts-starting-date",level:3},{value:"Understanding the element structure",id:"understanding-the-element-structure",level:3},{value:"Scraping the data from the page",id:"scraping-the-data-from-the-page",level:2},{value:"Setting up the actor",id:"setting-up-the-actor",level:3},{value:"Writing the code",id:"writing-the-code",level:3},{value:"Extracting the data",id:"extracting-the-data",level:4},{value:"Storing the data",id:"storing-the-data",level:4},{value:"Running the actor",id:"running-the-actor",level:3},{value:"Processing the results",id:"processing-the-results",level:2}],c={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-scrape-data-in-python-using-beautiful-soup"},"How to scrape data in Python using Beautiful Soup"),(0,i.kt)("p",null,"Web scraping is not limited to the JavaScript world. The Python ecosystem contains some pretty powerful scraping tools as well. One of those is ",(0,i.kt)("a",{parentName:"p",href:"https://www.crummy.com/software/BeautifulSoup/",target:"_blank",rel:"noopener"},"Beautiful Soup"),", a library for parsing HTML and easy navigation or modification of a DOM tree."),(0,i.kt)("p",null,"This tutorial shows you how to write a Python ",(0,i.kt)("a",{parentName:"p",href:"/platform/actors",target:null,rel:null},"actor")," using ",(0,i.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener"},"Pandas"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In a rush? Skip this tutorial and get the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-docs/tree/master/examples/python-data-scraper/",target:"_blank",rel:"noopener"},"full code example"),".")),(0,i.kt)("h2",{id:"exploring-the-bbc-weather-page"},"Exploring the BBC Weather page"),(0,i.kt)("p",null,"BBC Weather offers you the weather forecast for the upcoming 14 days for a large selection of places around the world. Let's say we want to decide on our next holiday destination. We're choosing between Prague, New York, and Honolulu, and we will pick the destination based on which one has the best weather. To do that, we will scrape the weather forecast for each of our options, and then compare the results."),(0,i.kt)("h3",{id:"understanding-the-url-format"},"Understanding the URL format"),(0,i.kt)("p",null,"First, we need to look around the BBC Weather page and understand how the weather data is being retrieved and presented. If we open the ",(0,i.kt)("a",{parentName:"p",href:"https://www.bbc.com/weather",target:"_blank",rel:"noopener"},"BBC Weather")," page and search for Prague, we can see that it opened a page with a URL ending in a seven-digit number, which we can assume is the ID of the displayed location BBC Weather uses internally. Opening a different location changes only that number in the URL, confirming our assumptions."),(0,i.kt)("p",null,"The page shows the weather forecast for the upcoming 14 days. If we hover over the days in the displayed carousel, we can see that the link for each day leads to a URL ending with ",(0,i.kt)("inlineCode",{parentName:"p"},"/day{X}"),", with ",(0,i.kt)("inlineCode",{parentName:"p"},"{X}")," representing how many days in the future the specific day is."),(0,i.kt)("p",null,"Combining this information gives us the full format for the URL of a page for a given location and day: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://www.bbc.com/weather/{LOCATION_ID}/day{DAY_OFFSET}"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BBC Weather URL format",src:a(4417).Z,width:"2560",height:"1958"})),(0,i.kt)("h3",{id:"determining-the-forecasts-starting-date"},"Determining the forecast's starting date"),(0,i.kt)("p",null,"Looking more closely at the BBC Weather page, we can see that it shows the forecast for each day from 6:00 AM to 5:00 AM the next day. But what happens when we view a location where the current time is between midnight and 5 AM? Trying that, we can see that, in the day represented by ",(0,i.kt)("strong",{parentName:"p"},"Tonight"),", there are only a few slots for the hours between midnight and 5 AM displayed. This means that the first displayed day can either represent the current date at the location, or the day before the current date. To find out which of these two it is, we will first have to determine the current date and time at the location, and then possibly adjust it by one day based on whether the date matches the first displayed day."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BBC Weather displaying a location with current time between midnight and 5 AM",src:a(1360).Z,width:"2560",height:"1958"})),(0,i.kt)("p",null,"To determine the current date and time at the displayed location, we will need to know the location's timezone. Fortunately, the timezone and its offset to GMT are displayed near the bottom of the page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The timezone offset on the BBC Weather page",src:a(69386).Z,width:"954",height:"176"})),(0,i.kt)("h3",{id:"understanding-the-element-structure"},"Understanding the element structure"),(0,i.kt)("p",null,"To extract data from the page, we need to figure out where exactly in the internal page structure it is stored."),(0,i.kt)("p",null,"If we right-click on the day title in the top carousel (",(0,i.kt)("strong",{parentName:"p"},"Today")," or ",(0,i.kt)("strong",{parentName:"p"},"Tonight"),") and select ",(0,i.kt)("strong",{parentName:"p"},"Inspect")," in the popup menu, we can open the Chrome DevTools Inspector with the clicked element highlighted. We can see that the element with the currently displayed day in the top carousel has the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-day--active"),", and that the element with the day's title has the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-day__title")," and the accessibility label attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label")," contains the actual date of that day, not just ",(0,i.kt)("strong",{parentName:"p"},"Today")," or ",(0,i.kt)("strong",{parentName:"p"},"Tonight"),". Additionally, the timezone information is in an element with the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-c-footer-timezone__item"),". There are two elements with the same class, so we will need to pick the second one when parsing the page."),(0,i.kt)("p",null,"Exploring the document tree further, we can see that the element containing all the displayed hours has the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-time-slot-container__slots"),". The elements with the forecast for a given hour have the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-time-slot"),". In each time slot, the element containing the slot's hour has the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-time-slot-primary__hours")," and the element containing the slot's predicted temperature in degrees Celsius has the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-value--temperature--c"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BBC Weather with the DevTools Inspector open",src:a(46167).Z,width:"2560",height:"1958"})),(0,i.kt)("h2",{id:"scraping-the-data-from-the-page"},"Scraping the data from the page"),(0,i.kt)("p",null,"Now that we understand the element structure of the page and know where to find all the data we need, we can start writing the scraper."),(0,i.kt)("h3",{id:"setting-up-the-actor"},"Setting up the actor"),(0,i.kt)("p",null,"First, we need to create a new actor. To do this, go to ",(0,i.kt)("a",{parentName:"p",href:"https://console.apify.com/",target:"_blank",rel:"noopener"},"Apify Console"),", open the ",(0,i.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"Actors section"),", click on the ",(0,i.kt)("strong",{parentName:"p"},"Create new")," button in the top right, and select the ",(0,i.kt)("strong",{parentName:"p"},"Example: Hello world in Python")," actor template."),(0,i.kt)("p",null,"In the page that opens, you can see your newly created actor. In the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," tab, you can give it a name (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"bbc-weather-scraper"),") and further customize its settings. We'll skip customizing the settings for now, the defaults should be fine. In the ",(0,i.kt)("strong",{parentName:"p"},"Source")," tab, you can see the files that are at the heart of the actor. There are several of them, but only two are important for us now, ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt"),"."),(0,i.kt)("p",null,"First we'll start with the ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file. Its purpose is to list all the third-party packages that your actor will use. We will be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"requests")," package for downloading the BBC Weather pages, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"beautifulsoup4")," package for parsing and processing the downloaded pages. We don't particularly care about the specific versions of these packages, so we just list them in the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Add your dependencies here.\n# See https://pip.pypa.io/en/latest/cli/pip_install/#requirements-file-format\n# for how to format them\n\nbeautifulsoup4\nrequests\n")),(0,i.kt)("h3",{id:"writing-the-code"},"Writing the code"),(0,i.kt)("p",null,"Finally, we can get to writing the main logic for the actor, which will live in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," file. Let's delete everything currently in it and start from an empty file."),(0,i.kt)("p",null,"First, we need to import all the packages we will use in the code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime, time, timedelta, timezone\nimport os\nimport re\n\nfrom apify_client import ApifyClient\nfrom bs4 import BeautifulSoup\nimport requests\n")),(0,i.kt)("p",null,"Next, let's set up the locations we want to scrape in a constant for easier reference and, optionally, modification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Locations which to scrape and their BBC Weather IDs\nLOCATIONS = [\n    ('Prague', '3067696'),\n    ('Honolulu', '5856195'),\n    ('New York', '5128581'),\n]\n")),(0,i.kt)("h4",{id:"extracting-the-data"},"Extracting the data"),(0,i.kt)("p",null,"We'll be scraping each location separately. For each location, we need to know in which timezone it resides and what is the first displayed date in the weather forecast for that location. We will scrape each of the 14 forecast days one by one. For each day, we will first download its forecast page using the ",(0,i.kt)("inlineCode",{parentName:"p"},"requests")," library, and then parse the downloaded HTML using the ",(0,i.kt)("inlineCode",{parentName:"p"},"BeautifulSoup")," parser:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# List with scraped results\nweather_data = []\n\n# Scrape each location separately\nfor (location_name, location_id) in LOCATIONS:\n    print(f'Scraping weather from {location_name}...')\n    location_timezone = None\n    first_displayed_date = None\n    for day_offset in range(14):\n        # Get the BBC Weather page for the given location and day and parse it with BeautifulSoup\n        response = requests.get(f'https://www.bbc.com/weather/{location_id}/day{day_offset}')\n        soup = BeautifulSoup(response.content, 'html.parser')\n")),(0,i.kt)("p",null,"When scraping a location, we need to know in which timezone it lies, and what date the first displayed day of the forecast represents. We can find that out at the beginning, when scraping the first day of the forecast for that location."),(0,i.kt)("p",null,"To get the necessary data, we will need to find the elements in which it is contained. Let's use the ",(0,i.kt)("inlineCode",{parentName:"p"},"soup.find(...)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"soup.findAll(...)")," methods, which find elements matching some specified conditions in the parsed HTML."),(0,i.kt)("p",null,"First, we extract the timezone from the second element with class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-c-footer-timezone__item"),". The timezone information is described there with a full sentence, but we're only interested in the numerical representation of the timezone offset, so we parse it out using a regular expression. With the timezone offset parsed, we can construct a ",(0,i.kt)("inlineCode",{parentName:"p"},"timezone")," object and from that get the current datetime at the location."),(0,i.kt)("p",null,"Afterwards, we can figure out which date is represented by the first displayed day. We find the element with the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-day--active")," containing the header for the currently displayed day. Inside it, we find the element with the title of that day, which has the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-day__title"),". This element has the accessibility label containing the actual date of the day in its ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label")," attribute, but it contains only the day and month and not the year, so we can't use it directly. Instead, to get the full date of the first displayed day, we compare the day from the accessibility label and the day from the current datetime at the location. If they match, we know the first displayed date is the current date at the location. If they don't, we know the first displayed date is the day before the current date at the location."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"        # When parsing the first day, find out what day it represents,\n        # to know when do the results start\n        if day_offset == 0:\n            # Get the timezone offset written in the page footer and parse it\n            tz_description = soup.find_all(class_='wr-c-footer-timezone__item')[1].text\n            tz_offset_match = re.search(r'([+-]\\d\\d)(\\d\\d)', tz_description)\n            tz_offset_hours = int(tz_offset_match.group(1))\n            tz_offset_minutes = int(tz_offset_match.group(2))\n\n            # Get the current date and time at the scraped location\n            timezone_offset = timedelta(hours=tz_offset_hours, minutes=tz_offset_minutes)\n            location_timezone = timezone(timezone_offset)\n\n            location_current_datetime = datetime.now(tz=location_timezone)\n\n            # The times displayed for each day are from 6:00 AM that day to 5:00 AM the next day,\n            # so \"today\" on BBC Weather might actually mean \"yesterday\" in actual datetime.\n            # We have to parse the accessibility label containing the actual date on the header for the first day\n            # and compare it with the current date at the location, then adjust the date accordingly\n            day_carousel_item = soup.find(class_='wr-day--active')\n            day_carousel_title = day_carousel_item.find(class_='wr-day__title')['aria-label']\n            website_first_displayed_item_day = int(re.search(r'\\d{1,2}', day_carousel_title).group(0))\n\n            if location_current_datetime.day == website_first_displayed_item_day:\n                first_displayed_date = location_current_datetime.date()\n            else:\n                first_displayed_date = location_current_datetime.date() - timedelta(days=1)\n")),(0,i.kt)("p",null,"Now that we've figured out the date of the first displayed day, we can extract the predicted weather from each hour of each forecast day. The forecast for the displayed day is in the element with class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-time-slot-container__slots"),", and that element contains time slots for each predicted hour represented by elements with the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-time-slot"),". In each time slot, the element with the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-time-slot-primary__hours")," contains the hour of the time slot. The element with the class ",(0,i.kt)("inlineCode",{parentName:"p"},"wr-value--temperature--c")," contains the temperature in degrees Celsius."),(0,i.kt)("p",null,"To get the datetime of each slot, we need to combine the date of the first displayed day, the hour displayed in the slot, and the timezone of the currently processed location. Since the page shows the forecast for each day from 6 AM to 5 AM the next day, we need to add one day to the slots from midnight to 5 AM to get the correct datetime."),(0,i.kt)("p",null,"Finally, we can put all the extracted information together and push them to the array holding the resulting data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"        # Go through the elements for each displayed time slot of the displayed day\n        slot_container = soup.find(class_='wr-time-slot-container__slots')\n        for slot in slot_container.find_all(class_='wr-time-slot'):\n            # Find out the date and time of the displayed element from the day offset and the displayed hour.\n            # The times displayed for each day are from 6:00 AM that day to 5:00 AM the next day,\n            # so anything between midnight and 6 AM actually represents the next day\n            slot_hour = int(slot.find(class_='wr-time-slot-primary__hours').text)\n            slot_datetime = datetime.combine(first_displayed_date, time(hour=slot_hour), tzinfo=location_timezone)\n            slot_datetime += timedelta(days=day_offset)\n            if slot_hour < 6:\n                slot_datetime += timedelta(days=1)\n\n            # Parse the temperature from the right element\n            slot_temperature = int(slot.find(class_='wr-value--temperature--c').text[:-1])\n\n            # Add the parsed data to the result list\n            weather_data.append({\n                'datetime': slot_datetime,\n                'location': location_name,\n                'temperature': slot_temperature,\n            })\n")),(0,i.kt)("h4",{id:"storing-the-data"},"Storing the data"),(0,i.kt)("p",null,"As the last step, we need to store the scraped data in a dataset on the Apify platform, so that we can access it later. We do that through the ","[Apify API Client for Python]","({{@link apify_client_python.md}}), which greatly simplifies working with the Apify platform and allows you to use its functions without having to call the Apify API directly."),(0,i.kt)("p",null,"First, we initialize an ",(0,i.kt)("inlineCode",{parentName:"p"},"ApifyClient")," instance. All the necessary arguments are automatically provided to the actor process as environment variables accessible in Python through the ",(0,i.kt)("inlineCode",{parentName:"p"},"os.environ")," mapping. We will save the data into the default dataset belonging to the actor run, so we create a sub-client for working with that dataset, and push the data into it using its ",(0,i.kt)("inlineCode",{parentName:"p"},".push_items(...)")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Initialize the main ApifyClient instance\nclient = ApifyClient(os.environ['APIFY_TOKEN'], api_url=os.environ['APIFY_API_BASE_URL'])\n\n# Get the resource subclient for working with the default dataset of the actor run\ndefault_dataset_client = client.dataset(os.environ['APIFY_DEFAULT_DATASET_ID'])\n\n# Finally, push all the results into the dataset\ndefault_dataset_client.push_items(weather_data)\n\nprint(f'Results have been saved to the dataset with ID {os.environ[\"APIFY_DEFAULT_DATASET_ID\"]}')\n")),(0,i.kt)("h3",{id:"running-the-actor"},"Running the actor"),(0,i.kt)("p",null,"And that's it! Now you can save the changes in the editor, and then click ",(0,i.kt)("strong",{parentName:"p"},"Build and run")," at the bottom of the page. The actor will get built, the built actor image will get saved for future reuse, and then it will be executed. You can follow the progress of the actor build and the actor run in the ",(0,i.kt)("strong",{parentName:"p"},"Last build")," and ",(0,i.kt)("strong",{parentName:"p"},"Last run")," tabs, respectively, in the developer console in the actor source view. Once the actor finishes running, you can view the scraped data in the ",(0,i.kt)("strong",{parentName:"p"},"Dataset")," tab in the actor run view."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Building and running the BBC Weather Scraper actor",src:a(70851).Z,width:"2560",height:"1958"})),(0,i.kt)("h2",{id:"processing-the-results"},"Processing the results"),(0,i.kt)("p",null,"In this tutorial, you have learned the basics of scraping data in Python using Requests and Beautiful Soup with Apify actors. But scraping data is only one part of the process. Head on to our ",(0,i.kt)("a",{parentName:"p",href:"/platform/tutorials/process-data-using-python",target:null,rel:null},"next tutorial")," to learn how to process the data in a dataset using ",(0,i.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener"},"Pandas")," and visualize it using ",(0,i.kt)("a",{parentName:"p",href:"https://matplotlib.org/",target:"_blank",rel:"noopener"},"Matplotlib"),"."))}u.isMDXComponent=!0},69386:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,UklGRrYeAABXRUJQVlA4IKoeAABQlQCdASq6A7AAPqlOpE4mI6OiItBJqMAVCWlu4XPxEUaPlv6Z/2D8bvA7/Afk553+Kr1H+6/s//dPc/xr9Xepf8h+1X37/DfkB7W/7b+8/jv6F/G3/P9QX8m/mP+q8VXYg7p/qf+T/evYF9jPqv/T/tH+R8oX/V9Bv0f+7/9r3AP5n/dvRX/d+Df5f7Av87/x/q4f3/kJ+tfYS/Y3rNfu7///eJGwjtlnZTTD3Q7KaYe6HZTTD3Q7KaYe6HZTTD3Q7KaYe6HZTTD3Q7KaYe6HZTTD3Q7KaYe6HZTTD3Q7KaYe6HZTTD3Q7KaYe6HZTTD3Q7KaYe6HZTTD3Q7KZ3bQQxZ+BoQStWgDSOzOvG3HSQRXpqFrccb/Z+HwtgLfnzn9lJVCVVQHRsYzjdmGWRCqkgJdvO5MSvJYNCrOhvgH5bIlXOY+8wZ7pkXkP5bgMKyhBwa71gaj8cV5HOVXtoatb9WtIZJvJTByipl0g6LSCFC16zaQSL32ezr65eD6dI2PD2DcEJ6anNLZjJ+OBVQb1xA3iS0JQekZBy3ZTTD3Q7KaYe6HZSUfxhO06usgKCFmWGH0k3P8Is4mDp+PUa3jSg2P0nPOFk9L1HcWAd1T94je+c1Oo9xzlZk0EseE2+AY5Kl/iyq0NFT+IWKBVkIU/z4CUTL7/BIZe9y3UsL/GdgCQe+kdhwJzJR6Ge0+TrAc5+Dqc2m1IYkynFsEeXfe44+HJqZqdKGabqiEfqaP2iK9jKwOEdGA9kZ/QxN51YWktzWbor3dKGHuh2U0w90OymmHuh2U03dLDy9DD3Q7KaYe6HZTTD3Q7KaYe6HZTTD26nZsfWX52hv+Jzj4HFBqcy0Bak1TmVnWgcvvVG1k/SuVB1YG2BZ7ml9vFNFe7EjlBOQncQjf0np+Xhc+OGz4Pui/FAQ5+u17cWO7VdXtr99bvG/RA3pGiIOXg8QaD1tW9IQC1uFEDRoRQiWPYElvtfyVMHyGIls7509TKAXlHKsp9sTBLl1EJwJa3aEHwPVb+m+6xRUJyNXRimMPabVERnFkllsCND9fhNmKCDfQuEoctBbs8fs7cFFREh3n54wb7+7lWnAvi1gMq3AEC8xxvHZElqWRzUQoUIGMnXxIbgJ4rPRnCy6jIoqsvCGzoQY3oQIctoutlBsuNknmsFBYYp0LxGU19rPaukVjkPO4Ti3WMsE2KRLSMAco/n0uCfwyLSmfE+kZ2VrOm+UC1kop7wQKK8GdjI7mQlmuGSxxsC1Exei5y5aDU10rA9y2jco4hZC0dPoBoXAKsERHvfLO7SnfiyG5ALwmJ6ms9EkqFk69oJCtMa5i94QguANxQJSO5DxSPrMHucZ3fw4K1jpT8ljPjJ65DJCKTdWxUO061nci1anTgSVU024z6M97dUM3yIgqD51YvUs/5WowswLK0G7Ua6rZFx2vk3xlnZN+Pql97PW8aVY0Owvm36Np4gvtxkZw1QnAhJ3IPy9DD3Q7KaYsoNMP6QmHuh2U0w90OymmHuh2U0w90OymmHuh2U0w90OymmHuh2U0w90OymmHuh2U0w90OymmHuh2U0w90OymmHuh2U0w90OymmHuh2U0wmAA/v71mszRMmqsxdhAACxVmLsIAAftIEAAHUoJGtD3+u7KusGQ/iXooJClsvTKbaidSCDXSA55rAQ2+aXbXXVgQMO+WMvejuSn5j7UrnFrCBwLDf/LVClPqaW63Qz99xOyhu6zdce/8+tve0Of0lyJna+q2PMnbgZIq6nd+Fx/FSk91sJdlNK2Yx3GfgGdY/Yy4F6NjZmA3F1TUjtT0vrj3zr4UcQmUYmlJr3z3OF3ZZ9O9uUOEjTrqL9XFfWmd9ykEgUzt5yX9oehDH8vVNPktAtXkBrHmOoQ4dKZdRYi+mDkKH6Yf2EysK9AKyS0nhc/Hn3niVNorbnA8ZsuHJScQ2AS4IkxJQonNtarhJAoH26y+T/O+eaV+LBfEu3WFVtJ+i8ygR/vfURujp9DAz5rmMjm+mcm5tjVTmi08qs5jvFh7QKJHOZ5XBN/58s+etKkkopKMHOwbLwFZFlmtQDkYbFR2cOyzFb+FjXrvQCHpXwbhI538ZaLRNATMxlTWIOVe4Dx75nrs3bQWB6l2mNW37fGzV2KBq7yig7/nH0wG4i91v0tcq8QCLTMEjHi2p7k8rUOiPal+rXrOBhgamDU6NiIB0hibUOIBl8+O4E1e2pdGwszz/F8PZlVSAqNWUwTfkhlP4PskAAemu2j3CG2t8D/cFFa0olyqreHcUdqF3FgbBxLRqgU56iz39pHMaPWbuV13eHt/5kXCFQKLbNWhEedcTtHwU1N5OCZcYFrONhUGS+SYa7NWqnFjIZMEwSobZVAshlGRx0gqz/9f2OMD6iZAaB1rxVzMH2xnv74jmBRPcFktpNm6vBY3t9OOoyh5jFtFaL+XmvbAxyE9YBCziui/egXcUIZ9LqDjmv7JKTv+AYKYUvas6rNvTW+NPBlvbHAPqjZ0dLNbWKYGosSS8mH2Z4BrX3VkTbFQEW1hL93ilWWcGT67tghF1+tNLSSOPb9uIRtKDQNB+HdFf39qBPaeZxwpr4oFLiEKH8HRh7xCqQMhRvLVlLtWud3gy8xhEnwaWv5ttC1KDEkAhx8BT6rD8yuoSO/0iMr5w4JueA654QmJwxfzOsmJTjndhx7ClbDxRRYiTQqAZymIw9g0S3CWMzgvsslofKf9PLjgsJPhx6iu/NIZbcvLRxeMPEmubi8oKWiaQ6VEuAtLf+KXiajulyn1YGRPoVAk/uVyIMCPPNWOEf1jsl7eZGMA0TRWYyIMBMeqb2StkBLWe0bs0mfLYOLNV58F5pBlbTxq9gRoE+KVlVsuBSj6d15u1ESqx47llAtktmv7oFUh3LNqpX7jowixaVOjeiw4FIUh0XcdmkRbqBbLZ+4ZftK73xJkS+n0eACduXWeJqiVw4uM+7TbhrKQgPJpGwpkX3rtGMX0VnbNsLGRDS1kg0O48FD4mp2+ncocweCLBllvFLasqdkjmtXtmrx50rQv2iuuVeFpdJBzF7sFZM7DyaeQj+KI/PEqzL4Oxy55wCR85QXmh4O8sA6vJH5PDt+0H15p6A2jrrfD5bdUL9gMZx6Oxp8AbK8uGEfrlTjoNEe63euLC4udlKKGDKgzfDzq4cwbXxFtsJ6ppL0W33heET+KXbsit/7lYaTl6cXOw/7QIQ9Es1h10UQXYoqgdjIjLkHbRLJSy/a4PhPQNB8Gnx4cnhQUshy4P8RWqhShvBy5ns9qC3D2cLXuHpEDlCXxGzumiw/5JnhfZWVhJpZX7SyuiHZOu4DwF0Zun4z2IGdtfj2VmARcMHOILQM7fQrEiAahwabKplCBMMAQH1ukiyI6Dq3mLNXX7FaJKW1WsyQr7TVyiurcjqV2SXSfCdscSZ0+vUxGPcyvsxQOnrplpbgVj7CYrzlXfeWAelcs9q3q9PYp2x4TUuJStq56yNCXTVddxRA3f8uDoDsMNDSEXVpgWkbuz0VvkziIEEecwrlWTHW3VcwUmwvf5DzicSl2aTvIVMGLqj5M1EFi7wfkp2FdAWtY3jpCKvftNaPmT7oCRMw1JW+WowVDG06/tOoR01Xq40VqCgNIZR4iR314XFIBSVDJpyI7TKHRpgsCo6ooZb5oKK863hgA8HYpiVlAaBF0+S7eoBgo5WgbI6k5m1OARxLKz7ZLKKjSrtqMZo1prkgFTHHRAlY3sx6UoDElFunRoZy+NX9vd8R0UPUDUUE+ku38xj9MZ3VKnarfQ2MNEMndXJcwG+VILdyU/Y5GLrh6RljqSIQFG1HvGYv+dZVfEQaWx5/DQZ1tZC0bABE3hqZZsaV/6gXuYfn9lZm6p8P3ipw/ehxn3c4qJGdBK5EssPIq5IxYNjWzO8tKzwHdC5TcL7ISNdSFC31gWQjRqk4f+2T9uGqX25IJd/vst72kLYk4jAx+P3V5zR4cQxanwhewmvWPer8wSAE1g2Fwq/kSLRF2u3TBWCN+s0HH8JekJ/8egvd4+CDzf9FjCseP2gKDlOHKCp5MZ4iu/7C5gf2Rp3uX/uFHIjV8+oT1ZVpgxd/VeezQWGkciAybcMimVw9/WyVltHHm6H6sMThMH1mbMlTdFt3+43uF/FWvdSCCFQlHRsWU6JJZ0OVcII793NGIdLWSxGE9IRmpNgEC3duVdExDtT4Xyb6ki7vRKiSYybXxjcqsgvgJWE806jJjKWce3oReCjzO1IUZjBpCfpoIsrHL0F5p23NEvKlbnA7eLRv5MArpnHTkBOjDU0vKxqfqqVNdjz1aRRIHkITmBT56d7XOK7/LW9JcwxWC5FPTgO8val/B3Xx8Evlw21oEWVb9XRGceyIuVIeRrpeYla7Jd3TkmiFyV4yuM4J+ELW5bjfFTrBrrkRwiAs7A7XQk20uGrYQbw6L/Dd+J/F0OyDAyYzXY94r1svylPKpJ8BeJCJYLuiyePMy5pZe0vLQBvC/AebNL+3Awn21NAiapbqDrnMJ7AYG63rrKer5XVR2H7iaZzS/zhMfmeUhOItIXNIGGzZfmila+iuLnGftM9L4AhJYsZfcynI0RRCJwyZUZ6mhpfD56qFI+kPELLYAKrrBAcSiTVFWLib3k0WA/gJVDUq+SztdkdfU4crwoQCgNQIb4t1iu7p1bwh4rEJDZxqs/x0FkP4aj6MyCs/LdTghGPxk4IOR5CBaTjzWtp78t5Gev/MnDGv7eposOO1BOnKd9DN88yrCdMPjIWoiUbmGBHHBjrA4nj2M/LrUdzDGwzdYVsWiHxDY6iAjNpfpHVYfHNxX01Fr4vzNjO2Dm4GxO3QWFT8sLXxhuxtr9yF2VSjaM/R8ywh1GcHu2UJIDl8kJel2X4V4bXwvjNwDv4UZl1vo1F6khsQkTa0dIHx4cwHI7QPtx0boSZkhgvKAkMuB9tP+FF4z1OV/9gnheWHToD8mhct1ldIBHJZ4So0V+qr1RzXTjnsAgbnnyQ+g4a3U7iOMd3nRjyV96dwaOmjMxNAvIHM654j8lcbXhLqWzJNl4A0YRym41KOgt3h3zYprYuOhcFZxr1QjuW2Xmd7JpvzA4e1KQ1ImYtOyzv4R/1/0OuydL3Sh82aDfW33Z5F0SRbICKw49b6INWh/KrhixT0ZMDMvOjFbHPSGAcAmLL7RppCNWjbcTXtufhhetbTWDnY6I8EZp/YIx+ZUYf6Ac4Y7i0sudka90dJDKp0PkXt3TjBwG1B4FPiSbwvRNr5oJ8xI5qdYAo9VCFvG5wCXY0VNCIH7G1C2Qzn0PdDriqvzSLvUQj88ZSlnlj+rqP41nVHz9GkeQa0cdHDv4GF93LliqvdHIJGPNzQseV7k7/27AbKJCBOPACykMAYvL+2cx+90ZdXUFGZv/shXPnMci49xxnT2Hd/FekhBdONRN2L2lu0Qn/Jsx83h4quPXXTYRDfchwCj2LCwkySOuBlHLwi9cXNuBURERRI2njhjL/CWmE7gxvf6LmurBbs5EFnARUGkymwX+wq3ljjDpJ7dGvvz1d2yE3RHQC9O2LaAzVjXm6MRfM7N4agxz3lffvVg9PhVvhw7ni9G7yVcpkZq1gGYUY8qsgDY5WPfhNvq5SqvbzL0c9V2Uitfak2TqlxkwJjyJvSmr2eS4k98yf6XjmV1l0Qw+VqpuEYDY4TqhMdwY4kGpFLAeI6tGbsDpO0pDlIIZOGZ+H9IAb9a6bNHH+VOjGDB274FU/vfcu1jAutnRhpiovW0+bfl81FtTfe33DpiFzGuMSMzyr5CZbV8O7Yb3ISpmg/JsoKN09XJrrYlc+ZDmREPUqrqqNN+4oY2wYx91Q634eJrmhKSEYMy3c10p1MvctHMlIzKsfZ4Qyk4eG/sX1sGbfkXK9U05HEvb8NF29oFSz3IJEGufpVBXbtx3Cz7CoeAlc0hM+Zj6UyEiBSUMxUTSakoqv8th4SOLMWG8ELO1hdL594BX43/4BDUeVNFyZJmRmIlwwVtYGHtwVeFQdpxQbnqSc9Xibrs8rudO0nebuIJAvLLgSCDOROx8AKdBpZ4Obz5ey/CWACrMgfx07S+k1fLcYsFmziw/Ezjmh26aOYerTCv4mjfzYGWgXEzOeq8No5cTeNvjTwUQQQu3tFAYAHpFxRQ4EcxlLX1n/MS7vwEQw+a44wDCHhlKfGBp1DrdgjlqYrlm2EDDxIQUqLeglP9vXz+LfD7EnmzQO/J0NiF/LqL6v/o4sAyNUir7kTjgvaBG6cUzjECNUlRuFP7kAvAyxr9tH9T5bQwMuCuZ+WlV4PzGLC7j1q89AvUOAoz7DYk6DxJG0VOgdeW025alfQAfFXWxfN0ZxTaJ/cwBtL98sBmS7ESG6/1ssKhU1PZfpJRmUPevHh0Fveex1gbazrupbg5Uuv3hrjBEJx7jHE/EBCexf59aifcDfh0Cx1C1a7IihsgcdqRk82PmHxFlTVeWObyEoyExY41gdg7FxHekcfrQ8vSVro/ZukCwOoechcFWSpxDzvBM5Pr/cirpB9pmr1wPkQMxJX58el3lXDYHTBljyS1dNBqQXi7C9mEmzqF5hzsifVwDBFplfdr6tn9xDcHTSMkqRUFDZ/gdQHFR3HoMOVcNkdhklxndFHm+IGXrvOpbvxK28F3ZU0xjj2Wc71Xe++tgRBYCwch1KzktSGoGPfG8TCFwTlktywXoCSg0+Afgx/ElrBjs6PdUGXe9uLJRnFP4WyepJxTYw+c/BI9ZxgNZCdIIJ60zbqKWvk6/gb0W2CJ5EhA/fgOy8VxK7pZ1T6WL66qfZHuS5xwhCtdKbVGmr8FSQQGNKNQzosUiikd6huMTyo9VJ+oNIgDec6VuGpepTc7VVMfEHUt5GVaKTEBBsUYP8UYWxKp2eeW6bpWiktQEEZf/rriJjB5gW4yefJuZd7EWVerGVXvH2UsGvfMt2oHNtk/kI4Yp5ovcSyCch6790P2lLRigjHcEwjREjD9ks+SES48CUvIeaX0e5tcn5q4CRVt+zMHqCuaRPSfL8y+1TY5ePmaY7s1b2RaOqb00CU4L1sZsUQrcMOAxMOx5RxfgXpkAoKdGh3tLlZ4CF35mG9Bk8p/rJTC6UGvuHIwMahRuAxqYQAT0qOChBiVgu733Jo2L3BvrVhyeZ3CUao31y39IAiOnx3OQhVAN3aSy7r1C3sdRVZnaufO+rMWow8depA+uSg2IGN6ft05c+R5opJ+N361pdwzp66rL6r3P7BGFsY7BQDcMGC/Nsu5GB4hxZe9RVZ4+WNrLJoVQujmZnDObu6E4Po+MVXrlNxDwjNvKukvzxthnSjaBxvDbSfWbNRWVQn+w7uPcnRCttzXa7Grb0pQPzAtL2sXvIvZI1Us5p5pWsoeYBdaDGI4/E03koUldL/gV12JzWEn0Vh/XI8QYi9wnzQeSJQayQJOB1kbN9eKSbULE1pCKI+kh6KgjcqVZEe+SPL9UX/KYVrc3mQz3X//U9/co2UNKXuzNMGb4AfA3msDEP7OyrQ0EHJ4nFnaGoh+YEAvP/WMXcr9SkE8aRshuurbVdBCcsxd3YxSO0A3SHxWyHDWAriimKPkdCprXlG/wvW9xtmRyfblU2dmIorak9J7avWxXiMxlj/koCPXwpVU0aOtd99dPCxNNwftAo5VSwS9QEsbK83MoxGsUgHsgk9/JdhRhpgLE2UBzz+KRRiN/hY6TpXN+ymv5KuP4xwa/0q9ZN/3nYKC9o1KftTmclbbj4mp9/k2GPiz6h6gNKawEBzRDINfp5NydQD97tQsIHgkqVUkjx5bFTeQXXCQ52a28bnXq8O87Hh+SqdlCQMEjJswKOo736LnvFKhlYWtPK3izrYjlGuIGt/RDSJNF/wuWICGtK4hxD7+4FZkhIdH6desOD2lNIQgTTrf6JF0EJyw5719fTx/QZcPiCkFLZyG4yRvdhvJncC5xqWMxTpS3gJGB2qWRdQscmfj2Uw2ZlFMqE2pY2Oiiq/bcMV3OBUtsXxvC0eGRHNoRz7jXXgx6JgxeHHATWMc72JEu0wwDd2eUraCp21SLf2G1cjeGds7+CE1wDyRh+sFqj5KtRLK4AWsOSZFrVXVkLZW2D8vK1VAi9ziiFscEmnI5lySq1CG0foNnpfcHLEpRwZd9TFZOfK3c/rBlv/RjJTG9aJQEqMI7ym8crCWqKwI4mxHAnfKbNgpi34RY2w507q3Fd4yPmDCrXAMT8ZfZpXuDlLUHZPAjq0JXFA1khN0Sczr1Cz77o5A1xYVK+PLoUlWaA2c1l3XUJQUd9bEffAjLv2PuTXaNvBLrG8MhOZwK9rpFHXDWRSkK8TVvtuNFNxcAdPgQqOoJ8M3Ep8SVu1rLd0+Jesfxk1YzKh7HPngxUGA2qP05jG0V2COOZvuA/q/Ry0vUcQ/yFd3LJHH9DNri7pHR36df59MRESDWe9+Z7KTNFMltalMvjn7ZNo2NBZ73JKfii4eGUyTn+N4Hxfr6ZiyQ9/vxR/TxwbEJIJSDcyDnnj5c6O7bbW1cbmkc7Cknc9QtE0so/YLH+a5uRgMRzLXVP+2YggqYXfzgkaklRD4wc516F+1ycrdFpdz98jSUmwYzzGAqLE290txSlSDHKMB9tw0URfMkBZfvpJEg3KpszC5p4OJiMve/V1JW1EkrGF0LtzowRp60fl5LYC2eEcgBajbY4mopYj/tSS5i5X24pz+sH6zEWtvKsTUWr7eB2Lh49wiYCg5+hMBQpST5GI8MdEEsyDV8aZg6mB9eZZU/pJrgrBQTVV9W32TVT+AGLPhDL83W2z7uK3TE0ok+L1g31HEnifRogdkHMvFNTeV5/0sVXWdqPIovof8TuHlHTtCertujISkwRaTXDntgQ8JR/wSDIEVL/8RjC1hiyK/yEStl91kHQraZyGb2fizgHqeT73oPs5J7g4WeDur46ZMewJQzLbqsopcWfFPH7wzMoyKe9UVOYYYvBwAejl4aeFzjSDADcQ4rXf/tGIz/ws6b9bg4DGzfWRzX94smbffT2E1I4rTfW8W4UkEmySqzAGbwyZrptOIqSSvOzvHBdEON9A+S3AlqRzhYa3BvFtFFZ+aL8oKK7Q6C2WJdtITtMIhYskC9wy84vt1PFs/4tETRABBKfYO/2+3YT+hYJvqhyaCUXTlrJ8EB04D7z+oxVwiYpWPNITTSm0XDCJZs2MLpnXCuD+eZLe3sJRavWWxfM5m2QAKI5d8xczd2PCw4/xbvVrMDzAi/5re1MZxPrEVo56gxxv3SWu1Wa9qcWjgpybN+kCI731tH+9RNFS1WzuEoQtD4bqfNRAWDMbNuF11z3f7pnXQr9zV1NuIWp36R2QPGhA2w9jk6TuBvGmMKYRQEjcixGkAb+xoC2uDVP93OHCRMCbIR35y227FABW+h5VRdb9Gua1qXJBCk2v21DDo+qfH7PF3BIwT5jx5EGkRfb1VIPU5rp0GjvJ3vg9k3gwSlQRCxO+ZBHbEED2PXW5BgMiBBC+5xOabhmZNqSNCyUz6Tz+NyzM4BVnCuXRy3IXhfErkMDUxw0UXwni97l64M833DahctLdCzHXPkZiIvbmKYL5Z0z5WRfS2GG78Wc7NunCgz6ZvwW70D21ds2Lf6hvWNGx/tN3mYwkisXijc2lLRosjnf9OLREtzrW0+MmofjgJcKwOD7kgHDrcNVuvPhZUm2m+hss6lf3t/nBfWPKnLzKvjB7yXrSGaSfrFhj3tzez1TVvey6av9MGQ4JkFMo6CoOoh+EUoXY5lZu2ALHLqdFo2nZNpQ+SIPGjAP8VtXTBL2cV7j+qjhSaAqMMfPLJnEoNBzW9dF/C9P5qX7Vc7IEKon9BbXOrFAe2zPvcOFMjY8dvP1dqvRYnJXFSLB4s4DmCWK7TcZ8K+vithQFz5AmOH+RXPMy9n3/1eR1KfQh+7wLYVcO6SNLt/Cj8fpuTrxYUIsTvmreT9/i3eq5XraECj2L3FH9whK6cSZCMENG4Gem6qWs6T/opGmiNA/USlQzDrxnJFb1og9qkgb8eeIO0+i49t47LqDjybnXZhBPzvJEDhU/S0HQQe1IGl1v6F2ZMRyF6mwO/Eue3icFfcb7BTkgwQiPZuG0vfd+fqs8sN0Z0UJkcwydWtMJi9g5+BjGgGZRWxG2jb5UC+3n/q5cCeMqqgI46WAlrMup23uo3pMldkPM6/uQQNIWXPfwChiQYvq8nF6XTUXAGAr8UhqAY9fys6E6czt5UXuNBdSzKD4MmXWp7lcXKnkRw0Zpa6WADfu4bA1JsmOBky7DDdLnEqotNy0AbwuxGe9kTP+IxhayvTtHIjXzqh3wO5QsaEMy3FyxaDjvucc9zSY0nydUwATWeObATaGQ1LXraqDRAHt11TLJ3QIM4TnTKlBWsSLsWsK1GfPgkC2iK1+2bTDk04edgCej6BtHWCwhRH7MrAAAAAAAAAAAAA=="},1360:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-after-midnight-0b1d2ec9172fcbf70e5036e4525362bc.webp"},46167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-devtools-9b9c8b6fe331163b9816449a04c8d1c2.webp"},70851:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-scraper-source-76fb9b17bd5e5c8a93e4554299a7aa80.webp"},4417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-url-format-b2acd8fbedf89c9854861db60be3f600.webp"}}]);
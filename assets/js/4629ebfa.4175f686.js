"use strict";(self.webpackChunkapify_docs_v2=self.webpackChunkapify_docs_v2||[]).push([[9579],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7447:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Process scraped data with Python",description:"Learn how to process the resulting data of a web scraper in Python using the Pandas library, and how to visualize the processed data using Matplotlib.",sidebar_position:3.94,slug:"/tutorials/process-data-using-python"},l=void 0,p={unversionedId:"tutorials/process_data_using_python",id:"tutorials/process_data_using_python",title:"Process scraped data with Python",description:"Learn how to process the resulting data of a web scraper in Python using the Pandas library, and how to visualize the processed data using Matplotlib.",source:"@site/sources/platform/tutorials/process_data_using_python.md",sourceDirName:"tutorials",slug:"/tutorials/process-data-using-python",permalink:"/platform/tutorials/process-data-using-python",draft:!1,editUrl:"https://github.com/apify/apify-docs-v2/edit/master/sources/platform/tutorials/process_data_using_python.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1677347846,formattedLastUpdatedAt:"Feb 25, 2023",sidebarPosition:3.94,frontMatter:{title:"Process scraped data with Python",description:"Learn how to process the resulting data of a web scraper in Python using the Pandas library, and how to visualize the processed data using Matplotlib.",sidebar_position:3.94,slug:"/tutorials/process-data-using-python"},sidebar:"docs",previous:{title:"Scrape data using Python",permalink:"/platform/tutorials/scrape-data-using-python"},next:{title:"Use Apify from PHP",permalink:"/platform/tutorials/use-apify-from-php"}},h={},c=[{value:"Processing previously scraped data",id:"processing-previously-scraped-data",level:2},{value:"Setting up the actor",id:"setting-up-the-actor",level:3},{value:"Scraping the data",id:"scraping-the-data",level:3},{value:"Processing the data",id:"processing-the-data",level:3},{value:"Visualizing the data",id:"visualizing-the-data",level:3}],u={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-process-data-in-python-using-pandas"},"How to process data in Python using Pandas"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to process the resulting data of a web scraper in Python using the Pandas library, and how to visualize the processed data using Matplotlib.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/scrape-data-using-python",target:null,rel:null},"previous tutorial"),", we learned how to scrape data from the web in Python using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.crummy.com/software/BeautifulSoup/",target:"_blank",rel:"noopener"},"Beautiful Soup")," library. The Python ecosystem's strengths lie mainly in data processing, though, so in this tutorial we will learn how to process the data stored in an Apify dataset using the ",(0,o.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener"},"Pandas")," library, and how to visualize it using ",(0,o.kt)("a",{parentName:"p",href:"https://matplotlib.org/",target:"_blank",rel:"noopener"},"Matplotlib"),"."),(0,o.kt)("p",null,"In this tutorial, we will use the actor we created in the ",(0,o.kt)("a",{parentName:"p",href:"/platform/tutorials/scrape-data-using-python",target:null,rel:null},"previous tutorial"),", so if you haven't completed that tutorial yet, please do so now."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In a rush? Skip this tutorial and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-docs/tree/master/examples/python-data-parser/",target:"_blank",rel:"noopener"},"get the full code example"),".")),(0,o.kt)("h2",{id:"processing-previously-scraped-data"},"Processing previously scraped data"),(0,o.kt)("p",null,"In the previous tutorial, we set out to select our next holiday destination based on the forecast of the upcoming weather there. We have written an actor that scrapes the BBC Weather forecast for the upcoming two weeks for three destinations: Prague, New York, and Honolulu. It then saves the scraped data to a ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/dataset",target:null,rel:null},"dataset")," on the Apify platform."),(0,o.kt)("p",null,"Now, we need to process the scraped data and make a simple visualization that will help us decide which location has the best weather, and will therefore become our next holiday destination."),(0,o.kt)("h3",{id:"setting-up-the-actor"},"Setting up the actor"),(0,o.kt)("p",null,"First, we need to create another actor. You can do it the same way as before - go to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/",target:"_blank",rel:"noopener"},"Apify Console"),", open the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"Actors section"),", click on the ",(0,o.kt)("strong",{parentName:"p"},"Create new")," button in the top right, and select the ",(0,o.kt)("strong",{parentName:"p"},"Example: Hello world in Python")," actor template."),(0,o.kt)("p",null,"In the page that opens, you can see your newly created actor. In the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab, you can give it a name (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"bbc-weather-parser"),") and further customize its settings. We'll skip customizing the settings for now, the defaults should be fine. In the ",(0,o.kt)("strong",{parentName:"p"},"Source")," tab, you can see the files that are at the heart of the actor. There are several of them, but only two are important for us now, ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt"),"."),(0,o.kt)("p",null,"First, we'll start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file. Its purpose is to list all the third-party packages that your actor will use. We will be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pandas")," package for parsing the downloaded weather data, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"matplotlib")," package for visualizing it. We don't particularly care about the specific versions of these packages, so we just list them in the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Add your dependencies here.\n# See https://pip.pypa.io/en/latest/cli/pip_install/#requirements-file-format\n# for how to format them\n\nmatplotlib\npandas\n")),(0,o.kt)("p",null,"The actor's main logic will live in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," file. Let's delete everything currently in it and start from an empty file."),(0,o.kt)("p",null,"Next, we'll import all the packages we will use in the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from io import BytesIO\nimport os\n\nfrom apify_client import ApifyClient\nfrom apify_client.consts import ActorJobStatus\nimport pandas\n")),(0,o.kt)("h3",{id:"scraping-the-data"},"Scraping the data"),(0,o.kt)("p",null,"Next, we need to run the weather scraping actor and access its results. We do that through the ",(0,o.kt)("a",{parentName:"p",href:"/api/client/python/",target:null,rel:null},"Apify API Client for Python"),", which greatly simplifies working with the Apify platform and allows you to use its functions without having to call the Apify API directly."),(0,o.kt)("p",null,"First, we initialize an ",(0,o.kt)("inlineCode",{parentName:"p"},"ApifyClient")," instance. All the necessary arguments are automatically provided to the actor process as environment variables accessible in Python through the ",(0,o.kt)("inlineCode",{parentName:"p"},"os.environ")," mapping. We need to run the actor from the previous tutorial, which we have named ",(0,o.kt)("inlineCode",{parentName:"p"},"bbc-weather-scraper"),", and wait for it to finish. So, we create a sub-client for working with that actor and run the actor through it. We then check whether the actor run has succeeded. If so, we create a client for working with its default dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Initialize the main ApifyClient instance\nclient = ApifyClient(os.environ['APIFY_TOKEN'], api_url=os.environ['APIFY_API_BASE_URL'])\n\n# Run the weather scraper and wait for it to finish\nprint('Downloading the weather data...')\nscraper_run = client.actor('~bbc-weather-scraper').call()\n\n# Check if the scraper finished successfully, otherwise raise an error\nif scraper_run['status'] != ActorJobStatus.SUCCEEDED:\n    raise RuntimeError('The weather scraper run has failed')\n\n# Get the resource sub-client for working with the dataset with the source data\ndataset_client = client.dataset(scraper_run['defaultDatasetId'])\n")),(0,o.kt)("h3",{id:"processing-the-data"},"Processing the data"),(0,o.kt)("p",null,"Now, we need to load the data from the dataset to a Pandas dataframe. Pandas supports reading data from a CSV file stream, so we just create a stream with the dataset items in the right format and supply it to ",(0,o.kt)("inlineCode",{parentName:"p"},"pandas.read_csv()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Load the dataset items into a pandas dataframe\nprint('Parsing weather data...')\ndataset_items_stream = dataset_client.stream_items(item_format='csv')\nweather_data = pandas.read_csv(dataset_items_stream, parse_dates=['datetime'], date_parser=lambda val: pandas.to_datetime(val, utc=True))\n")),(0,o.kt)("p",null,"Once we have the data loaded, we can process it. Each data row comes as three fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"datetime"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"location")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"temperature"),". We would like to transform the data so that we have the datetimes in one column, and the temperatures for each location at that datetime in separate columns, one for each location. To achieve this, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},".pivot()")," method on the dataframe. Since the temperature varies considerably between day and night, and we would like to get an overview of the temperature trends over a longer period of time, we calculate a rolling average of the temperatures with a 24-hour window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Transform data to a pivot table for easier plotting\npivot = weather_data.pivot(index='datetime', columns='location', values='temperature')\nmean_daily_temperatures = pivot.rolling(window='24h', min_periods=24, center=True).mean()\n")),(0,o.kt)("h3",{id:"visualizing-the-data"},"Visualizing the data"),(0,o.kt)("p",null,"With the data processed, we can then make a plot of the results. For that, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},".plot()")," method of the dataframe, which creates a figure with the plot, using the Matplotlib library internally. We set the right titles and labels to the plot, and apply some additional formatting to achieve a nicer result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Create a plot of the data\nprint('Plotting the data...')\naxes = mean_daily_temperatures.plot(figsize=(10, 5))\naxes.set_title('Weather prediction for holiday destinations')\naxes.set_xlabel(None)\naxes.yaxis.set_major_formatter(lambda val, _: f'{int(val)} \xb0C')\naxes.grid(which='both', linestyle='dotted')\naxes.legend(loc='best')\naxes.figure.tight_layout()\n")),(0,o.kt)("p",null,"As the last step, we need to save the plot to a record in a ",(0,o.kt)("a",{parentName:"p",href:"/platform/storage/key-value-store",target:null,rel:null},"key-value store")," on the Apify platform, so that we can access it later. We save the rendered figure with the plot to an in-memory buffer, and then save the contents of that buffer to the default key-value store of the actor run through its resource subclient."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Get the resource sub-client for working with the default key-value store of the run\nkey_value_store_client = client.key_value_store(os.environ['APIFY_DEFAULT_KEY_VALUE_STORE_ID'])\n\n# Save the resulting plot to the key-value store through an in-memory buffer\nprint('Saving plot to key-value store...')\nwith BytesIO() as buf:\n    axes.figure.savefig(buf, format='png', dpi=200, facecolor='w')\n    buf.seek(0)\n    key_value_store_client.set_record('prediction.png', buf, 'image/png')\n\nprint(f'Result is available at {os.environ[\"APIFY_API_PUBLIC_BASE_URL\"]}'\n      + f'/v2/key-value-stores/{os.environ[\"APIFY_DEFAULT_KEY_VALUE_STORE_ID\"]}/records/prediction.png')\n")),(0,o.kt)("p",null,"And that's it! Now you can save the changes in the editor, and then click ",(0,o.kt)("strong",{parentName:"p"},"Build and run")," at the bottom of the page. The actor will get built, the built actor image will get saved for future re-use, and then it will be executed. You can follow the progress of the actor build and the actor run in the ",(0,o.kt)("strong",{parentName:"p"},"Last build")," and ",(0,o.kt)("strong",{parentName:"p"},"Last run")," tabs, respectively, in the developer console in the actor source view. Once the actor finishes running, it will output the URL where you can access the plot we created in its log."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Building and running the BBC Weather Parser actor",src:a(16393).Z,width:"2560",height:"1958"})),(0,o.kt)("p",null,"Looking at the results, Honolulu seems like the right choice now, don't you think? \ud83d\ude42"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Weather prediction plot created by the BBC Weather Parser actor",src:a(30465).Z,width:"2000",height:"1000"})))}d.isMDXComponent=!0},16393:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-parser-source-0517e35ad3095a9673b91e66a69b4374.png"},30465:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bbc-weather-prediction-c1835f07c2e0dbbd50f85b66fa21ccd9.png"}}]);
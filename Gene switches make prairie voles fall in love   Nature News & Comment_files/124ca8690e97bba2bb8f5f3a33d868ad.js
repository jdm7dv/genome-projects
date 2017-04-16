Bootstrapper.bindDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;function splitKeys(targeting){var i;var j;var value=[];var valuesArray=[];var key;var prevKey="";var keyValue;var keyValuesArray=[];var splittedTargeting=targeting.split(";");for(i=0;i<splittedTargeting.length;++i){if(key!==undefined)prevKey=key;keyValue=splittedTargeting[i].split("\x3d");key=keyValue[0];if(key!==prevKey){if(prevKey.length>0&&valuesArray.length>0)keyValuesArray.push([prevKey,
valuesArray]);valuesArray=[]}if(keyValue.length===2&&keyValue[0]!==""&&keyValue[1]!==""){value=keyValue[1].split(",");for(j=0;j<value.length;++j)valuesArray.push(value[j])}}if(key.length>0&&valuesArray.length>0)keyValuesArray.push([key,valuesArray]);return keyValuesArray}function splitSizes(sizes){var i;var tmp;var height;var width;var sizeArray=[];var splittedSizes;if(sizes!==null){if(sizes.indexOf("|")!==-1)splittedSizes=sizes.split("|");else splittedSizes=sizes.split(",");for(i=0;i<splittedSizes.length;++i){tmp=
splittedSizes[i].split("x");width=parseInt(tmp[0],10);height=parseInt(tmp[1],10);if(tmp.length===2&&!isNaN(width)&&!isNaN(height)&&width>=0&&height>=0)sizeArray.push([width,height])}}return sizeArray}function hasClass(element,className){var i;var len;var elementClasses=element.className.split(/\s+/);for(i=0,len=elementClasses.length;i<len;++i)if(elementClasses[i]===className)return true;return false}function getAdContainers(){if(typeof document.getElementsByClassName==="function")return document.getElementsByClassName("div-gpt-ad");
else{var i;var containerDivs=[];var elements=document.getElementsByTagName("div");for(i=0;elements[i];++i)if(hasClass(elements[i],"div-gpt-ad"))containerDivs.push(elements[i]);return containerDivs}}function debounce(fn,threshold){var last=null;var timer=null;return function(){var context=this;var now=+new Date;var args=arguments;if(last&&now<last+threshold){clearTimeout(timer);timer=setTimeout(function(){last=now;fn.apply(context,args)},threshold)}else{last=now;fn.apply(context,args)}}}function addResizeEvent(fn){if(window.addEventListener)window.addEventListener("resize",
fn,false);else window.attachEvent("resize",fn)}function addScrollEvent(fn){if(window.addEventListener)window.addEventListener("scroll",fn,false);else window.attachEvent("onscroll",fn)}function removeScrollEvent(fn){if(window.removeEventListener)window.removeEventListener("scroll",fn,false);else window.detachEvent("scroll",fn)}(function(win,documentElement,Krux){Krux=Krux||{};Bootstrapper.loadScriptCallback("//www.googletagservices.com/tag/js/gpt.js",function(){var krux=Krux.dfppKeyValues?";"+Krux.dfppKeyValues:
"";var adSlotIds=[];var adSlots=[];var adContainers=getAdContainers();var adContainer;var billboardSlot;var displayAdSlots=function(slots,predicate){var n=slots.length;var adsToRefresh=[];while(n--)if(predicate(slots[n],n)){adsToRefresh.push(slots[n].slot);slots.splice(n,1)}if(adsToRefresh.length)googletag.cmd.push(function(){googletag.pubads().refresh(adsToRefresh)});return slots};var deferLoadFor=function(path){return path.indexOf("nplants")!==-1||path.indexOf("srep")!==-1};var getTargeting=function(container){var test=
Bootstrapper.npg.utils.Request.get("test");var ads=test&&test==="ads"?";adtyp\x3dtest":"";var targeting=container.getAttribute("data-gpt-targeting");if(ads&&targeting.indexOf(ads)===-1)targeting+=ads;return targeting+krux};win.googletag=win.googletag||{};win.googletag.cmd=win.googletag.cmd||[];if(deferLoadFor(win.location.pathname)){for(var i=0;adContainers[i];++i){adContainer=adContainers[i];adSlots.push({divId:adContainer.getAttribute("id"),adUnitPath:adContainer.getAttribute("data-gpt-unitpath"),
sizeArray:splitSizes(adContainer.getAttribute("data-gpt-sizes")),targeting:splitKeys(getTargeting(adContainer)),isOutOfPage:hasClass(adContainer,"out-of-page"),forceLoadOnInit:!deferLoadFor(win.location.pathname),refreshed:false})}googletag.cmd.push(function(){googletag.pubads().disableInitialLoad();googletag.enableServices()});googletag.cmd.push(function(){for(var i=0;adSlots[i];++i){if(adSlots[i].isOutOfPage)adSlots[i].slot=googletag.defineOutOfPageSlot(adSlots[i].adUnitPath,adSlots[i].divId).addService(googletag.pubads());
else adSlots[i].slot=googletag.defineSlot(adSlots[i].adUnitPath,adSlots[i].sizeArray,adSlots[i].divId).addService(googletag.pubads());for(var j=0,len=adSlots[i].targeting.length;j<len;++j)if(adSlots[i].targeting[j].length===2&&adSlots[i].targeting[j][0]!==""&&adSlots[i].targeting[j][1]!==""){if(adSlots[i].targeting[j][0]==="pos")if(adSlots[i].targeting[j][1][0]==="billboard"){billboardSlot=adSlots[i].slot;var mapping=googletag.sizeMapping().addSize([970,100],[970,250]).addSize([770,100],[728,90]).addSize([0,
0],[300,50]).build();adSlots[i].slot.defineSizeMapping(mapping)}adSlots[i].slot.setTargeting(adSlots[i].targeting[j][0],adSlots[i].targeting[j][1])}}});googletag.cmd.push(function(){for(var i=0;adSlots[i];++i)googletag.display(adSlots[i].divId)});var loadVisibleAds=function(adSlots){var height=Math.max(documentElement.clientHeight,win.innerHeight||0);return displayAdSlots(adSlots,function(slot){if(slot.isOutOfPage||slot.forceLoadOnInit)return true;var node=document.getElementById(slot.divId);var rect=
node.getBoundingClientRect();var top=rect.top-100;return height>top})};googletag.cmd.push(function(){adSlots=loadVisibleAds(adSlots)});var desktop=window.innerWidth>969;var tablet=window.innerWidth>769&&!desktop;var mobile=window.innerWidth<770;var resizeListener=debounce(function(){var currentWidth=window.innerWidth;if(currentWidth>=970&&!desktop){desktop=true;tablet=false;mobile=false;googletag.cmd.push(function(){googletag.pubads().refresh([billboardSlot])})}else if(currentWidth<770&&!mobile){desktop=
false;tablet=false;mobile=true;googletag.cmd.push(function(){googletag.pubads().refresh([billboardSlot])})}else if(currentWidth<970&&currentWidth>769&&!tablet){desktop=false;tablet=true;mobile=false;googletag.cmd.push(function(){googletag.pubads().refresh([billboardSlot])})}},250);var scrollListener=debounce(function(){adSlots=loadVisibleAds(adSlots);if(!adSlots.length)removeScrollEvent(scrollListener)},250);addResizeEvent(resizeListener);addScrollEvent(scrollListener)}else{for(var i=0;i<adContainers.length;i++){var adContainer=
adContainers[i];var divId=adContainer.getAttribute("id");var adUnitPath=adContainer.getAttribute("data-gpt-unitpath");var sizeArray=splitSizes(adContainer.getAttribute("data-gpt-sizes"));var targeting=splitKeys(getTargeting(adContainer));var isOutOfPage=hasClass(adContainer,"out-of-page");var ad={"divId":divId,"adUnitPath":adUnitPath,"sizeArray":sizeArray,"targeting":targeting,"isOutOfPage":isOutOfPage};adSlots.push(ad)}googletag.cmd.push(function(){googletag.pubads().enableSingleRequest();googletag.enableServices();
googletag.pubads().addEventListener("slotRenderEnded",function(event){var slotId=event.slot.l.m;var slot;var currentIssueBox=document.querySelector("div[data-component\x3dcurrent-issue-box]");if(slotId==="div-gpt-ad-right-2"&&currentIssueBox){slot=document.getElementById(slotId);if(event.isEmpty){slot.parentNode.parentNode.classList.add("hide");currentIssueBox.classList.remove("grid-8");currentIssueBox.classList.add("grid-12")}}})});googletag.cmd.push(function(){for(var i=0;i<adSlots.length;i++){if(adSlots[i].isOutOfPage)adSlot=
googletag.defineOutOfPageSlot(adSlots[i].adUnitPath,adSlots[i].divId).addService(googletag.pubads());else adSlot=googletag.defineSlot(adSlots[i].adUnitPath,adSlots[i].sizeArray,adSlots[i].divId).addService(googletag.pubads());for(var j=0;j<adSlots[i].targeting.length;++j)if(adSlots[i].targeting[j].length===2&&adSlots[i].targeting[j][0]!==""&&adSlots[i].targeting[j][1]!=="")adSlot.setTargeting(adSlots[i].targeting[j][0],adSlots[i].targeting[j][1]);adSlot.setCollapseEmptyDiv(true)}});googletag.cmd.push(function(){for(var i=
0;i<adSlots.length;i++)googletag.display(adSlots[i].divId)})}})})(window,document.documentElement,window.Krux)},1887526,363632);
Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var i=window,r="ga";i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)};i[r].l=1*new Date;(function(undefined){var safePath=function(obj){return{get:function(){var check=function(obj,keys){var key=keys[0];if(keys.length>1)return typeof obj==="object"?check(obj[key],keys.slice(1)):undefined;return typeof obj==="object"?obj[key]:undefined};
return typeof obj==="object"?check(obj,Array.prototype.slice.call(arguments,0)):undefined},set:function(){var check=function(obj,keys){var key=keys[0];if(!obj.hasOwnProperty(key))obj[key]={};if(keys.length>1&&typeof obj[key]==="object")return check(obj[key],keys.slice(1));return obj[key]};var keys=Array.prototype.slice.call(arguments,0,arguments.length-2);if(!keys.length)return false;var dest=check(obj,keys);if(typeof dest==="object"){dest[arguments[arguments.length-2]]=arguments[arguments.length-
1];return true}return false}}};var isArray=function(obj){return!!obj&&Array===obj.constructor};var map=function(arr,fn){var acc=[];if(isArray(arr)){var n=arr.length;for(var i=0;i<n;++i)acc.push(fn(arr[i]))}return acc};var closestByAttribute=function(node,attr,value){return closest(node,function(node){return node.hasAttribute&&node.hasAttribute(attr)&&(typeof value==="undefined"||node.getAttribute(attr)===value)})};var closest=function(node,matcher){do{if(matcher(node))return node;node=node.parentNode}while(node)};
var createClickEvent=function(node,finder){var external=function(link){return window.location.hostname!==link.hostname};var defaultCategory=function(){var template=finder.get(0,"page","attributes","template");var pageType=finder.get(0,"page","category","pageType");if(template&&pageType)return template+":"+pageType;return template||pageType||""};var defaultLabel=function(){if(node.href&&external(node))return node.href;return null};var component=node.getAttribute("data-track-action");var category=node.getAttribute("data-track-category")||
defaultCategory();var label=node.getAttribute("data-track-label")||defaultLabel();var payload={};var container;if(!component){container=closestByAttribute(node,"data-track-component");if(container)component=container.getAttribute("data-track-component")+":click"}if(label){payload.eventCategory=category;payload.eventLabel=label;if(component)payload.eventAction=component;return payload}return null};Bootstrapper.insertScript("//www.google-analytics.com/analytics.js");Bootstrapper["UA_ga"]=Bootstrapper["UA_ga"]||
{};var sendActiveFeatureFlags=function(flags){if(flags&&flags.length)for(var i=0;flags[i];++i)if(flags[i].active&&flags[i].name.indexOf("ABtest_")===0)sendFeatureFlag(flags[i].name)};var sendFeatureFlag=function(label){window["ga"]("send",{hitType:"event",eventCategory:"Feature Flag",eventAction:"Active Feature",eventLabel:label,nonInteraction:true})};var g=i[r];g("create","UA-71668177-1","auto");g("require","linkid","linkid.js");Bootstrapper.bindPageSpecificCompletion(function(){setTimeout(function(){Bootstrapper.bindDOMParsed(function(){setTimeout(function(){var finder=
safePath(window.dataLayer);window["ga"]("set","contentGroup2",finder.get(0,"page","category","pageType"));window["ga"]("set","contentGroup3",finder.get(0,"content","category","contentType"));window["ga"]("send","pageview",Bootstrapper["UA_ga"]||{});sendActiveFeatureFlags(finder.get(0,"page","attributes","featureFlags"));if(window.dataLayer)Bootstrapper.on("click",'[data-track\x3d"click"]',function(e){var target=closestByAttribute(e.target,"data-track","click");var payload=null;if(target){payload=
createClickEvent(target,finder);if(payload)window["ga"]("send","event",payload)}})},250)})},250)})})()},1874063,437733);
Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var endDate=new Date("2018-01-31");var today=new Date;if(endDate>today){var _kiq=_kiq||[];(function(){var d=document,f=d.getElementsByTagName("script")[0],s=d.createElement("script");s.type="text/javascript";s.async=true;s.src="//s3.amazonaws.com/ki.js/47412/e2T.js";f.parentNode.insertBefore(s,f)})()}},1839845,363828);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var script=document.createElement("script");script.type="text/javascript";script.src="https://verify.nature.com/verify/nature.js?nocallback\x3dtrue";document.head.appendChild(script)},1840779,445981);
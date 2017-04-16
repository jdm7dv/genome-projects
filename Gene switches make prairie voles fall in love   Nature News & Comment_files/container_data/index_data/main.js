var modelCode1;
var mainUrl2;
var vehicleUnique;

(function(){
	var $ = function(selector){return document.querySelector(selector);};
	//starwars update 10/31/16
	var isStarwars = false;

	if (Enabler.isInitialized()) {
	    dynamicInvocation();
	} else {
	    Enabler.addEventListener(studio.events.StudioEvent.INIT, dynamicInvocation);
	}

	//starwars update 10/31/16
	function addClass(e,t){
		e.classList?e.classList.add(t):e.className+=" "+t
	}

	function removeClass(e,t){
		e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")
	}
	//

	function dynamicInvocation() {
		Enabler.setProfileId(1074236);
		var devDynamicContent = {};
	
		devDynamicContent.dabAwarenessOffers= [{}];
		devDynamicContent.dabAwarenessOffers[0]._id = 0;
		devDynamicContent.dabAwarenessOffers[0].DIMEOfferSetId = 1167;
		devDynamicContent.dabAwarenessOffers[0].UniqueID = "5008802";
		devDynamicContent.dabAwarenessOffers[0].offerTypeTemplate = "msrp";
		devDynamicContent.dabAwarenessOffers[0].isActive = true;
		devDynamicContent.dabAwarenessOffers[0].isDefault = false;
		devDynamicContent.dabAwarenessOffers[0].startDate = {};
		devDynamicContent.dabAwarenessOffers[0].startDate.RawValue = "2016-3-01T00:00:00-04:00";
		devDynamicContent.dabAwarenessOffers[0].startDate.UtcValue = 1456804800000;
		devDynamicContent.dabAwarenessOffers[0].endDate = {};
		devDynamicContent.dabAwarenessOffers[0].endDate.RawValue = "2016-3-31T23:59:59-04:00";
		devDynamicContent.dabAwarenessOffers[0].endDate.UtcValue = 1459483199000;
		devDynamicContent.dabAwarenessOffers[0].language = "en";
		devDynamicContent.dabAwarenessOffers[0].modelCode = "ZC";
		devDynamicContent.dabAwarenessOffers[0].model = "370Z\u00AE COUPE";
		devDynamicContent.dabAwarenessOffers[0].year = "2016";
		devDynamicContent.dabAwarenessOffers[0].region = "Central,Midwest,Northeast,Southeast,West,Northwest,Midatlantic,Mountain";
		devDynamicContent.dabAwarenessOffers[0].apr_1 = "";
		devDynamicContent.dabAwarenessOffers[0].aprtermcopy1 = "";
		devDynamicContent.dabAwarenessOffers[0].aprtermcopy2 = "";
		devDynamicContent.dabAwarenessOffers[0].aprterm1 = "";
		devDynamicContent.dabAwarenessOffers[0].cashbackAPRcopy1 = "";
		devDynamicContent.dabAwarenessOffers[0].cashbackOperatorCopy1 = "";
		devDynamicContent.dabAwarenessOffers[0].cashbackCopy1 = "";
		devDynamicContent.dabAwarenessOffers[0].cashbackAmount = "";
		devDynamicContent.dabAwarenessOffers[0].leaseCost1 = "";
		devDynamicContent.dabAwarenessOffers[0].leaseTerm1 = "";
		devDynamicContent.dabAwarenessOffers[0].leaseTerm2 = "";
		devDynamicContent.dabAwarenessOffers[0].SignnDrive_leaseTerm = "";
		devDynamicContent.dabAwarenessOffers[0].offerCopy = "Starting At";
		devDynamicContent.dabAwarenessOffers[0].Lease_LeaseCash_OfferCopy = "";
		devDynamicContent.dabAwarenessOffers[0].offerCopy1 = "";
		devDynamicContent.dabAwarenessOffers[0].offerCopy2 = "";
		devDynamicContent.dabAwarenessOffers[0].offerCopy3 = "";
		devDynamicContent.dabAwarenessOffers[0].offerCopy4 = "";
		devDynamicContent.dabAwarenessOffers[0].offernetPricecopy = "";
		devDynamicContent.dabAwarenessOffers[0].offerMsrp1 = "$29,990";
		devDynamicContent.dabAwarenessOffers[0].msrpCopy1 = "MSRP*";
		devDynamicContent.dabAwarenessOffers[0].offernetPrice1 = "";
		devDynamicContent.dabAwarenessOffers[0].offerPrice1 = "";
		devDynamicContent.dabAwarenessOffers[0].offerPrice2 = "";
		devDynamicContent.dabAwarenessOffers[0].offerPrice3 = "";
		devDynamicContent.dabAwarenessOffers[0].offerPrice4 = "";
		devDynamicContent.dabAwarenessOffers[0].AsShownDisclaimer = "As Shown $38,370 MSRP 2016 370Z Coupe Sport Tech 7 A\/T, other optional equipment shown, see dealer for details";
		devDynamicContent.dabAwarenessOffers[0].genDisclaimer = "*More Price Information";
		devDynamicContent.dabAwarenessOffers[0].offerRollover = "As shown, $38,370 MSRP. 2016 370Z Coupe Sport Tech 7 A\/T (other optional equipment shown; see dealer for details). Excludes tax, title, license, destination charge and options. Dealer sets actual price. Subject to residency restrictions. <br\/><br\/>2016 370Z Coupe 6 M\/T Starting MSRP $29,990. Price excludes tax, title, license, options and destination charge. Dealer sets actual price. See dealer for details.  ";
		devDynamicContent.dabAwarenessOffers[0].offerRollover_Complete = "*As shown, $38,370 MSRP. 2016 370Z Coupe Sport Tech 7 A\/T (other optional equipment shown; see dealer for details). Excludes tax, title, license, destination charge and options. Dealer sets actual price. Subject to residency restrictions. <br\/><br\/>2016 370Z Coupe 6 M\/T Starting MSRP $29,990. Price excludes tax, title, license, options and destination charge. Dealer sets actual price. See dealer for details.  ";
		devDynamicContent.dabAwarenessOffers[0].background_image_url_160x600 = {};
		devDynamicContent.dabAwarenessOffers[0].background_image_url_160x600.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].background_image_url_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35159731/9341_20141210074944280_linearGray_160x600.jpg";
		devDynamicContent.dabAwarenessOffers[0].background_image_url_300x250 = {};
		devDynamicContent.dabAwarenessOffers[0].background_image_url_300x250.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].background_image_url_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/35158164/9341_20141210074951704_linearGray_300x250.jpg";
		devDynamicContent.dabAwarenessOffers[0].background_image_url_728x90 = {};
		devDynamicContent.dabAwarenessOffers[0].background_image_url_728x90.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].background_image_url_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/35161404/9341_20141210075012486_linearGray_728x90.jpg";
		devDynamicContent.dabAwarenessOffers[0].background_image_url_300x600 = {};
		devDynamicContent.dabAwarenessOffers[0].background_image_url_300x600.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].background_image_url_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/35158742/9341_20141210075003855_linearGray_300x600.jpg";
		devDynamicContent.dabAwarenessOffers[0].buildTxt = "BUILD";
		devDynamicContent.dabAwarenessOffers[0].baseBuildUrl = {};
		devDynamicContent.dabAwarenessOffers[0].baseBuildUrl.Url = "http://www.nissanusa.com/tools/build/zcoupe?";
		devDynamicContent.dabAwarenessOffers[0].brochureTxt = "SHOP NOW";
		devDynamicContent.dabAwarenessOffers[0].baseBrochureUrl = {};
		devDynamicContent.dabAwarenessOffers[0].baseBrochureUrl.Url = "http://www.choosenissan.com/zcoupe/";
		devDynamicContent.dabAwarenessOffers[0].baseLandingUrl = {};
		devDynamicContent.dabAwarenessOffers[0].baseLandingUrl.Url = "http://www.choosenissan.com/";
		devDynamicContent.dabAwarenessOffers[0].modelyear = "ZC 2016";
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_160x600 = {};
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_160x600.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/39642832/9341_20151102141156963_160x600.png";
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_300x250 = {};
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_300x250.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/39641779/9341_20151102141216955_300x250.png";
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_300x600 = {};
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_300x600.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/39641778/9341_20151102141203778_300x600.png";
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_728x90 = {};
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_728x90.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].DAB_carImage_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/39638599/9341_20151102141210417_728x90.png";
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_160x600 = {};
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_160x600.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/42657144/9341_20160419101920742_dab_370Zcoupe_160x600.png";
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_300x250 = {};
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_300x250.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/39674691/9341_20151103151823887_dab_370Zcoupe_300x250.png";
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_300x600 = {};
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_300x600.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/42649619/9341_20160419080124469_dab_370zCoupe_300x600.png";
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_728x90 = {};
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_728x90.Type = "file";
		devDynamicContent.dabAwarenessOffers[0].Sale_carImage_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/42658957/9341_20160419122107656_dab_370zCoupe_728x90.png";
		devDynamicContent.dabAwarenessOffers[0].DMA_reporting_field = "803,511,753,807,508,512,751,825,839,544,862,560,819,744,770,566,518,820,577,556,573,789,652,866,790,752,559,536,598,516,597,554,569,574,576,584,725,724,773,624,759,722,687,740,764,564,545,550,881,810,801,828,855,757,868,758,813,762,804,811,771,743,800,821,756,754,802,745,755,766,760,767,798,747,501,504,506,602,528,623,618,524,539,534,659,533,510,622,609,613,641,548,640,517,635,561,636,693,650,505,514,527,521,571,616,630,535,567,617,538,557,532,515,716,686,541,555,691,625,671,718,500,612,600,765,670,575,709,519,543,529,746,642,507,679,531,542,651,523,637,563,606,627,570,520,546,678,537,682,632,648,649,658,669,611,588,547,513,702,551,675,581,705,676,509,582,558,737,553,610,540,596,565,526,502,549,647,657,605,644,692,604,673,710,628,633,619,662,634,734,603,643,749,711,661,638,626,503,698,530,525,736,522,639,656,592,583,631,552,717";
		devDynamicContent.salesEvent= [{}];
		devDynamicContent.salesEvent[0]._id = 0;
		devDynamicContent.salesEvent[0].ID = "nosale_1";
		devDynamicContent.salesEvent[0].title = "nosale";
		devDynamicContent.salesEvent[0].sales_swf = "nosale";
		devDynamicContent.salesEvent[0].isActive = true;
		devDynamicContent.salesEvent[0].default_sale = true;
		devDynamicContent.salesEvent[0].offerTypeFilter = "";
		devDynamicContent.salesEvent[0].modelCodeFilter = "";
		devDynamicContent.salesEvent[0].startDate = {};
		devDynamicContent.salesEvent[0].startDate.RawValue = "";
		devDynamicContent.salesEvent[0].startDate.UtcValue = 0;
		devDynamicContent.salesEvent[0].endDate = {};
		devDynamicContent.salesEvent[0].endDate.RawValue = "";
		devDynamicContent.salesEvent[0].endDate.UtcValue = 0;
		devDynamicContent.salesEvent[0].swfUrl_160x600 = {};
		devDynamicContent.salesEvent[0].swfUrl_160x600.Type = "file";
		devDynamicContent.salesEvent[0].swfUrl_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/36207871/9341_20150401160326581__Filler.png";
		devDynamicContent.salesEvent[0].swfUrl_300x250 = {};
		devDynamicContent.salesEvent[0].swfUrl_300x250.Type = "file";
		devDynamicContent.salesEvent[0].swfUrl_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/36207871/9341_20150401160326581__Filler.png";
		devDynamicContent.salesEvent[0].swfUrl_728x90 = {};
		devDynamicContent.salesEvent[0].swfUrl_728x90.Type = "file";
		devDynamicContent.salesEvent[0].swfUrl_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/36207871/9341_20150401160326581__Filler.png";
		devDynamicContent.salesEvent[0].swfUrl_300x600 = {};
		devDynamicContent.salesEvent[0].swfUrl_300x600.Type = "file";
		devDynamicContent.salesEvent[0].swfUrl_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/36207871/9341_20150401160326581__Filler.png";
		devDynamicContent.salesEvent[0].saleEventH5_160x600 = {};
		devDynamicContent.salesEvent[0].saleEventH5_160x600.Type = "file";
		devDynamicContent.salesEvent[0].saleEventH5_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37028951/9341_20150612122419531_altima_160x600_template.jpg";
		devDynamicContent.salesEvent[0].saleEventH5_300x250 = {};
		devDynamicContent.salesEvent[0].saleEventH5_300x250.Type = "file";
		devDynamicContent.salesEvent[0].saleEventH5_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/38566411/9341_20150915174339092_altima_300x250_template.jpg";
		devDynamicContent.salesEvent[0].saleEventH5_300x600 = {};
		devDynamicContent.salesEvent[0].saleEventH5_300x600.Type = "file";
		devDynamicContent.salesEvent[0].saleEventH5_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37028359/9341_20150612122437157_altima_300x600_template.jpg";
		devDynamicContent.salesEvent[0].saleEventH5_728x90 = {};
		devDynamicContent.salesEvent[0].saleEventH5_728x90.Type = "file";
		devDynamicContent.salesEvent[0].saleEventH5_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/37028747/9341_20150612122445167_altima_728x90_template.jpg";
		devDynamicContent.salesEvent[0].SpecialSale_carImage_160x600 = {};
		devDynamicContent.salesEvent[0].SpecialSale_carImage_160x600.Type = "file";
		devDynamicContent.salesEvent[0].SpecialSale_carImage_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/40825688/9341_20160112133338503_altima_160x600_SpecialEdition.png";
		devDynamicContent.salesEvent[0].SpecialSale_carImage_300x250 = {};
		devDynamicContent.salesEvent[0].SpecialSale_carImage_300x250.Type = "file";
		devDynamicContent.salesEvent[0].SpecialSale_carImage_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/40825476/9341_20160112133345224_altima_300x250_SpecialEdition.png";
		devDynamicContent.salesEvent[0].SpecialSale_carImage_300x600 = {};
		devDynamicContent.salesEvent[0].SpecialSale_carImage_300x600.Type = "file";
		devDynamicContent.salesEvent[0].SpecialSale_carImage_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/40825477/9341_20160112133352604_altima_300x600_SpecialEdition.png";
		devDynamicContent.salesEvent[0].SpecialSale_carImage_728x90 = {};
		devDynamicContent.salesEvent[0].SpecialSale_carImage_728x90.Type = "file";
		devDynamicContent.salesEvent[0].SpecialSale_carImage_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/40825689/9341_20160112133357691_altima_728x90_SpecialEdition.png";
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_160x600 = {};
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_160x600.Type = "file";
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/36207871/9341_20150401160326581__Filler.png";
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_300x600 = {};
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_300x600.Type = "file";
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_300x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/36207871/9341_20150401160326581__Filler.png";
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_728x90 = {};
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_728x90.Type = "file";
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_728x90.Url = "https://s0.2mdn.net/ads/richmedia/studio/36207871/9341_20150401160326581__Filler.png";
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_300x250 = {};
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_300x250.Type = "file";
		devDynamicContent.salesEvent[0].starWarsEvent_CTAImage_300x250.Url = "https://s0.2mdn.net/ads/richmedia/studio/36207871/9341_20150401160326581__Filler.png";
		devDynamicContent.salesEvent[0].starWars_Exit_URL = {};
		devDynamicContent.salesEvent[0].starWars_Exit_URL.Url = "http://www.choosenissan.com/";
		devDynamicContent.salesEvent[0].DABIntroVideo_160x600 = "DRM_Asset:Nissan Dynamic - Unibucket\/Nissan Dynamic - Asset Library\/_Filler.png";
		devDynamicContent.salesEvent[0].DABIntroVideo_300x250 = "DRM_Asset:Nissan Dynamic - Unibucket\/Nissan Dynamic - Asset Library\/_Filler.png";
		devDynamicContent.salesEvent[0].DABIntroVideo_300x600 = "DRM_Asset:Nissan Dynamic - Unibucket\/Nissan Dynamic - Asset Library\/_Filler.png";
		devDynamicContent.salesEvent[0].DABIntroVideo_728x90 = "DRM_Asset:Nissan Dynamic - Unibucket\/Nissan Dynamic - Asset Library\/_Filler.png";
		devDynamicContent.salesEvent[0].H5DABIntroVideo_160x600 = "DRM_Asset:Nissan Dynamic - Unibucket\/Nissan Dynamic - Asset Library\/_Filler.png";
		devDynamicContent.salesEvent[0].H5DABIntroVideo_300x250 = "DRM_Asset:Nissan Dynamic - Unibucket\/Nissan Dynamic - Asset Library\/_Filler.png";
		devDynamicContent.salesEvent[0].H5DABIntroVideo_300x600 = "DRM_Asset:Nissan Dynamic - Unibucket\/Nissan Dynamic - Asset Library\/_Filler.png";
		devDynamicContent.salesEvent[0].H5DABIntroVideo_728x90 = "DRM_Asset:Nissan Dynamic - Unibucket\/Nissan Dynamic - Asset Library\/_Filler.png";
		devDynamicContent.salesEvent[0].textColor = "";
		devDynamicContent.salesEvent[0].impTracker1 = "";
		devDynamicContent.salesEvent[0].impTracker2 = "";
		devDynamicContent.salesEvent[0].model_year_prefix_color_handler = "";
		devDynamicContent.salesEvent[0].nissan_copy_color_handler = "";
		devDynamicContent.salesEvent[0].apr_up_to_copy = "";
		devDynamicContent.salesEvent[0].line_divider_color_handler = "";
		devDynamicContent.salesEvent[0].cashbackOperator_static_color_handler = "";
		devDynamicContent.salesEvent[0].leasesigndrive_0_static_color_handler = "";
		devDynamicContent.salesEvent[0].leasesigndrive_text_static_color_handler = "";
		devDynamicContent.salesEvent[0].model_color_handler = "";
		devDynamicContent.salesEvent[0].year_color_handler = "";
		devDynamicContent.salesEvent[0].apr_1_color_handler = "";
		devDynamicContent.salesEvent[0].aprtermcopy1_color_hander = "";
		devDynamicContent.salesEvent[0].aprtermcopy2_color_hander = "";
		devDynamicContent.salesEvent[0].aprterm1_color_hander = "";
		devDynamicContent.salesEvent[0].cashbackAPRcopy1_color_hander = "";
		devDynamicContent.salesEvent[0].cashbackOperatorCopy1_color_hander = "";
		devDynamicContent.salesEvent[0].cashbackCopy1_color_hander = "";
		devDynamicContent.salesEvent[0].cashbackAmount_color_hander = "";
		devDynamicContent.salesEvent[0].leaseCost1_color_hander = "";
		devDynamicContent.salesEvent[0].leaseTerm1_color_hander = "";
		devDynamicContent.salesEvent[0].leaseTerm2_color_hander = "";
		devDynamicContent.salesEvent[0].SignnDrive_leaseTerm_color_hander = "";
		devDynamicContent.salesEvent[0].offerCopy_color_hander = "";
		devDynamicContent.salesEvent[0].Lease_LeaseCash_OfferCopy_color_hander = "";
		devDynamicContent.salesEvent[0].offerCopy1_color_hander = "";
		devDynamicContent.salesEvent[0].offerCopy2_color_hander = "";
		devDynamicContent.salesEvent[0].offerCopy3_color_hander = "";
		devDynamicContent.salesEvent[0].offerCopy4_color_hander = "";
		devDynamicContent.salesEvent[0].offernetPricecopy_color_hander = "";
		devDynamicContent.salesEvent[0].offerMsrp1_color_hander = "";
		devDynamicContent.salesEvent[0].msrpCopy1_color_hander = "";
		devDynamicContent.salesEvent[0].offernetPrice1_color_hander = "";
		devDynamicContent.salesEvent[0].offerPrice1_color_hander = "";
		devDynamicContent.salesEvent[0].offerPrice2_color_hander = "";
		devDynamicContent.salesEvent[0].offerPrice3_color_hander = "";
		devDynamicContent.salesEvent[0].offerPrice4_color_hander = "";
		devDynamicContent.salesEvent[0].AsShownDisclaimer_color_hander = "";
		devDynamicContent.salesEvent[0].genDisclaimer_color_hander = "";
		devDynamicContent.salesEvent[0].offerRollover_Complete_color_hander = "";
		devDynamicContent.salesEvent[0].buildTxt_color_handler = "";
		devDynamicContent.salesEvent[0].brochureTxt_color_handler = "";
		devDynamicContent.DAB_Nissan_Regional_US_Feed_Vehicle_Name= [{}];
	    devDynamicContent.DAB_Nissan_Regional_US_Feed_Vehicle_Name[0]._id = 0;
	    devDynamicContent.DAB_Nissan_Regional_US_Feed_Vehicle_Name[0].ID = 101;
	    devDynamicContent.DAB_Nissan_Regional_US_Feed_Vehicle_Name[0].Reporting_Label = "101_zcoupe";
	    devDynamicContent.DAB_Nissan_Regional_US_Feed_Vehicle_Name[0].Model_Name = "zcoupe";
	    devDynamicContent.DAB_Nissan_Regional_US_Feed_Vehicle_Name[0].modelCode = "ZC";
		Enabler.setDevDynamicContent(devDynamicContent);
		    
		var carExitURL1 = [];
		var carExitURL2 = [];
		modelCode1 = dynamicContent.dabAwarenessOffers[0].modelCode;
		mainUrl2 = dynamicContent.dabAwarenessOffers[0].baseLandingUrl.Url;
		carExitURL1 = dynamicContent.dabAwarenessOffers[0].baseBrochureUrl.Url.split("/");
		carExitURL2 = dynamicContent.dabAwarenessOffers[0].baseBuildUrl.Url.split("/");
		brochureExit = carExitURL1[0]+ "//" + carExitURL1[2] + "/";
		baseLandingUrl = carExitURL2[0]+ "//" + carExitURL2[2] + "/";
		vehicleUnique = dynamicContent.DAB_Nissan_Regional_US_Feed_Vehicle_Name[0].Model_Name;
		
        Enabler.loadScript("https://s0.2mdn.net/creatives/assets/2052254/dab_dmaRegional.js");

		return new Offer();
	};

	function Offer(){
		console.log(this);

		//ADD MODEL AND OFFERTYPE FILTERS TO THE SALEEVENT FEED
		//ADDED ON 1/11/2016
		var offerType = dynamicContent.salesEvent[0].offerTypeFilter.split(",");
		var model = dynamicContent.salesEvent[0].modelCodeFilter.split(",");
		//var specialModel = dynamicContent.salesEvent[0].specialModelFilter;

		if( ( offerType.length > -1 || model.length > -1) && (  offerType.indexOf( dynamicContent.dabAwarenessOffers[0].offerTypeTemplate ) > -1 || model.indexOf( dynamicContent.dabAwarenessOffers[0].modelCode ) > -1 ) ) {

			dynamicContent.salesEvent[0].saleEventH5_160x600.Url = dynamicContent.salesEvent[0].swfUrl_160x600.Url;
			dynamicContent.dabAwarenessOffers[0].Sale_carImage_160x600.Url = dynamicContent.dabAwarenessOffers[0].Sale_carImage_160x600.Url;

		} else {
			dynamicContent.salesEvent[0].saleEventH5_160x600.Url = dynamicContent.salesEvent[0].saleEventH5_160x600.Url;
			dynamicContent.dabAwarenessOffers[0].Sale_carImage_160x600.Url =  dynamicContent.dabAwarenessOffers[0].DAB_carImage_160x600.Url;
		}

		//END OF ADDED LINES
		dynamicContent.dabAwarenessOffers[0].background_image_url_160x600.Url = ( dynamicContent.dabAwarenessOffers[0].modelCode == "AS" ) ? dynamicContent.salesEvent[0].SpecialSale_carImage_160x600.Url : dynamicContent.dabAwarenessOffers[0].background_image_url_160x600.Url;
		this.content = "";
	    this.offer = dynamicContent.dabAwarenessOffers[0].offerTypeTemplate;
    	this.model = dynamicContent.dabAwarenessOffers[0].model.split("®").join("<sup>\u00AE</sup>");
    	this.year = dynamicContent.dabAwarenessOffers[0].year;
    	this.salesEvent = dynamicContent.salesEvent[0].title;
        
	this.salesEventImg = (this.salesEvent == "l4l" || this.salesEvent == "minievent" || this.salesEvent == "nosale") ? dynamicContent.dabAwarenessOffers[0].background_image_url_160x600.Url : dynamicContent.salesEvent[0].saleEventH5_160x600.Url;
        this.bgImg = (this.salesEventImg.length > 0 && this.salesEventImg.indexOf("Filler") < 0 && this.salesEventImg.indexOf("filler") < 0) ? "background-image:url("+ this.salesEventImg +")":"background-image:url("+ dynamicContent.offer[0].background_image_url_160x600.Url +")";
    	
	this.salesCarImg = (this.salesEvent == "l4l" || this.salesEvent == "minievent" || this.salesEvent == "nosale") ? dynamicContent.dabAwarenessOffers[0].DAB_carImage_160x600.Url : dynamicContent.dabAwarenessOffers[0].Sale_carImage_160x600.Url;
        this.carImg = (this.salesCarImg.length > 0 && this.salesCarImg.indexOf("Filler") < 0 && this.salesCarImg.indexOf("filler") < 0) ? "background-image:url("+ this.salesCarImg +")":"background-image:url("+ dynamicContent.dabAwarenessOffers[0].DAB_carImage_160x600.Url +")";
        
        console.log(this.salesCarImg + " <<<<<<<")
	
        this.landingUrl = dynamicContent.dabAwarenessOffers[0].baseLandingUrl.Url;
    	this.buildUrl = dynamicContent.dabAwarenessOffers[0].baseBuildUrl.Url;
    	this.buildTxt = dynamicContent.dabAwarenessOffers[0].buildTxt;
    	this.brochureTxt = dynamicContent.dabAwarenessOffers[0].brochureTxt;
    	this.brochureUrl = dynamicContent.dabAwarenessOffers[0].baseBrochureUrl.Url;
    	this.disclaimerTxt = dynamicContent.dabAwarenessOffers[0].genDisclaimer;
    	this.asShownDisclaimerTxt = dynamicContent.dabAwarenessOffers[0].AsShownDisclaimer;
		this.offerRollover = "*" + dynamicContent.dabAwarenessOffers[0].offerRollover;
    	disclaimerContentL4L = "This information does not constitute tax or legal advice.  Lease price depends on individual circumstances, including the availability of certain tax credits.  All persons should consult with their own tax and/or legal professional and state law to determine eligibility and any further details.<br>";
    	this.disclaimerContent = (this.salesEvent == "l4l")?(this.offer == "lease" || this.offer == "leasecash") ? disclaimerContentL4L + this.offerRollover : this.offerRollover : this.offerRollover;
 		//General Colors
        this.model_year_prefix_color = dynamicContent.salesEvent[0].model_year_prefix_color_handler;
        this.nissan_copy_color = dynamicContent.salesEvent[0].nissan_copy_color_handler;
        this.apr_up_to_copy = dynamicContent.salesEvent[0].apr_up_to_copy;
        this.line_divider_color = dynamicContent.salesEvent[0].line_divider_color_handler;
        this.model_color = dynamicContent.salesEvent[0].model_color_handler;
        this.year_color = dynamicContent.salesEvent[0].year_color_handler;
        this.genDisclaimer_color = dynamicContent.salesEvent[0].genDisclaimer_color_hander;
        this.AsShownDisclaimer_color = dynamicContent.salesEvent[0].AsShownDisclaimer_color_hander;
        this.offerRollover_Complete_color = dynamicContent.salesEvent[0].offerRollover_Complete_color_hander;
        this.cashbackOperator_static_color = dynamicContent.salesEvent[0].cashbackOperator_static_color_handler;
    	//apr
		this.apr = (dynamicContent.dabAwarenessOffers[0].apr_1 == 0) ? "0" : dynamicContent.dabAwarenessOffers[0].apr_1;
        this.aprCopy = dynamicContent.dabAwarenessOffers[0].cashbackAPRcopy1;
		// this.aprTerm = dynamicContent.dabAwarenessOffers[0].aprterm1 + " " + dynamicContent.dabAwarenessOffers[0].aprtermcopy2 + "<BR>" + dynamicContent.dabAwarenessOffers[0].aprtermcopy1;
		this.aprTerm = dynamicContent.dabAwarenessOffers[0].aprterm1 + " " + dynamicContent.dabAwarenessOffers[0].aprtermcopy2;
		this.aprTerm2 = dynamicContent.dabAwarenessOffers[0].aprtermcopy1;
		this.apr_1_color = dynamicContent.salesEvent[0].apr_1_color_handler;
        this.cashbackAPRcopy1_color = dynamicContent.salesEvent[0].cashbackAPRcopy1_color_hander;
        this.aprtermcopy1_color = dynamicContent.salesEvent[0].aprtermcopy1_color_hander;
        this.aprtermcopy2_color = dynamicContent.salesEvent[0].aprtermcopy2_color_hander; // same as aprterm1_color_hander

		//lease
		this.leaseCost = this.checkCurrency(dynamicContent.dabAwarenessOffers[0].leaseCost1);
		this.leaseTerm = dynamicContent.dabAwarenessOffers[0].leaseTerm1;
		this.leaseCopy = dynamicContent.dabAwarenessOffers[0].Lease_LeaseCash_OfferCopy;
		this.leaseCost1_color = dynamicContent.salesEvent[0].leaseCost1_color_hander;
        this.leaseTerm1_color = dynamicContent.salesEvent[0].leaseTerm1_color_hander;
        this.Lease_LeaseCash_OfferCopy_color = dynamicContent.salesEvent[0].Lease_LeaseCash_OfferCopy_color_hander;
		//leasecash
		this.cashbackAmount = (this.offer == "leasesignndrivecashback") ? dynamicContent.dabAwarenessOffers[0].cashbackAmount : this.checkCurrency(dynamicContent.dabAwarenessOffers[0].cashbackAmount);
		this.cashbackCopy = dynamicContent.dabAwarenessOffers[0].cashbackCopy1;
		this.cashbackAmount_color = dynamicContent.salesEvent[0].cashbackAmount_color_hander;
        this.cashbackCopy1_color = dynamicContent.salesEvent[0].cashbackCopy1_color_hander;
		//cashback
		this.netPrice = this.checkCurrency(dynamicContent.dabAwarenessOffers[0].offernetPrice1);
		this.netCopy = dynamicContent.dabAwarenessOffers[0].offernetPricecopy;
		this.operatorCopy = dynamicContent.dabAwarenessOffers[0].cashbackOperatorCopy1;
		this.cashbackOperatorCopy1_color = dynamicContent.salesEvent[0].cashbackOperatorCopy1_color_hander;
        this.offernetPrice1_color = dynamicContent.salesEvent[0].offernetPrice1_color_hander;
        this.offernetPricecopy_color = dynamicContent.salesEvent[0].offernetPricecopy_color_hander;
		//msrp
		this.msrp = this.checkCurrency(dynamicContent.dabAwarenessOffers[0].offerMsrp1);
		this.msrpCopy = dynamicContent.dabAwarenessOffers[0].msrpCopy1;
		this.offerCopy_color = dynamicContent.salesEvent[0].offerCopy_color_hander;
        this.offerMsrp1_color = dynamicContent.salesEvent[0].offerMsrp1_color_hander;
        this.msrpCopy1_color = dynamicContent.salesEvent[0].msrpCopy1_color_hander;
		//mathstack
		this.posOfferPrice = [dynamicContent.dabAwarenessOffers[0].offerPrice1.toLowerCase().replace("up to",""),
							dynamicContent.dabAwarenessOffers[0].offerPrice2,
							dynamicContent.dabAwarenessOffers[0].offerPrice3,
							dynamicContent.dabAwarenessOffers[0].offerPrice4];

		this.posOfferPriceColor = [dynamicContent.salesEvent[0].offerPrice1_color_hander,
                            dynamicContent.salesEvent[0].offerPrice2_color_hander,
                            dynamicContent.salesEvent[0].offerPrice3_color_hander,
                            dynamicContent.salesEvent[0].offerPrice4_color_hander];

		this.posOfferCopy = [dynamicContent.dabAwarenessOffers[0].offerCopy1,
					dynamicContent.dabAwarenessOffers[0].offerCopy2,
					dynamicContent.dabAwarenessOffers[0].offerCopy3,
					dynamicContent.dabAwarenessOffers[0].offerCopy4];

		this.posOfferCopyColor = [dynamicContent.salesEvent[0].offerCopy1_color_hander,
                    dynamicContent.salesEvent[0].offerCopy2_color_hander,
                    dynamicContent.salesEvent[0].offerCopy3_color_hander,
                    dynamicContent.salesEvent[0].offerCopy4_color_hander];

		this.negOfferPrice = [dynamicContent.dabAwarenessOffers[0].offerMsrp1,
							dynamicContent.dabAwarenessOffers[0].offerPrice1.toLowerCase().replace("up to",""),
							dynamicContent.dabAwarenessOffers[0].offerPrice2,
							dynamicContent.dabAwarenessOffers[0].offerPrice3];

		this.negOfferPriceColor = [dynamicContent.salesEvent[0].offerMsrp1_color_hander,
                            dynamicContent.salesEvent[0].offerPrice1_color_hander,
                            dynamicContent.salesEvent[0].offerPrice2_color_hander,
                            dynamicContent.salesEvent[0].offerPrice3_color_hander];

		this.negOfferCopy = [dynamicContent.dabAwarenessOffers[0].msrpCopy1,
					dynamicContent.dabAwarenessOffers[0].offerCopy1,
					dynamicContent.dabAwarenessOffers[0].offerCopy2,
					dynamicContent.dabAwarenessOffers[0].offerCopy3];

		this.negOfferCopyColor = [dynamicContent.salesEvent[0].msrpCopy1_color_hander,
                    dynamicContent.salesEvent[0].offerCopy1_color_hander,
                    dynamicContent.salesEvent[0].offerCopy2_color_hander,
                    dynamicContent.salesEvent[0].offerCopy3_color_hander];

		this.offerPrice = (this.offer == "mathstack") ? this.posOfferPrice : (this.offer == "negmathstack") ? this.negOfferPrice : "";
		this.offerCopy = (this.offer == "mathstack") ? this.posOfferCopy: (this.offer == "negmathstack") ? this.negOfferCopy : "";
		this.offerPriceColor = (this.offer == "mathstack") ? this.posOfferPriceColor : (this.offer == "negmathstack") ? this.negOfferPriceColor : "";
        this.offerCopyColor = (this.offer == "mathstack") ? this.posOfferCopyColor: (this.offer == "negmathstack") ? this.negOfferCopyColor : "";

		this.headCopy = dynamicContent.dabAwarenessOffers[0].offerCopy;
		//snd
		this.leaseTerm_snd = dynamicContent.dabAwarenessOffers[0].leaseTerm2;
		this.snd_leaseTerm = dynamicContent.dabAwarenessOffers[0].SignnDrive_leaseTerm;
		this.leasesigndrive_text_static_color = dynamicContent.salesEvent[0].leasesigndrive_text_static_color_handler;
        this.leasesigndrive_0_static_color = dynamicContent.salesEvent[0].leasesigndrive_0_static_color_handler;
        this.leaseTerm2_color = dynamicContent.salesEvent[0].leaseTerm2_color_hander;
        this.SignnDrive_leaseTerm_color = dynamicContent.salesEvent[0].SignnDrive_leaseTerm_color_hander;
		//
		//this.videoURLS = dynamicContent.salesEvent[0].H5DABIntroVideo_160x600;


	    this.createContent();
		this.addClick();
	}

	Offer.prototype.createContent = function() {
		$('.container').classList.add(this.offer);
		$('.container').setAttribute('style', this.bgImg);
		this.content += "<div class='carImg' style=" + this.carImg + ">";
		this.content += "<div class='logo'></div>";//logo
        this.addOfferContent();
		this.content += "<div class='model'>"
		this.content += "<div class='year'><span style=color:"+this.model_year_prefix_color+">THE</span> <span style=color:"+this.year_color+">" + this.year + "</span></div>"
		this.content += "<div class='name'><span style=color:"+this.nissan_copy_color+">NISSAN</span> <span style=color:"+this.model_color+">" + this.model + "</span></div>"
		this.content += "</div>"//model year and name
		this.content += "<div class='cta cta1'>";
		this.content +=	"<div class='ctaTxt'>" + this.brochureTxt + "</div>";
		this.content +=	"</div>";//brochure button
		this.content += "<div class='cta cta2'>";
		this.content +=	"<div class='ctaTxt'>" + this.buildTxt + "</div>";
		this.content +=	"</div>";//build button
		this.content +=	"<div class='disclaimerTxt' style=color:"+this.genDisclaimer_color+">" + this.disclaimerTxt + "</div>";//dialog text
		this.content +=	"<div class='asShownDisclaimerTxt' style=color:"+this.AsShownDisclaimer_color+">" + this.asShownDisclaimerTxt + "</div>";
		this.content +=	"<div class='disclaimerBox'>";
		//this.content +=	"<div class='closeBtn'></div>";//close button
		this.content +=	"<div class='disclaimerContent' style=color:"+this.offerRollover_Complete_color+">" + this.disclaimerContent + "</div>";//dialog content
		this.content +=	"</div>";//dialog box
		this.content += "</div>";
		//this.addVideo();
		
		//starwars update 10/31/16
		this.starwarsContent = "background:url("+ dynamicContent.salesEvent[0].starWarsEvent_CTAImage_160x600.Url +") #ffffff no-repeat center center";
		this.content +=	"<div id='starwarsframe' class='animate hideStarwars' style='"+ this.starwarsContent +"'></div>";		
		
		$(".container").innerHTML = this.content;

		this.setContent();
	};

	//Offer.prototype.addVideo = function() {
	//	if(this.videoURLS.length > 0 && this.videoURLS.indexOf("Filler") < 0 && this.videoURLS.indexOf("filler") < 0){
	//		var videoURL = this.videoURLS.split("|");
	//		var extension;
	//		console.log(videoURL);
	//
	//		this.content += "<div class='videobox'>"
	//		this.content += "<video class='vid' autoplay>";
	//		for (var i = 0; i < videoURL.length; i++) {
	//			extension = videoURL[i].substr(videoURL[i].lastIndexOf(".")+1, videoURL[i].length);
	//			this.content += "<source src=" + videoURL[i] + " type='video/"+ extension +"'>";
	//		}
	//		this.content += "</video>";
	//		this.content += "</div>"
	//	}
	//
	//	return this.content;
	//};

	//Offer.prototype.setVideo = function() {
	//	if(this.videoURLS.length > 0 && this.videoURLS.indexOf("Filler") < 0 && this.videoURLS.indexOf("filler") < 0){
	//        Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
	//            studio.video.Reporter.attach('video_play', $(".vid"));
	//        });
	//
	//        $(".vid").addEventListener('ended',function(){
	//        	this.style.display = "none";
	//        	$(".videobox").addEventListener('transitionend',function(){
	//        		this.style.display = "none";
	//        	});
	//        	$(".videobox").classList.add('fadeOut');
	//        });
	//    }
	//};

	Offer.prototype.priceCount = function() {
		var priceNum = 0;
		for(var i in this.offerPrice){
			this.offerPrice[i] = this.offerPrice[i].replace(/^\s+|\s+$/gm,'');
			(this.offerPrice[i] || '')? priceNum++:priceNum;
		}
		return priceNum;
	};

	Offer.prototype.addOfferContent = function() {
		switch(this.offer){
			case 'apr':
				this.content += "<div class='content table'>";
				this.content += "<div class='tr'>";
				this.content += "<div class='rate td' style=color:"+this.apr_1_color+">" + this.apr + "</div>";//Anual Percentage Rate
				this.content += "<div class='sup td' style=color:"+this.apr_1_color+">%</div>";//static : %
				this.content += "</div>";//row
				this.content += "</div>";//table
				// this.content += "<p>" + this.aprCopy + "</p>";//static : APR FINANCING
				this.content += "<p style=color:"+this.cashbackAPRcopy1_color+">" + this.aprCopy;//static : APR FINANCING
				this.content += "<span style=color:"+this.aprtermcopy2_color+">" + this.aprTerm + "</span>";
				this.content += "</p>"
				this.content += "<p style=color:"+this.aprtermcopy1_color+">" + this.aprTerm2 + "</p>";
			break;
			case 'cashback':
				this.content += (this.netCopy.toUpperCase().indexOf("TOTAL SAVING") >= 0) ? "<p class='amountUpto' style=color:"+this.offernetPrice1_color+">" + this.netPrice + "</p>" : "<p class='amount' style=color:"+this.offernetPrice1_color+">" + this.netPrice + "</p>";
				this.content += "<p class='copy' style=color:"+this.offernetPricecopy_color+">" + this.netCopy + "</p>";
			break;
			case 'lease':
				this.content += "<p class='amount' style=color:"+this.leaseCost1_color+">" + this.leaseCost + "</p>";
				this.content += "<p style=color:"+this.leaseTerm1_color+">" + this.leaseTerm+ "</p>";
				this.content += "<p class='copy' style=color:"+this.Lease_LeaseCash_OfferCopy_color+">" + this.leaseCopy + "</p>";
			break;
			case 'leasecash':
				this.content += "<p class='amount' style=color:"+this.leaseCost1_color+">" + this.leaseCost + "</p>";
				this.content += "<p style=color:"+this.leaseTerm1_color+">" + this.leaseTerm + "</p>";
				this.content += "<p class='copy' style=color:"+this.Lease_LeaseCash_OfferCopy_color+";border-color:"+this.line_divider_color+">" + this.leaseCopy + "</p>";
				this.content += "<div class='cashback'>";
				this.content += "<div style=color:"+this.cashbackOperator_static_color+">PLUS";
				this.content += (this.cashbackCopy.toUpperCase().indexOf("TOTAL SAVING") >= 0) ? "<br><span style=color:"+this.apr_up_to_copy+">Up To</span></div>" : "</div>";
				this.content += "<div class='amount' style=color:"+this.cashbackAmount_color+">" + this.cashbackAmount + "</div>";
				this.content += "<div class='copy' style=color:"+this.cashbackCopy1_color+">" + this.cashbackCopy + "</div>";
				this.content += "</div>";
			break;
			case 'aprcashback':
				this.content += "<div class='content table'>";
				this.content += "<div class='tr'>";
				this.content += "<div class='rate td' style=color:"+this.apr_1_color+">" + this.apr + "</div>";//Anual Percentage Rate
				this.content += "<div class='sup td' style=color:"+this.apr_1_color+">%</div>";//static : %
				this.content += "</div>";//row
				this.content += "</div>";//table
				this.content += "<p style=color:"+this.cashbackAPRcopy1_color+">" + this.aprCopy;//static : APR FINANCING
				this.content += "<span style=color:"+this.aprtermcopy2_color+">" + this.aprTerm + "</span>";
				this.content += "</p>";//static : APR FINANCING
				this.content += "<p style=color:"+this.aprtermcopy1_color+";border-color:"+this.line_divider_color+">" + this.aprTerm2 + "</p>";//term
				this.content += "<div class='cashback'>";
				this.content += "<div style=color:"+this.cashbackOperatorCopy1_color+">" + this.operatorCopy ;
				this.content += (this.cashbackCopy.toUpperCase().indexOf("TOTAL SAVING") >= 0) ? "<br><span style=color:"+this.apr_up_to_copy+">Up To</span></div>" : "</div>";
				this.content += "<div class='amount' style=color:"+this.cashbackAmount_color+">" + this.cashbackAmount + "</div>";
				this.content += "<div class='copy' style=color:"+this.cashbackCopy1_color+">" + this.cashbackCopy + "</div>";
				this.content += "</div>";
			break;
			case 'msrp':
				this.content += "<div class='copy' style=color:"+this.offerCopy_color+">" + this.headCopy + "</div>";
				this.content += "<div class='amount' style=color:"+this.offerMsrp1_color+">" + this.msrp + "</div>";
				this.content += "<div style=color:"+this.msrpCopy1_color+">" + this.msrpCopy + "</div>";
			break;
			case 'mathstack':
				if(this.priceCount() > 1 && this.priceCount() < 4){
					var price1 = this.offerPrice[0].split("$");
					this.content += "<div class='content table' style=border-color:"+this.line_divider_color+">"
					for (var i = 0; i < this.priceCount(); i++) {
						this.content += "<div class='tr'>";
						this.content += "<div class='td amount' style=color:"+this.offerPriceColor[i]+">"
						this.content +=	(i > 0) ? "<span>+</span>":"";
						this.content += this.checkCurrency(this.offerPrice[i]);
						this.content += "</div>";
						this.content += "<div class='td copy' style=color:"+this.offerCopyColor[i]+"><span>" + this.offerCopy[i] + "</span></div>";
						this.content += "</div>";
					}
					this.content += "</div>";
					this.content += (this.netCopy.toUpperCase().indexOf("TOTAL SAVING") >= 0) ? "<div class='upto' style=color:"+this.apr_up_to_copy+">Up To</div>" : "";
					this.content += "<div class='net' style=color:"+this.offernetPrice1_color+">" + this.netPrice + "</div>";
					this.content += "<p class='copy' style=color:"+this.offernetPricecopy_color+">" + this.netCopy + "</p>";
				}else{
					this.content += "<div class='amountCond' style=color:"+this.offernetPrice1_color+">";
					this.content += (this.netCopy.toUpperCase().indexOf("TOTAL SAVING") >= 0) ? "<div class='headCopy' style=color:"+this.apr_up_to_copy+">Up To</div>" : "";
					this.content += this.netPrice + "</div>"
					this.content += "<p class='copy' style=color:"+this.offernetPricecopy_color+">" + this.netCopy + "</p>";
				}
			break;
			case 'negmathstack':
				if(this.priceCount() > 1 && this.priceCount() < 4){
					var price1 = this.offerPrice[1].split("$");
					this.content += "<div class='content table' style=border-color:"+this.line_divider_color+">"
					console.log(this.offerPrice);
					for (var i = 0; i < this.priceCount(); i++) {
						this.content += "<div class='tr'>";
						this.content += "<div class='td amount' style=color:"+this.offerPriceColor[i]+">"
						this.content +=	(i > 0) ? "<span>-</span>":"";
						this.content += this.checkCurrency(this.offerPrice[i]);
						this.content += "</div>";
						this.content += "<div class='td copy' style=color:"+this.offerCopyColor[i]+"><span>" + this.offerCopy[i] + "</span></div>";
						this.content += "</div>";
					}
					this.content += "</div>";
					this.content += (this.netCopy.toUpperCase().indexOf("TOTAL SAVING") >= 0) ? "<div class='upto' style=color:"+this.apr_up_to_copy+">Up To</div>" : (this.headCopy.toUpperCase().indexOf("UP TO") >= 0) ? "" : "<div class='upto' style=color:"+this.offerCopy_color+">" + this.headCopy + "</div>";
					this.content += "<div class='net' style=color:"+this.offernetPrice1_color+">" + this.netPrice + "</div>";
					this.content += "<p class='copy' style=color:"+this.offernetPricecopy_color+">" + this.netCopy + "</p>";
				}else{
					this.content += "<div class='amountCond' style=color:"+this.offernetPrice1_color+">";
					this.content += (this.netCopy.toUpperCase().indexOf("TOTAL SAVING") >= 0) ? "<div class='headCopy' style=color:"+this.apr_up_to_copy+">Up To</div>" : (this.headCopy.toUpperCase().indexOf("UP TO") >= 0) ? "" : "<div class='headCopy' style=color:"+this.offerCopy_color+">" + this.headCopy + "</div>";;
					this.content += this.netPrice + "</div>"
					this.content += "<p class='copy' style=color:"+this.offernetPricecopy_color+">" + this.netCopy + "</p>";
				}
			break;
			case 'leasesignndrive':
				this.content += "<div class='table'>";
				this.content += "<div class='tr'>";
				this.content += "<div class='td amount' style=color:"+this.leasesigndrive_0_static_color+"><sup>$</sup>0</div>";
				this.content += "<div class='td copy' style=color:"+this.leasesigndrive_text_static_color+"><span>Initial Payment<sup>[1]</sup></span></div>";
				this.content += "</div>";
				this.content += "<div class='tr'>";
				this.content += "<div class='td amount' style=color:"+this.leasesigndrive_0_static_color+"><sup>$</sup>0</div>";
				this.content += "<div class='td copy' style=color:"+this.leasesigndrive_text_static_color+"><span>Down Payment<sup>[2]</sup></span></div>";
				this.content += "</div>";
				this.content += "<div class='tr'>";
				this.content += "<div class='td amount' style=color:"+this.leasesigndrive_0_static_color+"><sup>$</sup>0</div>";
				this.content += "<div class='td copy' style=color:"+this.leasesigndrive_text_static_color+"><span>Security Deposit<sup>[3]</sup></span></div>";
				this.content += "</div>";
				this.content += "<div class='tr'>";
				this.content += "<div class='td amount' style=color:"+this.leasesigndrive_0_static_color+"><sup>$</sup>0</div>";
				this.content += "<div class='td copy' style=color:"+this.leasesigndrive_text_static_color+"><span>Drive-off Lease<sup>[4]</sup></span></div>";
				this.content += "</div>";
				this.content += "</div>";//add table
				this.content += "<p class='copy' style=color:"+this.leaseTerm2_color+">" + this.leaseTerm_snd + "</p>";
				this.content += "<p style=color:"+this.SignnDrive_leaseTerm_color+">" + this.snd_leaseTerm.toUpperCase() + "</p>";
			break;
		    case 'leasesignndrivecashback':
			    this.content += "<div class='table'>";
			    this.content += "<div class='tr'>";
			    this.content += "<div class='td amount' style=color:"+this.leasesigndrive_0_static_color+"><sup>$</sup>0</div>";
			    this.content += "<div class='td copy' style=color:"+this.leasesigndrive_text_static_color+"><span>Initial Payment<sup>[1]</sup></span></div>";
			    this.content += "</div>";
			    this.content += "<div class='tr'>";
			    this.content += "<div class='td amount' style=color:"+this.leasesigndrive_0_static_color+"><sup>$</sup>0</div>";
			    this.content += "<div class='td copy' style=color:"+this.leasesigndrive_text_static_color+"><span>Down Payment<sup>[2]</sup></span></div>";
			    this.content += "</div>";
			    this.content += "<div class='tr'>";
			    this.content += "<div class='td amount' style=color:"+this.leasesigndrive_0_static_color+"><sup>$</sup>0</div>";
			    this.content += "<div class='td copy' style=color:"+this.leasesigndrive_text_static_color+"><span>Security Deposit<sup>[3]</sup></span></div>";
			    this.content += "</div>";
			    this.content += "<div class='tr'>";
			    this.content += "<div class='td amount' style=color:"+this.leasesigndrive_0_static_color+"><sup>$</sup>0</div>";
		     	this.content += "<div class='td copy' style=color:"+this.leasesigndrive_text_static_color+"><span>Drive-off Lease<sup>[4]</sup></span></div>";
			    this.content += "</div>";
			    this.content += "</div>";//add table
				this.content += "<p class='bonuscopy' style=color:"+ this.SignnDrive_leaseTerm_color +">+ "+ this.cashbackAmount +" "+ this.cashbackCopy.toUpperCase() + "</p>";//dynamic content within the <p> tag should be "this.cashbackAmount + this.cashbackCopy"
			    this.content += "<p class='copy' style=color:"+this.leaseTerm2_color+">" + this.leaseTerm_snd + "</p>";
			    this.content += "<p style=color:"+this.SignnDrive_leaseTerm_color+">" + this.snd_leaseTerm.toUpperCase() + "</p>";
		   break;
		}
	};

	Offer.prototype.setContent = function() {
		
		// sales event arrangement
		if(this.salesEvent != "nosale"){			
			//starwars update 10/31/16
			if(this.salesEvent.toLowerCase() == "starwars"){
				showStarwarsFrame();
			}						
		}
		//		
		
		switch(this.offer){
			case 'apr':
				this.centerHAlignText(".apr .content.table");
				//this.alignCenter(".apr p+p",".container");
				// if(devDynamicContent.dabAwarenessOffers[0].apr_1 == "0.0") {
				// 	console.log("Offer Rate is 0");
				// }
			break;
			case 'cashback':
				//window.getComputedStyle(document.querySelector('.cashback p.amountUpto'), ':before').getPropertyValue('color',"'"+ this.apr_up_to_copy +"'");
				//document.querySelector('.cashback p.amountUpto:before').style.color = this.apr_up_to_copy;
				var style = (function() {
					// Create the <style> tag
					var style = document.createElement("style");
				    
					// WebKit hack
					style.appendChild(document.createTextNode(""));
				    
					// Add the <style> element to the page
					document.head.appendChild(style);
				      
					console.log(style.sheet.cssRules); // length is 0, and no rules
				    
					return style;
				})();
				    style.sheet.insertRule('.foo{color:red;}', 0);
				if(document.styleSheets[0].addRule){
					document.styleSheets[0].addRule('.cashback p.amountUpto:before','color: '+this.apr_up_to_copy+';');
				}else{
					style.sheet.insertRule('.cashback p.amountUpto:before {color: '+this.apr_up_to_copy+'}',0);
				}
				
			break;
			case 'lease':
				//add here
			break;
			case 'leasecash':
				this.alignCenter(".leasecash .cashback",".container");
			break;
			case 'aprcashback':
				this.centerHAlignText(".aprcashback .content.table");
				this.alignCenter(".aprcashback .cashback",".container");
				// this.alignCenter(".aprcashback p+p",".container");
			break;
			case 'msrp':
				this.alignCenter(".msrp .amount",".container");
				$(".msrp .copy").style.marginLeft = $(".msrp .amount").offsetLeft + "px";
				$(".msrp .amount+div").style.marginLeft = ($(".msrp .amount").offsetWidth + $(".msrp .amount").offsetLeft) - $(".msrp .amount+div").offsetWidth + "px";
			break;
			case 'mathstack':
				if(this.priceCount() > 1 && this.priceCount() < 4){
					this.alignCenter(".mathstack .table.content",".container");
					this.alignCenter(".mathstack .net",".container");
					$(".mathstack .content+div").style.marginLeft = $(".mathstack .net").offsetLeft + "px";
				}else{
					this.alignCenter(".mathstack .amountCond",".container");
				}
			break;
			case 'negmathstack':
				if(this.priceCount() > 1 && this.priceCount() < 4){
					this.alignCenter(".negmathstack .table.content",".container");
					this.alignCenter(".negmathstack .net",".container");
					$(".negmathstack .content+div").style.marginLeft = $(".negmathstack .net").offsetLeft + "px";
				}else{
					this.alignCenter(".negmathstack .amountCond",".container");
				}
			break;
			case 'leasesignndrive':
				this.alignCenter(".leasesignndrive .table",".container");
			break;
		    case 'leasesignndrivecashback':
				this.alignCenter(".leasesignndrivecashback .table",".container");
			break;
		}
		if(this.salesEventImg.length > 0 && this.salesEventImg.indexOf("Filler") < 0 && this.salesEventImg.indexOf("filler") < 0){
            if(this.salesEvent == "l4l"){
				if(this.offer == "lease" || this.offer == "leasecash") {
					$(".logo").innerHTML += "<div class='salesLogo'></div>";
					$(".salesLogo").style.backgroundImage = "url(" + dynamicContent.salesEvent[0].saleEventH5_160x600.Url + ")";
				}
			} else if (this.salesEvent == "minievent") {
				$(".logo").innerHTML += "<div class='salesLogo " + this.salesEvent + "'></div>";
				$(".salesLogo").style.backgroundImage = "url(" + dynamicContent.salesEvent[0].saleEventH5_160x600.Url + ")";
			} else if (this.salesEvent == "nosale") {
				//do nothing
			}else {
				$(".logo").style.opacity = 0;
				//$(".cta.cta1").classList.add("salesEvent");
				//$(".cta.cta2").classList.add("salesEvent");
			}
        }
	    this.centerValignText(".cta.cta1 .ctaTxt");
		this.centerValignText(".cta.cta2 .ctaTxt");
		//this.setVideo();
	};

	Offer.prototype.centerValignText = function(target) {
		console.log(arguments);
		$(target).style.height = $(target).offsetHeight + "px";
	    $(target).style.top = 0;
	    $(target).style.bottom = 0;
	    $(target).style.marginTop = "auto";
	    $(target).style.marginBottom = "auto";
	};

	Offer.prototype.centerHAlignText = function(target) {
		console.log(arguments);
		$(target).style.width = $(target).offsetWidth + 3 + "px";
	    $(target).style.left = 0;
	    $(target).style.right = 0;
	    $(target).style.marginLeft = "auto";
	    $(target).style.marginRight = "auto";
	};

	Offer.prototype.alignCenter = function(target, centerTo) {
		console.log(arguments);
		$(target).style.marginLeft = ($(centerTo).offsetWidth - $(target).offsetWidth) / 2 + "px";
		
	
	};

	Offer.prototype.superScriptBracket = function(text) {
		console.log(arguments);
		text = text.split("[").join("<sup>[");
		text = text.split("]").join("]</sup>");
		return text;
	};

	Offer.prototype.superScriptText = function(text, sup){
		console.log(arguments);
		var word = text;
		return word.split(sup).join("<sup>" + sup + "</sup>");
	};

	Offer.prototype.checkCurrency = function(amount) {
		amount = (amount.indexOf("$") >= 0) ? amount : "$" + amount;
		return this.superScriptText(amount,'$');
	};

	Offer.prototype.addClick = function() {
		$(".container").addEventListener('click',function(e){
			console.log(arguments + " : " + e.target.getAttribute("class"));
			console.log(e.target.getAttribute("class") + ' was clicked');
			switch(e.target.getAttribute("class")){
				case 'cta cta1 salesEvent':
                	//Enabler.exitOverride("brochure_exit", dynamicContent.dabAwarenessOffers[0].baseBrochureUrl.Url + customUrl2);
                	Enabler.exitOverride("brochure_exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseBrochureUrl.Url));
                	//Enabler.exitOverride("brochure_exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseBrochureUrl.Url + customUrl2);
				break;
				case 'cta cta2 salesEvent':
                	//Enabler.exitOverride("build_exit", dynamicContent.dabAwarenessOffers[0].baseBuildUrl.Url + customUrl3);
                	Enabler.exitOverride("build_exit", addSuffix2(dynamicContent.dabAwarenessOffers[0].baseBuildUrl.Url));
                	//Enabler.exitOverride("build_exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseBuildUrl.Url + customUrl3);
				break;
				case 'cta cta1':
                	//Enabler.exitOverride("brochure_exit", dynamicContent.dabAwarenessOffers[0].baseBrochureUrl.Url + customUrl2);
                	Enabler.exitOverride("brochure_exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseBrochureUrl.Url ));
                	//Enabler.exitOverride("brochure_exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseBrochureUrl.Url + customUrl2));
				break;
				case 'cta cta2':
                	//Enabler.exitOverride("build_exit", dynamicContent.dabAwarenessOffers[0].baseBuildUrl.Url + customUrl3);
                	Enabler.exitOverride("build_exit", addSuffix2(dynamicContent.dabAwarenessOffers[0].baseBuildUrl.Url));
                	//Enabler.exitOverride("build_exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseBuildUrl.Url + customUrl3));
				break;
				/*case 'disclaimerTxt':
					$(".disclaimerBox").style.display = "block";
				break;
				case 'closeBtn':
					$(".disclaimerBox").style.display = "none";
				break;*/
		 		default:
					$(".disclaimerBox").style.display = "none";
					//starwars update 10/31/16
					if(isStarwars){
						//Enabler.exitOverride("StarWars_Exit", dynamicContent.dabAwarenessOffers[0].baseLandingUrl.Url + customUrl);
						Enabler.exitOverride("StarWars_Exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseLandingUrl.Url));
						//Enabler.exitOverride("StarWars_Exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseLandingUrl.Url + customUrl));
					} else{
						//Enabler.exitOverride("Main_Exit", dynamicContent.dabAwarenessOffers[0].baseLandingUrl.Url + customUrl);
						Enabler.exitOverride("Main_Exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseLandingUrl.Url ));
						//Enabler.exitOverride("Main_Exit", addSuffix(dynamicContent.dabAwarenessOffers[0].baseLandingUrl.Url + customUrl));
					}															
				break;
			}
		},false);
		
		$(".disclaimerTxt").addEventListener('mouseover',function(e){
			$(".disclaimerBox").style.display = "block";
		},false);	

		$(".disclaimerBox").addEventListener('mouseleave',function(e){
			$(".disclaimerBox").style.display = "none";
		},false);

	};
		
	//starwars update 10/31/16
	function showStarwarsFrame(){
		var d = 0;	
		
		// show 1
		setTimeout(function(){
			//console.log(1);
			$('#starwarsframe').style.display = 'block';
			isStarwars = true;
			removeClass($('#starwarsframe'), 'hideStarwars');
		}, d);
		
		d+=5000;
		
		// hide 1
		setTimeout(function(){
			//console.log(2);
			addClass($('#starwarsframe'), 'hideStarwars');
		}, d);
		
		d+=500;
		
		setTimeout(function(){
			isStarwars = false;
			$('#starwarsframe').style.display = 'none';
		}, d);

		d+=5000;
		
		setTimeout(function(){
			$('#starwarsframe').style.display = 'block';
		}, d);

		d+=500;
		
		// show 2
		setTimeout(function(){
			//console.log(3);			
			$('#starwarsframe').style.display = 'block';
			isStarwars = true;
			removeClass($('#starwarsframe'), 'hideStarwars');
		}, d);

		d+=5000;
		
		// hide 2
		setTimeout(function(){
			//console.log(4);
			addClass($('#starwarsframe'), 'hideStarwars');
		}, d);
		
		d+=500;
		
		setTimeout(function(){
			isStarwars = false;
			$('#starwarsframe').style.display = 'none';
		}, d);

		d+=5000;

		setTimeout(function(){
			$('#starwarsframe').style.display = 'block';
		}, d);

		d+=500;

		// show 3
		setTimeout(function(){
			//console.log(5);
			$('#starwarsframe').style.display = 'block';
			isStarwars = true;
			removeClass($('#starwarsframe'), 'hideStarwars');
		}, d);

		d+=5000;
		
		// hide 3
		setTimeout(function(){
			//console.log(6);
			addClass($('#starwarsframe'), 'hideStarwars');
		}, d);
		
		d+=500;
		
		setTimeout(function(){
			isStarwars = false;
			$('#starwarsframe').style.display = 'none';
		}, d);

	}
	
})();

function addSuffix(url) {
  var urlSuffix = Enabler.getParameter('exit_suffix');
  var zipCode = Enabler.getUserZipCode();
  var modelYear = dynamicContent.dabAwarenessOffers[0].year;
  var symbol = '&';

  modelYear = modelYear.replace(/\\s+/g, '');
  modelYearParameter = modelYear.match(/\d+$/g);

  var _url = '';
  _url = url;

  if (urlSuffix) {
    
    if (urlSuffix.indexOf('?') > -1) {
      urlSuffix = urlSuffix.replace(/\?/g,'');
    }
    
  }
  url = url.replace(/\?/g,'');
  _url = url + '?regionalZipCode=' + zipCode +"&vehicle="+vehicleUnique+ '&modelYear=' + modelYearParameter + symbol + urlSuffix;
  return _url;
} 

function addSuffix2(url2) {
  var urlSuffix2 = Enabler.getParameter('exit_suffix');
  var zipCode2 = Enabler.getUserZipCode();
  var modelYear2 = dynamicContent.dabAwarenessOffers[0].year;
  var symbol2 = '&';

  modelYear2 = modelYear2.replace(/\\s+/g, '');
  modelYearParameter2 = modelYear2.match(/\d+$/g);

  var _url2 = '';
  _url2 = url2;

  if (urlSuffix2) {
    
    if (urlSuffix2.indexOf('?') > -1) {
      urlSuffix2 = urlSuffix2.replace(/\?/g,'');
    }
    
  }
  url2 = url2.replace(/\?/g,'');
  _url2 = url2 + '?zipCode=' + zipCode2 + '&modelYear=' + modelYearParameter2 + symbol2 + urlSuffix2;
  return _url2;
} 

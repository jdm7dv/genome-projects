// DMA CONVERTER
 //console.log(" <---------- DMA FOR REGIONAL PULLED");
 
 var standardDmaIds = new Array; // list of standard DMA ids
 var internalDmaIds = new Array; // list of internal DoubleClick DMA ids
 var dmaNames = new Array; // list of area names
 
 function DmaTranslator ()
 {
		
		// define lists. All three should have the same number of indexes.
		standardDmaIds = new Array(-1,
									0,
									500,
									501,
									502,
									503,
									504,
									505,
									506,
									507,
									508,
									509,
									510,
									511,
									512,
									513,
									514,
									515,
									516,
									517,
									518,
									519,
									520,
									521,
									522,
									523,
									524,
									525,
									526,
									527,
									528,
									529,
									530,
									531,
									532,
									533,
									534,
									535,
									536,
									537,
									538,
									539,
									540,
									541,
									542,
									543,
									544,
									545,
									546,
									547,
									548,
									549,
									550,
									551,
									552,
									553,
									554,
									555,
									556,
									557,
									558,
									559,
									560,
									561,
									563,
									564,
									565,
									566,
									567,
									569,
									570,
									571,
									573,
									574,
									575,
									576,
									577,
									581,
									582,
									583,
									584,
									588,
									592,
									596,
									597,
									598,
									600,
									602,
									603,
									604,
									605,
									606,
									609,
									610,
									611,
									612,
									613,
									616,
									617,
									618,
									619,
									622,
									623,
									624,
									625,
									626,
									627,
									628,
									630,
									631,
									632,
									633,
									634,
									635,
									636,
									637,
									638,
									639,
									640,
									641,
									642,
									643,
									644,
									647,
									648,
									649,
									650,
									651,
									652,
									656,
									657,
									658,
									659,
									661,
									662,
									669,
									670,
									671,
									673,
									675,
									676,
									678,
									679,
									682,
									686,
									687,
									691,
									692,
									693,
									698,
									702,
									705,
									709,
									710,
									711,
									716,
									717,
									718,
									722,
									724,
									725,
									734,
									736,
									737,
									740,
									743,
									744,
									745,
									746,
									747,
									749,
									751,
									752,
									753,
									754,
									755,
									756,
									757,
									758,
									759,
									760,
									762,
									764,
									765,
									766,
									767,
									770,
									771,
									773,
									789,
									790,
									798,
									800,
									801,
									802,
									803,
									804,
									807,
									810,
									811,
									813,
									819,
									820,
									821,
									825,
									828,
									839,
									855,
									862,
									866,
									868,
									881
									);
		
		internalDmaIds = new Array(
									1,
									0,
									2,
									3,
									4,
									5,
									6,
									7,
									8,
									9,
									10,
									11,
									12,
									13,
									14,
									15,
									16,
									17,
									18,
									19,
									20,
									21,
									22,
									23,
									24,
									25,
									26,
									27,
									28,
									29,
									30,
									31,
									32,
									33,
									34,
									35,
									36,
									37,
									38,
									39,
									40,
									41,
									42,
									43,
									44,
									45,
									46,
									47,
									48,
									49,
									50,
									51,
									52,
									53,
									54,
									55,
									56,
									57,
									58,
									59,
									60,
									61,
									62,
									63,
									64,
									65,
									66,
									67,
									68,
									69,
									70,
									71,
									72,
									73,
									74,
									75,
									76,
									77,
									78,
									79,
									80,
									81,
									82,
									83,
									84,
									85,
									86,
									87,
									88,
									89,
									90,
									91,
									92,
									93,
									94,
									95,
									96,
									97,
									98,
									99,
									100,
									101,
									102,
									103,
									104,
									105,
									106,
									107,
									108,
									109,
									110,
									111,
									112,
									113,
									114,
									115,
									116,
									117,
									118,
									119,
									120,
									121,
									122,
									123,
									124,
									125,
									126,
									127,
									128,
									129,
									130,
									131,
									132,
									133,
									134,
									135,
									136,
									137,
									138,
									139,
									140,
									141,
									142,
									143,
									144,
									145,
									146,
									147,
									148,
									149,
									150,
									151,
									152,
									153,
									154,
									155,
									156,
									157,
									158,
									159,
									160,
									161,
									162,
									163,
									164,
									165,
									166,
									167,
									168,
									169,
									170,
									171,
									172,
									173,
									174,
									175,
									176,
									177,
									178,
									179,
									180,
									181,
									182,
									183,
									184,
									185,
									186,
									187,
									188,
									189,
									190,
									191,
									192,
									193,
									194,
									195,
									196,
									197,
									198,
									199,
									200,
									201,
									202,
									203,
									204,
									205,
									206,
									207,
									208,
									209,
									210,
									211
									);
		
		dmaNames = new Array(
								"Not Metroized",
								"No Metro",
								"Portland/Auburn",
								"New York",
								"Binghamton",
								"Macon",
								"Philadelphia",
								"Detroit",
								"Boston",
								"Savannah",
								"Pittsburgh",
								"Fort Wayne",
								"Cleveland",
								"Washington Dc",
								"Baltimore",
								"Flint/Saginaw/Bay City",
								"Buffalo",
								"Cincinnati",
								"Erie",
								"Charlotte",
								"Greensboro/High Point/Winston-Salem",
								"Charleston-Sc",
								"Augusta",
								"Providence/New Bedford",
								"Columbus-Ga",
								"Burlington/Plattsburgh",
								"Atlanta",
								"Albany-Ga",
								"Utica",
								"Indianapolis",
								"Miami/Fort Lauderdale",
								"Louisville",
								"Tallahassee/Thomasville",
								"Tri-Cities-Tn-Va",
								"Albany/Schenectady/Troy",
								"Hartford/New Haven",
								"Orlando/Daytona Beach/Melbourne",
								"Columbus-Oh",
								"Youngstown",
								"Bangor",
								"Rochester-Ny",
								"Tampa/Saint Petersburg",
								"Traverse City/Cadillac",
								"Lexington",
								"Dayton",
								"Springfield/Holyoke",
								"Norfolk/Portsmouth/Newport News",
								"Greenville/New Bern/Washington",
								"Columbia-Sc",
								"Toledo",
								"West Palm Beach/Fort Pierce",
								"Watertown",
								"Wilmington",
								"Lansing",
								"Presque Isle",
								"Marquette",
								"Wheeling/Steubenville",
								"Syracuse",
								"Richmond/Petersburg",
								"Knoxville",
								"Lima",
								"Bluefield/Beckley/Oak Hill",
								"Raleigh/Durham",
								"Jacksonville-Brunswick",
								"Grand Rapids/Kalamazoo/Battle Creek",
								"Charleston/Huntington",
								"Elmira",
								"Harrisburg/Lancaster/Lebanon/York",
								"Greenville/Spartanburg/Asheville/Anderson",
								"Harrisonburg",
								"Florence/Myrtle Beach",
								"Fort Myers/Naples",
								"Roanoke/Lynchburg",
								"Johnstown/Altoona",
								"Chattanooga",
								"Salisbury",
								"Wilkes Barre/Scranton",
								"Terre Haute",
								"Lafayette-In",
								"Alpena",
								"Charlottesville",
								"South Bend/Elkhart",
								"Gainesville",
								"Zanesville",
								"Parkersburg",
								"Clarksburg/Weston",
								"Corpus Christi",
								"Chicago",
								"Joplin/Pittsburg",
								"Columbia/Jefferson City",
								"Topeka",
								"Dothan",
								"Saint Louis",
								"Rockford",
								"Rochester/Mason City/Austin",
								"Shreveport",
								"Minneapolis/Saint Paul",
								"Kansas City",
								"Milwaukee",
								"Houston",
								"Springfield-Mo",
								"New Orleans",
								"Dallas/Fort Worth",
								"Sioux City",
								"Waco/Temple/Bryan",
								"Victoria",
								"Wichita Falls/Lawton",
								"Monroe/El Dorado",
								"Birmingham",
								"Ottumwa/Kirksville",
								"Paducah/Cape Girardeau/Harrisburg/Mt Vernon",
								"Odessa/Midland",
								"Amarillo",
								"Austin-Tx",
								"Harlingen/Weslaco/Brownsville/Mcallen",
								"Cedar Rapids/Waterloo/Dubuque",
								"Saint Joseph",
								"Jackson-Tn",
								"Memphis",
								"San Antonio",
								"Lafayette-La",
								"Lake Charles",
								"Alexandria-La",
								"Greenwood/Greenville",
								"Champaign/Springfield/Decatur",
								"Evansville",
								"Oklahoma City",
								"Lubbock",
								"Omaha",
								"Panama City",
								"Sherman-Tx/Ada-Ok",
								"Green Bay/Appleton",
								"Nashville",
								"San Angelo",
								"Abilene/Sweetwater",
								"Madison",
								"Fort Smith/Fayetteville/Springdale/Rogers",
								"Tulsa",
								"Columbus/Tupelo/West Point",
								"Peoria/Bloomington",
								"Duluth/Superior",
								"Wichita/Hutchinson",
								"Des Moines/Ames",
								"Davenport/Rock Island/Moline",
								"Mobile/Pensacola/Fort Walton Beach",
								"Minot/Bismarck/Dickinson",
								"Huntsville/Decatur/Florence",
								"Beaumont/Port Arthur",
								"Little Rock/Pine Bluff",
								"Montgomery/Selma",
								"La Crosse/Eau Claire",
								"Wausau/Rhinelander",
								"Tyler/Longview/Lufkin/Nacogdoches",
								"Hattiesburg/Laurel",
								"Meridian",
								"Baton Rouge",
								"Quincy/Hannibal/Keokuk",
								"Jackson-Ms",
								"Lincoln/Hastings/Kearney",
								"Fargo/Valley City",
								"Sioux Falls/Mitchell",
								"Jonesboro",
								"Bowling Green",
								"Mankato",
								"North Platte",
								"Anchorage",
								"Honolulu",
								"Fairbanks",
								"Biloxi/Gulfport",
								"Juneau",
								"Laredo",
								"Denver",
								"Colorado Springs/Pueblo",
								"Phoenix",
								"Butte/Bozeman",
								"Great Falls",
								"Billings",
								"Boise",
								"Idaho Falls/Pocatello",
								"Cheyenne/Scottsbluff",
								"Twin Falls",
								"Missoula",
								"Rapid City",
								"El Paso",
								"Helena",
								"Casper/Riverton",
								"Salt Lake City",
								"Yuma/El Centro",
								"Grand Junction/Montrose",
								"Tucson/Sierra Vista",
								"Albuquerque/Santa Fe",
								"Glendive",
								"Bakersfield",
								"Eugene",
								"Eureka",
								"Los Angeles",
								"Palm Springs",
								"San Francisco/Oakland/San Jose",
								"Yakima/Pasco/Richland/Kennewick",
								"Reno",
								"Medford/Klamath Falls",
								"Seattle/Tacoma",
								"Portland-Or",
								"Bend-Or",
								"San Diego",
								"Monterey/Salinas",
								"Las Vegas",
								"Santa Barbara/Santa Maria/San Luis Obispo",
								"Sacramento/Stockton/Modesto",
								"Fresno/Visalia",
								"Chico/Redding",
								"Spokane"

							 );

	}
 
 
 var dmaId = new Number;
 var shouldTraceName = new Boolean;
 function internalToStandard(dmaId, shouldTraceName)
 {
		//console.log("[DmaTranslator]: internalToStandard Function : dmaId = " + dmaId);
		// loop through list of interna DMA IDs until a match is found. Return the match.
		for (var i = 0; i < internalDmaIds.length; i++)
                {
			if (dmaId == internalDmaIds[i])
                        {
                          if (shouldTraceName)
				//console.log("[DmaTranslator Success]: " + "standardID:" + standardDmaIds[i] + " | name:" + dmaNames[i]);
				// return the standard DMA ID that matches the provided internal DMA ID
				return standardDmaIds[i];
			}

		}
		
		//console.log("[DmaTranslator Error]: Couldn't find that DMA ID on the list of internal DMA IDs"); 
		
	}
        
       function standardToInternal(dmaId, shouldTraceName)
        {
		//console.log("[DmaTranslator]: standardToInternal Function : dmaId = " + dmaId);
		for (var i = 0; i < standardDmaIds.length; i++)
                {
			if (dmaId == standardDmaIds[i]) {
				if (shouldTraceName) //console.log("[DmaTranslator Success]: " + "internalID:" + internalDmaIds[i] + " | name:" + dmaNames[i]);
	
				// return the internal DMA ID that matches the provided standard DMA ID
				return internalDmaIds[i];
			}
		}
		//console.log("[DmaTranslator Error]: Couldn't find that DMA ID on the list of standard DMA IDs"); 
	}
 //http://www.choosenissan.com/zip.aspx?regionalZipCode=null&vehicle=versa-note&dcp=null.0.&dcc=0.0&e48=undefined&lsrc=183
 
var myURLholder;
var myURLholderA;
var myURLholderB;
var mainUrl 	  = baseLandingUrl;
var shopUrl 	  = brochureExit;
// var buildUrl 	  = buildExit;

var dma			  = Enabler.getUserDMACode();
var esid		  = Enabler.getDartSiteId();   
var epid		  = Enabler.getDartPageId();
var ecid		  = Enabler.getDartCreativeId();
var eaid		  = Enabler.getDartAdId();
var dcp			  = Enabler.getParameter('dcp');
var dcc			  = Enabler.getParameter('dcc');
var e48			  = "&e48="+dma;
var campid		  = Enabler.getParameter('campId'); 
var customDma 			 = Enabler.getParameter('customDma');
var zipcode 			 = Enabler.getUserZipCode();  
var dmaTranslator 		 = new DmaTranslator(); 

var model3 = [];
model3 = mainUrl2.split("/");
var concuttedURL = model3[0]+ "//" + model3[2] + "/";

var vehicleAllow2 = "&vehicle="+vehicleUnique; //addedmacros

var dcpAllow     = "&dcp="+dcp+"."+epid;
var dcpAllowShop = "?dcp="+dcp+"."+epid;
var dcpz		 = "&dcp=zmm"+"."+epid;//added macros

var dccAllow     = ".&dcc="+ecid+"."+eaid;
var dcnAllow     = "&dcn=1";
var e48          = "&e48="+dma;
var lsrcEnglish  = "&lsrc=183";
var lsrcHispanic = "&lsrc=184";
var utm 		 = "&utm_source="+esid; //added macros
var utm2		 = "&utm_medium="+epid; //added macros
var utm3		 = "&utm_content="+ecid+"."+eaid; //added macros
var customUrl;
var customUrl2;
var customUrl3;
var dcpo= "&dcp=omd"+"."+epid;
var dcpm= "&dcp=mcn"+"."+epid;


//var customUrl2 = "?regionalZipCode="+zipcode+utm+utm2+utm3+dcpz+dccAllow;
//http://www.choosenissan.com/{vehicle_within_ad}/?regionalZipCode=zp&utm_source=%esid!&utm_medium=%epid!&utm_content=%ecid!.%eaid!&dcp=zmm.%epid!.&dcc=%ecid!.%eaid!

	if (customDma == "" || customDma == null || customDma == undefined || customDma == "undefined"){
			if (Number(dma) >= 500){
				dma = standardToInternal(dma,true);
			}
			dma = internalToStandard(dma,true);
			e48 = "&e48="+dma;
		}else{
			if (customDma >= 500){
				customDma = standardToInternal(customDma,true);
			}
			e48 = "&e48="+customDma;
		}
					
switch(dcp)
	{
		case "omd"	:	if((modelCode1 == "NVC") || (modelCode1 == "NV2") || (modelCode1 == "NVP")){
	                    	console.log('True...');
	                    	customUrl = "?regionalZipCode="+zipcode+vehicleAllow2+utm+utm2+utm3+dcpz+dccAllow;
                            customUrl2 = "?utm_source="+esid+"&utm_medium="+epid+"&utm_content="+ecid+"."+eaid+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1"+"&regionalZipCode="+zipcode;
                            customUrl3 = "?zipCode="+zipcode+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1&e48="+dma+"";
						}
						else{
							console.log('False...');
							customUrl = "?regionalZipCode="+zipcode+vehicleAllow2+utm+utm2+utm3+dcpz+dccAllow+dcnAllow;
                            customUrl2 = "?utm_source="+esid+"&utm_medium="+epid+"&utm_content="+ecid+"."+eaid+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1"+"&regionalZipCode="+zipcode;
                            customUrl3 = "?zipCode="+zipcode+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1&e48="+dma+"";
						}
                        break;   
        case "mcn"	:	if((modelCode1 == "NVC") || (modelCode1 == "NV2") || (modelCode1 == "NVP")){
	                    	console.log('True...');
	                    	customUrl = "?regionalZipCode="+zipcode+vehicleAllow2+utm+utm2+utm3+dcpz+dccAllow;
                            customUrl2 = "?utm_source="+esid+"&utm_medium="+epid+"&utm_content="+ecid+"."+eaid+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1"+"&regionalZipCode="+zipcode;
                            customUrl3 = "?zipCode="+zipcode+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1&e48="+dma+"";
						}
						else{
							console.log('False...');
							customUrl = "?regionalZipCode="+zipcode+vehicleAllow2+utm+utm2+utm3+dcpz+dccAllow+dcnAllow;
                            customUrl2 = "?utm_source="+esid+"&utm_medium="+epid+"&utm_content="+ecid+"."+eaid+"&dcp=mcn."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1"+"&regionalZipCode="+zipcode;
                            customUrl3 = "?zipCode="+zipcode+"&dcp=mcn."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1&e48="+dma+"";
						}
	  	case "opr"	:	if((modelCode1 == "NVC") || (modelCode1 == "NV2") || (modelCode1 == "NVP")){
	                    	console.log('True...');
	                    	customUrl = "?regionalZipCode="+zipcode+vehicleAllow2+utm+utm2+utm3+dcpz+dccAllow;
                            customUrl2 = "?utm_source="+esid+"&utm_medium="+epid+"&utm_content="+ecid+"."+eaid+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1"+"&regionalZipCode="+zipcode;
                            customUrl3 = "?zipCode="+zipcode+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1&e48="+dma+"";
						}
						else{
							console.log('False...');
							customUrl = "?regionalZipCode="+zipcode+vehicleAllow2+utm+utm2+utm3+dcpz+dccAllow+dcnAllow;
                            customUrl2 = "?utm_source="+esid+"&utm_medium="+epid+"&utm_content="+ecid+"."+eaid+"&dcp=opr."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1"+"&regionalZipCode="+zipcode;
                            customUrl3 = "?zipCode="+zipcode+"&dcp=opr."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1&e48="+dma+"";
						}
                        break;             
		default		:	if((modelCode1 == "NVC") || (modelCode1 == "NV2") || (modelCode1 == "NVP")){
	                    	console.log('True...');
	                    	customUrl = "?regionalZipCode="+zipcode+vehicleAllow2+utm+utm2+utm3+"&dcp=omd"+"."+epid+dccAllow+dcnAllow;
                            customUrl2 = "?utm_source="+esid+"&utm_medium="+epid+"&utm_content="+ecid+"."+eaid+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1"+"&regionalZipCode="+zipcode;
                            customUrl3 = "?zipCode="+zipcode+"&dcp=omd."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1&e48="+dma+"";
						}
						else{
							console.log('False...');
							customUrl = "?regionalZipCode="+zipcode+vehicleAllow2+utm+utm2+utm3+dcpz+dccAllow+dcnAllow;
                            customUrl2 = "?utm_source="+esid+"&utm_medium="+epid+"&utm_content="+ecid+"."+eaid+"&dcp=zmm."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1"+"&regionalZipCode="+zipcode;
                            customUrl3 = "?zipCode="+zipcode+"&dcp=zmm."+epid+".&dcc="+ecid+"."+eaid+"&dcn=1&e48="+dma+"";
						}
                        break;   
    }              
//updated version3
/*
 * CONFIDENTIAL AND PROPRIETARY
 * Copyright 2011 Silverpop Systems, Inc.  All rights reserved.
 * The contents of this material are confidential and proprietary to
 * Silverpop Systems, Inc. Unauthorized use, disclosure, or reproduction
 * is strictly prohibited.
 */


function readCookie(_name) {
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].indexOf(_name) == 0) return cookies[i].split('=')[1];
    }
    return '';
}


function _guid() {
    var g = '';//this.isNew=1;
    for (var i = 0; i < 32; i++) {
        g += Math.floor(Math.random() * 0xF).toString(0xF) + (i == 7 || i == 11 || i == 15 || i == 19 ? "-" : "")
    }
    return g;
}

function getAcceptCookieKey(name) {
    return "com.silverpop.iMA.accept_cookies" + ((name) ? name.toLowerCase() : "");
}

function cancelEvent(trackingUrl, redirectUrl, closeWindow, sessionGUID) {
    var processingPage = false;
    var followUrlFunc = function() {
       if (!processingPage) {
           if (redirectUrl && redirectUrl.length > 0) {
                document.location = redirectUrl;
           } else if (closeWindow && closeWindow == 1) {
                window.close();
           }
           processingPage = true;
       }
    };

    if (document.getElementById("sp_accept_cookies")) {
        if (!cookiesEnabled() || readCookie(getAcceptCookieKey(cookieSiteURI)) != "true") {
            followUrlFunc();
            return;
        }
    }

    var session = (sessionGUID) ? sessionGUID : readCookie('SESSION');
    var curl=location.protocol+"//"+trackingUrl+"&isNewSession=0&type=formCancel&isNewVisitor=0"+
            "&sessionGUID="+ session +
            "&webSyncID="+readCookie('VIEW')+
            "&url="+document.location+
            "&hostname="+location.hostname+((location.port.length > 0)?':'+location.port:'') +
            "&pathname="+location.pathname+
            "&eventID="+_guid();

    if (redirectUrl || closeWindow) {
        var b = document.createElement('img');
        b.style.display = 'none';
        b.src = curl;
        b.onload = followUrlFunc;
        document.body.appendChild(b);

        setTimeout(followUrlFunc, 700); // if target is self, then wait for 3/4 of a second to reload to make sure event is trigger;
        return false;
    } else {
        var b = document.createElement('img');
        b.style.display = 'none';
        b.src = curl;
        document.body.appendChild(b);
    }
}

function socialSignInEvent(url, hyperLinkId) {
    if (document.getElementById("sp_accept_cookies")) {
        if (!cookiesEnabled() || readCookie(getAcceptCookieKey(cookieSiteURI)) != "true") {
            return;
        }
    }

    var curl=location.protocol+"//"+url+"&isNewSession=0&type=click&isNewVisitor=0"+
    "&hyperLinkId="+hyperLinkId+
    "&webSyncID="+readCookie('VIEW')+
    "&url="+document.location+
    "&hostname="+location.hostname+((location.port.length > 0)?':'+location.port:'') +
    "&pathname="+location.pathname;

    var b = document.createElement('img');
    b.style.display = 'none';
    document.body.appendChild(b);
    b.src = curl;
}

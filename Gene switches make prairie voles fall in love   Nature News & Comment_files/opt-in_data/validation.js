/*
 * CONFIDENTIAL AND PROPRIETARY
 * Copyright 2010 Silverpop Systems, Inc.  All rights reserved.
 * The contents of this material are confidential and proprietary to
 * Silverpop Systems, Inc. Unauthorized use, disclosure, or reproduction
 * is strictly prohibited.
 */

//this code adds an indexOf method to the Array class if it doesn't already exist.  From https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Objects/Array/IndexOf#Compatibility
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

var formErrorContainerId = "errorMessageContainerId";
var formErrorStyle = "formControlError";

function validateForm() {
    //clear error message;
    clearErrorMessages();
    //launch the Validation
    return launchValidation();
}

function getErrorMessageContainer() {
    return document.getElementById(formErrorContainerId);
}

/*
 *  Clear all the messages from the message container
 */
function clearErrorMessages() {
    var errorMessages = getErrorMessageContainer();
    errorMessages.innerHTML = "";
    errorMessages.style.display = "none";
}

function containsStyleName(className, styleName) {
    return (" " + className + " ").indexOf(" " + styleName + " ") >= 0;
}

function getControlLabel(controlName) {
    var elements = document.getElementsByName(controlName);
    var controlLabel = null;
    if (elements && elements.length > 0) {
        for(var i = 0; i < elements.length; i++) {
            var element = elements[i];
            controlLabel = element.getAttribute("label");
            if (controlLabel != null) {
                break;
            }
        }
    }
    return controlLabel;
}

/*
 *  Set the error style on the container and add the message to the message container.
 */
function addErrorMessage(controlContainerId, controlName, messageKey) {
    var controlContainer = document.getElementById(controlContainerId);
    if (controlContainer) {
        if (!containsStyleName(controlContainer.className, formErrorStyle)) {
            controlContainer.className += " " + formErrorStyle;
        }
    }
    var controlLabel = getControlLabel(controlName);
    var controlLabelDisp = "";
    if (controlLabel && controlLabel != "") {
        controlLabelDisp = controlLabel + ": ";
    }

    var errorMessages = getErrorMessageContainer();
    errorMessages.innerHTML += "<div>" + controlLabelDisp + messageMap[messageKey] + "</div>";
    errorMessages.style.display = "inline";
}

/*
 *  Remove the error style from the container
 */
function clearErrorMessage(controlContainerId) {
    var controlContainer = document.getElementById(controlContainerId);
    if (controlContainer) {
        var oldClassName = controlContainer.className;
        if (containsStyleName(oldClassName, formErrorStyle)) {
            oldClassName = " " + oldClassName + " ";
            oldClassName = oldClassName.replace(new RegExp(" " + formErrorStyle + " ", "g"), " ");
            controlContainer.className = oldClassName;
        }
    }
}

function getControls(controlName) {
    return document.getElementsByName(controlName);
}

function getControlValue(controlName) {
    var elements = getControls(controlName);
    return elements[0].value;
}

/*********************************************************
 * validation functions
 ********************************************************/

function validateEmail(controlContainerId, controlName) {
    return validateRegEx(controlContainerId, controlName, "web.form.invalid.email", /^$|[A-Za-z0-9\-_.+!#$%&'*/=?^`{|}~]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,}\b/);
}

function validateRequired(controlContainerId, controlName) {
    return validateRegEx(controlContainerId, controlName, "web.form.required.value", /(.|\s)+/);
}

function validateDate_mmddyyyy(controlContainerId, controlName) {
    return validateDate(controlContainerId, controlName, "mm/dd/yyyy", false, "web.form.date.in.mmddyyyy");
}

function validateDate_ddmmyyyy(controlContainerId, controlName) {
    return validateDate(controlContainerId, controlName, "dd/mm/yyyy", false, "web.form.date.in.ddmmyyyy");
}

function validateDate_yyyymmdd(controlContainerId, controlName) {
    return validateDate(controlContainerId, controlName, "yyyy/mm/dd", false, "web.form.date.in.yyyymmdd");
}

function validateRequiredDate_mmddyyyy(controlContainerId, controlName) {
    return validateDate(controlContainerId, controlName, "mm/dd/yyyy", true, "web.form.date.in.mmddyyyy");
}

function validateRequiredDate_ddmmyyyy(controlContainerId, controlName) {
    return validateDate(controlContainerId, controlName, "dd/mm/yyyy", true, "web.form.date.in.ddmmyyyy");
}

function validateRequiredDate_yyyymmdd(controlContainerId, controlName) {
    return validateDate(controlContainerId, controlName, "yyyy/mm/dd", true, "web.form.date.in.yyyymmdd");
}

function validateDate(controlContainerId, controlName, dateFormat, isRequired, invalidFormatMessageKey) {
    try {
        var dateValue = getControlValue(controlName);
        if (dateValue == "" || dateFormat == dateValue) {
            if (isRequired) {
                addErrorMessage(controlContainerId, controlName, "web.form.required.value");
                return false;
            } else {
                clearErrorMessage(controlContainerId);
                return true;
            }
        }

        var date_array = dateValue.split('/');
        if (date_array.length != 3) {
            addErrorMessage(controlContainerId, controlName, invalidFormatMessageKey);
            return false;
        }

        var format_array = dateFormat.split('/');
        var day = date_array[format_array.indexOf("dd")];
        var month = date_array[format_array.indexOf("mm")]; // Attention! Javascript consider months in the range 0 - 11
        var year = date_array[format_array.indexOf("yyyy")];

        if (!isMatch(day, /\d+/) || parseInt(day, 10) < 1 || parseInt(day, 10) > 31) {
            addErrorMessage(controlContainerId, controlName, "web.form.invalid.date.day");
            return false;
        }
        if (!isMatch(month, /\d+/) || parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
            addErrorMessage(controlContainerId, controlName, "web.form.invalid.date.month");
            return false;
        }
        if (!isMatch(year, /[0-9]{4}/)) {
            addErrorMessage(controlContainerId, controlName, "web.form.invalid.date.year");
            return false;
        }

        clearErrorMessage(controlContainerId);
        return true;
    } catch (err) {
        return true;
    }
}

function validateTime(controlContainerId, controlName) {
    return validateRegEx(controlContainerId, controlName, "web.form.invalid.time", /^$|(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)[:](0|1|2|3|4|5)\d{1}|hh:mm/);
}

function validateRequiredTime(controlContainerId, controlName) {
    return validateRegEx(controlContainerId, controlName, "web.form.invalid.time", /^$|(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)[:](0|1|2|3|4|5)\d{1}/);
}

function validateNumber(controlContainerId, controlName) {
    return validateRegEx(controlContainerId, controlName, "web.form.invalid.number", /^$|(^[-+]?[0-9]*\.?[0-9]+$)/);
}

function validateLength(controlContainerId, controlName, length) {
    try {
        var value = getControlValue(controlName);
        if (value.length > length) {
            addErrorMessage(controlContainerId, controlName, "web.form.invalid.length");
            return false;
        } else {
            clearErrorMessage(controlContainerId);
            return true;
        }
    } catch (err) {
        return true;
    }
}

function validateControlIsChecked(controlContainerId, controlName) {
    var controls = getControls(controlName);
    if (controls.length == 0) {
        return true;
    }
    var isChecked = false;
    for (var i = 0; i < controls.length; i++) {
        if (controls[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        addErrorMessage(controlContainerId, controlName, "web.form.required.value");
        return false;
    } else {
        clearErrorMessage(controlContainerId);
        return true;
    }
}

function validateRegEx(controlContainerId, controlName, messageKey, regEx) {
    try {
        var value = getControlValue(controlName);
        if (isMatch(value, regEx)) {
            clearErrorMessage(controlContainerId);
            return true;
        } else {
            addErrorMessage(controlContainerId, controlName, messageKey);
            return false;
        }
    } catch (err) {
        return true;
    }
}

function isMatch(value, regEx) {
    var matchObj = regEx.exec(value);
    return matchObj == null ? false : value == matchObj[0];
}

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

function toggleAllCheckboxes(checkboxGroupName, itemClicked) {
    var clickedCheckboxState = itemClicked.checked;
    enableSubscriptionOption(checkboxGroupName);
    enableClickedCheckBox(itemClicked, clickedCheckboxState); // IE thinks it should only enable the radio button, so we have to force it to enable the clicked checkbox.
    setChildrenCheckboxes(checkboxGroupName);

}

function setChildrenCheckboxes(checkboxGroupName) {
    var isChecked = false;
    var checkboxes = document.getElementsByName(checkboxGroupName);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes.item(i).value == "Select All" && checkboxes.item(i).checked)
        {
            isChecked = true;
            break;
        } else {
            isChecked = false;
	  }
    }
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes.item(i).value != "Select All" && checkboxes.item(i).value != "subscriptionOption" && checkboxes.item(i).value != "optOutOption")
        {
            checkboxes.item(i).checked = isChecked ;
        }
    }

}

function toggleSelectAllCheckbox(checkboxGroupName, itemClicked) {
    var hasAllChecked = true;
    var checkboxes = document.getElementsByName(checkboxGroupName);
    var clickedCheckboxState = itemClicked.checked;
    for (var i = 0; i < checkboxes.length; i++) {
        if (!checkboxes.item(i).checked && checkboxes.item(i).value != "Select All" && checkboxes.item(i).value != "subscriptionOption" && checkboxes.item(i).value != "optOutOption")
        {
            hasAllChecked = false;
            break;
        }
    }

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes.item(i).value == "Select All" && checkboxes.item(i).value != "subscriptionOption" && checkboxes.item(i).value != "optOutOption")
        {
            checkboxes.item(i).checked = hasAllChecked;
            break;
        }
    }
    enableSubscriptionOption(checkboxGroupName);
    enableClickedCheckBox(itemClicked, clickedCheckboxState); // IE thinks it should only enable the radio button, so we have to force it to enable the clicked checkbox.
}

function disableCheckboxes(checkboxGroupName) {
    var checkboxes = document.getElementsByName(checkboxGroupName);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes.item(i).value != "subscriptionOption" && checkboxes.item(i).value != "optOutOption")
        {
            checkboxes.item(i).checked = false;
        }
    }
}

function enableSubscriptionOption(checkboxGroupName) {
    var checkboxes = document.getElementsByName(checkboxGroupName);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes.item(i).value == "subscriptionOption")
        {
            checkboxes.item(i).checked = true;
        }
        if (checkboxes.item(i).value == "optOutOption")
        {
            checkboxes.item(i).checked = false;
        }
    }
}


function enableClickedCheckBox(itemClicked, enableCheckbox) {
    itemClicked.checked = enableCheckbox;
}
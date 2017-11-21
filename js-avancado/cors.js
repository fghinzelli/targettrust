"use strict";

function Request($method, $URL) {
    var xhttp;
    if (window.XMLHttpRequest) {
        //code for Modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        //code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return this.responseText;
        }
    };

    xhttp.open($method, $URL);
    xhttp.send();
}

Request("GET", "http://demo5948899.mockable.io/usuario");
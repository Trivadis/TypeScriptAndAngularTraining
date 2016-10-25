function startup() {
    var _this = this;
    var htmlButton = document.createElement("button");
    htmlButton.innerText = "OK";
    htmlButton.addEventListener("click", function (e) {
        alert(_this);
    });
    document.body.appendChild(htmlButton);
}
startup();

function writeToBody() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            document.write(i + "<br>");
        }, 200);
    }
}

writeToBody();
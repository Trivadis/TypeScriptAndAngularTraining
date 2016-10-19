function writeOutput() {
    var name = "Thomas";
    var welcomeMessage = "Hello " + name + "!\nHow are you?";
    document.write("<pre>" + welcomeMessage + "</pre>");
    var currentPage = 1;
    var nextPageMessage = "Go to page " + (currentPage + 1);
    document.write("<br>" + nextPageMessage);
}
writeOutput();

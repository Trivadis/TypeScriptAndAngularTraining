function writeOutput() {
    let name: string = "Thomas";

    let welcomeMessage: string =
        `Hello ${name}!
How are you?`;

    document.write("<pre>" + welcomeMessage + "</pre>");

    let currentPage: number = 1;
    let nextPageMessage: string = `Go to page ${currentPage + 1}`;

    document.write("<br>" + nextPageMessage);
}

writeOutput();
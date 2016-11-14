function writeOutput() {
    let name: any = 20;
    document.write(name + "<br>");

    name = "Thomas";
    document.write(name + "<br>");

    // this has no intellisense for length in the tooling
    let length: number = name.length;

    // and this type in "lenth" would throw an error at compile-time 
    // length = name.lenth;

    // Casting with as
    length = (name as string).length;

    // This would give you an error with the "lenth"-typo
    // length = (name as string).lenth;

    // Casting with <>
    length = (<string>name).length;

    document.write(length + "<br>");

}

writeOutput();
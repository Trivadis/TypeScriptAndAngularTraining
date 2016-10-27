function writeOutput() {
    // Use [] behind the type to create an array
    let names: string[] = ["Thomas", "Sara", "Julia"];

    // Use generic array type to create an array
    let names2: Array<string> = ["Lara", "Jason", "Sam"];

    let allNames = names.concat(names2);

    for (let name of allNames) {
        document.write(name + "<br>");
    }
}

writeOutput();
function writeOutput() {
    // Use [] behind the type to create an array
    var names = ["Thomas", "Sara", "Julia"];
    // Use generic array type to create an array
    var names2 = ["Lara", "Jason", "Sam"];
    var allNames = names.concat(names2);
    for (var _i = 0, allNames_1 = allNames; _i < allNames_1.length; _i++) {
        var name_1 = allNames_1[_i];
        document.write(name_1 + "<br>");
    }
}
writeOutput();

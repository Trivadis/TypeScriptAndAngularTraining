function writeOutput() {
    // start with 1 instead of zero
    var Dock;
    (function (Dock) {
        Dock[Dock["Left"] = 1] = "Left";
        Dock[Dock["Top"] = 2] = "Top";
        Dock[Dock["Right"] = 3] = "Right";
        Dock[Dock["Bottom"] = 4] = "Bottom";
    })(Dock || (Dock = {}));
    ;
    var dock = Dock.Left;
    // enum to number
    var val = dock;
    // enum to string
    var name = Dock[dock]; // or Dock[1];
    document.write("dock value: " + val + "<br>");
    document.write("dock name: " + name + "<br>");
    // number to enum
    dock = 3;
    // string to enum
    dock = Dock["Top"];
}
writeOutput();

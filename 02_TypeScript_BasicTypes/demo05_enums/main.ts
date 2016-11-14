function writeOutput() {
    // start with 1 instead of zero
    enum Dock { Left = 1, Top, Right, Bottom };

    let dock: Dock = Dock.Left;

    // number to enum
    // dock = 3;

    // string to enum
    // dock = Dock["Top"];

    // enum to number
    let val: number = dock;

    // enum to string
    let name: string = Dock[dock]; // or Dock[1];

    document.write(`dock value: ${val}<br>`);
    document.write(`dock name: ${name}<br>`);
}

writeOutput();
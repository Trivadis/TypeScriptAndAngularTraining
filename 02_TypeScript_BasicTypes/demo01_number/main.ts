function writeOutput() {
    let dec: number = 27;
    let hex: number = 0x001b;
    let binary: number = 0b11011;
    let octal: number = 0o0033;

    document.write(`dec: ${dec}<br>`);
    document.write(`hex: ${hex}<br>`);
    document.write(`binary: ${binary}<br>`);
    document.write(`octal: ${octal}<br>`);
}

writeOutput();
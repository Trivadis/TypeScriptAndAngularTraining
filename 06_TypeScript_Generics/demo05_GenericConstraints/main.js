var GenericPrinter = (function () {
    function GenericPrinter() {
    }
    GenericPrinter.prototype.print = function (item) {
        console.log(item.name);
    };
    return GenericPrinter;
}());
var printer = new GenericPrinter();
printer.print({ name: "Thomas" });
// printer.print("Hello"); // Error, no name-property

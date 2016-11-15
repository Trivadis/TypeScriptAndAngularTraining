var NameDisplayer = (function () {
    function NameDisplayer() {
    }
    NameDisplayer.prototype.Load = function () {
        loadData(
        // Look at the output in the console. loadedName is undefined!!
        // Replace the function call below with an arrow function, 
        // so that "this" is captured and points to the NameDisplayer-instance
        function (name) { this.loadedName = name; });
    };
    return NameDisplayer;
}());
function loadData(callback) {
    callback("Thomas");
}
var x = new NameDisplayer();
x.Load();
console.log(x.loadedName);

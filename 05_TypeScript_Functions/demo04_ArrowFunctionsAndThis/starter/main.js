var NameDisplayer = (function () {
    function NameDisplayer() {
    }
    NameDisplayer.prototype.Load = function () {
        loadData(
        // Replace this function call with an arrow function, 
        // so that this is captured and points to the NameDisplayer-instance
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

var NameDisplayer = (function () {
    function NameDisplayer() {
    }
    NameDisplayer.prototype.Load = function () {
        var _this = this;
        loadData(function (name) { _this.loadedName = name; });
    };
    return NameDisplayer;
}());
function loadData(callback) {
    callback("Thomas");
}
var x = new NameDisplayer();
x.Load();
console.log(x.loadedName);

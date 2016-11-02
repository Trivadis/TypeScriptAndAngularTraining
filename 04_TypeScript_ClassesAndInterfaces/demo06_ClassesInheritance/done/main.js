var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Frog = (function (_super) {
    __extends(Frog, _super);
    function Frog(name, distance) {
        var _this = _super.call(this, name) || this;
        _this.distance = distance;
        return _this;
    }
    Frog.prototype.jump = function () {
        console.log("the frog " + this.name + " is jumping " + this.distance + "m");
    };
    return Frog;
}(Animal));
var frog = new Frog("Kermit", 1);
frog.jump();

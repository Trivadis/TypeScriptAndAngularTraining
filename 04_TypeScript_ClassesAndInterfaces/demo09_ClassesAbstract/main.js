var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Friend = (function (_super) {
    __extends(Friend, _super);
    function Friend() {
        _super.apply(this, arguments);
    }
    Friend.prototype.sayHello = function () {
        console.log("Hello my friend " + this.name + ", how are you?");
    };
    return Friend;
}(Person));
var f = new Friend("Thomas");
f.sayHello();

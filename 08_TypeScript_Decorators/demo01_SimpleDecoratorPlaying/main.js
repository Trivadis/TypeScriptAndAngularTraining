var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Format(myPrefix) {
    return function (target, propertyKey) {
        console.log(myPrefix + " my love");
    };
}
var Person = (function () {
    function Person(name) {
        this.name = "Thomas";
        this.name = name;
    }
    __decorate([
        Format("Dear")
    ], Person.prototype, "name", void 0);
    return Person;
}());
var p = new Person("Thomas");
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var p = new Person("Thomas");
var personName = p.name; // OK
p.name = "Angular"; // Error

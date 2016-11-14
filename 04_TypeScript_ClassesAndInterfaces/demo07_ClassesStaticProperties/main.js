var Person = (function () {
    function Person() {
        Person.personCounter++;
    }
    Person.personCounter = 0;
    return Person;
}());
var p1 = new Person();
var p2 = new Person();
var p3 = new Person();
console.log(Person.personCounter); // 3

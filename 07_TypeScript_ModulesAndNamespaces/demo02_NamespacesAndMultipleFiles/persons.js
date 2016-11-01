var Persons;
(function (Persons) {
    var Person = (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person.prototype.getFullName = function () {
            return this.firstName + " " + this.lastName;
        };
        return Person;
    }());
    Persons.Person = Person;
})(Persons || (Persons = {}));

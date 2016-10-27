System.register("persons", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Persons;
    return {
        setters: [],
        execute: function () {
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
                } ());
                Persons.Person = Person;
            })(Persons = Persons || (Persons = {}));
            exports_1("Persons", Persons);
        }
    };
});
System.register("main", ["persons"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var persons_1, p;
    return {
        setters: [
            function (persons_1_1) {
                persons_1 = persons_1_1;
            }
        ],
        execute: function () {
            p = new persons_1.Persons.Person("Thomas", "Huber");
            console.log(p.firstName);
        }
    };
});

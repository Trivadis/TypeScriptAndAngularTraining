namespace Persons {
    export interface Name {
        getFullName(): string;
    }

    export class Person implements Name {
        constructor(public firstName: string, public lastName: string) { }

        getFullName() {
            return this.firstName + " " + this.lastName;
        }
    }
}

var p: Persons.Name = new Persons.Person("Thomas", "Huber");

console.log(p.getFullName());
class Person {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let p = new Person("Thomas");
let personName = p.name; // OK
p.name = "Angular"; // Error
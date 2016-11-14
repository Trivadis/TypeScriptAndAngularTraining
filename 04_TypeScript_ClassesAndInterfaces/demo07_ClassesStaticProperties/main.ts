class Person {
    static personCounter: number = 0;

    constructor() {
        Person.personCounter++;
    }
}

let p1 = new Person();
let p2 = new Person();
let p3 = new Person();

console.log(Person.personCounter); // 3
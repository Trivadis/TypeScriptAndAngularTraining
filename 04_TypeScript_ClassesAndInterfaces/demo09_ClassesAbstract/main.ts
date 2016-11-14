abstract class Person {
    constructor(public name: string) { }
    abstract sayHello(): void;
}

class Friend extends Person {
    sayHello() {
        console.log(`Hello my friend ${this.name}, how are you?`);
    }
}

var f = new Friend("Thomas")
f.sayHello();
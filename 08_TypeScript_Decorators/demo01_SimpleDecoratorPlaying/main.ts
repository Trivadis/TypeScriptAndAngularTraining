function Format(myPrefix: string) {
    return function (target: any, propertyKey: string) {
        console.log(myPrefix + " my love");
    }
}

class Person {
    constructor(name: string) { this.name = name; }
    @Format("Dear")
    name: string = "Thomas";
}

var p = new Person("Thomas");

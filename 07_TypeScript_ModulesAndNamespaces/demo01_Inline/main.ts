module Persons{
    export class Person{
        constructor(public firstName:string,public lastName:string){}

        getFullName(){
            return this.firstName +" "+this.lastName;
        }
    }
}

var p = new Persons.Person("Thomas","Huber");

console.log(p.firstName);
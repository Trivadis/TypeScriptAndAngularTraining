export module Persons{
    export class Person{
        constructor(public firstName:string,public lastName:string){}

        getFullName(){
            return this.firstName +" "+this.lastName;
        }
    }
}
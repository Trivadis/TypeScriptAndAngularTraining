// 1. Import separate types

// import { Person , Names } from './persons';
// var p:Names = new Person("Thomas","Huber");
// console.log(JSON.stringify(p));


// 2. Import the full module
import * as Personas from './persons';
var p: Personas.Names = new Personas.Person("Thomas", "Huber");
console.log(JSON.stringify(p));


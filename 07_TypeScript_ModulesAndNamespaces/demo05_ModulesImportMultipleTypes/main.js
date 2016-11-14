// 1. Import separate types
"use strict";
// import { Person , Names } from './persons';
// var p:Names = new Person("Thomas","Huber");
// console.log(JSON.stringify(p));
// 2. Import the full module
var Personas = require('./persons');
var p = new Personas.Person("Thomas", "Huber");
console.log(JSON.stringify(p));

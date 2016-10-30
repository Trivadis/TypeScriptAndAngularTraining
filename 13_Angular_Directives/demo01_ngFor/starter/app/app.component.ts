import { Component } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'my-app',
  template: `<h1>Number of Persons {{persons.length}}</h1>
           TODO: Create a table and fill it with the persons and "ngFor"-directive
            `
})
export class AppComponent {
   persons:Person[]=PERSONS;
}

var PERSONS:Person[] = [
  {firstname:'Silvester', lastname:'Stallone'},
  {firstname:'Thomas', lastname:'Bandixen',githubaccount:'tbandixen'},
  {firstname:'Thomas', lastname:'Huber',githubaccount:'thomasclaudiushuber'},
  {firstname:'Bruce', lastname:'Willis'},
  {firstname:'Lara', lastname:'Croft'}];


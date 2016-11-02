import { Component } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'my-app',
  templateUrl:'/app/app.component.html'
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


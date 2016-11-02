import { Component } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'my-app',
  template: `<h1>Click a person to select it and look at the output window for the lifecylce events</h1>
           <table>
             <tr>
               <th>Firstname</th>
               <th>Lastname</th>
               <th>Github</th>
             </tr>     
             <tr *ngFor="let person of persons" (click)="onPersonClick(person)">
               <td>{{person.firstname}}</td>
               <td>{{person.lastname}}</td>
               <td>{{person.githubaccount}}</td>
             </tr>
           </table>

           <person-detail [person]="selectedPerson" (remove)="onRemove($event)"></person-detail>`
})
export class AppComponent {
   persons:Person[]=PERSONS;
   selectedPerson:Person;

   onPersonClick(person:Person)
   {
     this.selectedPerson = person;
   }

   onRemove(person:Person)
   {
     var index = this.persons.indexOf(person);
     if(index>-1)
     {
       this.persons.splice(index,1);
     }
   }
}

var PERSONS:Person[] = [
  {firstname:'Silvester', lastname:'Stallone'},
  {firstname:'Thomas', lastname:'Bandixen',githubaccount:'tbandixen'},
  {firstname:'Thomas', lastname:'Huber',githubaccount:'thomasclaudiushuber'},
  {firstname:'Bruce', lastname:'Willis'},
  {firstname:'Lara', lastname:'Croft'}];


import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  template: `<h1>Number of Persons {{persons.length}}</h1>
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
           <div *ngIf="selectedPerson;else loading">
               Selected Person:
               <label for="firstname" >Firstname: </label>
               <input id="firstname" type="text" [(ngModel)]="selectedPerson.firstname"/>
            </div>
            <!-- Special bonus -->
            <div *ngIf="selectedPerson?.firstname === 'Thomas'">
              You've selected a Thomas in the list. :-)
            </div>
            <ng-template #loading>Please select a person</ng-template>
            `
})
export class AppComponent {
  persons: Person[] = PERSONS;

  selectedPerson: Person;

  onPersonClick(person: Person) {
    this.selectedPerson = person;
  }
}

const PERSONS: Person[] = [
  { firstname: 'Silvester', lastname: 'Stallone' },
  { firstname: 'Thomas', lastname: 'Bandixen', githubaccount: 'tbandixen' },
  { firstname: 'Thomas', lastname: 'Huber', githubaccount: 'thomasclaudiushuber' },
  { firstname: 'Bruce', lastname: 'Willis' },
  { firstname: 'Lara', lastname: 'Croft' }];


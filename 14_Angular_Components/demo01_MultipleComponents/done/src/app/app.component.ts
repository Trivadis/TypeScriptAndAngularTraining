import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  template: `<h1>Click a person to select it</h1>
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
  <app-person-detail [person]="selectedPerson"></app-person-detail>
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

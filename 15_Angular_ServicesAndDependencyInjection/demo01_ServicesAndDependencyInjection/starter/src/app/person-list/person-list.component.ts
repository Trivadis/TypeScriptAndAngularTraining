import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  template: `
  <p style="font-weight:bold;color:red">
    TODO: Go to the PersonListComponent and extract the hardcoded PERSONS-list into a PersonDataService
  </p>
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
</table>`
}
)
export class PersonListComponent {
  persons: Person[] = PERSONS;
  selectedPerson: Person;

  onPersonClick(person: Person) {
    this.selectedPerson = person;
  }

  onRemove(person: Person) {
    const index = this.persons.indexOf(person);
    if (index > -1) {
      this.persons.splice(index, 1);
    }
  }
}

const PERSONS: Person[] = [
  { firstname: 'Silvester', lastname: 'Stallone' },
  { firstname: 'Thomas', lastname: 'Bandixen', githubaccount: 'tbandixen' },
  { firstname: 'Thomas', lastname: 'Gassmann', githubaccount: 'gassmannT' },
  { firstname: 'Thomas', lastname: 'Huber', githubaccount: 'thomasclaudiushuber' },
  { firstname: 'Bruce', lastname: 'Willis' },
  { firstname: 'Lara', lastname: 'Croft' }];
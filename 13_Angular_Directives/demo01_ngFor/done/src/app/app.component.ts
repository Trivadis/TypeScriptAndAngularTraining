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
            <tr *ngFor="let person of persons">
              <td>{{person.firstname}}</td>
              <td>{{person.lastname}}</td>
              <td>{{person.githubaccount}}</td>
            </tr>
          </table>
            `
})
export class AppComponent {
  persons: Person[] = PERSONS;
}

const PERSONS: Person[] = [
  { firstname: 'Silvester', lastname: 'Stallone' },
  { firstname: 'Thomas', lastname: 'Bandixen', githubaccount: 'tbandixen' },
  { firstname: 'Thomas', lastname: 'Huber', githubaccount: 'thomasclaudiushuber' },
  { firstname: 'Bruce', lastname: 'Willis' },
  { firstname: 'Lara', lastname: 'Croft' }];

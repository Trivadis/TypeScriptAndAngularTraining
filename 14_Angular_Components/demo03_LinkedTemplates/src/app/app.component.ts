import { Person } from './person';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  persons: Person[] = PERSONS;
}

const PERSONS: Person[] = [
  { firstname: 'Silvester', lastname: 'Stallone' },
  { firstname: 'Thomas', lastname: 'Bandixen', githubaccount: 'tbandixen' },
  { firstname: 'Thomas', lastname: 'Huber', githubaccount: 'thomasclaudiushuber' },
  { firstname: 'Bruce', lastname: 'Willis' },
  { firstname: 'Lara', lastname: 'Croft' }
];

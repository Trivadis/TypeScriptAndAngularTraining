import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonDataService } from '../person-data.service';

@Component({
  selector: 'app-person-list',
  template: `
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
export class PersonListComponent implements OnInit {
  persons: Person[];
  selectedPerson: Person;

  constructor(private _personDataService: PersonDataService) { }

  ngOnInit() {
    this._personDataService.loadPersons()
      .then(p => this.persons = p)
      .catch(error => alert(error));
  }

  onPersonClick(person: Person) {
    this.selectedPerson = person;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  moduleId: module.id,
  templateUrl: 'person-list.component.html'
})
export class PersonListComponent implements OnInit {
  pageTitle = 'All persons';
  personList: Person[] = [];
  listFilter: string;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.personService.getPersons().subscribe(res => (this.personList = res));
  }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Person } from './../../model/person';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonService } from './../../services/person.service';

@Component({
  selector: 'person-detail',
  template: `<h2>PersonDetail: {{person?.firstname}}</h2>
      <div *ngIf="person">
         <div>
           <label for="inputFirstname">Firstname: </label>
           <input id="inputFirstname" class="form-control" type="text" [(ngModel)]="person.firstname"/>
         </div>
          <div>
           <label for="inputLastName">LastName: </label>
           <input id="inputLastName" class="form-control" type="text" [(ngModel)]="person.lastname"/>
         </div>
            <div>
           <label for="inputGithub">Github account: </label>
           <input id="inputGithub" class="form-control" type="text" [(ngModel)]="person.githubaccount"/>
         </div>
         <button class="btn btn-primary" (click)="onSave()">Save</button>
      </div>`
})
export class PersonDetailComponent implements OnInit {

  @Input()
  person: Person;

  constructor(
    private _personService: PersonService
    , private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let personId = +params['personid'];
      this._personService.getPersonById(personId)
        .subscribe(res => this.person = res);
    });
  }

  onSave() {
    this._personService.savePerson(this.person);
    window.history.back();
  }

}
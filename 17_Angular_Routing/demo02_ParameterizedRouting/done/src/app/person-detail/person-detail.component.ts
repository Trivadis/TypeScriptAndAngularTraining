import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { PersonDataService } from "../person-data.service";
import { Person } from "./../person";

@Component({
  selector: "person-detail",
  template: `
    <div *ngIf="person">
      Person Details:
      <div>Firstname: {{ person.firstname }}</div>
      <div>Firstname: {{ person.lastname }}</div>
      <div>Github: {{ person.githubaccount }}</div>
    </div>
    <button (click)="goBack()">go back</button>
  `,
})
export class PersonDetailComponent implements OnInit {
  person: Person;
  constructor(
    private _route: ActivatedRoute,
    private _dataService: PersonDataService,
    private _location: Location
  ) {}

  ngOnInit() {
    this._route.params.forEach((p: Params) => {
      let personId = +p["id"]; // Convert string to number with JavaScript + operator
      this.person = this._dataService.getPersonById(personId);
    });
  }

  goBack() {
    this._location.back();
  }
}

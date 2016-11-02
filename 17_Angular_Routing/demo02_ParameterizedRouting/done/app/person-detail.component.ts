import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }               from '@angular/common';
import { PersonDataService } from './person-data.service';
import {Person} from './person';

@Component(
    {
        selector:'person-detail',
        template:`   
        <h1>Person details</h1>
         <div *ngIf="person">
		       Person Details: 
           <div>
             Firstname: {{person.firstname}}
           </div> 
           <div>
             Firstname: {{person.lastname}}
           </div>
           <div>
             Github: {{person.githubaccount}}  
           </div>
        </div>
        <button (click)="goBack()">go back</button>`
    }
)
export class PersonDetailComponent implements OnInit
{
  person:Person;
  constructor(private _route:ActivatedRoute,
    private _dataService:PersonDataService,
    private location: Location){}

  ngOnInit()
  {
    this._route.params.forEach((p:Params)=>
    {
      let personId = +p['id']; // Convert string to number with JavaScript + operator
      this.person=this._dataService.getPersonById(personId);
    });
  }

  goBack()
  {
    this.location.back();
  }
}
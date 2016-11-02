import {Component, Input} from '@angular/core';
import {Person} from './person';

@Component(
    {
        selector:'person-detail',
        template:`   
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
        </div>`
    }
)
export class PersonDetailComponent
{
    @Input()
    person:Person;
}
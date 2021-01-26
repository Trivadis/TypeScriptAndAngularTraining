import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-detail',
  template: ` <div *ngIf="person">
  Selected Person:
    <div>
      <label for="firstname" >Firstname: </label>
      <input id="firstname" type="text" [(ngModel)]="person.firstname"/>
    </div>
    <div>
      <label for="lastname" >Firstname: </label>
      <input id="lastname" type="text" [(ngModel)]="person.lastname"/>
    </div>
    <div>
      <label for="githubaccount" >Github: </label>
      <input id="githubaccount" type="text" [(ngModel)]="person.githubaccount"/>
    </div>
    <button (click)="onRemove()">Remove</button>
 </div>`
}
)
export class PersonDetailComponent {
  @Input()
  person: Person;

  @Output()
  remove = new EventEmitter<Person>();

  onRemove() {
    this.remove.emit(this.person);
  }
}

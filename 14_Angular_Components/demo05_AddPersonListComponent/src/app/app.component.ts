import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  template: `<h1>Click a person to select it</h1>
  
  <app-person-list #personList></app-person-list>

  <app-person-detail
    (remove)="personList.onRemove($event)"
    [person]="personList.selectedPerson"></app-person-detail>
   `
})
export class AppComponent {

}

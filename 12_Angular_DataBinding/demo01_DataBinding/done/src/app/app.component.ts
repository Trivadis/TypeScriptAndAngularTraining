import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Details of {{person.fullname | uppercase}}</h1>
            <input type="text"
           [(ngModel)]="person.fullname">`
})
export class AppComponent {
  person: Person = { fullname: 'Lara Croft' };
}
interface Person {
  fullname: string;
}

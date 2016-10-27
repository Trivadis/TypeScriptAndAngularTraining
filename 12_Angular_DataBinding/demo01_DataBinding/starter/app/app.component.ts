import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Details of {{fullname | uppercase}}</h1>
            <input type="text" [value]="fullname">`
})
export class AppComponent {
  fullname: string = "Lara Croft";
}
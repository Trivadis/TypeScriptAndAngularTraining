// TODO: 1. Map the view to a Person instead of string
//      2. Add TwoWay Data Binding
//      3. Something is missing => To use ngModel you must import FormsModule in the Root Module (AppModule)

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Details of {{fullname | uppercase}}</h1>
            <input type="text" [value]="fullname">
            `
})
export class AppComponent {
  fullname: string = 'Lara Croft';
}

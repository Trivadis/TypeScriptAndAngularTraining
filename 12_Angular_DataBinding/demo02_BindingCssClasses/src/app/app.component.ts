import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`.active{
     background-color:green;
  }`],
  template: `<h1>Details of {{fullname | uppercase}}</h1>
            <div>Type in "Thomas" and it sets the active-class on the input-element (so it gets green)</div>
            <input [class.active]="fullname==='Thomas'" type="text" [(ngModel)]="fullname" #myInput required>
            <div>Classes set on input-element: {{myInput.className}}</div>`
            
})
export class AppComponent {
  fullname: string = "Lara Croft";
}
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Number of Persons {{persons.length}}</h1>
             <input type="text" [ngStyle]="getMyStyles()" value="Hello" #myInput>
            `
})
export class AppComponent {
  getMyStyles()
  {
    let styles=
    {
      "background-color":"black",
      "color":"white"
    };
    return styles;
  }
}



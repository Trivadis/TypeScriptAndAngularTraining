import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<input type="text" [ngStyle]="getMyStyles()" value="Hello">
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



import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  template: `<input type="text" [ngStyle]="getMyStyles()" value="Hello">
  `
})
export class AppComponent {
  getMyStyles() {
    let styles =
      {
        "background-color": "black",
        "color": "white"
      };
    return styles;
  }
}
import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'my-app',
  template: `
      <div>
        <h1>Reactive Form Demo</h1>
        <person-form></person-form>
      </div>
    `
})
export class AppComponent {

}


import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Simple Routing</h1>
           <a routerLink="/languages">languages</a>
           <a routerLink="/persons">persons</a>
           <router-outlet></router-outlet>
            `
})
export class AppComponent {

}


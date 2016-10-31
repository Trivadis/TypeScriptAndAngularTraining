import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Simple Routing</h1>
          <p style="font-weight:bold;color:red">TODO: Move the routing configuration from app.module.ts to a separate app-routing.module.ts</p>
           <a routerLink="/languages">languages</a>
           <a routerLink="/persons">persons</a>
           <router-outlet></router-outlet>
            `
})
export class AppComponent {

}


import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h1>Simple Routing</h1>
    <a routerLink="/languages">languages</a>&nbsp;
    <a routerLink="/persons">persons</a>
    <router-outlet></router-outlet> `,
})
export class AppComponent {}

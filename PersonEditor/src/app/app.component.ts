import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component(
  {
    selector: 'app-root',
    template: `
        <div class='container'>
            <h1>Person Editor</h1>
            <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link"
                  [class.active]="url.startsWith('/person')"
                  routerLink="/persons">All Persons</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" [class.active]="url==='/developers'"
                   routerLink="/developers" >Developers</a>
                </li>
            </ul>
            <div style='margin-top: 10px;'>
                <router-outlet></router-outlet>
            </div>
        </div>
           `
  }
)
export class AppComponent implements OnInit {
  url = '';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe(e => this.onRouterEvent(e));
  }

  onRouterEvent(event: any) {
    this.url = event.url;
  }

}

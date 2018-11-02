import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  url = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(e => this.onRouterEvent(e));
  }

  onRouterEvent(event: any) {
    this.url = event.url;
  }
}

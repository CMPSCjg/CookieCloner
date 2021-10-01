import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isOnHomePage: boolean = false;

  constructor(public router: Router) {
    this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof RouterEvent) {
        this.isOnHomePage = routerEvent.url === '/'
      }
    })
  }
}

import { Component } from '@angular/core';

interface Card {
  title: string,
  description: string,
  calories: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomePage = true;

  time = setTimeout(() => {
    this.isHomePage = true;
  }, 5000)
}

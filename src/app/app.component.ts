import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-physician';
  router: Router;

  constructor(
    private r: Router
  ) {
    this.router = r;
  }
  
}



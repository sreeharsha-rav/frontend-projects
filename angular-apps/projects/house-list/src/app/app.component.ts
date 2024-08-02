import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import { HeaderComponent } from './components/header/header.component';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

/**
 * The root component of the Angular application.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="container mx-auto px-4">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  /**
   * Initializes the component.
   * Subscribes to router events and executes a function when a navigation ends.
   */
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}

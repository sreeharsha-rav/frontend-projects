import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <mat-slide-toggle>Toggle me!</mat-slide-toggle>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'todo-list';
}

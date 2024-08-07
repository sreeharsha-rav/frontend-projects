import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, TodoListComponent],
  template: `
    <mat-toolbar>
      <span>Todo App</span>
    </mat-toolbar>
    <div class="container">
      <app-todo-list></app-todo-list>
    </div>
  `,
  styles: [`
    mat-toolbar {
      display: flex;
      justify-content: center;
      background-color: #1976d2;
      color: white;
    }
    .container {
      max-width: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px auto;
      padding: 0 20px;
    }
  `]
})
export class AppComponent { }

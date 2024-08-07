import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    TodoListItemComponent
  ],
  template: `
    <mat-card>
      <mat-card-content>
        <form [formGroup]="todoForm" (ngSubmit)="addTodo()">
          <mat-form-field appearance="outline">
            <input matInput formControlName="newTodoTitle" placeholder="New todo">
          </mat-form-field>
          <button mat-raised-button color="primary" type="submit" [disabled]="todoForm.invalid">Add Todo</button>
        </form>
        
        <mat-list>
          <h3 mat-subheader>Active Tasks</h3>
          @for (todo of activeTodos; track todo.id) {
            <app-todo-list-item 
              [todo]="todo"
              (delete)="deleteTodo($event)"
              (toggle)="toggleTodo($event)">
            </app-todo-list-item>
          }

          @if (completedTodos.length > 0) {
            <mat-divider></mat-divider>
            <h3 mat-subheader>Completed Tasks</h3>
            @for (todo of completedTodos; track todo.id) {
              <app-todo-list-item 
                [todo]="todo"
                (delete)="deleteTodo($event)"
                (toggle)="toggleTodo($event)">
              </app-todo-list-item>
            }
          }
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    form {
      align-items: center;
    }
    button {
      margin-left: 10px;
      border-radius: 5px;
    }
    mat-form-field {
      flex-grow: 1;
    }
    h3 {
      font-size: 1.2rem;
    }
    mat-divider {
      display: block;
      margin: 20px 0;
    }
  `]
})
export class TodoListComponent implements OnInit {
  // Local state
  todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Create Todo App', completed: false },
  ];

  todoForm: FormGroup;  // Reactive form

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      newTodoTitle: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit() {}

  get activeTodos(): Todo[] {
    return this.todos.filter(todo => !todo.completed);
  }

  get completedTodos(): Todo[] {
    return this.todos.filter(todo => todo.completed);
  }

  addTodo() {
    if (this.todoForm.valid) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.todoForm.get('newTodoTitle')?.value.trim(),
        completed: false
      };
      this.todos.push(newTodo);
      this.todoForm.reset();
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

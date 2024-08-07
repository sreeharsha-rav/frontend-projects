import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCheckboxModule, MatButtonModule, MatIconModule],
  template: `
    <mat-list-item>
      <mat-checkbox [checked]="todo.completed" (change)="onToggle()">
        {{ todo.title }}
      </mat-checkbox>
      <button mat-icon-button color="warn" (click)="onDelete()">
        <mat-icon>delete</mat-icon>
      </button>
    </mat-list-item>
  `,
  styles: [`
    mat-list-item {
      align-items: center;
    }
    button {
      margin-left: 10px;
      border-radius: 5px;
    }
  `]
})
export class TodoListItemComponent {
  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.todo.id);
  }

  onToggle() {
    this.toggle.emit(this.todo.id);
  }
}

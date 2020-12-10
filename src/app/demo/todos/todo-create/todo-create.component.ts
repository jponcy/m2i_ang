import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo-api.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styles: [
  ]
})
export class TodoCreateComponent {
  todo: Todo = { name: null, finished: false };

  // @ViewChild('todoForm')
  // form: NgForm;

  onSubmit() {
    // Process creation.
  }
}

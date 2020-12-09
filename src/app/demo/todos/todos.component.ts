import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Todo, TodoApiService } from './todo-api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private readonly api: TodoApiService) { }

  onClick(todo: Todo): void {
    todo.finished = !todo.finished;
  }

  ngOnInit(): void {
    this.api
        .getAll()
        .subscribe(todos => this.todos = todos);
  }
}

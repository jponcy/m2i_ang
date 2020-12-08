import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface Todo {
  // Type : string, boolean, number, null, undefined.
  name: string;
  finished: boolean;
}

const todos = [
  { name: 'Créer un projet angular', finished: true },
  { name: 'Comprendre les arrow function et leur application', finished: false },
];

Array
    .from({length: 50})
    .forEach((_, i) => todos.push({ name: 'Tâche n°' + (i + 1), finished: i < 10}));

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  age = 13;

  todos: Todo[];

  constructor() { }

  onClick(todo: Todo): void {
    todo.finished = !todo.finished;
  }

  ngOnInit(): void {
    of(null).pipe(delay(1_000)).subscribe(() => this.todos = todos);

    switch (this.age) {
      case 1:
        // If 1
        break;
      case 2:
        // If 2
        break;
      default:
        // Else.
        break;
    }
  }

  get ageComment() {
    let result: string;

    if (this.age < 5) {
      result = 'Inférieur à 5 ans.';
    } else if (this.age <= 10) {
      result = 'Entre 5 et 10 ans.';
    } else {
      result = 'Supérieur à 10 ans.';
    }

    return result;
  }
}

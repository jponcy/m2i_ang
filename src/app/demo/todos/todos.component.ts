import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    // const fn = function (param1) {
    //   this.todos = todos;
    // };
    // fn.bind(this);
    // setTimeout(fn, 2_000);

    // Syntaxe arrow function
    // complete : (param1, param2, ..., paramX) => { /* content */}
    // si un seul param : param1 => { /* content */}
    // si une seule ligne (attention, provoque un return implicite) : (param1, param2, ..., paramX) => /* content */
    // syntaxe minimun : () => 3


    // setTimeout(() => this.todos = todos, 1_000); => setTimeout deprécié
    of(null).pipe(delay(1_000)).subscribe(() => this.todos = todos);

    // const fn = (nb: number) => [...Array(nb)]
    //   .map((_, i) => i + 1)
    //   .reduce((acc, elt) => acc * elt, 1);

    // var _fn = function (nb) {
    //   return Array.from({length: nb})
    //     .map(function (_, i) { return i; })
    //     .reduce(function (acc, elt) { return acc * elt; }, 1);
    // }

    // const tab = [1, 2, 3];

    // const square = tab.map(value => value ** 2);
  }
}

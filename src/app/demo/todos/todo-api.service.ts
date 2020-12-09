import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { delay, map, tap } from 'rxjs/operators';

export interface Todo {
  // Type : string, boolean, number, null, undefined.
  name: string;
  finished: boolean;
}

interface TodoDto {
  title: string;
  finished: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoApiService {
  constructor(private readonly http: HttpClient) {}

  /** Returns all tasks. */
  getAll() {
    // return of(todos);

    const params = new HttpParams()
      .append('q', 'toto');

    // this.http.post<void>('toto.com', { name: 'Toto', age: 42 })

    return this.http.get<TodoDto[]>('./assets/todos.json', { params })
        .pipe(
          delay(1_000),
          // Conversion des donnees car l'API n'a pas le meme nom pour le champs name (title a la place).
          map(todos => todos.map(this.convertTodo))
        );

    // return this.http.get<Todo[]>('http://localhost:8000/api/todos');
  }

  private readonly convertTodo = (todo: {title: string, finished: boolean}) => ({
    name: todo.title,
    finished: todo.finished
  })
}

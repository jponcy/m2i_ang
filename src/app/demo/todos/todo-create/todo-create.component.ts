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

  @ViewChild('monParagraph')
  monParagraph: HTMLElement;

  onSubmit() {
    // Cette methode n'est appellee que si le formulaire est valide (aucune validation a faire).
    // Process creation.

    console.log('Envoi du formulaire', { dto: this.todo, p: this.monParagraph });
  }
}

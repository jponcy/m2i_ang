import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputOutputComponent } from './input-output/input-output.component';
import { SubComponent } from './input-output/sub.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { DrawValueComponent } from './observables/draw-value.component';
import { SubjectComponent } from './observables/subject.component';
import { TodoCreateComponent } from './todos/todo-create/todo-create.component';
import { TodosComponent } from './todos/todos.component';
import { TodoCreateReactiveComponent } from './todos/todo-create-reactive/todo-create-reactive.component';

@NgModule({
  declarations: [
    MonComposantComponent,
    TodosComponent,
    InputOutputComponent,
    SubComponent,
    SubjectComponent,
    DrawValueComponent,
    TodoCreateComponent,
    TodoCreateReactiveComponent
  ],
  exports: [
    TodosComponent,
    TodoCreateComponent,
    TodoCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,         // Inclue les dependences pour utiliser les template-driven-forms.
    ReactiveFormsModule, // Inclue les dependences pour utiliser les reactive-forms.
    RouterModule
  ]
})
export class DemoModule {}

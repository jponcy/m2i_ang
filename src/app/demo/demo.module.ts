import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputOutputComponent } from './input-output/input-output.component';
import { SubComponent } from './input-output/sub.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { DrawValueComponent } from './observables/draw-value.component';
import { SubjectComponent } from './observables/subject.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    MonComposantComponent,
    TodosComponent,
    InputOutputComponent,
    SubComponent,
    SubjectComponent,
    DrawValueComponent
  ],
  exports: [
    TodosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DemoModule {}

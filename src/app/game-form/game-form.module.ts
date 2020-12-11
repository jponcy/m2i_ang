import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GameFormComponent } from './game-form.component';

@NgModule({
  declarations: [GameFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [GameFormComponent]
})
export class GameFormModule { }

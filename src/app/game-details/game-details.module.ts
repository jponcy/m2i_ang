import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameDetailsComponent } from './game-details.component';

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [GameDetailsComponent]
})
export class GameDetailsModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GameListFilterComponent } from './game-list-filter.component';

@NgModule({
  declarations: [
    GameListFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GameListFilterComponent
  ]
})
export class FilterModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameListFilterComponent } from './game-list-filter.component';

@NgModule({
  declarations: [
    GameListFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameListFilterComponent
  ]
})
export class FilterModule { }

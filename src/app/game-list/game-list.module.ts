import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameListActionsComponent } from './actions/game-list-actions.component';
import { FilterModule } from './filter/filter.module';
import { GameListComponent } from './game-list.component';

@NgModule({
  declarations: [
    GameListComponent,
    GameListActionsComponent
  ],
  imports: [
    CommonModule,
    FilterModule
  ],
  exports: [
    GameListComponent
  ]
})
export class GameListModule { }

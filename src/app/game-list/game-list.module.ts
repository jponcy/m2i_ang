import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WordsPipe } from '../words.pipe';
import { GameListActionsComponent } from './actions/game-list-actions.component';
import { FilterModule } from './filter/filter.module';
import { GameListComponent } from './game-list.component';

@NgModule({
  declarations: [
    GameListComponent,
    GameListActionsComponent,
    WordsPipe // En general on mets ce genre de composant/pipe dans un module app/shared
  ],
  imports: [
    CommonModule,
    FilterModule,
    RouterModule
  ],
  exports: [
    GameListComponent
  ]
})
export class GameListModule { }

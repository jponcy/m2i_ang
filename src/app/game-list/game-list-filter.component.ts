import { Component } from '@angular/core';

import { GameGenre, genres as allGenres } from './models';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styles: [
  ]
})
export class GameListFilterComponent {

  /** Genre entities. */
  readonly genres: GameGenre[] = allGenres.sort((a, b) => a.name.localeCompare(b.name));
}

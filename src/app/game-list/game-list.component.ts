import { Component } from '@angular/core';

import { Game, games } from './models';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: [
  ]
})
export class GameListComponent {
  readonly games: Game[] = games;

  description(game: Game) {
    let result: string;
    const words = game.description.split(/\s+/);

    if (words.length > 20) {
      result = words.slice(0, 21).join(' ') + '...';
    } else {
      result = game.description;
    }

    return result;
  }
}

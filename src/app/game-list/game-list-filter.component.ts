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

  onChangeName(event: any) {
    console.log('Change name', {
      event,
      value: event.target.value
    });
  }
}




// Composant enfant (sub.component)
function toto(nom: string) {
  const msg = 'Salut';
  console.log(msg + ' ' + nom);
}

// Composant input-output
toto('Ben');

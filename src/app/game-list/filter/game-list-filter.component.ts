import { Component, EventEmitter, Output } from '@angular/core';

import { GameGenre, genres as allGenres } from '../models';
import { GameListFilter } from './../models';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styles: [
  ]
})
export class GameListFilterComponent {

  private filterData: GameListFilter = { name: '', genre: null, editor: '' };

  @Output()
  filter = new EventEmitter<GameListFilter>();

  /** Genre entities. */
  readonly genres: GameGenre[] = allGenres.sort((a, b) => a.name.localeCompare(b.name));

  onSubmit(event: Event) {
    event.preventDefault();

    this.filter.emit({
      name: this.filterData.name.trim().toLowerCase(),
      editor: this.filterData.editor.trim().toLowerCase(),
      genre: this.filterData.genre
    });
  }

  onChangeName(name: string) {
    this.filterData.name = name;
  }

  onChangeGenre(genreId: number) {
    this.filterData.genre = genreId;
  }

  onChangeEditor(editor: string) {
    this.filterData.editor = editor;
  }

  onReset() {
    this.filterData = { name: '', genre: null, editor: '' };
    this.filter.emit(this.filterData);
  }
}

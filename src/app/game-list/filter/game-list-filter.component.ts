import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GameApiService } from '../game-api.service';
import { GameGenre } from '../models';
import { GameListFilter } from './../models';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styles: [
  ]
})
export class GameListFilterComponent implements OnInit, OnDestroy {

  private filterData: GameListFilter = { name: '', genre: null, editor: '' };

  @Output()
  filter = new EventEmitter<GameListFilter>();

  /** Genre entities. */
  genres: GameGenre[];

  private subscription: Subscription;

  /** Used to free observables. */
  protected subscriptionHandler$ = new Subject();

  constructor(private readonly api: GameApiService) {}

  ngOnInit() {
    // Exemple simple (avec fuite memoire potentielle).
    // this.api
    //     .getAllGenres()
    //     .subscribe(genres => this.genres = genres);

    // Exemple avec liberation de la memoire par subscription (C.f. aussi l'attribut + le code dans ngOnDesroy).
    // this.subscription = this.api
    //     .getAllGenres()
    //     .subscribe(genres => this.genres = genres);

    // Exemple moderne de liberation en utilisant rxjs (conseille notemment s'il y a plusieurs flux a terminer).
    this.api
        .getAllGenres()
        .pipe(takeUntil(this.subscriptionHandler$)) // Le message est emis dans la methode ngOnDestroy.
        .subscribe(genres => this.genres = genres);
  }

  ngOnDestroy() {
    // Liberation de la memoire par subscription.
    if (this.subscription/* && !this.subscription.closed*/) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }

    // Liberation de la memoire en utilisant rxjs
    this.subscriptionHandler$.next();
    this.subscriptionHandler$.complete();
  }

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

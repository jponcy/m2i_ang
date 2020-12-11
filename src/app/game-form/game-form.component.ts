import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GameApiService } from '../game-list/game-api.service';
import { Observable, Subject } from 'rxjs';
import { GameGenre } from '../game-list/models';
import { delay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  id: number = null;

  /** Used to free observables. */
  protected subscriptionHandler$ = new Subject();

  genres$: Observable<GameGenre[]>;

  form = this.fb.group({
    title:      [null, Validators.required],
    description: null,
    genres:     [null, Validators.required]
  });

  loaded = true;

  constructor(
      private readonly api: GameApiService,
      private readonly fb: FormBuilder,
      private readonly route: ActivatedRoute,
      private readonly router: Router) { }

  ngOnInit(): void {
    this.loaded = false;
    const id = +this.route.snapshot.params.id;

    if (id) {
      this.id = id;

      this.api
          .getOne(id)
          .pipe(takeUntil(this.subscriptionHandler$), delay(2_000))
          .subscribe(game => {
            this.form.patchValue({...game, genres: game.genres.map(g => g.id)});
            this.loaded = true;
          });
    } else {
      this.loaded = true;
    }

    this.genres$ = this.api.getAllGenres();
  }

  onSubmit() {
    this.api
        .create(this.form.value)
        .pipe(takeUntil(this.subscriptionHandler$))
        .subscribe(this.onCreateSuccess);
  }

  private onCreateSuccess = () => this.router.navigate(['..'], { relativeTo: this.route });
}

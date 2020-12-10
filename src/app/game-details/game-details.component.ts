import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { flatMap, subscribeOn, takeUntil } from 'rxjs/operators';
import { GameApiService } from '../game-list/game-api.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  // /** Used to free observables. */
  // protected subscriptionHandler$ = new Subject();

  game$: Observable<any>;

  /** Constructor. */
  constructor(
      private readonly route: ActivatedRoute,
      private readonly api: GameApiService) { }

  ngOnInit(): void {
    // const id = this.route.paramMap.get('id');

    // Syntaxe de base pour recuperer un jeux a partir de l'id donne dans l'URL.
    // this.route.params
    //     .pipe(takeUntil(this.subscriptionHandler$))
    //     .subscribe((params: {id: number}) => {
    //       const id = +params.id;

    //       this.api
    //           .getOne(id)
    //           .subscribe(console.log);
    //     });

    // Syntaxe amelioree en utilisant l'operateur flatMap de rxjs -- c'est le code generallement conseille.
    // this.route.params
    //     .pipe(
    //       takeUntil(this.subscriptionHandler$),
    //       flatMap((params: {id: number}) => this.api.getOne(+params.id))
    //     )
    //     .subscribe(console.log);

    // Syntaxe plus courte.
    // this.api
    //     .getOne(+this.route.snapshot.paramMap.get('id'))
    //     .pipe(takeUntil(this.subscriptionHandler$))
    //     .subscribe(console.log);


    this.game$ = this.api.getOne(+this.route.snapshot.paramMap.get('id'));
  }

}

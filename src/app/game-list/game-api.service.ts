import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, of, Observable } from 'rxjs';
import { delay, flatMap, map } from 'rxjs/operators';

import { Game, GameDto, GameEditor, GameGenre } from './models';

const URL_GAME   = `${environment.apiUrl}/games`;
const URL_GENRE  = `${environment.apiUrl}/genres`;
const URL_EDITOR = `${environment.apiUrl}/publishers`;

/**
 * This service use https://github.com/jponcy/fake-game-api API.
 *
 * @remarks
 * Access to all games
 * this.http.get<Game[]>('http://localhost:3000/games')
 *
 * Access the game with ID 1
 * this.http.get<Game[]>('http://localhost:3000/games/1')
 *
 * Delete the game with ID 1
 * this.http.delete<Game[]>('http://localhost:3000/games/1')
 */
@Injectable({ providedIn: 'root' })
export class GameApiService {
  constructor(private readonly http: HttpClient) {}

  getAll(page: number = null, limit: number = null) {
    let params = new HttpParams();

    if (page) {
      params = params.append('_page', `${page}`);
    }

    if (limit) {
      params = params.append('_limit', `${limit}`);
    }

    // Utilisation d'un formJoin
    return forkJoin([
      this.http.get<GameDto[]>(URL_GAME, { params }),
      this.getAllGenres(),
      this.getEditors()
    ])
      .pipe(
        delay(400),
        map(this.convertGamesDestructAndFilter)
      );
  }

  getOne(id: number) {
    return this.http.get<GameDto>(`${URL_GAME}/${id}`)
        .pipe(
          flatMap(game => forkJoin([
            of(game),
            // Il serait preferable d'avoir un systeme de cache (qu'il soit manuel ou avec une librairie)
            // OU avoir une API no RestFULL plus facile a utiliser.
            this.getAllGenres(game.genres),
            this.getOneEditor(game.publisher)
          ])),
          map(([game, genres, editor]) => ({ ...game, genres, editor }))
        ) as Observable<Game>;
  }

  /** Deletes the given game. */
  delete(game: Game) {
    return this.http.delete<void>(`${URL_GAME}/${game.id}`);
  }

  create(game: Game) {
    return this.http.post<void>(`${URL_GAME}`, game);
  }

  // @Cacheable()
  getAllGenres(ids: number[] = null) {
    let params = new HttpParams()
        .append('_sort', 'name');
        // .append('_order', 'asc') // Default in API.

    if (ids) {
      for (const id of ids) {
        params = params.append('id', `${id}`);
      }
    }

    return this.http.get<GameGenre[]>(URL_GENRE, { params });
  }

  private getOneEditor(id: number) {
    return this.http.get<GameEditor>(`${URL_EDITOR}/${id}`);
  }

  private getEditors() {
    return this.http.get<GameEditor[]>(URL_EDITOR);
  }

  /** Implementation de la conversion avec des boucles traditionelles. */
  private convertGames = ([allGames, allGenres, allEditors]) => {
    const result: Game[] = [];
    let editor: GameEditor;
    let genres: GameGenre[];

    for (const game of allGames) {
      editor = null;
      genres = [];

      // Recherche de l'editeur.
      for (const e of allEditors) {
        if (e.id === game.publisher) {
          editor = e;
          break;
        }
      }

      // Recherche des genres.
      for (const g of allGenres) {
        if (game.genres.includes(g.id)) {
          genres.push(g);
        }
      }

      result.push({
        id: game.id,
        title: game.title,
        coverImage: game.coverImage,
        description: game.description,
        note: game.note || null,
        editor,
        genres
      });
    }

    return result;
  }

  /** Utilisation de la methode filter. */
  private convertGamesWithFilterFn = ([allGames, allGenres, allEditors]) => {
    const result: Game[] = [];

    for (const game of allGames) {
      result.push({
        id: game.id,
        title: game.title,
        coverImage: game.coverImage,
        description: game.description,
        note: game.note || null,
        editor: allEditors.find((e: GameEditor) => e.id === game.publisher),
        genres: allGenres.filter((g: GameGenre) => game.genres.includes(g.id))
      });
    }

    return result;
  }

  /** Utilisation de la destructuration + methodes filter. */
  private convertGamesDestructAndFilter = ([allGames, allGenres, allEditors]) => {
    const result: Game[] = [];

    for (const {publisher, ...game} of allGames) {
      result.push({
        ...game,
        editor: allEditors.find((e: GameEditor) => e.id === publisher),
        genres: allGenres.filter((g: GameGenre) => (game.genres || []).includes(g.id))
      });
    }

    return result;
  }
}

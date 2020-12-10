import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Game, GameDto, GameEditor, GameGenre } from './models';

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
      this.http.get<GameDto[]>('http://localhost:3000/games', { params }),
      this.getAllGenres(),
      this.getEditors()
    ])
      .pipe(
        delay(400),
        map(this.convertGamesDestructAndFilter)
      );
  }

  getOne(id: number) {
    return this.http.get<any>(`http://localhost:3000/games/${id}`);
  }

  /** Deletes the given game. */
  delete(game: Game) {
    return this.http.delete<void>('http://localhost:3000/games/' + game.id);
  }

  getAllGenres() {
    const params = new HttpParams()
        .append('_sort', 'name');
        // .append('_order', 'asc') // Default in API.

    return this.http.get<GameGenre[]>('http://localhost:3000/genres', { params });
  }

  private getEditors() {
    return this.http.get<GameEditor[]>('http://localhost:3000/publishers');
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
        genres: allGenres.filter((g: GameGenre) => game.genres.includes(g.id))
      });
    }

    return result;
  }
}

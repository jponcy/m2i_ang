import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GameGenre } from './models';

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

  getAllGenres() {
    const params = new HttpParams()
        .append('_sort', 'name');
        // .append('_order', 'asc') // Default in API.

    return this.http.get<GameGenre[]>('http://localhost:3000/genres', { params });
  }
}

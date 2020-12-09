import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}

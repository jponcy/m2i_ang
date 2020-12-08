// Models (to keep).

export interface GameGenre {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  title: string;
  note: number;
  genre: GameGenre;
  description: string;
  coverImage: string;
}


// Fake data (to remove).

export const genres = [
  { id: 1, name: 'RPG' },
  { id: 2, name: 'RTS' },
  { id: 3, name: 'FPS' },
  { id: 4, name: 'jeu de platform multijoueur' },
]

export const games = [{
  id: 1,
  title: 'BattleBlock Theater',
  note: 9.8,
  genre: genres[3],
  description: `
    Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats?
    Yes, all that and more when you unlock BattleBlock Theater!
    There’s no turning back once you've started on your quest to free over 300 of
    your imprisoned friends from evil technological cats. Immerse yourself in this mind bending tale of treachery
    as you use your arsenal of weapon-tools to battle your way through hundreds of levels in order to discover
     the puzzling truth behind BattleBlock Theater.

    If solo acts aren't your style, go online or bring a buddy couch-side to play a thoroughly
    co-optimized quest or enter the arenas.
    The game also includes a level editor so you can craft your own mind bending trials!
  `,
  coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/238460/header.jpg?t=1599169670'
}, {
  id: 2,
  title: 'Castle crasher',
  note: 7.8,
  genre: genres[1],
  description: `
    Yololo!!
  `,
  coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/204360/header.jpg?t=1600880882'
}];

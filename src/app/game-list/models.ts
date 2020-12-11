export interface GameGenre {
  id: number;
  name: string;
}

export interface GameEditor {
  id: number;
  name: string;
}

interface GameBase {
  id: number;
  title: string;
  note?: number;
  description: string;
  coverImage: string;
}

export interface Game extends GameBase {
  genres: GameGenre[];

  // dev

  /** {@link GameDto#publisher} */
  editor: GameEditor;
}

export interface GameDto extends GameBase {
  genres: number[];

  publisher: number;
}

export enum GameListActions {
  FOLLOW = 'follow', SHARE = 'share', BUY = 'buy', DELETE = 'delete', EDIT = 'edit'
}

export interface GameListFilter {
  name: string;
  genre: number;
  editor: string;
}

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
  editor: string;
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
  coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/238460/header.jpg?t=1599169670',
  editor: 'Behemoth Studio'
}, {
  id: 2,
  title: 'Castle crasher',
  note: 7.8,
  genre: genres[1],
  description: `
    Yololo!!
  `,
  coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/204360/header.jpg?t=1600880882',
  editor: 'Behemoth Studio'
}, {
  id: 3,
  title: 'Fallout 3',
  note: 9,
  genre: genres[0],
  description: `
  <div id="game_area_description" class="game_area_description">
  <h2>À propos de ce jeu</h2>
  Les ingénieurs Vault-Tec ont travaillé 24 heures sur 24 pour vous apporter cette simulation post-apocalyptique. Monde complet, simulation de combat et effets visuels impressionnants : vous pourrez choisir parmi des tonnes d'options. Ce jeu est un combat permanent pour la survie contre les monstres, les mutants, les radiations et toutes les autres créatures hostiles. De Vault-Tec, la simulation post-nucléaire la plus prisée des Américains.<br><ul class="bb_ul"><li><strong>Liberté sans limite !</strong> Faites un tour dans ce monde ravagé. Vous reconnaîtrez les monuments connus au milieu des ruines. Il vous appartient de faire les bons choix pour survivre. Ne perdez pas de vue votre compteur Geiger !<br></li><li><strong>Faites l'expérience S.P.E.C.I.A.L.!</strong> Les ingénieurs Vault-Tec vous apportent le meilleur de la personnalisation pour votre personnage. Des douzaines de spécialités sont également disponibles.<br></li><li><strong>Nouvelles vues fantastiques !</strong> Les magiciens de chez Vault-Tec ont encore frappé. Perspective subjective comme à la troisième personnes sont disponibles. <br></li><li><strong>Le pouvoir de choisir !</strong> Serez-vous un bon samaritain ou un sale type ? Chaque situation peut être gérée de manière différente : la voie diplomatique ou celle du rayon plasma.  <br></li><li><strong>Pulvérisez-les avec V.A.T.S.!</strong> Le système V.A.T.S. vous permet de faire des pauses dans les combats, de cibler des points spécifiques et de calibrer vos attaques. Semez la terreur et la destruction avec la classe cinématographique.<br></li><li><strong>Un intelligence artificielle à vous couper le souffle !</strong> Chez Vault-Tec nous sommes conscients que les personnages qui peuplent cet univers sont la clef de voute de cette simulation post-apocalyptique. Expressions faciales, gestes, dialogues et comportements quotidiens ont été recréés avec une précision extrême. <br></li><li><strong>Attention aux yeux !: </strong>Le réalisme de ce jeu est tel que nous vous encourageons à porter des protections visuelles principalement pour vous protéger des projections de chair de mutants. </li></ul>						</div>
  `,
  coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/22300/header.jpg?t=1574460621',
  editor: 'Bethesda Softworks'
}];

export enum GameListActions {
  FOLLOW = 'follow', SHARE = 'share', BUY = 'buy'
}

export interface GameListFilter {
  name: string;
  genre: number;
  editor: string;
}

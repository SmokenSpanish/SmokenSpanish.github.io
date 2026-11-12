export type PlayableOrientation = 'portrait' | 'landscape';
export type PlayableDimension = '2d' | '3d';
export type WorkKind = 'playable' | 'game';

export interface Playable {
  slug: string;
  title: string;
  summary: string;
  mechanics: string[];
  technology: string[];
  role: string;
  buildSizeMb: number;
  orientation: PlayableOrientation;
  dimension: PlayableDimension;
  kind?: WorkKind;
  featured?: boolean;
}

export function isFullGame(item: Playable): boolean {
  return item.kind === 'game';
}

export const playables: Playable[] = [
  {
    slug: 'ragdoll-arena',
    title: 'Ragdoll Arena',
    summary:
      'Physics sandbox playable: hinge-joint ragdolls that struggle and react, a weapon pick (saw, flamethrower, grenade) with a guiding hand, liquid and particle effects, and a packshot with store CTA. One build ships as one-tap, two-tap, and full variants for AppLovin, Google, Mintegral, and TikTok.',
    mechanics: ['2D ragdoll physics', 'Weapon choice', 'Liquid / particle FX', 'Config-driven variants'],
    technology: ['Cocos Creator 3.8', 'TypeScript', 'Box2D', 'HTML5'],
    role: 'End-to-end implementation',
    buildSizeMb: 3.39,
    orientation: 'portrait',
    dimension: '2d',
  },
  {
    slug: 'last-trick',
    title: 'Last Trick',
    summary:
      'Trick-taking card playable: follow-suit rules, trump resolution, opponent seats, deal animation, and a round tutorial before the endcard.',
    mechanics: ['Card play', 'Trick resolution', 'Opponent AI turns', 'Deal / hand UI'],
    technology: ['Cocos Creator 3.8', 'TypeScript', 'HTML5'],
    role: 'End-to-end implementation',
    buildSizeMb: 4.74,
    orientation: 'portrait',
    dimension: '2d',
  },
  {
    slug: 'ashwick-manor',
    title: 'Ashwick Manor',
    summary:
      'Hidden-object playable with a search scene, item tray, first-tap hint, masked reveal, HUD that adapts to orientation, and localized copy.',
    mechanics: ['Tap-to-find', 'Item tray', 'Hint', 'Orientation-aware HUD'],
    technology: ['Cocos Creator 3.8', 'TypeScript', 'HTML5'],
    role: 'End-to-end implementation',
    buildSizeMb: 4.85,
    orientation: 'portrait',
    dimension: '2d',
  },
  {
    slug: 'five-alibis',
    title: 'Five Alibis',
    summary:
      'Deduction board: place evidence on character rows (location, alibi, time), with an adaptive camera so the full board stays visible on desktop and mobile.',
    mechanics: ['Board interaction', 'Evidence placement', 'Adaptive layout', 'Audio on first tap'],
    technology: ['Cocos Creator 3.8', 'TypeScript', 'HTML5'],
    role: 'End-to-end implementation',
    buildSizeMb: 2.69,
    orientation: 'portrait',
    dimension: '2d',
  },
  {
    slug: 'pegfall',
    title: 'Pegfall',
    summary:
      'Peg-board drop playable with difficulty, bet controls, multipliers, banknote feedback, splash / result panels, and install CTA.',
    mechanics: ['Drop physics UI', 'Bet + difficulty', 'Win presentation', 'CTA'],
    technology: ['Cocos Creator 3.8', 'TypeScript', 'HTML5'],
    role: 'End-to-end implementation',
    buildSizeMb: 2.98,
    orientation: 'portrait',
    dimension: '2d',
  },
  {
    slug: 'fortune-dragon',
    title: 'Fortune Dragon',
    summary:
      'Portrait slot playable: 3×3 reels, paylines, Fortune Dragon multipliers, geo-aware currency and copy, and packed HTML for ad networks.',
    mechanics: ['Reel spin', 'Paylines', 'Multipliers', 'Geo / locale'],
    technology: ['Cocos Creator 3.8', 'TypeScript', 'HTML5'],
    role: 'End-to-end implementation',
    buildSizeMb: 4.86,
    orientation: 'portrait',
    dimension: '2d',
  },
  {
    slug: 'scoopy',
    title: 'Scoopy',
    summary:
      'A 3D game: dice interaction with a character in the scene, animation, UI scaling, and a staged endcard with packshot and store CTA.',
    mechanics: ['3D scene', 'Dice interaction', 'Character animation', 'Endcard / packshot'],
    technology: ['Cocos Creator 3.8', 'JavaScript', 'HTML5', '3D'],
    role: 'End-to-end implementation',
    buildSizeMb: 4.93,
    orientation: 'portrait',
    dimension: '3d',
    featured: true,
  },
  {
    slug: 'runner',
    title: 'Runner',
    summary:
      'Full HTML5 game, not a playable ad: side-scrolling runner with jump, obstacles, collectibles, score, and a complete play loop.',
    mechanics: ['Endless runner', 'Jump', 'Obstacles', 'Collectibles'],
    technology: ['Cocos Creator 3.8', 'TypeScript', 'HTML5'],
    role: 'End-to-end implementation',
    buildSizeMb: 3.75,
    orientation: 'landscape',
    dimension: '2d',
    kind: 'game',
  },
];

export function getPlayable(slug: string): Playable | undefined {
  return playables.find((item) => item.slug === slug);
}

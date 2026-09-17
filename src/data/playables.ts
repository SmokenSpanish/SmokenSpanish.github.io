export type PlayableOrientation = 'portrait' | 'landscape';

export interface Playable {
  slug: string;
  title: string;
  summary: string;
  mechanics: string[];
  technology: string[];
  role: string;
  buildSizeMb: number;
  orientation: PlayableOrientation;
}

export const playables: Playable[] = [
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
  },
  {
    slug: 'houndhouse',
    title: 'Houndhouse',
    summary:
      'Portrait slot / roulette playable: spin loop, payline presentation, geo-aware money art, multipliers, and packed HTML for ad networks.',
    mechanics: ['Spin loop', 'Paylines', 'Balance / bet', 'Network CTA'],
    technology: ['Cocos Creator 3.8', 'TypeScript', 'HTML5'],
    role: 'End-to-end implementation',
    buildSizeMb: 4.26,
    orientation: 'portrait',
  },
  {
    slug: 'cage-ante',
    title: 'Cage Ante',
    summary:
      'Character-driven dice playable: roll interaction, scene animation, UI scaling, and a staged endcard with packshot and store CTA.',
    mechanics: ['Dice interaction', 'Character animation', 'Endcard / packshot', 'Responsive UI'],
    technology: ['Cocos Creator 3.8', 'JavaScript', 'HTML5'],
    role: 'End-to-end implementation',
    buildSizeMb: 4.93,
    orientation: 'portrait',
  },
];

export function getPlayable(slug: string): Playable | undefined {
  return playables.find((item) => item.slug === slug);
}

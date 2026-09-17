import { isFullGame, type Playable } from '@/data/playables';
import { PlayablePlayer } from './PlayablePlayer';
import styles from './PlayableCard.module.scss';

export function PlayableCard({ playable }: { playable: Playable }) {
  const fullGame = isFullGame(playable);
  const kicker = fullGame ? 'Full game' : playable.featured ? 'Featured' : 'Selected playable';
  const buildLabel = fullGame ? `${playable.buildSizeMb} MB HTML5 game` : `${playable.buildSizeMb} MB packed HTML`;

  return (
    <article className={styles.card} data-featured={playable.featured ? 'true' : 'false'}>
      <div className={styles.copy}>
        <p className="kicker">{kicker}</p>
        <div className={styles.titleRow}>
          <h3>{playable.title}</h3>
          {fullGame ? (
            <span className={styles.badge} data-kind="game">
              Full game
            </span>
          ) : playable.dimension === '3d' ? (
            <span className={styles.badge} data-dimension="3d">
              3D game
            </span>
          ) : null}
        </div>
        <p className={styles.summary}>{playable.summary}</p>
        <dl className={styles.meta}>
          <div>
            <dt>Role</dt>
            <dd>{playable.role}</dd>
          </div>
          <div>
            <dt>Technology</dt>
            <dd>{playable.technology.join(' · ')}</dd>
          </div>
          <div>
            <dt>Production build</dt>
            <dd>{buildLabel}</dd>
          </div>
        </dl>
        <div className={styles.tags}>
          {playable.mechanics.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <PlayablePlayer playable={playable} />
    </article>
  );
}

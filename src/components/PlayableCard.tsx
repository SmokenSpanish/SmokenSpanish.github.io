import type { Playable } from '@/data/playables';
import { PlayablePlayer } from './PlayablePlayer';
import styles from './PlayableCard.module.scss';

export function PlayableCard({ playable }: { playable: Playable }) {
  const dimensionLabel = playable.dimension === '3d' ? '3D playable' : '2D playable';

  return (
    <article className={styles.card} data-featured={playable.featured ? 'true' : 'false'}>
      <div className={styles.copy}>
        <p className="kicker">{playable.featured ? 'Featured' : 'Selected playable'}</p>
        <div className={styles.titleRow}>
          <h3>{playable.title}</h3>
          <span className={styles.badge} data-dimension={playable.dimension}>
            {dimensionLabel}
          </span>
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
            <dd>{playable.buildSizeMb} MB packed HTML</dd>
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

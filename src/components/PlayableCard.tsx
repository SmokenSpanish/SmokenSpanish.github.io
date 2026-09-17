import type { Playable } from '@/data/playables';
import { PlayablePlayer } from './PlayablePlayer';
import styles from './PlayableCard.module.scss';

export function PlayableCard({ playable }: { playable: Playable }) {
  return (
    <article className={styles.card}>
      <div className={styles.copy}>
        <p className="kicker">Selected playable</p>
        <h3>{playable.title}</h3>
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

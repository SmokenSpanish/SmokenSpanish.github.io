import { Link, Navigate, useParams } from 'react-router-dom';
import { getPlayable, isFullGame } from '@/data/playables';
import { PlayablePlayer } from '@/components/PlayablePlayer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import styles from './PlayablePage.module.scss';

export function PlayablePage() {
  const { slug } = useParams();
  const playable = slug ? getPlayable(slug) : undefined;
  useDocumentTitle(playable ? `${playable.title} — Maksim Basov` : 'Maksim Basov');

  if (!playable) {
    return <Navigate to="/" replace />;
  }

  return (
    <main id="main" className={styles.page}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <Link className={styles.back} to="/#playables">
              ← All playables
            </Link>
            <h1 className="section__title">{playable.title}</h1>
            <p className={styles.meta}>
              {isFullGame(playable) ? 'Full game' : playable.dimension === '3d' ? '3D game' : '2D'} ·{' '}
              {playable.technology.join(' · ')} · {playable.buildSizeMb} MB · {playable.role}
            </p>
          </div>
        </div>
        <p className="section__lede">{playable.summary}</p>
        <div className={styles.player}>
          <PlayablePlayer playable={playable} autoPlay showFullscreenLink={false} />
        </div>
      </div>
    </main>
  );
}

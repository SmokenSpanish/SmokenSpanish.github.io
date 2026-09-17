import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { isFullGame, type Playable, type PlayableOrientation } from '@/data/playables';
import { withBase } from '@/lib/base';
import styles from './PlayablePlayer.module.scss';

interface PlayablePlayerProps {
  playable: Playable;
  autoPlay?: boolean;
  showFullscreenLink?: boolean;
}

export function PlayablePlayer({
  playable,
  autoPlay = false,
  showFullscreenLink = true,
}: PlayablePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [orientation, setOrientation] = useState<PlayableOrientation>(playable.orientation);
  const titleId = useId();
  const src = withBase(`playables/${playable.slug}/index.html`);
  const fullGame = isFullGame(playable);
  const overlayHint = fullGame ? 'Full HTML5 game' : playable.dimension === '3d' ? '3D game' : 'Play in the browser';

  return (
    <div className={styles.shell}>
      <div className={styles.frameWrap}>
        <div className={styles.frame} data-orientation={orientation}>
          {isPlaying ? (
            <iframe
              className={styles.iframe}
              src={src}
              title={`${playable.title} ${fullGame ? 'game' : 'playable'} demo`}
              loading="lazy"
              allow="autoplay; fullscreen"
            />
          ) : (
            <button type="button" className={styles.overlay} onClick={() => setIsPlaying(true)}>
              <span className={styles.overlayTitle} id={titleId}>
                {playable.title}
              </span>
              <span className={styles.overlayHint}>
                {overlayHint} · {playable.buildSizeMb} MB
                build
              </span>
              <span className="btn btn--primary">Play</span>
            </button>
          )}
        </div>
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.control}
          aria-pressed={orientation === 'portrait'}
          onClick={() => setOrientation('portrait')}
        >
          Mobile
        </button>
        <button
          type="button"
          className={styles.control}
          aria-pressed={orientation === 'landscape'}
          onClick={() => setOrientation('landscape')}
        >
          Desktop
        </button>
        {isPlaying ? (
          <button type="button" className={styles.control} onClick={() => setIsPlaying(false)}>
            Reset
          </button>
        ) : null}
        {showFullscreenLink ? (
          <Link className={styles.control} to={`/play/${playable.slug}`}>
            Full screen
          </Link>
        ) : null}
      </div>
    </div>
  );
}

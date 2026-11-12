import { site } from '@/data/site';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          {site.name} · {site.studio}, {site.studioLocation}
        </p>
        <div className={styles.links}>
          <a href={site.telegramUrl}>Telegram</a>
          <a href={site.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

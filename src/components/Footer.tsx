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
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.telegramUrl}>Telegram</a>
          <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={site.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

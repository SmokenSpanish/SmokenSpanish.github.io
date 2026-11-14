import { Link } from 'react-router-dom';
import { site, hero } from '@/data/site';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.copy}>
          <p className="kicker">{hero.kicker}</p>
          <p className={styles.role}>
            {site.name} · {site.role}
          </p>
          <h1 className={styles.headline}>{hero.headline}</h1>
          <p className={styles.lede}>{hero.lede}</p>
          <div className={styles.actions}>
            <a className="btn btn--primary" href="#playables">
              Play the work
            </a>
            <Link className="btn btn--ghost" to="/resume">
              Resume
            </Link>
          </div>
        </div>
        <dl className={styles.facts}>
          <div className={styles.fact}>
            <b>~60 playables shipped</b>
            <span>14 months · Cocos Creator, PixiJS · 2D and 3D</span>
          </div>
          <div className={styles.fact}>
            <b>5+ years commercial</b>
            <span>4 years React / Vue, then playable ads</span>
          </div>
          <div className={styles.fact}>
            <b>Rapid prototyping</b>
            <span>Draft playable in about two days</span>
          </div>
        </dl>
      </div>
    </section>
  );
}

import { education, experience } from '@/data/experience';
import { site } from '@/data/site';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { withBase } from '@/lib/base';
import styles from './ResumePage.module.scss';

export function ResumePage() {
  useDocumentTitle('Resume — Maksim Basov');
  return (
    <main id="main" className={styles.page}>
      <div className={`container ${styles.doc}`}>
        <header className={styles.header}>
          <h1 className={styles.name}>{site.name}</h1>
          <p className={styles.role}>
            {site.role} specializing in {site.specialty}
          </p>
          <p className={styles.contacts}>
            <span>{site.location}</span>
            <span>{site.availability}</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.telegramUrl}>Telegram {site.telegramHandle}</a>
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp {site.whatsappLabel}
            </a>
            <a href={site.githubUrl} target="_blank" rel="noreferrer">
              {site.githubLabel}
            </a>
          </p>
          <p className={styles.download}>
            <a className="btn btn--ghost" href={withBase(site.cvPdf)} download>
              Download PDF
            </a>
          </p>
        </header>

        <section className={styles.block}>
          <h2>Summary</h2>
          <p>
            Developer with 5+ years of commercial experience: 4 years of product frontend (React, Vue) and 14
            months of HTML5 playable ads at {site.studio} ({site.studioLocation}, remote).
          </p>
          <p>
            Shipped around 60 commercial playables in 14 months — up to 10 a month — in Cocos Creator
            (TypeScript/JavaScript), 2D and 3D. I own a playable end to end: gameplay, physics, UI, animation,
            assets, performance, and network-ready builds. A working draft usually takes about two days.
          </p>
          <p>
            Before playables: production web applications in React and Vue — responsive UI, client logic, REST
            APIs, refactoring, and support.
          </p>
          <p>
            AI-assisted development is part of my production workflow. Software development is the core skill.
          </p>
        </section>

        <section className={styles.block}>
          <h2>Skills</h2>
          <p>
            Playable ads: HTML5, 2D and 3D playables, gameplay and physics (Box2D), build size, performance,
            asset loading, single-file packed builds.
          </p>
          <p>Ad networks: AppLovin, Google, Mintegral, TikTok, Moloco, Facebook, Unity, ironSource.</p>
          <p>Game engines: Cocos Creator 3.8 (main production tool), Godot / GDScript (personal projects).</p>
          <p>Frontend: JavaScript, TypeScript, React, Vue, HTML, CSS/SCSS.</p>
          <p>Tooling: Git, Webpack/Vite, Node.js build scripts, Figma.</p>
          <p>Markets: playables for Europe and Asia, localized copy and geo-aware currency.</p>
          <p>Languages: English — fluent. Russian — fluent.</p>
        </section>

        <section className={styles.block}>
          <h2>Experience</h2>
          {experience.map((item) => (
            <article className={styles.job} key={`${item.company}-${item.start}`}>
              <h3>
                {item.role} · {item.company}
              </h3>
              <p className={styles.when}>
                {item.start} – {item.end}
                {item.meta ? ` · ${item.meta}` : ''}
              </p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {item.links ? (
                <p className={styles.links}>
                  {item.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </p>
              ) : null}
            </article>
          ))}
        </section>

        <section className={styles.block}>
          <h2>Education</h2>
          {education.map((item) => (
            <article className={styles.job} key={item.title}>
              <h3>{item.title}</h3>
              <p className={styles.when}>{item.period}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

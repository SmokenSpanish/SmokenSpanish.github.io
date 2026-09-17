import { education, experience } from '@/data/experience';
import { site } from '@/data/site';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
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
            <a href={site.telegramUrl}>{site.telegramHandle}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </header>

        <section className={styles.block}>
          <h2>Summary</h2>
          <p>
            Frontend developer with 5+ years of commercial experience, currently focused on HTML5 playable ads
            at {site.studio} ({site.studioLocation}).
          </p>
          <p>
            I implement HTML5 playables in Cocos Creator — 2D and 3D. Gameplay, interaction, UI, animation,
            asset handling, performance, and network-ready builds. Previously: production web apps in React
            and Vue.
          </p>
          <p>
            AI-assisted development is part of the workflow. Software development is the core skill.
          </p>
        </section>

        <section className={styles.block}>
          <h2>Skills</h2>
          <p>
            Playable ads: Cocos Creator, HTML5, 2D and 3D playables, build size, performance, asset loading, ad
            networks.
          </p>
          <p>Used to working for Europe and Asia. Playables adapted for any language.</p>
          <p>Frontend: JavaScript, TypeScript, React, Vue, HTML, CSS/SCSS.</p>
          <p>Languages: Russian — native. English — fluent (non-native).</p>
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

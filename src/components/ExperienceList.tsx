import { experience } from '@/data/experience';
import styles from './ExperienceList.module.scss';

export function ExperienceList() {
  return (
    <div className={styles.list}>
      {experience.map((item) => (
        <article className={styles.item} key={`${item.company}-${item.start}`}>
          <p className={styles.dates}>
            {item.start} – {item.end}
          </p>
          <div>
            <p className={styles.company}>{item.company}</p>
            <h3 className={styles.role}>{item.role}</h3>
            {item.meta ? <p className={styles.meta}>{item.meta}</p> : null}
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

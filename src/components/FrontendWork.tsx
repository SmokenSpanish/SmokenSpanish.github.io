import { frontendProjects } from '@/data/experience';
import styles from './FrontendWork.module.scss';

export function FrontendWork() {
  return (
    <div className={styles.grid}>
      {frontendProjects.map((project) => (
        <a key={project.href} className={styles.card} href={project.href} target="_blank" rel="noreferrer">
          <h3>{project.title}</h3>
          <p>{project.note}</p>
        </a>
      ))}
    </div>
  );
}

import styles from './Process.module.scss';

const items = [
  {
    title: 'Gameplay first',
    text: 'Interaction, rules, UI, and animation — not only the visual wrap. The playable has to play.',
  },
  {
    title: 'HTML5 constraints',
    text: 'Packed builds, asset loading, performance, and ad-network formats. Size is a product requirement.',
  },
  {
    title: 'AI-assisted, then owned',
    text: 'I specify the task, use AI to move faster, then review, debug, reshape architecture, and ship.',
  },
];

export function Process() {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <article className={styles.item} key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

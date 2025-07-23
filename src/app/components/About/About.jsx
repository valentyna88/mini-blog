import styles from "./About.module.css";

export default function About({ dict }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{dict.about.title}</h1>
      <p className={styles.desc}>{dict.about.desc}</p>
      <h3 className={styles.subtitle}>{dict.about.team}</h3>
      <ul className={styles.list}>
        {dict.about.names.map((name, idx) => (
          <li key={idx} className={styles.item}>
            {name}
          </li>
        ))}
      </ul>
      <p className={styles.note}>{dict.about.note}</p>
    </div>
  );
}

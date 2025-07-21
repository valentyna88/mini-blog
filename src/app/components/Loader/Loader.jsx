import styles from "./Loader.module.css";

export default function Loader({ text = "Loading..." }) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderText}>{text}</div>
      <div className={styles.spinner} />
    </div>
  );
}

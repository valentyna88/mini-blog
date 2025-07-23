import styles from "./Footer.module.css";

export default function Footer({ dict }) {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} Valentyna Taranchuk —{" "}
      {dict.footer?.copyright}
    </footer>
  );
}

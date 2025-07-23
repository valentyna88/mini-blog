import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";

export default function Header({ dict, locale }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.link} href={`/${locale}`}>
          {dict.nav.home}
        </Link>
        <Link className={styles.link} href={`/${locale}/about`}>
          {dict.nav.about}
        </Link>
      </nav>
      <div className={styles.switcher}>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

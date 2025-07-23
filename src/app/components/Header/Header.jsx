"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";

export default function Header({ dict, locale }) {
  const pathname = usePathname();

  const homePath = `/${locale}`;
  const aboutPath = `/${locale}/about`;

  const isHomeActive =
    pathname === homePath || pathname.startsWith(`/${locale}/posts`);
  const isAboutActive = pathname === aboutPath;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          href={homePath}
          className={`${styles.link} ${isHomeActive ? styles.active : ""}`}
        >
          {dict.nav.home}
        </Link>
        <Link
          href={aboutPath}
          className={`${styles.link} ${isAboutActive ? styles.active : ""}`}
        >
          {dict.nav.about}
        </Link>
      </nav>
      <div className={styles.switcher}>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./LanguageSwitcher.module.css";

const FLAGS = {
  en: (
    <svg width="20" height="14" viewBox="0 0 60 42">
      <rect width="60" height="42" fill="#00247d" />
      <rect width="60" height="6" y="18" fill="#fff" />
      <rect width="6" height="42" x="27" fill="#fff" />
      <rect width="60" height="4" y="19" fill="#cf142b" />
      <rect width="4" height="42" x="28" fill="#cf142b" />
    </svg>
  ),
  uk: (
    <svg width="20" height="14" viewBox="0 0 60 42">
      <rect width="60" height="21" y="0" fill="#0057b7" />
      <rect width="60" height="21" y="21" fill="#ffd700" />
    </svg>
  ),
};

const LANGUAGES = [
  { code: "en", label: "En" },
  { code: "uk", label: "Uk" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const handleSwitch = (locale) => {
    if (locale === currentLocale) return;
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  return (
    <div className={styles.switcher}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSwitch(lang.code)}
          disabled={lang.code === currentLocale}
          className={`${styles.langBtn} ${
            lang.code === currentLocale ? styles.active : ""
          }`}
        >
          <span>{FLAGS[lang.code]}</span>
          {lang.label}
        </button>
      ))}
    </div>
  );
}

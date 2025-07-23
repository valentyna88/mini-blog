import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Header({ dict, locale }) {
  return (
    <header style={{ padding: "16px", borderBottom: "1px solid #eee" }}>
      <nav>
        <Link href={`/${locale}`}>{dict.nav.home}</Link>
        <Link href={`/${locale}/about`} style={{ marginLeft: "16px" }}>
          {dict.nav.about}
        </Link>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}

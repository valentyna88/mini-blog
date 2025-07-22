import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import { getDictionary } from "../dictionaries";
import Link from "next/link";

export const metadata = {
  title: "Mini Blog",
  description: "A multilingual blog built with Next.js",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "uk" }];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <header style={{ padding: "16px", borderBottom: "1px solid #eee" }}>
        <nav>
          <Link href={`/${locale}`}>{dict.nav.home}</Link>
          <Link href={`/${locale}/about`} style={{ marginLeft: "16px" }}>
            {dict.nav.about}
          </Link>
        </nav>
        <LanguageSwitcher />
      </header>
      <main style={{ minHeight: "70vh", padding: "16px" }}>{children}</main>
      <footer
        style={{
          padding: "16px",
          borderTop: "1px solid #eee",
          textAlign: "center",
        }}
      >
        &copy; {new Date().getFullYear()} Valentyna Taranchuk{" "}
        {dict.footer.copyright}
      </footer>
    </>
  );
}

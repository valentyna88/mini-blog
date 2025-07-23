import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { getDictionary } from "../dictionaries";

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
      <Header dict={dict} locale={locale} />
      <main style={{ minHeight: "70vh", padding: "16px" }}>{children}</main>
      <Footer dict={dict} />
    </>
  );
}

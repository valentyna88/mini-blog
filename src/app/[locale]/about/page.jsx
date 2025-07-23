import { getDictionary } from "../../dictionaries";
import About from "@/app/components/About/About";

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return <About dict={dict} />;
}

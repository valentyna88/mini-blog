import { getDictionary } from "../dictionaries";
import PostsList from "../components/PostsList/PostsList";

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return <PostsList posts={posts} dict={dict} locale={locale} />;
}

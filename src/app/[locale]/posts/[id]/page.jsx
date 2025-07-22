import { getDictionary } from "../../../dictionaries";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return ["en", "uk"].flatMap((locale) =>
    posts.map((post) => ({
      locale,
      id: post.id.toString(),
    }))
  );
}

export default async function PostPage(props) {
  const params = await props.params;
  const { id, locale } = params;

  const dict = getDictionary(locale);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    notFound();
  }

  const post = await res.json();

  if (!post.id) {
    notFound();
  }

  return (
    <div>
      <h1>{dict.posts?.title ?? post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

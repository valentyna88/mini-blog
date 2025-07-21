import Link from "next/link";

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");

  const posts = await res.json();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "12px" }}>
            <b>{post.title}</b>
            <br />
            <Link href={`/posts/${post.id}`}>
              <button style={{ marginTop: "4px" }}>Read more</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

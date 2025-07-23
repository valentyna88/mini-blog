import Link from "next/link";
import styles from "./PostsList.module.css";

export default function PostsList({ posts, dict, locale }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{dict.posts.title}</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.id} className={styles.item}>
            <p className={styles.postTitle}>{post.title}</p>
            <Link href={`/${locale}/posts/${post.id}`}>
              <button className={styles.button}>{dict.posts.read_more}</button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

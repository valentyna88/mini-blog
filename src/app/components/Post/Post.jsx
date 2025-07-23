import styles from "./Post.module.css";

export default function Post({ post }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{post.title}</h1>
      <article className={styles.body}>{post.body}</article>
    </section>
  );
}

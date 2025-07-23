import { getDictionary } from "../../dictionaries";

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "24px" }}>
      <h1>{dict.about.title}</h1>
      <p style={{ marginBottom: "32px" }}>{dict.about.desc}</p>
      <h3>{dict.about.team}</h3>
      <ul>
        {dict.about.names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
      <p style={{ marginTop: "32px" }}>{dict.about.note}</p>
    </div>
  );
}

export default function About({ dict }) {
  return (
    <div>
      <h1>{dict.about.title}</h1>
      <p>{dict.about.desc}</p>
      <h3>{dict.about.team}</h3>
      <ul>
        {dict.about.names.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
      <p>{dict.about.note}</p>
    </div>
  );
}

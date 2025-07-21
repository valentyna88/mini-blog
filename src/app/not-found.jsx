import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "48px" }}>
      <h1>404 — Page Not Found</h1>
      <p>
        Sorry, the page you are looking for does not exist.
        <br />
        Please check the URL or return to the homepage.
      </p>
      <Link href="/">
        <button style={{ marginTop: 16, padding: "8px 24px" }}>
          Go to Home
        </button>
      </Link>
    </div>
  );
}

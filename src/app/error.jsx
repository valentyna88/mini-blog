"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: "center", marginTop: "48px" }}>
      <h1>Something went wrong</h1>
      <p>
        Sorry, an unexpected error occurred.
        <br />
        Please try again, or go back to the homepage.
      </p>
      <button onClick={() => reset()} style={{ margin: "16px" }}>
        Try again
      </button>
      <a href="/" style={{ display: "inline-block", marginTop: "8px" }}>
        <button>Go to Home</button>
      </a>
    </div>
  );
}

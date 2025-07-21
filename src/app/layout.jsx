export const metadata = {
  title: "Mini Blog",
  description: "A multilingual blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "16px", borderBottom: "1px solid #eee" }}>
          <nav>
            <a href="/" style={{ marginRight: 16 }}>
              Home
            </a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main style={{ minHeight: "70vh", padding: "16px" }}>{children}</main>
        <footer
          style={{
            padding: "16px",
            borderTop: "1px solid #eee",
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} Valentyna Taranchuk Mini Blog.
        </footer>
      </body>
    </html>
  );
}

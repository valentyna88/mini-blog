export const metadata = {
  title: "Mini Blog",
  description: "A multilingual blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

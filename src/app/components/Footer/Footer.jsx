export default function Footer({ dict }) {
  return (
    <footer
      style={{
        padding: "16px",
        borderTop: "1px solid #eee",
        textAlign: "center",
      }}
    >
      &copy; {new Date().getFullYear()} Valentyna Taranchuk{" "}
      {dict.footer.copyright}
    </footer>
  );
}

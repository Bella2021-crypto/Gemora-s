export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gemora. All rights reserved.</p>
      <style jsx>{`
        .footer {
          background: #111;
          color: #aaa;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </footer>
  );
}

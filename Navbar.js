import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/">
          <span className="logo">Gemora</span>
        </Link>
        <div className="links">
          <Link href="/listing">Listings</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background: black;
          padding: 1rem;
        }
        .nav-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: gold;
          cursor: pointer;
        }
        .links a {
          color: white;
          margin-left: 1rem;
          text-decoration: none;
        }
        .links a:hover {
          color: gold;
        }
      `}</style>
    </nav>
  );
}

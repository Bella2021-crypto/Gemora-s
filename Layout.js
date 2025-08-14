import Head from 'next/head';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Gemora` : 'Gemora'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="layout">
        <header className="header">
          <h1>Gemora</h1>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Gemora. All rights reserved.</p>
        </footer>
      </div>

      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .header {
          background: black;
          color: white;
          padding: 1rem;
          text-align: center;
        }
        main {
          flex: 1;
          padding: 1rem;
        }
        .footer {
          background: #111;
          color: #aaa;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </>
  );
}

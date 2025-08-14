import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Gemora` : 'Gemora'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="layout">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        main {
          flex: 1;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}

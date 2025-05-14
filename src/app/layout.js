// src/app/layout.js
import '../styles/globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

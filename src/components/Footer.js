export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="/#accueil" aria-label="GQIM — Accueil">
          <span className="brand-mark">G<span>Q</span></span>
          <span className="brand-name">GQIM</span>
        </a>
        <p>© {new Date().getFullYear()} GQIM — Développement web sur mesure.</p>
        <div className="footer-links">
          <a href="mailto:gqinformatiques@gmail.com">E-mail</a>
          <a href="tel:+33644036473">06 44 03 64 73</a>
          <a
            href="https://www.malt.fr/profile/quentingarcia"
            target="_blank"
            rel="noreferrer"
          >
            Malt
          </a>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <Link className="brand footer-brand" href="/#accueil" aria-label="GQIM — Accueil">
            <span className="brand-mark">G<span>Q</span></span>
            <span className="brand-name">GQIM</span>
          </Link>
          <p>Sites internet et applications sur mesure pour indépendants, artisans et petites entreprises.</p>
          <Link className="footer-cta" href="/#contact">Demander un devis gratuit</Link>
        </div>
        <div className="footer-column">
          <strong>Services</strong>
          <Link href="/creation-site-internet">Création de site</Link>
          <Link href="/site-vitrine">Site vitrine</Link>
          <Link href="/application-web">Application web</Link>
          <Link href="/maintenance-site-web">Maintenance</Link>
          <Link href="/referencement-seo">Référencement SEO</Link>
        </div>
        <div className="footer-column">
          <strong>GQIM</strong>
          <Link href="/realisations">Réalisations</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/methode">Méthode</Link>
          <a href="https://www.malt.fr/profile/quentingarcia" target="_blank" rel="noreferrer">Malt</a>
          <a href="https://fr.linkedin.com/in/quentingar" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:gqinformatiques@gmail.com">E-mail</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} GQIM — Quentin Garcia.</p>
        <div>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-confidentialite">Confidentialité</Link>
          <a href="tel:+33644036473">06 44 03 64 73</a>
        </div>
      </div>
    </footer>
  );
}

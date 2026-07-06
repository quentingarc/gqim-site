import Link from "next/link";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site GQIM, édité par Quentin Garcia.",
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    title: "Mentions légales | GQIM",
    description: "Mentions légales du site GQIM.",
    url: "/mentions-legales",
  },
};

export default function LegalPage() {
  return (
    <article className="legal-page">
      <header className="legal-hero">
        <div className="container">
          <span className="section-kicker">Informations légales</span>
          <h1>Mentions légales</h1>
          <p>Dernière mise à jour : 6 juillet 2026</p>
        </div>
      </header>
      <div className="container legal-content">
        <section>
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>gqim.fr</strong> est édité par Quentin Garcia,
            entrepreneur individuel exerçant sous le nom commercial GQIM
            (micro-entreprise).
          </p>
          <ul>
            <li>Nom : Quentin Garcia — GQIM</li>
            <li>SIREN : 942 927 815</li>
            <li>SIRET : 942 927 815 00012</li>
            <li>Adresse de domiciliation : 4 impasse des 4 Vents, Médis, France</li>
            <li>E-mail : <a href="mailto:gqinformatiques@gmail.com">gqinformatiques@gmail.com</a></li>
            <li>Téléphone : <a href="tel:+33644036473">06 44 03 64 73</a></li>
          </ul>
        </section>

        <section>
          <h2>Responsable de la publication</h2>
          <p>Quentin Garcia, éditeur et responsable de la publication.</p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par <strong>o2switch</strong>, Chemin des
            Pardiaux, 63000 Clermont-Ferrand, France — 04 44 44 60 40 —
            <a href="https://www.o2switch.fr/" target="_blank" rel="noreferrer"> o2switch.fr</a>.
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, éléments graphiques, interfaces, photographies et
            autres contenus présents sur ce site sont protégés par le droit de
            la propriété intellectuelle. Sauf mention contraire, ils
            appartiennent à GQIM ou sont utilisés avec l’autorisation de leurs
            titulaires. Toute reproduction ou adaptation nécessite une
            autorisation écrite préalable.
          </p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            GQIM s’efforce de fournir des informations exactes et à jour, sans
            pouvoir garantir l’absence totale d’erreur ou d’interruption. Les
            liens externes sont proposés à titre informatif ; GQIM n’exerce
            aucun contrôle sur leur contenu.
          </p>
        </section>

        <section>
          <h2>Données personnelles</h2>
          <p>
            Les modalités de traitement des demandes de contact et d’exercice
            de vos droits sont décrites dans la{" "}
            <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
          </p>
        </section>
      </div>
    </article>
  );
}

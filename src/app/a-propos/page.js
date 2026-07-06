import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "À propos de Quentin Garcia",
  description:
    "Quentin Garcia, développeur web full-stack diplômé d’Epitech et fondateur de GQIM. Sites et applications à Royan, Bordeaux et à distance.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos de Quentin Garcia | GQIM",
    description:
      "Développeur web full-stack diplômé d’Epitech et fondateur de GQIM.",
    url: "/a-propos",
  },
};

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

export default function AboutPage() {
  return (
    <article className="profile-page">
      <section className="profile-page-hero">
        <div className="container profile-page-layout">
          <div>
            <span className="section-kicker">À propos</span>
            <h1>Quentin Garcia, développeur web full-stack et fondateur de GQIM.</h1>
            <p>
              J’accompagne les indépendants, artisans et entreprises dans la
              création de sites internet modernes, rapides et faciles à gérer.
            </p>
            <Link className="button button-primary" href="/#contact">
              Me parler de votre projet <Arrow />
            </Link>
          </div>
          <div className="profile-page-photo">
            <Image
              src="/quentin-garcia.webp"
              alt="Quentin Garcia, développeur web full-stack"
              width={640}
              height={640}
              priority
            />
            <span>Diplômé Epitech · Fondateur de GQIM</span>
          </div>
        </div>
      </section>

      <section className="profile-story">
        <div className="container profile-story-layout">
          <div>
            <span className="section-kicker">Mon approche</span>
            <h2>Comprendre le métier avant de choisir la technologie.</h2>
          </div>
          <div className="profile-story-copy">
            <p>
              Un site réussi ne se résume pas à une belle interface. Il doit
              rendre votre offre évidente, rassurer, fonctionner rapidement et
              vous apporter des contacts. Je commence donc par comprendre votre
              activité, vos clients et vos contraintes.
            </p>
            <p>
              Ma formation à Epitech m’a apporté une culture de l’autonomie, de
              la résolution de problèmes et du travail en équipe. Aujourd’hui,
              je mobilise cette méthode sur des sites vitrines comme sur des
              applications et outils métier plus complexes.
            </p>
            <p>
              Avec GQIM, activité exercée en micro-entreprise, vous échangez
              directement avec la personne qui cadre, développe et suit votre
              projet.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-skills">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Compétences</span>
              <h2>Une vision complète, <em>du front-end au déploiement.</em></h2>
            </div>
            <p>Je sélectionne les outils selon le projet, son existant et sa capacité à évoluer.</p>
          </div>
          <div className="skill-groups">
            <article><span>Front-end</span><h3>React, Vue, Next.js</h3><p>Interfaces rapides, accessibles et adaptées à tous les écrans.</p></article>
            <article><span>Langages</span><h3>TypeScript, JavaScript, PHP</h3><p>Un code lisible et structuré pour des fonctionnalités durables.</p></article>
            <article><span>Back-end</span><h3>Symfony, API, données</h3><p>Logique métier, connexions aux services et gestion des informations.</p></article>
            <article><span>Livraison</span><h3>Git, DevOps, hébergement</h3><p>Tests, mise en ligne et accompagnement après le lancement.</p></article>
          </div>
        </div>
      </section>

      <section className="profile-area">
        <div className="container profile-area-layout">
          <div>
            <span className="section-kicker">Zone d’intervention</span>
            <h2>Proche de vous, même à distance.</h2>
            <p>
              Je travaille avec des clients à Royan, Bordeaux, en
              Charente-Maritime, en Gironde et partout en France. Les échanges
              sont organisés simplement : rendez-vous, points réguliers et
              livrables partagés.
            </p>
          </div>
          <div className="area-list">
            <Link href="/creation-site-internet-royan">Royan <Arrow /></Link>
            <Link href="/creation-site-internet-bordeaux">Bordeaux <Arrow /></Link>
            <span>Charente-Maritime</span>
            <span>Gironde</span>
            <span>À distance · France</span>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <span className="section-kicker light">Travaillons ensemble</span>
          <h2>Un échange suffit pour clarifier la prochaine étape.</h2>
          <Link href="/#contact">Me contacter <Arrow /></Link>
        </div>
      </section>
    </article>
  );
}

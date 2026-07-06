import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Réalisations web",
  description:
    "Découvrez les réalisations de GQIM : site vitrine pour LV Jardin, interfaces de dashboard et projets de développement.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations web | GQIM",
    description:
      "Sites vitrines, interfaces de dashboard et projets de développement réalisés par Quentin Garcia.",
    url: "/realisations",
  },
};

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

const projects = [
  {
    number: "01",
    type: "Site vitrine · Artisan local",
    title: "LV Jardin",
    description:
      "Création d’un site vitrine pour un jardinier paysagiste à Royan. Le parcours présente clairement les prestations, valorise le savoir-faire local et simplifie la demande de contact.",
    result:
      "Une présence professionnelle cohérente avec le métier et accessible sur tous les écrans.",
    technologies: ["Next.js", "React", "Responsive design", "SEO local"],
    kind: "image",
    href: "https://www.lv-jardin.fr/",
  },
  {
    number: "02",
    type: "Application métier · Reporting",
    title: "Dashboard RNDV",
    description:
      "Travail sur des interfaces de dashboard et de reporting destinées à rendre des indicateurs métier plus lisibles. Les données et détails confidentiels ne sont volontairement pas présentés.",
    result:
      "Des informations regroupées dans une interface plus rapide à consulter et à exploiter.",
    technologies: ["Vue.js", "TypeScript", "Data visualisation", "API"],
    kind: "dashboard",
  },
  {
    number: "03",
    type: "Formation · Projets en équipe",
    title: "Projets Epitech",
    description:
      "Réalisation de projets techniques individuels et collectifs : architecture, algorithmie, développement web et livraison dans des contraintes proches du monde professionnel.",
    result:
      "Une méthode solide pour analyser un problème, collaborer et livrer un produit fonctionnel.",
    technologies: ["C / C++", "Web", "Git", "Travail en équipe"],
    kind: "code",
  },
];

function ProjectVisual({ project }) {
  if (project.kind === "image") {
    return (
      <Image
        src="/lv-jardin-garden.webp"
        alt="Aperçu du projet de site internet LV Jardin"
        fill
        sizes="(max-width: 860px) 100vw, 52vw"
      />
    );
  }

  if (project.kind === "dashboard") {
    return (
      <div className="case-dashboard" aria-label="Aperçu stylisé et non confidentiel d’un dashboard">
        <div className="case-sidebar"><i /><i /><i /><i /></div>
        <div className="case-dashboard-main">
          <div className="case-dashboard-head"><span /><span /></div>
          <div className="case-stats"><i /><i /><i /></div>
          <div className="case-chart"><span /><span /><span /><span /><span /><span /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-code">
      <span>epitech/projects</span>
      <pre><code>{`const build = (idea) => {\n  analyse();\n  collaborate();\n  ship();\n};`}</code></pre>
    </div>
  );
}

export default function RealisationsPage() {
  return (
    <article className="case-page">
      <section className="case-hero">
        <div className="container">
          <span className="section-kicker">Portfolio</span>
          <h1>Mes réalisations en création de site web et développement d’application.</h1>
          <p>
            Des projets publics, personnels ou présentés sans données
            confidentielles. Pour chacun : un besoin, des choix techniques et
            un résultat concret.
          </p>
        </div>
      </section>

      <section className="case-list">
        <div className="container">
          {projects.map((project, index) => (
            <article className="case-card" key={project.title}>
              <div className={`case-visual case-visual-${project.kind}`}>
                <ProjectVisual project={project} />
              </div>
              <div className="case-copy">
                <div className="case-meta">
                  <span>{project.number}</span>
                  <small>{project.type}</small>
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="case-result">
                  <span>Résultat</span>
                  <p>{project.result}</p>
                </div>
                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                {project.href && (
                  <a
                    className="text-link"
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    Visiter le site <Arrow />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <span className="section-kicker light">Le prochain projet ?</span>
          <h2>Construisons une réalisation utile à votre activité.</h2>
          <Link href="/#contact">Demander un devis gratuit <Arrow /></Link>
        </div>
      </section>
    </article>
  );
}

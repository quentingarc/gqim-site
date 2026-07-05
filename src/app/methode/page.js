import Link from "next/link";
import { methodSteps } from "@/data/method";

const methodIcons = {
  listen: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 8h18M8 8v13M11 12h6M11 16h4" />
    </svg>
  ),
  development: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
    </svg>
  ),
  launch: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5c2.5-2.5 5-2 5-2s.5 2.5-2 5l-5 5-4-4 6-4Z" />
      <path d="m8 9-3 1-2 3 5 1M12 13l-1 5-3 2-1-5M9 15l-2 2" />
    </svg>
  ),
};

const principles = [
  {
    title: "Transparence",
    text: "Vous savez où en est le projet, ce qui est terminé et ce qui reste à faire.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Échanges directs",
    text: "Vous parlez directement avec la personne qui conçoit et développe votre solution.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v12H8l-4 4V5Z" />
        <path d="M8 10h8M8 13h5" />
      </svg>
    ),
  },
  {
    title: "Qualité durable",
    text: "Les choix techniques sont pensés pour faciliter la maintenance et les futures évolutions.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
  },
];

export const metadata = {
  title: "Méthode de travail — GQIM",
  description:
    "Découvrez la méthode GQIM : cadrage, conception, développement, tests, mise en ligne et suivi.",
};

export default function MethodePage() {
  return (
    <article className="method-page">
      <section className="method-hero">
        <div className="method-hero-grid" aria-hidden="true" />
        <div className="container">
          <Link className="service-back" href="/#methode">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M16 10H5M9 5l-5 5 5 5" />
            </svg>
            Retour à l’accueil
          </Link>
          <div className="method-hero-content">
            <span className="section-kicker">Ma façon de travailler</span>
            <h1>Une méthode claire pour avancer sans perdre de temps.</h1>
            <p>
              Chaque projet suit des étapes simples, visibles et validées
              ensemble. Vous restez impliqué sans avoir à gérer la complexité
              technique.
            </p>
          </div>
          <div className="method-summary">
            {methodSteps.map((step) => (
              <div className="method-summary-step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <small>Étape</small>
                  <strong>{step.shortTitle}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="method-steps">
        <div className="container">
          <div className="method-section-heading">
            <span className="section-kicker">Les étapes du projet</span>
            <h2>Vous savez toujours où nous allons.</h2>
          </div>
          <div className="method-step-list">
            {methodSteps.map((step) => (
              <article className="method-step-card" key={step.number}>
                <div className="method-step-number">{step.number}</div>
                <div className="method-step-icon">
                  {methodIcons[step.iconKey]}
                </div>
                <div className="method-step-copy">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className="method-outputs">
                  <small>Livrables</small>
                  {step.outputs.map((output) => (
                    <span key={output}>{output}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="method-principles">
        <div className="container">
          <div className="method-principles-heading">
            <span className="section-kicker">Au quotidien</span>
            <h2>Une collaboration simple et efficace.</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.title}>
                <div>{principle.icon}</div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <span className="section-kicker light">Passons à la première étape</span>
          <h2>Parlez-moi de votre projet, je vous aide à le cadrer.</h2>
          <Link href="/#contact">
            Démarrer le questionnaire
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h11M11 5l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </section>
    </article>
  );
}

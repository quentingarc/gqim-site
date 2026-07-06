import Link from "next/link";

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

export function createServiceMetadata(service) {
  return {
    title: service.eyebrow,
    description: service.description,
    alternates: { canonical: service.slug },
    openGraph: {
      title: `${service.eyebrow} | GQIM`,
      description: service.description,
      url: service.slug,
    },
  };
}

export default function SeoServicePage({ service }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.eyebrow,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: "GQIM",
      url: "https://gqim.fr",
      founder: { "@type": "Person", name: "Quentin Garcia" },
      areaServed: ["Royan", "Bordeaux", "Charente-Maritime", "Gironde", "France"],
    },
    url: `https://gqim.fr${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <article className="seo-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="seo-hero">
        <div className="seo-hero-grid" aria-hidden="true" />
        <div className="container seo-hero-layout">
          <div>
            <div className="seo-breadcrumb">
              <Link href="/">Accueil</Link><span>/</span><span>{service.eyebrow}</span>
            </div>
            <span className="section-kicker">{service.eyebrow}</span>
            <h1>{service.title}</h1>
            <p>{service.lead}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#contact">
                Demander un devis gratuit <Arrow />
              </Link>
              <Link className="button button-ghost" href="/realisations">
                Voir mes réalisations
              </Link>
            </div>
          </div>
          <aside className="seo-hero-card">
            <span>Votre projet en bref</span>
            <dl>
              <div><dt>Budget indicatif</dt><dd>{service.price}</dd></div>
              <div><dt>Délai indicatif</dt><dd>{service.delay}</dd></div>
              <div><dt>Pour qui ?</dt><dd>{service.audience}</dd></div>
            </dl>
            <Link href="/#contact">Décrire mon besoin <Arrow /></Link>
          </aside>
        </div>
      </section>

      <section className="seo-section seo-problems">
        <div className="container">
          <div className="seo-section-heading">
            <span className="section-kicker">Le point de départ</span>
            <h2>Votre site doit résoudre un problème, pas simplement occuper une URL.</h2>
          </div>
          <div className="seo-card-grid">
            {service.problems.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section seo-solution">
        <div className="container seo-solution-layout">
          <div>
            <span className="section-kicker">La solution GQIM</span>
            <h2>{service.solutionTitle}</h2>
            <p>{service.solution}</p>
            <Link className="text-link" href="/methode">Découvrir ma méthode <Arrow /></Link>
          </div>
          <ul className="seo-deliverables">
            {service.deliverables.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="seo-section seo-proof">
        <div className="container seo-proof-card">
          <div>
            <span className="section-kicker">Un exemple concret</span>
            <h2>Des choix techniques reliés à un usage réel.</h2>
          </div>
          <div>
            <p>{service.example}</p>
            <Link className="button button-primary" href="/realisations">
              Explorer les réalisations <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="seo-section seo-faq">
        <div className="container seo-faq-layout">
          <div>
            <span className="section-kicker">Questions fréquentes</span>
            <h2>Avant de démarrer.</h2>
          </div>
          <div className="faq-list">
            {service.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <span className="section-kicker light">Un projet en tête ?</span>
          <h2>Recevez un devis clair et adapté à votre besoin.</h2>
          <Link href="/#contact">Demander un devis gratuit <Arrow /></Link>
        </div>
      </section>
    </article>
  );
}

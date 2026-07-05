import Link from "next/link";

const detailIcons = [
  <svg viewBox="0 0 24 24" aria-hidden="true" key="target">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="m15 9 5-5M16 4h4v4" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" key="screen">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M8 21h8M12 18v3M8 10l2-2M8 10l2 2M16 8l-2 2 2 2" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" key="performance">
    <path d="M4 17a8 8 0 1 1 16 0" />
    <path d="m12 14 4-4M7 17h10" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" key="launch">
    <path d="M14 5c2.5-2.5 5-2 5-2s.5 2.5-2 5l-5 5-4-4 6-4Z" />
    <path d="m8 9-3 1-2 3 5 1M12 13l-1 5-3 2-1-5M9 15l-2 2" />
  </svg>,
];

export default function ServiceDetail({ service }) {
  return (
    <article className="service-detail">
      <section className="service-detail-hero">
        <div className="service-detail-grid" aria-hidden="true" />
        <div className="container">
          <Link className="service-back" href="/#services">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M16 10H5M9 5l-5 5 5 5" />
            </svg>
            Tous les services
          </Link>
          <div className="service-detail-heading">
            <div>
              <span className="section-kicker">{service.eyebrow}</span>
              <h1>{service.title}</h1>
            </div>
            <span className="service-detail-number">{service.number}</span>
          </div>
          <div className="service-detail-intro">
            <p>{service.intro}</p>
            <strong>{service.highlight}</strong>
          </div>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="container">
          <div className="service-formats">
            {service.formats.map((format) => (
              <span key={format}>{format}</span>
            ))}
          </div>

          <div className="service-detail-layout">
            <div className="service-includes">
              <span className="section-kicker">Ce qui est inclus</span>
              <h2>Un accompagnement complet, de l’idée au lancement.</h2>
              <div className="deliverable-grid">
                {service.deliverables.map((item, index) => (
                  <article key={item.title}>
                    <span>0{index + 1}</span>
                    <div className="deliverable-icon">{detailIcons[index]}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="service-aside">
              <span className="section-kicker">Pour qui ?</span>
              <h3>Cette solution est idéale pour…</h3>
              <ul>
                {service.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/#contact">
                Décrire mon projet
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <span className="section-kicker light">Votre projet commence ici</span>
          <h2>Discutons de ce que nous pouvons construire ensemble.</h2>
          <Link href="/#contact">
            Répondre au questionnaire
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h11M11 5l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </section>
    </article>
  );
}

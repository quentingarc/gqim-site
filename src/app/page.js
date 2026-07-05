import Image from "next/image";
import Link from "next/link";
import ProjectQuestionnaire from "@components/ProjectQuestionnaire";
import { services } from "@/data/services";
import { methodSteps } from "@/data/method";

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

const serviceIcons = {
  site: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </svg>
  ),
  app: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10 5h4M11 19h2" />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5M13.5 5l-3 14" />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      <section className="hero" id="accueil">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <span className="status-dot" />
              Quentin Garcia · Fondateur de GQIM
            </div>
            <h1>
              Je transforme vos idées en
              <span> expériences digitales.</span>
            </h1>
            <p>
              Je conçois des sites vitrines, des applications web / mobile et
              des solutions sur mesure pour les entreprises qui veulent une
              présence digitale claire, rapide et mémorable.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Parler de votre projet <Arrow />
              </a>
              <a className="button button-ghost" href="#services">
                Découvrir mes services
              </a>
            </div>
            <div className="hero-trust">
              <span>Design soigné</span>
              <i />
              <span>Code performant</span>
              <i />
              <span>100% sur mesure</span>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="profile-card">
              <div className="profile-card-top">
                <span><i /> Disponible pour de nouveaux projets</span>
                <small>GQIM / 2026</small>
              </div>

              <div className="profile-identity">
                <div className="profile-avatar">
                  <span>QG</span>
                </div>
                <div>
                  <small>Fondateur & développeur front-end</small>
                  <h2>Quentin Garcia</h2>
                </div>
              </div>

              <p className="profile-intro">
                J’accompagne les petites comme les grandes entreprises dans la
                création d’expériences numériques utiles, soignées et pensées
                pour leurs clients.
              </p>

              <div className="profile-company">
                <span className="profile-company-name">GQIM</span>
                <p>
                  Un interlocuteur unique pour imaginer, concevoir et faire
                  évoluer votre projet digital.
                </p>
              </div>

              <div className="profile-expertise">
                <span>
                  <small>Expertise</small>
                  Front-end, back-end & DevOps
                </span>
                <span>
                  <small>Projets</small>
                  Web & mobile
                </span>
                <span>
                  <small>Approche</small>
                  100% sur mesure
                </span>
              </div>
            </div>
          </div>
        </div>
        <a className="scroll-hint" href="#services" aria-label="Voir les services">
          <span />
          Découvrir
        </a>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Ce que je crée</span>
              <h2>Votre projet, pensé pour <em>faire la différence.</em></h2>
            </div>
            <p>
              De la première idée à la mise en ligne, je conçois des interfaces
              utiles, élégantes et adaptées aux besoins réels de votre activité.
            </p>
          </div>

          <div className="service-grid">
            {Object.values(services).map((service, index) => (
              <article
                className={`service-card${index === 0 ? " featured" : ""}`}
                data-reveal
                key={service.slug}
              >
                <div className="service-number">{service.number}</div>
                <div className="service-icon">
                  {serviceIcons[service.iconKey]}
                </div>
                <h3>{service.eyebrow}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link href={service.slug}>
                  Découvrir ce service <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="realisations">
        <div className="container">
          <div className="section-heading project-heading" data-reveal>
            <div>
              <span className="section-kicker">Projet réalisé</span>
              <h2>Du concret, pensé pour <em>un vrai métier.</em></h2>
            </div>
            <p>
              Une présence digitale n’a de valeur que lorsqu’elle sert
              réellement l’activité de l’entreprise.
            </p>
          </div>

          <article className="project-card" data-reveal>
            <a
              className="project-preview"
              href="https://www.lv-jardin.fr/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visiter le site LV Jardin"
            >
              <Image
                src="/lv-jardin-garden.webp"
                alt="Jardin paysager présenté sur le site LV Jardin"
                fill
                sizes="(max-width: 860px) 100vw, 65vw"
              />
              <span className="preview-browser">
                <i /><i /><i />
                <small>lv-jardin.fr</small>
              </span>
              <span className="project-site-overlay">
                <Image
                  src="/lv-jardin-logo.png"
                  alt="LV Jardin"
                  width={132}
                  height={60}
                />
                <small>Paysagiste à Royan et ses alentours</small>
                <strong>Un site qui fait respirer le savoir-faire local.</strong>
              </span>
              <span className="preview-link">
                Voir le site
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </span>
            </a>

            <div className="project-content">
              <div className="project-index">01 / LV JARDIN</div>
              <span className="project-type">Site vitrine · Artisan local</span>
              <h3>LV Jardin</h3>
              <p>
                Conception d’un site vitrine pour un jardinier paysagiste à
                Royan. L’objectif : présenter clairement les prestations,
                valoriser le savoir-faire local et faciliter les demandes de
                contact.
              </p>
              <div className="project-tags">
                <span>Design responsive</span>
                <span>Présentation des services</span>
                <span>Conversion locale</span>
              </div>
              <a
                className="project-cta"
                href="https://www.lv-jardin.fr/"
                target="_blank"
                rel="noreferrer"
              >
                Découvrir le projet <Arrow />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section advantages" id="expertise">
        <div className="container advantages-layout">
          <div className="advantages-visual" data-reveal>
            <div className="browser-window">
              <div className="browser-bar">
                <i /><i /><i />
                <span>votre-projet.fr</span>
              </div>
              <div className="browser-body">
                <span className="mock-label">Votre vision</span>
                <div className="mock-title" />
                <div className="mock-title short" />
                <div className="mock-lines">
                  <i /><i /><i />
                </div>
                <div className="mock-button" />
                <div className="mock-card one" />
                <div className="mock-card two" />
              </div>
            </div>
            <div className="quality-badge">
              <strong>100%</strong>
              <span>Responsive</span>
            </div>
          </div>

          <div className="advantages-copy" data-reveal>
            <span className="section-kicker">Une exigence à chaque pixel</span>
            <h2>Beau, oui. Mais surtout <em>efficace.</em></h2>
            <p className="lead">
              Un bon site ne se contente pas d’être esthétique. Il doit être
              rapide, accessible et guider naturellement vos visiteurs.
            </p>
            <div className="advantage-list">
              <div>
                <span>01</span>
                <section>
                  <h3>Design centré utilisateur</h3>
                  <p>Une navigation évidente et une identité qui vous ressemble.</p>
                </section>
              </div>
              <div>
                <span>02</span>
                <section>
                  <h3>Performance dès la conception</h3>
                  <p>Un code propre et léger pour une expérience instantanée.</p>
                </section>
              </div>
              <div>
                <span>03</span>
                <section>
                  <h3>Parfait sur tous les écrans</h3>
                  <p>Une interface précise du mobile jusqu’au grand écran.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process" id="methode">
        <div className="container">
          <div className="process-intro" data-reveal>
            <span className="section-kicker">Ma méthode</span>
            <h2>Simple, transparente, <em>sans zones floues.</em></h2>
          </div>
          <div className="process-track">
            {methodSteps.map((step) => (
              <article className="process-step" key={step.number} data-reveal>
                <div className="step-number">{step.number}</div>
                <div className="step-line" />
                <h3>{step.shortTitle}</h3>
                <p>{step.shortText}</p>
              </article>
            ))}
          </div>
          <Link className="process-more" href="/methode">
            Découvrir ma méthode <Arrow />
          </Link>
        </div>
      </section>

      <section className="section about" id="apropos">
        <div className="container about-layout">
          <div className="about-title" data-reveal>
            <span className="section-kicker">À propos</span>
            <h2>Un interlocuteur unique, <em>impliqué à vos côtés.</em></h2>
          </div>
          <div className="about-copy" data-reveal>
            <p className="about-lead">
              Je suis Quentin, développeur front-end freelance et fondateur de
              GQIM.
            </p>
            <p>
              J’accompagne petites et grandes entreprises dans la création de
              produits numériques à la fois beaux, simples à utiliser et
              techniquement solides. Vous échangez directement avec la personne
              qui imagine et développe votre projet.
            </p>
            <div className="about-values">
              <span>
                <strong>Direct</strong>
                Un seul contact
              </span>
              <span>
                <strong>Flexible</strong>
                Adapté à votre projet
              </span>
              <span>
                <strong>Engagé</strong>
                Du brief au lancement
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="container contact-inner" data-reveal>
          <span className="section-kicker light">Un projet en tête ?</span>
          <h2>Parlons de votre <em>projet.</em></h2>
          <p>
            Quelques réponses suffisent pour me donner une première vision de
            votre besoin.
          </p>
          <ProjectQuestionnaire />
          <div className="direct-contact">
            <span>Vous préférez échanger directement ?</span>
            <a href="mailto:gqinformatiques@gmail.com">gqinformatiques@gmail.com</a>
            <i />
            <a href="tel:+33644036473">06 44 03 64 73</a>
          </div>
        </div>
      </section>
    </>
  );
}

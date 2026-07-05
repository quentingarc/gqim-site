"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

const questionnaireSteps = [
  {
    key: "project",
    label: "Votre projet",
    question: "Que souhaitez-vous créer ?",
    choices: [
      "Site vitrine",
      "Application web / mobile",
      "Refonte d’un site",
      "Développement sur mesure",
    ],
  },
  {
    key: "goal",
    label: "Votre objectif",
    question: "Quel est votre objectif principal ?",
    choices: [
      "Présenter mon activité",
      "Obtenir plus de contacts",
      "Vendre en ligne",
      "Créer un outil métier",
    ],
  },
  {
    key: "budget",
    label: "Votre cadre",
    question: "Quel budget envisagez-vous ?",
    choices: [
      "Moins de 1 500 €",
      "1 500 € – 3 000 €",
      "3 000 € – 6 000 €",
      "Plus de 6 000 €",
    ],
  },
];

function ProjectQuestionnaire() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    project: "",
    goal: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const currentStep = questionnaireSteps[step];
  const canContinue =
    step < 3
      ? Boolean(form[currentStep?.key])
      : Boolean(form.name.trim() && form.email.trim());

  const sendRequest = (event) => {
    event.preventDefault();
    if (step !== 3 || !canContinue) return;

    const lowerFirst = (value) =>
      value ? value.charAt(0).toLowerCase() + value.slice(1) : "";
    const timelineText = {
      "Dès que possible": "dès que possible",
      "Dans 1 à 2 mois": "dans un délai de 1 à 2 mois",
      "Dans 3 à 6 mois": "dans un délai de 3 à 6 mois",
      "Je me renseigne": "sans calendrier précis pour le moment",
    };
    const budgetText = {
      "Moins de 1 500 €": "inférieur à 1 500 €",
      "1 500 € – 3 000 €": "compris entre 1 500 € et 3 000 €",
      "3 000 € – 6 000 €": "compris entre 3 000 € et 6 000 €",
      "Plus de 6 000 €": "supérieur à 6 000 €",
    };
    const companyText = form.company
      ? ` et je représente l’entreprise ${form.company}`
      : "";
    const detailsText = form.details
      ? `\n\nPour vous donner un peu plus de contexte :\n${form.details}`
      : "";

    const subject = encodeURIComponent(
      `Nouveau projet ${form.project} — ${form.name}`,
    );
    const body = encodeURIComponent(
      [
        "Bonjour Quentin,",
        "",
        `Je m’appelle ${form.name}${companyText}. Je souhaite vous parler d’un projet de type « ${form.project} » afin de ${lowerFirst(form.goal)}.`,
        "",
        `Pour ce projet, j’envisage un budget ${budgetText[form.budget] || lowerFirst(form.budget)}. Je souhaiterais idéalement le lancer ${timelineText[form.timeline] || "selon un calendrier à définir ensemble"}.`,
        detailsText,
        "",
        `Vous pouvez me répondre directement à l’adresse ${form.email}.`,
        "",
        "Merci et à bientôt,",
        form.name,
      ].join("\n"),
    );

    window.location.href = `mailto:gqinformatiques@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="project-form" onSubmit={sendRequest}>
      <div className="form-progress" aria-label={`Étape ${step + 1} sur 4`}>
        {[0, 1, 2, 3].map((item) => (
          <span
            className={item <= step ? "is-active" : ""}
            key={item}
          />
        ))}
      </div>

      <div className="form-step-meta">
        <span>0{step + 1}</span>
        <small>
          {step < 3 ? currentStep.label : "Vos coordonnées"}
        </small>
      </div>

      {step < 3 ? (
        <div className="form-panel">
          <h3>{currentStep.question}</h3>
          <div className="choice-grid">
            {currentStep.choices.map((choice) => (
              <button
                className={form[currentStep.key] === choice ? "is-selected" : ""}
                type="button"
                key={choice}
                onClick={() => update(currentStep.key, choice)}
              >
                <span />
                {choice}
              </button>
            ))}
          </div>

          {step === 2 && (
            <label className="timeline-field">
              <span>Quand souhaitez-vous lancer le projet ?</span>
              <select
                value={form.timeline}
                onChange={(event) => update("timeline", event.target.value)}
              >
                <option value="">À définir ensemble</option>
                <option value="Dès que possible">Dès que possible</option>
                <option value="Dans 1 à 2 mois">Dans 1 à 2 mois</option>
                <option value="Dans 3 à 6 mois">Dans 3 à 6 mois</option>
                <option value="Je me renseigne">Je me renseigne</option>
              </select>
            </label>
          )}
        </div>
      ) : (
        <div className="form-panel contact-fields">
          <h3>À qui dois-je répondre ?</h3>
          <div className="field-row">
            <label>
              <span>Votre nom *</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Jean Dupont"
                required
              />
            </label>
            <label>
              <span>Votre e-mail *</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="jean@entreprise.fr"
                required
              />
            </label>
          </div>
          <label>
            <span>Entreprise</span>
            <input
              type="text"
              value={form.company}
              onChange={(event) => update("company", event.target.value)}
              placeholder="Nom de votre entreprise"
            />
          </label>
          <label>
            <span>Un détail à ajouter ?</span>
            <textarea
              value={form.details}
              onChange={(event) => update("details", event.target.value)}
              placeholder="Parlez-moi librement de votre idée, de vos besoins ou de vos contraintes…"
              rows={4}
            />
          </label>
        </div>
      )}

      <div className="form-navigation">
        {step > 0 ? (
          <button
            className="form-back"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setStep((current) => current - 1);
            }}
          >
            Retour
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <button
            className="form-next"
            type="button"
            key="continue-questionnaire"
            disabled={!canContinue}
            onClick={(event) => {
              event.preventDefault();
              setStep((current) => current + 1);
            }}
          >
            Continuer <Arrow />
          </button>
        ) : (
          <button
            className="form-next"
            type="submit"
            key="submit-questionnaire"
            disabled={!canContinue}
          >
            Préparer ma demande <Arrow />
          </button>
        )}
      </div>
    </form>
  );
}

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

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
            <article className="service-card featured" data-reveal>
              <div className="service-number">01</div>
              <div className="service-icon">{serviceIcons.site}</div>
              <h3>Sites internet</h3>
              <p>
                Des sites vitrines modernes qui racontent votre activité,
                renforcent votre image et transforment les visites en contacts.
              </p>
              <ul>
                <li>Site vitrine & corporate</li>
                <li>Landing page</li>
                <li>Refonte & optimisation</li>
              </ul>
              <Link href="/services/sites-internet">
                Découvrir ce service <Arrow />
              </Link>
            </article>

            <article className="service-card" data-reveal>
              <div className="service-number">02</div>
              <div className="service-icon">{serviceIcons.app}</div>
              <h3>Applications web / mobile</h3>
              <p>
                Des applications fluides et intuitives qui simplifient vos
                processus et donnent vie à vos services.
              </p>
              <ul>
                <li>Interface métier</li>
                <li>Plateforme & dashboard</li>
                <li>Application responsive</li>
              </ul>
              <Link href="/services/applications-web-mobile">
                Découvrir ce service <Arrow />
              </Link>
            </article>

            <article className="service-card" data-reveal>
              <div className="service-number">03</div>
              <div className="service-icon">{serviceIcons.custom}</div>
              <h3>Développement sur mesure</h3>
              <p>
                Une solution technique construite autour de vos contraintes,
                sans modèle générique ni fonctionnalités inutiles.
              </p>
              <ul>
                <li>Intégration front-end</li>
                <li>Fonctionnalités spécifiques</li>
                <li>Maintenance & évolution</li>
              </ul>
              <Link href="/services/developpement-sur-mesure">
                Découvrir ce service <Arrow />
              </Link>
            </article>
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
            {[
              ["01", "Écoute", "Nous clarifions votre besoin, vos objectifs et vos utilisateurs."],
              ["02", "Conception", "Je structure l’expérience et définis une direction visuelle forte."],
              ["03", "Développement", "Je construis une interface rapide, fiable et responsive."],
              ["04", "Mise en ligne", "Je teste, optimise et vous accompagne après le lancement."],
            ].map(([number, title, text]) => (
              <article className="process-step" key={number} data-reveal>
                <div className="step-number">{number}</div>
                <div className="step-line" />
                <h3>{title}</h3>
                <p>{text}</p>
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

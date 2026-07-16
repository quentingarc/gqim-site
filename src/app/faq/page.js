import Link from "next/link";
import { faqGroups, faqList } from "@/data/faqs";
import { createFaqSchema } from "@/lib/faq";

export const metadata = {
  title: "Questions fréquentes",
  description:
    "Réponses aux questions fréquentes sur la création de site internet, le référencement local, la maintenance et l’accompagnement GQIM.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: "Questions fréquentes | GQIM",
    description:
      "Tout savoir sur la création de site internet, le SEO local et l’accompagnement GQIM.",
    url: "/faq/",
  },
};

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

export default function FaqPage() {
  const faqSchema = createFaqSchema(faqList);

  return (
    <article className="faq-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="case-hero faq-hero">
        <div className="container">
          <span className="section-kicker">Questions fréquentes</span>
          <h1>Les réponses utiles avant de lancer votre projet web.</h1>
          <p>
            Création de site, référencement local, maintenance et suivi :
            retrouvez ici les réponses aux questions les plus courantes.
          </p>
        </div>
      </section>

      <section className="seo-section faq-directory">
        <div className="container faq-directory-layout">
          <div className="faq-directory-intro">
            <span className="section-kicker">FAQ GQIM</span>
            <h2>Une base claire, enrichie régulièrement.</h2>
            <p>
              Les réponses sont organisées par thème pour vous aider à préparer
              votre projet et à prendre les bonnes décisions.
            </p>
          </div>

          <div className="faq-groups">
            {faqGroups.map((group) => (
              <section className="faq-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="faq-list">
                  {group.questions.map(({ question, answer }) => (
                    <details key={question}>
                      <summary>{question}<span>+</span></summary>
                      <p>{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <span className="section-kicker light">Une autre question ?</span>
          <h2>Parlons directement de votre projet.</h2>
          <Link href="/#contact">Me contacter <Arrow /></Link>
        </div>
      </section>
    </article>
  );
}

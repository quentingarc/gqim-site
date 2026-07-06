export const metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de GQIM : formulaire de contact, données traitées et exercice de vos droits.",
  alternates: { canonical: "/politique-de-confidentialite" },
  openGraph: {
    title: "Politique de confidentialité | GQIM",
    description: "Traitement des demandes de contact et exercice de vos droits.",
    url: "/politique-de-confidentialite",
  },
};

export default function PrivacyPage() {
  return (
    <article className="legal-page">
      <header className="legal-hero">
        <div className="container">
          <span className="section-kicker">Vos données</span>
          <h1>Politique de confidentialité</h1>
          <p>Dernière mise à jour : 6 juillet 2026</p>
        </div>
      </header>
      <div className="container legal-content">
        <section>
          <h2>Responsable du traitement</h2>
          <p>
            GQIM, représenté par Quentin Garcia, traite les informations que
            vous choisissez de transmettre pour répondre à vos demandes. Vous
            pouvez écrire à{" "}
            <a href="mailto:gqinformatiques@gmail.com">gqinformatiques@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>Données concernées et finalités</h2>
          <p>
            Le questionnaire de projet peut contenir votre nom, adresse e-mail,
            entreprise, type de projet, objectif, budget, calendrier et message
            libre. Ces informations servent uniquement à comprendre votre
            besoin, vous répondre, préparer un devis et assurer le suivi de la
            relation commerciale.
          </p>
          <p>
            Le formulaire ne transmet pas directement les données à un serveur
            GQIM : il prépare un e-mail dans votre logiciel de messagerie. Les
            informations ne sont envoyées que lorsque vous décidez d’expédier
            cet e-mail.
          </p>
        </section>

        <section>
          <h2>Base légale et durée de conservation</h2>
          <p>
            Le traitement repose sur votre demande de mesures précontractuelles
            et, pour le suivi des échanges, sur l’intérêt légitime de GQIM à
            gérer ses relations professionnelles. Les échanges sont conservés
            pendant la durée nécessaire au traitement de la demande et au
            suivi de la relation, puis supprimés ou archivés lorsque la loi
            l’exige.
          </p>
          <p>
            La mesure d’audience repose sur l’intérêt légitime de GQIM à
            comprendre l’utilisation du site et à améliorer ses contenus et
            ses parcours.
          </p>
        </section>

        <section>
          <h2>Destinataires et services tiers</h2>
          <p>
            Les données sont destinées à GQIM. Elles transitent par votre
            fournisseur de messagerie et celui utilisé par GQIM. Elles ne sont
            ni vendues ni louées. Elles peuvent être communiquées à un
            prestataire uniquement lorsque cela est nécessaire au projet ou
            pour respecter une obligation légale.
          </p>
          <p>
            Plausible Analytics fournit le service de mesure d’audience. Les
            statistiques produites sont agrégées et les données sont traitées
            et hébergées dans l’Union européenne.
          </p>
        </section>

        <section>
          <h2>Mesure d’audience et stockage local</h2>
          <p>
            Le site utilise Plausible Analytics pour connaître le nombre de
            visites, les pages consultées, la provenance générale du trafic et
            les interactions importantes, comme les clics vers le formulaire
            de contact. Ces informations servent uniquement à améliorer le
            site et sont présentées sous forme de statistiques agrégées.
            Plausible ne dépose aucun cookie et n’utilise aucun identifiant
            persistant pour suivre les visiteurs d’un site à l’autre. Vous
            pouvez consulter{" "}
            <a
              href="https://plausible.io/data-policy"
              target="_blank"
              rel="noreferrer"
            >
              la politique de données de Plausible
            </a>.
          </p>
          <p>
            Le site mémorise votre préférence de thème clair ou sombre dans le
            stockage local de votre navigateur. Cette préférence reste sur
            votre appareil et ne permet pas à GQIM de vous identifier.
          </p>
        </section>

        <section>
          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l’accès, la rectification, l’effacement, la
            limitation ou la portabilité de vos données, et vous opposer à un
            traitement lorsque les conditions légales sont réunies. Adressez
            votre demande à{" "}
            <a href="mailto:gqinformatiques@gmail.com">gqinformatiques@gmail.com</a>.
            Vous pouvez également introduire une réclamation auprès de la CNIL.
          </p>
        </section>

        <section>
          <h2>Mise à jour</h2>
          <p>
            Cette politique peut évoluer si le site ajoute un outil de mesure,
            un formulaire transmis en ligne ou un nouveau prestataire. La date
            indiquée en haut de page permet d’identifier la version en vigueur.
          </p>
        </section>
      </div>
    </article>
  );
}

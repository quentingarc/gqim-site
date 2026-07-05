"use client";

import { useState } from "react";

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
      {
        label: "Moins de 1 500 €",
        sentence: "inférieur à 1 500 €",
      },
      {
        label: "1 500 € – 3 000 €",
        sentence: "compris entre 1 500 € et 3 000 €",
      },
      {
        label: "3 000 € – 6 000 €",
        sentence: "compris entre 3 000 € et 6 000 €",
      },
      {
        label: "Plus de 6 000 €",
        sentence: "supérieur à 6 000 €",
      },
    ],
  },
];

const timelines = [
  { label: "À définir ensemble", sentence: "selon un calendrier à définir ensemble" },
  { label: "Dès que possible", sentence: "dès que possible" },
  { label: "Dans 1 à 2 mois", sentence: "dans un délai de 1 à 2 mois" },
  { label: "Dans 3 à 6 mois", sentence: "dans un délai de 3 à 6 mois" },
  { label: "Je me renseigne", sentence: "sans calendrier précis pour le moment" },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function choiceLabel(choice) {
  return typeof choice === "string" ? choice : choice.label;
}

export default function ProjectQuestionnaire() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    project: "",
    goal: "",
    budget: "",
    timeline: timelines[0].label,
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
    step < questionnaireSteps.length
      ? Boolean(form[currentStep?.key])
      : Boolean(form.name.trim() && form.email.trim());

  const sendRequest = (event) => {
    event.preventDefault();
    if (step !== questionnaireSteps.length || !canContinue) return;

    const lowerFirst = (value) =>
      value ? value.charAt(0).toLowerCase() + value.slice(1) : "";
    const selectedBudget = questionnaireSteps[2].choices.find(
      (choice) => choice.label === form.budget,
    );
    const selectedTimeline = timelines.find(
      (timeline) => timeline.label === form.timeline,
    );
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
        `Pour ce projet, j’envisage un budget ${selectedBudget?.sentence || lowerFirst(form.budget)}. Je souhaiterais idéalement le lancer ${selectedTimeline?.sentence || timelines[0].sentence}.`,
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
      <div
        className="form-progress"
        aria-label={`Étape ${step + 1} sur ${questionnaireSteps.length + 1}`}
      >
        {Array.from({ length: questionnaireSteps.length + 1 }, (_, item) => (
          <span className={item <= step ? "is-active" : ""} key={item} />
        ))}
      </div>

      <div className="form-step-meta">
        <span>0{step + 1}</span>
        <small>
          {step < questionnaireSteps.length
            ? currentStep.label
            : "Vos coordonnées"}
        </small>
      </div>

      {step < questionnaireSteps.length ? (
        <div className="form-panel">
          <h3>{currentStep.question}</h3>
          <div className="choice-grid">
            {currentStep.choices.map((choice) => {
              const label = choiceLabel(choice);
              return (
                <button
                  className={form[currentStep.key] === label ? "is-selected" : ""}
                  type="button"
                  key={label}
                  aria-pressed={form[currentStep.key] === label}
                  onClick={() => update(currentStep.key, label)}
                >
                  <span />
                  {label}
                </button>
              );
            })}
          </div>

          {step === questionnaireSteps.length - 1 && (
            <label className="timeline-field">
              <span>Quand souhaitez-vous lancer le projet ?</span>
              <select
                value={form.timeline}
                onChange={(event) => update("timeline", event.target.value)}
              >
                {timelines.map((timeline) => (
                  <option value={timeline.label} key={timeline.label}>
                    {timeline.label}
                  </option>
                ))}
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
            onClick={() => setStep((current) => current - 1)}
          >
            Retour
          </button>
        ) : (
          <span />
        )}
        {step < questionnaireSteps.length ? (
          <button
            className="form-next"
            type="button"
            disabled={!canContinue}
            onClick={() => setStep((current) => current + 1)}
          >
            Continuer <Arrow />
          </button>
        ) : (
          <button className="form-next" type="submit" disabled={!canContinue}>
            Préparer ma demande <Arrow />
          </button>
        )}
      </div>
    </form>
  );
}

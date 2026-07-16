import { describe, expect, it } from "vitest";
import { faqGroups, faqList } from "../src/data/faqs.js";
import { createFaqSchema } from "../src/lib/faq.js";

describe("FAQ content", () => {
  it("keeps groups and the flattened list in sync", () => {
    const groupedCount = faqGroups.reduce(
      (total, group) => total + group.questions.length,
      0,
    );

    expect(faqGroups.length).toBeGreaterThanOrEqual(6);
    expect(faqList).toHaveLength(groupedCount);
    expect(faqList.length).toBeGreaterThanOrEqual(30);
  });

  it("contains unique, complete questions and answers", () => {
    const questions = faqList.map(({ question }) => question.trim());
    const answers = faqList.map(({ answer }) => answer.trim());

    expect(new Set(questions).size).toBe(questions.length);
    expect(new Set(answers).size).toBe(answers.length);

    for (const question of questions) {
      expect(question.endsWith("?")).toBe(true);
      expect(question.length).toBeGreaterThan(20);
    }

    for (const answer of answers) {
      expect(answer.length).toBeGreaterThan(100);
    }
  });

  it("does not reintroduce public prices", () => {
    expect(JSON.stringify(faqList)).not.toMatch(/\d[\s\u00a0]*(?:€|euros?)/i);
  });

  it("covers the main decision keywords naturally", () => {
    const content = JSON.stringify(faqList).toLowerCase();

    for (const keyword of [
      "développeur web",
      "intelligence artificielle",
      "wordpress",
      "site sur mesure",
      "référencement naturel",
      "royan",
    ]) {
      expect(content).toContain(keyword);
    }
  });

  it("creates valid FAQPage structured data", () => {
    const schema = createFaqSchema(faqList);

    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(faqList.length);
    expect(schema.mainEntity[0]).toEqual({
      "@type": "Question",
      name: faqList[0].question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqList[0].answer,
      },
    });
  });
});

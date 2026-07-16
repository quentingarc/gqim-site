import { describe, expect, it } from "vitest";
import { seoPages } from "../src/data/seoPages.js";
import {
  createServiceMetadata,
  withTrailingSlash,
} from "../src/lib/seo.js";

describe("SEO service pages", () => {
  const entries = Object.entries(seoPages);

  it("uses unique slugs matching every data key", () => {
    const slugs = entries.map(([, page]) => page.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
    for (const [key, page] of entries) {
      expect(page.slug).toBe(`/${key}`);
      expect(page.slug.endsWith("/")).toBe(false);
    }
  });

  it("provides complete content for every service page", () => {
    for (const [, page] of entries) {
      for (const field of [
        "eyebrow",
        "title",
        "description",
        "lead",
        "delay",
        "audience",
        "solutionTitle",
        "solution",
        "example",
      ]) {
        expect(page[field]?.trim().length).toBeGreaterThan(10);
      }

      expect(page.problems).toHaveLength(3);
      expect(page.deliverables).toHaveLength(6);
      expect(page.faqs).toHaveLength(3);
      expect(new Set(page.faqs.map(([question]) => question)).size).toBe(3);
    }
  });

  it("keeps public prices out of SEO page data", () => {
    for (const [, page] of entries) {
      expect(page).not.toHaveProperty("price");
    }
    expect(JSON.stringify(seoPages)).not.toMatch(/\d[\s\u00a0]*(?:€|euros?)/i);
  });

  it("keeps the Royan page targeted and locally evidenced", () => {
    const royan = seoPages["creation-site-internet-royan"];

    expect(royan.title).toBe(
      "Création de site internet à Royan pour développer votre activité",
    );
    expect(royan.caseStudy.image).toBe("/lv-jardin-site.jpg");
    expect(royan.caseStudy.details).toHaveLength(3);
    expect(royan.caseStudy.siteUrl).toBe("https://www.lv-jardin.fr/");
  });

  it("normalizes canonical URLs with one trailing slash", () => {
    expect(withTrailingSlash("/")).toBe("/");
    expect(withTrailingSlash("/faq")).toBe("/faq/");
    expect(withTrailingSlash("/faq/")).toBe("/faq/");

    const service = seoPages["creation-site-internet"];
    const metadata = createServiceMetadata(service);
    expect(metadata.alternates.canonical).toBe("/creation-site-internet/");
    expect(metadata.openGraph.url).toBe("/creation-site-internet/");
  });
});

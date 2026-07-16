import { describe, expect, it } from "vitest";
import { methodSteps } from "../src/data/method.js";
import { services } from "../src/data/services.js";

describe("Homepage data", () => {
  it("keeps service identifiers and routes unique", () => {
    const list = Object.values(services);
    const slugs = list.map((service) => service.slug);
    const numbers = list.map((service) => service.number);

    expect(list).toHaveLength(3);
    expect(new Set(slugs).size).toBe(list.length);
    expect(new Set(numbers).size).toBe(list.length);

    for (const service of list) {
      expect(service.slug.startsWith("/")).toBe(true);
      expect(service.deliverables.length).toBeGreaterThanOrEqual(4);
      expect(service.formats.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("keeps the descriptive Royan link on the website service", () => {
    expect(services.sitesInternet.localLink).toEqual({
      href: "/creation-site-internet-royan",
      label: "Création de site internet à Royan",
    });
  });

  it("keeps method steps ordered and complete", () => {
    expect(methodSteps).toHaveLength(4);

    methodSteps.forEach((step, index) => {
      expect(step.number).toBe(String(index + 1).padStart(2, "0"));
      expect(step.title.length).toBeGreaterThan(5);
      expect(step.description.length).toBeGreaterThan(50);
      expect(step.outputs).toHaveLength(3);
    });
  });
});

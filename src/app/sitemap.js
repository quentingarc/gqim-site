import { seoPageList } from "@/data/seoPages";

const baseUrl = "https://gqim.fr";
export const dynamic = "force-static";

export default function sitemap() {
  const updatedAt = new Date("2026-07-16");
  const corePages = [
    ["", 1, "weekly"],
    ["/realisations", 0.9, "monthly"],
    ["/faq", 0.8, "weekly"],
    ["/a-propos", 0.7, "monthly"],
    ["/methode", 0.7, "monthly"],
    ["/mentions-legales", 0.2, "yearly"],
    ["/politique-de-confidentialite", 0.2, "yearly"],
  ];

  return [
    ...corePages.map(([path, priority, changeFrequency]) => ({
      url: path ? `${baseUrl}${path}/` : `${baseUrl}/`,
      lastModified: updatedAt,
      changeFrequency,
      priority,
    })),
    ...seoPageList.map((page) => ({
      url: `${baseUrl}${page.slug}/`,
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: page.slug.includes("royan") || page.slug.includes("bordeaux") ? 0.8 : 0.9,
    })),
  ];
}

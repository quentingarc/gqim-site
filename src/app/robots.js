export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gqim.fr/sitemap.xml",
    host: "https://gqim.fr",
  };
}

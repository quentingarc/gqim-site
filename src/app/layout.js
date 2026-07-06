import "../styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Analytics from "@components/Analytics";

const plausibleScriptUrl =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL ||
  "https://plausible.io/js/pa-HacoMo137tshjR2wYmkUv.js";

export const metadata = {
  metadataBase: new URL("https://gqim.fr"),
  title: {
    default: "GQIM — Création de sites web et applications sur mesure",
    template: "%s | GQIM",
  },
  description:
    "Création de sites web et applications sur mesure pour indépendants, artisans et petites entreprises à Royan, Bordeaux et partout en France.",
  applicationName: "GQIM",
  authors: [{ name: "Quentin Garcia", url: "https://gqim.fr/a-propos" }],
  creator: "Quentin Garcia",
  publisher: "GQIM",
  alternates: { canonical: "/" },
  keywords: [
    "création site internet",
    "site vitrine",
    "application web",
    "développeur web freelance",
    "Royan",
    "Bordeaux",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "GQIM",
    title: "GQIM — Création de sites web et applications sur mesure",
    description:
      "Sites web et applications sur mesure pour indépendants, artisans et petites entreprises.",
    images: [
      {
        url: "/logo-background.webp",
        width: 1280,
        height: 853,
        alt: "GQIM — Création de sites web et applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GQIM — Création de sites web et applications sur mesure",
    description:
      "Sites web et applications sur mesure pour indépendants, artisans et petites entreprises.",
    images: ["/logo-background.webp"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "dsXKuPyll9wtE-yE_jsrB5HLa78wRC6GobXEoiF8DCs",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GQIM",
    url: "https://gqim.fr",
    logo: "https://gqim.fr/logo-header.webp",
    image: "https://gqim.fr/logo-background.webp",
    email: "gqinformatiques@gmail.com",
    telephone: "+33644036473",
    identifier: [
      { "@type": "PropertyValue", propertyID: "SIREN", value: "942927815" },
      { "@type": "PropertyValue", propertyID: "SIRET", value: "94292781500012" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "4 impasse des 4 Vents",
      addressLocality: "Médis",
      addressCountry: "FR",
    },
    founder: {
      "@type": "Person",
      name: "Quentin Garcia",
      jobTitle: "Développeur web full-stack",
    },
    areaServed: ["Royan", "Bordeaux", "Charente-Maritime", "Gironde", "France"],
    sameAs: [
      "https://www.malt.fr/profile/quentingarcia",
      "https://fr.linkedin.com/in/quentingar",
    ],
    priceRange: "€€",
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem("gqim-theme");
                const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                document.documentElement.dataset.theme = savedTheme || preferredTheme;
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
        <Analytics scriptUrl={plausibleScriptUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

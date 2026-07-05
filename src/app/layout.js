import "../styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
  title: "GQIM — Développeur front-end freelance",
  description:
    "Création de sites internet, applications web et solutions sur mesure pour petites et grandes entreprises.",
};

export default function RootLayout({ children }) {
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

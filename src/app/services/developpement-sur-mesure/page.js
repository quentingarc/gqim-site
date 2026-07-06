import ServiceDetail from "@components/ServiceDetail";
import { services } from "@/data/services";

export const metadata = {
  title: "Développement sur mesure",
  description:
    "Solutions numériques spécifiques : front-end, back-end, DevOps, automatisations et intégrations.",
  alternates: { canonical: "/developpeur-web-freelance" },
  robots: { index: false, follow: true },
};

export default function CustomDevelopmentPage() {
  return <ServiceDetail service={services.custom} />;
}

import ServiceDetail from "@components/ServiceDetail";
import { services } from "@/data/services";

export const metadata = {
  title: "Développement sur mesure — GQIM",
  description:
    "Solutions numériques spécifiques : front-end, back-end, DevOps, automatisations et intégrations.",
};

export default function CustomDevelopmentPage() {
  return <ServiceDetail service={services.custom} />;
}

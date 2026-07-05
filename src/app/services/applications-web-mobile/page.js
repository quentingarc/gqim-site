import ServiceDetail from "@components/ServiceDetail";
import { services } from "@/data/services";

export const metadata = {
  title: "Applications web et mobile — GQIM",
  description:
    "Conception et développement d’applications web, mobiles, dashboards et outils métier.",
};

export default function ApplicationsPage() {
  return <ServiceDetail service={services.applications} />;
}

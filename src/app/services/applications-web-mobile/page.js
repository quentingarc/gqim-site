import ServiceDetail from "@components/ServiceDetail";
import { services } from "@/data/services";

export const metadata = {
  title: "Applications web et mobile",
  description:
    "Conception et développement d’applications web, mobiles, dashboards et outils métier.",
  alternates: { canonical: "/application-web" },
  robots: { index: false, follow: true },
};

export default function ApplicationsPage() {
  return <ServiceDetail service={services.applications} />;
}

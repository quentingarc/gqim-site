import ServiceDetail from "@components/ServiceDetail";
import { services } from "@/data/services";

export const metadata = {
  title: "Création de sites internet — GQIM",
  description:
    "Création de sites vitrines, sites corporate, landing pages et refontes sur mesure.",
};

export default function SitesInternetPage() {
  return <ServiceDetail service={services.sitesInternet} />;
}

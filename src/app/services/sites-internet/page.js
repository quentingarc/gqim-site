import ServiceDetail from "@components/ServiceDetail";
import { services } from "@/data/services";

export const metadata = {
  title: "Création de sites internet",
  description:
    "Création de sites vitrines, sites corporate, landing pages et refontes sur mesure.",
  alternates: { canonical: "/creation-site-internet" },
  robots: { index: false, follow: true },
};

export default function SitesInternetPage() {
  return <ServiceDetail service={services.sitesInternet} />;
}

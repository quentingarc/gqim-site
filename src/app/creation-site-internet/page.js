import SeoServicePage, { createServiceMetadata } from "@components/SeoServicePage";
import { seoPages } from "@/data/seoPages";

const service = seoPages["creation-site-internet"];
export const metadata = createServiceMetadata(service);
export default function Page() { return <SeoServicePage service={service} />; }

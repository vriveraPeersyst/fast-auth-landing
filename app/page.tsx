import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsFastAuth from "@/components/WhatIsFastAuth";
import HowItWorks from "@/components/HowItWorks";
import DeveloperSection from "@/components/DeveloperSection";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import FooterCTA from "@/components/FooterCTA";
import SiteFooter from "@/components/SiteFooter";
import { fetchLiveMetrics } from "@/lib/metrics";

const DOCS_HREF = "https://peersyst.github.io/fast-auth/";
const STATUS_HREF = "https://fast-auth-metrics-dashboard.vercel.app/";

export const revalidate = 60;

export default async function Page() {
  const metrics = await fetchLiveMetrics();

  return (
    <>
      <Header docsHref={DOCS_HREF} statusHref={STATUS_HREF} />
      <Hero docsHref={DOCS_HREF} statusHref={STATUS_HREF} metrics={metrics} />
      <WhatIsFastAuth />
      <HowItWorks />
      <DeveloperSection docsHref={DOCS_HREF} />
      <Stats metrics={metrics} statusHref={STATUS_HREF} />
      <FAQ />
      <FooterCTA docsHref={DOCS_HREF} statusHref={STATUS_HREF} />
      <SiteFooter docsHref={DOCS_HREF} statusHref={STATUS_HREF} />
    </>
  );
}

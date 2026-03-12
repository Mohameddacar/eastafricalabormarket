import type { Metadata } from "next";

import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesOverviewCards } from "@/components/sections/services-overview-cards";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { ServiceProcessSection } from "@/components/sections/service-process-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ImpactStatsSection } from "@/components/sections/impact-stats-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { PartnersGridSection } from "@/components/sections/partners-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Our Services | East Africa Labor Market",
  description:
    "Labor market analytics, policy advisory, employment research, capacity building, and public sector consulting across East Africa.",
};

export default function ServicesPage() {
  return (
    <div className="container-page space-y-16">
      {/* 1. Hero */}
      <ServicesHero />

      {/* 2. Services Overview - large cards with icons + thumbnails */}
      <ServicesOverviewCards />

      {/* 3. Core Services - 5 detailed service blocks */}
      <CoreServicesSection />

      {/* 4. Service Process - 4 steps */}
      <ServiceProcessSection />

      {/* 5. Industries & Sectors */}
      <IndustriesSection />

      {/* 6. Impact Statistics - animated counters */}
      <ImpactStatsSection />

      {/* 7. Case Studies */}
      <CaseStudiesSection />

      {/* 8. Partners */}
      <PartnersGridSection />

      {/* 9. Call to Action */}
      <CTASection
        headline="Partner With Us to Strengthen Labor Market Systems"
        description="Work with East Africa Labor Market to design evidence-based workforce strategies and build stronger employment systems."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Explore Programs"
        secondaryHref="/human-development"
      />
    </div>
  );
}

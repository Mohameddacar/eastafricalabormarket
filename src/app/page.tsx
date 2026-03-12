import { Hero } from "@/components/hero";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { ImpactStatsSection } from "@/components/sections/impact-stats-section";
import { ServicesOverviewSection } from "@/components/sections/services-overview";
import { FeaturedTrainingsSection } from "@/components/sections/featured-trainings";
import { FeaturedResearchSection } from "@/components/sections/featured-research";
import { UpcomingEventsSection } from "@/components/sections/upcoming-events";
import { ConferencesCarousel } from "@/components/sections/conferences-carousel";
import { HumanDevelopmentSection } from "@/components/sections/human-development-section";
import { RegionalCoverageSection } from "@/components/sections/regional-coverage-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { NewsSection } from "@/components/sections/news-section";
import { PartnersGridSection } from "@/components/sections/partners-grid";
import { HomeCTASection } from "@/components/sections/home-cta-section";

export default function Home() {
  return (
    <>
      {/* 1. Hero - full width two-column */}
      <Hero />

      {/* 2. Trusted by Global Partners - scrolling marquee */}
      <PartnersMarquee />

      {/* Main content container */}
      <div className="container-page space-y-16">
        {/* 3. Impact Statistics - counter-up */}
        <ImpactStatsSection />

        {/* 4. What We Do - services overview */}
        <ServicesOverviewSection />

        {/* 5. Featured Training Programs */}
        <FeaturedTrainingsSection />

        {/* 6. Featured Research */}
        <FeaturedResearchSection />

        {/* 7. Upcoming Events */}
        <UpcomingEventsSection />

        {/* 8. Global Conferences carousel */}
        <ConferencesCarousel />

        {/* 9. Human Development Programs */}
        <HumanDevelopmentSection />

        {/* 10. Regional Coverage */}
        <RegionalCoverageSection />

        {/* 11. Testimonials */}
        <TestimonialsSection />

        {/* 12. News & Insights */}
        <NewsSection />

        {/* 13. Partners grid */}
        <PartnersGridSection />

        {/* 14. Call to Action - full width style inside container */}
        <HomeCTASection />
      </div>
    </>
  );
}

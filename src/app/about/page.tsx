import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  BarChart3,
  BookOpen,
  Compass,
  GraduationCap,
  Handshake,
  MapPin,
  Target,
  Users,
} from "lucide-react";

import {
  aboutImpactStats,
  aboutTimeline,
  founder,
  regionalFocusCountries,
  whatWeDoList,
} from "@/data/about";
import { leadershipTeam } from "@/data/leadership";
import { partners } from "@/data/partners";
import { LeadershipCard } from "@/components/cards/leadership-card";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Timeline } from "@/components/sections/timeline";

export const metadata: Metadata = {
  title: "About | East Africa Labor Market",
  description:
    "Our mission, vision, values, and leadership. We strengthen labor market systems across East Africa through research, training, and strategic partnerships.",
};

const coreValues = [
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We uphold the highest standards of transparency, accountability, and ethical research practices.",
    icon: Award,
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We promote forward-thinking approaches and innovative solutions to address emerging workforce challenges.",
    icon: Compass,
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "We believe sustainable impact is achieved through partnerships across governments, institutions, and communities.",
    icon: Users,
  },
  {
    id: "impact",
    title: "Impact",
    description:
      "Our work is guided by measurable results that contribute to real improvements in employment systems and human development.",
    icon: Target,
  },
];

const teamDisciplines = [
  "Labor economics",
  "Public policy",
  "Workforce development",
  "Data science",
  "Economic research",
  "Human capital development",
];

const aboutPartners = partners.slice(0, 5);

export default function AboutPage() {
  return (
    <div className="container-page">
      {/* 1. Hero Section */}
      <PageHero
        headline="Advancing Labor Market Development Across East Africa"
        description="East Africa Labor Market is a regional organization dedicated to strengthening employment systems, workforce development, and labor market intelligence across East Africa. Through research, training, and strategic partnerships, we support governments, institutions, and the private sector to create sustainable employment opportunities and inclusive economic growth."
        imageSrc="/images/about-hero.jpg"
        imageAlt="Professional meeting with African policymakers, economists, and workforce development experts reviewing labor market data on screens"
      />

      {/* 2. About the Organization */}
      <section className="section-card space-y-5">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
          About the Organization
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          East Africa Labor Market is a research-driven organization focused on
          analyzing labor trends, developing workforce policies, and
          strengthening human capital development in the region.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Our work bridges the gap between:
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            "Government policy",
            "Private sector workforce needs",
            "Education and skills systems",
            "Employment creation initiatives",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          We collaborate with regional governments, international
          organizations, academic institutions, and private sector partners to
          create solutions that address the evolving demands of the labor
          market. Through evidence-based research and innovative training
          programs, we empower decision-makers with insights that drive
          sustainable employment strategies.
        </p>
      </section>

      {/* 3. Mission */}
      <section className="section-card space-y-4">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
          Mission
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          To strengthen labor market systems across East Africa through
          high-quality research, capacity building, and strategic partnerships
          that support inclusive economic growth and employment opportunities.
        </p>
      </section>

      {/* 4. Vision */}
      <section className="section-card space-y-4">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
          Vision
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          A dynamic East African region where labor markets are inclusive,
          skills are aligned with industry needs, and every individual has
          access to meaningful employment opportunities.
        </p>
      </section>

      {/* 5. Core Values */}
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            Core Values
          </h2>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.id}
                className="section-card flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-primary">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* 6. Founder Story */}
      <section className="section-card flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-2xl bg-muted/50 sm:w-64 sm:aspect-square">
          <Image
            src="/images/about/founder.jpg"
            alt={founder.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 256px"
          />
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Founder
          </p>
          <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            {founder.name}
          </h2>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary/80">
            {founder.title}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {founder.bio}
          </p>
        </div>
      </section>

      {/* 7. Leadership Team */}
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            Leadership Team
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Our directors lead labor market studies, training, partnerships,
            and organizational strategy across the region.
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leadershipTeam.map((member) => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* 8. Our Team */}
      <section className="section-card space-y-5">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
          Our Team
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          East Africa Labor Market brings together experts from multiple
          disciplines:
        </p>
        <ul className="flex flex-wrap gap-2">
          {teamDisciplines.map((d) => (
            <li
              key={d}
              className="rounded-full bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary sm:text-sm"
            >
              {d}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Our team works collaboratively across research, training, and program
          implementation to deliver impactful solutions that strengthen
          employment systems.
        </p>
        <div className="relative aspect-[2/1] max-w-2xl overflow-hidden rounded-2xl bg-muted/50">
          <Image
            src="/images/about/team.jpg"
            alt="Diverse East African professionals working in a modern collaborative workspace"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      </section>

      {/* 9. What We Do */}
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            What We Do
          </h2>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {whatWeDoList.map((item, index) => {
            const icons = [
              BarChart3,
              BookOpen,
              GraduationCap,
              Handshake,
            ] as const;
            const Icon = icons[index] ?? BarChart3;
            return (
              <article
                key={item.id}
                className="section-card flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* 10. Our Impact */}
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            Our Impact
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Our work translates into measurable outcomes across training,
            research, partnerships, and professional development.
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aboutImpactStats.map((stat) => (
            <div
              key={stat.id}
              className="section-card flex flex-col gap-1 text-center"
            >
              <span className="text-2xl font-semibold tracking-tight text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Regional Focus */}
      <section className="section-card space-y-6">
        <header className="space-y-2">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            Regional Focus
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            We focus on strengthening labor markets across East Africa.
          </p>
        </header>
        <ul className="flex flex-wrap gap-3">
          {regionalFocusCountries.map((country) => (
            <li
              key={country}
              className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-2 text-sm font-medium text-primary"
            >
              <MapPin className="h-4 w-4 text-accent" />
              {country}
            </li>
          ))}
        </ul>
        <div className="relative aspect-[2/1] max-w-xl overflow-hidden rounded-2xl bg-muted/50">
          <Image
            src="/images/about/map-east-africa.jpg"
            alt="Map of East Africa highlighting Kenya, Ethiopia, Somalia, Uganda, Tanzania, Rwanda, and Djibouti"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 576px"
          />
        </div>
      </section>

      {/* 12. Organization Timeline */}
      <section className="section-card space-y-6">
        <header className="space-y-2">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            Organization Timeline
          </h2>
        </header>
        <Timeline items={aboutTimeline} />
      </section>

      {/* 13. Partners */}
      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            Partners
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            We work with leading international and regional organizations.
          </p>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {aboutPartners.map((partner) => (
            <div
              key={partner.id}
              className="flex min-w-[140px] items-center justify-center rounded-xl bg-card px-4 py-3 shadow-sm ring-1 ring-border/70"
            >
              <span className="text-center text-xs font-medium text-muted-foreground sm:text-sm">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 14. Call To Action */}
      <CTASection
        headline="Join Our Mission to Strengthen Workforce Development in East Africa"
        primaryLabel="Explore Programs"
        primaryHref="/human-development"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Building2,
  FileSearch,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

import { coreServices } from "@/data/services";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="h-6 w-6 text-primary" />,
  Briefcase: <Briefcase className="h-6 w-6 text-primary" />,
  FileSearch: <FileSearch className="h-6 w-6 text-primary" />,
  GraduationCap: <GraduationCap className="h-6 w-6 text-primary" />,
  Building2: <Building2 className="h-6 w-6 text-primary" />,
};

export function CoreServicesSection() {
  return (
    <section className="space-y-10">
      <motion.h2
        className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Core Services
      </motion.h2>
      <div className="space-y-12">
        {coreServices.map((service, idx) => (
          <motion.article
            key={service.id}
            id={service.id}
            className="scroll-mt-24 rounded-2xl bg-card p-6 shadow-md ring-1 ring-border/60 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.08)" }}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    {iconMap[service.icon] ?? <BarChart3 className="h-6 w-6 text-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-primary sm:text-xl">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                {service.bullets.length > 0 && (
                  <ul className="grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {service.deliverablesLabel ?? "What We Deliver"}
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {service.deliverables.map((d) => (
                      <li key={d}>• {d}</li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="sm" className="rounded-full px-4 font-semibold">
                  <Link href={service.buttonHref}>{service.buttonLabel}</Link>
                </Button>
              </div>
              <div className="hidden h-48 w-56 shrink-0 overflow-hidden rounded-xl bg-primary/10 lg:block">
                <div className="flex h-full w-full items-center justify-center text-xs text-primary/60">
                  {service.imageAlt}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

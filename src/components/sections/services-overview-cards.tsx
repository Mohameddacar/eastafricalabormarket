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

import { servicesOverview } from "@/data/services";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="h-6 w-6 text-primary" />,
  Briefcase: <Briefcase className="h-6 w-6 text-primary" />,
  FileSearch: <FileSearch className="h-6 w-6 text-primary" />,
  GraduationCap: <GraduationCap className="h-6 w-6 text-primary" />,
  Building2: <Building2 className="h-6 w-6 text-primary" />,
};

export function ServicesOverviewCards() {
  return (
    <section className="space-y-6">
      <motion.h2
        className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Services Overview
      </motion.h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicesOverview.map((item, i) => (
          <motion.article
            key={item.id}
            className="group overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-border/60 transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex h-36 items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              {iconMap[item.icon] ?? <BarChart3 className="h-10 w-10 text-primary/60" />}
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  {iconMap[item.icon] ?? <BarChart3 className="h-5 w-5 text-primary" />}
                </div>
                <h3 className="text-base font-semibold tracking-tight text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <Link href={item.href}>Learn more</Link>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

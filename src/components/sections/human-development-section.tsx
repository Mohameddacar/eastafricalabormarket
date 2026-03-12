"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Monitor,
  Rocket,
  Users,
} from "lucide-react";
import Link from "next/link";

import { humanDevelopmentPrograms } from "@/data/human-development";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="h-5 w-5 text-primary" />,
  Briefcase: <Briefcase className="h-5 w-5 text-primary" />,
  Monitor: <Monitor className="h-5 w-5 text-primary" />,
  Rocket: <Rocket className="h-5 w-5 text-primary" />,
};

export function HumanDevelopmentSection() {
  return (
    <section className="space-y-5">
      <motion.header
        className="space-y-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary">
          Human Development Programs
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Initiatives that support youth, women, digital skills, and entrepreneurship.
        </p>
      </motion.header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {humanDevelopmentPrograms.map((program, i) => (
          <motion.article
            key={program.id}
            className="section-card flex flex-col gap-3 transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              {iconMap[program.icon] ?? <Users className="h-5 w-5 text-primary" />}
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-primary">
              {program.title}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {program.description}
            </p>
          </motion.article>
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild variant="outline" size="sm" className="rounded-full">
          <Link href="/human-development">Explore Programs</Link>
        </Button>
      </div>
    </section>
  );
}

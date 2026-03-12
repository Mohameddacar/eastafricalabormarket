"use client";

import { BarChart3, Building2, FileText, Globe2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import { homeStats } from "@/data/stats";

const iconMap: Record<string, React.ReactNode> = {
  Presentation: <BarChart3 className="h-6 w-6 text-primary" />,
  FileText: <FileText className="h-6 w-6 text-primary" />,
  Building2: <Building2 className="h-6 w-6 text-primary" />,
  Globe2: <Globe2 className="h-6 w-6 text-primary" />,
};

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  isInView,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function ImpactStatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="space-y-6" ref={ref}>
      <motion.header
        className="space-y-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
          Impact Statistics
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Our reach and impact across research, training, and partnerships.
        </p>
      </motion.header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((stat, i) => {
          const numValue = parseInt(stat.value, 10) || 0;
          return (
            <motion.article
              key={stat.id}
              className="section-card flex flex-col gap-3 bg-card shadow-md transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                {iconMap[stat.icon] ?? (
                  <BarChart3 className="h-6 w-6 text-primary" />
                )}
              </div>
              <p className="text-3xl font-bold tracking-tight text-primary">
                <AnimatedCounter
                  value={numValue}
                  suffix="+"
                  isInView={isInView}
                />
              </p>
              <h3 className="text-sm font-semibold text-foreground">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

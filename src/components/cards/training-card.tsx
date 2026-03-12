"use client";

import { motion } from "framer-motion";
import { CalendarClock, GraduationCap } from "lucide-react";
import Link from "next/link";

import type { Training } from "@/types";
import { Button } from "@/components/ui/button";

type TrainingCardProps = {
  training: Training;
};

export function TrainingCard({ training }: TrainingCardProps) {
  return (
    <motion.article
      className="section-card flex flex-col gap-3 transition-shadow hover:shadow-lg"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex gap-2">
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
          {training.level}
        </span>
        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          {training.format}
        </span>
      </div>
      <header className="space-y-1">
        <h3 className="text-sm font-semibold tracking-tight text-primary sm:text-base">
          {training.title}
        </h3>
        {training.description && (
          <p className="text-xs leading-relaxed text-muted-foreground">
            {training.description}
          </p>
        )}
      </header>
      <dl className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <CalendarClock className="h-4 w-4 text-primary" />
          <dd>Duration: {training.duration}</dd>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-primary" />
          <dd>Level: {training.level}</dd>
        </div>
      </dl>
      <div className="mt-auto pt-2">
        <Button asChild size="sm" className="rounded-full px-4 text-xs font-semibold">
          <Link href="/registration">Register</Link>
        </Button>
      </div>
    </motion.article>
  );
}


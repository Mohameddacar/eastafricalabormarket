"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

import type { ResearchReport } from "@/types";
import { Button } from "@/components/ui/button";

type ResearchCardProps = {
  report: ResearchReport;
};

export function ResearchCard({ report }: ResearchCardProps) {
  return (
    <motion.article
      className="section-card flex flex-col gap-3 transition-shadow hover:shadow-lg"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <header className="space-y-1">
        <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
          {report.category}
        </p>
        <h3 className="text-sm font-semibold tracking-tight text-primary sm:text-base">
          {report.title}
        </h3>
        <p className="text-xs text-muted-foreground sm:text-[13px]">
          {report.summary}
        </p>
      </header>
      <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="inline-flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          <span>{report.author}</span>
        </div>
        <Button
          asChild
          size="sm"
          variant="outline"
          className="rounded-full border-primary/20 px-3 text-[11px] font-semibold"
        >
          <Link href={report.href}>
            <Download className="mr-1.5 h-3.5 w-3.5" />
            Download Report
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}


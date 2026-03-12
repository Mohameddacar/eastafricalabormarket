"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

import type { Partner } from "@/types";

type PartnerCardProps = {
  partner: Partner;
};

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <motion.div
      className="flex items-center justify-center gap-3 rounded-2xl bg-card/90 px-4 py-4 shadow-sm ring-1 ring-border/70 transition-shadow hover:shadow-md"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5">
        <Building2 className="h-4 w-4 text-primary" />
      </div>
      <p className="text-center text-xs font-medium text-foreground sm:text-sm">
        {partner.name}
      </p>
    </motion.div>
  );
}


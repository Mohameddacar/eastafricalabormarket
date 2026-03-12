"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  GraduationCap,
  Handshake,
  LineChart,
  Users,
} from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: "research" | "policy" | "capacity" | "human" | "ppp";
};

const iconByType: Record<ServiceCardProps["icon"], React.ReactNode> = {
  research: <LineChart className="h-5 w-5 text-primary" />,
  policy: <Briefcase className="h-5 w-5 text-primary" />,
  capacity: <GraduationCap className="h-5 w-5 text-primary" />,
  human: <Users className="h-5 w-5 text-primary" />,
  ppp: <Handshake className="h-5 w-5 text-primary" />,
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.article
      className="section-card flex flex-col gap-3 transition-shadow hover:shadow-lg"
      whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.08)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          {iconByType[icon]}
        </div>
        <h3 className="text-sm font-semibold tracking-tight text-primary sm:text-base">
          {title}
        </h3>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {description}
      </p>
    </motion.article>
  );
}


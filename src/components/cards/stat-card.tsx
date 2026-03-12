import { BarChart3, Building2, FileText, Globe2 } from "lucide-react";

import type { Stat } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  Presentation: <BarChart3 className="h-5 w-5 text-primary" />,
  FileText: <FileText className="h-5 w-5 text-primary" />,
  Building2: <Building2 className="h-5 w-5 text-primary" />,
  Globe2: <Globe2 className="h-5 w-5 text-primary" />,
};

type StatCardProps = {
  stat: Stat;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className="section-card flex flex-col gap-2 bg-card/90 p-5">
      <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5">
          {iconMap[stat.icon] ?? (
            <BarChart3 className="h-5 w-5 text-primary" />
          )}
        </span>
        <span>{stat.label}</span>
      </div>
      <p className="text-2xl font-semibold tracking-tight text-primary">
        {stat.value}
      </p>
    </article>
  );
}


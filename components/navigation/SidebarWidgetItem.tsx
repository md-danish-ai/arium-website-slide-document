"use client";

import React from "react";
import { WidgetCategory } from "@/types/widget.types";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";

const CATEGORY_BADGE_STYLES: Record<
  WidgetCategory,
  { pill: string; dot: string }
> = {
  hero: {
    pill: "bg-cyan-50/90 text-cyan-700 border-cyan-200/80",
    dot: "bg-cyan-500",
  },
  feature: {
    pill: "bg-purple-50/90 text-purple-700 border-purple-200/80",
    dot: "bg-purple-500",
  },
  content: {
    pill: "bg-sky-50/90 text-sky-700 border-sky-200/80",
    dot: "bg-sky-500",
  },
  stats: {
    pill: "bg-emerald-50/90 text-emerald-700 border-emerald-200/80",
    dot: "bg-emerald-500",
  },
  cta: {
    pill: "bg-amber-50/95 text-amber-700 border-amber-200/90",
    dot: "bg-amber-500",
  },
  testimonials: {
    pill: "bg-fuchsia-50/90 text-fuchsia-700 border-fuchsia-200/80",
    dot: "bg-fuchsia-500",
  },
  flow: {
    pill: "bg-violet-50/90 text-violet-700 border-violet-200/80",
    dot: "bg-violet-500",
  },
  people: {
    pill: "bg-indigo-50/90 text-indigo-700 border-indigo-200/80",
    dot: "bg-indigo-500",
  },
  form: {
    pill: "bg-slate-100/90 text-slate-600 border-slate-200/90",
    dot: "bg-slate-400",
  },
  shared: {
    pill: "bg-teal-50/90 text-teal-700 border-teal-200/80",
    dot: "bg-teal-500",
  },
};

export interface SidebarWidgetItemProps {
  index?: number;
  label: string;
  subtitle?: string;
  category: WidgetCategory;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

/**
 * Reusable compact sidebar widget row shared across both By Page and All Widgets views.
 */
export function SidebarWidgetItem({
  index,
  label,
  subtitle,
  category,
  isActive,
  onClick,
  className,
}: SidebarWidgetItemProps) {
  const badgeStyle = CATEGORY_BADGE_STYLES[category] ?? {
    pill: "bg-slate-100/90 text-slate-600 border-slate-200/80",
    dot: "bg-slate-400",
  };

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={(e) => {
        e.currentTarget.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
        onClick();
      }}
      className={cn(
        "group relative w-full h-auto justify-between px-2.5 py-2 rounded-md text-left text-xs font-normal transition-all duration-200 ease-out transform-gpu hover:scale-[1.015] active:scale-[0.985]",
        isActive
          ? "bg-gradient-to-r from-cyan-500/14 via-cyan-50 to-teal-500/10 text-slate-900 hover:text-slate-900 border border-cyan-500 ring-1 ring-cyan-500/35 shadow-[0_2px_10px_-3px_rgba(6,182,212,0.3)]"
          : "bg-white/80 text-slate-600 border border-slate-200/75 shadow-[0_1px_2px_rgba(15,23,42,0.02)] hover:bg-white hover:text-slate-900 hover:border-cyan-300/90 hover:shadow-[0_3px_10px_-4px_rgba(6,182,212,0.18)]",
        className,
      )}
    >
      {/* Active left accent bar */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r bg-cyan-500 transition-all duration-200 ease-out",
          isActive ? "h-4 opacity-100" : "h-0 opacity-0",
        )}
      />

      <div className="flex items-center gap-2 min-w-0 pr-2 flex-1 pl-0.5">
        {typeof index === "number" ? (
          <span
            className={cn(
              "text-[10px] font-semibold font-mono tabular-nums px-1 py-0.5 rounded shrink-0 transition-colors duration-200",
              isActive
                ? "bg-cyan-500/15 text-cyan-700"
                : "bg-slate-100/85 text-slate-400 group-hover:bg-cyan-50 group-hover:text-cyan-600",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : (
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200",
              isActive
                ? "bg-cyan-500 ring-2 ring-cyan-500/25"
                : "bg-slate-300 group-hover:bg-cyan-400",
            )}
          />
        )}

        <div className="min-w-0 flex-1">
          <span
            className={cn(
              "truncate block leading-snug text-xs transition-colors duration-200",
              isActive ? "font-semibold text-slate-900" : "font-medium",
            )}
          >
            {label}
          </span>
          {subtitle && (
            <span
              className={cn(
                "text-[10px] truncate block mt-0.5 leading-tight",
                isActive ? "text-cyan-700/80" : "text-slate-400",
              )}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>

      <Badge
        variant="glass"
        className={cn(
          "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] uppercase font-bold tracking-wider shrink-0 leading-none backdrop-blur-none shadow-none transition-all duration-200",
          isActive
            ? "bg-white/95 text-cyan-700 border-cyan-400/90"
            : badgeStyle.pill,
        )}
      >
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            isActive ? "bg-cyan-500" : badgeStyle.dot,
          )}
        />
        <span>{category}</span>
      </Badge>
    </Button>
  );
}

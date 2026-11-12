"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@components/ui/collapsible";
import { cn } from "@lib/utils";

export interface SidebarCollapsibleGroupProps {
  index?: number;
  title: string;
  count: number;
  isSelected: boolean;
  isOpen: boolean;
  onHeaderClick: () => void;
  children: React.ReactNode;
}

/**
 * Compact, structured collapsible page group built with Shadcn Collapsible.
 */
export function SidebarCollapsibleGroup({
  index,
  title,
  count,
  isSelected,
  isOpen,
  onHeaderClick,
  children,
}: SidebarCollapsibleGroupProps) {
  const isHighlighted = isSelected || isOpen;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={onHeaderClick}
      className={cn(
        "w-full rounded-lg transition-all duration-200 ease-out",
        isOpen
          ? "bg-gradient-to-b from-cyan-50/70 via-slate-50/75 to-white/70 p-1.5 border border-cyan-300/80 shadow-[0_4px_16px_-6px_rgba(6,182,212,0.18)] dark:from-[#16224b]/90 dark:via-[#141e44]/90 dark:to-[#11193a]/90 dark:border-cyan-400/35 dark:shadow-[0_4px_18px_-6px_rgba(0,232,217,0.16)]"
          : "p-0",
      )}
    >
      <CollapsibleTrigger
        aria-label={`${title} (${count} widgets)`}
        onClick={(e) => {
          const target = e.currentTarget;
          requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: "smooth", block: "nearest" });
          });
        }}
        className={cn(
          "group relative w-full flex items-center justify-between px-2.5 py-2 rounded-md cursor-pointer select-none text-left transition-all duration-200 ease-out transform-gpu hover:scale-[1.015] active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 overflow-hidden",
          isHighlighted
            ? "bg-gradient-to-r from-[#162047] via-[#1c2a55] to-[#134e6f] text-white shadow-[0_4px_14px_-5px_rgba(22,32,71,0.5)] border border-cyan-400/45"
            : "bg-white/80 text-slate-700 border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)] hover:bg-white hover:text-slate-900 hover:border-cyan-300/85 hover:shadow-[0_3px_10px_-4px_rgba(6,182,212,0.16)] dark:bg-midnight-lighter/80 dark:text-slate-200 dark:border-midnight-lightest dark:shadow-none dark:hover:bg-midnight-lightest dark:hover:text-white dark:hover:border-cyan-400/45",
        )}
      >
        <div className="flex items-center gap-2 min-w-0 relative z-10">
          {typeof index === "number" && (
            <span
              className={cn(
                "text-[10px] font-mono font-semibold tabular-nums px-1.5 py-0.5 rounded shrink-0 transition-colors duration-200",
                isHighlighted
                  ? "bg-[#00e8d9]/15 text-[#00e8d9] border border-[#00e8d9]/30"
                  : "bg-slate-100/90 text-slate-500 border border-slate-200/60 group-hover:bg-cyan-50 group-hover:text-cyan-700 group-hover:border-cyan-200/70 dark:bg-midnight/90 dark:text-slate-300 dark:border-midnight-lightest dark:group-hover:bg-cyan-500/15 dark:group-hover:text-teal dark:group-hover:border-cyan-400/35",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span
            className={cn(
              "text-xs truncate transition-colors duration-200",
              isHighlighted
                ? "font-semibold text-white"
                : "font-medium text-slate-700 group-hover:text-slate-900 dark:text-slate-200 dark:group-hover:text-white",
            )}
          >
            {title}
          </span>
        </div>

        {/* Clean count badge + rotating chevron */}
        <div className="flex items-center gap-1.5 shrink-0 ml-2 relative z-10">
          <span
            className={cn(
              "inline-flex items-center text-[10px] font-mono font-semibold tabular-nums px-1.5 py-0.5 rounded transition-colors duration-200",
              isHighlighted
                ? "bg-white/12 text-[#bcf6f2] border border-white/15"
                : "bg-slate-100/90 text-slate-500 border border-slate-200/60 group-hover:bg-cyan-50 group-hover:text-cyan-700 group-hover:border-cyan-200/70 dark:bg-midnight/90 dark:text-slate-300 dark:border-midnight-lightest dark:group-hover:bg-cyan-500/15 dark:group-hover:text-teal dark:group-hover:border-cyan-400/35",
            )}
          >
            {count}
          </span>
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-all duration-200 ease-out",
              isHighlighted
                ? "text-[#00e8d9]"
                : "text-slate-400 group-hover:text-cyan-600 dark:text-slate-400 dark:group-hover:text-teal",
              isOpen ? "rotate-0" : "-rotate-90",
            )}
          />
        </div>
      </CollapsibleTrigger>

      {/* Spaced Sub-menu Tree */}
      <CollapsibleContent className="pt-1.5 pb-0.5">
        <div className="ml-3 pl-2.5 border-l border-cyan-200/90 space-y-1.5 py-0.5 pr-0.5">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

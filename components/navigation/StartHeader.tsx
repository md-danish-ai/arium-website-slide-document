"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import { ArrowLeft } from "lucide-react";
import type { SidebarMode } from "./PageSidebar";

interface StartHeaderProps {
  mode: SidebarMode;
  totalPages: number;
  totalWidgets: number;
  pageWidgetCount: number;
  activePageLabel?: string;
  activeWidgetName?: string;
}

export function StartHeader({
  mode,
  totalPages,
  totalWidgets,
  pageWidgetCount,
  activePageLabel,
  activeWidgetName,
}: StartHeaderProps) {
  return (
    <header className="w-full glass-header-light px-5 py-3 mb-3 flex items-center justify-between gap-4">
      {/* Left: Brand */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-sm shadow-cyan-500/25">
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900 text-sm tracking-wide">
            Arium Networks
          </span>
          <Badge
            variant="glassCyan"
            className="text-[11px] font-medium px-2 py-0.5 rounded-md"
          >
            Dynamic Widgets
          </Badge>
        </div>
      </div>

      {/* Center: Mode-Aware Actual Page / Widget Details */}
      <div className="hidden md:flex items-center gap-2 min-w-0 text-xs text-slate-500 font-medium px-3.5 py-1.5 rounded-full glass-inset">
        {mode === "by-page" ? (
          <>
            <span className="font-semibold text-slate-700 shrink-0 tabular-nums">
              {totalPages} {totalPages === 1 ? "Page" : "Pages"}
            </span>
            <span className="text-slate-300">·</span>
            <span className="font-semibold text-slate-700 shrink-0 tabular-nums">
              {pageWidgetCount} {pageWidgetCount === 1 ? "Widget" : "Widgets"}
            </span>
            {activePageLabel && activeWidgetName && (
              <>
                <span className="h-3.5 w-px bg-slate-200/90 mx-0.5 shrink-0" />
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-slate-700 font-medium max-w-[160px] truncate">
                    {activePageLabel}
                  </span>
                  <span className="text-slate-300 shrink-0">/</span>
                  <span className="text-cyan-700 font-semibold max-w-[220px] truncate">
                    {activeWidgetName}
                  </span>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <span className="font-semibold text-slate-700 shrink-0 tabular-nums">
              {totalWidgets} {totalWidgets === 1 ? "Widget" : "Widgets"}
            </span>
            {activeWidgetName && (
              <>
                <span className="h-3.5 w-px bg-slate-200/90 mx-0.5 shrink-0" />
                <span className="text-cyan-700 font-semibold max-w-[260px] truncate">
                  {activeWidgetName}
                </span>
              </>
            )}
          </>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <Button
          variant="midnight"
          size="sm"
          asChild
          className="group h-8 gap-1.5 px-3.5 rounded-lg text-xs font-semibold text-white cursor-pointer bg-gradient-to-r from-[#162047] via-[#1c2a55] to-[#134e6f] border border-cyan-400/35 hover:from-[#1c2a55] hover:to-[#0f5e7a] hover:border-cyan-400/60 shadow-sm shadow-cyan-500/15 hover:shadow-cyan-500/25 transition-all duration-200 ease-out transform-gpu hover:scale-[1.03] active:scale-[0.97]"
        >
          <Link href="/">
            <ArrowLeft className="w-3.5 h-3.5 text-teal transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to Home
          </Link>
        </Button>
      </div>
    </header>
  );
}

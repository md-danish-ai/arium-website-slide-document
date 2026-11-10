"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { ArrowLeft } from "lucide-react";

interface StartHeaderProps {
  totalPages: number;
  totalWidgets: number;
  activePageTitle?: string;
  activeWidgetTitle?: string;
  onReset?: () => void;
}

export function StartHeader({
  totalPages,
  totalWidgets,
  activePageTitle,
  activeWidgetTitle,
  onReset,
}: StartHeaderProps) {
  return (
    <header className="w-full bg-white border-b border-slate-200 px-5 py-3 mb-3 flex items-center justify-between gap-4 shadow-sm">
      {/* Left: Brand */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500 shadow-sm">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <div>
          <span className="font-bold text-slate-900 text-sm tracking-wide">Arium Networks</span>
          <span className="ml-2 text-[11px] font-medium px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-600 border border-cyan-200">
            Dynamic Widgets
          </span>
        </div>
      </div>

      {/* Center: Breadcrumb */}
      <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-medium">
        <span className="font-semibold text-slate-700">{totalPages} Pages</span>
        <span className="text-slate-300">·</span>
        <span className="font-semibold text-slate-700">{totalWidgets} Widgets</span>
        {activePageTitle && (
          <>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 max-w-[180px] truncate">{activePageTitle}</span>
          </>
        )}
        {activeWidgetTitle && (
          <>
            <span className="text-cyan-400">›</span>
            <span className="text-cyan-600 font-semibold max-w-[180px] truncate">{activeWidgetTitle}</span>
          </>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {onReset && (
          <button
            onClick={onReset}
            className="text-xs text-slate-500 hover:text-slate-800 font-medium px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Reset
          </button>
        )}
        <Button variant="midnight" size="sm" asChild className="bg-slate-900 hover:bg-slate-700 text-white border-0 h-8 text-xs font-medium">
          <Link href="/"><ArrowLeft className="w-3.5 h-3.5 mr-1" />Home</Link>
        </Button>
      </div>
    </header>
  );
}

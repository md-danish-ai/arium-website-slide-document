"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import { ArrowLeft, RotateCcw } from "lucide-react";

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
    <header className="w-full glass-header-light px-5 py-3 mb-3 flex items-center justify-between gap-4">
      {/* Left: Brand */}
      <div className="flex items-center gap-3">
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

      {/* Center: Breadcrumb */}
      <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-medium px-3.5 py-1.5 rounded-full glass-inset">
        <span className="font-semibold text-slate-700">{totalPages} Pages</span>
        <span className="text-slate-300">·</span>
        <span className="font-semibold text-slate-700">
          {totalWidgets} Widgets
        </span>
        {activePageTitle && (
          <>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 max-w-[180px] truncate">
              {activePageTitle}
            </span>
          </>
        )}
        {activeWidgetTitle && (
          <>
            <span className="text-cyan-500">›</span>
            <span className="text-cyan-700 font-semibold max-w-[190px] truncate">
              {activeWidgetTitle}
            </span>
          </>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {onReset && (
          <Button
            type="button"
            variant="glass"
            size="sm"
            onClick={onReset}
            className="h-8 text-xs font-medium px-3 rounded-lg"
          >
            <RotateCcw className="w-3 h-3 mr-1 text-slate-500" />
            Reset
          </Button>
        )}
        <Button
          variant="midnight"
          size="sm"
          asChild
          className="bg-slate-900/90 hover:bg-slate-800 text-white border-0 h-8 text-xs font-medium rounded-lg shadow-sm"
        >
          <Link href="/">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Home
          </Link>
        </Button>
      </div>
    </header>
  );
}

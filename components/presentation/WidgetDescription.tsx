"use client";

import React from "react";
import { ChildWidget, PageWithWidgets } from "@/types/widget.types";
import { ArrowRight } from "lucide-react";
import { cn } from "@lib/utils";

interface WidgetDescriptionProps {
  widget: ChildWidget;
  page: PageWithWidgets;
  usedInPages: { id: string; title: string; label: string; route: string }[];
  onNavigateToPage: (pageId: string) => void;
}

export function WidgetDescription({
  widget,
  page,
  usedInPages,
  onNavigateToPage,
}: WidgetDescriptionProps) {
  return (
    <div className="w-full h-full bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col gap-4">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <button
            type="button"
            onClick={() => onNavigateToPage(page.id)}
            className="text-cyan-600 hover:text-cyan-500 hover:underline transition-colors"
          >
            {page.label}
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-semibold">
            {widget.widgets_label || widget.component_name}
          </span>
        </div>
        <code className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-500">
          {widget.component_tag}
        </code>
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Widget Description
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {widget.description}
        </p>
      </div>

      {/* Usage: Where widgets are used */}
      <div className="pt-1 border-t border-slate-100 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Usage — Where widgets are used
          </h4>
          <span className="text-[10px] font-mono text-slate-400">
            {usedInPages.length} {usedInPages.length === 1 ? "page" : "pages"}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {usedInPages.map((targetPage) => {
            const isCurrent = targetPage.id === page.id;
            return (
              <button
                key={targetPage.id}
                type="button"
                onClick={() => onNavigateToPage(targetPage.id)}
                className={cn(
                  "group px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border",
                  isCurrent
                    ? "bg-cyan-50 text-cyan-700 border-cyan-200"
                    : "bg-white text-slate-600 border-slate-200 hover:border-cyan-200 hover:text-cyan-600"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isCurrent ? "bg-cyan-500" : "bg-slate-300 group-hover:bg-cyan-400"
                  )}
                />
                {targetPage.label} Page
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

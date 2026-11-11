"use client";

import React from "react";
import { ChildWidget, PageWithWidgets } from "@/types/widget.types";
import { Card } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
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
    <Card
      variant="glass"
      className="w-full h-full p-4 flex flex-col gap-4 overflow-y-auto glass-scrollbar"
    >
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200/60">
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <button
            type="button"
            onClick={() => onNavigateToPage(page.id)}
            className="text-cyan-700 hover:text-cyan-600 hover:underline transition-colors font-semibold"
          >
            {page.label}
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-semibold">
            {widget.widgets_label || widget.component_name}
          </span>
        </div>
        <Badge
          variant="glass"
          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md text-slate-600"
        >
          {widget.component_tag}
        </Badge>
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

      <Separator className="bg-slate-200/60" />

      {/* Usage: Where widgets are used */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Usage — Where widgets are used
          </h4>
          <Badge variant="glass" className="text-[10px] font-mono px-2 py-0">
            {usedInPages.length} {usedInPages.length === 1 ? "page" : "pages"}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {usedInPages.map((targetPage) => {
            const isCurrent = targetPage.id === page.id;
            return (
              <Button
                key={targetPage.id}
                type="button"
                variant="glass"
                size="xs"
                onClick={() => onNavigateToPage(targetPage.id)}
                className={cn(
                  "group px-3 py-1.5 h-auto rounded-xl text-xs font-medium transition-all flex items-center gap-1.5",
                  isCurrent
                    ? "bg-cyan-50/90 text-cyan-700 border-cyan-200/90 hover:bg-cyan-100/80"
                    : "text-slate-600 hover:border-cyan-200/90 hover:text-cyan-700",
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isCurrent
                      ? "bg-cyan-500"
                      : "bg-slate-300 group-hover:bg-cyan-400",
                  )}
                />
                <span>{targetPage.label} Page</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

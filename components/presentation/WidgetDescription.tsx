"use client";

import React from "react";
import { ChildWidget, PageWithWidgets } from "@/types/widget.types";
import { getFlatWidgetMeta, WidgetUsagePage } from "@lib/widget-helpers";
import { Card } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";

interface WidgetDescriptionProps {
  widget: ChildWidget;
  page: PageWithWidgets;
  usedInPages: WidgetUsagePage[];
  onNavigateToPage: (pageId: string) => void;
  onSelectWidget?: (pageId: string, widgetId: string) => void;
}

/**
 * Clean inspector panel displaying widget description, Strapi/component specifications,
 * `key_props`, and uniform clickable page usage badges.
 */
export function WidgetDescription({
  widget,
  page,
  usedInPages,
  onNavigateToPage,
  onSelectWidget,
}: WidgetDescriptionProps) {
  const flatMeta = getFlatWidgetMeta(widget, page.id);
  const keyProps = flatMeta?.key_props ?? widget.key_props ?? [];
  const positionNumber = String(
    (flatMeta?.position ?? widget.position) + 1,
  ).padStart(2, "0");

  const specs = [
    {
      label: "Component",
      value: flatMeta?.component_name ?? "DynamicWidget",
    },
    {
      label: "Tag",
      value: flatMeta?.component_tag ?? `<${widget.widget_key} />`,
    },
    {
      label: "Fallback Key",
      value: flatMeta?.fallback_key ?? widget.widget_key,
    },
    {
      label: "Category · Slot",
      value: `${widget.category} · #${positionNumber}`,
    },
  ];

  const handleUsageClick = (targetPage: WidgetUsagePage) => {
    if (onSelectWidget && targetPage.matchingWidgetId) {
      onSelectWidget(targetPage.id, targetPage.matchingWidgetId);
      return;
    }
    onNavigateToPage(targetPage.id);
  };

  return (
    <Card
      variant="glass"
      className="w-full h-full p-4 flex flex-col gap-3.5 overflow-y-auto glass-scrollbar"
    >
      {/* Breadcrumb & Strapi widget_key */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-200/60">
        <div className="min-w-0 flex items-center gap-1.5 text-xs font-medium">
          <button
            type="button"
            onClick={() => onNavigateToPage(page.id)}
            className="text-cyan-700 hover:text-cyan-600 hover:underline transition-colors font-semibold shrink-0"
          >
            {page.label}
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-semibold truncate">
            {widget.widgets_label || widget.widget_key}
          </span>
        </div>

        <Badge
          variant="glass"
          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md text-slate-600 shrink-0"
        >
          {widget.widget_key}
        </Badge>
      </div>

      {/* Description */}
      <div className="space-y-1">
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          Widget Description
        </h3>
        <p className="text-[13px] text-slate-600 leading-relaxed">
          {flatMeta?.description ?? widget.description}
        </p>
      </div>

      {/* Simple Metadata Grid */}
      <div className="grid grid-cols-2 gap-2">
        {specs.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-slate-200/70 bg-slate-50/70 px-2.5 py-1.5 min-w-0"
          >
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {item.label}
            </div>
            <div className="mt-0.5 font-mono text-[11px] text-slate-700 truncate">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Key Props */}
      {keyProps.length > 0 && (
        <div className="space-y-1.5">
          <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Key Props
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {keyProps.map((prop) => (
              <Badge
                key={prop}
                variant="glass"
                className="rounded-md px-2 py-0.5 font-mono text-[11px] font-normal text-slate-600 shadow-none"
              >
                {prop}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <Separator className="bg-slate-200/60" />

      {/* Usage — Uniform Page Badges */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Usage — Where Widgets Are Used
          </h4>
          <Badge variant="glass" className="text-[10px] font-mono px-2 py-0">
            {usedInPages.length} {usedInPages.length === 1 ? "page" : "pages"}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {usedInPages.map((targetPage) => (
            <button
              key={targetPage.id}
              type="button"
              onClick={() => handleUsageClick(targetPage)}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/85 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-300 hover:bg-cyan-50/60 hover:text-cyan-700 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>{targetPage.label} Page</span>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}

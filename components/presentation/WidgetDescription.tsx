"use client";

import React, { useRef } from "react";
import { cn } from "@lib/utils";
import {
  ConnectionGlobeDrawSvg,
  SmallCellsIllustrationDrawSvg,
} from "@components/presentation/AriumIllustrationDrawSvgs";
import { useSvgDraw } from "@/hooks";
import {
  ChildWidget,
  FlatWidget,
  PageWithWidgets,
  WidgetUsagePage,
} from "@/types/widget.types";
import type { SidebarMode } from "@components/navigation/PageSidebar";
import { WIDGETS_LIST } from "@data/widget";
import { Card } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";
import { ArrowUpRight, PanelTop } from "lucide-react";

interface WidgetDescriptionProps {
  widget: ChildWidget;
  page: PageWithWidgets;
  usedInPages: WidgetUsagePage[];
  flatWidget?: FlatWidget;
  mode?: SidebarMode;
  onNavigateToPage: (pageId: string) => void;
  onSelectWidget?: (pageId: string, widgetId: string) => void;
  onNavigateToUsage?: (pageId: string, widgetId?: string) => void;
}

interface DescriptionBgDrawWatermarkProps {
  mode: SidebarMode;
}

function DescriptionBgDrawWatermark({ mode }: DescriptionBgDrawWatermarkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAllWidgets = mode === "all-widgets";

  useSvgDraw(
    {
      selector: isAllWidgets ? ".draw-svg" : ".draw-svg-purple",
      color: isAllWidgets ? "#00E8D9" : "#06b6d4",
      fillColor: isAllWidgets ? "#00E8D9" : "#06b6d4",
      drawDuration: 2.2,
      totalSpread: 0.2,
      fillDelay: 0.25,
      fillDuration: 0.6,
      threshold: 0.05,
      replay: false,
    },
    containerRef,
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden flex items-end justify-end"
    >
      <div
        className={cn(
          "w-[320px] sm:w-[390px] lg:w-[430px] -mr-8 translate-y-8 sm:translate-y-10 transition-opacity duration-300",
          isAllWidgets ? "opacity-[0.22]" : "opacity-[0.18]",
        )}
      >
        {isAllWidgets ? (
          <SmallCellsIllustrationDrawSvg className="w-full h-auto" />
        ) : (
          <ConnectionGlobeDrawSvg className="w-full h-auto" />
        )}
      </div>
    </div>
  );
}

/**
 * Clean inspector panel displaying widget description, Strapi/component specifications,
 * `key_props`, and uniform clickable page usage badges.
 */
export function WidgetDescription({
  widget,
  page,
  usedInPages,
  flatWidget,
  mode = "by-page",
  onNavigateToPage,
  onSelectWidget,
  onNavigateToUsage,
}: WidgetDescriptionProps) {
  const flatMeta =
    flatWidget ??
    WIDGETS_LIST.find((item) => item.id === widget.id) ??
    WIDGETS_LIST.find(
      (item) =>
        item.page_id === page.id &&
        item.widget_key === widget.widget_key &&
        item.position === widget.position,
    ) ??
    WIDGETS_LIST.find((item) => item.widget_key === widget.widget_key);
  const keyProps = flatMeta?.key_props ?? widget.key_props ?? [];

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
  ];

  const handleUsageClick = (targetPage: WidgetUsagePage) => {
    if (onNavigateToUsage) {
      onNavigateToUsage(targetPage.id, targetPage.matchingWidgetId);
      return;
    }
    if (onSelectWidget && targetPage.matchingWidgetId) {
      onSelectWidget(targetPage.id, targetPage.matchingWidgetId);
      return;
    }
    onNavigateToPage(targetPage.id);
  };

  const showUsageSection = mode === "all-widgets";

  return (
    <Card
      variant="glass"
      className="relative w-full h-full overflow-hidden flex flex-col"
    >
      {/* Subtle Mode-Specific Animated Vector Watermark */}
      <DescriptionBgDrawWatermark
        key={
          mode === "all-widgets" ? `${mode}-${widget.id}` : `${mode}-${page.id}`
        }
        mode={mode}
      />

      <div className="relative z-10 flex-1 min-h-0 p-4 flex flex-col gap-3.5 overflow-y-auto glass-scrollbar">
        {/* Breadcrumb & Strapi widget_key */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-200/60 dark:border-midnight-lightest/85">
          <div className="min-w-0 flex items-center gap-1.5 text-xs font-medium">
            {mode === "by-page" && (
              <>
                <button
                  type="button"
                  onClick={() => onNavigateToPage(page.id)}
                  className="text-cyan-700 hover:text-cyan-600 dark:text-teal dark:hover:text-cyan-300 hover:underline transition-colors font-semibold shrink-0 cursor-pointer"
                >
                  {page.label}
                </button>
                <span className="text-slate-300 dark:text-slate-600">/</span>
              </>
            )}
            <span className="text-slate-800 dark:text-white font-semibold truncate">
              {widget.widgets_label || widget.widget_key}
            </span>
          </div>

          <Badge
            variant="glass"
            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md text-slate-600 dark:text-slate-200 shrink-0"
          >
            {widget.widget_key}
          </Badge>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <h3 className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Widget Description
          </h3>
          <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
            {flatMeta?.description ?? widget.description}
          </p>
        </div>

        {/* Inline Technical Metadata */}
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2 py-2.5 border-y border-slate-200/60 dark:border-midnight-lightest/85">
          {specs.map((item) => (
            <div key={item.label} className="min-w-0">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                {item.label}
              </dt>
              <dd className="mt-0.5 font-mono text-[11px] font-medium text-slate-700 dark:text-slate-200 truncate">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Key Props */}
        {keyProps.length > 0 && (
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Key Props
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {keyProps.map((prop) => (
                <Badge
                  key={prop}
                  variant="outline"
                  className="rounded-md px-2 py-0.5 font-mono text-[11px] font-medium border-cyan-500 ring-1 ring-cyan-500/35 bg-gradient-to-r from-cyan-500/14 via-cyan-50 to-teal-500/10 text-slate-900 shadow-[0_2px_10px_-3px_rgba(6,182,212,0.22)] dark:border-cyan-400/70 dark:ring-cyan-400/25 dark:from-cyan-500/18 dark:via-[#17305e] dark:to-teal-500/12 dark:text-cyan-100 dark:shadow-[0_2px_12px_-3px_rgba(0,232,217,0.2)]"
                >
                  {prop}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {showUsageSection && (
          <>
            <Separator className="bg-slate-200/60 dark:bg-midnight-lightest/85" />

            {/* Usage — Uniform Page Badges */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Usage — Where Widgets Are Used
                </h4>
                <Badge
                  variant="glass"
                  className="rounded-md text-[10px] font-mono px-2 py-0.5"
                >
                  {usedInPages.length}{" "}
                  {usedInPages.length === 1 ? "page" : "pages"}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {usedInPages.map((targetPage) => (
                  <button
                    key={targetPage.id}
                    type="button"
                    onClick={() => handleUsageClick(targetPage)}
                    className="group inline-flex items-center gap-1.5 rounded-md border border-slate-200/90 border-l-2 border-l-cyan-500/75 bg-slate-50/85 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all duration-150 hover:border-cyan-400 hover:border-l-cyan-500 hover:bg-white hover:text-slate-900 hover:shadow-xs dark:border-midnight-lightest dark:border-l-teal dark:bg-midnight/75 dark:text-slate-200 dark:hover:border-cyan-400/70 dark:hover:border-l-teal dark:hover:bg-midnight-lighter dark:hover:text-white cursor-pointer"
                  >
                    <PanelTop className="w-3 h-3 text-slate-400 group-hover:text-cyan-600 dark:text-slate-400 dark:group-hover:text-teal transition-colors shrink-0" />
                    <span>{targetPage.label} Page</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-300 group-hover:text-cyan-600 dark:text-slate-500 dark:group-hover:text-teal transition-colors shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

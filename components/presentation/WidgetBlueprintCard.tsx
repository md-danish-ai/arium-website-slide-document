"use client";

import React from "react";
import {
  ChildWidget,
  PageWithWidgets,
  WidgetUsagePage,
} from "@/types/widget.types";
import type { SidebarMode } from "@components/navigation/PageSidebar";
import { WebsitePreviewCard } from "./WebsitePreviewCard";

export interface WidgetBlueprintCardProps {
  widget: ChildWidget;
  page?: PageWithWidgets;
  mode?: SidebarMode;
  usagePages?: WidgetUsagePage[];
  className?: string;
  heightClass?: string;
}

/**
 * WidgetBlueprintCard — Reusable component schematic card
 * Reuses the canonical WebsitePreviewCard with variant="blueprint"
 */
export function WidgetBlueprintCard({
  widget,
  page,
  mode = "by-page",
  usagePages,
  className,
  heightClass = "h-56 md:h-60",
}: WidgetBlueprintCardProps) {
  return (
    <WebsitePreviewCard
      variant="blueprint"
      mode={mode}
      title="Widget Image"
      widget={widget}
      page={page}
      usagePages={usagePages}
      heightClass={heightClass}
      className={className}
    />
  );
}

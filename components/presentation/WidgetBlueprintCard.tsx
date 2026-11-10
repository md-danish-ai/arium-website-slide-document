"use client";

import React from "react";
import { ChildWidget, PageWithWidgets } from "@/types/widget.types";
import { WebsitePreviewCard } from "./WebsitePreviewCard";

export interface WidgetBlueprintCardProps {
  widget: ChildWidget;
  page?: PageWithWidgets;
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
  className,
  heightClass = "h-56 md:h-60",
}: WidgetBlueprintCardProps) {
  return (
    <WebsitePreviewCard
      variant="blueprint"
      title="Widget Image"
      widget={widget}
      page={page}
      heightClass={heightClass}
      className={className}
    />
  );
}

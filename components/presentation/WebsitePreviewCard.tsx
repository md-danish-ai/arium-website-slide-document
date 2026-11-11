"use client";

import React from "react";
import Image from "next/image";
import { ChildWidget, PageWithWidgets } from "@/types/widget.types";
import { getWidgetVisualMeta } from "@lib/widget-helpers";
import { ImagePreviewer } from "@components/presentation/ImagePreviewer";
import { Badge } from "@components/ui/badge";
import { Box } from "lucide-react";

export type PreviewVariant = "browser" | "blueprint" | "media";

export interface WebsitePreviewCardProps {
  variant?: PreviewVariant;
  widget?: ChildWidget;
  page?: PageWithWidgets;
  title?: string;
  url?: string;
  headline?: string;
  description?: string;
  badgeText?: string;
  imageSrc?: string;
  imageAlt?: string;
  themeColor?: string;
  heightClass?: string;
  className?: string;
  showViewportSwitcher?: boolean;
  children?: React.ReactNode;
  modalContent?: React.ReactNode;
  onClick?: () => void;
}

function BlueprintSchematic({
  componentName,
  position,
  headline,
  assetSrc,
  assetAlt,
  accentBadge,
  displayPattern,
}: {
  componentName: string;
  position: number;
  headline: string;
  assetSrc: string;
  assetAlt: string;
  accentBadge: string;
  displayPattern: string;
}) {
  const isSvg = assetSrc.toLowerCase().endsWith(".svg");

  return (
    <div className="relative z-10 w-full max-w-xs rounded-xl border border-dashed border-slate-300 bg-white/95 backdrop-blur-md p-3.5 space-y-2.5 shadow-xs group-hover:border-cyan-400 transition-colors">
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 gap-2">
        <span className="flex items-center gap-1.5 font-semibold truncate">
          <Box className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
          <span className="truncate">{componentName}</span>
        </span>
        <Badge
          variant="glass"
          className="text-[9px] font-mono px-1.5 py-0 shrink-0"
        >
          Pos {position}
        </Badge>
      </div>

      <div className="h-6 rounded-md bg-cyan-50 border border-cyan-200/80 flex items-center px-2">
        <span className="text-[10px] font-mono text-cyan-700 font-semibold truncate">
          [slot: title] &quot;{headline}&quot;
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-0.5">
        <div className="h-11 rounded-md glass-inset flex flex-col items-center justify-center p-1 relative overflow-hidden">
          <div className="relative w-5 h-5">
            <Image
              src={assetSrc}
              alt={assetAlt}
              fill
              unoptimized={isSvg}
              className="object-contain"
            />
          </div>
          <span className="text-[8px] font-mono text-slate-500 uppercase mt-0.5">
            Media
          </span>
        </div>

        <div className="h-11 rounded-md glass-inset col-span-2 flex flex-col justify-center px-2.5 min-w-0">
          <span className="text-[9px] font-mono text-slate-700 font-semibold truncate">
            {accentBadge}
          </span>
          <span className="text-[9px] font-mono text-purple-600 font-medium truncate">
            {displayPattern}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Reusable preview card supporting browser, blueprint, and media modes via Shadcn ImagePreviewer.
 */
export function WebsitePreviewCard({
  variant = "browser",
  widget,
  page,
  title,
  headline,
  description,
  imageSrc,
  imageAlt,
  heightClass = "h-56 md:h-60",
  className,
  showViewportSwitcher = true,
  children,
  modalContent,
  onClick,
}: WebsitePreviewCardProps) {
  const visualMeta = widget ? getWidgetVisualMeta(widget) : null;

  const resolvedHeadline =
    headline ??
    widget?.widgets_title ??
    page?.title ??
    "Interactive Dynamic Canvas";

  const shortWidgetTitle =
    title ??
    (variant === "blueprint"
      ? widget?.widgets_label || widget?.component_name || "Widget Image"
      : widget?.widgets_label || widget?.component_name || resolvedHeadline);

  const resolvedBlueprintAsset =
    imageSrc ?? visualMeta?.svg ?? "/assets/connection-globe.svg";

  const resolvedPreviewImage =
    variant === "blueprint"
      ? resolvedBlueprintAsset
      : (imageSrc ??
        visualMeta?.screenshot ??
        visualMeta?.svg ??
        "/assets/connection-globe.svg");

  const responsiveScreenshots =
    variant !== "blueprint" && !imageSrc ? visualMeta?.screenshots : undefined;

  const isScreenshot =
    variant !== "blueprint" &&
    !resolvedPreviewImage.toLowerCase().endsWith(".svg");

  const resolvedImageAlt = imageAlt ?? shortWidgetTitle;

  const blueprintPreview =
    variant === "blueprint" && !children ? (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-3">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        <BlueprintSchematic
          componentName={widget?.component_name ?? "Component Blueprint"}
          position={widget?.position ?? 0}
          headline={resolvedHeadline}
          assetSrc={resolvedBlueprintAsset}
          assetAlt={resolvedImageAlt}
          accentBadge={visualMeta?.accentBadge ?? "CANONICAL WIDGET"}
          displayPattern={visualMeta?.displayPattern ?? "Dynamic Zone Widget"}
        />
      </div>
    ) : (
      children
    );

  const blueprintModal =
    modalContent ??
    (variant === "blueprint" ? (
      <div className="w-full max-w-2xl flex flex-col items-center gap-4">
        <div className="relative w-full h-64 rounded-2xl border border-dashed border-slate-300 bg-white p-6 flex items-center justify-center overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:22px_22px] pointer-events-none" />
          <BlueprintSchematic
            componentName={widget?.component_name ?? "Component Blueprint"}
            position={widget?.position ?? 0}
            headline={resolvedHeadline}
            assetSrc={resolvedBlueprintAsset}
            assetAlt={resolvedImageAlt}
            accentBadge={visualMeta?.accentBadge ?? "CANONICAL WIDGET"}
            displayPattern={visualMeta?.displayPattern ?? "Dynamic Zone Widget"}
          />
        </div>
        {widget?.source_location && (
          <Badge variant="glass" className="font-mono text-[11px] px-3 py-1">
            {widget.source_location}
          </Badge>
        )}
      </div>
    ) : undefined);

  return (
    <ImagePreviewer
      src={resolvedPreviewImage}
      responsiveSrc={responsiveScreenshots}
      fallbackSrc="/assets/connection-globe.svg"
      alt={resolvedImageAlt}
      title={shortWidgetTitle}
      subtitle={page?.label}
      description={description}
      showViewportSwitcher={variant !== "blueprint" && showViewportSwitcher}
      objectFit={isScreenshot ? "cover" : "contain"}
      heightClass={heightClass}
      className={className}
      canvasClassName={
        variant === "blueprint"
          ? "bg-slate-50/90"
          : isScreenshot
            ? "bg-transparent p-0"
            : "bg-white/90"
      }
      previewContent={blueprintPreview}
      modalContent={blueprintModal}
      onClick={onClick}
    />
  );
}

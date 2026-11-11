"use client";

import React from "react";
import { ChildWidget, PageWithWidgets } from "@/types/widget.types";
import { getWidgetVisualMeta } from "@lib/widget-helpers";
import { ImagePreviewer } from "@components/presentation/ImagePreviewer";

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

/**
 * Reusable preview card supporting browser, blueprint (Strapi widget image), and media modes via Shadcn ImagePreviewer.
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
      ? "Widget Image"
      : widget?.widgets_label || widget?.component_name || resolvedHeadline);

  const resolvedPreviewImage =
    variant === "blueprint"
      ? (imageSrc ??
        visualMeta?.strapiImage ??
        visualMeta?.svg ??
        "/assets/connection-globe.svg")
      : (imageSrc ??
        visualMeta?.screenshot ??
        visualMeta?.svg ??
        "/assets/connection-globe.svg");

  const responsiveScreenshots =
    variant !== "blueprint" && !imageSrc ? visualMeta?.screenshots : undefined;

  const isScreenshot = !resolvedPreviewImage.toLowerCase().endsWith(".svg");

  const resolvedImageAlt =
    imageAlt ??
    (variant === "blueprint"
      ? `${widget?.widgets_title ?? shortWidgetTitle} Strapi Widget`
      : shortWidgetTitle);

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
      canvasClassName={isScreenshot ? "bg-transparent p-0" : "bg-white/90"}
      previewContent={children}
      modalContent={modalContent}
      onClick={onClick}
    />
  );
}

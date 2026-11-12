"use client";

import React from "react";
import {
  ChildWidget,
  PageWithWidgets,
  PreviewImageSource,
  WidgetPreviewImages,
  WidgetUsagePage,
} from "@/types/widget.types";
import type { SidebarMode } from "@components/navigation/PageSidebar";
import { WIDGETS_LIST } from "@data/widget";
import {
  ImagePreviewer,
  normalizeImageSource,
} from "@components/presentation/ImagePreviewer";

export type PreviewVariant = "browser" | "blueprint" | "media";

export interface WebsitePreviewCardProps {
  variant?: PreviewVariant;
  mode?: SidebarMode;
  widget?: ChildWidget;
  page?: PageWithWidgets;
  usagePages?: WidgetUsagePage[];
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

function resolveFirstImage(source?: PreviewImageSource): string | undefined {
  return normalizeImageSource(source)[0];
}

/**
 * Reusable preview card supporting browser, blueprint (Strapi widget image), and media modes via Shadcn ImagePreviewer.
 */
export function WebsitePreviewCard({
  variant = "browser",
  mode = "by-page",
  widget,
  page,
  usagePages,
  title,
  headline,
  description,
  imageSrc,
  imageAlt,
  heightClass = "h-56 md:h-60",
  className,
  showViewportSwitcher = false,
  children,
  modalContent,
  onClick,
}: WebsitePreviewCardProps) {
  const flatMatch = widget
    ? (WIDGETS_LIST.find(
        (item) =>
          item.id === widget.id ||
          (item.page_id === page?.id &&
            item.widget_key === widget.widget_key &&
            item.position === widget.position),
      ) ??
      WIDGETS_LIST.find(
        (item) =>
          item.widget_key === widget.widget_key &&
          item.position === widget.position,
      ) ??
      WIDGETS_LIST.find((item) => item.widget_key === widget.widget_key))
    : undefined;

  const fallbackSvg =
    widget &&
    (widget.category === "flow" || widget.widget_key.includes("small-cells"))
      ? "/assets/small-cells-illustration.svg"
      : "/assets/connection-globe.svg";

  const singleScreenshots = widget?.preview_images ?? flatMatch?.preview_images;
  const singleDesktop = resolveFirstImage(singleScreenshots?.desktop);
  const singleTablet = resolveFirstImage(singleScreenshots?.tablet);
  const singleMobile = resolveFirstImage(singleScreenshots?.mobile);
  const singleStrapi = resolveFirstImage(
    widget?.strapi_image ?? flatMatch?.strapi_image,
  );

  const isMultiUsageMode = mode === "all-widgets" && !imageSrc;

  const blueprintEntries = isMultiUsageMode
    ? (usagePages ?? [])
        .map((entry) => ({
          label: entry.label,
          src: resolveFirstImage(entry.strapiImage),
        }))
        .filter((item): item is { label: string; src: string } =>
          Boolean(item.src),
        )
    : [];

  const browserEntries = isMultiUsageMode
    ? (usagePages ?? [])
        .map((entry) => {
          const desktop = resolveFirstImage(entry.previewImages?.desktop);
          if (!desktop) return null;
          return {
            label: entry.label,
            desktop,
            tablet: resolveFirstImage(entry.previewImages?.tablet) ?? desktop,
            mobile: resolveFirstImage(entry.previewImages?.mobile) ?? desktop,
          };
        })
        .filter(
          (
            item,
          ): item is {
            label: string;
            desktop: string;
            tablet: string;
            mobile: string;
          } => item !== null,
        )
    : [];

  const resolvedHeadline =
    headline ??
    widget?.widgets_title ??
    page?.title ??
    "Interactive Dynamic Canvas";

  const shortWidgetTitle =
    title ??
    (variant === "blueprint"
      ? "Widget Image"
      : widget?.widgets_label || widget?.widget_key || resolvedHeadline);

  const blueprintImages = imageSrc
    ? [imageSrc]
    : blueprintEntries.length > 0
      ? blueprintEntries.map((entry) => entry.src)
      : [singleStrapi ?? fallbackSvg];

  const browserImages = imageSrc
    ? [imageSrc]
    : browserEntries.length > 0
      ? browserEntries.map((entry) => entry.desktop)
      : [singleDesktop ?? fallbackSvg];

  const resolvedPreviewImages =
    variant === "blueprint" ? blueprintImages : browserImages;
  const resolvedPreviewImage = resolvedPreviewImages[0];

  let responsiveScreenshots: WidgetPreviewImages | undefined;
  if (variant !== "blueprint" && !imageSrc) {
    if (browserEntries.length > 0) {
      responsiveScreenshots = {
        desktop: browserEntries.map((entry) => entry.desktop),
        tablet: browserEntries.map((entry) => entry.tablet),
        mobile: browserEntries.map((entry) => entry.mobile),
      };
    } else if (singleDesktop) {
      responsiveScreenshots = {
        desktop: singleDesktop,
        tablet: singleTablet,
        mobile: singleMobile,
      };
    }
  }

  const activeUsageLabels = (
    variant === "blueprint" ? blueprintEntries : browserEntries
  ).map((entry) => entry.label);
  const resolvedSlideLabels =
    !imageSrc && isMultiUsageMode && activeUsageLabels.length > 1
      ? activeUsageLabels
      : undefined;

  const isScreenshot = !resolvedPreviewImage.toLowerCase().endsWith(".svg");

  const resolvedImageAlt =
    imageAlt ??
    (variant === "blueprint"
      ? `${widget?.widgets_title ?? shortWidgetTitle} Strapi Widget`
      : shortWidgetTitle);

  return (
    <ImagePreviewer
      src={resolvedPreviewImage}
      images={
        variant === "blueprint" || imageSrc ? resolvedPreviewImages : undefined
      }
      responsiveSrc={responsiveScreenshots}
      fallbackSrc="/assets/connection-globe.svg"
      alt={resolvedImageAlt}
      title={shortWidgetTitle}
      subtitle={page?.label}
      slideLabels={resolvedSlideLabels}
      description={description}
      showViewportSwitcher={variant !== "blueprint" && showViewportSwitcher}
      objectFit={isScreenshot ? "cover" : "contain"}
      heightClass={heightClass}
      className={className}
      canvasClassName={
        isScreenshot
          ? "bg-transparent p-0"
          : "bg-white/90 dark:bg-midnight-lighter/90"
      }
      previewContent={children}
      modalContent={modalContent}
      onClick={onClick}
    />
  );
}

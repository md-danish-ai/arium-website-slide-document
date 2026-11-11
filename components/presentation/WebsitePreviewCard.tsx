"use client";

import React from "react";
import { ChildWidget, PageWithWidgets } from "@/types/widget.types";
import { WIDGETS_LIST } from "@data/widget";
import {
  ImagePreviewer,
  normalizeImageSource,
} from "@components/presentation/ImagePreviewer";

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
  const visualMeta = widget
    ? (() => {
        const flatMatch =
          WIDGETS_LIST.find(
            (item) =>
              item.id === widget.id ||
              (item.widget_key === widget.widget_key &&
                item.position === widget.position),
          ) ??
          WIDGETS_LIST.find((item) => item.widget_key === widget.widget_key);
        const screenshots = flatMatch?.preview_images ?? widget.preview_images;
        const strapiImage = flatMatch?.strapi_image ?? widget.strapi_image;
        const svg =
          widget.category === "flow" ||
          widget.widget_key.includes("small-cells")
            ? "/assets/small-cells-illustration.svg"
            : "/assets/connection-globe.svg";
        const desktopImages = normalizeImageSource(screenshots?.desktop);
        const blueprintImages = normalizeImageSource(strapiImage);
        return {
          screenshots,
          desktopImages,
          screenshot: desktopImages[0],
          blueprintImages,
          strapiImage: blueprintImages[0],
          svg,
        };
      })()
    : null;

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
    : visualMeta?.blueprintImages?.length
      ? visualMeta.blueprintImages
      : [visualMeta?.svg ?? "/assets/connection-globe.svg"];

  const browserImages = imageSrc
    ? [imageSrc]
    : visualMeta?.desktopImages?.length
      ? visualMeta.desktopImages
      : [visualMeta?.svg ?? "/assets/connection-globe.svg"];

  const resolvedPreviewImages =
    variant === "blueprint" ? blueprintImages : browserImages;
  const resolvedPreviewImage = resolvedPreviewImages[0];

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
      images={
        variant === "blueprint" || imageSrc ? resolvedPreviewImages : undefined
      }
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

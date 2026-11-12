"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@components/ui/dialog";
import { Card } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import {
  Maximize2,
  Laptop,
  Tablet,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PreviewImageSource } from "@/types/widget.types";
import { cn } from "@lib/utils";

export type PreviewViewport = "desktop" | "tablet" | "mobile";

export interface ImagePreviewerProps {
  src: string;
  images?: PreviewImageSource;
  responsiveSrc?: {
    desktop?: PreviewImageSource;
    tablet?: PreviewImageSource;
    mobile?: PreviewImageSource;
  };
  fallbackSrc?: string;
  alt: string;
  title?: string;
  subtitle?: string;
  slideLabels?: string[];
  description?: string;
  tagText?: string;
  showViewportSwitcher?: boolean;
  objectFit?: "cover" | "contain";
  heightClass?: string;
  className?: string;
  canvasClassName?: string;
  previewContent?: React.ReactNode;
  modalContent?: React.ReactNode;
  onClick?: () => void;
}

export function normalizeImageSource(
  source?: PreviewImageSource,
  fallback: string[] = [],
): string[] {
  if (!source) return fallback;
  const list = (Array.isArray(source) ? source : [source]).filter(Boolean);
  return list.length > 0 ? list : fallback;
}

function wrapSlideIndex(index: number, total: number): number {
  if (total <= 0) return 0;
  return ((index % total) + total) % total;
}

const VIEWPORT_OPTIONS: {
  value: PreviewViewport;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  containerClass: string;
}[] = [
  {
    value: "desktop",
    label: "Desktop",
    Icon: Laptop,
    containerClass: "w-full",
  },
  {
    value: "tablet",
    label: "Tablet",
    Icon: Tablet,
    containerClass: "w-full max-w-xl",
  },
  {
    value: "mobile",
    label: "Mobile",
    Icon: Smartphone,
    containerClass: "w-full max-w-xs",
  },
];

/**
 * Reusable Shadcn UI Image Previewer with borderless full-width preview,
 * preloaded cross-fade viewport switching, and Dialog Lightbox.
 */
export function ImagePreviewer({
  src,
  images,
  responsiveSrc,
  fallbackSrc = "/assets/connection-globe.svg",
  alt,
  title = "Image Preview",
  subtitle,
  slideLabels,
  description,
  tagText,
  showViewportSwitcher = true,
  objectFit = "contain",
  heightClass = "h-56 md:h-60",
  className,
  canvasClassName,
  previewContent,
  modalContent,
  onClick,
}: ImagePreviewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewport, setViewport] = useState<PreviewViewport>("desktop");
  const [failedSrcs, setFailedSrcs] = useState<Record<string, boolean>>({});
  const [slideIndices, setSlideIndices] = useState<Record<string, number>>({});
  const [slideDirections, setSlideDirections] = useState<
    Record<string, "next" | "prev">
  >({});
  const closeResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseResetTimer = () => {
    if (closeResetTimerRef.current !== null) {
      clearTimeout(closeResetTimerRef.current);
      closeResetTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearCloseResetTimer();
    };
  }, []);

  const resolveSafeSrc = (candidate: string) =>
    failedSrcs[candidate] && fallbackSrc ? fallbackSrc : candidate;

  const markSrcFailed = (candidate: string) => {
    if (fallbackSrc && candidate !== fallbackSrc) {
      setFailedSrcs((prev) =>
        prev[candidate] ? prev : { ...prev, [candidate]: true },
      );
    }
  };

  const baseImages = normalizeImageSource(images, [src]);
  const desktopImages = normalizeImageSource(
    responsiveSrc?.desktop,
    baseImages,
  );
  const tabletImages = normalizeImageSource(
    responsiveSrc?.tablet,
    desktopImages,
  );
  const mobileImages = normalizeImageSource(
    responsiveSrc?.mobile,
    desktopImages,
  );

  const viewportImagesByKey: Record<PreviewViewport, string[]> = {
    desktop: desktopImages,
    tablet: tabletImages,
    mobile: mobileImages,
  };

  const cardImages = responsiveSrc?.desktop ? desktopImages : baseImages;
  const slideScopeKey =
    slideLabels && slideLabels.length > 0
      ? `labels:${slideLabels.join("|")}:${responsiveSrc?.desktop ? desktopImages.join("|") : baseImages.join("|")}`
      : responsiveSrc?.desktop
        ? `responsive:${desktopImages.join("|")}`
        : `card:${baseImages.join("|")}`;

  const cardSlideIndex = wrapSlideIndex(
    slideIndices[slideScopeKey] ?? 0,
    cardImages.length,
  );
  const cardRawSrc = cardImages[cardSlideIndex] ?? src;
  const cardSrc = resolveSafeSrc(cardRawSrc);

  const getViewportSlideIndex = (vp: PreviewViewport) =>
    wrapSlideIndex(
      slideIndices[slideScopeKey] ?? 0,
      viewportImagesByKey[vp].length,
    );

  const activeModalImages = viewportImagesByKey[viewport];
  const activeModalIndex = getViewportSlideIndex(viewport);
  const activeModalRawSrc = activeModalImages[activeModalIndex] ?? src;
  const activeModalSrc = resolveSafeSrc(activeModalRawSrc);

  const activeCardLabel = slideLabels?.[cardSlideIndex];
  const resolvedCardSubtitle = activeCardLabel ?? subtitle;
  const activeModalLabel = slideLabels?.[activeModalIndex];
  const resolvedModalSubtitle = activeModalLabel ?? subtitle;

  const getSlideAnimClass = (key: string) => {
    const dir = slideDirections[key];
    if (dir === "next") return "preview-slide-next";
    if (dir === "prev") return "preview-slide-prev";
    return "";
  };

  const stepSlide = (key: string, total: number, delta: number) => {
    if (total <= 1) return;
    setSlideDirections((prev) => ({
      ...prev,
      [key]: delta >= 0 ? "next" : "prev",
    }));
    setSlideIndices((prev) => ({
      ...prev,
      [key]: wrapSlideIndex((prev[key] ?? 0) + delta, total),
    }));
  };

  const setExactSlide = (key: string, index: number, total: number) => {
    const wrapped = wrapSlideIndex(index, total);
    const current = wrapSlideIndex(slideIndices[key] ?? 0, total);
    if (wrapped === current) return;
    setSlideDirections((prev) => ({
      ...prev,
      [key]: wrapped > current ? "next" : "prev",
    }));
    setSlideIndices((prev) => ({
      ...prev,
      [key]: wrapped,
    }));
  };

  const handleOpen = () => {
    clearCloseResetTimer();
    setViewport("desktop");
    onClick?.();
    setIsOpen(true);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (open) {
      clearCloseResetTimer();
      setViewport("desktop");
      setIsOpen(true);
      return;
    }

    setIsOpen(false);
    clearCloseResetTimer();
    closeResetTimerRef.current = setTimeout(() => {
      setViewport("desktop");
      setSlideDirections({});
      closeResetTimerRef.current = null;
    }, 220);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
    }
  };

  const handleModalKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (activeModalImages.length <= 1 || modalContent) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      stepSlide(slideScopeKey, activeModalImages.length, -1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      stepSlide(slideScopeKey, activeModalImages.length, 1);
    }
  };

  const isCardSvg = cardSrc.toLowerCase().endsWith(".svg");
  const isActiveModalSvg = activeModalSrc.toLowerCase().endsWith(".svg");
  const currentViewport =
    VIEWPORT_OPTIONS.find((opt) => opt.value === viewport) ??
    VIEWPORT_OPTIONS[0];

  const isFullBleedScreenshot = !previewContent && objectFit === "cover";

  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <div className={cn("group relative w-full", heightClass, className)}>
          <TooltipTrigger asChild>
            <Card
              variant="glass"
              role="button"
              tabIndex={0}
              aria-label={`Open ${title} preview`}
              onClick={handleOpen}
              onKeyDown={handleKeyDown}
              className={cn(
                "relative w-full h-full overflow-hidden cursor-pointer flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
                isFullBleedScreenshot
                  ? "border-0 bg-transparent shadow-md hover:shadow-[0_12px_30px_-10px_rgba(6,182,212,0.28)]"
                  : "hover:border-cyan-300 hover:shadow-[0_12px_30px_-10px_rgba(6,182,212,0.18)]",
              )}
            >
              <div
                className={cn(
                  "relative flex-1 w-full h-full overflow-hidden flex items-center justify-center",
                  isFullBleedScreenshot
                    ? "bg-transparent"
                    : "bg-white/80 dark:bg-midnight-lighter/85",
                  canvasClassName,
                )}
              >
                {previewContent ? (
                  previewContent
                ) : (
                  <div
                    key={`${slideScopeKey}-${cardSlideIndex}`}
                    className={cn(
                      "relative w-full h-full",
                      getSlideAnimClass(slideScopeKey),
                    )}
                  >
                    <Image
                      src={cardSrc}
                      alt={
                        cardImages.length > 1 && activeCardLabel
                          ? `${alt} — ${activeCardLabel}`
                          : alt
                      }
                      fill
                      unoptimized={isCardSvg}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      onError={() => markSrcFailed(cardRawSrc)}
                      className={cn(
                        "w-full h-full transition-transform duration-300 group-hover:scale-[1.015]",
                        objectFit === "cover"
                          ? "object-cover object-top"
                          : "object-contain p-4",
                      )}
                    />
                  </div>
                )}

                {/* Subtle Hover Expand Pill */}
                <div className="absolute inset-0 bg-white/25 dark:bg-midnight/45 backdrop-blur-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none z-20">
                  <Badge
                    variant="glass"
                    className="px-3.5 py-1.5 rounded-xl bg-white/95 border-cyan-200 text-slate-800 dark:bg-midnight/95 dark:border-cyan-400/45 dark:text-slate-100 shadow-md flex items-center gap-2 text-xs font-semibold group-hover:scale-105 transition-transform"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-600 dark:text-teal" />
                    <span>
                      {resolvedCardSubtitle
                        ? `${resolvedCardSubtitle} / ${title}`
                        : title}
                    </span>
                  </Badge>
                </div>
              </div>
            </Card>
          </TooltipTrigger>

          {/* Inline Prev / Next Slide Controls when multiple images exist */}
          {cardImages.length > 1 && !previewContent && (
            <>
              <button
                type="button"
                aria-label="Previous preview image"
                onClick={(e) => {
                  e.stopPropagation();
                  stepSlide(slideScopeKey, cardImages.length, -1);
                }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-700 shadow-md flex items-center justify-center opacity-85 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-150 hover:border-cyan-500 hover:text-cyan-700 hover:scale-105 active:scale-95 dark:bg-midnight/90 dark:border-midnight-lightest dark:text-slate-200 dark:hover:border-cyan-400/70 dark:hover:text-teal cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Next preview image"
                onClick={(e) => {
                  e.stopPropagation();
                  stepSlide(slideScopeKey, cardImages.length, 1);
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-700 shadow-md flex items-center justify-center opacity-85 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-150 hover:border-cyan-500 hover:text-cyan-700 hover:scale-105 active:scale-95 dark:bg-midnight/90 dark:border-midnight-lightest dark:text-slate-200 dark:hover:border-cyan-400/70 dark:hover:text-teal cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-2.5 right-2.5 z-30 inline-flex items-center gap-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/90 px-2.5 py-1 shadow-sm dark:bg-midnight/90 dark:border-midnight-lightest"
              >
                {activeCardLabel && (
                  <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200 pr-0.5 whitespace-nowrap">
                    {activeCardLabel}
                  </span>
                )}
                <div className="flex items-center gap-1">
                  {cardImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={
                        slideLabels?.[idx]
                          ? `View ${slideLabels[idx]} preview`
                          : `View image ${idx + 1}`
                      }
                      onClick={() =>
                        setExactSlide(slideScopeKey, idx, cardImages.length)
                      }
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-150 cursor-pointer",
                        idx === cardSlideIndex
                          ? "w-4 bg-cyan-500 dark:bg-teal"
                          : "w-1.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500",
                      )}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <TooltipContent
          side="bottom"
          className="bg-white/95 backdrop-blur-md border-slate-200 text-slate-700 text-xs shadow-md dark:bg-midnight dark:border-midnight-lightest dark:text-slate-200"
        >
          Click to preview{" "}
          {resolvedCardSubtitle ? `${resolvedCardSubtitle} / ${title}` : title}
        </TooltipContent>
      </Tooltip>

      {/* Shadcn Responsive Dialog Lightbox */}
      <Dialog open={isOpen} onOpenChange={handleDialogOpenChange}>
        <DialogContent
          variant="glass"
          onKeyDown={handleModalKeyDown}
          className="max-w-[1400px] w-[94vw] max-h-[92vh] p-0 overflow-hidden flex flex-col gap-0 border-0 bg-white dark:bg-midnight shadow-2xl"
        >
          <DialogHeader className="shrink-0 px-5 py-3.5 bg-white/95 dark:bg-midnight/95 backdrop-blur-md border-b border-slate-200/80 dark:border-midnight-lightest flex flex-row items-center justify-between gap-4 space-y-0 pr-12">
            <div className="min-w-0 flex items-center gap-2">
              <DialogTitle className="text-sm md:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 truncate">
                {resolvedModalSubtitle && (
                  <>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {resolvedModalSubtitle}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">
                      /
                    </span>
                  </>
                )}
                <span className="text-cyan-700 dark:text-teal truncate">
                  {title}
                </span>
              </DialogTitle>
              {tagText && (
                <Badge
                  variant="glassCyan"
                  className="text-[10px] font-mono shrink-0"
                >
                  {tagText}
                </Badge>
              )}
              <DialogDescription className="sr-only">
                {description ||
                  `${resolvedModalSubtitle ? `${resolvedModalSubtitle} / ` : ""}${title}`}
              </DialogDescription>
            </div>

            {showViewportSwitcher && (
              <Tabs
                value={viewport}
                onValueChange={(val) => setViewport(val as PreviewViewport)}
                className="hidden sm:block shrink-0"
              >
                <TabsList
                  variant="glass"
                  className="h-auto p-1 gap-1 rounded-lg bg-slate-100/90 border border-slate-200/80 dark:bg-[#0f1738] dark:border-midnight-lightest"
                >
                  {VIEWPORT_OPTIONS.map(({ value, label, Icon }) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      className="h-7 px-2.5 py-1 text-xs gap-1.5 rounded-md border border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/70 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/15 data-[state=active]:via-cyan-50 data-[state=active]:to-teal-500/10 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 data-[state=active]:ring-1 data-[state=active]:ring-cyan-500/35 data-[state=active]:shadow-[0_2px_10px_-3px_rgba(6,182,212,0.3)] [&_svg]:transition-colors data-[state=active]:[&_svg]:text-cyan-600 dark:text-slate-300 dark:hover:text-white dark:hover:bg-midnight-lighter/70 dark:data-[state=active]:from-cyan-500/20 dark:data-[state=active]:via-[#17305e] dark:data-[state=active]:to-teal-500/15 dark:data-[state=active]:text-white dark:data-[state=active]:border-cyan-400/80 dark:data-[state=active]:ring-cyan-400/30 dark:data-[state=active]:[&_svg]:text-teal"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            )}
          </DialogHeader>

          {/* Modal Body — Theme-aware stage with preloaded smooth cross-fade + Prev/Next */}
          <div className="relative flex-1 min-h-0 flex flex-col">
            <div
              className={cn(
                "flex-1 min-h-0 overflow-auto flex items-center justify-center glass-scrollbar transition-[padding] duration-300",
                modalContent || isActiveModalSvg
                  ? "p-4 md:p-6 bg-slate-50 dark:bg-[#0d1430]"
                  : viewport === "desktop"
                    ? "p-0 bg-white dark:bg-[#0d1430]"
                    : "p-4 md:p-6 bg-slate-50 dark:bg-[#0d1430]",
              )}
            >
              {modalContent ? (
                modalContent
              ) : (
                <div
                  className={cn(
                    "relative transition-all duration-300 ease-out overflow-hidden flex items-center justify-center",
                    currentViewport.containerClass,
                  )}
                >
                  {isActiveModalSvg ? (
                    <div
                      key={`${slideScopeKey}-${activeModalIndex}`}
                      className={cn(
                        "relative w-full h-[65vh] min-h-[320px] max-h-[620px] flex items-center justify-center bg-white dark:bg-midnight-lighter rounded-xl",
                        getSlideAnimClass(slideScopeKey),
                      )}
                    >
                      <Image
                        src={activeModalSrc}
                        alt={alt}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 95vw, 90vw"
                        onError={() => markSrcFailed(activeModalRawSrc)}
                        className="w-full h-full object-contain p-6"
                      />
                    </div>
                  ) : (
                    VIEWPORT_OPTIONS.map(({ value }) => {
                      const vpList = viewportImagesByKey[value];
                      const vpIdx = getViewportSlideIndex(value);
                      const rawSrc = vpList[vpIdx] ?? src;
                      const resolvedSrc = resolveSafeSrc(rawSrc);
                      const isLayerSvg = resolvedSrc
                        .toLowerCase()
                        .endsWith(".svg");
                      const isActive = viewport === value;

                      return (
                        <div
                          key={`${value}-${vpIdx}`}
                          className={cn(
                            "flex items-center justify-center transition-all duration-200 ease-out",
                            isActive
                              ? cn(
                                  "relative z-10 w-full opacity-100 scale-100",
                                  getSlideAnimClass(slideScopeKey),
                                )
                              : "absolute inset-0 m-auto w-full h-full opacity-0 scale-[0.985] pointer-events-none",
                          )}
                        >
                          <Image
                            src={resolvedSrc}
                            alt={
                              vpList.length > 1 && slideLabels?.[vpIdx]
                                ? `${alt} — ${value} (${slideLabels[vpIdx]})`
                                : alt
                            }
                            width={1920}
                            height={1080}
                            priority
                            unoptimized={isLayerSvg}
                            sizes={
                              value === "desktop"
                                ? "94vw"
                                : value === "tablet"
                                  ? "576px"
                                  : "320px"
                            }
                            onError={() => markSrcFailed(rawSrc)}
                            className={cn(
                              "block mx-auto w-auto max-w-full h-auto object-contain",
                              value === "desktop"
                                ? "max-h-[78vh]"
                                : "max-h-[74vh]",
                            )}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>

            {activeModalImages.length > 1 && !modalContent && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() =>
                    stepSlide(slideScopeKey, activeModalImages.length, -1)
                  }
                  className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-700 shadow-lg flex items-center justify-center transition-all duration-150 hover:border-cyan-500 hover:text-cyan-700 hover:scale-105 active:scale-95 dark:bg-midnight/90 dark:border-midnight-lightest dark:text-slate-200 dark:hover:border-cyan-400/70 dark:hover:text-teal cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() =>
                    stepSlide(slideScopeKey, activeModalImages.length, 1)
                  }
                  className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-700 shadow-lg flex items-center justify-center transition-all duration-150 hover:border-cyan-500 hover:text-cyan-700 hover:scale-105 active:scale-95 dark:bg-midnight/90 dark:border-midnight-lightest dark:text-slate-200 dark:hover:border-cyan-400/70 dark:hover:text-teal cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {activeModalImages.length > 1 && !modalContent && (
            <div className="shrink-0 px-4 py-2.5 bg-white/95 dark:bg-midnight/95 backdrop-blur-md border-t border-slate-200/80 dark:border-midnight-lightest flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium min-w-[90px]">
                {showViewportSwitcher && (
                  <span className="capitalize text-slate-700 dark:text-slate-200 font-semibold">
                    {viewport}
                  </span>
                )}
                {showViewportSwitcher && resolvedModalSubtitle && (
                  <span className="text-slate-300 dark:text-slate-600">·</span>
                )}
                {resolvedModalSubtitle && (
                  <span className="text-slate-700 dark:text-slate-200 font-medium truncate max-w-[180px]">
                    {resolvedModalSubtitle}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                {activeModalImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={
                      slideLabels?.[idx]
                        ? `Go to ${slideLabels[idx]} slide`
                        : `Go to slide ${idx + 1}`
                    }
                    onClick={() =>
                      setExactSlide(
                        slideScopeKey,
                        idx,
                        activeModalImages.length,
                      )
                    }
                    className={cn(
                      "h-2 rounded-full transition-all duration-150 cursor-pointer",
                      idx === activeModalIndex
                        ? "w-6 bg-cyan-500 dark:bg-teal shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                        : "w-2 bg-slate-200 hover:bg-slate-300 dark:bg-midnight-lightest dark:hover:bg-slate-600",
                    )}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    stepSlide(slideScopeKey, activeModalImages.length, -1)
                  }
                  className="inline-flex items-center gap-1 rounded-md border border-slate-200/90 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-700 dark:border-midnight-lightest dark:bg-midnight-lighter dark:text-slate-200 dark:hover:border-cyan-400/70 dark:hover:text-teal cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    stepSlide(slideScopeKey, activeModalImages.length, 1)
                  }
                  className="inline-flex items-center gap-1 rounded-md border border-slate-200/90 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-700 dark:border-midnight-lightest dark:bg-midnight-lighter dark:text-slate-200 dark:hover:border-cyan-400/70 dark:hover:text-teal cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}

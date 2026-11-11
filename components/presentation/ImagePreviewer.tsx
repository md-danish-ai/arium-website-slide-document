"use client";

import React, { useState } from "react";
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
import { Maximize2, Laptop, Tablet, Smartphone } from "lucide-react";
import { cn } from "@lib/utils";

export type PreviewViewport = "desktop" | "tablet" | "mobile";

export interface ImagePreviewerProps {
  src: string;
  responsiveSrc?: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
  fallbackSrc?: string;
  alt: string;
  title?: string;
  subtitle?: string;
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
  responsiveSrc,
  fallbackSrc = "/assets/connection-globe.svg",
  alt,
  title = "Image Preview",
  subtitle,
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

  const resolveSafeSrc = (candidate: string) =>
    failedSrcs[candidate] && fallbackSrc ? fallbackSrc : candidate;

  const markSrcFailed = (candidate: string) => {
    if (fallbackSrc && candidate !== fallbackSrc) {
      setFailedSrcs((prev) =>
        prev[candidate] ? prev : { ...prev, [candidate]: true },
      );
    }
  };

  const cardSrc = resolveSafeSrc(src);

  const viewportRawByKey: Record<PreviewViewport, string> = {
    desktop: responsiveSrc?.desktop || src,
    tablet: responsiveSrc?.tablet || responsiveSrc?.desktop || src,
    mobile: responsiveSrc?.mobile || responsiveSrc?.desktop || src,
  };

  const activeModalSrc = resolveSafeSrc(viewportRawByKey[viewport]);

  const handleOpen = () => {
    onClick?.();
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
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
        <TooltipTrigger asChild>
          <Card
            variant="glass"
            role="button"
            tabIndex={0}
            aria-label={`Open ${title} preview`}
            onClick={handleOpen}
            onKeyDown={handleKeyDown}
            className={cn(
              "group relative w-full overflow-hidden cursor-pointer flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
              isFullBleedScreenshot
                ? "border-0 bg-transparent shadow-md hover:shadow-[0_12px_30px_-10px_rgba(6,182,212,0.28)]"
                : "hover:border-cyan-300 hover:shadow-[0_12px_30px_-10px_rgba(6,182,212,0.18)]",
              heightClass,
              className,
            )}
          >
            <div
              className={cn(
                "relative flex-1 w-full h-full overflow-hidden flex items-center justify-center",
                isFullBleedScreenshot ? "bg-transparent" : "bg-white/80",
                canvasClassName,
              )}
            >
              {previewContent ? (
                previewContent
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={cardSrc}
                    alt={alt}
                    fill
                    unoptimized={isCardSvg}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    onError={() => markSrcFailed(src)}
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
              <div className="absolute inset-0 bg-white/25 backdrop-blur-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none z-20">
                <Badge
                  variant="glass"
                  className="px-3.5 py-1.5 rounded-xl bg-white/95 border-cyan-200 text-slate-800 shadow-md flex items-center gap-2 text-xs font-semibold group-hover:scale-105 transition-transform"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-600" />
                  <span>{subtitle ? `${subtitle} / ${title}` : title}</span>
                </Badge>
              </div>
            </div>
          </Card>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="bg-white/95 backdrop-blur-md border-slate-200 text-slate-700 text-xs shadow-md"
        >
          Click to preview {subtitle ? `${subtitle} / ${title}` : title}
        </TooltipContent>
      </Tooltip>

      {/* Shadcn White Dialog Lightbox */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          variant="glass"
          className="max-w-[1400px] w-[94vw] max-h-[92vh] p-0 overflow-hidden flex flex-col gap-0 border-0 bg-white shadow-2xl"
        >
          <DialogHeader className="px-5 py-3.5 bg-white/95 backdrop-blur-md border-b border-slate-200/80 flex flex-row items-center justify-between gap-4 space-y-0 pr-12">
            <div className="min-w-0 flex items-center gap-2">
              <DialogTitle className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-1.5 truncate">
                {subtitle && (
                  <>
                    <span className="text-slate-500 font-medium">
                      {subtitle}
                    </span>
                    <span className="text-slate-300">/</span>
                  </>
                )}
                <span className="text-cyan-700 truncate">{title}</span>
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
                {description || `${subtitle ? `${subtitle} / ` : ""}${title}`}
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
                  className="h-auto p-1 gap-1 rounded-lg bg-slate-100/90 border border-slate-200/80"
                >
                  {VIEWPORT_OPTIONS.map(({ value, label, Icon }) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      className="h-7 px-2.5 py-1 text-xs gap-1.5 rounded-md border border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/70 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/15 data-[state=active]:via-cyan-50 data-[state=active]:to-teal-500/10 data-[state=active]:text-slate-900 data-[state=active]:border-cyan-500 data-[state=active]:ring-1 data-[state=active]:ring-cyan-500/35 data-[state=active]:shadow-[0_2px_10px_-3px_rgba(6,182,212,0.3)] [&_svg]:transition-colors data-[state=active]:[&_svg]:text-cyan-600"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            )}
          </DialogHeader>

          {/* Modal Body — White standard stage with preloaded smooth cross-fade */}
          <div
            className={cn(
              "flex-1 overflow-auto flex items-center justify-center glass-scrollbar transition-[padding] duration-300",
              modalContent || isActiveModalSvg
                ? "p-4 md:p-6 bg-slate-50"
                : viewport === "desktop"
                  ? "p-0 bg-white"
                  : "p-4 md:p-6 bg-slate-50",
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
                  <div className="relative w-full h-[65vh] min-h-[320px] max-h-[620px] flex items-center justify-center bg-white rounded-xl">
                    <Image
                      src={activeModalSrc}
                      alt={alt}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 95vw, 90vw"
                      onError={() => markSrcFailed(viewportRawByKey[viewport])}
                      className="w-full h-full object-contain p-6"
                    />
                  </div>
                ) : (
                  VIEWPORT_OPTIONS.map(({ value }) => {
                    const rawSrc = viewportRawByKey[value];
                    const resolvedSrc = resolveSafeSrc(rawSrc);
                    const isLayerSvg = resolvedSrc
                      .toLowerCase()
                      .endsWith(".svg");
                    const isActive = viewport === value;

                    return (
                      <Image
                        key={value}
                        src={resolvedSrc}
                        alt={alt}
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
                          "block mx-auto object-contain transition-all duration-200 ease-out",
                          value === "desktop" ? "max-h-[82vh]" : "max-h-[78vh]",
                          isActive
                            ? "relative z-10 w-auto max-w-full h-auto opacity-100 scale-100"
                            : "absolute inset-0 m-auto w-full h-full opacity-0 scale-[0.985] pointer-events-none",
                        )}
                      />
                    );
                  })
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChildWidget, PageWithWidgets } from "@/types/widget.types";
import { getWidgetVisualMeta } from "@lib/widget-helpers";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@components/ui/dialog";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  Maximize2,
  Globe,
  Laptop,
  Tablet,
  Smartphone,
  ShieldCheck,
  Box,
} from "lucide-react";
import { cn } from "@lib/utils";

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

export function WebsitePreviewCard({
  variant = "browser",
  widget,
  page,
  title,
  url,
  headline,
  description,
  badgeText,
  imageSrc,
  imageAlt,
  themeColor,
  heightClass = "h-56 md:h-64",
  className,
  showViewportSwitcher = true,
  children,
  modalContent,
  onClick,
}: WebsitePreviewCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const visualMeta = widget ? getWidgetVisualMeta(widget) : null;

  const resolvedTitle =
    title ?? (variant === "blueprint" ? "Widget Image" : "Website Image");

  const resolvedUrl =
    url ??
    (page?.route
      ? `https://ariumnetworks.com${page.route}`
      : "https://ariumnetworks.com");

  const resolvedHeadline =
    headline ?? widget?.widgets_title ?? page?.title ?? "Interactive Dynamic Canvas";

  const resolvedDescription =
    description ??
    widget?.description ??
    page?.description ??
    "Production-grade Next.js App Router presentation layout.";

  const resolvedBadgeText =
    badgeText ??
    (page && widget
      ? `${page.label} · Pos ${widget.position}`
      : page?.label ?? "Live Architecture");

  const resolvedImageSrc = imageSrc ?? visualMeta?.svg ?? "/assets/connection-globe.svg";
  const resolvedImageAlt = imageAlt ?? resolvedHeadline;

  const handleCardClick = () => {
    if (onClick) onClick();
    setIsOpen(true);
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={handleCardClick}
        style={{ borderColor: themeColor ? `${themeColor}60` : undefined }}
        className={cn(
          "group relative w-full bg-white rounded-xl border border-slate-200 hover:border-cyan-300 transition-all duration-200 overflow-hidden cursor-pointer shadow-sm flex flex-col",
          heightClass,
          className
        )}
      >
        {/* Minimal top bar — only shown for browser variant to keep URL context */}
        {variant === "browser" && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border-b border-slate-200 select-none shrink-0">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            </div>
            <div className="flex-1 flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-500 min-w-0">
              <Globe className="w-2.5 h-2.5 text-slate-400 shrink-0" />
              <span className="text-slate-600 font-medium shrink-0">ariumnetworks.com</span>
              <span className="text-slate-400 truncate">{page?.route ?? ""}</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>200</span>
            </div>
          </div>
        )}

        {/* Canvas Body */}
        <div
          className={cn(
            "relative flex-1 p-4 flex flex-col justify-between overflow-hidden",
            variant === "blueprint"
              ? "bg-slate-50"
              : "bg-gradient-to-br from-slate-50 to-white"
          )}
        >
          {/* Blueprint grid */}
          {variant === "blueprint" && (
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-70" />
          )}

          {children ? (
            children
          ) : variant === "blueprint" ? (
            /* Blueprint Schematic */
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2">
              <div className="w-full max-w-xs rounded-xl border border-dashed border-slate-300 bg-white p-3.5 space-y-2.5 shadow-sm group-hover:border-cyan-300 transition-colors">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Box className="w-3.5 h-3.5 text-cyan-500" />
                    {widget?.component_name ?? "Component Blueprint"}
                  </span>
                  <span className="text-slate-400">max-w-7xl</span>
                </div>
                <div className="h-5 rounded bg-cyan-50 border border-cyan-200 flex items-center px-2">
                  <span className="text-[10px] font-mono text-cyan-600 font-semibold truncate">
                    [slot: title] &quot;{resolvedHeadline}&quot;
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="h-10 rounded bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-1">
                    <span className="text-[9px] font-mono text-slate-500 font-bold">Media</span>
                    <div className="w-3 h-3 rounded bg-cyan-200 mt-0.5" />
                  </div>
                  <div className="h-10 rounded bg-slate-100 border border-slate-200 col-span-2 flex flex-col justify-center px-2">
                    <span className="text-[9px] font-mono text-slate-700 font-semibold truncate">
                      {visualMeta?.accentBadge ?? "Active Architecture"}
                    </span>
                    <span className="text-[9px] font-mono text-purple-500 font-medium truncate">
                      {visualMeta?.displayPattern ?? "Dynamic Zone Widget"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Browser Preview */
            <>
              <div className="absolute right-4 bottom-2 w-40 h-40 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity">
                <Image
                  src={resolvedImageSrc}
                  alt={resolvedImageAlt}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="relative z-10 max-w-sm space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-500 font-medium">
                  {resolvedBadgeText}
                </div>
                <h4 className="text-base md:text-lg font-bold tracking-tight text-slate-800 leading-snug">
                  {resolvedHeadline}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {resolvedDescription}
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-2 pt-2">
                <span className="px-3 py-1.5 rounded-lg bg-cyan-500 text-white text-xs font-semibold shadow-sm">
                  Explore Architecture
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white text-slate-600 text-xs font-medium border border-slate-200">
                  Live Demo
                </span>
              </div>
            </>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-md flex items-center gap-2 text-slate-700 group-hover:scale-105 transition-transform">
              <Maximize2 className="w-4 h-4 text-cyan-500" />
              <span className="text-xs font-semibold">{resolvedTitle}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] bg-white border border-slate-200 p-0 overflow-hidden flex flex-col rounded-2xl shadow-xl text-slate-900">
          <DialogHeader className="p-4 bg-slate-50 border-b border-slate-200 flex flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <DialogTitle className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>{page?.label ?? "Preview"}</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-cyan-600">{resolvedHeadline}</span>
                </DialogTitle>
                {widget?.component_tag && (
                  <Badge variant="teal" className="text-[10px] font-mono bg-cyan-50 text-cyan-600 border-cyan-200">
                    {widget.component_tag}
                  </Badge>
                )}
              </div>
              <DialogDescription className="text-xs text-slate-500 mt-0.5">
                Full-fidelity preview — Next.js App Router
              </DialogDescription>
            </div>

            {showViewportSwitcher && (
              <div className="hidden sm:inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200">
                {(["desktop", "tablet", "mobile"] as const).map((v) => {
                  const Icon = v === "desktop" ? Laptop : v === "tablet" ? Tablet : Smartphone;
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setViewport(v)}
                      className={cn(
                        "px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all capitalize",
                        viewport === v
                          ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                          : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {v}
                    </button>
                  );
                })}
              </div>
            )}
          </DialogHeader>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 flex items-center justify-center">
            {modalContent ? (
              modalContent
            ) : (
              <div
                className={cn(
                  "transition-all duration-300 w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm",
                  viewport === "desktop"
                    ? "max-w-4xl"
                    : viewport === "tablet"
                    ? "max-w-xl"
                    : "max-w-sm"
                )}
              >
                {/* Internal Browser Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-4 py-1 rounded-full bg-white text-xs font-mono text-slate-500 border border-slate-200 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{resolvedUrl}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    {viewport.toUpperCase()}
                  </span>
                </div>

                {/* Preview Content */}
                <div className="relative p-8 md:p-12 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      {visualMeta?.accentBadge && (
                        <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 text-xs font-mono font-semibold uppercase">
                          {visualMeta.accentBadge}
                        </span>
                      )}
                      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {resolvedHeadline}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {resolvedDescription}
                      </p>
                      <div className="flex flex-wrap gap-2.5 pt-2">
                        <Button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold">
                          Primary CTA
                        </Button>
                        <Button variant="outline" className="text-slate-700 border-slate-300">
                          Secondary Action
                        </Button>
                      </div>
                    </div>
                    <div className="relative w-full h-56 md:h-72 flex items-center justify-center p-4 rounded-xl bg-slate-100 border border-slate-200">
                      <Image
                        src={resolvedImageSrc}
                        alt={resolvedImageAlt}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>

                  {widget && (
                    <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 gap-2">
                      <span>Strapi Key: <strong className="text-cyan-600">{widget.widget_key}</strong></span>
                      <span>Renderer: <strong className="text-purple-500">{widget.renderer}</strong></span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

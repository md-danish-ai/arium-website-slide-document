"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Database, Layers, Radio, RotateCcw } from "lucide-react";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  AriumBrandMark,
  HeroSignalDrawSvg,
  StrapiSchemaMiniDrawSvg,
} from "@components/presentation/AriumNetworkSvgDraw";
import {
  ConnectionGlobeDrawSvg,
  SmallCellsIllustrationDrawSvg,
} from "@components/presentation/AriumIllustrationDrawSvgs";
import {
  useCounters,
  useScrollReveal,
  useSpringShapes,
  useSvgDraw,
} from "@/hooks";

interface KpiStat {
  target: number;
  suffix: string;
  label: string;
  colorClass: string;
}

const KPI_STATS: KpiStat[] = [
  {
    target: 50000,
    suffix: "+",
    label: "Small Cells & DAS",
    colorClass: "text-teal",
  },
  {
    target: 40,
    suffix: "+",
    label: "US Markets",
    colorClass: "text-secondary-purple",
  },
  {
    target: 12,
    suffix: "",
    label: "Strapi Routes",
    colorClass: "text-secondary-yellow",
  },
  {
    target: 51,
    suffix: "+",
    label: "CMS Widgets",
    colorClass: "text-secondary-peach",
  },
];

/**
 * Inner animated stage keyed by replay count so SVG line drawing, counters, and
 * reveal animations can be cleanly replayed on demand without disturbing spring shapes.
 */
function AriumHeroStage({ onReplay }: { onReplay: () => void }) {
  const pathname = usePathname();

  useScrollReveal(pathname);
  useCounters(pathname);

  useSvgDraw({
    selector: ".draw-svg",
    color: "#00E8D9",
    fillColor: "#00E8D9",
    drawDuration: 2.0,
    totalSpread: 0.9,
    fillDelay: 0.2,
    fillDuration: 0.65,
  });

  useSvgDraw({
    selector: ".draw-svg-purple",
    color: "#D2C7FF",
    fillColor: "rgba(210, 199, 255, 0.85)",
    drawDuration: 2.2,
    totalSpread: 0.3,
    fillDelay: 0.25,
    fillDuration: 0.7,
  });

  return (
    <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 xl:gap-12">
      {/* LEFT COLUMN: Brand Identity, Strapi Headless CMS Architecture & Metrics */}
      <div className="flex flex-col items-start text-left lg:col-span-6 space-y-5 xl:space-y-6">
        {/* Inline Brand Signature + Strapi Badge */}
        <div className="reveal flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2.5 pr-3 border-r border-midnight-lightest">
            <AriumBrandMark className="w-8 h-6" />
            <span className="text-sm font-bold tracking-wide text-white">
              Arium Networks
            </span>
          </div>
          <Badge
            variant="teal"
            className="px-3 py-1 text-[11px] font-mono tracking-wider uppercase"
          >
            Strapi v5 Headless CMS · Next.js App Router
          </Badge>
        </div>

        {/* Display Headline */}
        <div className="reveal reveal-delay-1 space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-[3.35rem] leading-[1.06]">
            Build With Clarity.
            <span className="mt-1 block bg-gradient-to-r from-teal via-secondary-teal to-secondary-purple bg-clip-text text-transparent">
              Connect With Confidence.
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base xl:text-[17px]">
            Representing America&apos;s largest small cell &amp; DAS wireless
            infrastructure website—powered by a{" "}
            <span className="font-semibold text-white">
              Strapi Headless CMS
            </span>{" "}
            backend delivering dynamic page schemas, nationwide coverage data,
            and{" "}
            <span className="font-semibold text-teal">
              51 reusable UI widgets
            </span>
            .
          </p>
        </div>

        {/* Live Strapi CMS -> Frontend Pipeline Telemetry Card */}
        <div className="reveal reveal-delay-2 w-full rounded-2xl border border-midnight-lightest/90 bg-midnight-lighter/75 p-4 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
            <div className="flex items-center gap-2 text-secondary-purple">
              <Database className="h-3.5 w-3.5" />
              <span>STRAPI v5 DYNAMIC ZONES</span>
            </div>
            <span className="text-slate-400">
              /api/pages?populate=* → WIDGET_REGISTRY
            </span>
          </div>

          <div className="mt-2.5 flex items-center gap-3">
            <div className="shrink-0">
              <StrapiSchemaMiniDrawSvg className="h-11 w-auto" />
            </div>
            <div className="min-w-0 flex-1">
              <HeroSignalDrawSvg className="h-6 max-w-none w-full" />
              <div className="mt-1 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-300">
                <span className="rounded bg-midnight/90 px-2 py-0.5 border border-midnight-lightest">
                  shared.main-hero
                </span>
                <span className="rounded bg-midnight/90 px-2 py-0.5 border border-midnight-lightest">
                  solutions.small-cells
                </span>
                <span className="rounded bg-midnight/90 px-2 py-0.5 border border-midnight-lightest">
                  maps.us-coverage
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Editorial KPI Strip (useCounters) */}
        <div className="reveal reveal-delay-3 grid w-full grid-cols-2 gap-4 border-y border-midnight-lightest/80 py-3.5 sm:grid-cols-4">
          {KPI_STATS.map((stat) => (
            <div key={stat.label} className="space-y-0.5">
              <div
                className={`counter text-2xl font-extrabold tracking-tight xl:text-3xl ${stat.colorClass}`}
                data-target={stat.target}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="reveal reveal-delay-4 flex flex-wrap items-center gap-3 pt-1">
          <Button
            asChild
            className="bg-teal hover:bg-teal/90 text-midnight font-bold px-6 py-5 text-sm rounded-xl shadow-lg shadow-teal/20 transition-all hover:scale-[1.02]"
          >
            <Link href="/start">
              Explore Strapi Widgets (/start)
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={onReplay}
            className="border-midnight-lightest bg-midnight-lighter/70 hover:bg-midnight-lightest text-slate-200 hover:text-white px-4 py-5 text-xs font-mono rounded-xl"
          >
            <RotateCcw className="mr-1.5 h-3.5 w-3.5 text-teal" />
            Replay Vector Draw
          </Button>
        </div>
      </div>

      {/* RIGHT COLUMN: Full-Scale SVG Draw Vector Showcase Stage */}
      <div className="relative flex items-center justify-center lg:col-span-6">
        {/* Main Glass Stage housing connection-globe.svg drawn via useSvgDraw */}
        <div className="reveal-scale relative w-full rounded-3xl border border-midnight-lightest bg-gradient-to-br from-midnight-lighter/85 via-midnight/95 to-midnight-lighter/55 p-6 xl:p-8 shadow-2xl backdrop-blur-xl">
          {/* Top Telemetry Strip */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary-purple/30 bg-secondary-purple/10 px-3 py-1 text-[11px] font-mono text-secondary-purple">
              <Layers className="h-3.5 w-3.5" />
              <span>GLOBAL RF &amp; DAS MESH</span>
            </div>
            <span className="font-mono text-[11px] text-slate-400">
              40+ US Markets
            </span>
          </div>

          {/* Primary Large Connection Globe SVG Draw */}
          <div className="relative flex items-center justify-center py-2">
            <div className="w-[88%] max-w-[430px] translate-x-6 sm:translate-x-10 opacity-95">
              <ConnectionGlobeDrawSvg className="w-full h-auto max-h-[300px] xl:max-h-[340px]" />
            </div>
          </div>

          {/* Overlapping Foreground Small Cells SVG Draw Card */}
          <div className="relative z-10 mt-2 sm:mt-0 sm:absolute sm:bottom-6 sm:left-6 w-full sm:w-[250px] xl:w-[270px] rounded-2xl border border-teal/40 bg-midnight/92 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-teal">
                <Radio className="h-3 w-3" />
                Small Cells Grid
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                50k+ Nodes
              </span>
            </div>

            <div className="flex items-center justify-center py-1">
              <SmallCellsIllustrationDrawSvg className="w-36 h-36 xl:w-40 xl:h-40" />
            </div>

            <div className="mt-2 flex items-center justify-between border-t border-midnight-lightest pt-2 text-[10px] font-mono text-slate-300">
              <span>5G Densification</span>
              <span className="text-teal">LIVE VECTOR</span>
            </div>
          </div>

          {/* Subtle Bottom-Right Caption inside Canvas */}
          <div className="mt-4 hidden sm:flex justify-end">
            <Link
              href="/start"
              className="inline-flex items-center gap-1.5 rounded-full border border-midnight-lightest bg-midnight/85 px-3 py-1 text-[11px] font-mono text-slate-300 hover:border-teal hover:text-teal transition-colors"
            >
              Inspect Strapi Blueprints &amp; Previewer →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Full-screen architectural showcase root page (`/`) highlighting Arium Networks'
 * Strapi v5 Headless CMS website with interactive spring shapes and SVG draw animations.
 */
export function AriumRootShowcase() {
  const [drawKey, setDrawKey] = useState(0);

  const {
    tealShapeRef,
    whiteShapeRef,
    tealInnerRef,
    whiteInnerRef,
    shapesWrapRef,
    bgRef,
  } = useSpringShapes();

  return (
    <main className="relative flex h-screen w-screen items-center justify-center bg-midnight p-5 md:p-8 lg:px-12 overflow-y-auto lg:overflow-hidden select-none">
      {/* Subtle Blueprint Dot Grid + Interactive Pointer Spring Background (useSpringShapes) */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        {/* Subtle technical grid texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148, 163, 184, 0.28) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div
          ref={shapesWrapRef}
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700"
        >
          <div
            ref={tealShapeRef}
            className="absolute left-[18%] top-[72%] h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 md:h-[780px] md:w-[780px]"
          >
            <div ref={tealInnerRef} className="h-full w-full">
              <Image
                src="/assets/shape-teal.svg"
                alt=""
                width={780}
                height={780}
                unoptimized
                priority
                className="h-full w-full object-contain opacity-85"
              />
            </div>
          </div>

          <div
            ref={whiteShapeRef}
            className="absolute left-[82%] top-[24%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 md:h-[720px] md:w-[720px]"
          >
            <div ref={whiteInnerRef} className="h-full w-full">
              <Image
                src="/assets/shape-white.svg"
                alt=""
                width={720}
                height={720}
                unoptimized
                priority
                className="h-full w-full object-contain opacity-75"
              />
            </div>
          </div>
        </div>

        {/* Faint US Coverage Dots & Headline Glow Watermark */}
        <Image
          src="/assets/us-dot-map-faint.svg"
          alt=""
          width={1400}
          height={760}
          unoptimized
          className="absolute left-1/2 top-1/2 w-[90%] max-w-6xl -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        />
        <Image
          src="/assets/headline-bg.svg"
          alt=""
          width={950}
          height={388}
          unoptimized
          className="absolute left-[28%] top-[42%] w-[70%] max-w-2xl -translate-x-1/2 -translate-y-1/2 opacity-50"
        />
      </div>

      {/* Remountable Animated Stage */}
      <AriumHeroStage
        key={drawKey}
        onReplay={() => setDrawKey((prev) => prev + 1)}
      />
    </main>
  );
}

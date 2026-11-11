"use client";

import React from "react";
import { cn } from "@lib/utils";

/**
 * Brand logo mark matching Arium Networks' cyan wave emblem.
 */
export function AriumBrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      aria-hidden="true"
      className={cn("w-8 h-6 shrink-0", className)}
    >
      <path
        d="M4 25.5C4 25.5 8.5 7 13.5 7C18.5 7 20.5 23 25 23C29.5 23 33.5 9.5 36 6.5"
        stroke="#00e8d9"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="35.5" cy="6.5" r="2.6" fill="#00e8d9" />
    </svg>
  );
}

/**
 * Compact vector diagram animated by `useSvgDraw` showing Strapi Dynamic Zones
 * feeding modular widgets into the Next.js frontend.
 */
export function StrapiSchemaMiniDrawSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 68"
      fill="none"
      aria-hidden="true"
      className={cn("draw-svg h-14 w-auto", className)}
    >
      {/* Strapi Block */}
      <path
        data-i="0"
        data-stroke-width="1.5"
        data-fill="1"
        d="M 8 12 L 48 12 Q 52 12 52 16 L 52 52 Q 52 56 48 56 L 8 56 Q 4 56 4 52 L 4 16 Q 4 12 8 12 Z"
        stroke="#d2c7ff"
        strokeWidth="1.5"
        fill="rgba(210, 199, 255, 0.08)"
      />
      {/* Strapi Field Rows */}
      <path
        data-i="1"
        data-stroke-width="1.3"
        d="M 12 24 L 44 24 M 12 34 L 44 34 M 12 44 L 36 44"
        stroke="#d2c7ff"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* REST Data Flow Lines */}
      <path
        data-i="2"
        data-stroke-width="1.6"
        d="M 52 24 L 88 24 M 52 44 L 88 44 M 70 24 L 70 44"
        stroke="#00e8d9"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Next.js Render Frame */}
      <path
        data-i="3"
        data-stroke-width="1.5"
        data-fill="1"
        d="M 92 12 L 132 12 Q 136 12 136 16 L 136 52 Q 136 56 132 56 L 92 56 Q 88 56 88 52 L 88 16 Q 88 12 92 12 Z"
        stroke="#00e8d9"
        strokeWidth="1.5"
        fill="rgba(0, 232, 217, 0.08)"
      />
      <path
        data-i="4"
        data-stroke-width="1.3"
        d="M 96 24 L 128 24 M 96 36 L 120 36 M 96 46 L 128 46"
        stroke="#00e8d9"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* API Endpoint Node */}
      <path
        data-i="5"
        data-circle="1"
        d="M 70 34 m -3.5, 0 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0"
        fill="#ffffca"
      />
    </svg>
  );
}

/**
 * Interactive vector blueprint animated by `useSvgDraw` for Small Cells & DAS waves.
 */
export function SmallCellsDrawBlueprint({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 68"
      fill="none"
      aria-hidden="true"
      className={cn("draw-svg h-14 w-auto", className)}
    >
      {/* Perspective Ground Ring */}
      <path
        data-i="0"
        data-stroke-width="1.2"
        d="M 14 54 A 56 10 0 1 0 126 54 A 56 10 0 1 0 14 54 Z"
        stroke="#00e8d9"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />
      {/* Staggered Masts */}
      <path
        data-i="1"
        data-stroke-width="1.6"
        d="M 36 56 L 36 32"
        stroke="#00e8d9"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        data-i="2"
        data-stroke-width="1.8"
        d="M 70 54 L 70 16"
        stroke="#00e8d9"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        data-i="3"
        data-stroke-width="1.6"
        d="M 104 56 L 104 28"
        stroke="#d2c7ff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* RF Carrier Wave Arcs */}
      <path
        data-i="4"
        data-stroke-width="1.3"
        d="M 54 22 C 62 10 78 10 86 22 M 46 16 C 58 2 82 2 94 16"
        stroke="#00e8d9"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Node Beacons */}
      <path
        data-i="5"
        data-circle="1"
        d="M 36 32 m -3, 0 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"
        fill="#00e8d9"
      />
      <path
        data-i="6"
        data-circle="1"
        d="M 70 16 m -3.5, 0 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0"
        fill="#00e8d9"
      />
      <path
        data-i="7"
        data-circle="1"
        d="M 104 28 m -3, 0 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"
        fill="#d2c7ff"
      />
    </svg>
  );
}

/**
 * Interactive vector blueprint animated by `useSvgDraw` for nationwide US DAS & venue coverage.
 */
export function DasFootprintDrawSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 68"
      fill="none"
      aria-hidden="true"
      className={cn("draw-svg h-14 w-auto", className)}
    >
      {/* Spherical Coverage Ellipses */}
      <path
        data-i="0"
        data-stroke-width="1.3"
        d="M 42 34 A 28 28 0 1 0 98 34 A 28 28 0 1 0 42 34 Z"
        stroke="#d2c7ff"
        strokeWidth="1.3"
      />
      <path
        data-i="1"
        data-stroke-width="1.2"
        d="M 42 34 A 28 10 0 1 0 98 34 A 28 10 0 1 0 42 34 Z"
        stroke="#00e8d9"
        strokeWidth="1.2"
      />
      <path
        data-i="2"
        data-stroke-width="1.2"
        d="M 70 6 C 56 18 56 50 70 62 C 84 50 84 18 70 6"
        stroke="#d2c7ff"
        strokeWidth="1.2"
      />
      {/* Connecting Regional Rays */}
      <path
        data-i="3"
        data-stroke-width="1.3"
        d="M 16 24 L 44 28 M 16 44 L 44 40 M 96 28 L 124 22 M 96 40 L 124 46"
        stroke="#00e8d9"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Hub Repeaters */}
      <path
        data-i="4"
        data-circle="1"
        d="M 70 34 m -3.5, 0 a 3.5,3.5 0 1,0 7,0 a 3.5,3.5 0 1,0 -7,0"
        fill="#00e8d9"
      />
      <path
        data-i="5"
        data-circle="1"
        d="M 16 24 m -2.8, 0 a 2.8,2.8 0 1,0 5.6,0 a 2.8,2.8 0 1,0 -5.6,0"
        fill="#ffffca"
      />
      <path
        data-i="6"
        data-circle="1"
        d="M 124 22 m -2.8, 0 a 2.8,2.8 0 1,0 5.6,0 a 2.8,2.8 0 1,0 -5.6,0"
        fill="#ffdac8"
      />
    </svg>
  );
}

/**
 * Sleek horizontal signal trace animated by `useSvgDraw`.
 */
export function HeroSignalDrawSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 34"
      fill="none"
      aria-hidden="true"
      className={cn("draw-svg w-full max-w-md h-7", className)}
    >
      <path
        data-i="0"
        data-stroke-width="1.4"
        d="M 12 18 L 110 18 Q 124 18 134 10 L 146 6 Q 154 4 162 12 L 178 26 Q 186 32 194 22 L 210 8 Q 218 2 226 12 L 240 24 Q 248 30 258 18 L 408 18"
        stroke="#00e8d9"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        data-i="1"
        data-circle="1"
        d="M 12 18 m -3, 0 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"
        fill="#00e8d9"
      />
      <path
        data-i="2"
        data-circle="1"
        d="M 210 10 m -3, 0 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"
        fill="#d2c7ff"
      />
      <path
        data-i="3"
        data-circle="1"
        d="M 408 18 m -3, 0 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0"
        fill="#ffffca"
      />
    </svg>
  );
}

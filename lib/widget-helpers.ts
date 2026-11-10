import { PAGE_WIDGETS } from "@data/page.widget";
import { WIDGETS_LIST } from "@data/widget";
import { ChildWidget, FlatWidget, PageWithWidgets } from "@/types/widget.types";

export interface SelectedWidgetContext {
  widget: ChildWidget;
  page: PageWithWidgets;
  pageIndex: number;
  flatWidget?: FlatWidget;
  usedInPages: { id: string; title: string; label: string; route: string }[];
}

/**
 * Maps component names and widget categories to authentic SVG graphics and preview layouts
 */
export function getWidgetVisualMeta(widget: ChildWidget) {
  const comp = widget.component_name;
  const key = widget.widget_key;
  const cat = widget.category;

  if (comp.includes("Hero") || key.includes("hero")) {
    return {
      svg: "/assets/connection-globe.svg",
      secondarySvg: "/assets/shape-teal.svg",
      themeColor: "#00e8d9",
      accentBadge: "HERO CANVAS",
      layoutType: "hero",
      badgeVariant: "teal" as const,
      displayPattern: "Full-Bleed Header + Dual CTA + Motion Canvas",
    };
  }

  if (
    comp.includes("Illustration") ||
    comp.includes("SmallCells") ||
    comp.includes("Das") ||
    key.includes("illustration")
  ) {
    return {
      svg:
        key.includes("das") || comp.includes("Das")
          ? "/assets/das-illustration.svg"
          : "/assets/small-cells-illustration.svg",
      secondarySvg: "/assets/shape-teal.svg",
      themeColor: "#00e8d9",
      accentBadge: "CELLULAR RF VECTOR",
      layoutType: "split-illustration",
      badgeVariant: "teal" as const,
      displayPattern: "Dual-Column Hardware Vector + Bullet Callouts",
    };
  }

  if (comp.includes("Stats") || key.includes("stats")) {
    return {
      svg: "/assets/us-dot-map.svg",
      secondarySvg: "/assets/us-dot-map-faint.svg",
      themeColor: "#bcf6f2",
      accentBadge: "KPI METRICS",
      layoutType: "stats",
      badgeVariant: "teal" as const,
      displayPattern: "High-Density Node Counts + Nationwide Coverage Map",
    };
  }

  if (
    comp.includes("CardGrid") ||
    comp.includes("DetailedCard") ||
    comp.includes("Benefits")
  ) {
    return {
      svg: "/assets/innovation-illustration.svg",
      secondarySvg: "/assets/shape-teal.svg",
      themeColor: "#d2c7ff",
      accentBadge: "MODULAR GRID",
      layoutType: "grid",
      badgeVariant: "purple" as const,
      displayPattern: "Tri-Pillar Service Cards with Hover Elevation",
    };
  }

  if (comp.includes("Cta") || comp.includes("CTA")) {
    return {
      svg: "/assets/connection-cta.svg",
      secondarySvg: "/assets/connection-cta-mobile.svg",
      themeColor: "#ffffca",
      accentBadge: "CONVERSION ANCHOR",
      layoutType: "cta",
      badgeVariant: "yellow" as const,
      displayPattern: "Signature Torus Graphic Loop + Contact Form Trigger",
    };
  }

  if (
    comp.includes("Industries") ||
    comp.includes("Venues") ||
    comp.includes("Communities")
  ) {
    return {
      svg: "/assets/commercial-real-estate.svg",
      secondarySvg: "/assets/stadiums-arenas.svg",
      themeColor: "#ffdac8",
      accentBadge: "VERTICAL VENUES",
      layoutType: "venues",
      badgeVariant: "peach" as const,
      displayPattern: "Categorized Municipal & Enterprise Sector Selector",
    };
  }

  if (
    comp.includes("Journey") ||
    comp.includes("Timeline") ||
    comp.includes("Process") ||
    cat === "flow"
  ) {
    return {
      svg: "/assets/connection-illustration.svg",
      secondarySvg: "/assets/shape-white.svg",
      themeColor: "#8b5cf6",
      accentBadge: "STORYTELLER FLOW",
      layoutType: "timeline",
      badgeVariant: "purple" as const,
      displayPattern: "Contiguous Radial Flow Container with Dynamic Step Nodes",
    };
  }

  if (comp.includes("Testimonial") || key.includes("testimonial")) {
    return {
      svg: "/assets/headline-bg.svg",
      secondarySvg: "/assets/shape-teal.svg",
      themeColor: "#00e8d9",
      accentBadge: "ENDORSEMENT CAROUSEL",
      layoutType: "testimonials",
      badgeVariant: "teal" as const,
      displayPattern: "Carrier Stakeholder Quotes + Client Organization Logos",
    };
  }

  return {
    svg: "/assets/connection-globe.svg",
    secondarySvg: "/assets/shape-teal.svg",
    themeColor: "#00e8d9",
    accentBadge: "CANONICAL WIDGET",
    layoutType: "default",
    badgeVariant: "teal" as const,
    displayPattern: "Standard Canonical Strapi Dynamic Zone Renderer",
  };
}

/**
 * Computes all pages where a given widget or component is utilized across the whole platform
 */
export function getWidgetUsageAcrossPages(
  widget: ChildWidget
): { id: string; title: string; label: string; route: string }[] {
  const matchingPages: { id: string; title: string; label: string; route: string }[] = [];
  const seenIds = new Set<string>();

  // Check from WIDGETS_LIST used_in_pages if available
  const flat = WIDGETS_LIST.find(
    (w) => w.widget_key === widget.widget_key || w.component_name === widget.component_name
  );
  if (flat && Array.isArray(flat.used_in_pages)) {
    for (const pageSlug of flat.used_in_pages) {
      const pageMatch = PAGE_WIDGETS.find(
        (p) => p.id === pageSlug || p.strapi_slug === pageSlug
      );
      if (pageMatch && !seenIds.has(pageMatch.id)) {
        seenIds.add(pageMatch.id);
        matchingPages.push({
          id: pageMatch.id,
          title: pageMatch.title,
          label: pageMatch.label,
          route: pageMatch.route,
        });
      }
    }
  }

  // Also scan all PAGE_WIDGETS directly to ensure complete fidelity
  for (const page of PAGE_WIDGETS) {
    if (seenIds.has(page.id)) continue;
    const hasWidget = page.child_widgets?.some(
      (cw) =>
        cw.widget_key === widget.widget_key ||
        cw.component_name === widget.component_name ||
        (cw.fallback_key && cw.fallback_key === widget.fallback_key)
    );
    if (hasWidget) {
      seenIds.add(page.id);
      matchingPages.push({
        id: page.id,
        title: page.title,
        label: page.label,
        route: page.route,
      });
    }
  }

  return matchingPages;
}

/**
 * Generates production-ready TypeScript, React TSX, Strapi Schema, and Mapper code for any widget
 */
export function generateWidgetCode(widget: ChildWidget) {
  const compName = widget.component_name;
  const key = widget.widget_key;
  const propsList =
    widget.key_props && widget.key_props.length > 0
      ? widget.key_props
      : ["title", "description", "cards", "cta_text", "cta_url"];

  // 1. React Component TSX
  const reactComponentCode = `// ${widget.source_location}.tsx
import React from "react";
import Image from "next/image";
import { cn } from "@lib/utils";

export interface ${compName}Props {
${propsList
  .map(
    (p) =>
      `  ${p}?: ${
        p.includes("cards") || p.includes("items") || p.includes("stats")
          ? "any[]"
          : p.includes("image")
          ? "string | { url: string; alt?: string }"
          : "string"
      };`
  )
  .join("\n")}
  className?: string;
}

export function ${compName}({
${propsList.map((p) => `  ${p},`).join("\n")}
  className,
}: ${compName}Props) {
  return (
    <section 
      data-strapi-component="${key}"
      className={cn(
        "relative w-full py-16 px-6 lg:px-12 bg-midnight text-white overflow-hidden",
        className
      )}
    >
      {/* Background radial glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {title && (
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl text-center leading-relaxed mb-10">
            {description}
          </p>
        )}

        {/* Dynamic content slot for ${compName} */}
        <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Canonical child renderer */}
        </div>
      </div>
    </section>
  );
}

export default ${compName};`;

  // 2. TypeScript Props Interface
  const tsInterfaceCode = `// types/widgets/${widget.component_name.toLowerCase()}.types.ts
/**
 * Canonical Type Definitions for ${compName} (${key})
 * Source: ${widget.source_location}
 */

export interface ${compName}Props {
${propsList
  .map(
    (p) =>
      `  /** ${p} mapped from Strapi CMS Dynamic Zone attribute */\n  ${p}?: ${
        p.includes("cards") ||
        p.includes("stats") ||
        p.includes("milestones") ||
        p.includes("items")
          ? "Array<Record<string, unknown>>"
          : p.includes("image") || p.includes("icon")
          ? "string | { url: string; alternativeText?: string }"
          : "string"
      };`
  )
  .join("\n")}
  /** Optional custom CSS classes */
  className?: string;
  /** Strapi component identifier */
  __component?: "${key}";
}`;

  // 3. Strapi Schema JSON
  const strapiSchemaCode = `{
  "collectionName": "components_${key.replace(/[^a-zA-Z0-9]/g, "_")}",
  "info": {
    "displayName": "${widget.widgets_title}",
    "icon": "layer-group",
    "description": "${widget.description.replace(/"/g, '\\"')}",
    "category": "${widget.category}"
  },
  "options": {},
  "attributes": {
${propsList
  .map((p, idx) => {
    const isLast = idx === propsList.length - 1;
    if (p.includes("cards") || p.includes("stats") || p.includes("items")) {
      return `    "${p}": {\n      "type": "component",\n      "repeatable": true,\n      "component": "elements.${p}-item"\n    }${isLast ? "" : ","}`;
    }
    if (p.includes("image") || p.includes("graphic")) {
      return `    "${p}": {\n      "type": "media",\n      "multiple": false,\n      "required": false,\n      "allowedTypes": ["images", "files"]\n    }${isLast ? "" : ","}`;
    }
    if (p === "description" || p === "content") {
      return `    "${p}": {\n      "type": "text",\n      "required": false\n    }${isLast ? "" : ","}`;
    }
    return `    "${p}": {\n      "type": "string",\n      "required": false\n    }${isLast ? "" : ","}`;
  })
  .join("\n")}
  }
}`;

  // 4. Canonical Mapper
  const mapperCode = `// lib/mappers/${widget.component_name.toLowerCase()}.mapper.ts
import { ${compName}Props } from "@types";

/**
 * 4-Layer Canonical Data Contract Mapper
 * Transforms raw Strapi API dynamic zone payload into sanitized ${compName}Props
 */
export function map${compName}Data(raw: Record<string, any>): ${compName}Props {
  return {
${propsList
  .map((p) => {
    if (p.includes("cards") || p.includes("stats")) {
      return `    ${p}: Array.isArray(raw?.${p}) ? raw.${p}.map(sanitizeItem) : [],`;
    }
    if (p.includes("image")) {
      return `    ${p}: raw?.${p}?.data?.attributes?.url ?? raw?.${p} ?? null,`;
    }
    return `    ${p}: raw?.${p} ?? "",`;
  })
  .join("\n")}
  };
}`;

  return {
    reactComponentCode,
    tsInterfaceCode,
    strapiSchemaCode,
    mapperCode,
  };
}


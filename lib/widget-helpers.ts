import { PAGE_WIDGETS } from "@data/page.widget";
import { WIDGETS_LIST } from "@data/widget";
import {
  ChildWidget,
  FlatWidget,
  PageWithWidgets,
  WidgetCategory,
  WidgetPreviewImages,
} from "@/types/widget.types";
import type { BadgeProps } from "@components/ui/badge";

export interface WidgetUsagePage {
  id: string;
  title: string;
  label: string;
  route: string;
  strapiSlug: string;
  pageCategory: string;
  matchingWidgetId?: string;
  matchingWidgetLabel?: string;
  matchingPosition?: number;
}

export interface SelectedWidgetContext {
  widget: ChildWidget;
  page: PageWithWidgets;
  pageIndex: number;
  flatWidget?: FlatWidget;
  usedInPages: WidgetUsagePage[];
}

/**
 * Shared mapping from widget category to Shadcn Badge variants.
 */
export const WIDGET_CATEGORY_BADGE_VARIANT: Record<
  WidgetCategory,
  NonNullable<BadgeProps["variant"]>
> = {
  hero: "glassCyan",
  feature: "glassPurple",
  content: "glassCyan",
  stats: "glassEmerald",
  cta: "glassAmber",
  testimonials: "glassPurple",
  flow: "glassViolet",
  people: "glassCyan",
  form: "glass",
  shared: "glassCyan",
};

function toPascalIdentifier(widgetKey: string): string {
  const suffix = widgetKey.includes(".")
    ? widgetKey.split(".").pop() || widgetKey
    : widgetKey;
  return suffix
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function resolveWidgetVisualBase(widget: ChildWidget) {
  const key = widget.widget_key.toLowerCase();
  const label = widget.widgets_label.toLowerCase();
  const cat = widget.category;

  if (key.includes("hero") || label.includes("hero") || cat === "hero") {
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
    key.includes("small-cells") ||
    key.includes("das") ||
    key.includes("illustration") ||
    label.includes("small cells") ||
    label.includes("das") ||
    label.includes("illustration")
  ) {
    return {
      svg:
        key.includes("das") || label.includes("das")
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

  if (key.includes("stats") || label.includes("stats") || cat === "stats") {
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
    key.includes("card-grid") ||
    key.includes("benefits") ||
    label.includes("card grid") ||
    label.includes("benefits")
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

  if (key.includes("cta") || label.includes("cta") || cat === "cta") {
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
    key.includes("industry") ||
    key.includes("venues") ||
    key.includes("communities") ||
    label.includes("venues") ||
    label.includes("communities")
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
    key.includes("timeline") ||
    key.includes("process") ||
    label.includes("journey") ||
    label.includes("process") ||
    cat === "flow"
  ) {
    return {
      svg: "/assets/connection-illustration.svg",
      secondarySvg: "/assets/shape-white.svg",
      themeColor: "#8b5cf6",
      accentBadge: "STORYTELLER FLOW",
      layoutType: "timeline",
      badgeVariant: "purple" as const,
      displayPattern:
        "Contiguous Radial Flow Container with Dynamic Step Nodes",
    };
  }

  if (
    key.includes("testimon") ||
    label.includes("testimonial") ||
    cat === "testimonials"
  ) {
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
 * Maps `widget_key`, labels, categories, preview screenshots, and Strapi images for a widget.
 */
export function getWidgetVisualMeta(widget: ChildWidget) {
  const base = resolveWidgetVisualBase(widget);
  const matchingFlat =
    !widget.preview_images || !widget.strapi_image
      ? WIDGETS_LIST.find(
          (fw) => fw.id === widget.id || fw.widget_key === widget.widget_key,
        )
      : undefined;
  const screenshots: WidgetPreviewImages | undefined =
    widget.preview_images ?? matchingFlat?.preview_images;
  const strapiImage: string | undefined =
    widget.strapi_image ?? matchingFlat?.strapi_image;

  return {
    ...base,
    screenshot: screenshots?.desktop,
    screenshots,
    strapiImage,
  };
}

/**
 * Resolves the canonical `FlatWidget` metadata record from `data/widget.ts`.
 */
export function getFlatWidgetMeta(
  widget: ChildWidget,
  pageId?: string,
): FlatWidget | undefined {
  if (pageId) {
    const exactMatch = WIDGETS_LIST.find(
      (fw) =>
        fw.page_id === pageId &&
        fw.widget_key === widget.widget_key &&
        fw.position === widget.position,
    );
    if (exactMatch) return exactMatch;

    const pageKeyMatch = WIDGETS_LIST.find(
      (fw) => fw.page_id === pageId && fw.widget_key === widget.widget_key,
    );
    if (pageKeyMatch) return pageKeyMatch;
  }

  return WIDGETS_LIST.find(
    (fw) => fw.id === widget.id || fw.widget_key === widget.widget_key,
  );
}

/**
 * Computes all pages where a given Strapi `widget_key` is utilized across the platform.
 */
export function getWidgetUsageAcrossPages(
  widget: ChildWidget,
  pageId?: string,
): WidgetUsagePage[] {
  const matchingPages: WidgetUsagePage[] = [];
  const seenIds = new Set<string>();

  const pushPage = (pageMatch: PageWithWidgets) => {
    if (seenIds.has(pageMatch.id)) return;
    seenIds.add(pageMatch.id);
    const matchingChild = pageMatch.child_widgets?.find(
      (cw) => cw.widget_key === widget.widget_key,
    );
    matchingPages.push({
      id: pageMatch.id,
      title: pageMatch.title,
      label: pageMatch.label,
      route: pageMatch.route,
      strapiSlug: pageMatch.strapi_slug,
      pageCategory: pageMatch.category,
      matchingWidgetId: matchingChild?.id,
      matchingWidgetLabel: matchingChild?.widgets_label,
      matchingPosition: matchingChild?.position,
    });
  };

  const flat = getFlatWidgetMeta(widget, pageId);
  if (flat && Array.isArray(flat.used_in_pages)) {
    for (const pageSlug of flat.used_in_pages) {
      const pageMatch = PAGE_WIDGETS.find(
        (p) =>
          p.id === pageSlug ||
          p.strapi_slug === pageSlug ||
          p.route === pageSlug ||
          (pageSlug === "[slug]" && p.id === "dynamic-slug"),
      );
      if (pageMatch) pushPage(pageMatch);
    }
  }

  for (const page of PAGE_WIDGETS) {
    if (page.child_widgets?.some((cw) => cw.widget_key === widget.widget_key)) {
      pushPage(page);
    }
  }

  return matchingPages;
}

/**
 * Generates Strapi schema JSON and canonical TypeScript contracts from `widget_key` and `key_props`.
 */
export function generateWidgetCode(widget: ChildWidget) {
  const compName = toPascalIdentifier(widget.widget_key) || "StrapiWidget";
  const key = widget.widget_key;
  const propsList =
    widget.key_props && widget.key_props.length > 0
      ? widget.key_props
      : ["title", "description", "cards", "cta_text", "cta_url"];

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

  const tsInterfaceCode = `/**
 * Strapi Dynamic Zone Contract for ${compName} (${key})
 */
export interface ${compName}Props {
${propsList
  .map(
    (p) =>
      `  ${p}?: ${
        p.includes("cards") ||
        p.includes("stats") ||
        p.includes("milestones") ||
        p.includes("items")
          ? "Array<Record<string, unknown>>"
          : p.includes("image") || p.includes("icon")
            ? "string | { url: string; alternativeText?: string }"
            : "string"
      };`,
  )
  .join("\n")}
  __component?: "${key}";
}`;

  return {
    tsInterfaceCode,
    strapiSchemaCode,
  };
}

/**
 * TypeScript Type Definitions for Arium Strapi CMS Pages & Dynamic Widgets
 */

export type WidgetCategory =
  | "hero"
  | "feature"
  | "content"
  | "stats"
  | "cta"
  | "testimonials"
  | "flow"
  | "people"
  | "form"
  | "shared";

export type PageCategory =
  | "Corporate"
  | "Solutions"
  | "Operations"
  | "Team"
  | "Dynamic";

export interface WidgetPreviewImages {
  desktop: string;
  tablet?: string;
  mobile?: string;
}

/**
 * Strapi Dynamic Zone widget entry nested inside a page (`data/page.widget.ts`).
 */
export interface ChildWidget {
  id: string;
  position: number;
  widget_key: string;
  widgets_title: string;
  widgets_label: string;
  category: WidgetCategory;
  description: string;
  key_props?: string[];
  preview_images?: WidgetPreviewImages;
  strapi_image?: string;
}

/**
 * Page-by-widgets entry mapping Strapi routes and nested `child_widgets` (`data/page.widget.ts`).
 */
export interface PageWithWidgets {
  id: string;
  title: string;
  label: string;
  route: string;
  strapi_slug: string;
  category: PageCategory;
  description: string;
  child_widgets: ChildWidget[];
}

/**
 * Master flat Strapi widget record (`data/widget.ts`).
 */
export interface FlatWidget {
  id: string;
  page_id: string;
  position: number;
  widget_key: string;
  widgets_title: string;
  widgets_label: string;
  component_name: string;
  component_tag: string;
  source_location: string;
  category: WidgetCategory;
  description: string;
  fallback_key?: string;
  key_props?: string[];
  preview_images?: WidgetPreviewImages;
  strapi_image?: string;
  used_in_pages: string[];
}

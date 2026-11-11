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
  "Corporate" | "Solutions" | "Operations" | "Team" | "Dynamic";

export type PreviewImageSource = string | string[];

export interface WidgetPreviewImages {
  desktop: PreviewImageSource;
  tablet?: PreviewImageSource;
  mobile?: PreviewImageSource;
}

export interface StrapiWidgetPayload {
  id?: number | string;
  __component?: string;
  [key: string]: unknown;
}

export type WidgetResponseSchema = StrapiWidgetPayload;

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
  previewImages?: WidgetPreviewImages;
  strapiImage?: PreviewImageSource;
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
  strapi_image?: PreviewImageSource;
  widgets_response?: WidgetResponseSchema;
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
  strapi_image?: PreviewImageSource;
  widgets_response: WidgetResponseSchema;
  used_in_pages: string[];
}

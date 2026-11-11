/**
 * Complete TypeScript Type Definitions for Arium Presentation & Widgets System
 * Defines types for Pages, Sections, and Dynamic Zone Widgets
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

/**
 * Collapsible section / item representation on a page
 */
export interface PageSectionItem {
  id: string;
  title: string;
  label: string;
  position: number;
  description: string;
  component_tag: string;
  source_location: string;
  strapi_section_key?: string;
  is_flow_container?: boolean;
  child_count?: number;
}

export interface WidgetPreviewImages {
  desktop: string;
  tablet?: string;
  mobile?: string;
}

/**
 * Child widget structure nested inside a page (pages-by-widgets array)
 */
export interface ChildWidget {
  id: string;
  position: number;
  widget_key: string;
  widgets_title: string;
  widgets_label: string;
  component_name: string;
  component_tag: string;
  renderer: string;
  source_location: string;
  category: WidgetCategory;
  description: string;
  is_flow_grouped?: boolean;
  key_props?: string[];
  fallback_key?: string;
  preview_images?: WidgetPreviewImages;
  strapi_image?: string;
}

/**
 * 1. Pages by Widgets Structure (with nested child_widgets)
 */
export interface PageWithWidgets {
  id: string;
  title: string;
  label: string;
  route: string;
  strapi_slug: string;
  category: PageCategory;
  description: string;
  widget_count: number;
  items: PageSectionItem[];
  child_widgets: ChildWidget[];
}

/**
 * 2. Flat Widget Structure (for master widgets list, strictly without children array)
 * Follows same page order and tracks page associations
 */
export interface FlatWidget {
  id: string;
  page_id: string;
  page_title: string;
  page_label: string;
  page_route: string;
  position: number;
  widget_key: string;
  widgets_title: string;
  widgets_label: string;
  component_name: string;
  component_tag: string;
  renderer: string;
  source_location: string;
  category: WidgetCategory;
  description: string;
  is_flow_grouped?: boolean;
  key_props?: string[];
  fallback_key?: string;
  preview_images?: WidgetPreviewImages;
  strapi_image?: string;
  used_in_pages: string[];
}

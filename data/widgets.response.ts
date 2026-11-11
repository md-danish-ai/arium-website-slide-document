import { WidgetResponseSchema } from "@/types/widget.types";

/**
 * Strapi CMS v5 Component & Widget Response Schemas
 *
 * Separate schema registry mapped directly into `WIDGETS_LIST` (`data/widget.ts`)
 * via the `widgets_response` field on each widget entry.
 */
export const WIDGETS_RESPONSES = {
  "shared.main-hero": {
    collectionName: "components_shared_main_heroes",
    info: {
      displayName: "Main Hero",
      icon: "layout",
      category: "hero",
      description:
        "Full-bleed hero canvas featuring spring-animated breathing vector shapes (shape-teal.svg, shape-white.svg), headline typography, and a scroll-down indicator.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      font_color: { type: "string", required: false },
      background_color: { type: "string", required: false },
      scroll_text: { type: "string", required: false },
    },
  },

  "shared.background-feature-section": {
    collectionName: "components_shared_background_feature_sections",
    info: {
      displayName: "Background Feature",
      icon: "sparkles",
      category: "feature",
      description:
        "Full-bleed background feature section framing wireless coverage challenges alongside 3 capability pillars (Design, Implement, Optimize) and optional CTA.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      background_image_desktop: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      background_image_mobile: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
      feature_cards: {
        type: "component",
        repeatable: true,
        component: "shared.feature-card",
      },
    },
  },

  "shared.background-feature-section--community": {
    collectionName: "components_shared_how_we_works",
    info: {
      displayName: "How We Work",
      icon: "sparkles",
      category: "feature",
      description:
        "Full-bleed background feature section highlighting collaborative municipal deployment across major U.S. markets with CTA linking to Right of Ways (also aliased as shared.how-we-work).",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
      background_image_desktop: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      background_image_mobile: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
    },
  },

  "shared.detailed-card-grid": {
    collectionName: "components_shared_detailed_card_grids",
    info: {
      displayName: "Detailed Card Grid",
      icon: "feather",
      category: "content",
      description:
        "Two-column interactive card grid highlighting Small Cells and Distributed Antenna Systems (DAS) with animated SVG line illustrations and solution links.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      background_color: { type: "string", required: false },
      panel_cards: {
        type: "component",
        repeatable: true,
        component: "shared.panel-card",
      },
    },
  },

  "shared.stats-with-image": {
    collectionName: "components_shared_stats_with_images",
    info: {
      displayName: "Stats With Image",
      icon: "chartBubble",
      category: "stats",
      description:
        "Animated 5-card KPI grid (100K+ Small Cells, 300+ DAS Venues, 700+ Municipal Networks, 15+ Years, 24/7 NOC) paired with the US dot-map SVG illustration.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      stat_illustration: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      stats_card: {
        type: "component",
        repeatable: true,
        component: "shared.stat-card",
      },
    },
  },

  "shared.image-gradient-split": {
    collectionName: "components_shared_image_gradient_splits",
    info: {
      displayName: "Image Gradient Split",
      icon: "feather",
      category: "content",
      description:
        "Gradient-masked split section presenting community and culture highlights with responsive background imagery, pointer items, and action link.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      background_image_desktop: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      background_image_mobile: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      section_pointers: {
        type: "component",
        repeatable: true,
        component: "shared.section-pointer",
      },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
    },
  },

  "shared.centered-image-cta": {
    collectionName: "components_shared_centered_image_ctas",
    info: {
      displayName: "Centered Image CTA",
      icon: "cursor",
      category: "cta",
      description:
        "Full-bleed centered callout with radial contrast overlay, background photography, and action button linking to Careers.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      background_image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
    },
  },

  "shared.cta-with-graphic": {
    collectionName: "components_shared_cta_with_graphics",
    info: {
      displayName: "CTA With Graphic",
      icon: "cursor",
      category: "cta",
      description:
        "Signature conversion banner pairing Arium's circular orbital vector illustration (connection-cta.svg) with a primary CTA button.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
      globe_illustration_desktop: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      globe_illustration_mobile: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      background_color: { type: "string", required: false },
    },
  },

  "shared.hero-banner": {
    collectionName: "components_shared_hero_banners",
    info: {
      displayName: "Hero Banner",
      icon: "layout",
      category: "hero",
      description:
        "Full-bleed subpage hero with responsive typography, dark gradient overlay, background image/video support, and optional CTA button.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      background_image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images", "videos"],
      },
      background_image_position: {
        type: "enumeration",
        enum: ["center", "top", "bottom"],
        default: "center",
      },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
      max_width_title: { type: "integer", required: false },
      max_width_description: { type: "integer", required: false },
    },
  },

  "shared.content-with-side-graphic": {
    collectionName: "components_shared_content_with_side_graphics",
    info: {
      displayName: "Content With Side Graphic",
      icon: "feather",
      category: "content",
      description:
        "Narrative block displaying corporate history on a soft purple gradient alongside a right-aligned connection-illustration.svg side graphic.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      background_color: { type: "string", required: false },
      image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
    },
  },

  "shared.timeline": {
    collectionName: "components_shared_timelines",
    info: {
      displayName: "Journey Timeline",
      icon: "timeline",
      category: "flow",
      description:
        "Interactive 4-milestone chronological timeline (2010–2026) inside Storyteller Flow showcasing NewPath/NextG roots, platform scale, and Arium Networks formation.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      timeline_cards: {
        type: "component",
        repeatable: true,
        component: "shared.timeline-card",
      },
    },
  },

  "shared.stats-cards": {
    collectionName: "components_shared_stats_cards",
    info: {
      displayName: "Stats Cards",
      icon: "timeline",
      category: "flow",
      description:
        "3-card industry demand grid highlighting 39B IoT devices, 21GB monthly mobile data consumption, and 89% North America 5G share by 2030.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      cards: {
        type: "component",
        repeatable: true,
        component: "shared.stat-card",
      },
    },
  },

  "shared.commitments": {
    collectionName: "components_shared_commitments",
    info: {
      displayName: "Commitments",
      icon: "timeline",
      category: "flow",
      description:
        "Panoramic EQT-backed banner and 3 corporate commitment pillars: customer-first focus, nimble readiness to invest, and long-haul ownership.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      background_overlay: { type: "boolean", default: true },
      commitment_statement: { type: "text", required: false },
      background_image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      commitment_cards: {
        type: "component",
        repeatable: true,
        component: "shared.commitment-card",
      },
    },
  },

  "shared.accordion-split": {
    collectionName: "components_shared_accordion_splits",
    info: {
      displayName: "Culture Accordion",
      icon: "feather",
      category: "content",
      description:
        "Split layout pairing narrative copy on a purple gradient with 5 interactive expandable culture cards via AccordionSplit.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      background_color: { type: "string", required: false },
      template_grid_columns: { type: "string", required: false },
      accordian_cards: {
        type: "component",
        repeatable: true,
        component: "shared.accordion-card",
      },
    },
  },

  "shared.gloabl-testimonails": {
    collectionName: "components_shared_global_testimonials",
    info: {
      displayName: "Global Testimonials",
      icon: "quote",
      category: "testimonials",
      description:
        "Canonical reusable testimonial grid shared across Careers, Community, Private Venues, and Right of Ways.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      cards: {
        type: "component",
        repeatable: true,
        component: "shared.testimonial-card",
      },
    },
  },

  "shared.highlight-list": {
    collectionName: "components_shared_highlight_lists",
    info: {
      displayName: "Job Areas",
      icon: "feather",
      category: "content",
      description:
        "Two-column list detailing 5 core functional career disciplines alongside office team photography and Dayforce application CTA.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
      image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      items: {
        type: "component",
        repeatable: true,
        component: "shared.highlight-item",
      },
    },
  },

  "shared.benefits": {
    collectionName: "components_shared_benefits",
    info: {
      displayName: "Benefits Grid",
      icon: "sparkles",
      category: "feature",
      description:
        "Modular 4-column grid highlighting Healthcare, Financial Security, Time Off, and Family Support (also renders EEO bottom_message when supplied via CMS).",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      cards: {
        type: "component",
        repeatable: true,
        component: "shared.benefit-card",
      },
      bottom_message: { type: "text", required: false },
    },
  },

  "shared.eeo": {
    collectionName: "components_shared_eeos",
    info: {
      displayName: "EEO Statement",
      icon: "feather",
      category: "content",
      description:
        "Formal equal opportunity employer disclaimer rendered at the bottom of Careers (and via BenefitsGridRenderer when bottom_message is set in CMS).",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      bottom_message: { type: "text", required: false },
      statementText: { type: "text", required: false },
      contentHtml: { type: "richtext", required: false },
    },
  },

  "shared.illustration-split": {
    collectionName: "components_shared_illustration_splits",
    info: {
      displayName: "Illustration Split",
      icon: "feather",
      category: "content",
      description:
        "Unified illustration split displaying small-cells-illustration.svg alongside educational copy explaining how small cells relieve network congestion.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      illustration_image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      illustration_image_alignment: {
        type: "enumeration",
        enum: ["left", "right"],
        default: "right",
      },
      show_bottom_divider: { type: "boolean", default: false },
      statistics: {
        type: "component",
        repeatable: true,
        component: "shared.statistic-item",
      },
      background: { type: "string", required: false },
    },
  },

  "shared.image-card-grid": {
    collectionName: "components_shared_image_card_grids",
    info: {
      displayName: "Image Card Grid",
      icon: "sparkles",
      category: "feature",
      description:
        "3-column dark-themed card grid with particle background exploring Reliability, Innovation, and Safety benefits of small cells.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      cards: {
        type: "component",
        repeatable: true,
        component: "shared.image-card",
      },
    },
  },

  "shared.faq": {
    collectionName: "components_shared_faqs",
    info: {
      displayName: "FAQ Accordion",
      icon: "feather",
      category: "content",
      description:
        "Interactive 6-item accordion on a radial FlowBackground canvas addressing neighborhood deployments, CLEC right-of-way access, municipal approvals, and FCC RF emission limits.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      faq_data: {
        type: "component",
        repeatable: true,
        component: "shared.faq-item",
      },
    },
  },

  "shared.small-cells": {
    collectionName: "components_shared_small_cells",
    info: {
      displayName: "Small Cells Split",
      icon: "timeline",
      category: "flow",
      description:
        "Right-aligned small-cells-illustration.svg split paired with MNO deployment copy and KPIs (100K+ small cells, 700+ municipalities served).",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      illustration_image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      illustration_image_alignment: {
        type: "enumeration",
        enum: ["left", "right"],
        default: "right",
      },
      show_bottom_divider: { type: "boolean", default: false },
      statistics: {
        type: "component",
        repeatable: true,
        component: "shared.statistic-item",
      },
      background: { type: "string", required: false },
    },
  },

  "shared.das": {
    collectionName: "components_shared_das",
    info: {
      displayName: "DAS Split",
      icon: "timeline",
      category: "flow",
      description:
        "Left-aligned das-illustration.svg split covering indoor and venue deployments (300+ premier venues across the country) with bottom divider.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      illustration_image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      illustration_image_alignment: {
        type: "enumeration",
        enum: ["left", "right"],
        default: "left",
      },
      show_bottom_divider: { type: "boolean", default: true },
      statistics: {
        type: "component",
        repeatable: true,
        component: "shared.statistic-item",
      },
      background: { type: "string", required: false },
    },
  },

  "shared.industry": {
    collectionName: "components_shared_industries",
    info: {
      displayName: "Industries Accordion",
      icon: "feather",
      category: "content",
      description:
        "Interactive 7-industry auto-rotating accordion (Stadiums & Arenas, Amusement & Hospitality, Higher Education, Commercial Real Estate, Healthcare, State & Local Government, Airports) with cross-fading photography and SVG icons.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      background_color: { type: "string", required: false },
      template_grid_columns: { type: "string", required: false },
      accordian_cards: {
        type: "component",
        repeatable: true,
        component: "shared.accordion-card",
      },
    },
  },

  "shared.sub-page-hero": {
    collectionName: "components_shared_sub_page_heroes",
    info: {
      displayName: "Sub-Page Hero",
      icon: "layout",
      category: "hero",
      description:
        "Compact subpage header with automatic breadcrumbs, custom gradient backdrop, and optional CTA.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      tag: { type: "string", required: false },
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
      background_gradient: { type: "string", required: false },
      content_max_width: { type: "integer", required: false },
    },
  },

  "shared.process": {
    collectionName: "components_shared_processes",
    info: {
      displayName: "Process Section",
      icon: "feather",
      category: "content",
      description:
        "Three-stage interactive pillar process detailing partner delivery, architectural integration, RF design, and optimization.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      description: { type: "text", required: false },
      background_color: { type: "string", required: false },
      pillars: {
        type: "component",
        repeatable: true,
        component: "shared.process-pillar",
      },
      maxWidthTitle: { type: "integer", required: false },
    },
  },

  "shared.global-cta": {
    collectionName: "components_shared_global_ctas",
    info: {
      displayName: "Sub-Page CTA",
      icon: "cursor",
      category: "cta",
      description:
        "Shared CTA banner with rotated connection-globe.svg illustration inviting visitors and stakeholders to take action.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      prompt_to_cta: { type: "string", required: true },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
      background_gradient: { type: "string", required: false },
      globe_illustration: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
    },
  },

  "shared.communities": {
    collectionName: "components_shared_communities",
    info: {
      displayName: "Where Communities",
      icon: "feather",
      category: "content",
      description:
        "Split layout on a warm peach gradient pairing community-hero.png photography with public right-of-way copy and Learn more CTA linking to /right-of-ways.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      image_alignment: {
        type: "enumeration",
        enum: ["left", "right"],
        default: "right",
      },
      background_color: { type: "string", required: false },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
    },
  },

  "shared.venues": {
    collectionName: "components_shared_venues",
    info: {
      displayName: "Where Venues",
      icon: "feather",
      category: "content",
      description:
        "Split layout on a mint-teal gradient pairing venue-hero.png photography (left-aligned on desktop) with indoor DAS/small cell copy and CTA linking to /private-venues.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      title: { type: "string", required: true },
      title_color: { type: "string", required: false },
      description: { type: "text", required: false },
      description_color: { type: "string", required: false },
      image: {
        type: "media",
        multiple: false,
        required: false,
        allowedTypes: ["images"],
      },
      image_alignment: {
        type: "enumeration",
        enum: ["left", "right"],
        default: "left",
      },
      background_color: { type: "string", required: false },
      CTA_text: { type: "string", required: false },
      CTA_url: { type: "string", required: false },
    },
  },

  "shared.people-global-section": {
    collectionName: "components_shared_people_global_sections",
    info: {
      displayName: "People Global Section",
      icon: "users",
      category: "people",
      description:
        "Canonical responsive team grid rendering executive leaders or board members with interactive MemberModal bio views.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      members: {
        type: "component",
        repeatable: true,
        component: "shared.team-member",
      },
      background_gradient: { type: "string", required: false },
    },
  },

  "contact-form": {
    collectionName: "components_shared_contact_forms",
    info: {
      displayName: "Contact Form",
      icon: "mail",
      category: "form",
      description:
        "Interactive inquiry form powered by React Hook Form + Zod validation, 9 topic interest options, and POST /api/contact email delivery via Resend API.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      topicOptions: { type: "json", required: true },
    },
  },

  "shared.dynamic-zone": {
    collectionName: "components_shared_dynamic_zones",
    info: {
      displayName: "Dynamic Zone",
      icon: "layer",
      category: "shared",
      description:
        "Modular dynamic blocks resolved through WIDGET_REGISTRY via GlobalWidgetRenderer, automatically grouping contiguous storyteller-flow and people-global-section items.",
    },
    options: {
      timestamps: true,
    },
    attributes: {
      PositionNumber: { type: "integer", required: true },
      CustomCssClass: { type: "string", required: false },
      Sections: {
        type: "dynamiczone",
        components: [
          "shared.hero-banner",
          "shared.background-feature-section",
          "shared.image-gradient-split",
          "shared.gloabl-testimonails",
          "shared.people-global-section",
          "shared.cta-with-graphic",
        ],
      },
      __component: { type: "string", required: true },
    },
  },
} satisfies Record<string, WidgetResponseSchema>;

export type WidgetResponseKey = keyof typeof WIDGETS_RESPONSES;

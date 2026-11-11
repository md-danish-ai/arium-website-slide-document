import { PageWithWidgets, ChildWidget } from "@/types/widget.types";

/**
 * 1. PAGES BY WIDGETS ARRAY
 * Contains complete page-by-page Strapi mapping and nested child widgets
 * used in each respective page.
 */
export const PAGE_WIDGETS: PageWithWidgets[] = [
  // ── 1. HOME PAGE ────────────────────────────────────────────────────────
  {
    id: "home",
    title: "Home Page",
    label: "Home",
    route: "/",
    strapi_slug: "home",
    category: "Corporate",
    description:
      "Flagship entrance for Arium Networks. Orchestrates 7 modular sections and background particle physics to showcase high-density cellular infrastructure, small cells, DAS, and municipal partnerships.",
    child_widgets: [
      {
        id: "w-home-0",
        position: 0,
        widget_key: "shared.main-hero",
        widgets_title: "Home Main Hero Banner",
        widgets_label: "Home Hero",
        category: "hero",
        description:
          "Full-bleed hero canvas featuring spring-animated breathing vector shapes (shape-teal.svg, shape-white.svg), headline typography, and a scroll-down indicator.",
        key_props: [
          "title",
          "description",
          "font_color",
          "background_color",
          "scroll_text",
        ],
        preview_images: {
          desktop: "/images/home/home-hero/home-hero.png",
          tablet: "/images/home/home-hero/home-hero-tablet.png",
          mobile: "/images/home/home-hero/home-hero-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/home/home-hero.png",
      },
      {
        id: "w-home-1",
        position: 1,
        widget_key: "shared.background-feature-section",
        widgets_title: "Network Challenges & Solutions Overview",
        widgets_label: "Background Feature",
        category: "feature",
        description:
          "Full-bleed background feature section framing wireless coverage challenges alongside 3 capability pillars (Design, Implement, Optimize) and optional CTA.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "background_image_desktop",
          "background_image_mobile",
          "CTA_text",
          "CTA_url",
          "feature_cards",
        ],
        preview_images: {
          desktop: "/images/home/background-feature/background-feature.png",
          tablet:
            "/images/home/background-feature/background-feature-tablet.png",
          mobile:
            "/images/home/background-feature/background-feature-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/home/background-feature.png",
      },
      {
        id: "w-home-2",
        position: 2,
        widget_key: "shared.detailed-card-grid",
        widgets_title: "2-Card Infrastructure Architecture Grid",
        widgets_label: "Detailed Card Grid",
        category: "content",
        description:
          "Two-column interactive card grid highlighting Small Cells and Distributed Antenna Systems (DAS) with animated SVG line illustrations and solution links.",
        key_props: ["title", "description", "background_color", "panel_cards"],
        preview_images: {
          desktop: "/images/home/detailed-card-grid/detailed-card-grid.png",
          tablet:
            "/images/home/detailed-card-grid/detailed-card-grid-tablet.png",
          mobile:
            "/images/home/detailed-card-grid/detailed-card-grid-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/home/detailed-card-grid.png",
      },
      {
        id: "w-home-3",
        position: 3,
        widget_key: "shared.stats-with-image",
        widgets_title: "Scale & Experience Deployment Metrics",
        widgets_label: "Stats With Image",
        category: "stats",
        description:
          "Animated 5-card KPI grid (100K+ Small Cells, 300+ DAS Venues, 700+ Municipal Networks, 15+ Years, 24/7 NOC) paired with the US dot-map SVG illustration.",
        key_props: ["title", "title_color", "stat_illustration", "stats_card"],
        preview_images: {
          desktop: "/images/home/stats-with-image/stats-with-image.png",
          tablet: "/images/home/stats-with-image/stats-with-image-tablet.png",
          mobile: "/images/home/stats-with-image/stats-with-image-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/home/stats-with-image.png",
      },
      {
        id: "w-home-4",
        position: 4,
        widget_key: "shared.image-gradient-split",
        widgets_title: "Community Partnership Impact Split",
        widgets_label: "Image Gradient Split",
        category: "content",
        description:
          "Gradient-masked split section presenting community connectivity highlights (Reliability, Opportunity, Safety) with responsive background imagery and Learn More link.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "background_image_desktop",
          "background_image_mobile",
          "section_pointers",
          "CTA_text",
          "CTA_url",
        ],
        preview_images: {
          desktop: "/images/home/image-gradient-split/image-gradient-split.png",
          tablet:
            "/images/home/image-gradient-split/image-gradient-split-tablet.png",
          mobile:
            "/images/home/image-gradient-split/image-gradient-split-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/home/image-gradient-split.png",
      },
      {
        id: "w-home-5",
        position: 5,
        widget_key: "shared.centered-image-cta",
        widgets_title: "High-Contrast Hiring Callout",
        widgets_label: "Centered Image CTA",
        category: "cta",
        description:
          "Full-bleed centered callout with radial contrast overlay, background photography, and action button linking to Careers.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "background_image",
          "CTA_text",
          "CTA_url",
        ],
        preview_images: {
          desktop: "/images/home/centered-image-cta/centered-image-cta.png",
          tablet:
            "/images/home/centered-image-cta/centered-image-cta-tablet.png",
          mobile:
            "/images/home/centered-image-cta/centered-image-cta-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/home/centered-image-cta.png",
      },
      {
        id: "w-home-6",
        position: 6,
        widget_key: "shared.cta-with-graphic",
        widgets_title: "Closing Brand CTA with Circular Graphic Loop",
        widgets_label: "CTA With Graphic",
        category: "cta",
        description:
          "Signature conversion banner pairing Arium's circular orbital vector illustration (connection-cta.svg) with a primary CTA button.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "CTA_text",
          "CTA_url",
          "globe_illustration_desktop",
          "globe_illustration_mobile",
          "background_color",
        ],
        preview_images: {
          desktop: "/images/home/cta-with-graphic/cta-with-graphic.png",
          tablet: "/images/home/cta-with-graphic/cta-with-graphic-tablet.png",
          mobile: "/images/home/cta-with-graphic/cta-with-graphic-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/home/cta-with-graphic.png",
      },
    ],
  },

  // ── 2. ABOUT PAGE ────────────────────────────────────────────────────────
  {
    id: "about",
    title: "About Page",
    label: "About",
    route: "/about",
    strapi_slug: "about",
    category: "Corporate",
    description:
      "Narrative corporate storytelling page implementing the Storyteller Flow. Binds 3 distinct Strapi dynamic zone blocks under a single continuous FlowBackground canvas with vector line art.",
    child_widgets: [
      {
        id: "w-about-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "About Brand Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Full-bleed subpage hero with responsive typography, dark gradient overlay, background image/video support, and optional CTA button.",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
        ],
        preview_images: {
          desktop: "/images/about/hero-banner/hero-banner.png",
          tablet: "/images/about/hero-banner/hero-banner-tablet.png",
          mobile: "/images/about/hero-banner/hero-banner-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/about/hero-banner.png",
      },
      {
        id: "w-about-1",
        position: 1,
        widget_key: "shared.content-with-side-graphic",
        widgets_title: "Our Story with Connection Illustration Graphic",
        widgets_label: "Content With Side Graphic",
        category: "content",
        description:
          "Narrative block displaying corporate history on a soft purple gradient alongside a right-aligned connection-illustration.svg side graphic.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "background_color",
          "image",
        ],
        preview_images: {
          desktop:
            "/images/about/content-with-side-graphic/content-with-side-graphic.png",
          tablet:
            "/images/about/content-with-side-graphic/content-with-side-graphic-tablet.png",
          mobile:
            "/images/about/content-with-side-graphic/content-with-side-graphic-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/about/content-with-side-graphic.png",
      },
      {
        id: "w-about-2",
        position: 2,
        widget_key: "shared.timeline",
        widgets_title: "Chronological Milestones Journey",
        widgets_label: "Journey Timeline",
        category: "flow",
        description:
          "Interactive 4-milestone chronological timeline (2010–2026) inside Storyteller Flow showcasing NewPath/NextG roots, platform scale, and Arium Networks formation.",
        key_props: ["title", "description", "timeline_cards"],
        preview_images: {
          desktop: "/images/about/journey-timeline/journey-timeline.png",
          tablet: "/images/about/journey-timeline/journey-timeline-tablet.png",
          mobile: "/images/about/journey-timeline/journey-timeline-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/about/journey-timeline.png",
      },
      {
        id: "w-about-3",
        position: 2,
        widget_key: "shared.stats-cards",
        widgets_title: "Why Our Infrastructure Matters Stats Cards",
        widgets_label: "Stats Cards",
        category: "flow",
        description:
          "3-card industry demand grid highlighting 39B IoT devices, 21GB monthly mobile data consumption, and 89% North America 5G share by 2030.",
        key_props: ["title", "description", "cards"],
        preview_images: {
          desktop: "/images/about/stats-cards/stats-cards.png",
          tablet: "/images/about/stats-cards/stats-cards-tablet.png",
          mobile: "/images/about/stats-cards/stats-cards-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/about/stats-cards.png",
      },
      {
        id: "w-about-4",
        position: 2,
        widget_key: "shared.commitments",
        widgets_title: "Values & Standards Commitments",
        widgets_label: "Commitments",
        category: "flow",
        description:
          "Panoramic EQT-backed banner and 3 corporate commitment pillars: customer-first focus, nimble readiness to invest, and long-haul ownership.",
        key_props: [
          "title",
          "description",
          "background_overlay",
          "commitment_statement",
          "background_image",
          "commitment_cards",
        ],
        preview_images: {
          desktop: "/images/about/commitments/commitments.png",
          tablet: "/images/about/commitments/commitments-tablet.png",
          mobile: "/images/about/commitments/commitments-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/about/commitments.png",
      },
      {
        id: "w-about-5",
        position: 3,
        widget_key: "shared.image-gradient-split",
        widgets_title: "We're Hiring Culture Split",
        widgets_label: "Image Gradient Split",
        category: "content",
        description:
          "Split promotional section highlighting workplace culture pillars (Leadership, Passion, Optimism) with gradient-masked imagery and Careers CTA.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "background_image_desktop",
          "background_image_mobile",
          "section_pointers",
          "CTA_text",
          "CTA_url",
        ],
        preview_images: {
          desktop:
            "/images/about/image-gradient-split/image-gradient-split.png",
          tablet:
            "/images/about/image-gradient-split/image-gradient-split-tablet.png",
          mobile:
            "/images/about/image-gradient-split/image-gradient-split-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/about/image-gradient-split.png",
      },
    ],
  },

  // ── 3. CAREERS PAGE ──────────────────────────────────────────────────────
  {
    id: "careers",
    title: "Careers Page",
    label: "Careers",
    route: "/careers",
    strapi_slug: "careers",
    category: "Corporate",
    description:
      "Recruitment and culture hub presenting employee value proposition, 5 core job disciplines, 4-column benefits grid, employee testimonials, and EEO statement with deduplicated shared components.",
    child_widgets: [
      {
        id: "w-car-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Careers Value Proposition Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Subpage hero showcasing team collaboration photography and external Dayforce careers portal CTA.",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
        ],
        preview_images: {
          desktop: "/images/careers/hero-banner/hero-banner.png",
          tablet: "/images/careers/hero-banner/hero-banner-tablet.png",
          mobile: "/images/careers/hero-banner/hero-banner-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/careers/hero-banner.png",
      },
      {
        id: "w-car-1",
        position: 1,
        widget_key: "shared.accordion-split",
        widgets_title: "Why Join Culture Accordion",
        widgets_label: "Culture Accordion",
        category: "content",
        description:
          "Split layout pairing narrative copy on a purple gradient with 5 interactive expandable culture cards via AccordionSplit.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "background_color",
          "template_grid_columns",
          "accordian_cards",
        ],
        preview_images: {
          desktop: "/images/careers/culture-accordion/culture-accordion.png",
          tablet:
            "/images/careers/culture-accordion/culture-accordion-tablet.png",
          mobile:
            "/images/careers/culture-accordion/culture-accordion-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/careers/culture-accordion.png",
      },
      {
        id: "w-car-2",
        position: 2,
        widget_key: "shared.gloabl-testimonails",
        widgets_title: "Employee Testimonials Grid",
        widgets_label: "Global Testimonials",
        category: "testimonials",
        description:
          "Canonical reusable 4-card employee testimonial grid (horizontal scroll on mobile, 4-column on desktop) shared across Careers, Community, and Venues.",
        key_props: ["title", "cards"],
        preview_images: {
          desktop:
            "/images/careers/global-testimonials/global-testimonials.png",
          tablet:
            "/images/careers/global-testimonials/global-testimonials-tablet.png",
          mobile:
            "/images/careers/global-testimonials/global-testimonials-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/careers/global-testimonials.png",
      },
      {
        id: "w-car-3",
        position: 3,
        widget_key: "shared.highlight-list",
        widgets_title: "Functional Job Disciplines & Career Tracks",
        widgets_label: "Job Areas",
        category: "content",
        description:
          "Two-column list detailing 5 core functional career disciplines alongside office team photography and Dayforce application CTA.",
        key_props: [
          "title",
          "description",
          "CTA_text",
          "CTA_url",
          "image",
          "items",
        ],
        preview_images: {
          desktop: "/images/careers/job-areas/job-areas.png",
          tablet: "/images/careers/job-areas/job-areas-tablet.png",
          mobile: "/images/careers/job-areas/job-areas-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/careers/job-areas.png",
      },
      {
        id: "w-car-4",
        position: 4,
        widget_key: "shared.benefits",
        widgets_title: "Comprehensive Employee Benefits Grid",
        widgets_label: "Benefits Grid",
        category: "feature",
        description:
          "Modular 4-column grid highlighting Healthcare, Financial Security, Time Off, and Family Support (also renders EEO bottom_message when supplied via CMS).",
        key_props: ["title", "description", "cards", "bottom_message"],
        preview_images: {
          desktop: "/images/careers/benefits-grid/benefits-grid.png",
          tablet: "/images/careers/benefits-grid/benefits-grid-tablet.png",
          mobile: "/images/careers/benefits-grid/benefits-grid-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/careers/benefits-grid.png",
      },
      {
        id: "w-car-5",
        position: 5,
        widget_key: "shared.eeo",
        widgets_title: "Equal Employment Opportunity Statement",
        widgets_label: "EEO Statement",
        category: "content",
        description:
          "Formal equal opportunity employer disclaimer rendered at the bottom of Careers (and via BenefitsGridRenderer when bottom_message is set in CMS).",
        key_props: ["bottom_message", "statementText", "contentHtml"],
        preview_images: {
          desktop: "/images/careers/eeo-statement/eeo-statement.png",
          tablet: "/images/careers/eeo-statement/eeo-statement-tablet.png",
          mobile: "/images/careers/eeo-statement/eeo-statement-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/careers/eeo-statement.png",
      },
    ],
  },

  // ── 4. COMMUNITY PAGE ────────────────────────────────────────────────────
  {
    id: "community",
    title: "Community Page",
    label: "Community",
    route: "/community",
    strapi_slug: "community",
    category: "Corporate",
    description:
      "Municipal and civic stakeholder education page explaining what small cells are, why they matter (Reliability, Innovation, Safety), how Arium works in communities, civic testimonials, and a 6-item RF/permitting FAQ.",
    child_widgets: [
      {
        id: "w-com-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Community Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Community subpage hero with municipality-oriented messaging and full-bleed background photography.",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
        ],
        preview_images: {
          desktop: "/images/community/hero-banner/hero-banner.png",
          tablet: "/images/community/hero-banner/hero-banner-tablet.png",
          mobile: "/images/community/hero-banner/hero-banner-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/community/hero-banner.png",
      },
      {
        id: "w-com-1",
        position: 1,
        widget_key: "shared.illustration-split",
        widgets_title: "Small Cells Municipal Technology Split",
        widgets_label: "Illustration Split",
        category: "content",
        description:
          "Unified illustration split displaying small-cells-illustration.svg alongside educational copy explaining how small cells relieve network congestion.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "illustration_image",
          "illustration_image_alignment",
          "show_bottom_divider",
          "statistics",
          "background",
        ],
        preview_images: {
          desktop:
            "/images/community/illustration-split/illustration-split.png",
          tablet:
            "/images/community/illustration-split/illustration-split-tablet.png",
          mobile:
            "/images/community/illustration-split/illustration-split-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/community/illustration-split.png",
      },
      {
        id: "w-com-2",
        position: 2,
        widget_key: "shared.image-card-grid",
        widgets_title: "Why Small Cells Matter Card Grid",
        widgets_label: "Image Card Grid",
        category: "feature",
        description:
          "3-column dark-themed card grid with particle background exploring Reliability, Innovation, and Safety benefits of small cells.",
        key_props: ["title", "title_color", "cards"],
        preview_images: {
          desktop: "/images/community/image-card-grid/image-card-grid.png",
          tablet:
            "/images/community/image-card-grid/image-card-grid-tablet.png",
          mobile:
            "/images/community/image-card-grid/image-card-grid-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/community/image-card-grid.png",
      },
      {
        id: "w-com-3",
        position: 3,
        widget_key: "shared.background-feature-section",
        widgets_title: "How We Work with Municipalities",
        widgets_label: "How We Work",
        category: "feature",
        description:
          "Full-bleed background feature section highlighting collaborative municipal deployment across major U.S. markets with CTA linking to Right of Ways (also aliased as shared.how-we-work).",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "CTA_text",
          "CTA_url",
          "background_image_desktop",
          "background_image_mobile",
        ],
        preview_images: {
          desktop: "/images/community/how-we-work/how-we-work.png",
          tablet: "/images/community/how-we-work/how-we-work-tablet.png",
          mobile: "/images/community/how-we-work/how-we-work-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/community/how-we-work.png",
      },
      {
        id: "w-com-4",
        position: 4,
        widget_key: "shared.gloabl-testimonails",
        widgets_title: "Civic Leaders & Municipal Testimonials",
        widgets_label: "Global Testimonials",
        category: "testimonials",
        description:
          "3-column testimonial grid featuring verified quotes from civic, sustainability, and real estate community stakeholders.",
        key_props: ["title", "cards"],
        preview_images: {
          desktop:
            "/images/community/global-testimonials/global-testimonials.png",
          tablet:
            "/images/community/global-testimonials/global-testimonials-tablet.png",
          mobile:
            "/images/community/global-testimonials/global-testimonials-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/community/global-testimonials.png",
      },
      {
        id: "w-com-5",
        position: 5,
        widget_key: "shared.faq",
        widgets_title: "Community Frequently Asked Questions",
        widgets_label: "FAQ Accordion",
        category: "content",
        description:
          "Interactive 6-item accordion on a radial FlowBackground canvas addressing neighborhood deployments, CLEC right-of-way access, municipal approvals, and FCC RF emission limits.",
        key_props: ["title", "title_color", "faq_data"],
        preview_images: {
          desktop: "/images/community/faq-accordion/faq-accordion.png",
          tablet: "/images/community/faq-accordion/faq-accordion-tablet.png",
          mobile: "/images/community/faq-accordion/faq-accordion-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/community/faq-accordion.png",
      },
    ],
  },

  // ── 5. SOLUTIONS PAGE ────────────────────────────────────────────────────
  {
    id: "solutions",
    title: "Solutions Page",
    label: "Solutions",
    route: "/solutions",
    strapi_slug: "solutions",
    category: "Solutions",
    description:
      "Deep technical walkthrough of Arium's core infrastructure offerings: Small Cells (100K+ nodes, 700+ municipalities), Distributed Antenna Systems (DAS, 300+ venues), 7-industry vertical accordion, and balanced approach CTA.",
    child_widgets: [
      {
        id: "w-sol-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Solutions Overview Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Solutions hero communicating scalable wireless infrastructure with Contact Us CTA button.",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
        ],
        preview_images: {
          desktop: "/images/solutions/hero-banner/hero-banner.png",
          tablet: "/images/solutions/hero-banner/hero-banner-tablet.png",
          mobile: "/images/solutions/hero-banner/hero-banner-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/solutions/hero-banner.png",
      },
      {
        id: "w-sol-1",
        position: 1,
        widget_key: "shared.small-cells",
        widgets_title: "Small Cells Densification Technical Split",
        widgets_label: "Small Cells Split",
        category: "flow",
        description:
          "Right-aligned small-cells-illustration.svg split paired with MNO deployment copy and KPIs (100K+ small cells, 700+ municipalities served).",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "illustration_image",
          "illustration_image_alignment",
          "show_bottom_divider",
          "statistics",
          "background",
        ],
        preview_images: {
          desktop: "/images/solutions/small-cells-split/small-cells-split.png",
          tablet:
            "/images/solutions/small-cells-split/small-cells-split-tablet.png",
          mobile:
            "/images/solutions/small-cells-split/small-cells-split-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/solutions/small-cells-split.png",
      },
      {
        id: "w-sol-2",
        position: 1,
        widget_key: "shared.das",
        widgets_title: "Distributed Antenna Systems (DAS) In-Building Split",
        widgets_label: "DAS Split",
        category: "flow",
        description:
          "Left-aligned das-illustration.svg split covering indoor and venue deployments (300+ premier venues across the country) with bottom divider.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "illustration_image",
          "illustration_image_alignment",
          "show_bottom_divider",
          "statistics",
          "background",
        ],
        preview_images: {
          desktop: "/images/solutions/das-split/das-split.png",
          tablet: "/images/solutions/das-split/das-split-tablet.png",
          mobile: "/images/solutions/das-split/das-split-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/solutions/das-split.png",
      },
      {
        id: "w-sol-3",
        position: 3,
        widget_key: "shared.industry",
        widgets_title: "Multi-Industry Infrastructure Accordion",
        widgets_label: "Industries Accordion",
        category: "content",
        description:
          "Interactive 7-industry auto-rotating accordion (Stadiums & Arenas, Amusement & Hospitality, Higher Education, Commercial Real Estate, Healthcare, State & Local Government, Airports) with cross-fading photography and SVG icons.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "background_color",
          "template_grid_columns",
          "accordian_cards",
        ],
        preview_images: {
          desktop:
            "/images/solutions/industries-accordion/industries-accordion.png",
          tablet:
            "/images/solutions/industries-accordion/industries-accordion-tablet.png",
          mobile:
            "/images/solutions/industries-accordion/industries-accordion-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/solutions/industries-accordion.png",
      },
      {
        id: "w-sol-4",
        position: 99,
        widget_key: "shared.cta-with-graphic",
        widgets_title: "A Balanced Approach Solutions CTA",
        widgets_label: "CTA With Graphic",
        category: "cta",
        description:
          "Closing conversion block pairing connection-cta.svg orbital graphics with a Learn more CTA linking to Where We Build.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "CTA_text",
          "CTA_url",
          "globe_illustration_desktop",
          "globe_illustration_mobile",
          "background_color",
        ],
        preview_images: {
          desktop: "/images/solutions/cta-with-graphic/cta-with-graphic.png",
          tablet:
            "/images/solutions/cta-with-graphic/cta-with-graphic-tablet.png",
          mobile:
            "/images/solutions/cta-with-graphic/cta-with-graphic-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/solutions/cta-with-graphic.png",
      },
    ],
  },

  // ── 6. PRIVATE VENUES PAGE ───────────────────────────────────────────────
  {
    id: "private-venues",
    title: "Private Venues",
    label: "Private Venues",
    route: "/private-venues",
    strapi_slug: "private-venues",
    category: "Solutions",
    description:
      "Enterprise venue solution page illustrating in-building wireless connectivity (DAS and small cells), a 3-stage service delivery process (Design, Construction, Optimization), venue operator testimonials, and dedicated venues outreach.",
    child_widgets: [
      {
        id: "w-pv-0",
        position: 0,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Private Venues Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Compact subpage header with automatic breadcrumbs, purple gradient backdrop, and Contact Us CTA.",
        key_props: [
          "tag",
          "title",
          "description",
          "CTA_text",
          "CTA_url",
          "background_gradient",
          "content_max_width",
        ],
        preview_images: {
          desktop: "/images/private-venues/sub-page-hero/sub-page-hero.png",
          tablet:
            "/images/private-venues/sub-page-hero/sub-page-hero-tablet.png",
          mobile:
            "/images/private-venues/sub-page-hero/sub-page-hero-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/private-venues/sub-page-hero.png",
      },
      {
        id: "w-pv-1",
        position: 1,
        widget_key: "shared.process",
        widgets_title: "3-Stage Service Delivery Process Timeline",
        widgets_label: "Process Section",
        category: "content",
        description:
          "Three-stage interactive pillar process (Design, Construction, Optimization) detailing partner selection, architectural integration, RF design, contractor management, testing, and fine tuning.",
        key_props: [
          "title",
          "description",
          "background_color",
          "pillars",
          "maxWidthTitle",
        ],
        preview_images: {
          desktop: "/images/private-venues/process-section/process-section.png",
          tablet:
            "/images/private-venues/process-section/process-section-tablet.png",
          mobile:
            "/images/private-venues/process-section/process-section-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/private-venues/process-section.png",
      },
      {
        id: "w-pv-2",
        position: 2,
        widget_key: "shared.gloabl-testimonails",
        widgets_title: "Commercial Venue Operator Testimonials",
        widgets_label: "Global Testimonials",
        category: "testimonials",
        description:
          "2-column wide testimonial grid highlighting commercial real estate and major sports arena operator experiences.",
        key_props: ["title", "cards"],
        preview_images: {
          desktop:
            "/images/private-venues/global-testimonials/global-testimonials.png",
          tablet:
            "/images/private-venues/global-testimonials/global-testimonials-tablet.png",
          mobile:
            "/images/private-venues/global-testimonials/global-testimonials-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/private-venues/global-testimonials.png",
      },
      {
        id: "w-pv-3",
        position: 99,
        widget_key: "shared.global-cta",
        widgets_title: "Private Venues Partnership CTA Banner",
        widgets_label: "Sub-Page CTA",
        category: "cta",
        description:
          "Shared CTA banner with rotated connection-globe.svg illustration inviting property operators to contact the venues team.",
        key_props: [
          "prompt_to_cta",
          "CTA_text",
          "CTA_url",
          "background_gradient",
          "globe_illustration",
        ],
        preview_images: {
          desktop: "/images/private-venues/sub-page-cta/sub-page-cta.png",
          tablet: "/images/private-venues/sub-page-cta/sub-page-cta-tablet.png",
          mobile: "/images/private-venues/sub-page-cta/sub-page-cta-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/private-venues/sub-page-cta.png",
      },
    ],
  },

  // ── 7. RIGHT OF WAYS PAGE ────────────────────────────────────────────────
  {
    id: "right-of-ways",
    title: "Right of Ways",
    label: "Right of Ways",
    route: "/right-of-ways",
    strapi_slug: "right-of-ways",
    category: "Operations",
    description:
      "Municipal right-of-way deployment guide showcasing small cell connectivity, a 3-stage structured deployment process (Assessment, Planning, Construction) utilizing CLEC utility-pole and streetlight colocation, carrier/community testimonials, and municipal outreach.",
    child_widgets: [
      {
        id: "w-row-0",
        position: 1,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Right of Ways Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Subpage hero with automatic breadcrumbs, warm peach gradient, and Contact Us CTA for municipal partnerships.",
        key_props: [
          "tag",
          "title",
          "description",
          "CTA_text",
          "CTA_url",
          "background_gradient",
          "content_max_width",
        ],
        preview_images: {
          desktop: "/images/right-of-ways/sub-page-hero/sub-page-hero.png",
          tablet:
            "/images/right-of-ways/sub-page-hero/sub-page-hero-tablet.png",
          mobile:
            "/images/right-of-ways/sub-page-hero/sub-page-hero-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/right-of-ways/sub-page-hero.png",
      },
      {
        id: "w-row-1",
        position: 2,
        widget_key: "shared.process",
        widgets_title: "Structured Municipal Permitting & Deployment Process",
        widgets_label: "Process Section",
        category: "content",
        description:
          "Three-stage municipal deployment process (Assessment, Planning, Construction) covering site identification, CLEC right-of-way assessment, permit applications, and code-compliant installation.",
        key_props: [
          "title",
          "description",
          "background_color",
          "pillars",
          "maxWidthTitle",
        ],
        preview_images: {
          desktop: "/images/right-of-ways/process-section/process-section.png",
          tablet:
            "/images/right-of-ways/process-section/process-section-tablet.png",
          mobile:
            "/images/right-of-ways/process-section/process-section-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/right-of-ways/process-section.png",
      },
      {
        id: "w-row-2",
        position: 3,
        widget_key: "shared.gloabl-testimonails",
        widgets_title: "City & Utility Partner Feedback Testimonials",
        widgets_label: "Global Testimonials",
        category: "testimonials",
        description:
          "2-column wide testimonial grid featuring quotes from wireless carrier engineering and operations leaders (AT&T, Verizon) on municipal project collaboration.",
        key_props: ["title", "cards"],
        preview_images: {
          desktop:
            "/images/right-of-ways/global-testimonials/global-testimonials.png",
          tablet:
            "/images/right-of-ways/global-testimonials/global-testimonials-tablet.png",
          mobile:
            "/images/right-of-ways/global-testimonials/global-testimonials-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/right-of-ways/global-testimonials.png",
      },
      {
        id: "w-row-3",
        position: 4,
        widget_key: "shared.global-cta",
        widgets_title: "Right of Ways Consultation CTA Banner",
        widgets_label: "Sub-Page CTA",
        category: "cta",
        description:
          "Shared CTA banner with rotated connection-globe.svg inviting municipal stakeholders to connect with the municipal team.",
        key_props: [
          "prompt_to_cta",
          "CTA_text",
          "CTA_url",
          "background_gradient",
          "globe_illustration",
        ],
        preview_images: {
          desktop: "/images/right-of-ways/sub-page-cta/sub-page-cta.png",
          tablet: "/images/right-of-ways/sub-page-cta/sub-page-cta-tablet.png",
          mobile: "/images/right-of-ways/sub-page-cta/sub-page-cta-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/right-of-ways/sub-page-cta.png",
      },
    ],
  },

  // ── 8. WHERE WE BUILD PAGE ───────────────────────────────────────────────
  {
    id: "where-we-build",
    title: "Where We Build",
    label: "Where We Build",
    route: "/where-we-build",
    strapi_slug: "where-we-build",
    category: "Operations",
    description:
      "Deployment environments overview pairing a full-bleed HeroBanner with two photo-backed split sections detailing public right-of-way Communities (/right-of-ways) and indoor Buildings & Venues (/private-venues).",
    child_widgets: [
      {
        id: "w-where-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "National Footprint Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Where We Build hero banner introducing wireless infrastructure deployments in communities and inside buildings and venues.",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
        ],
        preview_images: {
          desktop: "/images/where-we-build/hero-banner/hero-banner.png",
          tablet: "/images/where-we-build/hero-banner/hero-banner-tablet.png",
          mobile: "/images/where-we-build/hero-banner/hero-banner-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/where-we-build/hero-banner.png",
      },
      {
        id: "w-where-1",
        position: 1,
        widget_key: "shared.communities",
        widgets_title: "Communities Public Right-of-Way Split",
        widgets_label: "Where Communities",
        category: "content",
        description:
          "Split layout on a warm peach gradient pairing community-hero.png photography with public right-of-way copy and Learn more CTA linking to /right-of-ways.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "image",
          "image_alignment",
          "background_color",
          "CTA_text",
          "CTA_url",
        ],
        preview_images: {
          desktop:
            "/images/where-we-build/where-communities/where-communities.png",
          tablet:
            "/images/where-we-build/where-communities/where-communities-tablet.png",
          mobile:
            "/images/where-we-build/where-communities/where-communities-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/where-we-build/where-communities.png",
      },
      {
        id: "w-where-2",
        position: 2,
        widget_key: "shared.venues",
        widgets_title: "Commercial Buildings & High-Traffic Venues Footprint",
        widgets_label: "Where Venues",
        category: "content",
        description:
          "Split layout on a mint-teal gradient pairing venue-hero.png photography (left-aligned on desktop) with indoor DAS/small cell copy and CTA linking to /private-venues.",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "image",
          "image_alignment",
          "background_color",
          "CTA_text",
          "CTA_url",
        ],
        preview_images: {
          desktop: "/images/where-we-build/where-venues/where-venues.png",
          tablet: "/images/where-we-build/where-venues/where-venues-tablet.png",
          mobile: "/images/where-we-build/where-venues/where-venues-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/where-we-build/where-venues.png",
      },
    ],
  },

  // ── 9. LEADERSHIP PAGE ───────────────────────────────────────────────────
  {
    id: "leadership",
    title: "Leadership Page",
    label: "Leadership",
    route: "/leadership",
    strapi_slug: "leadership",
    category: "Team",
    description:
      "Executive leadership roster utilizing the unified PeopleGlobalSection across 7 leaders with interactive MemberModal bio views and zero code duplication.",
    child_widgets: [
      {
        id: "w-lead-0",
        position: 0,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Executive Leadership Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Subpage hero with automatic breadcrumbs and purple gradient introducing Arium's executive leadership team.",
        key_props: [
          "tag",
          "title",
          "description",
          "CTA_text",
          "CTA_url",
          "background_gradient",
          "content_max_width",
        ],
        preview_images: {
          desktop: "/images/leadership/sub-page-hero/sub-page-hero.png",
          tablet: "/images/leadership/sub-page-hero/sub-page-hero-tablet.png",
          mobile: "/images/leadership/sub-page-hero/sub-page-hero-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/leadership/sub-page-hero.png",
      },
      {
        id: "w-lead-1",
        position: 1,
        widget_key: "shared.people-global-section",
        widgets_title:
          "Executive Management & Leadership Grid with Bio Drawers",
        widgets_label: "People Global Section",
        category: "people",
        description:
          "Canonical responsive team grid rendering 7 executive leaders with interactive MemberModal bio views.",
        key_props: ["members", "background_gradient"],
        preview_images: {
          desktop:
            "/images/leadership/people-global-section/people-global-section.png",
          tablet:
            "/images/leadership/people-global-section/people-global-section-tablet.png",
          mobile:
            "/images/leadership/people-global-section/people-global-section-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/leadership/people-global-section.png",
      },
      {
        id: "w-lead-2",
        position: 99,
        widget_key: "shared.global-cta",
        widgets_title: "Explore Careers Leadership Callout Banner",
        widgets_label: "Sub-Page CTA",
        category: "cta",
        description:
          "Shared CTA banner with rotated connection-globe.svg pointing prospective talent to /careers.",
        key_props: [
          "prompt_to_cta",
          "CTA_text",
          "CTA_url",
          "background_gradient",
          "globe_illustration",
        ],
        preview_images: {
          desktop: "/images/leadership/sub-page-cta/sub-page-cta.png",
          tablet: "/images/leadership/sub-page-cta/sub-page-cta-tablet.png",
          mobile: "/images/leadership/sub-page-cta/sub-page-cta-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/leadership/sub-page-cta.png",
      },
    ],
  },

  // ── 10. BOARD OF DIRECTORS PAGE ──────────────────────────────────────────
  {
    id: "board-of-directors",
    title: "Board of Directors",
    label: "Board of Directors",
    route: "/board-of-directors",
    strapi_slug: "board-of-directors",
    category: "Team",
    description:
      "Governance and board leadership roster reusing PeopleGlobalSection across 6 board members with interactive MemberModal bio views and a link to Leadership.",
    child_widgets: [
      {
        id: "w-board-0",
        position: 0,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Board Governance Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Subpage hero with automatic breadcrumbs and warm peach gradient introducing the Board of Directors.",
        key_props: [
          "tag",
          "title",
          "description",
          "CTA_text",
          "CTA_url",
          "background_gradient",
          "content_max_width",
        ],
        preview_images: {
          desktop: "/images/board-of-directors/sub-page-hero/sub-page-hero.png",
          tablet:
            "/images/board-of-directors/sub-page-hero/sub-page-hero-tablet.png",
          mobile:
            "/images/board-of-directors/sub-page-hero/sub-page-hero-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/board-of-directors/sub-page-hero.png",
      },
      {
        id: "w-board-1",
        position: 1,
        widget_key: "shared.people-global-section",
        widgets_title: "Board of Directors Governance Grid with Bio Drawers",
        widgets_label: "People Global Section",
        category: "people",
        description:
          "Shared canonical people section rendering 6 board members with interactive MemberModal bio views.",
        key_props: ["members", "background_gradient"],
        preview_images: {
          desktop:
            "/images/board-of-directors/people-global-section/people-global-section.png",
          tablet:
            "/images/board-of-directors/people-global-section/people-global-section-tablet.png",
          mobile:
            "/images/board-of-directors/people-global-section/people-global-section-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/board-of-directors/people-global-section.png",
      },
      {
        id: "w-board-2",
        position: 99,
        widget_key: "shared.global-cta",
        widgets_title: "Meet the Full Leadership Team CTA Banner",
        widgets_label: "Sub-Page CTA",
        category: "cta",
        description:
          "Shared CTA banner with rotated connection-globe.svg guiding visitors to the executive leadership page (/leadership).",
        key_props: [
          "prompt_to_cta",
          "CTA_text",
          "CTA_url",
          "background_gradient",
          "globe_illustration",
        ],
        preview_images: {
          desktop: "/images/board-of-directors/sub-page-cta/sub-page-cta.png",
          tablet:
            "/images/board-of-directors/sub-page-cta/sub-page-cta-tablet.png",
          mobile:
            "/images/board-of-directors/sub-page-cta/sub-page-cta-mobile.png",
        },
        strapi_image:
          "/images/strapi-widgets/board-of-directors/sub-page-cta.png",
      },
    ],
  },

  // ── 11. CONTACT PAGE ─────────────────────────────────────────────────────
  {
    id: "contact",
    title: "Contact Page",
    label: "Contact",
    route: "/contact",
    strapi_slug: "contact",
    category: "Corporate",
    description:
      "Interactive inquiry portal with 9 topic interest options, React Hook Form + Zod schema validation, and POST /api/contact email delivery via Resend API.",
    child_widgets: [
      {
        id: "w-contact-0",
        position: 1,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Contact Us Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Subpage hero introducing contact and partnership inquiry channels.",
        key_props: [
          "tag",
          "title",
          "description",
          "CTA_text",
          "CTA_url",
          "background_gradient",
          "content_max_width",
        ],
        preview_images: {
          desktop: "/images/contact/sub-page-hero/sub-page-hero.png",
          tablet: "/images/contact/sub-page-hero/sub-page-hero-tablet.png",
          mobile: "/images/contact/sub-page-hero/sub-page-hero-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/contact/sub-page-hero.png",
      },
      {
        id: "w-contact-1",
        position: 2,
        widget_key: "contact-form",
        widgets_title: "Multi-Topic Inquiry & Carrier Interest Form",
        widgets_label: "Contact Form",
        category: "form",
        description:
          "Interactive inquiry form powered by React Hook Form + Zod validation, 9 topic interest options, and POST /api/contact email delivery via Resend API.",
        key_props: ["topicOptions"],
        preview_images: {
          desktop: "/images/contact/contact-form/contact-form.png",
          tablet: "/images/contact/contact-form/contact-form-tablet.png",
          mobile: "/images/contact/contact-form/contact-form-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/contact/contact-form.png",
      },
    ],
  },

  // ── 12. DYNAMIC STRAPI PAGE ──────────────────────────────────────────────
  {
    id: "dynamic-slug",
    title: "Dynamic Strapi CMS Page",
    label: "Dynamic [slug]",
    route: "/[slug]",
    strapi_slug: "[slug]",
    category: "Dynamic",
    description:
      "Catch-all Next.js route demonstrating editorial freedom. Marketing teams can assemble custom pages from Strapi Dynamic Zones using combinePageSections() and WIDGET_REGISTRY via GlobalWidgetRenderer.",
    child_widgets: [
      {
        id: "w-dyn-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Dynamic Page Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Fallback dynamic page header populated from Strapi slug query (heroTitle, heroDescription, heroMedia) when no hero widget is supplied.",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
        ],
        preview_images: {
          desktop: "/images/dynamic-slug/hero-banner/hero-banner.png",
          tablet: "/images/dynamic-slug/hero-banner/hero-banner-tablet.png",
          mobile: "/images/dynamic-slug/hero-banner/hero-banner-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/dynamic-slug/hero-banner.png",
      },
      {
        id: "w-dyn-1",
        position: 99,
        widget_key: "shared.dynamic-zone",
        widgets_title: "Dynamic Zone Injected Widgets (WIDGET_REGISTRY)",
        widgets_label: "Dynamic Zone",
        category: "shared",
        description:
          "Modular dynamic blocks resolved through WIDGET_REGISTRY via GlobalWidgetRenderer, automatically grouping contiguous storyteller-flow and people-global-section items.",
        key_props: [
          "PositionNumber",
          "CustomCssClass",
          "Sections",
          "__component",
        ],
        preview_images: {
          desktop: "/images/dynamic-slug/dynamic-zone/dynamic-zone.png",
          tablet: "/images/dynamic-slug/dynamic-zone/dynamic-zone-tablet.png",
          mobile: "/images/dynamic-slug/dynamic-zone/dynamic-zone-mobile.png",
        },
        strapi_image: "/images/strapi-widgets/dynamic-slug/dynamic-zone.png",
      },
    ],
  },
];

// ── QUERY & FILTER HELPERS ────────────────────────────────────────────────

/** Retrieve page configuration by page id or route slug */
export function getPageWidgetsBySlug(
  slug: string,
): PageWithWidgets | undefined {
  const normalized = slug.replace(/^\//, "").toLowerCase();
  if (normalized === "" || normalized === "home") {
    return PAGE_WIDGETS.find((p) => p.id === "home");
  }
  return PAGE_WIDGETS.find(
    (p) =>
      p.id.toLowerCase() === normalized ||
      p.strapi_slug.toLowerCase() === normalized,
  );
}

/** Get list of all pages for dropdowns, tabs, or navigation */
export function getAllPages(): Array<{
  id: string;
  title: string;
  label: string;
  route: string;
}> {
  return PAGE_WIDGETS.map((page) => ({
    id: page.id,
    title: page.title,
    label: page.label,
    route: page.route,
  }));
}

/** Extract all child widgets flattened from a specific page */
export function getChildWidgetsByPage(pageId: string): ChildWidget[] {
  const page = getPageWidgetsBySlug(pageId);
  return page ? page.child_widgets : [];
}

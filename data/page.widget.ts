import { PageWithWidgets, ChildWidget } from "@/types/widget.types";

/**
 * 1. PAGES BY WIDGETS ARRAY
 * Contains complete page-by-page Strapi mapping and nested child widgets
 * audited directly against `arium-website-next` (`app/**\/page.tsx`,
 * `components/ui-widget/registry.ts`, `@ui-common`, `@ui-component`, and `@services/mappers`).
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
      "Flagship route (`app/page.tsx`) rendering `<Particles />` (`@ui-animations/Particles`) alongside 7 widgets via `combinePageSections()`: `<HomeHero />`, `<BackgroundFeatureSection />`, `<DetailedCardGrid />`, `<StatsWithImage />`, `<ImageGradientSplit />`, `<CenteredImageCTA />`, and `<CtaWithGraphic />`.",
    child_widgets: [
      {
        id: "w-home-0",
        position: 0,
        widget_key: "shared.main-hero",
        widgets_title: "Main Hero-Home — <HomeHero />",
        widgets_label: "Home Hero",
        component_name: "HomeHero",
        component_tag: "<HomeHero />",
        source_location: "@ui-component/home/HomeHero",
        renderer_name: "HomeHeroRenderer",
        fallback_key: "main-hero",
        category: "hero",
        description:
          "Full-bleed hero canvas rendering the main title, description, font_color, background_color, animated breathing SVG shapes (shape-teal.svg, shape-white.svg), and a scroll_text scroll indicator.",
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
        widgets_title: "Network Challenge — <BackgroundFeatureSection />",
        widgets_label: "Background Feature Section",
        component_name: "BackgroundFeatureSection",
        component_tag: "<BackgroundFeatureSection />",
        source_location: "@ui-component/home/BackgroundFeatureSection",
        renderer_name: "BackgroundFeatureRenderer",
        fallback_key: "background-feature-section",
        category: "feature",
        description:
          "Full-bleed background feature section pairing responsive background imagery (background_image_desktop, background_image_mobile) with title, description, optional styling/CTA props (title_color, description_color, CTA_text, CTA_url), and 3 feature_cards pillars (Design, Implement, Optimize).",
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
        widgets_title: "Our infrastructure - Home — <DetailedCardGrid />",
        widgets_label: "Detailed Card Grid",
        component_name: "DetailedCardGrid",
        component_tag: "<DetailedCardGrid />",
        source_location: "@ui-component/home/DetailedCardGrid",
        renderer_name: "DetailedCardGridRenderer",
        fallback_key: "detailed-card-grid",
        category: "content",
        description:
          "Interactive section displaying title, description, optional background_color, and 2 panel_cards (Small Cells, Distributed Antenna Systems) with animated svg_code line illustrations and CTA links.",
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
        widgets_title: "Scale and experience - Home — <StatsWithImage />",
        widgets_label: "Stats With Image",
        component_name: "StatsWithImage",
        component_tag: "<StatsWithImage />",
        source_location: "@ui-component/home/StatsWithImage",
        renderer_name: "StatsWithImageRenderer",
        fallback_key: "stats-with-image",
        category: "stats",
        description:
          "KPI metrics section combining title (with optional title_color), the stat_illustration US dot-map SVG, and 5 animated stats_card items (100K+ Small Cells, 300+ DAS Venues, 700+ Municipal Networks, 15+ Years, 24/7 NOC).",
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
        widgets_title: "How we work community-Home — <ImageGradientSplit />",
        widgets_label: "Image Gradient Split",
        component_name: "ImageGradientSplit",
        component_tag: "<ImageGradientSplit />",
        source_location: "@ui-common/ImageGradientSplit",
        renderer_name: "CommunityImpactRenderer",
        fallback_key: "image-gradient-split",
        category: "content",
        description:
          "Gradient-masked split section presenting title (styled via title_color), description (description_color), responsive imagery (background_image_desktop, background_image_mobile), 3 section_pointers (Reliability, Opportunity, Safety), and a CTA_text link (CTA_url).",
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
        widgets_title: "Image CTA - Home — <CenteredImageCTA />",
        widgets_label: "Centered Image CTA",
        component_name: "CenteredImageCTA",
        component_tag: "<CenteredImageCTA />",
        source_location: "@ui-common/CenteredImageCTA",
        renderer_name: "CenteredImageCTARenderer",
        fallback_key: "centered-image-cta",
        category: "cta",
        description:
          "Full-bleed centered callout over background_image with radial contrast overlay displaying title (optional title_color), description (styled via description_color), and CTA_text button linking to CTA_url (/careers).",
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
        widgets_title: "Home CTA — <CtaWithGraphic />",
        widgets_label: "CTA With Graphic",
        component_name: "CtaWithGraphic",
        component_tag: "<CtaWithGraphic />",
        source_location: "@ui-common/CtaWithGraphic",
        renderer_name: "CtaWithGraphicRenderer",
        fallback_key: "cta-with-graphic",
        category: "cta",
        description:
          "Closing conversion banner over background_color displaying title (optional title_color), description (with description_color), responsive circular illustrations (globe_illustration_desktop, globe_illustration_mobile), and a primary CTA_text link (CTA_url).",
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
      "Corporate storytelling route (`app/about/page.tsx`) combining `<HeroBanner />`, `<AboutContentWithSideGraphic />`, a contiguous `<FlowBackground />` Storyteller Flow wrapping `<AboutJourney />`, `<AboutStatsCards />`, and `<AboutCommitments />`, plus `<ImageGradientSplit />`.",
    child_widgets: [
      {
        id: "w-about-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "About Banner — <HeroBanner />",
        widgets_label: "Hero Banner",
        component_name: "HeroBanner",
        component_tag: "<HeroBanner />",
        source_location: "@ui-common/HeroBanner",
        renderer_name: "HeroBannerRenderer",
        fallback_key: "hero-banner",
        category: "hero",
        description:
          "Full-bleed subpage hero displaying title (constrained via max_width_title), description (max_width_description), dark gradient overlay, positioned background_image (background_image_position), and optional tag or CTA_text/CTA_url props.",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
          "tag",
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
        widgets_title: "Story about — <AboutContentWithSideGraphic />",
        widgets_label: "About Content With Side Graphic",
        component_name: "AboutContentWithSideGraphic",
        component_tag: "<AboutContentWithSideGraphic />",
        source_location: "@ui-component/about/AboutContentWithSideGraphic",
        renderer_name: "AboutStoryRenderer",
        fallback_key: "content-with-side-graphic",
        category: "content",
        description:
          "Narrative block on a soft purple background_color displaying title (styled via title_color) and description (optional description_color) alongside the right-aligned connection-illustration.svg image (and optional globe_illustration).",
        key_props: [
          "title",
          "title_color",
          "description",
          "description_color",
          "background_color",
          "globe_illustration",
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
        widgets_title: "Timeline about (Journey) — <AboutJourney />",
        widgets_label: "About Journey",
        component_name: "AboutJourney",
        component_tag: "<AboutJourney />",
        source_location: "@ui-component/about/AboutJourney",
        renderer_name: "AboutJourneyRenderer",
        fallback_key: "storyteller-flow",
        category: "flow",
        description:
          "Interactive Storyteller Flow timeline displaying title, description, and 4 chronological timeline_cards (2010-2026) with year_range, badge_text, and narrative details.",
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
        widgets_title: "Timeline about (Stats Cards) — <AboutStatsCards />",
        widgets_label: "About Stats Cards",
        component_name: "AboutStatsCards",
        component_tag: "<AboutStatsCards />",
        source_location: "@ui-component/about/AboutStatsCards",
        renderer_name: "AboutStatsCardsRenderer",
        fallback_key: "storyteller-flow",
        category: "flow",
        description:
          "Three-card industry demand grid displaying title (optional description) and 3 cards (39 B IoT devices, 21 GB monthly mobile data, 89 % North America 5G share by 2030) with stats, badge, and background_color props.",
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
        widgets_title: "Timeline about (Commitments) — <AboutCommitments />",
        widgets_label: "About Commitments",
        component_name: "AboutCommitments",
        component_tag: "<AboutCommitments />",
        source_location: "@ui-component/about/AboutCommitments",
        renderer_name: "AboutCommitmentsRenderer",
        fallback_key: "storyteller-flow",
        category: "flow",
        description:
          "Panoramic commitment section over background_image and background_overlay presenting title, description, commitment_statement, and 3 commitment_cards (customer-first, nimble to invest, long haul).",
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
        widgets_title: "About Pillars (We're Hiring) — <ImageGradientSplit />",
        widgets_label: "Image Gradient Split",
        component_name: "ImageGradientSplit",
        component_tag: "<ImageGradientSplit />",
        source_location: "@ui-common/ImageGradientSplit",
        renderer_name: "CommunityImpactRenderer",
        fallback_key: "image-gradient-split",
        category: "content",
        description:
          "Split promotional section pairing responsive imagery (background_image_desktop, background_image_mobile) with title (styled via title_color), description (description_color), 3 section_pointers (Leadership, Passion, Optimism), and a CTA_text/CTA_url Careers link.",
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
      "Recruitment and culture route (`app/careers/page.tsx`) composed of `<HeroBanner />`, `<CareersCultureAccordion />` (wrapping `<AccordionSplit />`), `<SharedTestimonials />`, `<CareersJobAreas />`, `<BenefitsGrid />`, and `<CareersEEO />`.",
    child_widgets: [
      {
        id: "w-car-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Careers Banner — <HeroBanner />",
        widgets_label: "Hero Banner",
        component_name: "HeroBanner",
        component_tag: "<HeroBanner />",
        source_location: "@ui-common/HeroBanner",
        renderer_name: "HeroBannerRenderer",
        fallback_key: "hero-banner",
        category: "hero",
        description:
          "Subpage hero showcasing team background_image (positioned via background_image_position), title (max_width_title), description (max_width_description), external Dayforce CTA_text/CTA_url link, and optional tag prop.",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
          "tag",
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
        widgets_title: "Why Join Arium Networks — <CareersCultureAccordion />",
        widgets_label: "Careers Culture Accordion",
        component_name: "CareersCultureAccordion",
        component_tag: "<CareersCultureAccordion />",
        source_location: "@ui-component/careers/CareersCultureAccordion",
        renderer_name: "AccordionSplitRenderer",
        fallback_key: "accordion-split",
        category: "content",
        description:
          "Split layout on a purple background_color arranged via template_grid_columns, pairing title (title_color) and description (description_color) with 5 expandable culture accordian_cards (with hover styling and svg_code icons).",
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
        widgets_title: "Meet the team — <SharedTestimonials />",
        widgets_label: "Shared Testimonials",
        component_name: "SharedTestimonials",
        component_tag: "<SharedTestimonials />",
        source_location: "@ui-common/SharedTestimonials",
        renderer_name: "GlobalTestimonialsRenderer",
        fallback_key: "gloabl-testimonails",
        category: "testimonials",
        description:
          "Four-card employee testimonial grid presenting section title alongside 4 cards containing person_name, person_designation, person_message, and card_footer_bg.",
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
        widgets_title: "Job areas - Careers — <CareersJobAreas />",
        widgets_label: "Careers Job Areas",
        component_name: "CareersJobAreas",
        component_tag: "<CareersJobAreas />",
        source_location: "@ui-component/careers/CareersJobAreas",
        renderer_name: "CareersJobAreasRenderer",
        fallback_key: "highlight-list",
        category: "content",
        description:
          "Two-column highlight section displaying title, description, 5 core career items (Network Engineering through Commercial Strategy), office team image, and Dayforce CTA_text/CTA_url link.",
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
        widgets_title: "Benefits-careers — <BenefitsGrid />",
        widgets_label: "Benefits Grid",
        component_name: "BenefitsGrid",
        component_tag: "<BenefitsGrid />",
        source_location: "@ui-common/BenefitsGrid",
        renderer_name: "BenefitsGridRenderer",
        fallback_key: "benefits",
        category: "feature",
        description:
          "Modular 4-column benefits grid displaying title, description, 4 cards (normalized from benefits_card: Healthcare, Financial Security, Time Off, Family Support), and bottom_message for EEO copy.",
        key_props: [
          "title",
          "description",
          "benefits_card",
          "cards",
          "bottom_message",
        ],
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
        widgets_title: "EEO Statement — <CareersEEO />",
        widgets_label: "Careers EEO",
        component_name: "CareersEEO",
        component_tag: "<CareersEEO />",
        source_location: "@ui-component/careers/CareersEEO",
        renderer_name: "BenefitsGridRenderer",
        fallback_key: "eeo",
        category: "content",
        description:
          "Equal employment opportunity disclaimer block rendering bottom_message (with optional statementText and contentHtml overrides) at the bottom of Careers.",
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
      "Municipal stakeholder route (`app/community/page.tsx`) composed of `<HeroBanner />`, `<IllustrationSplit />`, `<BenefitsGrid />`, `<CommunityHowWeWork />`, `<SharedTestimonials />`, and `<CommunityFAQ />`.",
    child_widgets: [
      {
        id: "w-com-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Community Banner — <HeroBanner />",
        widgets_label: "Hero Banner",
        component_name: "HeroBanner",
        component_tag: "<HeroBanner />",
        source_location: "@ui-common/HeroBanner",
        renderer_name: "HeroBannerRenderer",
        fallback_key: "hero-banner",
        category: "hero",
        description:
          "Community subpage hero rendering municipality-focused title (max_width_title), description (max_width_description), and full-bleed background_image (via background_image_position, with optional tag and CTA_text/CTA_url props).",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
          "tag",
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
        widgets_title: "Small cell community — <IllustrationSplit />",
        widgets_label: "Illustration Split",
        component_name: "IllustrationSplit",
        component_tag: "<IllustrationSplit />",
        source_location: "@ui-common/IllustrationSplit",
        renderer_name: "IllustrationSplitRenderer",
        fallback_key: "illustration-split",
        category: "content",
        description:
          "Illustration split over background pairing title (title_color), description (description_color), and an alignment-controlled illustration_image (small-cells-illustration.svg via illustration_image_alignment), plus optional statistics and show_bottom_divider.",
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
        widgets_title: "Small cell matters community — <BenefitsGrid />",
        widgets_label: "Benefits Grid (Image Cards)",
        component_name: "BenefitsGrid",
        component_tag: "<BenefitsGrid />",
        source_location: "@ui-common/BenefitsGrid",
        renderer_name: "BenefitsGridRenderer",
        fallback_key: "image-card-grid",
        category: "feature",
        description:
          "Three-column dark-themed particle-backed card grid displaying title (optional title_color) and 3 cards (mapped from icon_card: Reliability, Innovation, Safety) with image, description, and color props.",
        key_props: ["title", "title_color", "icon_card", "cards"],
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
        widget_key: "shared.how-we-work",
        widgets_title: "How we work community — <CommunityHowWeWork />",
        widgets_label: "Community How We Work",
        component_name: "CommunityHowWeWork",
        component_tag: "<CommunityHowWeWork />",
        source_location: "@ui-component/community/CommunityHowWeWork",
        renderer_name: "CommunityHowWeWorkRenderer",
        fallback_key: "background-feature-section",
        category: "feature",
        description:
          "Full-bleed feature section over background_image_desktop (with optional background_image_mobile) showcasing title (title_color), description (description_color), and a CTA_text button linking to CTA_url (Right of Ways).",
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
        widgets_title: "Community Support — <SharedTestimonials />",
        widgets_label: "Shared Testimonials",
        component_name: "SharedTestimonials",
        component_tag: "<SharedTestimonials />",
        source_location: "@ui-common/SharedTestimonials",
        renderer_name: "GlobalTestimonialsRenderer",
        fallback_key: "gloabl-testimonails",
        category: "testimonials",
        description:
          "Three-column community testimonial grid rendering section title and 3 cards (civic, sustainability, real estate) with person_name, person_designation, person_message, and card_footer_bg.",
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
        widgets_title: "FAQ Community — <CommunityFAQ />",
        widgets_label: "Community FAQ",
        component_name: "CommunityFAQ",
        component_tag: "<CommunityFAQ />",
        source_location: "@ui-component/community/CommunityFAQ",
        renderer_name: "CommunityFAQRenderer",
        fallback_key: "faq",
        category: "content",
        description:
          "Interactive FAQ accordion on a radial FlowBackground displaying title (optional title_color) and 6 faq_data question/answer items on neighborhood deployments, CLEC rights, approvals, and FCC RF limits.",
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
      "Technical solutions route (`app/solutions/page.tsx`) rendering `<HeroBanner />`, `<FlowBackground />` wrapping dual `<IllustrationSplit />` instances (Small Cells & DAS), `<SolutionsIndustries />`, and `<CtaWithGraphic />`.",
    child_widgets: [
      {
        id: "w-sol-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Solutions Banner — <HeroBanner />",
        widgets_label: "Hero Banner",
        component_name: "HeroBanner",
        component_tag: "<HeroBanner />",
        source_location: "@ui-common/HeroBanner",
        renderer_name: "HeroBannerRenderer",
        fallback_key: "hero-banner",
        category: "hero",
        description:
          "Solutions hero banner displaying title (max_width_title), description (max_width_description), positioned background_image (background_image_position), optional tag, and Contact Us CTA_text/CTA_url button.",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
          "tag",
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
        widget_key: "shared.illustration-split",
        widgets_title: "Small Cells — <IllustrationSplit />",
        widgets_label: "Illustration Split (Small Cells)",
        component_name: "IllustrationSplit",
        component_tag: "<IllustrationSplit />",
        source_location: "@ui-common/IllustrationSplit",
        renderer_name: "SolutionsSmallCellsRenderer",
        fallback_key: "small-cells",
        category: "flow",
        description:
          "Illustration split displaying title (title_color), description (description_color), right-aligned illustration_image (small-cells-illustration.svg via illustration_image_alignment), 2 KPI statistics (100K+, 700+), optional background, and show_bottom_divider.",
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
        position: 2,
        widget_key: "shared.illustration-split",
        widgets_title: "Distributed Antenna Systems — <IllustrationSplit />",
        widgets_label: "Illustration Split (DAS)",
        component_name: "IllustrationSplit",
        component_tag: "<IllustrationSplit />",
        source_location: "@ui-common/IllustrationSplit",
        renderer_name: "SolutionsDasRenderer",
        fallback_key: "das",
        category: "flow",
        description:
          "Illustration split displaying title (title_color), description (description_color), left-aligned illustration_image (das-illustration.svg via illustration_image_alignment), KPI statistics (300+ venues), optional background, and show_bottom_divider.",
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
        widgets_title: "Industries — <SolutionsIndustries />",
        widgets_label: "Solutions Industries",
        component_name: "SolutionsIndustries",
        component_tag: "<SolutionsIndustries />",
        source_location: "@ui-component/solutions/SolutionsIndustries",
        renderer_name: "SolutionsIndustriesRenderer",
        fallback_key: "accordion-split",
        category: "content",
        description:
          "Interactive vertical accordion arranged with template_grid_columns (optional background_color) displaying title (title_color), description (description_color), and 7 auto-rotating accordian_cards (Stadiums through Airports) with background photography and svg_code icons.",
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
        widgets_title: "A Balanced Approach — <CtaWithGraphic />",
        widgets_label: "CTA With Graphic",
        component_name: "CtaWithGraphic",
        component_tag: "<CtaWithGraphic />",
        source_location: "@ui-common/CtaWithGraphic",
        renderer_name: "CtaWithGraphicRenderer",
        fallback_key: "cta-with-graphic",
        category: "cta",
        description:
          "Closing conversion banner on background_color displaying title (title_color), description (description_color), responsive orbital vectors (globe_illustration_desktop, globe_illustration_mobile), and CTA_text/CTA_url link to Where We Build.",
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
      "In-building enterprise venues route (`app/private-venues/page.tsx`) built strictly from 4 shared `@ui-common` components: `<SubPageHeroBanner />`, `<ProcessSection />`, `<SharedTestimonials />`, and `<SubPageCTA />`.",
    child_widgets: [
      {
        id: "w-pv-0",
        position: 0,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Private ventures hero — <SubPageHeroBanner />",
        widgets_label: "Sub Page Hero Banner",
        component_name: "SubPageHeroBanner",
        component_tag: "<SubPageHeroBanner />",
        source_location: "@ui-common/SubPageHeroBanner",
        renderer_name: "SubPageHeroRenderer",
        fallback_key: "sub-page-hero",
        category: "hero",
        description:
          "Compact subpage hero over purple background_gradient displaying automatic breadcrumbs, content_max_width layout for title and description (plus optional tag), and a Contact Us CTA_text/CTA_url button.",
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
        widgets_title: "Process section Private venues — <ProcessSection />",
        widgets_label: "Process Section",
        component_name: "ProcessSection",
        component_tag: "<ProcessSection />",
        source_location: "@ui-common/ProcessSection",
        renderer_name: "ProcessRenderer",
        fallback_key: "process",
        category: "content",
        description:
          "Three-stage delivery process section rendering title (with optional maxWidthTitle), description, optional background_color, and 3 pillars (Design, Construction, Optimization; mapped from process_stage) with stage_icon_svg graphics.",
        key_props: [
          "title",
          "description",
          "background_color",
          "process_stage",
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
        widgets_title: "Feedback Private ventures — <SharedTestimonials />",
        widgets_label: "Shared Testimonials",
        component_name: "SharedTestimonials",
        component_tag: "<SharedTestimonials />",
        source_location: "@ui-common/SharedTestimonials",
        renderer_name: "GlobalTestimonialsRenderer",
        fallback_key: "gloabl-testimonails",
        category: "testimonials",
        description:
          "Two-column wide testimonial grid displaying section title and 2 commercial real estate and sports arena cards (with person_name, person_designation, person_message, card_footer_bg).",
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
        widgets_title: "Private Ventures CTA — <SubPageCTA />",
        widgets_label: "Sub Page CTA",
        component_name: "SubPageCTA",
        component_tag: "<SubPageCTA />",
        source_location: "@ui-common/SubPageCTA",
        renderer_name: "SubPageCTARenderer",
        fallback_key: "global-cta",
        category: "cta",
        description:
          "Shared CTA banner over background_gradient displaying prompt_to_cta, CTA_text/CTA_url link to the venues team, and a rotated connection-globe.svg globe_illustration.",
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
      "Public right-of-way deployment route (`app/right-of-ways/page.tsx`) built strictly from 4 shared `@ui-common` components: `<SubPageHeroBanner />`, `<ProcessSection />`, `<SharedTestimonials />`, and `<SubPageCTA />`.",
    child_widgets: [
      {
        id: "w-row-0",
        position: 1,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Right Of way banner — <SubPageHeroBanner />",
        widgets_label: "Sub Page Hero Banner",
        component_name: "SubPageHeroBanner",
        component_tag: "<SubPageHeroBanner />",
        source_location: "@ui-common/SubPageHeroBanner",
        renderer_name: "SubPageHeroRenderer",
        fallback_key: "sub-page-hero",
        category: "hero",
        description:
          "Compact subpage hero over warm peach background_gradient rendering breadcrumbs, title, description (optional tag and content_max_width), and Contact Us CTA_text/CTA_url for municipal partnerships.",
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
        widgets_title: "Structured Process ROW — <ProcessSection />",
        widgets_label: "Process Section",
        component_name: "ProcessSection",
        component_tag: "<ProcessSection />",
        source_location: "@ui-common/ProcessSection",
        renderer_name: "ProcessRenderer",
        fallback_key: "process",
        category: "content",
        description:
          "Three-stage municipal process section displaying title (optional maxWidthTitle), description, optional background_color, and 3 pillars (Assessment, Planning, Construction; mapped from process_stage) with stage_icon_svg icons.",
        key_props: [
          "title",
          "description",
          "background_color",
          "process_stage",
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
        widgets_title: "Feedback ROW — <SharedTestimonials />",
        widgets_label: "Shared Testimonials",
        component_name: "SharedTestimonials",
        component_tag: "<SharedTestimonials />",
        source_location: "@ui-common/SharedTestimonials",
        renderer_name: "GlobalTestimonialsRenderer",
        fallback_key: "gloabl-testimonails",
        category: "testimonials",
        description:
          "Two-column wide testimonial grid displaying section title and 2 carrier leader cards (AT&T, Verizon) with person_name, person_designation, person_message, and card_footer_bg.",
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
        widgets_title: "Right of way CTA — <SubPageCTA />",
        widgets_label: "Sub Page CTA",
        component_name: "SubPageCTA",
        component_tag: "<SubPageCTA />",
        source_location: "@ui-common/SubPageCTA",
        renderer_name: "SubPageCTARenderer",
        fallback_key: "global-cta",
        category: "cta",
        description:
          "Shared CTA banner rendering prompt_to_cta, CTA_text/CTA_url municipal contact link, rotated globe_illustration (connection-globe.svg), and optional background_gradient.",
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
      "Deployment environments overview (`app/where-we-build/page.tsx`) pairing `<HeroBanner />` with `<WhereCommunities />` (linking to `/right-of-ways`) and `<WhereVenues />` (linking to `/private-venues`).",
    child_widgets: [
      {
        id: "w-where-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Where we build banner — <HeroBanner />",
        widgets_label: "Hero Banner",
        component_name: "HeroBanner",
        component_tag: "<HeroBanner />",
        source_location: "@ui-common/HeroBanner",
        renderer_name: "HeroBannerRenderer",
        fallback_key: "hero-banner",
        category: "hero",
        description:
          "Full-bleed Where We Build hero rendering title (max_width_title), description (max_width_description), positioned background_image (background_image_position), and CTA_text/CTA_url link (with optional tag).",
        key_props: [
          "title",
          "description",
          "background_image",
          "background_image_position",
          "CTA_text",
          "CTA_url",
          "max_width_title",
          "max_width_description",
          "tag",
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
        widget_key: "shared.image-split",
        widgets_title: "Where we build - Communities — <WhereCommunities />",
        widgets_label: "Where Communities",
        component_name: "WhereCommunities",
        component_tag: "<WhereCommunities />",
        source_location: "@ui-component/where-we-build/WhereCommunities",
        renderer_name: "WhereCommunitiesRenderer",
        fallback_key: "communities",
        category: "content",
        description:
          "Split layout on warm peach background_color displaying title (title_color), description (description_color), image aligned via image_alignment (Right), and Learn more CTA_text/CTA_url link to /right-of-ways.",
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
        widget_key: "shared.image-split",
        widgets_title: "Building and Venues - Where we build — <WhereVenues />",
        widgets_label: "Where Venues",
        component_name: "WhereVenues",
        component_tag: "<WhereVenues />",
        source_location: "@ui-component/where-we-build/WhereVenues",
        renderer_name: "WhereVenuesRenderer",
        fallback_key: "venues",
        category: "content",
        description:
          "Split layout on mint-teal background_color displaying title (title_color), description (description_color), desktop left-aligned image via image_alignment (Left), and CTA_text/CTA_url link to /private-venues.",
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
      "Executive leadership route (`app/leadership/page.tsx`) powered by shared `<SubPageHeroBanner />`, `<PeopleGlobalSection />` with interactive `<MemberModal />` bio drawers, and `<SubPageCTA />`.",
    child_widgets: [
      {
        id: "w-lead-0",
        position: 0,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Our Leadership Hero — <SubPageHeroBanner />",
        widgets_label: "Sub Page Hero Banner",
        component_name: "SubPageHeroBanner",
        component_tag: "<SubPageHeroBanner />",
        source_location: "@ui-common/SubPageHeroBanner",
        renderer_name: "SubPageHeroRenderer",
        fallback_key: "sub-page-hero",
        category: "hero",
        description:
          "Subpage hero over purple background_gradient rendering automatic breadcrumbs, content_max_width layout with executive leadership title and description, plus optional tag and CTA_text/CTA_url.",
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
        widgets_title: "Leaders Section — <PeopleGlobalSection />",
        widgets_label: "People Global Section",
        component_name: "PeopleGlobalSection",
        component_tag: "<PeopleGlobalSection />",
        source_location: "@ui-common/PeopleGlobalSection",
        renderer_name: "PeopleGlobalRenderer",
        fallback_key: "people-global-section",
        category: "people",
        description:
          "Responsive team grid over background_gradient rendering executive members cards (name, designation, description, image) with interactive MemberModal bio views styled by modal_upper_section_background.",
        key_props: [
          "members",
          "background_gradient",
          "name",
          "designation",
          "description",
          "image",
          "modal_upper_section_background",
        ],
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
        widgets_title: "CTA Leadership — <SubPageCTA />",
        widgets_label: "Sub Page CTA",
        component_name: "SubPageCTA",
        component_tag: "<SubPageCTA />",
        source_location: "@ui-common/SubPageCTA",
        renderer_name: "SubPageCTARenderer",
        fallback_key: "global-cta",
        category: "cta",
        description:
          "Shared CTA banner over background_gradient displaying prompt_to_cta, CTA_text/CTA_url linking talent to /careers, and a rotated connection-globe.svg globe_illustration.",
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
      "Board governance route (`app/board-of-directors/page.tsx`) reusing shared `<SubPageHeroBanner />`, `<PeopleGlobalSection />` with `<MemberModal />` bio drawers across 6 board directors, and `<SubPageCTA />`.",
    child_widgets: [
      {
        id: "w-board-0",
        position: 0,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Board of Directors Hero — <SubPageHeroBanner />",
        widgets_label: "Sub Page Hero Banner",
        component_name: "SubPageHeroBanner",
        component_tag: "<SubPageHeroBanner />",
        source_location: "@ui-common/SubPageHeroBanner",
        renderer_name: "SubPageHeroRenderer",
        fallback_key: "sub-page-hero",
        category: "hero",
        description:
          "Subpage hero over warm peach background_gradient rendering automatic breadcrumbs, content_max_width layout with Board of Directors title and description, plus optional tag and CTA_text/CTA_url.",
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
        widgets_title: "Directors Section — <PeopleGlobalSection />",
        widgets_label: "People Global Section",
        component_name: "PeopleGlobalSection",
        component_tag: "<PeopleGlobalSection />",
        source_location: "@ui-common/PeopleGlobalSection",
        renderer_name: "PeopleGlobalRenderer",
        fallback_key: "people-global-section",
        category: "people",
        description:
          "Responsive board grid over background_gradient rendering director members cards (name, designation, description, image) with interactive MemberModal bio views styled by modal_upper_section_background.",
        key_props: [
          "members",
          "background_gradient",
          "name",
          "designation",
          "description",
          "image",
          "modal_upper_section_background",
        ],
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
        widgets_title: "CTA Board of Directors — <SubPageCTA />",
        widgets_label: "Sub Page CTA",
        component_name: "SubPageCTA",
        component_tag: "<SubPageCTA />",
        source_location: "@ui-common/SubPageCTA",
        renderer_name: "SubPageCTARenderer",
        fallback_key: "global-cta",
        category: "cta",
        description:
          "Shared CTA banner over background_gradient displaying prompt_to_cta, CTA_text/CTA_url guiding visitors to /leadership, and a rotated connection-globe.svg globe_illustration.",
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
      "Inquiry portal route (`app/contact/page.tsx`) composed of `<SubPageHeroBanner />` (`@ui-common/SubPageHeroBanner`) and `<ContactForm />` (`@ui-component/contact/ContactForm` with `<ContactInterestSelect />` and `<ContactFormField />`).",
    child_widgets: [
      {
        id: "w-contact-0",
        position: 1,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Contact Us Hero — <SubPageHeroBanner />",
        widgets_label: "Sub Page Hero Banner",
        component_name: "SubPageHeroBanner",
        component_tag: "<SubPageHeroBanner />",
        source_location: "@ui-common/SubPageHeroBanner",
        renderer_name: "SubPageHeroRenderer",
        fallback_key: "sub-page-hero",
        category: "hero",
        description:
          "Subpage hero over background_gradient introducing contact channels via title and description (with optional tag, content_max_width, CTA_text, and CTA_url props).",
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

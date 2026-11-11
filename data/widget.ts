import { FlatWidget, WidgetCategory } from "@/types/widget.types";

/**
 * 2. MASTER FLAT WIDGETS LIST
 * Follows the page sequence (Home -> About -> Careers -> Community -> Solutions ->
 * Private Venues -> Right of Ways -> Where We Build -> Leadership -> Board -> Contact -> Dynamic).
 * Strictly flat array without nested children.
 */
export const WIDGETS_LIST: FlatWidget[] = [
  // ── HOME PAGE WIDGETS ───────────────────────────────────────────────────
  {
    id: "widget-home-hero",
    page_id: "home",
    position: 0,
    widget_key: "shared.main-hero",
    widgets_title: "Home Main Hero Banner",
    widgets_label: "Hero Banner",
    component_name: "HomeHero",
    component_tag: "<HomeHero />",
    source_location: "@ui-component/home/HomeHero",
    category: "hero",
    description:
      "Full-bleed canvas hero displaying the primary value proposition, background video or image, and dual CTAs.",
    fallback_key: "main-hero",
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
    used_in_pages: ["home"],
  },
  {
    id: "widget-home-what-we-do",
    page_id: "home",
    position: 1,
    widget_key: "shared.background-feature-section",
    widgets_title: "Network Challenges & Solutions Overview",
    widgets_label: "Background Feature",
    component_name: "BackgroundFeatureSection",
    component_tag: "<BackgroundFeatureSection />",
    source_location: "@ui-component/home/BackgroundFeatureSection",
    category: "feature",
    description:
      "Section framing telecom bandwidth challenges with high-contrast text and glowing infrastructure background graphics.",
    fallback_key: "background-feature-section",
    key_props: ["title", "description", "cards", "cta_text", "cta_url"],
    preview_images: {
      desktop: "/images/home/background-feature/background-feature.png",
      tablet: "/images/home/background-feature/background-feature-tablet.png",
      mobile: "/images/home/background-feature/background-feature-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/home/background-feature.png",
    used_in_pages: ["home", "community"],
  },
  {
    id: "widget-home-card-grid",
    page_id: "home",
    position: 2,
    widget_key: "shared.detailed-card-grid",
    widgets_title: "3-Pillar Infrastructure Architecture Grid",
    widgets_label: "Detailed Card Grid",
    component_name: "DetailedCardGrid",
    component_tag: "<DetailedCardGrid />",
    source_location: "@ui-component/home/DetailedCardGrid",
    category: "content",
    description:
      "Tri-card interactive layout detailing Design, Deployment, and Operations services with custom hover elevation.",
    fallback_key: "detailed-card-grid",
    key_props: ["title", "description", "cards", "columns"],
    preview_images: {
      desktop: "/images/home/detailed-card-grid/detailed-card-grid.png",
      tablet: "/images/home/detailed-card-grid/detailed-card-grid-tablet.png",
      mobile: "/images/home/detailed-card-grid/detailed-card-grid-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/home/detailed-card-grid.png",
    used_in_pages: ["home"],
  },
  {
    id: "widget-home-stats",
    page_id: "home",
    position: 3,
    widget_key: "shared.stats-with-image",
    widgets_title: "Scale & Experience Deployment Metrics",
    widgets_label: "Stats With Image",
    component_name: "StatsWithImage",
    component_tag: "<StatsWithImage />",
    source_location: "@ui-component/home/StatsWithImage",
    category: "stats",
    description:
      "Key performance indicators (50K+ Nodes, 99.999% Uptime) alongside high-resolution field photography.",
    fallback_key: "stats-with-image",
    key_props: ["title", "description", "stats", "image"],
    preview_images: {
      desktop: "/images/home/stats-with-image/stats-with-image.png",
      tablet: "/images/home/stats-with-image/stats-with-image-tablet.png",
      mobile: "/images/home/stats-with-image/stats-with-image-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/home/stats-with-image.png",
    used_in_pages: ["home"],
  },
  {
    id: "widget-home-community-split",
    page_id: "home",
    position: 4,
    widget_key: "shared.image-gradient-split",
    widgets_title: "Community Partnership Impact Split",
    widgets_label: "Image Gradient Split",
    component_name: "ImageGradientSplit",
    component_tag: "<ImageGradientSplit />",
    source_location: "@ui-common/ImageGradientSplit",
    category: "content",
    description:
      "Editorial 50/50 block balancing community aesthetic considerations with wireless capacity enhancements.",
    fallback_key: "image-gradient-split",
    key_props: ["title", "description", "image", "cta_text", "cta_url"],
    preview_images: {
      desktop: "/images/home/image-gradient-split/image-gradient-split.png",
      tablet:
        "/images/home/image-gradient-split/image-gradient-split-tablet.png",
      mobile:
        "/images/home/image-gradient-split/image-gradient-split-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/home/image-gradient-split.png",
    used_in_pages: ["home", "about"],
  },
  {
    id: "widget-home-careers-cta",
    page_id: "home",
    position: 5,
    widget_key: "shared.centered-image-cta",
    widgets_title: "High-Contrast Hiring Callout",
    widgets_label: "Centered Image CTA",
    component_name: "CenteredImageCTA",
    component_tag: "<CenteredImageCTA />",
    source_location: "@ui-common/CenteredImageCTA",
    category: "cta",
    description:
      "Centered callout card targeting prospective telecom professionals with background imagery and direct apply link.",
    fallback_key: "centered-image-cta",
    key_props: [
      "title",
      "description",
      "button_text",
      "button_url",
      "background_image",
    ],
    preview_images: {
      desktop: "/images/home/centered-image-cta/centered-image-cta.png",
      tablet: "/images/home/centered-image-cta/centered-image-cta-tablet.png",
      mobile: "/images/home/centered-image-cta/centered-image-cta-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/home/centered-image-cta.png",
    used_in_pages: ["home"],
  },
  {
    id: "widget-home-contact-cta",
    page_id: "home",
    position: 6,
    widget_key: "shared.cta-with-graphic",
    widgets_title: "Closing Brand CTA with Circular Graphic Loop",
    widgets_label: "CTA With Graphic",
    component_name: "CtaWithGraphic",
    component_tag: "<CtaWithGraphic />",
    source_location: "@ui-common/CtaWithGraphic",
    category: "cta",
    description:
      "Signature conversion unit incorporating Arium's circular orbital vector graphics, badge, and dual CTAs.",
    fallback_key: "cta-with-graphic",
    key_props: [
      "title",
      "description",
      "button_text",
      "button_link",
      "secondary_button_text",
    ],
    preview_images: {
      desktop: "/images/home/cta-with-graphic/cta-with-graphic.png",
      tablet: "/images/home/cta-with-graphic/cta-with-graphic-tablet.png",
      mobile: "/images/home/cta-with-graphic/cta-with-graphic-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/home/cta-with-graphic.png",
    used_in_pages: ["home", "solutions"],
  },

  // ── ABOUT PAGE WIDGETS ───────────────────────────────────────────────────
  {
    id: "widget-about-hero",
    page_id: "about",
    position: 0,
    widget_key: "shared.hero-banner",
    widgets_title: "About Brand Hero Banner",
    widgets_label: "Hero Banner",
    component_name: "HeroBanner",
    component_tag: "<HeroBanner />",
    source_location: "@ui-common/HeroBanner",
    category: "hero",
    description:
      "Full-bleed subpage hero with responsive typography, dark gradient overlay, and optional CTA button.",
    fallback_key: "hero-banner",
    key_props: [
      "title",
      "description",
      "background_image",
      "CTA_text",
      "CTA_url",
    ],
    preview_images: {
      desktop: "/images/about/hero-banner/hero-banner.png",
      tablet: "/images/about/hero-banner/hero-banner-tablet.png",
      mobile: "/images/about/hero-banner/hero-banner-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/about/hero-banner.png",
    used_in_pages: [
      "about",
      "careers",
      "community",
      "solutions",
      "where-we-build",
      "[slug]",
    ],
  },
  {
    id: "widget-about-story",
    page_id: "about",
    position: 1,
    widget_key: "shared.content-with-side-graphic",
    widgets_title: "Our Story with Vector Wireframe Torus Graphic",
    widgets_label: "Content With Side Graphic",
    component_name: "AboutContentWithSideGraphic",
    component_tag: "<AboutContentWithSideGraphic />",
    source_location: "@ui-component/about/AboutContentWithSideGraphic",
    category: "content",
    description:
      "Two-column narrative block displaying corporate history alongside vector technical graphics.",
    fallback_key: "content-with-side-graphic",
    key_props: ["title", "subtitle", "content", "graphic_type", "image"],
    preview_images: {
      desktop:
        "/images/about/content-with-side-graphic/content-with-side-graphic.png",
      tablet:
        "/images/about/content-with-side-graphic/content-with-side-graphic-tablet.png",
      mobile:
        "/images/about/content-with-side-graphic/content-with-side-graphic-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/about/content-with-side-graphic.png",
    used_in_pages: ["about"],
  },
  {
    id: "widget-about-timeline",
    page_id: "about",
    position: 2,
    widget_key: "shared.timeline",
    widgets_title: "Chronological Milestones Journey",
    widgets_label: "Journey Timeline",
    component_name: "AboutJourney",
    component_tag: "<AboutJourney />",
    source_location: "@ui-component/about/AboutJourney",
    category: "flow",
    description:
      "Interactive chronological timeline showcasing key milestones, carrier deployments, and company growth.",
    fallback_key: "storyteller-flow",
    key_props: ["heading", "subheading", "milestones"],
    preview_images: {
      desktop: "/images/about/journey-timeline/journey-timeline.png",
      tablet: "/images/about/journey-timeline/journey-timeline-tablet.png",
      mobile: "/images/about/journey-timeline/journey-timeline-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/about/journey-timeline.png",
    used_in_pages: ["about"],
  },
  {
    id: "widget-about-stats",
    page_id: "about",
    position: 2,
    widget_key: "shared.stats-cards",
    widgets_title: "Why Our Infrastructure Trust Stats Cards",
    widgets_label: "Stats Cards",
    component_name: "AboutStatsCards",
    component_tag: "<AboutStatsCards />",
    source_location: "@ui-component/about/AboutStatsCards",
    category: "flow",
    description:
      "Grid of 4 trust metrics highlighting carrier compliance, uptime standards, and safety certifications.",
    fallback_key: "storyteller-flow",
    key_props: ["title", "description", "cards"],
    preview_images: {
      desktop: "/images/about/stats-cards/stats-cards.png",
      tablet: "/images/about/stats-cards/stats-cards-tablet.png",
      mobile: "/images/about/stats-cards/stats-cards-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/about/stats-cards.png",
    used_in_pages: ["about"],
  },
  {
    id: "widget-about-commitments",
    page_id: "about",
    position: 2,
    widget_key: "shared.commitments",
    widgets_title: "Values & Standards Commitments",
    widgets_label: "Commitments",
    component_name: "AboutCommitments",
    component_tag: "<AboutCommitments />",
    source_location: "@ui-component/about/AboutCommitments",
    category: "flow",
    description:
      "Four core corporate commitments: Community Trust, Aesthetic Harmony, Environmental Responsibility, Safety.",
    fallback_key: "storyteller-flow",
    key_props: ["heading", "description", "commitments_list"],
    preview_images: {
      desktop: "/images/about/commitments/commitments.png",
      tablet: "/images/about/commitments/commitments-tablet.png",
      mobile: "/images/about/commitments/commitments-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/about/commitments.png",
    used_in_pages: ["about"],
  },
  {
    id: "widget-about-hiring-split",
    page_id: "about",
    position: 3,
    widget_key: "shared.image-gradient-split",
    widgets_title: "We're Hiring Culture Split",
    widgets_label: "Image Gradient Split",
    component_name: "ImageGradientSplit",
    component_tag: "<ImageGradientSplit />",
    source_location: "@ui-common/ImageGradientSplit",
    category: "content",
    description:
      "Split promotional section highlighting workplace culture, engineering values, and career entryways.",
    fallback_key: "image-gradient-split",
    key_props: ["title", "description", "image", "cta_text", "cta_url"],
    preview_images: {
      desktop: "/images/about/image-gradient-split/image-gradient-split.png",
      tablet:
        "/images/about/image-gradient-split/image-gradient-split-tablet.png",
      mobile:
        "/images/about/image-gradient-split/image-gradient-split-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/about/image-gradient-split.png",
    used_in_pages: ["about", "home"],
  },

  // ── CAREERS PAGE WIDGETS ─────────────────────────────────────────────────
  {
    id: "widget-careers-hero",
    page_id: "careers",
    position: 0,
    widget_key: "shared.hero-banner",
    widgets_title: "Careers Value Proposition Hero Banner",
    widgets_label: "Hero Banner",
    component_name: "HeroBanner",
    component_tag: "<HeroBanner />",
    source_location: "@ui-common/HeroBanner",
    category: "hero",
    description:
      "Subpage hero showcasing team energy and careers value proposition.",
    fallback_key: "hero-banner",
    key_props: [
      "title",
      "description",
      "background_image",
      "CTA_text",
      "CTA_url",
    ],
    preview_images: {
      desktop: "/images/careers/hero-banner/hero-banner.png",
      tablet: "/images/careers/hero-banner/hero-banner-tablet.png",
      mobile: "/images/careers/hero-banner/hero-banner-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/careers/hero-banner.png",
    used_in_pages: [
      "careers",
      "about",
      "community",
      "solutions",
      "where-we-build",
      "[slug]",
    ],
  },
  {
    id: "widget-careers-accordion",
    page_id: "careers",
    position: 1,
    widget_key: "shared.accordion-split",
    widgets_title: "Why Join Culture Accordion",
    widgets_label: "Culture Accordion",
    component_name: "CareersCultureAccordion",
    component_tag: "<CareersCultureAccordion />",
    source_location: "@ui-component/careers/CareersCultureAccordion",
    category: "content",
    description:
      "Split layout pairing photographic showcase with interactive expandable culture values.",
    fallback_key: "accordion-split",
    key_props: ["title", "description", "items", "image"],
    preview_images: {
      desktop: "/images/careers/culture-accordion/culture-accordion.png",
      tablet: "/images/careers/culture-accordion/culture-accordion-tablet.png",
      mobile: "/images/careers/culture-accordion/culture-accordion-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/careers/culture-accordion.png",
    used_in_pages: ["careers", "solutions"],
  },
  {
    id: "widget-careers-testimonials",
    page_id: "careers",
    position: 2,
    widget_key: "shared.gloabl-testimonails",
    widgets_title: "Employee Testimonials Carousel",
    widgets_label: "Global Testimonials",
    component_name: "SharedTestimonials",
    component_tag: "<SharedTestimonials />",
    source_location: "@ui-common/SharedTestimonials",
    category: "testimonials",
    description:
      "Canonical reusable testimonial slider used across Careers, Community, and Venues.",
    fallback_key: "gloabl-testimonails",
    key_props: ["title", "subtitle", "testimonials_list"],
    preview_images: {
      desktop: "/images/careers/global-testimonials/global-testimonials.png",
      tablet:
        "/images/careers/global-testimonials/global-testimonials-tablet.png",
      mobile:
        "/images/careers/global-testimonials/global-testimonials-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/careers/global-testimonials.png",
    used_in_pages: ["careers", "community", "private-venues", "right-of-ways"],
  },
  {
    id: "widget-careers-job-areas",
    page_id: "careers",
    position: 3,
    widget_key: "shared.highlight-list",
    widgets_title: "Functional Job Disciplines & Career Tracks",
    widgets_label: "Job Areas",
    component_name: "CareersJobAreas",
    component_tag: "<CareersJobAreas />",
    source_location: "@ui-component/careers/CareersJobAreas",
    category: "content",
    description:
      "Interactive list or cards detailing active engineering tracks and openings.",
    fallback_key: "highlight-list",
    key_props: ["title", "description", "job_disciplines"],
    preview_images: {
      desktop: "/images/careers/job-areas/job-areas.png",
      tablet: "/images/careers/job-areas/job-areas-tablet.png",
      mobile: "/images/careers/job-areas/job-areas-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/careers/job-areas.png",
    used_in_pages: ["careers"],
  },
  {
    id: "widget-careers-benefits",
    page_id: "careers",
    position: 4,
    widget_key: "shared.benefits",
    widgets_title: "Comprehensive Employee Benefits Grid",
    widgets_label: "Benefits Grid",
    component_name: "BenefitsGrid",
    component_tag: "<BenefitsGrid />",
    source_location: "@ui-common/BenefitsGrid",
    category: "feature",
    description:
      "Modular 6-tile grid highlighting health, financial security, time off, and tuition aid.",
    fallback_key: "benefits",
    key_props: ["title", "description", "cards"],
    preview_images: {
      desktop: "/images/careers/benefits-grid/benefits-grid.png",
      tablet: "/images/careers/benefits-grid/benefits-grid-tablet.png",
      mobile: "/images/careers/benefits-grid/benefits-grid-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/careers/benefits-grid.png",
    used_in_pages: ["careers", "community"],
  },
  {
    id: "widget-careers-eeo",
    page_id: "careers",
    position: 5,
    widget_key: "shared.eeo",
    widgets_title: "Equal Employment Opportunity Statement",
    widgets_label: "EEO Statement",
    component_name: "CareersEEO",
    component_tag: "<CareersEEO />",
    source_location: "@ui-component/careers/CareersEEO",
    category: "content",
    description:
      "Formal corporate diversity pledge ensuring barrier-free career advancement.",
    fallback_key: "eeo",
    key_props: ["title", "content"],
    preview_images: {
      desktop: "/images/careers/eeo-statement/eeo-statement.png",
      tablet: "/images/careers/eeo-statement/eeo-statement-tablet.png",
      mobile: "/images/careers/eeo-statement/eeo-statement-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/careers/eeo-statement.png",
    used_in_pages: ["careers"],
  },

  // ── COMMUNITY PAGE WIDGETS ───────────────────────────────────────────────
  {
    id: "widget-community-hero",
    page_id: "community",
    position: 0,
    widget_key: "shared.hero-banner",
    widgets_title: "Community Hero Banner",
    widgets_label: "Hero Banner",
    component_name: "HeroBanner",
    component_tag: "<HeroBanner />",
    source_location: "@ui-common/HeroBanner",
    category: "hero",
    description: "Community subpage hero with municipality-oriented messaging.",
    fallback_key: "hero-banner",
    key_props: ["title", "description", "background_image"],
    preview_images: {
      desktop: "/images/community/hero-banner/hero-banner.png",
      tablet: "/images/community/hero-banner/hero-banner-tablet.png",
      mobile: "/images/community/hero-banner/hero-banner-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/community/hero-banner.png",
    used_in_pages: [
      "community",
      "about",
      "careers",
      "solutions",
      "where-we-build",
      "[slug]",
    ],
  },
  {
    id: "widget-community-small-cells",
    page_id: "community",
    position: 1,
    widget_key: "shared.illustration-split",
    widgets_title: "Small Cells Municipal Technology Split",
    widgets_label: "Illustration Split",
    component_name: "IllustrationSplit",
    component_tag: "<IllustrationSplit />",
    source_location: "@ui-common/IllustrationSplit",
    category: "content",
    description:
      "Unified illustration component displaying small-cells-illustration.svg and technical specs.",
    fallback_key: "illustration-split",
    key_props: ["title", "description", "illustration", "stats", "features"],
    preview_images: {
      desktop: "/images/community/illustration-split/illustration-split.png",
      tablet:
        "/images/community/illustration-split/illustration-split-tablet.png",
      mobile:
        "/images/community/illustration-split/illustration-split-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/community/illustration-split.png",
    used_in_pages: ["community", "solutions"],
  },
  {
    id: "widget-community-why-small-cells",
    page_id: "community",
    position: 2,
    widget_key: "shared.image-card-grid",
    widgets_title: "Why Small Cells Matter Card Grid",
    widgets_label: "Image Card Grid",
    component_name: "BenefitsGrid",
    component_tag: "<BenefitsGrid />",
    source_location: "@ui-common/BenefitsGrid",
    category: "feature",
    description:
      "Card grid exploring public safety, emergency dispatch, and economic growth.",
    fallback_key: "image-card-grid",
    key_props: ["title", "description", "cards"],
    preview_images: {
      desktop: "/images/community/image-card-grid/image-card-grid.png",
      tablet: "/images/community/image-card-grid/image-card-grid-tablet.png",
      mobile: "/images/community/image-card-grid/image-card-grid-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/community/image-card-grid.png",
    used_in_pages: ["community", "careers"],
  },
  {
    id: "widget-community-how-we-work",
    page_id: "community",
    position: 3,
    widget_key: "shared.background-feature-section",
    widgets_title: "How We Work with Municipalities",
    widgets_label: "How We Work",
    component_name: "CommunityHowWeWork",
    component_tag: "<CommunityHowWeWork />",
    source_location: "@ui-component/community/CommunityHowWeWork",
    category: "feature",
    description:
      "Municipal collaboration workflow highlighting transparency and safety codes.",
    fallback_key: "background-feature-section",
    key_props: ["title", "description", "steps"],
    preview_images: {
      desktop: "/images/community/how-we-work/how-we-work.png",
      tablet: "/images/community/how-we-work/how-we-work-tablet.png",
      mobile: "/images/community/how-we-work/how-we-work-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/community/how-we-work.png",
    used_in_pages: ["community", "home"],
  },
  {
    id: "widget-community-testimonials",
    page_id: "community",
    position: 4,
    widget_key: "shared.gloabl-testimonails",
    widgets_title: "Civic Leaders & Municipal Testimonials",
    widgets_label: "Global Testimonials",
    component_name: "SharedTestimonials",
    component_tag: "<SharedTestimonials />",
    source_location: "@ui-common/SharedTestimonials",
    category: "testimonials",
    description:
      "Verified testimonials from city managers, utilities, and civic engineers.",
    fallback_key: "gloabl-testimonails",
    key_props: ["title", "subtitle", "testimonials_list"],
    preview_images: {
      desktop: "/images/community/global-testimonials/global-testimonials.png",
      tablet:
        "/images/community/global-testimonials/global-testimonials-tablet.png",
      mobile:
        "/images/community/global-testimonials/global-testimonials-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/community/global-testimonials.png",
    used_in_pages: ["community", "careers", "private-venues", "right-of-ways"],
  },
  {
    id: "widget-community-faq",
    page_id: "community",
    position: 5,
    widget_key: "shared.faq",
    widgets_title: "Community Frequently Asked Questions",
    widgets_label: "FAQ Accordion",
    component_name: "CommunityFAQ",
    component_tag: "<CommunityFAQ />",
    source_location: "@ui-component/community/CommunityFAQ",
    category: "content",
    description:
      "Accordion addressing RF emissions compliance, pole permits, and maintenance SLAs.",
    fallback_key: "faq",
    key_props: ["title", "description", "faqs"],
    preview_images: {
      desktop: "/images/community/faq-accordion/faq-accordion.png",
      tablet: "/images/community/faq-accordion/faq-accordion-tablet.png",
      mobile: "/images/community/faq-accordion/faq-accordion-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/community/faq-accordion.png",
    used_in_pages: ["community"],
  },

  // ── SOLUTIONS PAGE WIDGETS ───────────────────────────────────────────────
  {
    id: "widget-solutions-hero",
    page_id: "solutions",
    position: 0,
    widget_key: "shared.hero-banner",
    widgets_title: "Solutions Overview Hero Banner",
    widgets_label: "Hero Banner",
    component_name: "HeroBanner",
    component_tag: "<HeroBanner />",
    source_location: "@ui-common/HeroBanner",
    category: "hero",
    description:
      "Solutions hero communicating multi-carrier and high-density capabilities.",
    fallback_key: "hero-banner",
    key_props: [
      "title",
      "description",
      "background_image",
      "CTA_text",
      "CTA_url",
    ],
    preview_images: {
      desktop: "/images/solutions/hero-banner/hero-banner.png",
      tablet: "/images/solutions/hero-banner/hero-banner-tablet.png",
      mobile: "/images/solutions/hero-banner/hero-banner-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/solutions/hero-banner.png",
    used_in_pages: [
      "solutions",
      "about",
      "careers",
      "community",
      "where-we-build",
      "[slug]",
    ],
  },
  {
    id: "widget-solutions-small-cells",
    page_id: "solutions",
    position: 1,
    widget_key: "shared.small-cells",
    widgets_title: "Small Cells Densification Technical Split",
    widgets_label: "Small Cells Split",
    component_name: "IllustrationSplit",
    component_tag: "<IllustrationSplit />",
    source_location: "@ui-common/IllustrationSplit",
    category: "flow",
    description:
      "Technical architecture for 5G mmWave/sub-6GHz densification using small-cells-illustration.svg.",
    fallback_key: "illustration-split",
    key_props: ["title", "description", "illustration", "stats", "features"],
    preview_images: {
      desktop: "/images/solutions/small-cells-split/small-cells-split.png",
      tablet:
        "/images/solutions/small-cells-split/small-cells-split-tablet.png",
      mobile:
        "/images/solutions/small-cells-split/small-cells-split-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/solutions/small-cells-split.png",
    used_in_pages: ["solutions", "community"],
  },
  {
    id: "widget-solutions-das",
    page_id: "solutions",
    position: 1,
    widget_key: "shared.das",
    widgets_title: "Distributed Antenna Systems (DAS) In-Building Split",
    widgets_label: "DAS Split",
    component_name: "IllustrationSplit",
    component_tag: "<IllustrationSplit />",
    source_location: "@ui-common/IllustrationSplit",
    category: "flow",
    description:
      "High-capacity in-building coverage architecture using das-illustration.svg with optical remotes.",
    fallback_key: "illustration-split",
    key_props: ["title", "description", "illustration", "stats", "features"],
    preview_images: {
      desktop: "/images/solutions/das-split/das-split.png",
      tablet: "/images/solutions/das-split/das-split-tablet.png",
      mobile: "/images/solutions/das-split/das-split-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/solutions/das-split.png",
    used_in_pages: ["solutions"],
  },
  {
    id: "widget-solutions-industry",
    page_id: "solutions",
    position: 3,
    widget_key: "shared.industry",
    widgets_title: "Multi-Industry Infrastructure Accordion",
    widgets_label: "Industries Accordion",
    component_name: "SolutionsIndustries",
    component_tag: "<SolutionsIndustries />",
    source_location: "@ui-component/solutions/SolutionsIndustries",
    category: "content",
    description:
      "Accordion tabs detailing tailored engineering for Airports, Venues, Healthcare, and Commercial Real Estate.",
    fallback_key: "accordion-split",
    key_props: ["title", "description", "industries"],
    preview_images: {
      desktop:
        "/images/solutions/industries-accordion/industries-accordion.png",
      tablet:
        "/images/solutions/industries-accordion/industries-accordion-tablet.png",
      mobile:
        "/images/solutions/industries-accordion/industries-accordion-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/solutions/industries-accordion.png",
    used_in_pages: ["solutions"],
  },
  {
    id: "widget-solutions-cta",
    page_id: "solutions",
    position: 99,
    widget_key: "shared.cta-with-graphic",
    widgets_title: "A Balanced Approach Solutions CTA",
    widgets_label: "CTA With Graphic",
    component_name: "CtaWithGraphic",
    component_tag: "<CtaWithGraphic />",
    source_location: "@ui-common/CtaWithGraphic",
    category: "cta",
    description:
      "Closing conversion block with orbital graphics and CTA consultation buttons.",
    fallback_key: "cta-with-graphic",
    key_props: ["title", "description", "button_text", "button_link"],
    preview_images: {
      desktop: "/images/solutions/cta-with-graphic/cta-with-graphic.png",
      tablet: "/images/solutions/cta-with-graphic/cta-with-graphic-tablet.png",
      mobile: "/images/solutions/cta-with-graphic/cta-with-graphic-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/solutions/cta-with-graphic.png",
    used_in_pages: ["solutions", "home"],
  },

  // ── PRIVATE VENUES PAGE WIDGETS ──────────────────────────────────────────
  {
    id: "widget-pv-hero",
    page_id: "private-venues",
    position: 0,
    widget_key: "shared.sub-page-hero",
    widgets_title: "Private Venues Sub-Page Hero Banner",
    widgets_label: "Sub-Page Hero",
    component_name: "SubPageHeroBanner",
    component_tag: "<SubPageHeroBanner />",
    source_location: "@ui-common/SubPageHeroBanner",
    category: "hero",
    description:
      "Compact subpage header with background gradient and prominent venue qualification CTA.",
    fallback_key: "sub-page-hero",
    key_props: [
      "title",
      "description",
      "background_gradient",
      "cta_text",
      "cta_url",
    ],
    preview_images: {
      desktop: "/images/private-venues/sub-page-hero/sub-page-hero.png",
      tablet: "/images/private-venues/sub-page-hero/sub-page-hero-tablet.png",
      mobile: "/images/private-venues/sub-page-hero/sub-page-hero-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/private-venues/sub-page-hero.png",
    used_in_pages: [
      "private-venues",
      "right-of-ways",
      "leadership",
      "board-of-directors",
      "contact",
    ],
  },
  {
    id: "widget-pv-process",
    page_id: "private-venues",
    position: 1,
    widget_key: "shared.process",
    widgets_title: "4-Stage Service Delivery Process Timeline",
    widgets_label: "Process Section",
    component_name: "ProcessSection",
    component_tag: "<ProcessSection />",
    source_location: "@ui-common/ProcessSection",
    category: "content",
    description:
      "Four-step progression outlining RF audit, design, commissioning, and NOC monitoring.",
    fallback_key: "process",
    key_props: ["title", "description", "steps"],
    preview_images: {
      desktop: "/images/private-venues/process-section/process-section.png",
      tablet:
        "/images/private-venues/process-section/process-section-tablet.png",
      mobile:
        "/images/private-venues/process-section/process-section-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/private-venues/process-section.png",
    used_in_pages: ["private-venues", "right-of-ways"],
  },
  {
    id: "widget-pv-testimonials",
    page_id: "private-venues",
    position: 2,
    widget_key: "shared.gloabl-testimonails",
    widgets_title: "Commercial Venue Operator Testimonials",
    widgets_label: "Global Testimonials",
    component_name: "SharedTestimonials",
    component_tag: "<SharedTestimonials />",
    source_location: "@ui-common/SharedTestimonials",
    category: "testimonials",
    description:
      "Canonical testimonials slider highlighting venue operator and asset manager experiences.",
    fallback_key: "gloabl-testimonails",
    key_props: ["title", "subtitle", "testimonials_list"],
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
    used_in_pages: ["private-venues", "careers", "community", "right-of-ways"],
  },
  {
    id: "widget-pv-cta",
    page_id: "private-venues",
    position: 99,
    widget_key: "shared.global-cta",
    widgets_title: "Private Venues Partnership CTA Banner",
    widgets_label: "Sub-Page CTA",
    component_name: "SubPageCTA",
    component_tag: "<SubPageCTA />",
    source_location: "@ui-common/SubPageCTA",
    category: "cta",
    description:
      "Shared CTA banner inviting property managers to request an infrastructure assessment.",
    fallback_key: "global-cta",
    key_props: ["title", "description", "button_text", "button_url"],
    preview_images: {
      desktop: "/images/private-venues/sub-page-cta/sub-page-cta.png",
      tablet: "/images/private-venues/sub-page-cta/sub-page-cta-tablet.png",
      mobile: "/images/private-venues/sub-page-cta/sub-page-cta-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/private-venues/sub-page-cta.png",
    used_in_pages: [
      "private-venues",
      "right-of-ways",
      "leadership",
      "board-of-directors",
    ],
  },

  // ── RIGHT OF WAYS PAGE WIDGETS ───────────────────────────────────────────
  {
    id: "widget-row-hero",
    page_id: "right-of-ways",
    position: 1,
    widget_key: "shared.sub-page-hero",
    widgets_title: "Right of Ways Sub-Page Hero Banner",
    widgets_label: "Sub-Page Hero",
    component_name: "SubPageHeroBanner",
    component_tag: "<SubPageHeroBanner />",
    source_location: "@ui-common/SubPageHeroBanner",
    category: "hero",
    description:
      "Subpage hero introducing municipal right-of-way co-location and utility agreements.",
    fallback_key: "sub-page-hero",
    key_props: [
      "title",
      "description",
      "background_gradient",
      "cta_text",
      "cta_url",
    ],
    preview_images: {
      desktop: "/images/right-of-ways/sub-page-hero/sub-page-hero.png",
      tablet: "/images/right-of-ways/sub-page-hero/sub-page-hero-tablet.png",
      mobile: "/images/right-of-ways/sub-page-hero/sub-page-hero-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/right-of-ways/sub-page-hero.png",
    used_in_pages: [
      "right-of-ways",
      "private-venues",
      "leadership",
      "board-of-directors",
      "contact",
    ],
  },
  {
    id: "widget-row-process",
    page_id: "right-of-ways",
    position: 2,
    widget_key: "shared.process",
    widgets_title: "Structured Municipal Permitting & Deployment Process",
    widgets_label: "Process Section",
    component_name: "ProcessSection",
    component_tag: "<ProcessSection />",
    source_location: "@ui-common/ProcessSection",
    category: "content",
    description:
      "Four-step municipal timeline: Site Survey, Master Lease Agreement, Construction, Ongoing Maintenance.",
    fallback_key: "process",
    key_props: ["title", "description", "steps"],
    preview_images: {
      desktop: "/images/right-of-ways/process-section/process-section.png",
      tablet:
        "/images/right-of-ways/process-section/process-section-tablet.png",
      mobile:
        "/images/right-of-ways/process-section/process-section-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/right-of-ways/process-section.png",
    used_in_pages: ["right-of-ways", "private-venues"],
  },
  {
    id: "widget-row-testimonials",
    page_id: "right-of-ways",
    position: 3,
    widget_key: "shared.gloabl-testimonails",
    widgets_title: "City & Utility Partner Feedback Testimonials",
    widgets_label: "Global Testimonials",
    component_name: "SharedTestimonials",
    component_tag: "<SharedTestimonials />",
    source_location: "@ui-common/SharedTestimonials",
    category: "testimonials",
    description:
      "Canonical testimonials slider with direct quotes from city engineers and utility managers.",
    fallback_key: "gloabl-testimonails",
    key_props: ["title", "subtitle", "testimonials_list"],
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
    used_in_pages: ["right-of-ways", "careers", "community", "private-venues"],
  },
  {
    id: "widget-row-cta",
    page_id: "right-of-ways",
    position: 4,
    widget_key: "shared.global-cta",
    widgets_title: "Right of Ways Consultation CTA Banner",
    widgets_label: "Sub-Page CTA",
    component_name: "SubPageCTA",
    component_tag: "<SubPageCTA />",
    source_location: "@ui-common/SubPageCTA",
    category: "cta",
    description:
      "Shared CTA banner encouraging city officials to connect for master leasing agreements.",
    fallback_key: "global-cta",
    key_props: ["title", "description", "button_text", "button_url"],
    preview_images: {
      desktop: "/images/right-of-ways/sub-page-cta/sub-page-cta.png",
      tablet: "/images/right-of-ways/sub-page-cta/sub-page-cta-tablet.png",
      mobile: "/images/right-of-ways/sub-page-cta/sub-page-cta-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/right-of-ways/sub-page-cta.png",
    used_in_pages: [
      "right-of-ways",
      "private-venues",
      "leadership",
      "board-of-directors",
    ],
  },

  // ── WHERE WE BUILD PAGE WIDGETS ──────────────────────────────────────────
  {
    id: "widget-where-hero",
    page_id: "where-we-build",
    position: 0,
    widget_key: "shared.hero-banner",
    widgets_title: "National Footprint Hero Banner",
    widgets_label: "Hero Banner",
    component_name: "HeroBanner",
    component_tag: "<HeroBanner />",
    source_location: "@ui-common/HeroBanner",
    category: "hero",
    description:
      "National footprint hero displaying scale across nationwide markets.",
    fallback_key: "hero-banner",
    key_props: ["title", "description", "background_image"],
    preview_images: {
      desktop: "/images/where-we-build/hero-banner/hero-banner.png",
      tablet: "/images/where-we-build/hero-banner/hero-banner-tablet.png",
      mobile: "/images/where-we-build/hero-banner/hero-banner-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/where-we-build/hero-banner.png",
    used_in_pages: [
      "where-we-build",
      "about",
      "careers",
      "community",
      "solutions",
      "[slug]",
    ],
  },
  {
    id: "widget-where-communities",
    page_id: "where-we-build",
    position: 1,
    widget_key: "shared.communities",
    widgets_title: "Municipal Communities Footprint with US Dot Map",
    widgets_label: "Where Communities",
    component_name: "WhereCommunities",
    component_tag: "<WhereCommunities />",
    source_location: "@ui-component/where-we-build/WhereCommunities",
    category: "content",
    description:
      "Split layout pairing us-dot-map.svg vector illustration with community deployment data.",
    fallback_key: "communities",
    key_props: ["title", "description", "dot_map", "stats"],
    preview_images: {
      desktop: "/images/where-we-build/where-communities/where-communities.png",
      tablet:
        "/images/where-we-build/where-communities/where-communities-tablet.png",
      mobile:
        "/images/where-we-build/where-communities/where-communities-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/where-we-build/where-communities.png",
    used_in_pages: ["where-we-build"],
  },
  {
    id: "widget-where-venues",
    page_id: "where-we-build",
    position: 2,
    widget_key: "shared.venues",
    widgets_title: "Commercial Buildings & High-Traffic Venues Footprint",
    widgets_label: "Where Venues",
    component_name: "WhereVenues",
    component_tag: "<WhereVenues />",
    source_location: "@ui-component/where-we-build/WhereVenues",
    category: "content",
    description:
      "Split layout highlighting enterprise venues, real estate portfolios, and coverage footprint.",
    fallback_key: "venues",
    key_props: ["title", "description", "image", "venue_types"],
    preview_images: {
      desktop: "/images/where-we-build/where-venues/where-venues.png",
      tablet: "/images/where-we-build/where-venues/where-venues-tablet.png",
      mobile: "/images/where-we-build/where-venues/where-venues-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/where-we-build/where-venues.png",
    used_in_pages: ["where-we-build"],
  },

  // ── LEADERSHIP PAGE WIDGETS ──────────────────────────────────────────────
  {
    id: "widget-lead-hero",
    page_id: "leadership",
    position: 0,
    widget_key: "shared.sub-page-hero",
    widgets_title: "Executive Leadership Sub-Page Hero Banner",
    widgets_label: "Sub-Page Hero",
    component_name: "SubPageHeroBanner",
    component_tag: "<SubPageHeroBanner />",
    source_location: "@ui-common/SubPageHeroBanner",
    category: "hero",
    description:
      "Subpage hero introducing executive management and corporate stewardship.",
    fallback_key: "sub-page-hero",
    key_props: ["title", "description", "background_gradient"],
    preview_images: {
      desktop: "/images/leadership/sub-page-hero/sub-page-hero.png",
      tablet: "/images/leadership/sub-page-hero/sub-page-hero-tablet.png",
      mobile: "/images/leadership/sub-page-hero/sub-page-hero-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/leadership/sub-page-hero.png",
    used_in_pages: [
      "leadership",
      "private-venues",
      "right-of-ways",
      "board-of-directors",
      "contact",
    ],
  },
  {
    id: "widget-lead-people",
    page_id: "leadership",
    position: 1,
    widget_key: "shared.people-global-section",
    widgets_title: "Executive Management & Leadership Grid with Bio Drawers",
    widgets_label: "People Global Section",
    component_name: "PeopleGlobalSection",
    component_tag: "<PeopleGlobalSection />",
    source_location: "@ui-common/PeopleGlobalSection",
    category: "people",
    description:
      "Canonical team grid component supporting executive profiles and full-screen modal bio drawers.",
    fallback_key: "people-global-section",
    key_props: ["members", "background_gradient", "columns"],
    preview_images: {
      desktop:
        "/images/leadership/people-global-section/people-global-section.png",
      tablet:
        "/images/leadership/people-global-section/people-global-section-tablet.png",
      mobile:
        "/images/leadership/people-global-section/people-global-section-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/leadership/people-global-section.png",
    used_in_pages: ["leadership", "board-of-directors"],
  },
  {
    id: "widget-lead-cta",
    page_id: "leadership",
    position: 99,
    widget_key: "shared.global-cta",
    widgets_title: "Explore Careers Leadership Callout Banner",
    widgets_label: "Sub-Page CTA",
    component_name: "SubPageCTA",
    component_tag: "<SubPageCTA />",
    source_location: "@ui-common/SubPageCTA",
    category: "cta",
    description: "Shared CTA banner pointing prospective talent to open roles.",
    fallback_key: "global-cta",
    key_props: ["title", "description", "button_text", "button_url"],
    preview_images: {
      desktop: "/images/leadership/sub-page-cta/sub-page-cta.png",
      tablet: "/images/leadership/sub-page-cta/sub-page-cta-tablet.png",
      mobile: "/images/leadership/sub-page-cta/sub-page-cta-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/leadership/sub-page-cta.png",
    used_in_pages: [
      "leadership",
      "private-venues",
      "right-of-ways",
      "board-of-directors",
    ],
  },

  // ── BOARD OF DIRECTORS PAGE WIDGETS ──────────────────────────────────────
  {
    id: "widget-board-hero",
    page_id: "board-of-directors",
    position: 0,
    widget_key: "shared.sub-page-hero",
    widgets_title: "Board Governance Sub-Page Hero Banner",
    widgets_label: "Sub-Page Hero",
    component_name: "SubPageHeroBanner",
    component_tag: "<SubPageHeroBanner />",
    source_location: "@ui-common/SubPageHeroBanner",
    category: "hero",
    description:
      "Subpage hero introducing board governance and strategic advisory.",
    fallback_key: "sub-page-hero",
    key_props: ["title", "description", "background_gradient"],
    preview_images: {
      desktop: "/images/board-of-directors/sub-page-hero/sub-page-hero.png",
      tablet:
        "/images/board-of-directors/sub-page-hero/sub-page-hero-tablet.png",
      mobile:
        "/images/board-of-directors/sub-page-hero/sub-page-hero-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/board-of-directors/sub-page-hero.png",
    used_in_pages: [
      "board-of-directors",
      "private-venues",
      "right-of-ways",
      "leadership",
      "contact",
    ],
  },
  {
    id: "widget-board-people",
    page_id: "board-of-directors",
    position: 1,
    widget_key: "shared.people-global-section",
    widgets_title: "Board of Directors Governance Grid with Bio Drawers",
    widgets_label: "People Global Section",
    component_name: "PeopleGlobalSection",
    component_tag: "<PeopleGlobalSection />",
    source_location: "@ui-common/PeopleGlobalSection",
    category: "people",
    description:
      "Shared canonical people section rendering board members and advisors with interactive bio drawer.",
    fallback_key: "people-global-section",
    key_props: ["members", "background_gradient", "columns"],
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
    used_in_pages: ["board-of-directors", "leadership"],
  },
  {
    id: "widget-board-cta",
    page_id: "board-of-directors",
    position: 99,
    widget_key: "shared.global-cta",
    widgets_title: "Meet the Full Leadership Team CTA Banner",
    widgets_label: "Sub-Page CTA",
    component_name: "SubPageCTA",
    component_tag: "<SubPageCTA />",
    source_location: "@ui-common/SubPageCTA",
    category: "cta",
    description:
      "Shared CTA banner guiding visitors back to the executive leadership team view.",
    fallback_key: "global-cta",
    key_props: ["title", "description", "button_text", "button_url"],
    preview_images: {
      desktop: "/images/board-of-directors/sub-page-cta/sub-page-cta.png",
      tablet: "/images/board-of-directors/sub-page-cta/sub-page-cta-tablet.png",
      mobile: "/images/board-of-directors/sub-page-cta/sub-page-cta-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/board-of-directors/sub-page-cta.png",
    used_in_pages: [
      "board-of-directors",
      "private-venues",
      "right-of-ways",
      "leadership",
    ],
  },

  // ── CONTACT PAGE WIDGETS ─────────────────────────────────────────────────
  {
    id: "widget-contact-hero",
    page_id: "contact",
    position: 1,
    widget_key: "shared.sub-page-hero",
    widgets_title: "Contact Us Sub-Page Hero Banner",
    widgets_label: "Sub-Page Hero",
    component_name: "SubPageHeroBanner",
    component_tag: "<SubPageHeroBanner />",
    source_location: "@ui-common/SubPageHeroBanner",
    category: "hero",
    description: "Subpage hero introducing contact and partnership channels.",
    fallback_key: "sub-page-hero",
    key_props: ["title", "description", "background_gradient"],
    preview_images: {
      desktop: "/images/contact/sub-page-hero/sub-page-hero.png",
      tablet: "/images/contact/sub-page-hero/sub-page-hero-tablet.png",
      mobile: "/images/contact/sub-page-hero/sub-page-hero-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/contact/sub-page-hero.png",
    used_in_pages: [
      "contact",
      "private-venues",
      "right-of-ways",
      "leadership",
      "board-of-directors",
    ],
  },
  {
    id: "widget-contact-form",
    page_id: "contact",
    position: 2,
    widget_key: "contact-form",
    widgets_title: "Multi-Topic Inquiry & Carrier Interest Form",
    widgets_label: "Contact Form",
    component_name: "ContactForm",
    component_tag: "<ContactForm />",
    source_location: "@ui-component/contact/ContactForm",
    category: "form",
    description:
      "Interactive form with topic selection, input validation, and submission handler.",
    fallback_key: "contact-form",
    key_props: ["topicOptions", "onSubmit", "isSubmitting"],
    preview_images: {
      desktop: "/images/contact/contact-form/contact-form.png",
      tablet: "/images/contact/contact-form/contact-form-tablet.png",
      mobile: "/images/contact/contact-form/contact-form-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/contact/contact-form.png",
    used_in_pages: ["contact"],
  },

  // ── DYNAMIC STRAPI PAGE WIDGETS ──────────────────────────────────────────
  {
    id: "widget-dynamic-hero",
    page_id: "dynamic-slug",
    position: 0,
    widget_key: "shared.hero-banner",
    widgets_title: "Dynamic Page Hero Banner",
    widgets_label: "Hero Banner",
    component_name: "HeroBanner",
    component_tag: "<HeroBanner />",
    source_location: "@ui-common/HeroBanner",
    category: "hero",
    description: "Dynamic page header populated from Strapi slug query.",
    fallback_key: "hero-banner",
    key_props: ["title", "description", "background_image"],
    preview_images: {
      desktop: "/images/dynamic-slug/hero-banner/hero-banner.png",
      tablet: "/images/dynamic-slug/hero-banner/hero-banner-tablet.png",
      mobile: "/images/dynamic-slug/hero-banner/hero-banner-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/dynamic-slug/hero-banner.png",
    used_in_pages: [
      "[slug]",
      "about",
      "careers",
      "community",
      "solutions",
      "where-we-build",
    ],
  },
  {
    id: "widget-dynamic-zone",
    page_id: "dynamic-slug",
    position: 99,
    widget_key: "shared.dynamic-zone",
    widgets_title: "Dynamic Zone Injected Widgets (WIDGET_REGISTRY)",
    widgets_label: "Dynamic Zone",
    component_name: "GlobalWidgetRenderer",
    component_tag: "<GlobalWidgetRenderer />",
    source_location: "components/ui-widget/registry.ts",
    category: "shared",
    description:
      "Modular dynamic blocks resolved dynamically through the global WIDGET_REGISTRY.",
    fallback_key: "dynamic-zone",
    key_props: ["__component", "PositionNumber", "data"],
    preview_images: {
      desktop: "/images/dynamic-slug/dynamic-zone/dynamic-zone.png",
      tablet: "/images/dynamic-slug/dynamic-zone/dynamic-zone-tablet.png",
      mobile: "/images/dynamic-slug/dynamic-zone/dynamic-zone-mobile.png",
    },
    strapi_image: "/images/strapi-widgets/dynamic-slug/dynamic-zone.png",
    used_in_pages: ["[slug]"],
  },
];

// ── QUERY & FILTER HELPERS ────────────────────────────────────────────────

/** Retrieve a specific widget by its unique widget_key (e.g. 'shared.main-hero') */
export function getWidgetByKey(widgetKey: string): FlatWidget | undefined {
  return WIDGETS_LIST.find(
    (w) => w.widget_key.toLowerCase() === widgetKey.toLowerCase(),
  );
}

/** Retrieve all widgets associated with a specific page ID */
export function getWidgetsByPage(pageId: string): FlatWidget[] {
  const normalized = pageId.replace(/^\//, "").toLowerCase();
  const targetId = normalized === "" ? "home" : normalized;
  return WIDGETS_LIST.filter(
    (w) =>
      w.page_id.toLowerCase() === targetId ||
      w.used_in_pages.includes(targetId),
  );
}

/** Retrieve all widgets belonging to a category */
export function getWidgetsByCategory(category: WidgetCategory): FlatWidget[] {
  return WIDGETS_LIST.filter((w) => w.category === category);
}

/** Get list of unique widgets (deduplicated by widget_key) */
export function getAllUniqueWidgets(): FlatWidget[] {
  const seen = new Set<string>();
  const uniqueList: FlatWidget[] = [];

  WIDGETS_LIST.forEach((widget) => {
    if (!seen.has(widget.widget_key)) {
      seen.add(widget.widget_key);
      uniqueList.push(widget);
    }
  });

  return uniqueList;
}

/** Return count statistics for widgets */
export function getWidgetStats() {
  const totalEntries = WIDGETS_LIST.length;
  const uniqueKeys = getAllUniqueWidgets().length;
  const categoriesCount = Array.from(
    new Set(WIDGETS_LIST.map((w) => w.category)),
  ).length;

  return {
    totalEntries,
    uniqueKeys,
    categoriesCount,
  };
}

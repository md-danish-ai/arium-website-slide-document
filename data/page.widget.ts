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
    title: "Home Page Architecture",
    label: "Home",
    route: "/",
    strapi_slug: "home",
    category: "Corporate",
    description:
      "Flagship entrance for Arium Networks. Orchestrates 7 modular sections and background particle physics to showcase high-density cellular infrastructure, small cells, and municipal partnerships.",
    child_widgets: [
      {
        id: "w-home-0",
        position: 0,
        widget_key: "shared.main-hero",
        widgets_title: "Home Main Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Full-bleed canvas hero displaying the primary value proposition, background video or image, and dual CTAs.",
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
          "Section framing telecom bandwidth challenges with high-contrast text and glowing infrastructure background graphics.",
        key_props: ["title", "description", "cards", "cta_text", "cta_url"],
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
        widgets_title: "3-Pillar Infrastructure Architecture Grid",
        widgets_label: "Detailed Card Grid",
        category: "content",
        description:
          "Tri-card interactive layout detailing Design, Deployment, and Operations services with custom hover elevation.",
        key_props: ["title", "description", "cards", "columns"],
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
          "Key performance indicators (50K+ Nodes, 99.999% Uptime) alongside high-resolution field photography.",
        key_props: ["title", "description", "stats", "image"],
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
          "Editorial 50/50 block balancing community aesthetic considerations with wireless capacity enhancements.",
        key_props: ["title", "description", "image", "cta_text", "cta_url"],
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
          "Centered callout card targeting prospective telecom professionals with background imagery and direct apply link.",
        key_props: [
          "title",
          "description",
          "button_text",
          "button_url",
          "background_image",
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
          "Signature conversion unit incorporating Arium's circular orbital vector graphics, badge, and dual CTAs.",
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
      },
    ],
  },

  // ── 2. ABOUT PAGE ────────────────────────────────────────────────────────
  {
    id: "about",
    title: "About Page Architecture",
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
          "Full-bleed subpage hero with responsive typography, dark gradient overlay, and optional CTA button.",
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
      },
      {
        id: "w-about-1",
        position: 1,
        widget_key: "shared.content-with-side-graphic",
        widgets_title: "Our Story with Vector Wireframe Torus Graphic",
        widgets_label: "Content With Side Graphic",
        category: "content",
        description:
          "Two-column narrative block displaying corporate history alongside vector technical graphics.",
        key_props: ["title", "subtitle", "content", "graphic_type", "image"],
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
          "Interactive chronological timeline showcasing key milestones, carrier deployments, and company growth.",
        key_props: ["heading", "subheading", "milestones"],
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
        widgets_title: "Why Our Infrastructure Trust Stats Cards",
        widgets_label: "Stats Cards",
        category: "flow",
        description:
          "Grid of 4 trust metrics highlighting carrier compliance, uptime standards, and safety certifications.",
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
          "Four core corporate commitments: Community Trust, Aesthetic Harmony, Environmental Responsibility, Safety.",
        key_props: ["heading", "description", "commitments_list"],
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
          "Split promotional section highlighting workplace culture, engineering values, and career entryways.",
        key_props: ["title", "description", "image", "cta_text", "cta_url"],
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
    title: "Careers Page Architecture",
    label: "Careers",
    route: "/careers",
    strapi_slug: "careers",
    category: "Corporate",
    description:
      "Recruitment and culture hub presenting employee value proposition, active hiring disciplines, comprehensive benefits, and diversity statements with deduplicated shared components.",
    child_widgets: [
      {
        id: "w-car-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Careers Value Proposition Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Subpage hero showcasing team energy and careers value proposition.",
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
      },
      {
        id: "w-car-1",
        position: 1,
        widget_key: "shared.accordion-split",
        widgets_title: "Why Join Culture Accordion",
        widgets_label: "Culture Accordion",
        category: "content",
        description:
          "Split layout pairing photographic showcase with interactive expandable culture values.",
        key_props: ["title", "description", "items", "image"],
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
        widgets_title: "Employee Testimonials Carousel",
        widgets_label: "Global Testimonials",
        category: "testimonials",
        description:
          "Canonical reusable testimonial slider used across Careers, Community, and Venues.",
        key_props: ["title", "subtitle", "testimonials_list"],
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
          "Interactive list or cards detailing active engineering tracks and openings.",
        key_props: ["title", "description", "job_disciplines"],
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
          "Modular 6-tile grid highlighting health, financial security, time off, and tuition aid.",
        key_props: ["title", "description", "cards"],
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
          "Formal corporate diversity pledge ensuring barrier-free career advancement.",
        key_props: ["title", "content"],
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
    title: "Community Page Architecture",
    label: "Community",
    route: "/community",
    strapi_slug: "community",
    category: "Corporate",
    description:
      "Municipal and civic stakeholder education page. Explains unobtrusive small-cell aesthetics, local permitting processes, and long-term public right-of-way stewardship.",
    child_widgets: [
      {
        id: "w-com-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Community Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Community subpage hero with municipality-oriented messaging.",
        key_props: ["title", "description", "background_image"],
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
          "Unified illustration component displaying small-cells-illustration.svg and technical specs.",
        key_props: [
          "title",
          "description",
          "illustration",
          "stats",
          "features",
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
          "Card grid exploring public safety, emergency dispatch, and economic growth.",
        key_props: ["title", "description", "cards"],
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
          "Municipal collaboration workflow highlighting transparency and safety codes.",
        key_props: ["title", "description", "steps"],
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
          "Verified testimonials from city managers, utilities, and civic engineers.",
        key_props: ["title", "subtitle", "testimonials_list"],
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
          "Accordion addressing RF emissions compliance, pole permits, and maintenance SLAs.",
        key_props: ["title", "description", "faqs"],
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
    title: "Solutions Page Architecture",
    label: "Solutions",
    route: "/solutions",
    strapi_slug: "solutions",
    category: "Solutions",
    description:
      "Deep technical walkthrough of Arium's core infrastructure offerings: Small Cells Densification, Distributed Antenna Systems (DAS), and industry-specific private wireless architectures.",
    child_widgets: [
      {
        id: "w-sol-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Solutions Overview Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "Solutions hero communicating multi-carrier and high-density capabilities.",
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
      },
      {
        id: "w-sol-1",
        position: 1,
        widget_key: "shared.small-cells",
        widgets_title: "Small Cells Densification Technical Split",
        widgets_label: "Small Cells Split",
        category: "flow",
        description:
          "Technical architecture for 5G mmWave/sub-6GHz densification using small-cells-illustration.svg.",
        key_props: [
          "title",
          "description",
          "illustration",
          "stats",
          "features",
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
          "High-capacity in-building coverage architecture using das-illustration.svg with optical remotes.",
        key_props: [
          "title",
          "description",
          "illustration",
          "stats",
          "features",
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
          "Accordion tabs detailing tailored engineering for Airports, Venues, Healthcare, and Commercial Real Estate.",
        key_props: ["title", "description", "industries"],
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
          "Closing conversion block with orbital graphics and CTA consultation buttons.",
        key_props: ["title", "description", "button_text", "button_link"],
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
    title: "Private Venues Architecture",
    label: "Private Venues",
    route: "/private-venues",
    strapi_slug: "private-venues",
    category: "Solutions",
    description:
      "Enterprise venue solution page illustrating turn-key in-building wireless connectivity, carrier funding models, and end-to-end service delivery processes.",
    child_widgets: [
      {
        id: "w-pv-0",
        position: 0,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Private Venues Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Compact subpage header with background gradient and prominent venue qualification CTA.",
        key_props: [
          "title",
          "description",
          "background_gradient",
          "cta_text",
          "cta_url",
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
        widgets_title: "4-Stage Service Delivery Process Timeline",
        widgets_label: "Process Section",
        category: "content",
        description:
          "Four-step progression outlining RF audit, design, commissioning, and NOC monitoring.",
        key_props: ["title", "description", "steps"],
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
        widget_key: "shared.gloabl-testimonails",
        widgets_title: "Commercial Venue Operator Testimonials",
        widgets_label: "Global Testimonials",
        position: 2,
        category: "testimonials",
        description:
          "Canonical testimonials slider highlighting venue operator and asset manager experiences.",
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
      },
      {
        id: "w-pv-3",
        position: 99,
        widget_key: "shared.global-cta",
        widgets_title: "Private Venues Partnership CTA Banner",
        widgets_label: "Sub-Page CTA",
        category: "cta",
        description:
          "Shared CTA banner inviting property managers to request an infrastructure assessment.",
        key_props: ["title", "description", "button_text", "button_url"],
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
    title: "Right of Ways Architecture",
    label: "Right of Ways",
    route: "/right-of-ways",
    strapi_slug: "right-of-ways",
    category: "Operations",
    description:
      "Municipal right-of-way deployment guide showcasing aesthetic street furniture, utility pole colocation, and standardized city permitting agreements.",
    child_widgets: [
      {
        id: "w-row-0",
        position: 1,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Right of Ways Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Subpage hero introducing municipal right-of-way co-location and utility agreements.",
        key_props: [
          "title",
          "description",
          "background_gradient",
          "cta_text",
          "cta_url",
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
          "Four-step municipal timeline: Site Survey, Master Lease Agreement, Construction, Ongoing Maintenance.",
        key_props: ["title", "description", "steps"],
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
          "Canonical testimonials slider with direct quotes from city engineers and utility managers.",
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
      },
      {
        id: "w-row-3",
        position: 4,
        widget_key: "shared.global-cta",
        widgets_title: "Right of Ways Consultation CTA Banner",
        widgets_label: "Sub-Page CTA",
        category: "cta",
        description:
          "Shared CTA banner encouraging city officials to connect for master leasing agreements.",
        key_props: ["title", "description", "button_text", "button_url"],
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
    title: "Where We Build Architecture",
    label: "Where We Build",
    route: "/where-we-build",
    strapi_slug: "where-we-build",
    category: "Operations",
    description:
      "National footprint showcase pairing high-contrast interactive US dot map illustrations with breakdowns of community streetscapes and high-density commercial venue deployments.",
    child_widgets: [
      {
        id: "w-where-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "National Footprint Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description:
          "National footprint hero displaying scale across nationwide markets.",
        key_props: ["title", "description", "background_image"],
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
        widgets_title: "Municipal Communities Footprint with US Dot Map",
        widgets_label: "Where Communities",
        category: "content",
        description:
          "Split layout pairing us-dot-map.svg vector illustration with community deployment data.",
        key_props: ["title", "description", "dot_map", "stats"],
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
          "Split layout highlighting enterprise venues, real estate portfolios, and coverage footprint.",
        key_props: ["title", "description", "image", "venue_types"],
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
    title: "Leadership Page Architecture",
    label: "Leadership",
    route: "/leadership",
    strapi_slug: "leadership",
    category: "Team",
    description:
      "Executive committee presentation utilizing the unified PeopleGlobalSection. Implements interactive modal/drawer bio views with zero code duplication between teams.",
    child_widgets: [
      {
        id: "w-lead-0",
        position: 0,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Executive Leadership Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Subpage hero introducing executive management and corporate stewardship.",
        key_props: ["title", "description", "background_gradient"],
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
          "Canonical team grid component supporting executive profiles and full-screen modal bio drawers.",
        key_props: ["members", "background_gradient", "columns"],
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
          "Shared CTA banner pointing prospective talent to open roles.",
        key_props: ["title", "description", "button_text", "button_url"],
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
    title: "Board of Directors Architecture",
    label: "Board of Directors",
    route: "/board-of-directors",
    strapi_slug: "board-of-directors",
    category: "Team",
    description:
      "Governance and fiduciary leadership roster reusing PeopleGlobalSection with board member profiles, committee appointments, and credentials.",
    child_widgets: [
      {
        id: "w-board-0",
        position: 0,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Board Governance Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Subpage hero introducing board governance and strategic advisory.",
        key_props: ["title", "description", "background_gradient"],
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
          "Shared canonical people section rendering board members and advisors with interactive bio drawer.",
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
      },
      {
        id: "w-board-2",
        position: 99,
        widget_key: "shared.global-cta",
        widgets_title: "Meet the Full Leadership Team CTA Banner",
        widgets_label: "Sub-Page CTA",
        category: "cta",
        description:
          "Shared CTA banner guiding visitors back to the executive leadership team view.",
        key_props: ["title", "description", "button_text", "button_url"],
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
    title: "Contact Page Architecture",
    label: "Contact",
    route: "/contact",
    strapi_slug: "contact",
    category: "Corporate",
    description:
      "Interactive consultation and inquiries portal with dynamic carrier interest routing, form validation, and direct Strapi submission endpoints.",
    child_widgets: [
      {
        id: "w-contact-0",
        position: 1,
        widget_key: "shared.sub-page-hero",
        widgets_title: "Contact Us Sub-Page Hero Banner",
        widgets_label: "Sub-Page Hero",
        category: "hero",
        description:
          "Subpage hero introducing contact and partnership channels.",
        key_props: ["title", "description", "background_gradient"],
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
          "Interactive form with topic selection, input validation, and submission handler.",
        key_props: ["topicOptions", "onSubmit", "isSubmitting"],
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
    title: "Dynamic Strapi CMS Page Architecture",
    label: "Dynamic [slug]",
    route: "/[slug]",
    strapi_slug: "[slug]",
    category: "Dynamic",
    description:
      "Catch-all Next.js route demonstrating editorial freedom. Marketing teams can assemble entirely custom pages from Strapi Dynamic Zones using combinePageSections() and WIDGET_REGISTRY.",
    child_widgets: [
      {
        id: "w-dyn-0",
        position: 0,
        widget_key: "shared.hero-banner",
        widgets_title: "Dynamic Page Hero Banner",
        widgets_label: "Hero Banner",
        category: "hero",
        description: "Dynamic page header populated from Strapi slug query.",
        key_props: ["title", "description", "background_image"],
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
          "Modular dynamic blocks resolved dynamically through the global WIDGET_REGISTRY.",
        key_props: ["__component", "PositionNumber", "data"],
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

import {
  StrapiWidgetPayload,
  WidgetResponseSchema,
} from "@/types/widget.types";

const ABOUT_HERO_PAYLOAD: StrapiWidgetPayload = {
  id: 110,
  title: " Building a more connected future",
  description:
    "We're working across the country to build the infrastructure that powers your most important connections.",
  max_width_title: "970px",
  max_width_description: null,
  tag: null,
  CTA_url: null,
  CTA_text: null,
  background_image_position: "center top",
  background_image: {
    id: 79,
    name: "6-about-us-3840x2160 (1).jpg",
    alternativeText: null,
    width: 3840,
    height: 2160,
    url: "https://d2919ce8l80osk.cloudfront.net/6_about_us_3840x2160_1_df8f9e8d47.jpg",
    mime: "image/jpeg",
  },
  __component: "shared.test-banner",
};

const CAREERS_TESTIMONIALS_PAYLOAD: StrapiWidgetPayload = {
  title: "Meet the Arium Networks Team ",
  cards: [
    {
      id: 1,
      person_name: "Gabe Villalobos",
      person_designation: "Project Manager",
      person_message:
        "At Arium Networks, you're surrounded by individuals who are experts in their respective fields that push you to want to grow and excel. You are heard and your opinions hold value.",
      card_footer_bg: "#bcf6f2",
    },
    {
      id: 2,
      person_name: "Emily Cates",
      person_designation: "Permitting Specialist",
      person_message:
        "Working here, I've been able to learn, grow, and feel truly valued. It has been incredibly rewarding—and thanks to the benefits, it even helped make starting my family possible.",
      card_footer_bg: "#d2c7ff",
    },
    {
      id: 3,
      person_name: "Anthony Price",
      person_designation: "Client Services Manager",
      person_message:
        "Working at Arium Networks is energizing because of the strong sense of ownership and accountability across the team. I get to move fast, solve challenges, and deliver outcomes that truly matter.",
      card_footer_bg: "#ffdac8",
    },
    {
      id: 4,
      person_name: "Jessica Fernandez",
      person_designation: "Senior External Affairs Manager",
      person_message:
        "The best part of my role is being surrounded by accomplished people across the organization, working toward the same shared goal of building better connectivity. That makes the work especially rewarding.",
      card_footer_bg: "#ffffca",
    },
  ],
  __component: "shared.gloabl-testimonails",
};

const PRIVATE_VENUES_HERO_PAYLOAD: StrapiWidgetPayload = {
  id: 80,
  background_gradient:
    "linear-gradient(135deg, rgb(245, 240, 255) 0%, rgb(237, 229, 255) 40%, rgb(221, 211, 255) 100%)",
  content_max_width: "960px",
  tag: null,
  title: "Bringing advanced connectivity to your property",
  description:
    "Our in-building solutions help private venues keep up with advances and technology, while supporting the connectivity demands of tenants and guests.",
  CTA_url: "/contact",
  CTA_text: "Contact Us",
  __component: "shared.inner-page-hero",
};

const PRIVATE_VENUES_PROCESS_PAYLOAD: StrapiWidgetPayload = {
  id: 38,
  title: "Our proven service delivery process",
  description:
    "Whether you operate a large stadium, commercial building, theme park, campus, or other private venue, we can work with you to design a distributed antenna system (DAS) or small cell network (SCN) that meets your unique connectivity needs.",
  process_stage: [
    { id: 113, stage_name: "Design", stage_icon_svg: null },
    { id: 114, stage_name: "Construction", stage_icon_svg: null },
    { id: 115, stage_name: "Optimization", stage_icon_svg: null },
  ],
  __component: "shared.process",
};

const PRIVATE_VENUES_CTA_PAYLOAD: StrapiWidgetPayload = {
  id: 63,
  CTA_url: "/contact",
  CTA_text: "Contact Us",
  prompt_to_cta:
    "To see how we can support your connectivity needs, reach out to our dedicated venues team.",
  background_gradient:
    "linear-gradient(135deg, rgb(255, 255, 202) 0%, rgb(255, 248, 225) 40%, rgb(255, 218, 200) 100%)",
  globe_illustration: {
    url: "https://d2919ce8l80osk.cloudfront.net/connection_globe_blue_b0853202f4.svg",
  },
  __component: "shared.global-cta",
};

const LEADERSHIP_PEOPLE_PAYLOAD: StrapiWidgetPayload = {
  id: 60,
  name: "Laurent “LT” Therivel",
  designation: "Chief Executive Officer",
  description:
    "Laurent Therivel is a seasoned industry executive with a proven track record of driving strategic growth, operational excellence, and shareholder value. As previous President and CEO of UScellular, he led with a strong focus on customer experience and financial results.\nBefore joining UScellular, LT served as CEO of AT&T Mexico and CFO of AT&T Business. Over his 12-year career at AT&T, he advanced through key leadership roles spanning commercial operations, corporate strategy, and general management.\n\nHis leadership journey began in the United States Marine Corps, where he served as a Communications Officer in Southeast Asia, earning the Naval Commendation Medal for leadership. LT left the Marines after achieving the rank of Captain.\nHe is committed to leadership development and co-founded Horizons, a program designed to prepare Texas A&M students for careers in professional services. LT holds a bachelor’s degree in Marketing from Texas A&M University and an MBA from Harvard Business School.",
  modal_upper_section_background: null,
  image: {
    id: 111,
    documentId: "rjxhx6jqcq4fcapuz2yms6w9",
    name: "Therivel_Laurent.jpg",
    alternativeText: null,
    width: 800,
    height: 640,
    formats: {
      small: {
        ext: ".jpg",
        url: "https://d2919ce8l80osk.cloudfront.net/small_Therivel_Laurent_3863d0127f.jpg",
        width: 500,
        height: 400,
      },
    },
    url: "https://d2919ce8l80osk.cloudfront.net/Therivel_Laurent_3863d0127f.jpg",
  },
  __component: "shared.people-global-section",
};

/**
 * Strapi CMS v5 Live Widget Response Payloads
 *
 * Mapped directly into `WIDGETS_LIST` (`data/widget.ts`) via the
 * `widgets_response` field on each widget entry according to `/docs`.
 */
export const WIDGETS_RESPONSES = {
  // ── HOME PAGE WIDGETS ────────────────────────────────────────────────────
  "shared.main-hero": {
    id: 21,
    title: "Build with clarity. <br/> Connect with confidence.",
    description:
      "We are the country's largest small cell provider, bringing densification and capacity services to the wireless industry. With a focus on clarity and precision, we design, build, and deploy the essential infrastructure that powers today's most advanced wireless networks.",
    font_color: "#ffffff",
    background_color: "#162047",
    scroll_text: " Scroll to explore",
    __component: "shared.main-hero",
  },

  "shared.background-feature-section": {
    id: 46,
    title: "Solving the toughest network challenges ",
    description:
      "Deploying a small cell or distributed antenna system (DAS) network involves careful planning, precision engineering, and efficient coordination. Whether in dense neighborhoods, difficult terrain, or high-traffic venues and buildings, our customers rely on our deep expertise and established relationships across the country to help them solve even the most unique coverage and capacity challenges.",
    CTA_text: null,
    CTA_url: null,
    title_color: null,
    description_color: null,
    background_image_desktop: {
      url: "https://d2919ce8l80osk.cloudfront.net/1_homepage_3840x2160_1_2dfd1d24f4.jpg",
      name: "1-homepage-3840x2160 (1).jpg",
      width: 3840,
      height: 2160,
    },
    background_image_mobile: {
      url: "https://d2919ce8l80osk.cloudfront.net/2_homepage_1080x1920_1_dd4ccd32eb.jpg",
      name: "2-homepage-1080x1920 (1).jpg",
      width: 1080,
      height: 1888,
    },
    FeatureCards: [
      {
        id: 45,
        title: "Design",
        description:
          "We identify the best network technology, equipment, and architecture designs based on a careful assessment of structure and required capacity.",
        title_color: "#00e8d9",
        description_color: null,
      },
      {
        id: 46,
        title: "Implement",
        description:
          "We bring together the right partners—coordinating and collaborating to deploy the necessary infrastructure.",
        title_color: "#00e8d9",
        description_color: null,
      },
      {
        id: 47,
        title: "Optimize",
        description:
          "We partner with leading firms to conduct radio frequency (RF) testing and optimization, ensuring the network continues to perform as expected.",
        title_color: "#00e8d9",
        description_color: null,
      },
    ],
    __component: "shared.background-feature-section",
  },

  "shared.detailed-card-grid": {
    id: 20,
    title: "The infrastructure that powers advanced connectivity ",
    description:
      "For over 15 years, we've been building and maintaining the infrastructure the wireless industry relies on. ",
    background_color: null,
    panel_cards: [
      {
        id: 43,
        title: "Small Cells",
        description:
          "Small cells are discreet, low-powered, fiber-connected antennas that enhance connectivity by providing targeted wireless coverage and capacity in public spaces—especially in dense populations or high-traffic areas like cities and suburbs.",
        CTA_text: "Explore more",
        CTA_url: "/solutions",
        text_color: "#ffffff",
        svg_code: "<svg ... inline SVG animation markup ...></svg>",
      },
      {
        id: 44,
        title: "Distributed Antenna Systems",
        description:
          "Distributed antenna systems (DAS) use small, strategically placed connection points, also called nodes, to meet the unique coverage and capacity needs of venues and indoor spaces like high-rises, hospitals, campuses, stadiums, resorts, and theme parks.",
        CTA_text: "Learn more",
        CTA_url: "/solutions",
        text_color: "#ffffff",
        svg_code: "<svg ... inline SVG animation markup ...></svg>",
      },
    ],
    __component: "shared.detailed-card-grid",
  },

  "shared.stats-with-image": {
    id: 18,
    title: "Scale and experience to match your ambition ",
    title_color: null,
    stat_illustration: {
      url: "https://d2919ce8l80osk.cloudfront.net/us_dot_map_faint_c104c6cb78.svg",
      name: "us-dot-map-faint.svg",
      width: 1985,
      height: 1080,
    },
    stats_card: [
      {
        id: 88,
        stat: "100K+",
        stat_color: "#162047",
        description: "Small cells on air or under contract",
        description_color: null,
        background_color: "#898cf3",
      },
      {
        id: 89,
        stat: "300+",
        stat_color: null,
        description: "DAS-connected venues and buildings",
        description_color: null,
        background_color: "#bcf6f2",
      },
      {
        id: 90,
        stat: "700+",
        stat_color: null,
        description: "Supported municipal networks",
        description_color: null,
        background_color: "#ffffff",
      },
      {
        id: 91,
        stat: "15+",
        stat_color: null,
        description: "Years of expertise",
        description_color: null,
        background_color: "#ffffca",
      },
      {
        id: 92,
        stat: "24/7",
        stat_color: null,
        description: "Monitoring via the NOC",
        description_color: null,
        background_color: "#ffdac8",
      },
    ],
    __component: "shared.stats-with-image",
  },

  "shared.image-gradient-split": {
    id: 17,
    title: "Keeping communities safe and connected ",
    title_color: "#ffffff",
    description:
      "We work closely with communities to balance the need for essential connectivity with the desire for thoughtfully designed infrastructure that integrates seamlessly with the existing streetscapes.",
    description_color: null,
    CTA_text: "Learn More",
    CTA_url: "/community",
    background_image_desktop: {
      url: "https://d2919ce8l80osk.cloudfront.net/3_homepage_3840x2560_1_55aaa94e34.jpg",
      name: "3-homepage-3840x2560 (1).jpg",
      width: 3840,
      height: 2560,
    },
    background_image_mobile: {
      url: "https://d2919ce8l80osk.cloudfront.net/4_homepage_1080x2340_1_ece90c9401.jpg",
      name: "4-homepage-1080x2340 (1).jpg",
      width: 1080,
      height: 2340,
    },
    section_pointers: [
      {
        id: 55,
        title: "Reliability",
        title_color: "#00e8d9",
        description:
          "Our infrastructure makes wireless coverage more accessible and reliable, so communities and businesses can stay connected to the people, apps and data they depend on.",
        description_color: null,
      },
      {
        id: 56,
        title: "Opportunity",
        title_color: "#00e8d9",
        description:
          "Advanced wireless connectivity helps communities support the technology of today—and tomorrow—while also attracting businesses that require flexible, uninterrupted access to remote data and cloud services.",
        description_color: null,
      },
      {
        id: 57,
        title: "Safety",
        title_color: "#00e8d9",
        description:
          "In an emergency, reliable wireless service ensures that 911 services remain available, and that police, firefighters and other first responders can access the essential data they need to do their jobs effectively.",
        description_color: null,
      },
    ],
    __component: "shared.image-gradient-split",
  },

  "shared.centered-image-cta": {
    id: 13,
    title: "Help us shape the future of connectivity ",
    title_color: null,
    description:
      "Our infrastructure powers the connected world we all rely on. By joining our team, you'll be at the center of it all, helping us shape the future of connectivity by playing a meaningful role in building the next generation of wireless technology.",
    description_color: "#ffffff",
    background_image: {
      url: "https://d2919ce8l80osk.cloudfront.net/5_homepage_3840x2160_1_f711267c6a.jpg",
      name: "5-homepage-3840x2160 (1).jpg",
      width: 3840,
      height: 2160,
    },
    CTA_text: "Join Us",
    CTA_url: "/careers",
    __component: "shared.centered-image-cta",
  },

  "shared.cta-with-graphic": {
    id: 12,
    title: "Where can we take your network?",
    title_color: null,
    description:
      "Building a new network? Densifying an existing one? Looking to improve coverage in a high-traffic venue or building? Let's talk about how we can help solve your infrastructure needs.",
    description_color: "#162047",
    CTA_text: "Contact Us",
    CTA_url: "/contact",
    globe_illustration_desktop: {
      url: "https://d2919ce8l80osk.cloudfront.net/connection_cta_c3455c1f75.svg",
      name: "connection-cta.svg",
      width: 500,
      height: 500,
    },
    globe_illustration_mobile: {
      url: "https://d2919ce8l80osk.cloudfront.net/connection_cta_mobile_7cec9a0783.svg",
      name: "connection-cta-mobile.svg",
      width: 500,
      height: 500,
    },
    background_color: "#d2c7ff",
    __component: "shared.cta-with-graphic",
  },

  // ── ABOUT PAGE WIDGETS ───────────────────────────────────────────────────
  "shared.hero-banner": ABOUT_HERO_PAYLOAD,
  "shared.hero-banner--about": ABOUT_HERO_PAYLOAD,

  "shared.content-with-side-graphic": {
    id: 19,
    title: "A story rooted in connection ",
    title_color: "#162047",
    description:
      "Our world depends on fast, reliable connectivity—from the way we interact with loved ones, educate our children, and drive business forward. More than 15 years ago, we began building the small cell and distributed antennae system (DAS) infrastructure that ensures wireless services works effectively, even in the most challenging locations. Across the country, we're building dense networks and increasing capacity, enhancing connectivity in high-demand areas. \n<br/>\n<br/>\nWe make the process of designing and deploying wireless networks as straightforward and predictable as possible, providing a clear path forward that supports your vision long into the future.\n",
    description_color: null,
    background_color:
      "linear-gradient(135deg, rgb(245, 240, 255) 0%, rgb(237, 229, 255) 40%, rgb(221, 211, 255) 100%)",
    globe_illustration: {
      id: 51,
      name: "live_connection-illustration.svg",
      alternativeText: null,
      width: 520,
      height: 733,
      url: "https://d2919ce8l80osk.cloudfront.net/live_connection_illustration_4ac2311199.svg",
      mime: "image/svg+xml",
    },
    __component: "shared.content-with-side-graphic",
  },

  "shared.timeline": {
    id: 32,
    title: "A small cell leader from the beginning ",
    description:
      "We've been building small cell and DAS networks since the technology's inception, giving us a deep expertise that is embedded throughout our organization.\n",
    timeline_cards: [
      {
        id: 133,
        year_range: "2010-2011",
        year_range_color: "#009e94",
        badge_text: null,
        description:
          "Acquisition of NewPath and NextG establishes early leadership in DAS and small cell infrastructure.\n\n",
      },
      {
        id: 134,
        year_range: "2011-2020",
        year_range_color: "#7b6ab8",
        badge_text: null,
        description:
          "Platform expansion and operational integration across thousands of deployed nodes.",
      },
      {
        id: 135,
        year_range: "2020-2022",
        year_range_color: "#c48e68",
        badge_text: null,
        description:
          "Long-term carrier commitments add 50,000 small cells over five years.",
      },
      {
        id: 136,
        year_range: "2026",
        year_range_color: "#009e94",
        badge_text: "Live",
        description:
          "Formation of Arium Networks with 100K+ small cells on-air or under contract.",
      },
    ],
    __component: "shared.timeline",
  },

  "shared.stats-cards": {
    id: 20,
    title: "Why our infrastructure matters",
    description: null,
    cards: [
      {
        id: 62,
        stats: "39 B",
        description: "Expected number of IoT devices by 2030",
        badge: "IoT Analytics, 2025",
        background_color:
          "linear-gradient(145deg, #e6faf8 0%, #d0f5f1 40%, #c2f0eb 100%) !important",
      },
      {
        id: 63,
        stats: "21 GB",
        description: "Average monthly mobile data consumption per capita",
        badge: "Ericsson, 2025",
        background_color:
          "linear-gradient(145deg, #eeeafc 0%, #e2dbf8 40%, #d8d0f4 100%) !important",
      },
      {
        id: 64,
        stats: "89 %",
        description:
          "Expected share of 5G mobile connections in North America by 2030",
        badge: "GSMA, 2025",
        background_color:
          "linear-gradient(145deg, #fef3e8 0%, #fce9d5 40%, #f9e0c8 100%) !important",
      },
    ],
    __component: "shared.stats-cards",
  },

  "shared.commitments": {
    id: 17,
    title: "Our Commitments to Our Customers",
    description:
      "As part of EQT's Active Core Infrastructure fund, we have the support and financial capacity to invest with conviction. As opposed to many other private equity backed companies, we do not have any timeframe for liquidity, so we can invest and operate for the long term.",
    commitment_statement:
      "We are guided by a clear set of commitments that shape how we partner and deliver value:",
    background_overaly:
      "linear-gradient(90deg, #101830eb 0%, #10183099 30%, #1018301a 60%)",
    background_image: {
      id: 15,
      name: "live_about_commitments_panoramic.webp",
      alternativeText: null,
      width: 1703,
      height: 547,
      url: "https://d2919ce8l80osk.cloudfront.net/live_about_commitments_panoramic_3c6be79532.webp",
      mime: "image/webp",
    },
    commitment_cards: [
      {
        id: 51,
        title: "We are customer-first",
        description:
          "We put customers at the center of every decision, delivering value through innovation, investment, and purpose-build network solutions.",
        top_line_color: "#00b4a0",
      },
      {
        id: 52,
        title: "We are nimble and ready to invest",
        description:
          "We operate with speed and flexibility, putting capital to work where it can drive the most impact.",
        top_line_color: "#d4882e",
      },
      {
        id: 53,
        title: "We are built for the long haul",
        description:
          "We're committed to long-term ownership and lasting partnerships, investing in the infrastructure that will power the future of connectivity.",
        top_line_color: "#7c5cbf",
      },
    ],
    __component: "shared.commitments",
  },

  "shared.image-gradient-split--about": {
    id: 21,
    title: "Help Us Shape the Future of Connectivity ",
    title_color: "#ffffff",
    description:
      "Our infrastructure powers the connected world we all rely on. By joining our team, you'll be at the center of it all, helping us shape the future of connectivity by playing a meaningful role in building the next generation of wireless technology.",
    description_color: null,
    CTA_text: "Explore Careers",
    CTA_url: "/careers",
    section_pointers: [
      {
        id: 67,
        title: "Leadership",
        title_color: "#00e8d9",
        description:
          "We're trusted leaders in the industry and we value people who want to help us move fast, make a difference, and solve difficult challenges.",
        description_color: null,
      },
      {
        id: 68,
        title: "Passion",
        title_color: "#00e8d9",
        description:
          "Our team cares deeply about the businesses and communities we serve. They understand that what we do makes a true difference in people's lives.",
        description_color: null,
      },
      {
        id: 69,
        title: "Optimism",
        title_color: "#00e8d9",
        description:
          "Our team believes in the transformative power of wireless technology and is excited to play a meaningful role in ushering in a new generation of innovation.",
        description_color: null,
      },
    ],
    background_image_desktop: {
      id: 110,
      name: "8-about-us-2560x1440 (2).jpg",
      url: "https://d2919ce8l80osk.cloudfront.net/8_about_us_2560x1440_2_c5553a1437.jpg",
    },
    background_image_mobile: {
      id: 81,
      name: "9-about-us-1080x1920 (1).jpg",
      url: "https://d2919ce8l80osk.cloudfront.net/9_about_us_1080x1920_1_42a4fb37e4.jpg",
    },
    __component: "shared.image-gradient-split",
  },

  // ── CAREERS PAGE WIDGETS ─────────────────────────────────────────────────
  "shared.hero-banner--careers": {
    title: "Join our team",
    description:
      "Advance your career and help shape the future of connectivity.",
    tag: null,
    CTA_text: "Explore opportunities",
    CTA_url: "https://jobs.dayforcehcm.com/arium/CANDIDATEPORTAL",
    background_image_position: "center center",
    max_width_title: null,
    max_width_description: null,
    background_image: {
      url: "/images/heroes/careers.png",
      name: "careers.png",
      alternativeText: "Arium Networks team working together",
    },
    __component: "shared.test-banner",
  },

  "shared.accordion-split": {
    title: "Why Join Arium Networks? ",
    title_color: null,
    description:
      "Wireless connectivity is entering a new era, and our infrastructure is at the center of it. Across communities nationwide, we design, build, and support networks that wireless carriers rely on every day.<br/><br/>When you join our team, you're joining an organization that cares deeply about its people and you'll be contributing to the critical infrastructure that keeps people connected, informed, and safe.",
    description_color: null,
    background_color:
      "linear-gradient(135deg, rgb(245, 240, 255) 0%, rgb(237, 229, 255) 40%, rgb(221, 211, 255) 100%)",
    template_grid_columns: "b. 1.35fr 1fr",
    accordian_cards: [
      {
        id: 1,
        title: "Be Part of a Team",
        description:
          "We're building more than networks: we're building a team that takes pride and ownership in what we create together. As we grow, every teammate helps shape how we work, collaborate, and succeed. Here, culture isn't handed down—it's shaped by the people who live it every day.",
        title_color: "#ffffff",
        title_color_hover: "#00e8d9",
        description_color: "#ffffff",
        background_color: "#162047",
        svg_code: null,
      },
      {
        id: 2,
        title: "Shape the Future",
        description:
          "We're at a pivotal moment in the evolution of wireless infrastructure. New technologies are increasing demands on networks, coverage, and capacity. As part of our team, you'll help design and deliver solutions that meet these challenges while influencing how we work, innovate, and grow as an organization.",
        title_color: "#ffffff",
        title_color_hover: "#00e8d9",
        description_color: "#ffffff",
        background_color: "#162047",
        svg_code: null,
      },
      {
        id: 3,
        title: "Make an Impact",
        description:
          "As a fast-growing, privately held company, we move with purpose and make decisions focused on long-term success. Our teammates are trusted to take ownership, contribute ideas, and turn plans into execution.",
        title_color: "#ffffff",
        title_color_hover: "#00e8d9",
        description_color: "#ffffff",
        background_color: "#162047",
        svg_code: null,
      },
      {
        id: 4,
        title: "Advance Your Career",
        description:
          "Backed by EQT, a leading private equity firm, we combine the momentum of a growing organization with strong financial support. We invest in our people, systems, and infrastructure to support sustainable growth—creating opportunities for you to develop new skills, assume greater responsibility, and grow your career.",
        title_color: "#ffffff",
        title_color_hover: "#00e8d9",
        description_color: "#ffffff",
        background_color: "#162047",
        svg_code: null,
      },
      {
        id: 5,
        title: "Improve Everyday Connections",
        description:
          "Our infrastructure supports how people live, work, and stay connected. We take that responsibility seriously. Your expertise and perspective will contribute to the reliability, safety and reach of the networks communities and businesses depend on every day.",
        title_color: "#ffffff",
        title_color_hover: "#00e8d9",
        description_color: "#ffffff",
        background_color: "#162047",
        svg_code: null,
      },
    ],
    __component: "shared.accordion-split",
  },

  "shared.gloabl-testimonails": CAREERS_TESTIMONIALS_PAYLOAD,
  "shared.gloabl-testimonails--careers": CAREERS_TESTIMONIALS_PAYLOAD,

  "shared.highlight-list": {
    title: "Our Core Job Areas",
    description:
      "Our teams work cross-functionally to design, build, and support wireless infrastructure. These core job types include:",
    CTA_text: "Explore opportunities",
    CTA_url: "https://jobs.dayforcehcm.com/arium/CANDIDATEPORTAL",
    image: {
      url: "/images/team/team.png",
      name: "team.png",
      alternativeText: "Arium Networks team collaborating in a modern office",
    },
    items: [
      { id: 1, title: "Network Engineering & Deployment" },
      { id: 2, title: "Construction & Field Operations" },
      { id: 3, title: "Technology, Systems & Data" },
      { id: 4, title: "Corporate & Shared Services" },
      { id: 5, title: "Commercial, Strategy & Project Management" },
    ],
    __component: "shared.highlight-list",
  },

  "shared.benefits": {
    title: "Our Total Benefits Package ",
    description:
      "We offer competitive compensation and benefits designed to support you at work and in life. Full-time team members are eligible for a comprehensive benefits package that includes:",
    bottom_message:
      "We are an equal opportunity employer. We recruit, hire and promote without regard to race, color, religion, creed, national origin or ancestry, ethnicity, sex (including pregnancy or pregnancy related conditions), gender (including gender identity and expression, and status as a transgender individual), sexual orientation, age, physical or mental disability, citizenship, past, current or prospective service in the uniformed services, genetic information, marital status or any other characteristic protected under applicable federal, state or local law.",
    benefits_card: [
      {
        id: 1,
        title: "Healthcare",
        description:
          "Full medical coverage, including dental and vision plans and telehealth",
        title_color: "#009886",
        icon: "/images/svg-images/healthcare-benefit.svg",
      },
      {
        id: 2,
        title: "Financial Security",
        description:
          "Competitive 401(k), tuition reimbursement, financial counseling and funded healthcare savings accounts",
        title_color: "#009886",
        icon: "/images/svg-images/financial-security.svg",
      },
      {
        id: 3,
        title: "Time Off",
        description:
          "Flexible paid time off for vacations, holidays, leaves of absence, or personal needs",
        title_color: "#009886",
        icon: "/images/svg-images/time-off.svg",
      },
      {
        id: 4,
        title: "Family Support",
        description:
          "Paid maternity and paternity leave, adoption benefits, and milk shipping",
        title_color: "#009886",
        icon: "/images/svg-images/family-support.svg",
      },
    ],
    __component: "shared.benefits",
  },

  "shared.eeo": {
    bottom_message:
      "We are an equal opportunity employer. We recruit, hire and promote without regard to race, color, religion, creed, national origin or ancestry, ethnicity, sex (including pregnancy or pregnancy related conditions), gender (including gender identity and expression, and status as a transgender individual), sexual orientation, age, physical or mental disability, citizenship, past, current or prospective service in the uniformed services, genetic information, marital status or any other characteristic protected under applicable federal, state or local law.",
    __component: "shared.eeo",
  },

  // ── COMMUNITY PAGE WIDGETS ───────────────────────────────────────────────
  "shared.hero-banner--community": {
    title: "Building the connections your community depends on",
    description:
      "We work in communities like yours to ensure you stay on the cutting edge.",
    tag: null,
    CTA_text: null,
    CTA_url: null,
    background_image_position: "center center",
    max_width_title: "1100px",
    max_width_description: "800px",
    background_image: {
      url: "/images/heroes/community.png",
      name: "community.png",
      alternativeText: "Community members enjoying a park",
    },
    __component: "shared.test-banner",
  },

  "shared.illustration-split": {
    title: "What is a small cell?",
    title_color: null,
    description:
      "<p>When you are driving on a major highway, you can see large cell towers along the road. These towers manage the wireless traffic for miles around them. As wireless traffic grows, the signal becomes strained — much like a traffic jam on a highway.</p><p>Small cells are compact, discreet antennas often mounted on streetlights or utility poles. They boost wireless coverage and capacity in the areas that need it most. Most people don't even notice them.</p><p>Think of small cells as adding extra lanes to the wireless highway — reducing congestion and helping everyone stay connected.</p>",
    description_color: null,
    illustration_image_alignment: "Right",
    illustration_image: {
      url: "/images/svg-images/small-cells-illustration.svg",
      name: "small-cells-illustration.svg",
    },
    show_bottom_divider: false,
    statistics: [],
    background:
      "radial-gradient(circle, #fff 0%, #f5f0ff 40%, #ebe2ff 75%, #dfd4ff 100%)",
    __component: "shared.illustration-split",
  },

  "shared.image-card-grid": {
    title: "Why small cells matter",
    title_color: null,
    icon_card: [
      {
        id: 1,
        title: "Reliability",
        description:
          "More targeted coverage in hard-to-reach areas minimizes dead spots and ensures consistent connectivity across your community.",
        image: { url: "/images/icon-card-grid/check-icon.webp" },
        title_color: null,
        description_color: null,
      },
      {
        id: 2,
        title: "Innovation",
        description:
          "Increased speeds and capacity ensure people get the most from the latest wireless devices and technologies.",
        image: { url: "/images/icon-card-grid/nodes-icon.webp" },
        title_color: null,
        description_color: null,
      },
      {
        id: 3,
        title: "Safety",
        description:
          "Stronger coverage keeps first responders connected to critical information and increases 911 call availability.",
        image: { url: "/images/icon-card-grid/shield-icon.webp" },
        title_color: null,
        description_color: null,
      },
    ],
    __component: "shared.image-card-grid",
  },

  "shared.background-feature-section--community": {
    title: "How we work in your community",
    title_color: null,
    description:
      "<p>We are expanding our small cell network across every major U.S. market. We use a structured, collaborative process that balances the needs of local communities, municipalities, and wireless carriers.</p><p>This means building the vital connectivity that meets current needs while being ready for future technologies and growth.</p>",
    description_color: null,
    CTA_text: "Learn More",
    CTA_url: "/right-of-ways",
    background_image_desktop: {
      url: "/images/backgrounds/how-we-work.png",
      name: "how-we-work.png",
    },
    background_image_mobile: null,
    FeatureCards: [],
    __component: "shared.background-feature-section",
  },

  "shared.gloabl-testimonails--community": {
    title: "Communities support advanced connectivity",
    cards: [
      {
        id: 1,
        person_name: "Dewitt",
        person_designation: "President & CEO, Downtown Austin Alliance",
        person_message:
          "Wireless connectivity is so critically important in today's economy. It's like roadways. It's infrastructure that we have to have.\"",
        card_footer_bg: "#bcf6f2",
      },
      {
        id: 2,
        person_name: "Rob",
        person_designation: "City Sustainability Director",
        person_message:
          "It's not just the technology and the connectivity, but it's how we work, too.\"",
        card_footer_bg: "#ffdac8",
      },
      {
        id: 3,
        person_name: "Kari",
        person_designation: "Real Estate Agent",
        person_message: 'I use my phone as my lifeline to get my job done."',
        card_footer_bg: "#d2c7ff",
      },
    ],
    __component: "shared.gloabl-testimonails",
  },

  "shared.faq": {
    title: "Frequently asked questions",
    title_color: null,
    faq_data: [
      {
        id: 1,
        question: "Why is Arium Networks building in my neighborhood?",
        answer:
          "When a road gets too congested, you can't just keep adding cars — you have to add more lanes. Similarly, when there are too many wireless devices in an area, the existing network gets overloaded. Small cells add more capacity and bandwidth to support the growing demand for wireless connectivity in your neighborhood.",
        question_color: null,
        answer_color: null,
        question_color_hover: null,
      },
      {
        id: 2,
        question:
          "I have full bars on my mobile phone. Why do we need more infrastructure?",
        answer:
          "Full bars indicate signal strength, not network capacity. Even with a strong signal, you may experience slow speeds in crowded areas. Small cells provide additional capacity to ensure fast, reliable connectivity for everyone.",
        question_color: null,
        answer_color: null,
        question_color_hover: null,
      },
      {
        id: 3,
        question: "Why is Arium permitted in the public right of way?",
        answer:
          "Arium Networks holds CLEC (Competitive Local Exchange Carrier) status in most states, which provides us with the legal right to install telecommunications equipment on existing infrastructure in the public right of way, such as utility poles and streetlights.",
        question_color: null,
        answer_color: null,
        question_color_hover: null,
      },
      {
        id: 4,
        question:
          "How does Arium Networks get approval to work in my community?",
        answer:
          "We follow a structured process that includes working with local government, submitting permit applications, and ensuring compliance with all local, state, and federal regulations. We coordinate closely with municipal officials throughout the entire process.",
        question_color: null,
        answer_color: null,
        question_color_hover: null,
      },
      {
        id: 5,
        question: "What are the RF emission levels of your equipment?",
        answer:
          "Our equipment operates well within the safety limits established by the FCC. Small cells emit significantly lower RF energy than traditional cell towers because they cover smaller areas and use less power.",
        question_color: null,
        answer_color: null,
        question_color_hover: null,
      },
      {
        id: 6,
        question: "Should I be worried about RF emissions?",
        answer:
          "Small cells comply with all FCC regulations for radio frequency emissions. The FCC's safety standards incorporate significant safety margins and are based on decades of research. Small cells operate at a fraction of the power levels used by traditional cell towers.",
        question_color: null,
        answer_color: null,
        question_color_hover: null,
      },
    ],
    __component: "shared.faq",
  },

  // ── SOLUTIONS PAGE WIDGETS ───────────────────────────────────────────────
  "shared.hero-banner--solutions": {
    id: 111,
    max_width_title: "1400px",
    max_width_description: "920px",
    tag: null,
    title: "Infrastructure for tomorrow's wireless data demands",
    description:
      "As new technologies emerge, we're building and scaling wireless networks that will support evolving demand—today and what comes next.",
    CTA_url: "/contact",
    CTA_text: "Contact Us",
    background_image_position: "center top",
    background_image: {
      id: 83,
      name: "10-solutions-3840x2160 (1).jpg",
      alternativeText: null,
      width: 3840,
      height: 2160,
      url: "https://d2919ce8l80osk.cloudfront.net/10_solutions_3840x2160_1_21999ab3a9.jpg",
      mime: "image/jpeg",
    },
    __component: "shared.test-banner",
  },

  "shared.small-cells": {
    id: 59,
    title: "Small Cells ",
    title_color: "#162047",
    description:
      "For more than 15 years, we've partnered with mobile network operators (MNOs) to design and deploy small cells that add targeted coverage and capacity. Our discrete antennas help communities and wireless carriers keep pace with growing demand.\n<br/>\n<br/>\nOur small cell networks strengthen everyday connectivity and critical communication—supporting faster speeds and more reliable service. ",
    description_color: "#162047",
    illustration_image_alignment: "Right",
    illustration_image: {
      id: 19,
      name: "live_small-cells-illustration-strapi.svg",
      width: 240,
      height: 240,
      url: "https://d2919ce8l80osk.cloudfront.net/live_small_cells_illustration_9273cba36b.svg",
      mime: "image/svg+xml",
    },
    statistics: [
      {
        id: 66,
        stat: "100K+",
        description: "small cells on air or under contract",
        stat_color: "#7c5cbf",
      },
      {
        id: 67,
        stat: "700+",
        description: "municipalities served",
        stat_color: "#7c5cbf",
      },
    ],
    show_bottom_divider: true,
    __component: "shared.illustration-split",
  },

  "shared.das": {
    id: 60,
    title: "Distributed Antenna Systems",
    title_color: "#162047",
    description:
      "Our distributed antenna systems (DAS) deliver the coverage and capacity needed in complex indoor and venue environments—arenas, stadiums, theme parks, hospitals, airports, campuses, and more—so visitors, staff, and operations stay connected.\n<br/>\n<br/>\nWe take the lead in building and managing the network, leveraging our longstanding relationships with wireless carriers, vendors, and government agencies. ",
    description_color: "#162047",
    illustration_image_alignment: "Left",
    illustration_image: {
      id: 20,
      name: "live_das-illustration-strapi.svg",
      width: 240,
      height: 240,
      url: "https://d2919ce8l80osk.cloudfront.net/live_das_illustration_486619e866.svg",
      mime: "image/svg+xml",
    },
    statistics: [
      {
        id: 68,
        stat: "300+",
        description: "premier venues across the country",
        stat_color: "#7c5cbf",
      },
    ],
    show_bottom_divider: true,
    __component: "shared.illustration-split",
  },

  "shared.industry": {
    id: 34,
    title: "Industries That Require Advanced Connectivity  ",
    title_color: null,
    description:
      "We partner with industries like yours, designing the right mix of small cells and DAS to meet performance, aesthetic, and operational requirements, all while leveraging our long-standing relationships with MNOs, utilities, public safety agencies, and more. ",
    description_color: null,
    background_color: null,
    template_grid_columns: "a. 1.4fr .9fr",
    accordian_cards: [
      {
        id: 216,
        title: "Stadiums & Arenas",
        description:
          "We enable reliable wireless service for a better guest experience including enhanced fan engagement, public safety, mobile ticketing, concessions, and event operations.",
        title_color: null,
        title_color_hover: "#00e8d9",
        description_color: null,
        background_color: null,
        svg_code: '<svg viewBox="0 0 288 288" class="ind-icon-svg">...</svg>',
      },
      {
        id: 217,
        title: "Amusement Parks, Hospitality & Entertainment",
        description:
          "Our solutions provide high-quality wireless coverage for your guests, improving experience satisfaction, operational efficiency, and smart property technologies.",
        title_color: null,
        title_color_hover: "#00e8d9",
        description_color: null,
        background_color: null,
        svg_code: '<svg viewBox="0 0 288 288" class="ind-icon-svg">...</svg>',
      },
      {
        id: 218,
        title: "Higher Education",
        description:
          "Our solutions enable digital learning and enhance campus safety by keeping faculty and students connected.",
        title_color: null,
        title_color_hover: "#00e8d9",
        description_color: null,
        background_color: null,
        svg_code: '<svg viewBox="0 0 288 288" class="ind-icon-svg">...</svg>',
      },
      {
        id: 219,
        title: "Commercial Real Estate",
        description:
          "We can help you improve connectivity on your property while accommodating the technologies that make your building more functional, efficient, and tenant friendly.",
        title_color: null,
        title_color_hover: "#ffffff",
        description_color: null,
        background_color: null,
        svg_code: '<svg viewBox="0 0 288 288" class="ind-icon-svg">...</svg>',
      },
      {
        id: 220,
        title: "Healthcare",
        description:
          "Our solutions improve connectivity for staff, patients, and medical professionals.",
        title_color: null,
        title_color_hover: "#00e8d9",
        description_color: null,
        background_color: null,
        svg_code: '<svg viewBox="0 0 288 288" class="ind-icon-svg">...</svg>',
      },
      {
        id: 221,
        title: "State & Local Government",
        description:
          "Municipalities can improve connectivity for their constituents and help agencies better serve their residents and first responders.",
        title_color: null,
        title_color_hover: "#00e8d9",
        description_color: "#ffffff",
        background_color: null,
        svg_code: '<svg viewBox="0 0 288 288" class="ind-icon-svg">...</svg>',
      },
      {
        id: 222,
        title: "Airports",
        description:
          "We enable connectivity that supports the high data demand for travelers, busy staff and back-of-house operations, and mobile ticketing, providing a better guest experience and enhanced safety.",
        title_color: "#ffffff",
        title_color_hover: "#00e8d9",
        description_color: "#ffffff",
        background_color: null,
        svg_code: '<svg viewBox="0 0 288 288" class="ind-icon-svg">...</svg>',
      },
    ],
    __component: "shared.accordion-split",
  },

  "shared.cta-with-graphic--solutions": {
    id: 15,
    title: "A Balanced Approach",
    title_color: null,
    description:
      "We work closely with you to find the solution that meets your connectivity needs, while considering your priorities like the surrounding physical aesthetics.",
    description_color: null,
    CTA_text: "Learn more",
    CTA_url: "/where-we-build",
    background_color: "#d2c7ff",
    globe_illustration_desktop: {
      id: 54,
      name: "connection-cta.svg",
      width: 500,
      height: 500,
      url: "https://d2919ce8l80osk.cloudfront.net/connection_cta_c3455c1f75.svg",
      mime: "image/svg+xml",
    },
    globe_illustration_mobile: {
      id: 55,
      name: "connection-cta-mobile.svg",
      width: 500,
      height: 500,
      url: "https://d2919ce8l80osk.cloudfront.net/connection_cta_mobile_7cec9a0783.svg",
      mime: "image/svg+xml",
    },
    __component: "shared.cta-with-graphic",
  },

  // ── PRIVATE VENUES PAGE WIDGETS ──────────────────────────────────────────
  "shared.sub-page-hero": PRIVATE_VENUES_HERO_PAYLOAD,
  "shared.sub-page-hero--private-venues": PRIVATE_VENUES_HERO_PAYLOAD,

  "shared.process": PRIVATE_VENUES_PROCESS_PAYLOAD,
  "shared.process--private-venues": PRIVATE_VENUES_PROCESS_PAYLOAD,

  "shared.gloabl-testimonails--private-venues": {
    id: 59,
    title: "What venue operators are saying",
    cards: [
      {
        id: 183,
        person_name: "David L.",
        person_message:
          "Fans today want to share their experiences in real-time. Without reliable in-building connectivity, it doesn't matter how great the event is; they feel disconnected. Adding a dedicated small cell network transformed our venue.",
        person_designation: "Director of Operations, Major Sports Arena",
        card_footer_bg: null,
      },
      {
        id: 184,
        person_name: "Maria C.",
        person_message:
          "Our property is a mixed-use development, and tenants expect seamless cellular coverage from the parking garage to the top floor. Custom wireless solutions proved to be the key differentiator for leasing.",
        person_designation: "Commercial Real Estate Developer",
        card_footer_bg: null,
      },
    ],
    __component: "shared.gloabl-testimonails",
  },

  "shared.global-cta": PRIVATE_VENUES_CTA_PAYLOAD,
  "shared.global-cta--private-venues": PRIVATE_VENUES_CTA_PAYLOAD,

  // ── RIGHT OF WAYS PAGE WIDGETS ───────────────────────────────────────────
  "shared.sub-page-hero--right-of-ways": {
    id: 79,
    background_gradient:
      "linear-gradient(135deg, rgb(255, 245, 238) 0%, rgb(255, 232, 214) 40%, rgb(255, 218, 200) 100%)",
    content_max_width: null,
    tag: null,
    title: "Connectivity that moves communities forward ",
    description:
      "As technology advances, small cells keep your community connected to what matters.",
    CTA_url: "/contact",
    CTA_text: "Contact Us",
    __component: "shared.inner-page-hero",
  },

  "shared.process--right-of-ways": {
    id: 37,
    title: "Our structured process for building small cells",
    description:
      "Every community is different, but we have a proven process for navigating complexities and designing infrastructure to meet your wireless connectivity needs.",
    process_stage: [
      { id: 107, stage_name: "Assessment", stage_icon_svg: null },
      { id: 108, stage_name: "Planning", stage_icon_svg: null },
      { id: 109, stage_name: "Construction", stage_icon_svg: null },
    ],
    __component: "shared.process",
  },

  "shared.gloabl-testimonails--right-of-ways": {
    id: 54,
    title: "What community leaders are saying",
    cards: [
      {
        id: 1,
        person_name: "Kurt Woehr",
        person_message:
          'Arium Networks has been a great partner. They understand how important it is to be collaborative and get the right inputs, so that we have a great design."',
        person_designation: "Director of RAN Engineering, AT&T",
        card_footer_bg: "#bcf6f2",
      },
      {
        id: 2,
        person_name: "Joe Slowik",
        person_message:
          'Arium Networks has the skills and the techniques to work hand-in-hand with the city and implement a project of this scale."',
        person_designation: "Director of Operations, Verizon",
        card_footer_bg: "#d2c7ff",
      },
    ],
    __component: "shared.gloabl-testimonails",
  },

  "shared.global-cta--right-of-ways": {
    id: 62,
    CTA_url: "/contact",
    CTA_text: "Contact Us",
    prompt_to_cta:
      "To see how we can support your infrastructure needs, reach out to our dedicated municipal team.",
    background_gradient: null,
    globe_illustration: {
      url: "https://d2919ce8l80osk.cloudfront.net/connection_globe_blue_b0853202f4.svg",
    },
    __component: "shared.global-cta",
  },

  // ── WHERE WE BUILD PAGE WIDGETS ──────────────────────────────────────────
  "shared.hero-banner--where-we-build": {
    id: 112,
    max_width_title: "1400px",
    max_width_description: "920px",
    tag: null,
    title: "Connected communities, connected lives",
    description:
      "We build wireless networks in the public right of way and inside private venues, helping keep communities connected, safe, and ready for what's next.",
    CTA_url: "/contact",
    CTA_text: "Contact Us",
    background_image_position: "center top",
    background_image: {
      id: 104,
      name: "21-where-we-build-2560x1440 (1).jpg",
      url: "https://d2919ce8l80osk.cloudfront.net/21_where_we_build_2560x1440_1_b7792147b6.jpg",
      mime: "image/jpeg",
    },
    __component: "shared.test-banner",
  },

  "shared.communities": {
    id: 20,
    title: "Communities",
    title_color: "#162047",
    description:
      "We're installing small cells along roadways, sidewalks, and the public right of way to expand wireless coverage and capacity. As technology advances and connectivity needs grow, our solutions help communities by improving service in busy neighborhoods, increasing data speeds, and supporting the latest tech residents rely on.",
    description_color: "#162047",
    CTA_text: "Learn more",
    CTA_url: "/right-of-ways",
    image_alignment: "Right",
    background_color:
      "linear-gradient(135deg, rgb(255, 245, 239) 0%, rgb(255, 218, 200) 40%, rgb(255, 240, 232) 100%)",
    image: {
      url: "https://d2919ce8l80osk.cloudfront.net/community-hero.png",
    },
    __component: "shared.image-split",
  },

  "shared.venues": {
    id: 21,
    title: "Buildings and Venues",
    title_color: "#162047",
    description:
      "Our distributed antenna systems (DAS) and small cell networks bring advanced connectivity to in-building environments. We partner with large stadiums, commercial buildings, theme parks, campuses, and other private venues, helping customers stay connected in even the most crowded or hard-to-reach areas.",
    description_color: "#162047",
    CTA_text: "Learn more",
    CTA_url: "/private-venues",
    image_alignment: "Left",
    background_color:
      "linear-gradient(135deg, rgb(228, 250, 248) 0%, rgb(188, 246, 242) 40%, rgb(232, 251, 249) 100%)",
    image: {
      url: "https://d2919ce8l80osk.cloudfront.net/venue-hero.png",
    },
    __component: "shared.image-split",
  },

  // ── LEADERSHIP PAGE WIDGETS ──────────────────────────────────────────────
  "shared.sub-page-hero--leadership": {
    id: 74,
    background_gradient:
      "linear-gradient(135deg, rgb(184, 169, 240) 0%, rgb(210, 199, 255) 40%, rgb(196, 181, 247) 70%, rgb(221, 213, 255) 100%)",
    content_max_width: "960px",
    tag: null,
    title: "Our Leadership",
    description:
      "Seasoned industry leaders driving strategic growth<br/>\nand operational excellence.",
    CTA_url: null,
    CTA_text: null,
    __component: "shared.inner-page-hero",
  },

  "shared.people-global-section": LEADERSHIP_PEOPLE_PAYLOAD,
  "shared.people-global-section--leadership": LEADERSHIP_PEOPLE_PAYLOAD,

  "shared.global-cta--leadership": {
    id: 60,
    CTA_url: "/careers",
    CTA_text: "Explore Careers",
    prompt_to_cta:
      "Interested in joining a team of industry leaders building the future of connectivity? ",
    background_gradient:
      "linear-gradient(135deg, rgb(255, 255, 202) 0%, rgb(255, 248, 225) 40%, rgb(255, 218, 200) 100%)",
    globe_illustration: {
      id: 133,
      documentId: "c6pld31q1g5if9osaf20udar",
      name: "connection-globe-blue.svg",
      alternativeText: null,
      width: 520,
      height: 733,
      url: "https://d2919ce8l80osk.cloudfront.net/connection_globe_blue_b0853202f4.svg",
    },
    __component: "shared.global-cta",
  },

  // ── BOARD OF DIRECTORS PAGE WIDGETS ──────────────────────────────────────
  "shared.sub-page-hero--board-of-directors": {
    id: 76,
    background_gradient:
      "linear-gradient(135deg, rgb(184, 169, 240) 0%, rgb(210, 199, 255) 40%, rgb(196, 181, 247) 70%, rgb(221, 213, 255) 100%)",
    content_max_width: "960px",
    tag: null,
    title: "Board of Directors",
    description:
      "Guiding strategy and governance with decades of<br/>\nindustry leadership and investment expertise.",
    CTA_url: null,
    CTA_text: null,
    __component: "shared.inner-page-hero",
  },

  "shared.people-global-section--board-of-directors": {
    id: 72,
    name: "Marni M. Walden",
    designation: "Board Member & Chair",
    description:
      "Marni M. Walden brings more than 25 years of leadership experience driving innovation, operational excellence, and large-scale transformation across global technology, telecom, and media organizations. Widely recognized as one of the most influential women in wireless and a trailblazer in the digital ecosystem, she has held senior operating roles at Verizon Communications, served as an executive management member of the board for Verizon Communications, and now serves as a public and private company board director, strategic advisor, and investor.\n\nThroughout her tenure, she led several of Verizon's most significant acquisitions and integrations, including Yahoo, AOL, Fleetmatics, Telogis, Alltel, and RCC. Her leadership earned her numerous accolades, including recognition as one of the Most Powerful Women in Wireless, a place on Fortune's Most Powerful Women list, and Working Mother of the Year.\n\nShe currently serves on the public board of DraftKings, where she sits on the Transaction Committee and chairs both the Nominating & Governance Committee and the Compliance Committee. Her additional board experience spans both public and private companies, including Airlinq, Persado, DeepSig, and prior service on the boards of Alphabet's Loon, ironSource, and 4C Insights.\n\nMs. Walden also advises leading global investment firms — including New Mountain Capital, EQT, and Goldman Sachs — as well as a portfolio of technology and digital disruptors.",
    modal_upper_section_background: null,
    image: {
      id: 44,
      documentId: "tfe09m1cbf5g9u87x1974l48",
      name: "Walden_Marni.jpg",
      alternativeText: null,
      width: 800,
      height: 640,
      formats: {
        small: {
          ext: ".jpg",
          url: "https://d2919ce8l80osk.cloudfront.net/small_Walden_Marni_1f08bea163.jpg",
          width: 500,
          height: 400,
        },
      },
      url: "https://d2919ce8l80osk.cloudfront.net/Walden_Marni_1f08bea163.jpg",
    },
    __component: "shared.people-global-section",
  },

  "shared.global-cta--board-of-directors": {
    id: 61,
    CTA_url: "/leadership",
    CTA_text: "Meet Our Leadership",
    prompt_to_cta:
      "Interested in joining a team of industry leaders building the future of connectivity? ",
    background_gradient:
      "linear-gradient(135deg, rgb(255, 255, 202) 0%, rgb(255, 248, 225) 40%, rgb(255, 218, 200) 100%)",
    globe_illustration: {
      id: 133,
      documentId: "c6pld31q1g5if9osaf20udar",
      name: "connection-globe-blue.svg",
      alternativeText: null,
      width: 520,
      height: 733,
      url: "https://d2919ce8l80osk.cloudfront.net/connection_globe_blue_b0853202f4.svg",
    },
    __component: "shared.global-cta",
  },

  // ── CONTACT PAGE WIDGETS ─────────────────────────────────────────────────
  "shared.sub-page-hero--contact": {
    title: "Contact us",
    description:
      "Looking for more information? Or ready to discuss your connectivity needs? Fill out the form so we can connect you to the right team.",
    tag: null,
    CTA_text: null,
    CTA_url: null,
    background_gradient:
      "linear-gradient(135deg, #FFF5EE 0%, #FFE8D6 40%, #FFDAC8 100%)",
    content_max_width: null,
    __component: "shared.inner-page-hero",
  },

  "contact-form": {
    id: "contact-form",
    __component: "contact-form",
    endpoint: "/api/contact",
    topicOptions: [
      { value: "sales", label: "Sales" },
      { value: "client_services", label: "Client Services" },
      { value: "noc", label: "Network Operations Center" },
      { value: "billing", label: "Billing" },
      { value: "communities", label: "Communities" },
      { value: "suppliers", label: "Suppliers" },
      { value: "media", label: "Media Relations" },
      { value: "careers", label: "Careers" },
      { value: "other", label: "Other" },
    ],
  },

  // ── DYNAMIC STRAPI PAGE WIDGETS ──────────────────────────────────────────
  "shared.hero-banner--dynamic-slug": {
    title: "Arium Networks",
    description: "Arium Networks wireless infrastructure.",
    background_image: {
      url: "/images/backgrounds/challenges.png",
      name: "challenges.png",
    },
    background_image_position: "center top",
    CTA_text: null,
    CTA_url: null,
    max_width_title: null,
    max_width_description: null,
    __component: "shared.hero-banner",
  },

  "shared.dynamic-zone": {
    id: 1,
    PositionNumber: 99,
    CustomCssClass: "",
    Sections: [
      {
        id: 110,
        __component: "shared.hero-banner",
        title: "Dynamic Zone Hero Banner",
        description:
          "Modular page section composed in Strapi Dynamic Zones and resolved via WIDGET_REGISTRY.",
      },
      {
        id: 32,
        __component: "shared.timeline",
        title: "Contiguous Storyteller Flow",
        description:
          "Contiguous timeline, stats-cards, commitments, and illustration-split sections are grouped inside <FlowBackground />.",
      },
      {
        id: 12,
        __component: "shared.cta-with-graphic",
        title: "Where can we take your network?",
        CTA_text: "Contact Us",
        CTA_url: "/contact",
      },
    ],
    __component: "shared.dynamic-zone",
  },
} satisfies Record<string, WidgetResponseSchema>;

export type WidgetResponseKey = keyof typeof WIDGETS_RESPONSES;

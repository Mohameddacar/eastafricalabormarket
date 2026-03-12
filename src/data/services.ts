import type {
  CaseStudy,
  CoreService,
  IndustrySector,
  ProcessStep,
  ServiceOverviewItem,
} from "@/types";

export const servicesOverview: ServiceOverviewItem[] = [
  {
    id: "ov1",
    title: "Labor Market Analytics",
    description:
      "Data-driven insights into employment trends, workforce dynamics, and economic transformations.",
    icon: "BarChart3",
    href: "#labor-market-analytics",
    imageAlt: "Data analysts reviewing employment statistics",
  },
  {
    id: "ov2",
    title: "Policy Advisory",
    description:
      "Expert advisory for governments and institutions designing employment and workforce policies.",
    icon: "Briefcase",
    href: "#policy-advisory",
    imageAlt: "Policy discussion between experts and government officials",
  },
  {
    id: "ov3",
    title: "Employment Research",
    description:
      "High-quality research on employment trends, workforce transformation, and human capital development.",
    icon: "FileSearch",
    href: "#employment-research",
    imageAlt: "Researchers analyzing economic reports",
  },
  {
    id: "ov4",
    title: "Capacity Building",
    description:
      "Programs that strengthen institutional capacity for workforce development and labor market management.",
    icon: "GraduationCap",
    href: "#capacity-building",
    imageAlt: "Professional training workshop",
  },
  {
    id: "ov5",
    title: "Public Sector Consulting",
    description:
      "Support for public sector institutions designing and implementing workforce strategies.",
    icon: "Building2",
    href: "#public-sector-consulting",
    imageAlt: "Government policy workshop",
  },
];

export const coreServices: CoreService[] = [
  {
    id: "labor-market-analytics",
    title: "Labor Market Analytics",
    icon: "BarChart3",
    description:
      "Our labor market analytics services provide governments and organizations with data-driven insights into employment trends, workforce dynamics, and economic transformations. We analyze labor market indicators including:",
    bullets: [
      "Employment rates",
      "Workforce participation",
      "Skills demand",
      "Sectoral employment shifts",
      "Demographic workforce trends",
    ],
    deliverables: [
      "Labor market data analysis",
      "Employment forecasting models",
      "Workforce trend reports",
      "Policy data dashboards",
    ],
    deliverablesLabel: "What We Deliver",
    buttonLabel: "Learn More",
    buttonHref: "/contact",
    imageAlt: "Data analysts reviewing employment statistics on screens",
  },
  {
    id: "policy-advisory",
    title: "Policy Advisory",
    icon: "Briefcase",
    description:
      "We provide expert advisory services to governments and institutions designing employment and workforce development policies. Our advisory services help decision-makers develop effective policies that align labor markets with economic development goals.",
    bullets: [],
    deliverables: [
      "Employment policy development",
      "Labor regulations analysis",
      "Workforce development strategies",
      "Public sector policy reforms",
    ],
    deliverablesLabel: "Areas of Advisory",
    buttonLabel: "Learn More",
    buttonHref: "/contact",
    imageAlt: "Policy discussion between experts and government officials",
  },
  {
    id: "employment-research",
    title: "Employment Research",
    icon: "FileSearch",
    description:
      "East Africa Labor Market conducts high-quality research on employment trends, workforce transformation, and human capital development across East Africa. Our research supports policymakers and institutions with evidence-based insights that inform strategic decision-making.",
    bullets: [],
    deliverables: [
      "Youth employment",
      "Migration and labor mobility",
      "Digital economy jobs",
      "Skills development and education alignment",
    ],
    deliverablesLabel: "Research Areas",
    buttonLabel: "View Research",
    buttonHref: "/research",
    imageAlt: "Researchers analyzing economic reports and charts",
  },
  {
    id: "capacity-building",
    title: "Institutional Capacity Building",
    icon: "GraduationCap",
    description:
      "We provide capacity building programs that strengthen the skills and capabilities of institutions responsible for workforce development and labor market management. These programs empower policymakers, researchers, and practitioners with the tools needed to analyze and respond to labor market challenges.",
    bullets: [],
    deliverables: [
      "Labor market data analysis training",
      "Policy design workshops",
      "Institutional workforce planning",
      "Monitoring and evaluation training",
    ],
    deliverablesLabel: "Programs Include",
    buttonLabel: "Explore Training",
    buttonHref: "/training",
    imageAlt: "Professional training workshop with participants and instructor",
  },
  {
    id: "public-sector-consulting",
    title: "Public Sector Consulting",
    icon: "Building2",
    description:
      "Our consulting services support public sector institutions in designing and implementing workforce development strategies and employment programs. We collaborate with ministries, development agencies, and international organizations to create sustainable employment initiatives.",
    bullets: [],
    deliverables: [
      "Labor market strategy development",
      "National employment strategies",
      "Public workforce program design",
      "Labor policy evaluation",
    ],
    deliverablesLabel: "Consulting Services",
    buttonLabel: "Learn More",
    buttonHref: "/contact",
    imageAlt: "Government policy workshop or planning meeting",
  },
];

export const serviceProcessSteps: ProcessStep[] = [
  {
    id: "p1",
    step: 1,
    title: "Research & Assessment",
    description:
      "We conduct comprehensive assessments of labor market systems, workforce data, and institutional capacity.",
  },
  {
    id: "p2",
    step: 2,
    title: "Strategy Development",
    description:
      "Our experts develop strategic solutions tailored to the needs of governments and organizations.",
  },
  {
    id: "p3",
    step: 3,
    title: "Implementation Support",
    description:
      "We support the implementation of workforce development programs and policy initiatives.",
  },
  {
    id: "p4",
    step: 4,
    title: "Monitoring & Evaluation",
    description:
      "We evaluate the effectiveness of programs and provide recommendations for improvement.",
  },
];

export const industriesServed: IndustrySector[] = [
  {
    id: "ind1",
    title: "Public Sector",
    description: "Government ministries and policy institutions.",
    icon: "Building2",
  },
  {
    id: "ind2",
    title: "Education & Training Institutions",
    description: "Universities and workforce training organizations.",
    icon: "GraduationCap",
  },
  {
    id: "ind3",
    title: "Development Organizations",
    description: "International development partners and NGOs.",
    icon: "Globe",
  },
  {
    id: "ind4",
    title: "Private Sector",
    description: "Companies seeking workforce insights and labor market data.",
    icon: "Briefcase",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "National Workforce Strategy — Kenya",
    location: "Kenya",
    description:
      "Supported the development of a national workforce strategy focused on youth employment and digital skills.",
  },
  {
    id: "cs2",
    title: "Labor Market Data Program — Ethiopia",
    location: "Ethiopia",
    description:
      "Implemented labor market analytics training for policymakers and government analysts.",
  },
];

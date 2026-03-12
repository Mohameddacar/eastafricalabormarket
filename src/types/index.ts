export type Stat = {
  id: string;
  label: string;
  value: string;
  icon: string;
  description?: string;
};

export type Training = {
  id: string;
  title: string;
  duration: string;
  level: "Introductory" | "Intermediate" | "Advanced";
  format: "Online" | "Hybrid" | "In-person";
  href: string;
  description?: string;
  isFeatured?: boolean;
};

export type ResearchReport = {
  id: string;
  title: string;
  category: string;
  author: string;
  summary: string;
  href: string;
  isFeatured?: boolean;
};

export type Event = {
  id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  href: string;
  isFeatured?: boolean;
};

export type Partner = {
  id: string;
  name: string;
  logoAlt: string;
};

export type Conference = {
  id: string;
  name: string;
  description: string;
  speakers: number;
  days: number;
  href: string;
  isFeatured?: boolean;
};

export type Ministry = {
  id: string;
  name: string;
  country: string;
};

export type TimelineItem = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export type Leadership = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export type Founder = {
  name: string;
  title: string;
  bio: string;
  imageAlt: string;
};

export type WhatWeDoItem = {
  id: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  date?: string;
};

export type HumanDevelopmentProgram = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type ServiceOverviewItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  imageAlt: string;
};

export type CoreService = {
  id: string;
  title: string;
  icon: string;
  description: string;
  bullets: string[];
  deliverables: string[];
  deliverablesLabel?: string; // e.g. "What We Deliver", "Research Areas"
  buttonLabel: string;
  buttonHref: string;
  imageAlt: string;
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
};

export type IndustrySector = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  location: string;
  description: string;
};

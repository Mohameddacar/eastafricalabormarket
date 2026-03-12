import type { Founder, TimelineItem, WhatWeDoItem } from "@/types";

export const aboutTimeline: TimelineItem[] = [
  {
    id: "tl1",
    year: "2018",
    title: "Organization Founded",
    description:
      "East Africa Labor Market was established to provide research and policy solutions for regional employment challenges.",
  },
  {
    id: "tl2",
    year: "2020",
    title: "Regional Research Expansion",
    description:
      "The organization launched major labor market research programs across multiple East African countries.",
  },
  {
    id: "tl3",
    year: "2022",
    title: "Global Conferences",
    description:
      "Hosted international conferences bringing together global experts, policymakers, and researchers to discuss workforce development.",
  },
  {
    id: "tl4",
    year: "2024",
    title: "Workforce Innovation Programs",
    description:
      "Launched new initiatives focused on digital skills, youth employment, and human capital development.",
  },
];

export const aboutImpactStats = [
  { id: "s1", value: "120+", label: "Training programs delivered" },
  { id: "s2", value: "50+", label: "Labor market research publications" },
  { id: "s3", value: "30+", label: "Government partnerships" },
  { id: "s4", value: "15+", label: "International conferences hosted" },
  { id: "s5", value: "5,000+", label: "Professionals trained" },
];

export const regionalFocusCountries = [
  "Kenya",
  "Ethiopia",
  "Somalia",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Djibouti",
];

export const founder: Founder = {
  name: "Dr. Ahmed Farah",
  title: "Founder & Executive Director",
  bio: "Dr. Ahmed Farah founded East Africa Labor Market with a vision to strengthen workforce systems and create data-driven employment policies across the region. With more than 15 years of experience in labor economics, workforce development, and policy advisory, he has worked with governments, international organizations, and research institutions across Africa. His leadership focuses on bridging the gap between labor market research and real-world policy implementation to support sustainable economic development.",
  imageAlt: "Professional portrait of Dr. Ahmed Farah, Founder & Executive Director",
};

export const whatWeDoList: WhatWeDoItem[] = [
  {
    id: "w1",
    title: "Labor Market Research",
    description:
      "We conduct in-depth research on employment trends, workforce skills, migration, and economic transformation across East Africa.",
  },
  {
    id: "w2",
    title: "Policy Advisory",
    description:
      "We support governments and institutions in designing evidence-based policies that strengthen employment systems and workforce development.",
  },
  {
    id: "w3",
    title: "Training & Capacity Building",
    description:
      "We deliver training programs for policymakers, researchers, and professionals in labor market analysis and workforce planning.",
  },
  {
    id: "w4",
    title: "Strategic Partnerships",
    description:
      "We collaborate with international organizations, governments, and private sector partners to implement impactful development programs.",
  },
];

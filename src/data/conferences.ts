import type { Conference } from "@/types";

export const featuredConferences: Conference[] = [
  {
    id: "c1",
    name: "East Africa Labor Market Summit",
    description:
      "Annual summit convening policymakers, researchers, and private sector leaders to shape the future of work in the region.",
    speakers: 40,
    days: 3,
    href: "/conferences/east-africa-labor-market-summit",
    isFeatured: true,
  },
  {
    id: "c2",
    name: "Africa Skills & Employment Forum",
    description:
      "Regional forum on skills development, TVET, and employment creation across African markets.",
    speakers: 25,
    days: 2,
    href: "/conferences/africa-skills-employment-forum",
    isFeatured: true,
  },
  {
    id: "c3",
    name: "Global Workforce Development Conference",
    description:
      "International conference on workforce development, labor migration, and inclusive growth.",
    speakers: 60,
    days: 4,
    href: "/conferences/global-workforce-development",
    isFeatured: true,
  },
];

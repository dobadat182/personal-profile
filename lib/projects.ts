export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "Bongiorno Group",
    description:
      "Bongiorno Group is a financial services website for doctors, dentists, and high‑income professionals in Australia, highlighting services in financial planning, tax & accounting, insurance, and lending",
    tags: ["Wordpress", "PHP", "JQuery"],
    href: "https://bongiorno.com.au/",
  },
  {
    name: "Boss Hunting",
    description:
      "Boss Hunting is a digital lifestyle publication covering luxury travel, watches, cars, fashion, dining, and culture for modern professionals in Australia.",
    tags: ["Wordpress", "PHP", "JQuery"],
    href: "https://www.bosshunting.com.au",
    featured: true,
  },
  {
    name: "Conecta",
    description:
      "a recruitment website specialising in mid to senior management roles in construction and engineering across Australia, Asia, and the Middle East, highlighting their track record with thousands of candidates and hundreds of projects.",
    tags: ["Wordpress", "Nuxt.js", "Typescript"],
    href: "#",
  },
  {
    name: "Integral Lighting",
    description:
      "A premium lighting solutions website showcasing contemporary products from local and international suppliers, plus case studies for landmark projects across the ACT and Southern NSW such as offices, schools, and public spaces",
    tags: ["Wordpress", "PHP", "JQuery"],
    href: "https://www.integral-lighting.com/",
  },
  {
    name: "It Takes A Village",
    description:
      "A community platform connecting parents and families through shared services and suppor",
    tags: ["Wordpress", "PHP", "JQuery"],
    href: "#",
  },
  {
    name: "Lacoste Viet Nam",
    description:
      "The digital flagship store for Lacoste in Vietnam, featuring a modern e-commerce interface focused on sport chic fashion, iconic polo shirts, knitwear, and latest collections",
    tags: ["Wordpress", "PHP", "JQuery"],
    href: "https://www.lacoste.com.vn/?",
    featured: true,
  },
  {
    name: "Reveel Group",
    description:
      "Reveel Group is a digital marketing agency specializing in creating tailored digital solutions for businesses, including websites, mobile apps, and e-commerce platforms",
    tags: ["Wordpress", "PHP", "JQuery"],
    href: "https://reveelgroup.com/",
  },
  {
    name: "Safety Path",
    description:
      "An e-commerce store for sustainable safety lighting products like photoluminescent exit signs, warning signs, line markings, and LED solutions for workplaces, powered by Smarterlite Technology (battery-free, eco-friendly lighting",
    tags: ["Wordpress", "PHP", "JQuery"],
    href: "https://shop.smarterlite.com/",
    featured: true,
  },
];

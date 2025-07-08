export interface TemplateMeta {
  id: string;
  title: string;
  desc: string;
  image: string;
  route: string; // for preview
  active: string;
}

export const templates: TemplateMeta[] = [
  {
    id: "ecomm",
    title: "Ecom Express",
    desc: "A stylish and powerful template designed to kickstart your ecommerce journey with elegance and speed.",
    image: "/ecomm.png",
    route: "/preview/ecomm",
    active: "true",
  },
  {
    id: "gym1",
    title: "Power Pulse",
    desc: "Bold and energetic design perfect for gyms, personal trainers, and fitness businesses.",
    image: "/gymming.png",
    route: "/preview/gym",
    active: "true",
  },
  {
    id: "portfolio",
    title: "Showcase Your Work..",
    desc: "A personal portfolio to display your creativity, skills, and achievements.Welcome to portfolio. This space is thoughtfully designed ........",
    image: "/portfolio.png",
    route: "/preview/portfolio",
    active: "false",
  },
  {
    id: "saas",
    title: "LaunchPad SaaS",
    desc: "Conversion-optimized landing page for SaaS startups and product launches.",
    image: "/saas.png",
    route: "/preview/saas",
    active: "false",
  },
  {
    id: "restaurant",
    title: "DineSpot",
    desc: "A flavorful restaurant template featuring menu highlights, booking, and location details.",
    image: "/restaurant.png",
    route: "/preview/restaurant",
    active: "false",
  },
  {
    id: "realestate1",
    title: "HomeQuest",
    desc: "Professional and elegant layout for real estate agents and property listings.",
    image: "/realestate.png",
    route: "/preview/realestate",
    active: "false",
  },
  {
    id: "agency1",
    title: "ConsultEdge",
    desc: "Corporate and clean template perfect for consultancies, agencies, and business service firms.",
    image: "/agency.png",
    route: "/preview/agency",
    active: "false",
  },
];

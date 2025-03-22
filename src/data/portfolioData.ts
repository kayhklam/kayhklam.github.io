export type PortfolioCategory = {
  id: string;
  name: string;
  description: string;
  period: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  imageUrl: string;
  client?: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "digital",
    name: "Digital",
    description: "Digital Portraits",
    period: "2015-2025"
  },
  {
    id: "traditional",
    name: "Traditional",
    description: "Traditional portraits created on traditional mediums",
    period: "2017-2020"
  },
  {
    id: "podcast",
    name: "Happenus Podcast",
    description: "Portraits drawn for guests of the Happenus Podcast",
    period: "2024-2025"
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "FKA TWIGS",
    year: "2019",
    category: "digital",
    description: "Artwork featuring FKA Twigs.",
    imageUrl: "/image/Fka_twigs.jpg"
  },
  {
    id: "2",
    title: "RED 2",
    year: "2019",
    category: "digital",
    description: "A study in red tones.",
    imageUrl: "/image/Study_35.jpg"
  },
  {
    id: "3",
    title: "RINA SAWAYAMA",
    year: "2019",
    category: "digital",
    description: "Portrait of Rina Sawayama.",
    imageUrl: "/image/rinas.jpg"
  },
  {
    id: "4",
    title: "GREEN",
    year: "2019",
    category: "digital",
    description: "A conceptual artwork.",
    imageUrl: "/image/Lady_On_Sofa_.jpg"
  },
  {
    id: "5",
    title: "DANE",
    year: "2019",
    category: "digital",
    description: "A portrait study.",
    imageUrl: "/image/dane.jpg"
  },
  {
    id: "6",
    title: "LOCKDOWN BLUES",
    year: "2020",
    category: "digital",
    description: "Artwork reflecting the lockdown period.",
    imageUrl: "/image/study32.jpg"
  },
  {
    id: "7",
    title: "JEAN MICHEL BASQUIAT",
    year: "2019",
    category: "traditional",
    description: "Tribute to Jean Michel Basquiat.",
    imageUrl: "/image/Jean michel basquiat.jpg"
  },
  {
    id: "8",
    title: "JUAN",
    year: "2019",
    category: "digital",
    description: "A moving artwork of Juan.",
    imageUrl: "/image/juan.gif"
  },
  {
    id: "9",
    title: "POWER SAVING MODE",
    year: "2019",
    category: "digital",
    description: "An introspective study.",
    imageUrl: "/image/study28.jpg"
  },
  {
    id: "10",
    title: "JEWELS",
    year: "2019",
    category: "digital",
    description: "A study on accessories.",
    imageUrl: "/image/study29.jpg"
  },
  {
    id: "11",
    title: "SWEATER",
    year: "2019",
    category: "digital",
    description: "A cozy artwork.",
    imageUrl: "/image/study26.jpg"
  },
  {
    id: "12",
    title: "CAT'S GOT YOUR BACK",
    year: "2019",
    category: "digital",
    description: "Animated feline-themed artwork.",
    imageUrl: "/image/study25-blink.gif"
  },
  {
    id: "13",
    title: "FEEL",
    year: "2019",
    category: "digital",
    description: "A piece evoking emotions.",
    imageUrl: "/image/study24.jpg"
  },
  {
    id: "14",
    title: "REVERIE",
    year: "2019",
    category: "digital",
    description: "Dreamlike composition.",
    imageUrl: "/image/study23.jpg"
  },
  {
    id: "15",
    title: "STAYCATION 2020",
    year: "2020",
    category: "digital",
    description: "An artwork depicting the stay-at-home experience.",
    imageUrl: "/image/study20.gif"
  },
  {
    id: "16",
    title: "LOOKING AT YOU",
    year: "2019",
    category: "digital",
    description: "Expressive eyes captured in motion.",
    imageUrl: "/image/study19-blink.gif"
  },
  {
    id: "17",
    title: "SPIKY",
    year: "2019",
    category: "digital",
    description: "A sharp and edgy artwork.",
    imageUrl: "/image/study15.jpg"
  },
  {
    id: "18",
    title: "SO DONE",
    year: "2019",
    category: "digital",
    description: "A piece reflecting exhaustion.",
    imageUrl: "/image/study14.jpg"
  },
  {
    id: "19",
    title: "STARLIGHT",
    year: "2019",
    category: "digital",
    description: "A dreamy star-lit portrait.",
    imageUrl: "/image/study13.jpg"
  },
  {
    id: "20",
    title: "WISPY",
    year: "2019",
    category: "digital",
    description: "A light and airy composition.",
    imageUrl: "/image/study1.jpg"
  },
  {
    id: "21",
    title: "LIGHTS",
    year: "2019",
    category: "digital",
    description: "A portrait with vibrant lighting effects.",
    imageUrl: "/image/oct21.jpg"
  },
  {
    id: "22",
    title: "SAIYON",
    year: "2019",
    category: "digital",
    description: "A unique character portrayal.",
    imageUrl: "/image/saiyon.jpg"
  },
  {
    id: "23",
    title: "NADIA",
    year: "2019",
    category: "digital",
    description: "A striking portrait of Nadia.",
    imageUrl: "/image/nad.jpg"
  }
];
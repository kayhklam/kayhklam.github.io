export type PortfolioCategory = {
  id: string;
  name: string;
  description: string;
  period: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
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
    period: "2020- present"
  },
  {
    id: "adobe",
    name: "Adobe",
    description: "Portraits drawn for Adobe Founders Award winners",
    period: "2021-2022"
  },
  {
    id: "podcast",
    name: "Happenus Podcast",
    description: "Portraits drawn for guests of the Happenus Podcast",
    period: "2024-present"
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "FKA TWIGS",
    category: "digital",
    description: "",
    imageUrl: "/image/fkatwigs.webp"
  },
  {
    id: "2",
    title: "RED 2",
    category: "digital",
    description: "",
    imageUrl: "/image/study35.webp"
  },
  {
    id: "3",
    title: "RINA SAWAYAMA",
    category: "digital",
    description: "",
    imageUrl: "/image/rinas.webp"
  },
  {
    id: "4",
    title: "GREEN",
    category: "digital",
    description: "",
    imageUrl: "/image/ladysofa.webp"
  },
  {
    id: "5",
    title: "DANE",
    category: "digital",
    description: "",
    imageUrl: "/image/dane.webp"
  },
  {
    id: "6",
    title: "LOCKDOWN BLUES",
    category: "digital",
    description: "",
    imageUrl: "/image/study32.webp"
  },
  {
    id: "7",
    title: "BASQUIAT",
    category: "digital",
    description: "Tribute to Jean Michel Basquiat.",
    imageUrl: "/image/basquiat.webp"
  },
  {
    id: "8",
    title: "JUAN",
    category: "digital",
    description: "",
    imageUrl: "/image/juan.gif"
  },
  {
    id: "9",
    title: "POWER SAVING MODE",
    category: "digital",
    description: "",
    imageUrl: "/image/study28.webp"
  },
  {
    id: "10",
    title: "JEWELS",
    category: "digital",
    description: "",
    imageUrl: "/image/study29.webp"
  },
  {
    id: "11",
    title: "SWEATER",
    category: "digital",
    description: "",
    imageUrl: "/image/study26.webp"
  },
  {
    id: "12",
    title: "CAT'S GOT YOUR BACK",
    category: "digital",
    description: "",
    imageUrl: "/image/study25blink.gif"
  },
  {
    id: "13",
    title: "FEEL",
    category: "digital",
    description: "",
    imageUrl: "/image/study24.webp"
  },
  {
    id: "14",
    title: "REVERIE",
    category: "digital",
    description: "",
    imageUrl: "/image/study23.webp"
  },
  {
    id: "15",
    title: "STAYCATION 2020",
    category: "digital",
    description: "",
    imageUrl: "/image/study20.gif"
  },
  {
    id: "16",
    title: "LOOKING AT YOU",
    category: "digital",
    description: "",
    imageUrl: "/image/study19blink.gif"
  },
  {
    id: "17",
    title: "SPIKY",
    category: "digital",
    description: "",
    imageUrl: "/image/study15.webp"
  },
  {
    id: "18",
    title: "SO DONE",
    category: "digital",
    description: "",
    imageUrl: "/image/study14.webp"
  },
  {
    id: "19",
    title: "STARLIGHT",
    category: "digital",
    description: "",
    imageUrl: "/image/study13.webp"
  },
  {
    id: "20",
    title: "WISPY",
    category: "digital",
    description: "",
    imageUrl: "/image/study1.webp"
  },
  {
    id: "22",
    title: "SAIYON",
    category: "digital",
    description: "",
    imageUrl: "/image/saiyon.webp"
  },
  {
    id: "22",
    title: "PINK COAT",
    category: "digital",
    description: "",
    imageUrl: "/image/study9.webp"
  },
  {
    id: "22",
    title: "HAIRCLIP",
    category: "digital",
    description: "",
    imageUrl: "/image/study7.webp"
  },
  {
    id: "22",
    title: "SIDE PROFILE",
    category: "digital",
    description: "",
    imageUrl: "/image/study12.webp"
  },
  {
    id: "23",
    title: "Carita Marrow",
    category: "adobe",
    description: "Adobe Founders' Award of 2020 winner",
    imageUrl: "/image/adobe/caritamarrow.webp"
  },
  {
    id: "24",
    title: "Patricia Patterson",
    category: "adobe",
    description: "Adobe Founders' Award of 2020 winner",
    imageUrl: "/image/adobe/patriciapatterson.webp"
  },
  {
    id: "25",
    title: "Danielle Vitale",
    category: "adobe",
    description: "Adobe Founders' Award of 2020 winner",
    imageUrl: "/image/adobe/daniellevitale.webp"
  },
  {
    id: "26",
    title: "Eric Kline",
    category: "adobe",
    description: "Adobe Founders' Award of 2021 winner",
    imageUrl: "/image/adobe/erickline.webp"
  },
  {
    id: "27",
    title: "Lily Chiu-Watson",
    category: "adobe",
    description: "Adobe Founders' Award of 2021 winner",
    imageUrl: "/image/adobe/lilychiuwatson.webp"
  },
  {
    id: "28",
    title: "Gaurav Prince",
    category: "adobe",
    description: "Adobe Founders' Award of 2021 winner",
    imageUrl: "/image/adobe/gauravprince.webp"
  },
  {
    id: "29",
    title: "Shawn Hung",
    category: "podcast",
    description: "Founder and host of Happenus Podcast",
    imageUrl: "/image/happenus/shawn.webp"
  },
  {
    id: "30",
    title: "Melati Wijsen",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/melati.webp"
  },
  {
    id: "31",
    title: "Kelly Kok",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/kelly.webp"
  },
  {
    id: "32",
    title: "Gab Mejia",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/gab.webp"
  },
  {
    id: "33",
    title: "Pat Boonnitipat",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/pat.webp"
  },
  {
    id: "34",
    title: "Liya Yu",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/liya.webp"
  },
  {
    id: "35",
    title: "Glen Weyl",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/glen.webp"
  },
  {
    id: "36",
    title: "Jane Goodall",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/jane.webp"
  },
  {
    id: "37",
    title: "Abhigya Anand",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/abhigya.webp"
  },
  // {
  //   id: "38",
  //   title: "Hossein Hosseini",
  //   category: "podcast",
  //   description: "",
  //   imageUrl: "/image/happenus/hossein.webp"
  // },
  // {
  //   id: "39",
  //   title: "Samir Chopra",
  //   category: "podcast",
  //   description: "",
  //   imageUrl: "/image/happenus/samir.webp"
  // },
  // {
  //   id: "40",
  //   title: "Christine Cook",
  //   category: "podcast",
  //   description: "",
  //   imageUrl: "/image/happenus/christine.webp"
  // },
];

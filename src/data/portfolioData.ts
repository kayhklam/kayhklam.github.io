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
    imageUrl: "/image/Fka_twigs.jpg"
  },
  {
    id: "2",
    title: "RED 2",
    category: "digital",
    description: "",
    imageUrl: "/image/Study_35.jpg"
  },
  {
    id: "3",
    title: "RINA SAWAYAMA",
    category: "digital",
    description: "",
    imageUrl: "/image/rinas.jpg"
  },
  {
    id: "4",
    title: "GREEN",
    category: "digital",
    description: "",
    imageUrl: "/image/Lady_On_Sofa_.jpg"
  },
  {
    id: "5",
    title: "DANE",
    category: "digital",
    description: "",
    imageUrl: "/image/dane.jpg"
  },
  {
    id: "6",
    title: "LOCKDOWN BLUES",
    category: "digital",
    description: "",
    imageUrl: "/image/study32.jpg"
  },
  {
    id: "7",
    title: "JEAN MICHEL BASQUIAT",
    category: "digital",
    description: "Tribute to Jean Michel Basquiat.",
    imageUrl: "/image/Jean michel basquiat.jpg"
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
    imageUrl: "/image/study28.jpg"
  },
  {
    id: "10",
    title: "JEWELS",
    category: "digital",
    description: "",
    imageUrl: "/image/study29.jpg"
  },
  {
    id: "11",
    title: "SWEATER",
    category: "digital",
    description: "",
    imageUrl: "/image/study26.jpg"
  },
  {
    id: "12",
    title: "CAT'S GOT YOUR BACK",
    category: "digital",
    description: "",
    imageUrl: "/image/study25-blink.gif"
  },
  {
    id: "13",
    title: "FEEL",
    category: "digital",
    description: "",
    imageUrl: "/image/study24.jpg"
  },
  {
    id: "14",
    title: "REVERIE",
    category: "digital",
    description: "",
    imageUrl: "/image/study23.jpg"
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
    imageUrl: "/image/study19-blink.gif"
  },
  {
    id: "17",
    title: "SPIKY",
    category: "digital",
    description: "",
    imageUrl: "/image/study15.jpg"
  },
  {
    id: "18",
    title: "SO DONE",
    category: "digital",
    description: "",
    imageUrl: "/image/study14.jpg"
  },
  {
    id: "19",
    title: "STARLIGHT",
    category: "digital",
    description: "",
    imageUrl: "/image/study13.jpg"
  },
  {
    id: "20",
    title: "WISPY",
    category: "digital",
    description: "",
    imageUrl: "/image/study1.jpg"
  },
  {
    id: "22",
    title: "SAIYON",
    category: "digital",
    description: "",
    imageUrl: "/image/saiyon.jpg"
  },
  {
    id: "23",
    title: "Carita Marrow",
    category: "adobe",
    description: "Adobe Founders' Award of 2020 winner",
    imageUrl: "/image/Carita-Marrow-KayLam.jpg"
  },
  {
    id: "24",
    title: "Patricia Patterson",
    category: "adobe",
    description: "Adobe Founders' Award of 2020 winner",
    imageUrl: "/image/Patricia-Patterson-KayLam.jpg"
  },
  {
    id: "25",
    title: "Danielle Vitale",
    category: "adobe",
    description: "Adobe Founders' Award of 2020 winner",
    imageUrl: "/image/Danielle-Vitale-KayLam.jpg"
  },
  {
    id: "26",
    title: "Eric Kline",
    category: "adobe",
    description: "Adobe Founders' Award of 2021 winner",
    imageUrl: "/image/Eric_Kline.jpg"
  },
  {
    id: "27",
    title: "Lily Chiu-Watson",
    category: "adobe",
    description: "Adobe Founders' Award of 2021 winner",
    imageUrl: "/image/Lily_Chiu-Watson.jpg"
  },
  {
    id: "28",
    title: "Gaurav Prince",
    category: "adobe",
    description: "Adobe Founders' Award of 2021 winner",
    imageUrl: "/image/Gaurav_Prince.jpg"
  },
  {
    id: "29",
    title: "Shawn Hung",
    category: "podcast",
    description: "Founder and host of Happenus Podcast",
    imageUrl: "/image/happenus/shawn.jpg"
  },
  {
    id: "30",
    title: "Melati Wijsen",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/melati.jpg"
  },
  {
    id: "31",
    title: "Kelly Kok",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/kelly.jpg"
  },
  {
    id: "32",
    title: "Gab Mejia",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/gab.jpg"
  },
  {
    id: "33",
    title: "Pat Boonnitipat",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/pat.jpg"
  },
  {
    id: "34",
    title: "Liya Yu",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/liya.jpg"
  },
  {
    id: "35",
    title: "Glen Weyl",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/glen.jpg"
  },
  {
    id: "36",
    title: "Jane Goodall",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/jane.jpg"
  },
  {
    id: "37",
    title: "Abhigya Anand",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/abhigya.jpg"
  },
  {
    id: "38",
    title: "Hossein Hosseini",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/hossein.jpg"
  },
  {
    id: "39",
    title: "Samir Chopra",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/samir.jpg"
  },
  {
    id: "40",
    title: "Christine Cook",
    category: "podcast",
    description: "",
    imageUrl: "/image/happenus/christine.jpg"
  },
];

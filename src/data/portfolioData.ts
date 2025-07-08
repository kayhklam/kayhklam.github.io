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
    id: "nhs",
    name: "NHS Portraits",
    description: "Participated in the #PortraitsForNHSHeroes online exhibition, offering free portraits to NHS key workers during the UK lockdown, with a feature in the 'Portraits For NHS Heroes' fine art book initiated by Tom Croft and published by Bloomsbury Publishing.",
    period: "2020"
  },
  {
    id: "adobe",
    name: "Adobe",
    description: "Portraits drawn for the recipients of Adobe's 2020 and 2021 Founders' Award winners",
    period: "2021-2022"
  },
  {
    id: "podcast",
    name: "Happenus Podcast",
    description: "Portraits drawn for guests of the Happenus Podcast",
    period: "2024-present"
  },
];

const allItems: PortfolioItem[] = [
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
    title: "Portraits For NHS Heroes",
    category: "nhs",
    description: "Fine art book initiated by Tom Croft and published by Bloomsbury Publishing",
    imageUrl: "/image/nhs/book.webp"
  },
  {
    id: "23",
    title: "Judtih Mercader",
    category: "nhs",
    description: "Judith was working as an ICU Nurse on the front lines of a Covid-19 ward in Oxford, UK",
    imageUrl: "/image/nhs/judith.webp"
  },
  {
    id: "23",
    title: "",
    category: "nhs",
    description: "Featured in the 'Portraits For NHS Heroes' fine art book.",
    imageUrl: "/image/nhs/page.webp"
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
    description: "Shawn Hung, host and founder of the Happenus Podcast, is a dynamic storyteller and entrepreneur, engaging audiences in thought-provoking conversations about personal growth, innovation, and the impact of human connection.",
    imageUrl: "/image/happenus/shawn.webp"
  },
  {
    id: "30",
    title: "Melati Wijsen",
    category: "podcast",
    description: "Melati Wijsen, environmental activist and co-founder of Bye Bye Plastic Bags, is a powerful advocate for youth-led environmental change, working to reduce plastic waste and inspire sustainable living worldwide.",
    imageUrl: "/image/happenus/melati.webp"
  },
  {
    id: "31",
    title: "Kelly Kok",
    category: "podcast",
    description: "Kelly Kok, Executive Director of the Jane Goodall Institute Taiwan, is a passionate sustainability advocate and social entrepreneur, leading efforts to protect wildlife and promote environmental conservation in Taiwan.",
    imageUrl: "/image/happenus/kelly.webp"
  },
  {
    id: "32",
    title: "Gab Mejia",
    category: "podcast",
    description: "Gab Mejia, National Geographic Explorer and Board of Trustee for WWF Philippines, is a conservation photographer and storyteller who captures the intersection of nature, culture, and climate to inspire environmental awareness and action.",
    imageUrl: "/image/happenus/gab.webp"
  },
  {
    id: "33",
    title: "Pat Boonnitipat",
    category: "podcast",
    description: "Pat Boonnitipat, visionary storyteller and filmmaker, is known for his award-winning film How to Make Millions Before Grandma Dies, crafting deeply human narratives that explore identity, societal change, and the power of connection.",
    imageUrl: "/image/happenus/pat.webp"
  },
  {
    id: "34",
    title: "Liya Yu",
    category: "podcast",
    description: "Dr. Liya Yu, political neuroscientist and author, explores the intersection of brain science and social justice, advocating for a more inclusive and empathetic political future.",
    imageUrl: "/image/happenus/liya.webp"
  },
  {
    id: "35",
    title: "Glen Weyl",
    category: "podcast",
    description: "E. Glen Weyl, Microsoft Research Lead, political economist and technologist, pioneers radical market ideas and decentralised governance to reshape democracy, equity, and the future of digital society.",
    imageUrl: "/image/happenus/glen.webp"
  },
  {
    id: "36",
    title: "Jane Goodall",
    category: "podcast",
    description: "Dr. Jane Goodall, renowned primatologist and conservationist, revolutionised our understanding of chimpanzees and continues to inspire global action for wildlife protection and environmental stewardship.",
    imageUrl: "/image/happenus/jane.webp"
  },
  {
    id: "37",
    title: "Abhigya Anand",
    category: "podcast",
    description: "Abhigya Anand, a Vedic astrologer and prodigy, deciphers planetary alignments, ancient scriptures, and spiritual wisdom to illuminate humanity’s path through transformation and healing.",
    imageUrl: "/image/happenus/abhigya.webp"
  },
  {
    id: "38",
    title: "Hossein Hosseini",
    category: "podcast",
    description: "Dr. Hossein Hosseini, a distinguished expert in artificial intelligence and machine learning, pioneers innovative research that bridges technology and human-centred solutions to drive transformative change in various industries.",
    imageUrl: "/image/happenus/hossein.webp"
  },
  // {
  //   id: "39",
  //   title: "Samir Chopra",
  //   category: "podcast",
  //   description: "Samir Chopra, a philosophical counsellor and professor emeritus of philosophy at Brooklyn College and the Graduate Center of the City University of New York, explores the intersection of technology, ethics, and society, critically examining the impact of artificial intelligence on human rights, freedom, and justice.",
  //   imageUrl: "/image/happenus/samir.webp"
  // },
  // {
  //   id: "40",
  //   title: "Christine Cook",
  //   category: "podcast",
  //   description: "Dr. Christine Cook, a renowned clinical psychologist and mental health advocate, specialises in trauma recovery and emotional well-being, empowering individuals to navigate challenges and achieve personal growth.",
  //   imageUrl: "/image/happenus/christine.webp"
  // },
];

const podcasts = allItems.filter(item => item.category === "podcast")
  .sort((a, b) => Number(b.id) - Number(a.id));

const others = allItems.filter(item => item.category !== "podcast");

export const portfolioItems: PortfolioItem[] = [...others, ...podcasts];
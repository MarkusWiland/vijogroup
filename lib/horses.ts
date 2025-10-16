
export type Horse = {
  slug: string;
  name: string;
  age: number;
  sex: "hingst" | "valack" | "sto";
  breed: string;
  height: string; // cm
  discipline: string; // hoppning, dressyr etc.
  hero: string; // main image path
  images: string[];
  bloodline?: string;
  achievements?: string[];
  videos?: { title: string; youtubeId: string }[];
  priceHint?: string; // valfri text
};

export const horses: Horse[] = [
  {
    slug: "diamond-spirit",
    name: "Diamond Spirit",
    age: 7,
    sex: "valack",
    breed: "KWPN (Dutch Warmblood)",
    height: "168",
    discipline: "Hoppning 1.45m",
    hero: "/sporthorses.jpg",
    images: ["/sporthorses.jpg", "/sporthorses.jpg", "/sporthorses.jpg"],
    bloodline: "Diamant de Semilly x Indoctro",
    achievements: ["Placeringar 1.35–1.45m", "Snabb, modig, jämn språngkurva"],
    videos: [{ title: "Runda 1.40m", youtubeId: "dQw4w9WgXcQ" }],
    priceHint: "Pris på förfrågan",
  },
  {
    slug: "celine-z",
    name: "Celine Z",
    age: 8,
    sex: "sto",
    breed: "Zangersheide",
    height: "165",
    discipline: "Allround (Dressyr/Hoppning)",
    hero: "/sporthorses.jpg",
    images: ["/sporthorses.jpg", "/sporthorses.jpg", "/sporthorses.jpg"],
    bloodline: "Corland x Chin Chin",
    achievements: ["Msv dressyr, 1.30 hoppning", "Stark trav och sits"],
    videos: [],
  },
  {
    slug: "royal-venture",
    name: "Royal Venture",
    age: 6,
    sex: "hingst",
    breed: "Oldenburg",
    height: "170",
    discipline: "Hoppning 1.40m",
    hero: "/sporthorses.jpg",
 images: ["/sporthorses.jpg", "/sporthorses.jpg", "/sporthorses.jpg"],
    bloodline: "Kannan x Balou du Rouet",
    achievements: ["Unghästfinal 6-års"],
  },
  {
    slug: "midnight-echo",
    name: "Midnight Echo",
    age: 9,
    sex: "valack",
    breed: "SWB",
    height: "173",
    discipline: "Dressyr Grand Prix",
    hero: "/sporthorses.jpg",
    images: ["/sporthorses.jpg", "/sporthorses.jpg", "/sporthorses.jpg"],
    bloodline: "Totilas x Sandro Hit",
    achievements: ["GP debut 2024", "Stark piaff/passage"],
  },
];

export function getHorseBySlug(slug: string) {
  return horses.find((h) => h.slug === slug);
}


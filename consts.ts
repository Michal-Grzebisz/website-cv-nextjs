export const isProduction = process.env.NODE_ENV === 'production';
export const APP_GOOGLE_KEY = process.env.NEXT_PUBLIC_APP_GOOGLE_KEY;
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export enum SectionID {
  About = 'About',
  Experience = 'Experience',
  Work = 'Work',
  Contact = 'Contact',
  Header = 'Header',
  InvestmentDescription = 'InvestmentDescription',
  Location = 'Location',
  Projects = 'Projects',
  Quote = 'Quote'
}

export interface Link {
  name: string;
  section: SectionID;
  url: string;
}

export const LINKS: Link[] = [
  {
    name: 'About',
    section: SectionID.About,
    url: `${SectionID.About}`,
  },
  {
    name: 'Experience',
    section: SectionID.Experience,
    url: `${SectionID.Experience}`,
  },
  {
    name: 'Work',
    section: SectionID.Work,
    url: `${SectionID.Work}`,
  },
  {
    name: 'Contact',
    section: SectionID.Contact,
    url: `${SectionID.Contact}`,
  },
];

export const scrollToSectionHandler = (section: SectionID) => {
  const node = window.document.getElementById(section);

  if (node) {
    window.scrollTo({ top: node?.offsetTop - 100 });
  }
};

export enum Availability {
  Available = 'available',
  Reserved = 'reserved',
  Unavailable = 'unavailable'
}

export interface Apartment {
  availability: Availability;
  balcony: number | null;
  balcony2: number | null;
  floor: number;
  garden: number;
  name: string;
  number: number;
  rooms: number;
  size: number,
  terrace: number | null;
  terrace2: number | null;
}

export const formatTextPolishCharacters = (text: string): string => {
  const LETTERS_TO_REPLACE = [
    'a',
    'i',
    'o',
    'u',
    'w',
    'z',
    'A',
    'I',
    'O',
    'U',
    'W',
    'Z',
  ];


  for (let i = 0; i < LETTERS_TO_REPLACE.length; i++) {
    const textSplit = text.split(` ${LETTERS_TO_REPLACE[i]} `);

    text = textSplit.join(` ${LETTERS_TO_REPLACE[i]}&nbsp;`);
  }

  return text;
};

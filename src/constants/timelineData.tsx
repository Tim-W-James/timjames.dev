/* eslint-disable sonarjs/no-duplicate-string */
import logo from "@assets/profile.jpg";
import { SiReact, SiTypescript } from "react-icons/si";

export const categories = {
  "Career Event": {
    // We need to help type inference here with an explicit undefined
    link: undefined,
  },
  "Agile Digital Project": {
    link: "https://agiledigital.com.au/",
  },
  "Australian National University Project": {
    link: "https://www.anu.edu.au/",
  },
  "Personal Project": {
    link: undefined,
  },
} as const satisfies Record<string, { link?: string }>;

export const technologies = {
  React: {
    icon: <SiReact aria-label="React" />,
    link: "https://reactjs.org/",
  },
  TypeScript: {
    icon: <SiTypescript aria-label="TypeScript" />,
    link: "https://www.typescriptlang.org/",
  },
  ForgeRock: {
    icon: undefined,
    link: "https://www.typescriptlang.org/",
  },
} as const satisfies Record<string, { icon?: JSX.Element; link?: string }>;

export type TimelineItemData = {
  date: string;
  title: string;
  text: string;
  thumbnailSrc?: string;
  category: keyof typeof categories;
  technologies?: (keyof typeof technologies)[];
  starred?: boolean;
  links?: {
    text: string;
    url: string;
    icon?: JSX.Element;
  }[];
};

const timelineData: TimelineItemData[] = [
  {
    date: "2022",
    title: "Personal Website",
    text: "I built this website using React and TypeScript. It's hosted on GitHub Pages and uses GitHub Actions to automatically deploy the latest version of the code to the website.",
    thumbnailSrc: logo,
    category: "Personal Project",
    technologies: ["React", "TypeScript"],
    starred: true,
    links: [
      {
        text: "View Source",
        url: "https://github.com/Tim-W-James/timjames.dev",
      },
    ],
  },
  {
    date: "2021",
    title: "Personal Website",
    text: "I built this website using React and TypeScript. It's hosted on GitHub Pages and uses GitHub Actions to automatically deploy the latest version of the code to the website.",
    category: "Personal Project",
    technologies: ["React", "TypeScript"],
    starred: true,
    links: [
      {
        text: "View Source",
        url: "https://github.com/Tim-W-James/timjames.dedfgdfgdfasdsadfdv",
      },
      {
        text: "View Source",
        url: "https://github.com/Tim-W-James/timjames.dedfgdfgdfasdsadfdv",
      },
    ],
  },
  {
    date: "2021",
    title: "Personal Website",
    text: "I built this website using React and TypeScript",
    category: "Personal Project",
    starred: true,
  },
];

export default timelineData;

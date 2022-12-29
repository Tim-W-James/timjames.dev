import { TimelineItemData } from "@components/Timeline";

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

const timelineData: TimelineItemData[] = [
  {
    date: "2022",
    title: "timjames.dev",
    body: (
      <>
        Static single page application used as a portfolio website. Includes a
        custom component library, UI designs created on Figma, and robust
        tooling such as strict typing for CSS classes.
      </>
    ),
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
];

export default timelineData;

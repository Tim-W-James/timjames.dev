import {
  SiAmazonaws,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologies = {
  TypeScript: {
    icon: <SiTypescript aria-label="TypeScript" />,
    link: "https://www.typescriptlang.org/",
    isCore: true,
  },
  React: {
    icon: <SiReact aria-label="React" />,
    link: "https://reactjs.org/",
    isCore: true,
  },
  Tailwind: {
    icon: <SiTailwindcss aria-label="Tailwind" />,
    link: "https://tailwindcss.com/",
    isCore: true,
  },
  "Amazon Web Services": {
    icon: <SiAmazonaws aria-label="Amazon Web Services" />,
    link: "https://aws.amazon.com/",
    isCore: true,
  },
  ForgeRock: {
    icon: undefined,
    link: "https://www.typescriptlang.org/",
    isCore: false,
  },
} as const satisfies Record<
  string,
  { icon?: JSX.Element; link: string; isCore?: boolean }
>;

export default technologies;

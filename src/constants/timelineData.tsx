import brodburger from "@assets/projects/brodburger.png";
import { TimelineItemData } from "@components/Timeline";
import Tooltip from "@components/Tooltip";
import cn from "@styles/cssUtils";
import { BsGithub } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { SiFigma, SiStorybook } from "react-icons/si";

export const categories = {
  "Career Event": {
    // We need to help type inference here with an explicit undefined
    link: undefined,
  },
  "Agile Digital": {
    link: "https://agiledigital.com.au/",
  },
  "Australian National University": {
    link: "https://www.anu.edu.au/",
  },
  "Personal Project": {
    link: undefined,
  },
} as const satisfies Record<string, { link?: string }>;

const timelineData: TimelineItemData[] = [
  {
    date: "2021 - 2023",
    title: "timjames.dev",
    body: (
      <>
        {/* eslint-disable-next-line max-len */}
        Static <Tooltip text="SPA" tooltip="Single Page Application" /> used as
        a portfolio website. Includes a{" "}
        <a
          className={cn("link")}
          href="https://tim-w-james.github.io/timjames.dev/"
          rel="noreferrer"
          target="_blank"
          title={"View components on Storybook"}
        >
          custom component library
        </a>
        , <Tooltip text="UI" tooltip="User Interface" /> designs created on{" "}
        <a
          className={cn("link")}
          href="https://www.figma.com/file/pVOwmsYdIymurR4GmEFry1/Portfolio?node-id=9%3A117&t=c2WxYEnrq61XsoNL-1"
          rel="noreferrer"
          target="_blank"
          title={"View design on Figma"}
        >
          Figma
        </a>
        , and robust tooling such as{" "}
        <a
          className={cn("link")}
          href="https://github.com/Tim-W-James/timjames.dev#typed-css"
          rel="noreferrer"
          target="_blank"
          title={"Read more"}
        >
          strict typing for CSS classes
        </a>
        .
      </>
    ),
    category: "Personal Project",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Sass",
      "Figma",
      "Storybook",
      "Netlify",
      "GitHub Actions",
    ],
    starred: true,
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/timjames.dev",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Storybook",
        url: "https://tim-w-james.github.io/timjames.dev/",
        icon: <SiStorybook aria-label="Storybook" />,
      },
      {
        text: "Figma",
        url: "https://www.figma.com/file/pVOwmsYdIymurR4GmEFry1/Portfolio?node-id=9%3A117&t=c2WxYEnrq61XsoNL-1",
        icon: <SiFigma aria-label="Figma" />,
      },
    ],
  },
  {
    date: "2022 - 2023",
    title: "Brodburger",
    body: (
      <>
        Online ordering and <Tooltip text="POS" tooltip="Point of Sale" /> app
        for hospitality. I contributed to a feature upgrade and improved the
        menu layout. I also performed maintenance and{" "}
        {/* eslint-disable-next-line max-len */}
        <Tooltip
          text="CVE"
          tooltip="Common Vulnerabilities and Exposures"
        />{" "}
        patching of the system, and overhauled{" "}
        {/* eslint-disable-next-line max-len */}
        <Tooltip
          text="CI/CD"
          tooltip="Continuous Integration and Delivery"
        />{" "}
        pipelines.
      </>
    ),
    thumbnailSrc: brodburger,
    // eslint-disable-next-line sonarjs/no-duplicate-string
    category: "Agile Digital",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Sass",
      "Cypress",
      "Scala",
      "Jenkins",
    ],
    starred: true,
    links: [
      {
        text: "Online ordering app",
        url: "https://brodburger.qhopper.com",
        icon: <FaHamburger aria-label="Burger" />,
      },
      {
        text: "Client website",
        url: "https://brodburger.com.au/",
      },
    ],
  },
  {
    date: "2022",
    title: "Toyota Finance Australia",
    body: (
      <>
        Identity & access management and authorisation systems. I developed{" "}
        <Tooltip text="OAuth2" tooltip="Open Authorisation Standard" />{" "}
        authentication journeys with{" "}
        <Tooltip
          text="WebAuthn"
          tooltip="Web Authentication standard for FIDO"
        />{" "}
        <Tooltip text="MFA" tooltip="Multi-Factor Authentication" />, and
        configured {/* eslint-disable-next-line max-len */}
        <Tooltip
          text="SAML"
          tooltip="Security Assertion Markup Language"
        />{" "}
        federation. I also created a custom{" "}
        <Tooltip text="JWT" tooltip="JSON Web Token" /> authoriser using Open
        Policy Agent, that integrates with security definitions in{" "}
        {/* eslint-disable-next-line max-len */}
        <Tooltip
          text="OpenAPI"
          tooltip="RESTful API Definition Language"
        />{" "}
        specs. To assist external integrators, I also created Postman API
        collections.
      </>
    ),
    category: "Agile Digital",
    technologies: [
      "ForgeRock Identity Cloud",
      "Amazon Web Services",
      "Terraform",
      "Serverless",
      "GoLang",
      "TypeScript",
      "Open Policy Agent",
      "ElasticSearch",
    ],
    starred: true,
    links: [
      {
        text: "Client website",
        url: "https://www.toyota.com.au/car-finance",
      },
    ],
  },
  {
    date: "2021 - 2022",
    title: "CSIRO Source IP",
    body: (
      <>
        Maintenance, monitoring and security patching of a legacy system. I
        implemented processes to monitor system health and vulnerabilities. I
        also created DevOps infrastructure to continuously track{" "}
        {/* eslint-disable-next-line max-len */}
        <Tooltip
          text="CVEs"
          tooltip="Common Vulnerabilities and Exposures"
        />{" "}
        and manage dependencies, including pipelines for automatic alerts.
      </>
    ),
    category: "Agile Digital",
    technologies: [
      "Docker",
      "Kubernetes",
      "ELK",
      "Grafana",
      "Amazon Web Services",
      "Scala",
      "Jenkins",
    ],
    starred: true,
    links: [
      {
        text: "Source IP website",
        url: "https://www.toyota.com.au/car-finance",
      },
    ],
  },
];

export default timelineData;

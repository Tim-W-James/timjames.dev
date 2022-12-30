/* eslint-disable max-len */
/* eslint-disable sonarjs/no-duplicate-string */
import dreams from "@assets/projects/DREAMS.png";
import ada from "@assets/projects/ada.png";
import brodburger from "@assets/projects/brodburger.png";
import python from "@assets/projects/python.png";
import { TimelineItemData } from "@components/Timeline";
import Tooltip from "@components/Tooltip";
import cn from "@styles/cssUtils";
import { BsGithub } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { SiEslint, SiFigma, SiStorybook } from "react-icons/si";

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
    startDate: new Date("2022"),
    endDate: new Date("2023"),
    title: "timjames.dev",
    body: (
      <>
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
    isFeatured: true,
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/timjames.dev",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Storybook components",
        url: "https://tim-w-james.github.io/timjames.dev/",
        icon: <SiStorybook aria-label="Storybook" />,
      },
      {
        text: "Figma design",
        url: "https://www.figma.com/file/pVOwmsYdIymurR4GmEFry1/Portfolio?node-id=9%3A117&t=c2WxYEnrq61XsoNL-1",
        icon: <SiFigma aria-label="Figma" />,
      },
      {
        text: "ESLint config",
        url: "https://www.npmjs.com/package/@tim-w-james/eslint-config",
        icon: <SiEslint aria-label="ESLint" />,
      },
    ],
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2023"),
    title: "Brodburger",
    body: (
      <>
        Online ordering and <Tooltip text="POS" tooltip="Point of Sale" /> app
        for a local burger franchise. I contributed to a feature upgrade,
        improved the menu <Tooltip text="UI" tooltip="User Interface" />, and
        configured a payment gateway. I also performed maintenance and{" "}
        <Tooltip text="CVE" tooltip="Common Vulnerabilities and Exposures" />{" "}
        patching of the system, and overhauled{" "}
        <Tooltip text="CI/CD" tooltip="Continuous Integration and Delivery" />{" "}
        pipelines.
      </>
    ),
    thumbnailSrc: brodburger,
    category: "Agile Digital",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Sass",
      "Cypress",
      "Scala",
      "Jenkins",
      "Fat Zebra",
    ],
    isFeatured: true,
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
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "Toyota Finance Australia",
    body: (
      <>
        Identity & access management systems for a car finance and loans
        application. I developed{" "}
        <Tooltip text="OAuth2" tooltip="Open Authorisation Standard" />{" "}
        authentication journeys with{" "}
        <Tooltip
          text="WebAuthn"
          tooltip="Web standard for FIDO client authentication"
        />{" "}
        <Tooltip text="MFA" tooltip="Multi-Factor Authentication" />, and
        configured{" "}
        <Tooltip text="SAML" tooltip="Security Assertion Markup Language" />{" "}
        federation. I also created a custom{" "}
        <Tooltip text="JWT" tooltip="JSON Web Token" /> authoriser with
        fine-grained policy control, that integrates with security definitions
        in <Tooltip text="OpenAPI" tooltip="RESTful API Definition Language" />{" "}
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
    isFeatured: true,
    links: [
      {
        text: "TFA website",
        url: "https://www.toyota.com.au/car-finance",
      },
      {
        text: "Turo website",
        url: "https://turo.com/au/en",
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2022"),
    title: "CSIRO Source IP",
    body: (
      <>
        Maintenance, monitoring and security patching of a legacy system for
        patent filing. I implemented processes to monitor system health and
        vulnerabilities. I also created{" "}
        <Tooltip text="DevOps" tooltip="Developer Operations" /> infrastructure
        to continuously track{" "}
        <Tooltip text="CVEs" tooltip="Common Vulnerabilities and Exposures" />{" "}
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
      "NGINX",
    ],
    isFeatured: false,
    links: [
      {
        text: "Source IP website",
        url: "https://sourceip.csiro.au/",
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Siding Spring Observatory VR Experience",
    body: (
      <>
        Part of the{" "}
        <a
          className={cn("link")}
          href="https://comp.anu.edu.au/TechLauncher/"
          rel="noreferrer"
          target="_blank"
          title={"Industry Networking Program"}
        >
          ANU TechLauncher program
        </a>
        , I worked with a group of other students and collaborated with the{" "}
        <a
          className={cn("link")}
          href="https://rsaa.anu.edu.au/"
          rel="noreferrer"
          target="_blank"
          title={"RSAA Website"}
        >
          ANU Research School of Astronomy and Astrophysics
        </a>
        . The project involved creating a virtual reality experience for the{" "}
        <a
          className={cn("link")}
          href="https://www.oculus.com/experiences/quest/"
          rel="noreferrer"
          target="_blank"
          title={"Portable VR Headset"}
        >
          Oculus Quest
        </a>{" "}
        headset (also ported to Android) where users could view and interact
        with various telescopes at the{" "}
        <a
          className={cn("link")}
          href="https://www.sidingspringobservatory.com.au/"
          rel="noreferrer"
          target="_blank"
          title={"Australia's Largest Observatory"}
        >
          Siding Spring Observatory
        </a>
        , for educational and outreach purposes. As spokesperson for the
        project, I led my team to exceed our client&apos;s expectations and were
        awarded best pitch.
      </>
    ),
    category: "Australian National University",
    technologies: ["Unity", "Oculus", "CSharp", "Premiere"],
    isFeatured: true,
    thumbnailSrc: dreams,
    links: [
      {
        text: "Landing page for DREAMS",
        url: "https://sites.google.com/view/2021-s1-techlauncher-dreams/home",
      },
      {
        text: "Landing page for AAT",
        url: "https://sites.google.com/view/2021-s2-techlauncher-dreams/home",
      },
      {
        text: "Source code",
        url: "https://github.com/VR-Observatory/SidingSpringObservatory",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Ada Concurrent Programming",
    body: (
      <>
        Several projects using the{" "}
        <a
          className={cn("link")}
          href="https://learn.adacore.com/courses/intro-to-ada/index.html"
          rel="noreferrer"
          target="_blank"
          title={"Strict Concurrent Programming Language"}
        >
          Ada
        </a>{" "}
        programming language with an emphasis on concurrency and networking. I
        built a distributed communication system, and a concurrent routing
        algorithm.
      </>
    ),
    thumbnailSrc: ada,
    category: "Australian National University",
    isFeatured: false,
    technologies: ["Ada"],
    links: [
      {
        text: "Communication system",
        url: "https://github.com/Tim-W-James/gliding-in-space",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Routing Calculator",
        url: "https://github.com/Tim-W-James/routing-calculator",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Ada Reference Code",
        url: "https://github.com/Tim-W-James/Ada-Reference-Code",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Machine Learning Data Visualizations & Analysis",
    body: (
      <>
        Jupyter notebook containing templates for data visualisation using{" "}
        <a
          className={cn("link")}
          href="https://matplotlib.org/"
          rel="noreferrer"
          target="_blank"
          title={"Data Visualisation Library"}
        >
          Matplotlib
        </a>
        , machine learning (regression, classification, decision trees, and
        clustering) using{" "}
        <a
          className={cn("link")}
          href="https://scikit-learn.org/stable/"
          rel="noreferrer"
          target="_blank"
          title={"Machine Learning Library"}
        >
          scikit-learn
        </a>
        , and examples of{" "}
        <Tooltip text="SQL" tooltip="Structured Query Language" /> queries.
      </>
    ),
    category: "Australian National University",
    thumbnailSrc: python,
    isFeatured: false,
    technologies: ["Python", "SQL", "Jupyter"],
    links: [
      {
        text: "Python reference code",
        url: "https://github.com/Tim-W-James/Python-Data-Reference-Code",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "Finance Tracker & Homelab",
    body: (
      <>
        Tooling to categorise a{" "}
        <Tooltip text="CSV" tooltip="Comma Separated Values" /> of bank
        transactions using natural language processing, then upload them to a
        self-hosted finance system called{" "}
        <a
          className={cn("link")}
          href="https://www.firefly-iii.org/"
          rel="noreferrer"
          target="_blank"
          title={"Finance manager"}
        >
          Firefly III
        </a>
        . I used a{" "}
        <a
          className={cn("link")}
          href="https://www.raspberrypi.org/"
          rel="noreferrer"
          target="_blank"
          title={"Single-Board Computer"}
        >
          Raspberry Pi
        </a>{" "}
        to host the system with{" "}
        <a
          className={cn("link")}
          href="https://www.docker.com/"
          rel="noreferrer"
          target="_blank"
          title={"Container System"}
        >
          Docker
        </a>
        , and configured a custom{" "}
        <Tooltip text="DNS" tooltip="Domain Name System" /> server using{" "}
        <a
          className={cn("link")}
          href="https://pi-hole.net/"
          rel="noreferrer"
          target="_blank"
          title={"DNS Server"}
        >
          PiHole
        </a>{" "}
        and an{" "}
        <a
          className={cn("link")}
          href="https://www.nginx.com/"
          rel="noreferrer"
          target="_blank"
          title={"Proxy"}
        >
          NGINX
        </a>{" "}
        proxy.
      </>
    ),
    category: "Personal Project",
    isFeatured: false,
    technologies: ["Python", "Docker", "Raspberry Pi", "NGINX"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/mqtt-analyser",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "MQTT Analyser",
    body: (
      <>
        <Tooltip text="CLI" tooltip="Command Line Interface" /> application that
        analyses the performance of an{" "}
        <Tooltip text="MQTT" tooltip="Internet of Things messaging standard" />{" "}
        broker.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    technologies: ["TypeScript", "MQTT"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/mqtt-analyser",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
];

export default timelineData;

/* eslint-disable max-len */
/* eslint-disable sonarjs/no-duplicate-string */
import adaThumbnail from "@assets/projects/ada.png";
import brodburgerThumbnail from "@assets/projects/brodburger.png";
import desktopArtThumbnail from "@assets/projects/desktop_art.png";
import gpsAndrodiGameThumbnail from "@assets/projects/gps_android_game.png";
import iqFocusThumbnail from "@assets/projects/iq_focus.png";
import journeysContinueThumbnail from "@assets/projects/journeyscontinue.png";
import keyboardThumbnail from "@assets/projects/keyboard_cad.jpg";
import proceduralTextThumbnail from "@assets/projects/procedural_text.png";
import pythonThumbnail from "@assets/projects/python.png";
import roverThumbnail from "@assets/projects/rover.jpeg";
import sharkShackThumbnail from "@assets/projects/shark_shack.jpg";
import townHouseThumbnail from "@assets/projects/town_house.jpg";
import weatherStationThumbnail from "@assets/projects/weather_station.jpg";
import Tooltip from "@components/Tooltip";
import cn, { cnScoped } from "@styles/cssUtils";
import { BsFillBookFill, BsGithub } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { SiEslint, SiFigma, SiStorybook } from "react-icons/si";
import technologies from "./technologies";
import styles, { ClassNames } from "./timelineData.module.scss";

export type TimelineItemData = {
  startDate: Date;
  endDate: Date;
  title: string;
  body: JSX.Element;
  thumbnailSrc?: string;
  category: keyof typeof categories;
  technologies?: (keyof typeof technologies)[];
  isFeatured?: boolean;
  links?: {
    text: string;
    url: string;
    icon?: JSX.Element;
  }[];
};

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
  "Canberra College": {
    link: "https://www.canberrac.act.edu.au/",
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
      "Redux",
      "TypeScript",
      "Vite",
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
    thumbnailSrc: brodburgerThumbnail,
    category: "Agile Digital",
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
        application.
      </>
    ),
    category: "Agile Digital",
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
        Maintenance, monitoring and security patching of a patent filing system.
      </>
    ),
    category: "Agile Digital",
    isFeatured: false,
    links: [
      {
        text: "Source IP website",
        url: "https://sourceip.csiro.au/",
      },
    ],
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "Bachelor of Information Technology",
    body: (
      <>
        Graduated from the{" "}
        <a
          className={cn("link")}
          href="https://www.anu.edu.au/"
          rel="noreferrer"
          target="_blank"
          title={"ANU"}
        >
          Australian National University
        </a>{" "}
        with a Bachelor of Information Technology and a{" "}
        <Tooltip text="GPA" tooltip="Grade Point Average" /> of 6.3/7.
      </>
    ),
    category: "Career Event",
    isFeatured: false,
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "ForgeRock Identity Cloud Certified Professional",
    body: (
      <>
        Got certification for{" "}
        <a
          className={cn("link")}
          href="https://www.forgerock.com/platform/identity-cloud"
          rel="noreferrer"
          target="_blank"
          title={"FIDC"}
        >
          ForgeRock Identity Cloud
        </a>
        , an identity and access management platform.
      </>
    ),
    category: "Career Event",
    isFeatured: false,
    links: [
      {
        text: "Credly",
        url: "https://www.credly.com/badges/23372af0-4d55-41e9-a3a3-7d3d55c380fc",
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Siding Spring Observatory VR Experience",
    body: (
      <>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={cnScoped<ClassNames>()("mb-2", styles._videoPlayer)}
          src="https://www.youtube-nocookie.com/embed/iNKi8JYBmeo"
          title="YouTube video player"
        />
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
    technologies: ["Unity", "Oculus", "Android", "CSharp", "Premiere"],
    isFeatured: true,
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
    thumbnailSrc: adaThumbnail,
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
    title: "Started Working at Agile Digital",
    body: (
      <>
        Started a position at{" "}
        <a
          className={cn("link")}
          href={"https://agiledigital.com.au/"}
          rel="noreferrer"
          target="_blank"
          title={"Agile Digital website"}
        >
          Agile Digital
        </a>{" "}
        as a junior software engineer, a company based in Canberra, Australia.
        Agile Digital has worked with a variety of{" "}
        <a
          className={cn("link")}
          href={"https://agiledigital.com.au/clients/"}
          rel="noreferrer"
          target="_blank"
          title={"Agile Digital clients"}
        >
          clients
        </a>{" "}
        including{" "}
        <a
          className={cn("link")}
          href={
            "https://agiledigital.com.au/case-studies/working-with-australias-favourite-car-brand-to-scale-online-security/"
          }
          rel="noreferrer"
          target="_blank"
          title={"Car finance and loans"}
        >
          Toyota Finance Australia
        </a>
        ,{" "}
        <a
          className={cn("link")}
          href={"https://agiledigital.com.au/case-studies/allhomes/"}
          rel="noreferrer"
          target="_blank"
          title={"Real estate business"}
        >
          Allhomes
        </a>
        , and{" "}
        <a
          className={cn("link")}
          href={
            "https://agiledigital.com.au/case-studies/connecting-researchers-to-australian-industry-innovation/"
          }
          rel="noreferrer"
          target="_blank"
          title={"Commonwealth Scientific and Industrial Research Organisation"}
        >
          CSIRO
        </a>
        .
      </>
    ),
    category: "Career Event",
    isFeatured: false,
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
    thumbnailSrc: pythonThumbnail,
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
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Journeys Continue Website",
    body: (
      <>
        Website for{" "}
        <a
          className={cn("link")}
          href="https://journeyscontinue.com.au/"
          rel="noreferrer"
          target="_blank"
          title={"Website"}
        >
          Journeys Continue
        </a>
        , a local business for social work, disability and aged care services.
        Contains a <Tooltip text="PHP" tooltip="Backend Scripting Language" />{" "}
        contact form. Initially built with raw{" "}
        <Tooltip text="HTML" tooltip="HyperText Markup Language" />,{" "}
        <Tooltip text="CSS" tooltip="Cascading Style Sheets" />, and{" "}
        <Tooltip text="Bootstrap" tooltip="Component Library" />. Later
        rewritten in{" "}
        <Tooltip text="React" tooltip="Frontend JavaScript Framework" />.
      </>
    ),
    category: "Personal Project",
    isFeatured: false,
    thumbnailSrc: journeysContinueThumbnail,
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "TypeScript", "React"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Journeys-Continue",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "JourneysContinue.com.au",
        url: "https://journeyscontinue.com.au/",
      },
    ],
  },
  {
    startDate: new Date("2020"),
    endDate: new Date("2020"),
    title: "GPS Android Game",
    body: (
      <>
        Group project at{" "}
        <a
          className={cn("link")}
          href="https://www.anu.edu.au/"
          rel="noreferrer"
          target="_blank"
          title={"Australian National University"}
        >
          ANU
        </a>{" "}
        where we created an Android app that uses Google Maps API to allows
        players to use their{" "}
        <Tooltip text="GPS" tooltip="Global Positioning System" /> to find
        treasure and compete on a leaderboard.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    thumbnailSrc: gpsAndrodiGameThumbnail,
    technologies: ["Java", "Android", "Firebase"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Java-GPS-Android-Game",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Java reference code",
        url: "https://github.com/Tim-W-James/Java-Reference-Code",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2020"),
    endDate: new Date("2020"),
    title: "Synchronous Serial Message Passing",
    body: (
      <>
        Simple synchronous serial protocol for sending full packets of data to a
        receiver, created with{" "}
        <Tooltip text="ARMv7" tooltip="CPU Architecture" /> assembly.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    technologies: ["ARMv7"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/ARMv7-Synchronous-Serial-Message-Passing",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2020"),
    endDate: new Date("2020"),
    title: "Digital Synthesizer ADSR",
    body: (
      <>
        Program that implements digital synthesizer with{" "}
        <Tooltip text="ADSR" tooltip="attack-decay-sustain-release" /> envelope
        functionality in <Tooltip text="ARMv7" tooltip="CPU Architecture" />{" "}
        assembly.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    technologies: ["ARMv7"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/ARMv7-Digital-Synthesizer-ADSR",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2019"),
    endDate: new Date("2019"),
    title: "Interactive Procedural Text Experience",
    body: (
      <>
        An experimental interactive experience where players create their own
        pictures in front of a simulated live audience that reacts to the
        decisions of the player.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    thumbnailSrc: proceduralTextThumbnail,
    technologies: ["JavaScript", "p5js"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/JavaScript-Interactive-Procedural-Text-Experience",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Artist Statement",
        url: "https://github.com/Tim-W-James/JavaScript-Interactive-Procedural-Text-Experience/blob/master/artist-statement.md",
      },
      {
        text: "Collection of other p5.js art projects",
        url: "https://github.com/Tim-W-James/JavaScript-p5-Collection",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2019"),
    endDate: new Date("2019"),
    title: "Interactive Procedural Text Experience",
    body: (
      <>
        Interactive art piece based on the theme &apos;interactive picture
        window&apos;.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    thumbnailSrc: desktopArtThumbnail,
    technologies: ["JavaScript", "p5js"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/JavaScript-Interactive-Desktop-Sim",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Artist Statement",
        url: "https://github.com/Tim-W-James/JavaScript-Interactive-Desktop-Sim/blob/master/artist-statement.md",
      },
      {
        text: "Collection of other p5.js art projects",
        url: "https://github.com/Tim-W-James/JavaScript-p5-Collection",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2019"),
    endDate: new Date("2019"),
    title: "Block Puzzle Game",
    body: (
      <>
        Group project where we created an app based on{" "}
        <Tooltip text="IQ Focus" tooltip="Board Game" /> which involved
        implementing the game logic and a{" "}
        <Tooltip text="GUI" tooltip="Graphical User Interface" />. My primary
        contributions was creating the game logic and a recursive algorithm to
        solve the game and provide hints.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    thumbnailSrc: iqFocusThumbnail,
    technologies: ["Java"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Java-Block-Puzzle-Game",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2019"),
    endDate: new Date("2019"),
    title: "Sushi Go AI",
    body: (
      <>
        Artificial intelligence algorithm that can determine optimal moves to
        take in a game of <Tooltip text="Sushi Go" tooltip="Card Game" />. Uses
        a recursive minimax algorithm and{" "}
        <a
          className={cn("link")}
          href="https://www.haskell.org/"
          rel="noreferrer"
          target="_blank"
          title={"Functional programming language"}
        >
          Haskell
        </a>
        , it can play against a human opponent or another{" "}
        <Tooltip text="AI" tooltip="Artificial Intelligence" />.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    technologies: ["Haskell"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Sushi-Go-AI",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Related Sierpinski triangle project",
        url: "https://github.com/Tim-W-James/Sierpinski-Triangle",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Related 2D shape drawer project",
        url: "https://github.com/Tim-W-James/Shape-Drawer",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2018"),
    title: "Year 12 Graduation",
    body: (
      <>
        Graduated from{" "}
        <a
          className={cn("link")}
          href="https://www.canberrac.act.edu.au/"
          rel="noreferrer"
          target="_blank"
          title={"Canberra College"}
        >
          Canberra College
        </a>{" "}
        with the Principal&apos;s Award for Information Technology and a{" "}
        <a
          className={cn("link")}
          href="https://training.gov.au/training/details/ict20115"
          rel="noreferrer"
          target="_blank"
          title={"Qualification details"}
        >
          Cert. II in Information, Digital Media & Technology
        </a>
        .
      </>
    ),
    category: "Career Event",
    isFeatured: false,
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2018"),
    title: "Project Velocity",
    body: (
      <>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={cnScoped<ClassNames>()("mb-2", styles._videoPlayer)}
          src="https://www.youtube-nocookie.com/embed/9QV3YlMHT-4"
          title="YouTube video player"
        />
        A prototype game with procedurally generated levels and time
        manipulation mechanics.
        <br />
        <br />
        Explore unique procedurally generated levels and search for the exit,
        while fighting enemies and dodging traps as you go. There is also a
        treasure room hidden somewhere in the level, and a challenge room before
        the exit. Use melee attacks, fireballs and your dash abilities to defeat
        enemies.
        <br />
        <br />
        You can also slow down time temporarily, during which you will be able
        to move at full speed but enemies and projectiles will be slowed. While
        time is slowed your abilities are modified. Your melee attack becomes a
        shield, your fireball becomes a barrier that reflects enemy projectiles,
        and your dash becomes a blink that makes you invulnerable.
      </>
    ),
    category: "Canberra College",
    isFeatured: false,
    technologies: ["Unity", "CSharp"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Time-Travel-Roguelite-Game",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Design doc",
        url: "https://docs.google.com/document/d/1brkjiMgB8urmjMZFrbpasWn8Yp-qtIZmtJwBFIAfaxo/view?usp=sharing",
        icon: <BsFillBookFill aria-label="GitHub" />,
      },
      {
        text: "Custom shader",
        url: "https://github.com/Tim-W-James/Pixel-Perfect-Lighting",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2018"),
    title: "Weather Monitoring Station",
    body: (
      <>
        Python code for a weather station that can detect temperature, light
        level, wind speed and wind direction.
      </>
    ),
    category: "Canberra College",
    isFeatured: false,
    thumbnailSrc: weatherStationThumbnail,
    technologies: ["Python", "Raspberry Pi"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Raspberry-Pi-Weather-Station",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2018"),
    title: "Arduino Rover",
    body: (
      <>
        Group project where we created a rover that successfully navigated a
        maze autonomously using ultrasonic sensors and an algorithm I developed.
        Later reimplemented in a project at{" "}
        <a
          className={cn("link")}
          href="https://www.anu.edu.au/"
          rel="noreferrer"
          target="_blank"
          title={"Australian National University"}
        >
          ANU
        </a>
        .
      </>
    ),
    category: "Canberra College",
    isFeatured: false,
    thumbnailSrc: roverThumbnail,
    technologies: ["Arduino"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Arduino-Autonomous-Rover",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "TinkerCAD simulation",
        url: "https://www.tinkercad.com/things/gk0MvQ7Jkc8",
      },
    ],
  },
  {
    startDate: new Date("2017"),
    endDate: new Date("2017"),
    title: "Architecture Town House Design",
    body: <>Floor plan, landscaping and 3D render of a town house complex.</>,
    category: "Canberra College",
    isFeatured: false,
    thumbnailSrc: townHouseThumbnail,
    technologies: ["Vectorworks"],
  },
  {
    startDate: new Date("2017"),
    endDate: new Date("2017"),
    title: "Keyboard CAD Model",
    body: (
      <>
        <Tooltip text="CAD" tooltip="Computer Aided Design" /> design and model
        for a keyboard.
      </>
    ),
    category: "Canberra College",
    isFeatured: false,
    thumbnailSrc: keyboardThumbnail,
    technologies: ["Vectorworks"],
  },
  {
    startDate: new Date("2017"),
    endDate: new Date("2017"),
    title: "3D Platformer Game",
    body: (
      <>A third-person 3D platformer game featuring power-ups and vehicles.</>
    ),
    category: "Canberra College",
    isFeatured: false,
    technologies: ["Unreal"],
  },
  {
    startDate: new Date("2016"),
    endDate: new Date("2016"),
    title: "Logo Design",
    body: <>Graphic design for a seafood restaurant.</>,
    category: "Canberra College",
    isFeatured: false,
    thumbnailSrc: sharkShackThumbnail,
    technologies: ["AdobeXD"],
  },
  {
    startDate: new Date("2016"),
    endDate: new Date("2016"),
    title: "Void Matrix Minecraft Map",
    body: (
      <>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={cnScoped<ClassNames>()("mb-2", styles._videoPlayer)}
          height="315"
          src="https://www.youtube-nocookie.com/embed/HAFvKqTV4Fg"
          title="YouTube video player"
          width="560"
        />
        Follow up to my popular Minecraft map, Labyrinth of Puzzles, the Void
        Matrix is a CTM custom adventure map which will challenge you with fun
        and unique levels filled with secrets. Pushed the limits of
        Minecraft&apos;s{" "}
        <a
          className={cn("link")}
          href="https://learn.microsoft.com/en-us/minecraft/creator/documents/commandblocks"
          rel="noreferrer"
          target="_blank"
          title={"Minecraft Command Blocks"}
        >
          command block scripting language
        </a>
        .
      </>
    ),
    category: "Personal Project",
    isFeatured: false,
    links: [
      {
        text: "Map download",
        url: "https://www.minecraftmaps.com/adventure-maps/void-matrix-remastered",
      },
    ],
  },
  {
    startDate: new Date("2015"),
    endDate: new Date("2015"),
    title: "Labyrinth of Puzzles Minecraft Map",
    body: (
      <>
        Custom Minecraft map filled with puzzles, boss battles and more.
        Featured by YouTubers{" "}
        <a
          className={cn("link")}
          href="https://www.youtube.com/@EthosLab"
          rel="noreferrer"
          target="_blank"
          title={"Youtube Channel"}
        >
          EthosLab
        </a>
        ,{" "}
        <a
          className={cn("link")}
          href="https://www.youtube.com/user/VintageBeef"
          rel="noreferrer"
          target="_blank"
          title={"Youtube Channel"}
        >
          VintageBeef
        </a>
        , and{" "}
        <a
          className={cn("link")}
          href="https://www.youtube.com/user/PauseUnpause"
          rel="noreferrer"
          target="_blank"
          title={"Youtube Channel"}
        >
          PauseUnpause
        </a>
        . One of my first introductions to programming, using Minecraft&apos;s{" "}
        <a
          className={cn("link")}
          href="https://learn.microsoft.com/en-us/minecraft/creator/documents/commandblocks"
          rel="noreferrer"
          target="_blank"
          title={"Minecraft Command Blocks"}
        >
          command block scripting language
        </a>
        .
      </>
    ),
    category: "Personal Project",
    isFeatured: false,
    links: [
      {
        text: "Map download",
        url: "https://www.minecraftmaps.com/ctm-maps/the-labyrinth-of-puzzles",
      },
    ],
  },
];

export default timelineData;

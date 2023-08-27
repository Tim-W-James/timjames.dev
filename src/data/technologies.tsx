// eslint-disable-next-line filename-rules/match
import { FaJava } from "react-icons/fa";
import {
  SiAdobepremierepro,
  SiAmazonaws,
  SiAndroid,
  SiArduino,
  SiAuth0,
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiCypress,
  SiDocker,
  SiEclipsemosquitto,
  SiElastic,
  SiFigma,
  SiFirebase,
  SiGithubactions,
  SiGo,
  SiGrafana,
  SiHaskell,
  SiHasura,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiJupyter,
  SiKubernetes,
  SiLogstash,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiOculus,
  SiP5Dotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRedux,
  SiSass,
  SiScala,
  SiServerless,
  SiStorybook,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiUnity,
  SiUnrealengine,
  SiVectorworks,
  SiVite,
} from "react-icons/si";
import { TbCircleLetterS } from "react-icons/tb";

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
  Redux: {
    icon: <SiRedux aria-label="Redux" />,
    link: "https://redux.js.org/",
    isCore: false,
  },
  Cypress: {
    icon: <SiCypress aria-label="Cypress" />,
    link: "https://www.cypress.io/",
    isCore: false,
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss aria-label="Tailwind" />,
    link: "https://tailwindcss.com/",
    isCore: false,
  },
  Sass: {
    icon: <SiSass aria-label="Sass" />,
    link: "https://sass-lang.com/",
    isCore: false,
  },
  Figma: {
    icon: <SiFigma aria-label="Figma" />,
    link: "https://www.figma.com/",
    isCore: false,
  },
  Storybook: {
    icon: <SiStorybook aria-label="Storybook" />,
    link: "https://storybook.js.org/",
    isCore: false,
  },
  Netlify: {
    icon: <SiNetlify aria-label="Netlify" />,
    link: "https://www.netlify.com/",
    isCore: false,
  },
  "GitHub Actions": {
    icon: <SiGithubactions aria-label="GitHub Actions" />,
    link: "https://github.com/features/actions",
    isCore: false,
  },
  Jenkins: {
    icon: <SiJenkins aria-label="Jenkins" />,
    link: "https://www.jenkins.io/",
    isCore: false,
  },
  Docker: {
    icon: <SiDocker aria-label="Docker" />,
    link: "https://www.docker.com/",
    isCore: false,
  },
  Kubernetes: {
    icon: <SiKubernetes aria-label="Kubernetes" />,
    link: "https://kubernetes.io/",
    isCore: false,
  },
  ElasticSearch: {
    icon: <SiElastic aria-label="ElasticSearch" />,
    link: "https://www.elastic.co/",
    isCore: false,
  },
  ELK: {
    icon: <SiLogstash aria-label="ELK Stack" />,
    link: "https://www.elastic.co/what-is/elk-stack",
    isCore: false,
  },
  Grafana: {
    icon: <SiGrafana aria-label="Grafana" />,
    link: "https://grafana.com",
    isCore: false,
  },
  Terraform: {
    icon: <SiTerraform aria-label="Terraform" />,
    link: "https://www.terraform.io/",
    isCore: false,
  },
  Serverless: {
    icon: <SiServerless aria-label="Serverless" />,
    link: "https://www.serverless.com/",
    isCore: false,
  },
  "Amazon Web Services": {
    icon: <SiAmazonaws aria-label="AWS" />,
    link: "https://aws.amazon.com/",
    isCore: true,
  },
  "ForgeRock Identity Cloud": {
    icon: undefined,
    link: "https://www.typescriptlang.org/",
    isCore: false,
  },
  "Open Policy Agent": {
    icon: undefined,
    link: "https://www.openpolicyagent.org/",
    isCore: false,
  },
  Scala: {
    icon: <SiScala aria-label="Scala" />,
    link: "https://www.scala-lang.org/",
    isCore: false,
  },
  GoLang: {
    icon: <SiGo aria-label="Go" />,
    link: "https://go.dev/",
    isCore: false,
  },
  "Fat Zebra": {
    icon: undefined,
    link: "https://www.fatzebra.com/",
    isCore: false,
  },
  Oculus: {
    icon: <SiOculus aria-label="Oculus" />,
    link: "https://www.oculus.com/",
    isCore: false,
  },
  Unity: {
    icon: <SiUnity aria-label="Unity" />,
    link: "https://unity.com/",
    isCore: false,
  },
  CSharp: {
    icon: <SiCsharp aria-label="CSharp" />,
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
    isCore: false,
  },
  Premiere: {
    icon: <SiAdobepremierepro aria-label="Premiere" />,
    link: "https://www.adobe.com/au/products/premiere.html",
    isCore: false,
  },
  Ada: {
    icon: undefined,
    link: "https://learn.adacore.com/courses/intro-to-ada/index.html",
    isCore: false,
  },
  Python: {
    icon: <SiPython aria-label="Python" />,
    link: "https://www.python.org/",
    isCore: false,
  },
  Jupyter: {
    icon: <SiJupyter aria-label="Jupyter" />,
    link: "https://jupyter.org/",
    isCore: false,
  },
  SQL: {
    icon: <SiPostgresql aria-label="SQL" />,
    link: "https://www.postgresql.org/",
    isCore: false,
  },
  MQTT: {
    icon: <SiEclipsemosquitto aria-label="MQTT" />,
    link: "https://mqtt.org/",
    isCore: false,
  },
  NGINX: {
    icon: <SiNginx aria-label="NGINX" />,
    link: "https://www.nginx.com/",
    isCore: false,
  },
  "Raspberry Pi": {
    icon: <SiRaspberrypi aria-label="Raspberry Pi" />,
    link: "https://www.raspberrypi.org/",
    isCore: false,
  },
  Arduino: {
    icon: <SiArduino aria-label="Arduino" />,
    link: "https://www.arduino.cc/",
    isCore: false,
  },
  Vite: {
    icon: <SiVite aria-label="Vite" />,
    link: "https://vitejs.dev/",
    isCore: false,
  },
  JavaScript: {
    icon: <SiJavascript aria-label="JavaScript" />,
    link: "https://www.javascript.com/",
    isCore: false,
  },
  HTML: {
    icon: <SiHtml5 aria-label="HTML" />,
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    isCore: false,
  },
  CSS: {
    icon: <SiCss3 aria-label="CSS" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    isCore: false,
  },
  Bootstrap: {
    icon: <SiBootstrap aria-label="Bootstrap" />,
    link: "https://getbootstrap.com/",
    isCore: false,
  },
  PHP: {
    icon: <SiPhp aria-label="PHP" />,
    link: "https://www.php.net/",
    isCore: false,
  },
  Java: {
    icon: <FaJava aria-label="Java" />,
    link: "https://www.java.com/en/",
    isCore: false,
  },
  Android: {
    icon: <SiAndroid aria-label="Android" />,
    link: "https://www.android.com/intl/en_au/",
    isCore: false,
  },
  Firebase: {
    icon: <SiFirebase aria-label="Firebase" />,
    link: "https://firebase.google.com/",
    isCore: false,
  },
  ARMv7: {
    icon: undefined,
    link: "https://developer.arm.com/documentation/ddi0406/latest",
    isCore: false,
  },
  p5js: {
    icon: <SiP5Dotjs aria-label="p5js" />,
    link: "https://p5js.org/",
    isCore: false,
  },
  Haskell: {
    icon: <SiHaskell aria-label="Haskell" />,
    link: "https://www.haskell.org/",
    isCore: false,
  },
  Vectorworks: {
    icon: <SiVectorworks aria-label="Vectorworks" />,
    link: "https://www.vectorworks.net/",
    isCore: false,
  },
  Unreal: {
    icon: <SiUnrealengine aria-label="Unreal" />,
    link: "https://www.unrealengine.com/",
    isCore: false,
  },
  NextJS: {
    icon: <SiNextdotjs aria-label="NextJS" />,
    link: "https://nextjs.org/",
    isCore: false,
  },
  SanityCMS: {
    icon: <TbCircleLetterS aria-label="SanityCMS" />,
    link: "https://www.sanity.io/",
    isCore: false,
  },
  Hasura: {
    icon: <SiHasura aria-label="Hasura" />,
    link: "https://hasura.io/",
    isCore: false,
  },
  Auth0: {
    icon: <SiAuth0 aria-label="Auth0" />,
    link: "https://auth0.com/",
    isCore: false,
  },
} as const satisfies Record<
  string,
  { icon?: JSX.Element; link: string; isCore?: boolean }
>;

export default technologies;

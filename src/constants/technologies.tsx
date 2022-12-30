import {
  SiAmazonaws,
  SiCypress,
  SiDocker,
  SiElastic,
  SiFigma,
  SiGithubactions,
  SiGo,
  SiGrafana,
  SiJenkins,
  SiKubernetes,
  SiLogstash,
  SiNetlify,
  SiReact,
  SiRedux,
  SiSass,
  SiScala,
  SiServerless,
  SiStorybook,
  SiTailwindcss,
  SiTerraform,
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
  Tailwind: {
    icon: <SiTailwindcss aria-label="Tailwind" />,
    link: "https://tailwindcss.com/",
    isCore: true,
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
} as const satisfies Record<
  string,
  { icon?: JSX.Element; link: string; isCore?: boolean }
>;

export default technologies;

import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxMountainsComponent from "./ParallaxMountains";

export default {
  title: "Components/Layout/ParallaxMountains",
  component: ParallaxMountainsComponent,
  parameters: {
    backgrounds: { disable: true },
  },
};

export const ParallaxMountains = () => (
  <ParallaxProvider>
    <ParallaxMountainsComponent />
  </ParallaxProvider>
);

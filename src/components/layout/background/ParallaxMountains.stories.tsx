import { Meta, StoryFn } from "@storybook/react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxMountainsComponent from "./ParallaxMountains";

export default {
  component: ParallaxMountainsComponent,
  parameters: {
    backgrounds: { disable: true },
  },
} as Meta<typeof ParallaxMountainsComponent>;

const Template: StoryFn<typeof ParallaxMountainsComponent> = (args) => (
  <ParallaxMountainsComponent {...args} />
);

export const ParallaxMountains = Template.bind({});
ParallaxMountains.decorators = [
  (Story) => (
    <ParallaxProvider>
      <Story />
    </ParallaxProvider>
  ),
];
ParallaxMountains.parameters = {
  controls: { hideNoControlsWarning: true },
};

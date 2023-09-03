import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

import NavbarComponent from "./Navbar";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: NavbarComponent,
} as Meta<typeof NavbarComponent>;

const Template: StoryFn<typeof NavbarComponent> = (args) => (
  <NavbarComponent {...args} />
);

export const Navbar = Template.bind({});
Navbar.decorators = [
  (Story) => (
    <Router>
      <Story />
    </Router>
  ),
];
Navbar.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const MobileNavbar = Template.bind({});
MobileNavbar.decorators = Navbar.decorators;
MobileNavbar.parameters = {
  ...Navbar.parameters,
  viewport: {
    defaultViewport: "mobile2",
  },
};

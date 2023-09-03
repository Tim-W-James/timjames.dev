import { Meta, StoryFn } from "@storybook/react";

import FooterComponent from "./Footer";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: FooterComponent,
} as Meta<typeof FooterComponent>;

const Template: StoryFn<typeof FooterComponent> = (args) => (
  <FooterComponent {...args} />
);

export const Footer = Template.bind({});
Footer.args = {
  allowFixed: true,
};

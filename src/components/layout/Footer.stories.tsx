import { Meta, StoryFn } from "@storybook/react";
import FooterComponent from "./Footer";

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

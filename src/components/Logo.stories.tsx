import logo from "@images/logo.png";
import profile from "@images/profile.jpg";
import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";
import LogoComponent from "./Logo";

const images = {
  logo,
  profile,
};

export default {
  component: LogoComponent,
  argTypes: {
    imageSrc: {
      options: Object.keys(images),
      mapping: images,
      control: {
        type: "select",
        labels: {
          logo: "Main logo",
          profile: "Profile picture",
        },
      },
    },
  },
} as Meta<typeof LogoComponent>;

const Template: StoryFn<typeof LogoComponent> = (args) => (
  <LogoComponent {...args} />
);

export const Logo = Template.bind({});
Logo.args = {
  imageSrc: logo,
};
Logo.decorators = [
  (Story) => (
    <div className={cn("p-8")}>
      <Story />
    </div>
  ),
];

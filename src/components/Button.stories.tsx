import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";
import { BsArrowRightCircleFill, BsMailbox } from "react-icons/bs";
import ButtonComponent from "./Button";

const icons = {
  none: undefined,
  arrow: <BsArrowRightCircleFill />,
  mailbox: <BsMailbox />,
};

export default {
  component: ButtonComponent,
  argTypes: {
    onClick: { action: "clicked", if: { arg: "mode", eq: "button" } },
    to: {
      if: { arg: "mode", neq: "button" },
    },
    iconRight: {
      if: { arg: "icon", truthy: true },
    },
    className: {
      table: {
        disable: true,
      },
    },
    label: {
      if: { arg: "isLabelHidden", truthy: false },
    },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          none: "No icon",
          arrow: "Arrow icon",
          mailbox: "Mailbox icon",
        },
      },
    },
  },
} as Meta<typeof ButtonComponent>;

const Template: StoryFn<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = Template.bind({});
Button.args = {
  label: "Label Text",
  tooltip: "Tooltip Text",
  to: "https://timjames.dev/",
  isLabelHidden: false,
  isLight: true,
  disabled: false,
  mode: "button",
  icon: icons.arrow,
  iconRight: true,
};
Button.decorators = [
  (Story) => (
    <div className={cn("flex p-8")}>
      <Story />
    </div>
  ),
];

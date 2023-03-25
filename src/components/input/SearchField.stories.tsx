import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";

import SearchFieldComponent from "./SearchField";

export default {
  component: SearchFieldComponent,
} as Meta<typeof SearchFieldComponent>;

const Template: StoryFn<typeof SearchFieldComponent> = (args) => (
  <SearchFieldComponent {...args} />
);

export const SearchField = Template.bind({});
SearchField.decorators = [
  (Story) => (
    <div className={cn("p-8")}>
      <Story />
    </div>
  ),
];
SearchField.parameters = {
  controls: { hideNoControlsWarning: true },
};

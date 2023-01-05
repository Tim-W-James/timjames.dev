import timelineData from "@constants/timelineData";
import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";
import { BrowserRouter as Router } from "react-router-dom";
import TimelineItemComponent from "./TimelineItem";

export default {
  component: TimelineItemComponent,
} as Meta<typeof TimelineItemComponent>;

const Template: StoryFn<typeof TimelineItemComponent> = (args) => (
  <TimelineItemComponent {...args} />
);

export const TimelineItem = Template.bind({});
TimelineItem.args = {
  data: timelineData[0],
  index: 0,
  hasTwoColumns: false,
};
TimelineItem.decorators = [
  (Story) => (
    <Router>
      <div className={cn("container mx-auto p-8")}>
        <Story />
      </div>
    </Router>
  ),
];

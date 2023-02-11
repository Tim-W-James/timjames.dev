import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";
import { BrowserRouter as Router } from "react-router-dom";
import categories from "../data/categories";
import timelineData from "../data/timelineData";
import TimelineItemData from "../types/TimelineData";
import {
  sortByCategoryAlphabetical,
  sortByDuration,
  sortByFeatured,
  sortByTechnologiesCount,
} from "../utils/timelineSortFuncs";
import TimelineComponent from "./Timeline";

const sorts = {
  sortByDuration,
  sortByCategoryAlphabetical,
  sortByTechnologiesCount,
  sortByFeatured,
};

const selectedCategory = (category: string) => (item: TimelineItemData) =>
  item.category === category;

const filters = {
  ...Object.fromEntries(
    Object.entries(categories).map((category) => [
      category[0],
      selectedCategory(category[0]),
    ])
  ),
  none: () => true,
};

export default {
  title: "Components/timeline/Timeline",
  component: TimelineComponent,
  argTypes: {
    sortFunc: {
      options: Object.keys(sorts),
      mapping: sorts,
      control: {
        type: "select",
        labels: {
          sortByDuration: "Duration",
          sortByCategoryAlphabetical: "Category",
          sortByTechnologiesCount: "Technology",
          sortByFeatured: "Featured",
        },
      },
    },
    filterFunc: {
      options: Object.keys(filters),
      mapping: filters,
      control: {
        type: "select",
      },
    },
  },
} as Meta<typeof TimelineComponent>;

const Template: StoryFn<typeof TimelineComponent> = (args) => (
  <TimelineComponent {...args} />
);

export const Timeline = Template.bind({});
Timeline.args = {
  data: timelineData,
  filterFunc: filters.none,
  sortFunc: sorts.sortByFeatured,
};
Timeline.decorators = [
  (Story) => (
    <Router>
      <div className={cn("container mx-auto p-8")}>
        <Story />
      </div>
    </Router>
  ),
];

export const MobileTimeline = Template.bind({});
MobileTimeline.args = Timeline.args;
MobileTimeline.decorators = Timeline.decorators;
MobileTimeline.parameters = {
  ...Timeline.parameters,
  viewport: {
    defaultViewport: "mobile2",
  },
};

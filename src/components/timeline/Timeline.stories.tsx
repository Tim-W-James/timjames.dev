import timelineData, {
  TimelineItemData,
  categories,
} from "@constants/timelineData";
import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";
import {
  sortByCategoryAlphabetical,
  sortByDuration,
  sortByFeatured,
  sortByTechnologiesCount,
} from "@utils/timelineSortFuncs";
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
    <div className={cn("container mx-auto p-8")}>
      <Story />
    </div>
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

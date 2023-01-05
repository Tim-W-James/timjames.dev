/* eslint-disable sonarjs/no-duplicate-string */
import mockArticle from "@constants/mocks/article";
import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";
import { BrowserRouter as Router } from "react-router-dom";
import CardComponent from "./Card";
import LoadingCardComponent from "./LoadingCard";

export default {
  component: CardComponent,
  tags: ["autodocs"],
} as Meta<typeof CardComponent>;

const Template: StoryFn<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
);

export const BlogCard = Template.bind({});
BlogCard.args = { article: mockArticle };
BlogCard.decorators = [
  (Story) => (
    <Router>
      <div className={cn("p-8")}>
        <Story />
      </div>
    </Router>
  ),
];

const TemplateLoading: StoryFn<typeof LoadingCardComponent> = (args) => (
  <LoadingCardComponent {...args} />
);

export const LoadingCard = TemplateLoading.bind({});
LoadingCard.decorators = [
  (Story) => (
    <div className={cn("p-8")}>
      <Story />
    </div>
  ),
];

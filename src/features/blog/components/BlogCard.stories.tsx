import mockArticle from "@mocks/article";
import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";
import { BrowserRouter as Router } from "react-router-dom";

import BlogCardComponent from "./BlogCard";
import BlogCardLoadingComponent from "./BlogCardLoading";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Components/blog/BlogCard",
  component: BlogCardComponent,
  tags: ["autodocs"],
} as Meta<typeof BlogCardComponent>;

const Template: StoryFn<typeof BlogCardComponent> = (args) => (
  <BlogCardComponent {...args} />
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

const TemplateLoading: StoryFn<typeof BlogCardLoadingComponent> = (args) => (
  <BlogCardLoadingComponent {...args} />
);

export const LoadingCard = TemplateLoading.bind({});
LoadingCard.decorators = [
  (Story) => (
    <div className={cn("p-8")}>
      <Story />
    </div>
  ),
];

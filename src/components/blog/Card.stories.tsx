/* eslint-disable sonarjs/no-duplicate-string */
import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";
import { BrowserRouter as Router } from "react-router-dom";
import CardComponent from "./Card";
import LoadingCardComponent from "./LoadingCard";

// Example API response
const article = {
  canonical_url:
    "https://dev.to/timwjames/command-line-tools-for-productive-developers-pph",
  collection_id: null,
  comments_count: 5,
  cover_image:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--e8wmUyZo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6x44n3nqxqp2154m2ezv.png",
  created_at: "2022-04-10T05:28:03Z",
  crossposted_at: null,
  description:
    "This guide is a compilation of various command line tools that will " +
    "improve your productivity in...",
  edited_at: "2022-05-09T12:08:21Z",
  id: 1050475,
  last_comment_at: "2022-04-23T04:58:24Z",
  path: "/timwjames/command-line-tools-for-productive-developers-pph",
  positive_reactions_count: 77,
  public_reactions_count: 77,
  published_at: "2022-04-10T05:28:03Z",
  published_timestamp: "2022-04-10T05:28:03Z",
  readable_publish_date: "Apr 10",
  reading_time_minutes: 6,
  slug: "command-line-tools-for-productive-developers-pph",
  social_image:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--ZE6wRcId--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6x44n3nqxqp2154m2ezv.png",
  tag_list: ["productivity", "linux", "bash", "wsl"],
  tags: "productivity, linux, bash, wsl",
  title: "Command Line Tools for Productive Developers",
  type_of: "article",
  url: "https://dev.to/timwjames/command-line-tools-for-productive-developers-pph",
  user: {
    github_username: "Tim-W-James",
    name: "TimJ",
    profile_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--4BphK7Ro--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/782235/0842577c-23dc-4d5d-a6c9-5e8120a507af.png",
    profile_image_90:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--zIlsy1Om--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/782235/0842577c-23dc-4d5d-a6c9-5e8120a507af.png",
    twitter_username: null,
    user_id: 782235,
    username: "timwjames",
    website_url: "https://timjames.dev/",
  },
};

export default {
  component: CardComponent,
  tags: ["autodocs"],
} as Meta<typeof CardComponent>;

const Template: StoryFn<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
);

export const BlogCard = Template.bind({});
BlogCard.args = { article };
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

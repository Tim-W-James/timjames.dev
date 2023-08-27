import mockArticle from "@mocks/article";
import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./BlogCard.stories";

const { BlogCard } = composeStories(stories);

it("blog card contains article title", () => {
  // Arrange
  const { getByRole } = render(<BlogCard />);

  // Assert
  expect(getByRole("heading")).toHaveTextContent(mockArticle.title);
});

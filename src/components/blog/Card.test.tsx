import mockArticle from "@constants/mocks/article";
import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import * as stories from "./Card.stories";

const { BlogCard } = composeStories(stories);

it("blog card contains article title", () => {
  // Arrange
  const { getByRole } = render(<BlogCard />);

  // Assert
  expect(getByRole("heading")).toHaveTextContent(mockArticle.title);
});

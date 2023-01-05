import { composeStories } from "@storybook/testing-react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as stories from "./SearchField.stories";

const { SearchField } = composeStories(stories);

it("can enter search text", async () => {
  // Arrange
  const user = userEvent.setup();
  const mockSearch = "something";
  const { getByRole } = render(<SearchField />);

  // Act
  await user.type(getByRole("searchbox"), mockSearch);

  // Assert
  await waitFor(
    () => expect(screen.getByRole("searchbox")).toHaveValue(mockSearch),
    {
      timeout: 2000,
    }
  );
});

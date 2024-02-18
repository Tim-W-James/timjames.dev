import { composeStories } from "@storybook/react";
import { render, screen, waitFor } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
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

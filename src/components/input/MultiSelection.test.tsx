import selectionOptions from "@mocks/options";
import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import userEvent from "@testing-library/user-event";

import * as stories from "./MultiSelection.stories";

const { MultiSelection } = composeStories(stories);

it("selection dropdown contains search term", async () => {
  // Arrange
  const user = userEvent.setup();
  const { getByText } = render(<MultiSelection />);

  // Act
  await user.type(
    getByText(/select\.\.\./iu),
    selectionOptions[0]?.label ?? ""
  );

  // Assert
  expect(getByText(/result/iu)).toHaveTextContent(
    /1 result available for search term Chocolate./iu
  );
});

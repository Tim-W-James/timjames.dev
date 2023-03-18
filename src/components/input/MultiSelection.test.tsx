import selectionOptions from "@mocks/options";
import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
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
    selectionOptions[0]?.label || ""
  );

  // Assert
  expect(getByText(/option/iu)).toHaveTextContent(/option Chocolate focused/iu);
});

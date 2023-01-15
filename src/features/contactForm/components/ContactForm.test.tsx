import { fireEvent, waitFor } from "@storybook/testing-library";
import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as stories from "./ContactForm.stories";

const { EmptyForm } = composeStories(stories);

it("form cannot be submitted with empty fields", () => {
  // Arrange
  const { getByRole } = render(<EmptyForm />);

  // Assert
  expect(getByRole("button")).toBeDisabled();
});

it("form can be submitted with valid fields", async () => {
  // Arrange
  const user = userEvent.setup();
  const { getByLabelText, getByRole } = render(<EmptyForm />);

  // Act
  await user.type(
    getByLabelText(/name/iu, {
      selector: "input",
    }),
    "John Doe"
  );

  await user.type(
    getByLabelText(/email/iu, {
      selector: "input",
    }),
    "john@gmail.com"
  );

  fireEvent.change(
    getByLabelText(/message/iu, {
      selector: "textarea",
    }),
    {
      target: { value: "Hello!" },
    }
  );

  // Assert
  await waitFor(() => expect(getByRole("button")).toBeEnabled(), {
    timeout: 2000,
  });
});

it("form cannot be submitted with invalid fields", async () => {
  // Arrange
  const user = userEvent.setup();
  const { getByLabelText, getByRole } = render(<EmptyForm />);

  // Act
  await user.type(
    getByLabelText(/name/iu, {
      selector: "input",
    }),
    "J"
  );

  await user.type(
    getByLabelText(/email/iu, {
      selector: "input",
    }),
    "john"
  );

  fireEvent.change(
    getByLabelText(/message/iu, {
      selector: "textarea",
    }),
    {
      target: { value: "!" },
    }
  );

  // Assert
  expect(getByRole("button")).toBeDisabled();
});

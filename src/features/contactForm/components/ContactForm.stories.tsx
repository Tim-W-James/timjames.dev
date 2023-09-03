import Toast from "@components/utils/Toast";
import contactFormReducer from "@context/ContactFormSlice";
import { configureStore } from "@reduxjs/toolkit";
import { expect } from "@storybook/jest";
import { Meta, StoryFn } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import cn from "@styles/cssUtils";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Provider } from "react-redux";

import { contactFormOnSubmitDev } from "../utils/submitFuncs";
import ContactFormComponent from "./ContactForm";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Components/forms/ContactForm",
  component: ContactFormComponent,
  argTypes: {
    onSubmit: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <GoogleReCaptchaProvider
        container={{
          element: "captcha-container",
          parameters: {
            badge: "bottomright",
            theme: "dark",
          },
        }}
        reCaptchaKey={import.meta.env["STORYBOOK_SITE_RECAPTCHA_KEY"] || ""}
      >
        <div className={cn("p-8 pb-24")}>
          <Story />
        </div>
        <div className={cn("captcha-show")} id="captcha-container" />
        <Toast />
      </GoogleReCaptchaProvider>
    ),
  ],
} as Meta<typeof ContactFormComponent>;

const Template: StoryFn<typeof ContactFormComponent> = (args) => (
  <ContactFormComponent {...args} />
);

export const EmptyForm = Template.bind({});
EmptyForm.args = {
  onSubmit: contactFormOnSubmitDev,
};
EmptyForm.decorators = [
  (Story) => (
    <Provider
      store={configureStore({
        reducer: {
          contactForm: contactFormReducer,
        },
      })}
    >
      <Story />
    </Provider>
  ),
];
EmptyForm.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const ValidForm = Template.bind({});
ValidForm.args = {
  ...EmptyForm.args,
};
ValidForm.decorators = [
  (Story) => (
    <Provider
      store={configureStore({
        reducer: {
          contactForm: contactFormReducer,
        },
      })}
    >
      <Story />
    </Provider>
  ),
];
ValidForm.parameters = {
  ...EmptyForm.parameters,
};
ValidForm.play = async ({ canvasElement }) => {
  // Arrange
  const canvas = within(canvasElement);

  // Only for visual purposes, not required for the test
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Act
  await userEvent.type(
    canvas.getByLabelText(/name/iu, {
      selector: "input",
    }),
    "John Doe",
    {
      delay: 50,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(/email/iu, {
      selector: "input",
    }),
    "john@gmail.com",
    {
      delay: 50,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(/message/iu, {
      selector: "textarea",
    }),
    "Hello!",
    {
      delay: 50,
    }
  );

  userEvent.click(canvas.getByRole("button"));

  // Assert
  await waitFor(
    () => expect(canvas.getByRole("button")).toHaveTextContent(/sent/iu),
    { timeout: 2000 }
  );
  expect(
    canvas.getByLabelText(/name/iu, {
      selector: "input",
    })
  ).toBeDisabled();
  expect(
    canvas.getByLabelText(/email/iu, {
      selector: "input",
    })
  ).toBeDisabled();
  expect(
    canvas.getByLabelText(/message/iu, {
      selector: "textarea",
    })
  ).toBeDisabled();
};

export const InvalidForm = Template.bind({});
InvalidForm.args = {
  ...EmptyForm.args,
};
InvalidForm.decorators = [
  (Story) => (
    <Provider
      store={configureStore({
        reducer: {
          contactForm: contactFormReducer,
        },
      })}
    >
      <Story />
    </Provider>
  ),
];
InvalidForm.parameters = {
  ...EmptyForm.parameters,
};
InvalidForm.play = async ({ canvasElement }) => {
  // Arrange
  const canvas = within(canvasElement);

  // Only for visual purposes, not required for the test
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Act
  await userEvent.type(
    canvas.getByLabelText(/name/iu, {
      selector: "input",
    }),
    "J",
    {
      delay: 50,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(/email/iu, {
      selector: "input",
    }),
    "john",
    {
      delay: 50,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(/message/iu, {
      selector: "textarea",
    }),
    "!",
    {
      delay: 50,
    }
  );

  userEvent.click(canvas.getByRole("button"));

  // Assert
  expect(canvas.getByRole("button")).toHaveTextContent(
    /please complete the form/iu
  );
};

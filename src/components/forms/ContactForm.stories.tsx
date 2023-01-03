import { expect } from "@storybook/jest";
import { Meta, StoryFn } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import cn from "@styles/cssUtils";
import { contactFormOnSubmitDev } from "@utils/contactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ToastContainer } from "react-toastify";
import ContactFormComponent from "./ContactForm";

export default {
  component: ContactFormComponent,
  argTypes: {
    onSubmit: {
      table: {
        disable: true,
      },
    },
  },
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
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
        theme="dark"
      />
    </GoogleReCaptchaProvider>
  ),
];
EmptyForm.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const ValidForm = Template.bind({});
ValidForm.args = {
  ...EmptyForm.args,
};
ValidForm.decorators = EmptyForm.decorators;
ValidForm.parameters = {
  ...EmptyForm.parameters,
};
ValidForm.play = async ({ canvasElement }) => {
  // Arrange
  const canvas = within(canvasElement);

  // Act
  await userEvent.type(
    canvas.getByLabelText(/name/iu, {
      selector: "input",
    }),
    "John Doe",
    {
      delay: 10,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(/email/iu, {
      selector: "input",
    }),
    "john@gmail.com",
    {
      delay: 10,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(/message/iu, {
      selector: "textarea",
    }),
    "Hello!",
    {
      delay: 10,
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
InvalidForm.decorators = EmptyForm.decorators;
InvalidForm.parameters = {
  ...EmptyForm.parameters,
};
InvalidForm.play = async ({ canvasElement }) => {
  // Arrange
  const canvas = within(canvasElement);

  // Act
  await userEvent.type(
    canvas.getByLabelText(/name/iu, {
      selector: "input",
    }),
    "J",
    {
      delay: 10,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(/email/iu, {
      selector: "input",
    }),
    "john",
    {
      delay: 10,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(/message/iu, {
      selector: "textarea",
    }),
    "!",
    {
      delay: 10,
    }
  );

  userEvent.click(canvas.getByRole("button"));

  // Assert
  expect(canvas.getByRole("button")).toBeDisabled();
};

import { expect, Page, test } from "@playwright/test";

const openHamburgerNav = async (isMobile: boolean | undefined, page: Page) => {
  if (isMobile) {
    await page.getByRole("button", { name: "Open Navigation Menu" }).click();
  }
};

test("should not be reset after changing routes", async ({
  page,
  isMobile,
}) => {
  // Enter content into the form
  await page.goto("http://localhost:3000/contact");
  await page.getByPlaceholder("Your name here...").fill("John Doe");
  await page.getByPlaceholder("example@gmail.com").fill("john@gmail.com");
  await page.getByPlaceholder("Your message here...").fill("Hello!");

  // Navigate to some other route, then back again
  openHamburgerNav(isMobile, page);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Home", exact: true })
    .click();
  openHamburgerNav(isMobile, page);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact", exact: true })
    .click();

  // check form input
  expect(await page.getByPlaceholder("Your name here...").inputValue()).toBe(
    "John Doe"
  );
  expect(await page.getByPlaceholder("example@gmail.com").inputValue()).toBe(
    "john@gmail.com"
  );
  expect(await page.getByPlaceholder("Your message here...").inputValue()).toBe(
    "Hello!"
  );
});

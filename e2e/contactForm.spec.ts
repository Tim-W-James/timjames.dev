import { Page, expect, test } from "@playwright/test";

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
  await page.getByLabel(/name/iu).fill("John Doe");
  await page.getByLabel(/email/iu).fill("john@gmail.com");
  await page.getByLabel(/message/iu).fill("Hello!");

  // Navigate to some other route, then back again
  openHamburgerNav(isMobile, page);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Home" })
    .click();
  openHamburgerNav(isMobile, page);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();

  // check form input
  expect(await page.getByLabel(/name/iu).inputValue()).toBe("John Doe");
  expect(await page.getByLabel(/email/iu).inputValue()).toBe("john@gmail.com");
  expect(await page.getByLabel(/message/iu).inputValue()).toBe("Hello!");
});

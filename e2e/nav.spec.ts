import { expect, Page, test } from "@playwright/test";

const openHamburgerNav = async (isMobile: boolean | undefined, page: Page) => {
  if (isMobile) {
    await page.getByRole("button", { name: "Open Navigation Menu" }).click();
  }
};

test("should change page when links are clicked", async ({
  page,
  isMobile,
}) => {
  await page.goto("http://localhost:3000/");

  openHamburgerNav(isMobile, page);
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projects", exact: true })
    .click();

  // Assert page changed
  await expect(page).toHaveTitle(/.*projects/iu);
  await expect(page).toHaveURL(/.*projects/iu);

  openHamburgerNav(isMobile, page);
  await page.getByRole("link", { name: "Blog", exact: true }).click();

  // Assert page changed
  await expect(page).toHaveTitle(/.*blog/iu);
  await expect(page).toHaveURL(/.*blog/iu);

  openHamburgerNav(isMobile, page);
  await page.getByRole("link", { name: "Contact", exact: true }).click();

  // Assert page changed
  await expect(page).toHaveTitle(/.*contact/iu);
  await expect(page).toHaveURL(/.*contact/iu);
});

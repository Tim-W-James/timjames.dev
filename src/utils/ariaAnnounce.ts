/* eslint-disable jsdoc/require-param */
// Source: https://github.com/oaf-project/oaf-react-router

/**
 * ARIA live region politeness values.
 * See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
 */
export type AriaLivePoliteness = "off" | "polite" | "assertive";

const createAnnounceDiv = (
  id: string,
  politeness: Exclude<AriaLivePoliteness, "off">
): HTMLDivElement => {
  const div = document.createElement("div");

  div.setAttribute("id", id);
  div.setAttribute("role", "status");
  div.setAttribute("aria-live", politeness);
  div.setAttribute("aria-atomic", "true");

  // As per Bootstrap's visually-hidden styles.
  // See: https://a11yproject.com/posts/how-to-hide-content/
  // See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/
  // See: https://github.com/twbs/bootstrap/blob/1df098361cac04217d6a464c80e890c4335ecb5c/scss/mixins/_visually-hidden.scss#L8-L18
  div.style.position = "absolute";
  div.style.width = "1px";
  div.style.height = "1px";
  div.style.padding = "0";
  div.style.margin = "-1px";
  div.style.overflow = "hidden";
  div.style.clip = "rect(0, 0, 0, 0)";
  div.style.whiteSpace = "nowrap";
  div.style.border = "0";

  document.body.appendChild(div);
  return div;
};

/**
 * Make an announcement to screen reader users. Useful for page navigation
 * events.
 * See https://almerosteyn.com/2017/03/accessible-react-navigation
 * See https://getbootstrap.com/docs/4.3/utilities/screen-readers/
 * See https://github.com/twbs/bootstrap/blob/ff29c1224c20b8fcf2d1e7c28426470f1dc3e40d/scss/mixins/_screen-reader.scss#L6
 *
 * @param message - the message to announce to screen reader users, e.g.
 * "navigated to about page".
 * @param announcementsDivId - a DOM ID of the visually hidden announcements
 * element, e.g. "announcements".
 */
export const ariaAnnounce = (
  message: string,
  announcementsDivId = "announcements",
  setMessageTimeout = 50,
  clearMessageTimeout = 2000,
  politeness: Exclude<AriaLivePoliteness, "off"> = "polite"
): Promise<unknown> => {
  const announceDiv =
    document.getElementById(announcementsDivId) ??
    createAnnounceDiv(announcementsDivId, politeness);
  const p1 = new Promise((resolve) => {
    setTimeout(() => {
      announceDiv.innerText = message;
      resolve(undefined);
    }, setMessageTimeout);
  });

  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      announceDiv.innerText = "";
      resolve(undefined);
    }, clearMessageTimeout);
  });

  return Promise.all([p1, p2]);
};

import { focusElement } from "@utils/focusElement";
import { useUpdateEffect } from "ahooks";
import { useLocation } from "react-router-dom";

/**
 * Reset focus to the heading when navigating to a new route.
 */
export const useResetFocusNavigation = () => {
  const location = useLocation();

  // Reset focus when the URL changes.
  useUpdateEffect(() => {
    // Focus the page heading, if it exists, otherwise clear focus to avoid an
    // error.
    // @see https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/
    focusElement(document.querySelector("h1") ?? document.body);
  }, [location.pathname]);
};

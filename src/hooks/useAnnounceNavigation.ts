import { ariaAnnounce } from "@utils/ariaAnnounce";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Create an ARIA live region for announcing navigation events.
 */
export const useAnnounceNavigation = () => {
  const location = useLocation();
  const isInitialLoad = useRef<boolean>(true);

  // Announce the new page title when the URL changes.
  useEffect(() => {
    // Ignore the initial page load.
    if (!isInitialLoad.current) {
      void ariaAnnounce(document.title);
    } else {
      isInitialLoad.current = false;
    }
    // We only want to announce when the URL changes.
  }, [location.pathname]);
};

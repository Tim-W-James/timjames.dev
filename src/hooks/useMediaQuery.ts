import { isMobile } from "react-device-detect";

/**
 * Hook to check if a css media query is true
 *
 * @param query media query to use
 * @example useMediaQuery("(min-width: 1280px)")
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
};

/**
 * Check if on a mobile device
 */
export const useMobileQuery = () =>
  // Both methods have false negatives, so we use both
  useMediaQuery("(hover: none) and (pointer: coarse)") || isMobile;

/**
 * Check if the primary input is touch (not necessarily a mobile device)
 */
export const useTouchInputQuery = () => useMediaQuery("(pointer: coarse)");

export default useMediaQuery;

import { useLocation } from "react-router-dom";

/**
 * Automatically scrolls to the top of the page when the route changes.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Don't scroll to top if the route contains a hash
    if (!window.location.hash) {
      // HACK to ensure this runs after the page has rendered
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

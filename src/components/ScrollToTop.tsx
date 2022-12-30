import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
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

import cn from "@styles/cssUtils";
import { Link } from "react-router-dom";

type NavbarBrandProps = {
  label: string;
  logo: string;
  to: string;
};

/**
 * Brand for the navbar with a logo
 */
const NavbarBrand: React.FC<NavbarBrandProps> = ({
  label,
  to: route,
  logo,
}) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Link
      className={cn("subtitle whitespace-nowrap")}
      onClick={scrollToTop}
      to={route}
      type="button"
    >
      <img
        alt="brand"
        className={cn("inline-block", "rounded-full", "h-8 align-bottom")}
        data-chromatic="ignore"
        height={32}
        src={logo}
        width={32}
      />{" "}
      {label}
    </Link>
  );
};

export default NavbarBrand;

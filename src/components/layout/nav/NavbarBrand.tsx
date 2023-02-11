import cn from "@styles/cssUtils";
import { Link } from "react-router-dom";

/**
 * Brand for the navbar with a logo
 *
 * @param {{ label; to; logo; }} { label text, route, logo
 * component }
 */
const NavbarBrand: React.FC<{
  label: string;
  logo: string;
  to: string;
}> = ({ label, to: route, logo }) => (
  <Link
    className={cn("subtitle whitespace-nowrap")}
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    to={route}
    type="button"
  >
    <img
      alt={"brand"}
      className={cn("inline-block", "rounded-full", "h-8 align-bottom")}
      height={32}
      src={logo}
      width={32}
    />{" "}
    {label}
  </Link>
);

export default NavbarBrand;

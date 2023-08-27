import { useMobileQuery } from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";

type FooterProps = {
  /**
   * Whether the footer should be fixed on desktop
   */
  allowFixed?: boolean;
};

/**
 * Footer at the bottom of the page
 */
const Footer: React.FC<FooterProps> = ({ allowFixed }) => {
  const deviceIsMobile = useMobileQuery();

  return (
    <>
      <footer
        className={cn(
          "bg-dark-shades p-8 text-center text-dark-accent",
          "bottom-0 left-0 z-50 w-screen",
          { fixed: Boolean(allowFixed) && !deviceIsMobile }
        )}
      >
        © <time>{new Date().getFullYear()}</time> Tim James
      </footer>
      {/* Spacer when the footer is fixed on desktop */}
      {allowFixed && !deviceIsMobile ? (
        <div className={cn("invisible p-8")}>&nbsp;</div>
      ) : null}
    </>
  );
};

export default Footer;

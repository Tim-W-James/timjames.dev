import { useMobileQuery } from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";

/**
 * Description placeholder
 *
 * @param {{ allowFixed; }} { whether the footer should be fixed on desktop }
 */
const Footer: React.FC<{ allowFixed?: boolean }> = ({ allowFixed }) => {
  const deviceIsMobile = useMobileQuery();

  return (
    <>
      <footer
        className={cn(
          "text-dark-accent bg-dark-shades p-8 text-center",
          "bottom-0 left-0 w-screen z-50",
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

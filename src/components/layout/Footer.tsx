import { useMobileQuery } from "@hooks/useMediaQuery";
import cn from "@styles/cssUtils";

const Footer: React.FC = () => {
  const deviceIsMobile = useMobileQuery();

  return (
    <>
      <footer
        className={cn()(
          "text-dark-accent bg-dark p-8 text-center",
          "bottom-0 left-0 w-screen",
          { fixed: !deviceIsMobile }
        )}
      >
        © {new Date().getFullYear()} Tim James
      </footer>
      {/* Spacer when the footer is fixed on desktop */}
      {!deviceIsMobile ? (
        <div className={cn()("invisible p-8")}>&nbsp;</div>
      ) : null}
    </>
  );
};

export default Footer;

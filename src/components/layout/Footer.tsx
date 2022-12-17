import cn from "@styles/cssUtils";

const Footer: React.FC = () => (
  <>
    <footer
      className={cn()(
        "text-dark-accent bg-dark fixed p-8 text-center",
        "bottom-0 left-0 w-screen"
      )}
    >
      © {new Date().getFullYear()} Tim James
    </footer>
    {/* Spacer since the footer is fixed */}
    <div className={cn()("invisible p-8")}>&nbsp;</div>
  </>
);

export default Footer;

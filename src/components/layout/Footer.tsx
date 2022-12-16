import cn from "@styles/cssUtils";
import { ClassNames } from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={cn<ClassNames>()("_footer")} id="footer">
    <span>© {new Date().getFullYear()} Tim James</span>
  </footer>
);

export default Footer;

import logo from "@assets/logo.png";
import cn from "@styles/cssUtils";
import LogoComponent from "./Logo";

export default {
  title: "Components/Logo",
  component: LogoComponent,
};

export const Logo = () => (
  <div className={cn("p-8")}>
    <LogoComponent imageSrc={logo} />
  </div>
);

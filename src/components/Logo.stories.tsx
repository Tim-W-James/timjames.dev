import logo from "@assets/profile.jpg";
import LogoComponent from "@components/Logo";

export default {
  title: "Components/Logo",
  component: LogoComponent,
};

export const Logo = () => <LogoComponent imageSrc={logo} />;

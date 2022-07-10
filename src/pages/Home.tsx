import logo from "@assets/svg/logo.svg";
import { BsLinkedin } from "react-icons/bs";
import styles from "./Home.module.scss";

const Home: React.FC = () => (
  <div className={styles["home"]}>
    <header>
      <img src={logo} className={styles["home-logo"]} alt="logo" />
      <h1>Coming Soon...</h1>
      <a href="https://www.linkedin.com/in/timothy-william-james/">
        <BsLinkedin /> Find me on Linkedin
      </a>
    </header>
  </div>
);

export default Home;

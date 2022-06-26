import logo from "@assets/logo.svg";
import "@scss/Home.scss";
import { BsLinkedin } from "react-icons/bs";

const Home: React.FC = () => (
  <div className="home">
    <header>
      <img src={logo} className="home-logo" alt="logo" />
      <h1>Coming Soon...</h1>
      <a href="https://www.linkedin.com/in/timothy-william-james/">
        <BsLinkedin /> Find me on Linkedin
      </a>
    </header>
  </div>
);

export default Home;

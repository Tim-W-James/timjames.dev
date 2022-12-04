import logo from "@assets/svg/logo.svg";
import ParallaxMountains from "@layout/background/ParallaxMountains";
import { BsLinkedin } from "react-icons/bs";
import styles from "./Home.module.scss";

const Home: React.FC = () => (
  <div className={styles["home"]}>
    <ParallaxMountains />
    <header>
      <img alt="logo" className={styles["home-logo"]} src={logo} />
      <h1>Coming Soon...</h1>
      <a href="https://www.linkedin.com/in/timothy-william-james/">
        <BsLinkedin /> Find me on Linkedin
      </a>
      <div className={styles["gradient-background"]} />
      <div className={styles["solid-background"]}>
        <p>
          Eos quas quaerat a non assumenda quod impedit aspernatur sapiente.
          Delectus et et doloribus. Nostrum quia rerum dignissimos sequi ut
          fugit. Ipsam porro in voluptates sit id consequatur quam aut. Nulla
          facere tenetur nesciunt laudantium mollitia. Officiis ratione fugit
          repellendus. Et esse voluptatibus et molestias. Quo optio omnis non
          expedita fugiat qui deleniti qui facere. Atque rerum at error aut
          asperiores necessitatibus. Illum et voluptatum autem asperiores autem
          ducimus. Minima enim dolores tenetur. Dolorem et et et
          nesciunt.Provident beatae eos doloribus voluptatibus assumenda sint ex
          vel. Illum itaque corrupti quis eius laborum. Aliquid ipsam
          dignissimos numquam nisi quo tempore. Iusto nisi asperiores ex maxime.
          Est dicta omnis quaerat hic provident voluptates iure perspiciatis
          facere. Veniam quo dignissimos ratione ut aliquid. Quam quidem quasi
          sequi qui sit. At natus laudantium molestias pariatur minima minima
          quam pariatur dolor. Eum doloribus quisquam qui dolorem in animi
          itaque. Ad unde minus. Voluptatibus numquam qui ad atque maiores.
          Magni voluptatem in quidem alias qui. Nesciunt tempora culpa quibusdam
          commodi nihil. Eos quas quaerat a non assumenda quod impedit
          aspernatur sapiente. Delectus et et doloribus. Nostrum quia rerum
          dignissimos sequi ut fugit. Ipsam porro in voluptates sit id
          consequatur quam aut. Nulla facere tenetur nesciunt laudantium
          mollitia. Officiis ratione fugit repellendus. Et esse voluptatibus et
          molestias. Quo optio omnis non expedita fugiat qui deleniti qui
          facere. Atque rerum at error aut asperiores necessitatibus. Illum et
          voluptatum autem asperiores autem ducimus. Minima enim dolores
          tenetur. Dolorem et et et nesciunt.Provident beatae eos doloribus
          voluptatibus assumenda sint ex vel. Illum itaque corrupti quis eius
          laborum. Aliquid ipsam dignissimos numquam nisi quo tempore. Iusto
          nisi asperiores ex maxime. Est dicta omnis quaerat hic provident
          voluptates iure perspiciatis facere. Veniam quo dignissimos ratione ut
          aliquid. Quam quidem quasi sequi qui sit. At natus laudantium
          molestias pariatur minima minima quam pariatur dolor. Eum doloribus
          quisquam qui dolorem in animi itaque. Ad unde minus. Voluptatibus
          numquam qui ad atque maiores. Magni voluptatem in quidem alias qui.
          Nesciunt tempora culpa quibusdam commodi nihil. Eos quas quaerat a non
          assumenda quod impedit aspernatur sapiente. Delectus et et doloribus.
          Nostrum quia rerum dignissimos sequi ut fugit. Ipsam porro in
          voluptates sit id consequatur quam aut. Nulla facere tenetur nesciunt
          laudantium mollitia. Officiis ratione fugit repellendus. Et esse
          voluptatibus et molestias. Quo optio omnis non expedita fugiat qui
          deleniti qui facere. Atque rerum at error aut asperiores
          necessitatibus. Illum et voluptatum autem asperiores autem ducimus.
          Minima enim dolores tenetur. Dolorem et et et nesciunt.Provident
          beatae eos doloribus voluptatibus assumenda sint ex vel. Illum itaque
          corrupti quis eius laborum. Aliquid ipsam dignissimos numquam nisi quo
          tempore. Iusto nisi asperiores ex maxime. Est dicta omnis quaerat hic
          provident voluptates iure perspiciatis facere. Veniam quo dignissimos
          ratione ut aliquid. Quam quidem quasi sequi qui sit. At natus
          laudantium molestias pariatur minima minima quam pariatur dolor. Eum
          doloribus quisquam qui dolorem in animi itaque. Ad unde minus.
          Voluptatibus numquam qui ad atque maiores. Magni voluptatem in quidem
          alias qui. Nesciunt tempora culpa quibusdam commodi nihil.
        </p>
      </div>
    </header>
  </div>
);

export default Home;

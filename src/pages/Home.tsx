import logo from "@assets/logo.svg";
import "@scss/Home.scss";
import Button from "react-bootstrap/Button";

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="home">
      <header>
        <img src={logo} className="home-logo" alt="logo" />
        <p>
          <Button type="button" onClick={() => setCount((c) => c + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="home-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <br />
          <a
            className="home-link"
            href="https://react-bootstrap.github.io/getting-started/introduction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Bootstrap Docs
          </a>
          {" | "}
          <a
            className="home-link"
            href="https://reactrouter.com/docs/en/v6/getting-started/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Router 6 Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default Home;

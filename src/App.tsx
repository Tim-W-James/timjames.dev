import PrimaryFooter from "@components/PrimaryFooter";
import PrimaryNavbar from "@components/PrimaryNavbar";
import { User, UserContext } from "@context/UserContext";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const App = () => {
  const [userState, setUserState] = useState<User | undefined>(undefined);

  return (
    <>
      <PrimaryNavbar />
      <UserContext.Provider value={{ userState, setUserState }}>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </UserContext.Provider>
      <PrimaryFooter />
    </>
  );
};

export default App;

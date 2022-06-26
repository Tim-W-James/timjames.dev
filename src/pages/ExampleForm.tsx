import { UserContext } from "@context/UserContext";
import { FormEventHandler } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { BsFillPersonCheckFill } from "react-icons/bs";

interface FormElements extends HTMLFormControlsCollection {
  firstNameInput: HTMLInputElement;
  lastNameInput: HTMLInputElement;
  usernameInput: HTMLInputElement;
  emailInput: HTMLInputElement;
}
interface UserFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const ExampleForm: React.FC<{
  heading: string;
}> = ({ heading }) => {
  const { userState, setUserState } = useContext(UserContext);
  const [validated, setValidated] = useState(false);

  const handleSubmit: FormEventHandler<UserFormElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setUserState &&
        setUserState({
          firstName: form.elements.firstNameInput.value,
          lastName: form.elements.lastNameInput.value,
          username: form.elements.usernameInput.value,
          email: form.elements.emailInput.value,
        });
    }
    setValidated(true);
  };

  return (
    <Container>
      <h2>{heading}</h2>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="firstNameInput">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="John"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="lastNameInput">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Doe"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="emailInput">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="usernameInput">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      {userState && (
        <>
          <br />
          <BsFillPersonCheckFill />
          {` Welcome ${userState.firstName} ${userState.lastName}`}
        </>
      )}
    </Container>
  );
};

export default ExampleForm;

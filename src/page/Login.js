import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Login = ({setIsLogin}) => {
    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault(); // submit 이벤트가 발생할때마다 새로고침 되는 것을 방지
        setIsLogin(true);
        navigate("/");
    }
  return (
      <Container>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
  );
}

export default Login;
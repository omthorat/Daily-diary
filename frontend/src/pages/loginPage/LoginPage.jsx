import { Container, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import MyNotesScreen from "../../components/screens/MyNotesScreen";
import axios from "axios";
import ErrorMsg from "../../components/error/ErrorMsg";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      setError("");
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setLoading(false);
    }
  };
  const handleReset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Container className="login-page">
        <MyNotesScreen title="LOGIN">
          {error && (
            <ErrorMsg variant="danger">
              <span>Email or Password Is Incorrect</span>
            </ErrorMsg>
          )}
          {loading && <Loading />}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PassWord</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="login">
              <Button type="submit" variant="primary">
                Login
              </Button>
              <Button
                type="reset"
                onClick={() => handleReset()}
                variant="secondary">
                Reset
              </Button>
            </div>
            <Row className="py-3">
              <Col>
                New User?<Link to="/signup">Register Here</Link>{" "}
              </Col>
            </Row>
          </Form>
        </MyNotesScreen>
      </Container>
    </>
  );
};

export default LoginPage;

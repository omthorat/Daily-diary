import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MyNotesScreen from "../../components/screens/MyNotesScreen";
import "./UserRegisterPage.css";
import { useState } from "react";
import ErrorMsg from "../../components/error/ErrorMsg";
import Loading from "../../components/loading/Loading";
import axios from "axios";
const UserRegisterPage = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [userConPassword, setUserConPassword] = useState();
  const [message, setMessage] = useState();
  const [pic, setpic] = useState();
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(userConPassword, password);
    if (password !== userConPassword) {
      setMessage("Password Entered Are not matching");
    } else {
      setMessage("");
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "/api/users",
          { name, email, password, pic },
          config
        );
        setError("");
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
  };
  const handleSignReset = () => {
    setname("");
    setemail("");
    setpassword("");
    setpic("");
  };
  return (
    <>
      <Container className="signup-page">
        <MyNotesScreen title="User Register">
          {message && <ErrorMsg variant="danger">{message}</ErrorMsg>}
          {error && <ErrorMsg variant="danger">{error}</ErrorMsg>}
          {loading && <Loading />}
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Confirm Password"
                value={userConPassword}
                onChange={(e) => setUserConPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Upload your Image"
                value={pic}
                onChange={(e) => setpic(e.target.value)}
              />
            </Form.Group>
            <div className="signupbtn">
              <Button variant="primary" type="submit">
                SignUp
              </Button>
              <Button
                type="reset"
                onClick={() => handleSignReset()}
                variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
        </MyNotesScreen>
      </Container>
    </>
  );
};
export default UserRegisterPage;

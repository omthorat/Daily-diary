import { Col, Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <div className="landing-img">
        <Container>
          <Row className="welcome-page">
            <Col className="welcome-header">WelCome To DailyDiary</Col>
            <Col className="welcome-quot">
              One Safe Place to Avoid all Your Waste
            </Col>
            <Col className="welcome-buttons">
              <a href="/login">
                <Button variant="dark" size="lg">
                  Login In
                </Button>
              </a>
              <a href="/register">
                <Button variant="outline-dark" size="lg">
                  Sign Up
                </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default LandingPage;

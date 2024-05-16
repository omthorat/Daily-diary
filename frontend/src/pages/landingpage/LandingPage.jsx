import { Col, Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";
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
              <Link to="/login">
                <Button variant="dark" size="lg">
                  Login In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline-primary" size="lg">
                  Sign Up
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default LandingPage;

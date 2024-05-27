import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <Container className="fotter">
        <Row>
          <Col className="text-align-center py-2">copy &#169; right of DailyDiary</Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;

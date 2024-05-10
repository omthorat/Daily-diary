import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MyNotesScreen.css";
const MyNotesScreen = ({ title, children }) => {
  return (
    <div className="MyNotesScreen">
      {title && (
        <Container>
          <Row>
            <div className="heading">{title}</div>
            <hr />
          </Row>
          {children}
        </Container>
      )}
    </div>
  );
};

export default MyNotesScreen;

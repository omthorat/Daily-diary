import React from "react";
import MyNotesScreen from "../screens/MyNotesScreen";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNotes.css";
const MyNotes = () => {
  return (
    <>
      <MyNotesScreen title="Welcome back omkar thorat ...">
        <div className="mynotespage">
          <Button variant="dark" size="lg" className="create-btn">
            Create New Item
          </Button>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link>
                <Link to="/edititem">
                  <Button variant="primary">Edit</Button>
                </Link>
              </Card.Link>
              <Card.Link>
                <Link>
                  <Button variant="danger">Delete</Button>
                </Link>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </MyNotesScreen>
    </>
  );
};

export default MyNotes;

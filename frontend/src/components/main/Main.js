import "./Main.css";
import { Button } from "react-bootstrap";
const Main = () => {
  return (
    <div className="mainHeader">
      header
      <Button as="a" variant="primary">
        Button as link
      </Button>
    </div>
  );
};
export default Main;

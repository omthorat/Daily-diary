import { Alert } from "react-bootstrap";
const ErrorMsg = ({ variant, children }) => {
  console.log("error");
  return (
    <>
      <Alert key={variant} variant={variant}>
        {children}
      </Alert>
    </>
  );
};
export default ErrorMsg;

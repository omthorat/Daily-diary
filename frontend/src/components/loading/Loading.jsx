import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}>
        <Spinner
          style={{
            width: 100,
            height: 100,
          }}
          animation="border"
          role="status"
          size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default Loading;

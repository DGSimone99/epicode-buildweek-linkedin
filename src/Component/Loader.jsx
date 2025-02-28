import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center my-4">
      <Spinner animation="border" role="status" variant="primary"></Spinner>
    </div>
  );
};

export default Loader;

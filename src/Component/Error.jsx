import { Alert } from "react-bootstrap";

const Error = () => {
  return (
    <Alert variant="primary" className="text-center">
      Nessun risultato trovato per questa ricerca.
    </Alert>
  );
};

export default Error;

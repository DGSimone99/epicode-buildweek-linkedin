import { Container } from "react-bootstrap";
import PersonaSingola from "./PersonaSingola";

const Persone = () => {
  return (
    <Container className="bg-white border rounded-3 d-flex flex-column px-0">
      <Container className="px-4 pt-4">
        <h4>
          <strong>Persone che potresti conoscere</strong>
        </h4>
        <h5 className="text-secondary">Dalla tua scuola o università</h5>
      </Container>
      <Container className="px-4">
        <PersonaSingola nome="Giangianni" cognome="Scirecco" />
        <hr />
        <PersonaSingola nome="Temistualdo" cognome="Cipolloni" />
        <hr />
        <PersonaSingola nome="Gianmario" cognome="Palude" />
        <hr />
        <PersonaSingola nome="Leopoldo" cognome="Megliofuori" />
      </Container>
      <hr />
      <p className="text-center">
        <strong>Mostra tutto</strong>
      </p>
    </Container>
  );
};
export default Persone;

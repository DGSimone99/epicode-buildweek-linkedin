import { Button, Container } from "react-bootstrap";
import React from "react";
import FormazioneModal from "./FormazioneModal";

const Formazione = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 py-3 mt-3">
      <Container>
        <h5 className="fw-bold">Formazione</h5>
        <p className="text-secondary">
          Mostrando le tue qualifiche avrai fino a 2 volte più probabilità di ricevere un messaggio InMail da un
          recruiter
        </p>
        <p>PLACEHOLDER PER FORMAZIONE</p>
        <Button
          variant="light"
          className="rounded-pill border border-primary fw-bold d-flex align-items-center justify-content-center me-auto text-primary"
          onClick={() => setModalShow(true)}
        >
          Aggiungi titolo di studio
        </Button>
        <FormazioneModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Container>
  );
};
export default Formazione;

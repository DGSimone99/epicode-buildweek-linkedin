import { Button, Container } from "react-bootstrap";
import React from "react";
import CompetenzeModal from "./CompetenzeModal";

const Competenze = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 py-3 mt-3">
      <Container>
        <h5 className="fw-bold">Competenze</h5>
        <p className="text-secondary">
          Fai capire se hai un profilo adatto per le nuove opportunità: il 50% dei recruiter usa i dati sulle competenze
          per coprire le posizioni aperte
        </p>
        <p className="mb-0 text-secondary">Soft skill</p>
        <hr className="my-1" />
        <p className=" text-secondary">Competenze tecniche</p>
        <Button
          variant="light"
          className="rounded-pill border border-primary fw-bold d-flex align-items-center justify-content-center me-auto text-primary"
          onClick={() => setModalShow(true)}
        >
          Aggiungi competenze
        </Button>
        <CompetenzeModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Container>
  );
};
export default Competenze;

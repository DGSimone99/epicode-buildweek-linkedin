import { Button, Container } from "react-bootstrap";
import EsperienzeModal from "./EsperienzeModal";
import React from "react";

const Esperienza = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 py-3 mt-3">
      <Container>
        <h5 className="fw-bold">Esperienza</h5>
        <p className="text-secondary">
          Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più visualizzazioni del profilo e collegamenti
        </p>
        <p>PLACEHOLDER PER ESPERIENZE SINGOLE</p>
        <Button
          variant="light"
          className="rounded-pill border border-primary fw-bold d-flex align-items-center justify-content-center me-auto text-primary"
          onClick={() => setModalShow(true)}
        >
          Aggiungi esperienza
        </Button>
        <EsperienzeModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Container>
  );
};
export default Esperienza;

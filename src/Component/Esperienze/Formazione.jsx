import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import FormazioneModal from "./FormazioneModal";
import { Bank2 } from "react-bootstrap-icons";

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
        <Row>
          <Col xs={2} xl={1} className="d-flex">
            <div
              className="d-flex justify-content-center align-items-center p-3 border border-secondary rounded-3 me-auto"
              style={{ width: "50px", height: "50px" }}
            >
              <Bank2 className="text-secondary" />
            </div>
          </Col>
          <Col className="text-secondary">
            <h3 className="fs-5">Scuola o università</h3>
            <p>Laurea, campo di studi</p>
            <p>2019-2023</p>
          </Col>
        </Row>
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

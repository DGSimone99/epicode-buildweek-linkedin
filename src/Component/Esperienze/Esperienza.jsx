import { Button, Col, Container, Row } from "react-bootstrap";
import EsperienzeModal from "./EsperienzeModal";
import React from "react";
import { Bag, XLg } from "react-bootstrap-icons";

const Esperienza = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 py-3 mt-3">
      <Container>
        <Row>
          <Col className="d-flex justify-content-between">
            <h5 className="fw-bold">Esperienza</h5>
            <XLg className="text-dark" />
          </Col>
        </Row>
        <p className="text-secondary">
          Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più visualizzazioni del profilo e collegamenti
        </p>
        <Row>
          <Col xs={1} className="d-flex">
            <div
              className="d-flex justify-content-center align-items-center p-3 border border-secondary rounded-3 me-auto"
              style={{ width: "50px", height: "50px" }}
            >
              <Bag className="text-secondary"></Bag>
            </div>
          </Col>
          <Col className="text-secondary">
            <h3 className="fs-5">Qualifica</h3>
            <p>Organizzazione</p>
            <p>2023-presente</p>
          </Col>
        </Row>
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

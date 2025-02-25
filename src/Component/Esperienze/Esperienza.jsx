import { Button, Col, Container, Row } from "react-bootstrap";
import EsperienzeModal from "./EsperienzeModal";
import React from "react";
import { Bag } from "react-bootstrap-icons";

const Esperienza = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 pt-3 mt-3 pb-3">
      <Container>
        <Row>
          <Col>
            <h5 className="fw-bold">Esperienza</h5>
          </Col>
        </Row>
        <p className="text-secondary">
          Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più visualizzazioni del profilo e collegamenti
        </p>
        <Row>
          <Col className="d-flex">
            <div className="d-flex justify-content-center align-items-center p-3 border border-secondary rounded-3 me-auto my-2">
              <Bag className="m-0"></Bag>
            </div>
          </Col>
          <Col></Col>
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

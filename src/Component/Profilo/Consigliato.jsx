import { Col, Container, Image, Row } from "react-bootstrap";
import { EyeFill } from "react-bootstrap-icons";

const Consigliato = () => {
  return (
    <>
      <Container className="border rounded-3 py-3 bg-white">
        <div className="ps-3">
          <h5 className="mb-0">
            <strong>Consigliato per te</strong>
          </h5>
          <p className="text-secondary">
            <EyeFill /> Solo per te
          </p>
        </div>

        <Row className="justify-content-center">
          <Col xs={11} className="border rounded-3 py-3">
            <div className="d-flex align-items-center">
              <Image src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq" />
              <p className="ms-2">
                <strong>
                  Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa
                </strong>
              </p>
            </div>
            <div className="mt-2">
              <p>Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.</p>
            </div>
            <button type="button" className="btn btn-outline-secondary rounded-5 py-1">
              <strong>Aggiungi un riepilogo</strong>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Consigliato;

import { Col, Container, Row } from "react-bootstrap";
import SingoloLavoro from "./SingoloLavoro";
import DettaglioSingoloLavoro from "./DettaglioSingoloLavoro";
import NavLavoro from "../Nav_Footer/NavLavoro";

const PaginaDettagliLavoro = () => {
  return (
    <>
      <NavLavoro />
      <Container fluid>
        <Row>
          <Col xs={6} className="pe-0">
            <div className="sticky-top bg-white border p-3" style={{ top: "120px" }}>
              <h2>Le principali offerte di lavoro </h2>
              <p>In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi</p>
              <p>numero di risultati ... (JOBS:lenght?)</p>
            </div>
            <SingoloLavoro />
            <SingoloLavoro />
          </Col>
          <Col xs={6} className="ps-0">
            <DettaglioSingoloLavoro />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaginaDettagliLavoro;

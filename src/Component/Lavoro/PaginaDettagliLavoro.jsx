import { Col, Container, Row } from "react-bootstrap";
import SingoloLavoro from "./SingoloLavoro";
import DettaglioSingoloLavoro from "./DettaglioSingoloLavoro";
import NavLavoro from "../Nav_Footer/NavLavoro";
import { useSelector } from "react-redux";
import { useState } from "react";
import FooterMini from "../Nav_Footer/FooterMini";
import { useParams } from "react-router";

const PaginaDettagliLavoro = () => {
  const { id } = useParams();
  const { jobs } = useSelector((state) => state.jobs);
  const [select, setSelect] = useState(jobs.find((job) => job._id == id));

  return (
    <>
      <NavLavoro />
      <Container fluid>
        <Row className=" justify-content-center">
          <Col xs={4} className="pe-0 ">
            <div className="sticky-top bg-white border p-3" style={{ top: "120px" }}>
              <h2>Le principali offerte di lavoro </h2>
              <p>In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi.</p>
              <p>{jobs.length} risultati </p>
            </div>
            <div className="overflow-y-scroll" style={{ height: "calc(100vh - 300px)" }}>
              {jobs.slice(0, 15).map((job) => (
                <div className="pointer" key={job._id} onClick={() => setSelect(job)}>
                  <SingoloLavoro job={job} select={select} />
                </div>
              ))}
              <div className="bg-white border">
                <FooterMini />
              </div>
            </div>
          </Col>
          <Col xs={6} className="ps-0">
            <DettaglioSingoloLavoro job={select} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaginaDettagliLavoro;

import { Col, Row } from "react-bootstrap";
import Utente from "./Utente";
import Persone from "../Profilo/Persone";

const MainUtente = () => {
  return (
    <Row md={1} lg={2}>
      <Col md={7} lg={7} xl={8} xxl={9}>
        <Utente />
      </Col>
      <Col md={5} lg={5} xl={4} xxl={3}>
        <Persone />
      </Col>
    </Row>
  );
};

export default MainUtente;

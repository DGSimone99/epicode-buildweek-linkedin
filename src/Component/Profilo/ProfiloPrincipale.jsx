import { Col, Row } from "react-bootstrap";
import Team from "./Team";
import Consigliato from "./Consigliato";
import Analisi from "./Analisi";
import Persone from "./Persone";
import Language from "./Language";

const ProfiloPrincipale = () => {
  return (
    <Row>
      <Col xs={8}>
        <Team />
        <Consigliato />
        <Analisi />
      </Col>
      <Col xs={4}>
        <Language />
        <Persone />
      </Col>
    </Row>
  );
};

export default ProfiloPrincipale;

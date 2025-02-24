import { Col, Row } from "react-bootstrap";
import Team from "./Team";
import Consigliato from "./Consigliato";
import Analisi from "./Analisi";
import Persone from "./Persone";
import Language from "./Language";

const ProfiloPrincipale = () => {
  return (
    <Row xs={1} sm={2}>
      <Col sm={9}>
        <Team />
        <Consigliato />
        <Analisi />
      </Col>
      <Col sm={3}>
        <Language />
        <Persone />
      </Col>
    </Row>
  );
};

export default ProfiloPrincipale;

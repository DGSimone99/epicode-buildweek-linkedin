import { Col, Row } from "react-bootstrap";
import Team from "./Team";
import Consigliato from "./Consigliato";
import Analisi from "./Analisi";
import Persone from "./Persone";
import Language from "./Language";
import Esperienza from "../Esperienze/Esperienza";
import Formazione from "../Esperienze/Formazione";
import Competenze from "../Esperienze/Competenze";
import Interessi from "./Interessi";
import CustomFooter from "../Nav_Footer/CustomFooter";

const ProfiloPrincipale = () => {
  return (
    <>
      <Row md={1} lg={2}>
        <Col md={7} lg={7} xl={8} xxl={9}>
          <Team />
          <Consigliato />
          <Analisi />
          <Esperienza />
          <Formazione />
          <Competenze />
          <Interessi />
        </Col>
        <Col md={5} lg={5} xl={4} xxl={3}>
          <Language />
          <Persone />
        </Col>
      </Row>
      <CustomFooter />
    </>
  );
};

export default ProfiloPrincipale;

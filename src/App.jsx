import "./App.css";
import Analisi from "./Component/Profilo/Analisi";
import Consigliato from "./Component/Profilo/Consigliato";
import "bootstrap/dist/css/bootstrap.min.css";
/* import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale"; */
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Language from "./Component/Profilo/Language";
import Chat from "./Component/Profilo/Chat";
import Persone from "./Component/Profilo/Persone";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={8}>
            <ProfiloPrincipale />
            <Consigliato />
            <Analisi />
          </Col>
          <Col xs={4}>
            <Language />
            <Persone />
          </Col>
        </Row>
      </Container>

      <Chat />
    </>
  );
}

export default App;

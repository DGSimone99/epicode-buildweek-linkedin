import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Analisi from "./Component/Profilo/Analisi";
import Consigliato from "./Component/Profilo/Consigliato";
/* import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale"; */
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Language from "./Component/Profilo/Language";
import Chat from "./Component/Profilo/Chat";
import Persone from "./Component/Profilo/Persone";
import { Col, Container, Row } from "react-bootstrap";
import CustomNav from "./Component/CustomNav";

function App() {
  return (
    <>
      <CustomNav />
      <Container fluid>
<<<<<<< HEAD
        <Row xs={1} sm={2}>
          <Col sm={8}>
            <ProfiloPrincipale />
            <Consigliato />
            <Analisi />
          </Col>
          <Col sm={4}>
            <Language />
            <Persone />
          </Col>
        </Row>
=======
        <Container>
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
>>>>>>> 32aa37ddd0dbc4b54c581fe9e328d3b87c7e2077
      </Container>
      <Chat />
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Analisi from "./Component/Profilo/Analisi";
import Consigliato from "./Component/Profilo/Consigliato";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Chat from "./Component/Profilo/Chat";
import { Container } from "react-bootstrap";
import CustomNav from "./Component/CustomNav";

function App() {
  return (
    <>
      <CustomNav />
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
      <Chat />
    </>
  );
}

export default App;

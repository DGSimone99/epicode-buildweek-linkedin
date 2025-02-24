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
        <Container>
          <ProfiloPrincipale />
        </Container>
      </Container>
      <Chat />
    </>
  );
}

export default App;

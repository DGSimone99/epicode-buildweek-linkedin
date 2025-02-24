import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Chat from "./Component/Profilo/Chat";
import { Container } from "react-bootstrap";
import CustomNav from "./Component/CustomNav";
import Home from "./Component/Home/Home";

function App() {
  return (
    <>
      <CustomNav />
      <Container fluid className="pt-3">
        <Container>
          <Home />
          <ProfiloPrincipale />
        </Container>
      </Container>
      <Chat />
    </>
  );
}

export default App;

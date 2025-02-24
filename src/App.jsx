import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Chat from "./Component/Profilo/Chat";
import { Container } from "react-bootstrap";
import CustomNav from "./Component/Nav_Footer/CustomNav";
import MyHome from "./Component/Home/MyHome";

function App() {
  return (
    <>
      <CustomNav />
      <Container fluid className="pt-3">
        <Container>
          <ProfiloPrincipale />
        </Container>
      </Container>
      <Chat />
    </>
  );
}

export default App;

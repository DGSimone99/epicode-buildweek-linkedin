import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Chat from "./Component/Profilo/Chat";
import { Container } from "react-bootstrap";
import CustomNav from "./Component/Nav&Footer/CustomNav";
import MyHome from "./Component/Home/MyHome";

function App() {
  return (
    <>
      <CustomNav />
      <Container fluid>
        <Container>
          <MyHome />
          {/*       <ProfiloPrincipale /> */}
        </Container>
      </Container>
      <Chat />
    </>
  );
}

export default App;

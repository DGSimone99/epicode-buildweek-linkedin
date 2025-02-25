import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Chat from "./Component/Profilo/Chat";
import { Container } from "react-bootstrap";
import CustomNav from "./Component/Nav_Footer/CustomNav";
import MyHome from "./Component/Home/MyHome";
import { BrowserRouter, Route, Routes } from "react-router";
import EditProfilo from "./Component/Profilo/EditProfilo";

function App() {
  return (
    <BrowserRouter>
      <CustomNav />
      <Container fluid className="pt-3">
        <Container>
          <EditProfilo />
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/me" element={<ProfiloPrincipale />} />
          </Routes>
        </Container>
      </Container>
      <Chat />
    </BrowserRouter>
  );
}

export default App;

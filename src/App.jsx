import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Chat from "./Component/Profilo/Chat";
import { Container } from "react-bootstrap";
import CustomNav from "./Component/Nav_Footer/CustomNav";
import MyHome from "./Component/Home/MyHome";
import { BrowserRouter, Route, Routes } from "react-router";
import CustomFooter from "./Component/Nav_Footer/CustomFooter";
import MainUtente from "./Component/Utenti/MainUtente";
import PageLavoro from "./Component/Lavoro/PageLavoro";

function App() {
  return (
    <BrowserRouter>
      <CustomNav />
      <Container fluid className="pt-3">
        <Container>
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/me" element={<ProfiloPrincipale />} />
            <Route path="/:id" element={<MainUtente />} />
            <Route path="/jobs" element={<PageLavoro />} />
          </Routes>
        </Container>
      </Container>
      <Chat />
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;

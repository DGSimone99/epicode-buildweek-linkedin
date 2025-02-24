import "./App.css";
import Analisi from "./Component/Profilo/Analisi";
import Consigliato from "./Component/Profilo/Consigliato";
import "bootstrap/dist/css/bootstrap.min.css";
/* import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale"; */
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Language from "./Component/Profilo/Language";
import Chat from "./Component/Profilo/Chat";

function App() {
  return (
    <>
      <ProfiloPrincipale />
      <Consigliato />
      <Analisi />
      <Language />
      <Chat />
    </>
  );
}

export default App;

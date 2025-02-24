import "./App.css";
import Analisi from "./Component/Profilo/Analisi";
import Consigliato from "./Component/Profilo/Consigliato";
import "bootstrap/dist/css/bootstrap.min.css";
/* import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale"; */

function App() {
  return (
    <>
      <Consigliato />
      <Analisi />
    </>
  );
}

export default App;

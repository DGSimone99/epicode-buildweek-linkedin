import "./App.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomFooter from "./Component/Footer/CustomFooter";

//Token Strive eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q

function App() {
  return (
    <>
      <ProfiloPrincipale />
      <CustomFooter />
    </>
  );
}

export default App;

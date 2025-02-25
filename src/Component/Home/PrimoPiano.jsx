import { Container, Image } from "react-bootstrap";
import { ChevronCompactRight, InfoSquareFill } from "react-bootstrap-icons";
import NotiziePrimoPiano from "./NotiziePrimoPiano";
import MyCollapse from "./MyCollapse";

const PrimoPiano = () => {
  return (
    <Container className="bg-white border-secondary rounded-3">
      <div className="d-flex align-items-center">
        <h3>In primo piano</h3>
        <InfoSquareFill color="black" className="ms-auto" />
      </div>
      <p>a cura di LinkedIn Notizie</p>
      <NotiziePrimoPiano titolo="I giovani lavoratori sono sempre me..." aggiornamento="4 giorni fa • 1.416 lettori" />
      <NotiziePrimoPiano titolo="Fusione tra Saipem e Subsea7" aggiornamento="5 ore fa • 248 lettori" />
      <NotiziePrimoPiano titolo="Roma ospita la COP16 'bis'" aggiornamento="4 ore fa • 122 lettori" />
      <NotiziePrimoPiano titolo="Priorità benessere per i lavoratori" aggiornamento="5 ore fa" />

      <MyCollapse />

      <h4 className="text-secondary">I Giochi di oggi</h4>

      <div className="d-flex mb-3 align-items-center">
        <div>
          <Image src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6" height={48} />
        </div>
        <div className="ms-3">
          <h5 className="mb-0">Tango</h5>
          <p className="text-secondary mb-0">Armonizza la griglia</p>
        </div>
        <ChevronCompactRight className="ms-auto" />
      </div>

      <div className="d-flex mb-4 align-items-center">
        <div>
          <Image src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" height={48} />
        </div>
        <div className="ms-3">
          <h5 className="mb-0">Queens</h5>
          <p className="text-secondary mb-0">Incorona ogni regione</p>
        </div>
        <ChevronCompactRight className="ms-auto" />
      </div>
    </Container>
  );
};
export default PrimoPiano;

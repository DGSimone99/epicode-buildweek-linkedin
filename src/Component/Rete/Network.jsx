import { Col, Row } from "react-bootstrap";
import FooterMini from "../Nav_Footer/FooterMini";
import MyNetwork from "./MyNetwork";
import Invites from "./Invites";

const Network = () => {
  return (
    <>
      <Row xs={1} md={2} className="mb-5 justify-content-center">
        <Col md={3}>
          <MyNetwork />
          <div className="d-none d-md-block">
            <Annuncio />
            <FooterMini />
          </div>
        </Col>
        <Col md={7}>
          <Invites />
          <Giochi />
          <Conoscenti
            titolo="Persone che potresti conoscere in base alla tua attività recente"
            partenza={200}
            fine={208}
          />
          <Conoscenti titolo="Persone che potresti conoscere in Roma" partenza={400} fine={408} />
          <Conoscenti titolo="Persone da seguire in base alla tua attività" partenza={300} fine={308} />
          <Popular />
        </Col>
      </Row>
    </>
  );
};

export default Network;

import { Col, Row } from "react-bootstrap";
import FooterMini from "../Nav_Footer/FooterMini";
import Messaggi from "./Messaggi";
import Annuncio from "../Home/Annuncio";

const MessaggiMain = () => {
  return (
    <Row xs={1} md={2} lg={3}>
      <Col md={12} lg={9} className="mb-5">
        <Messaggi />
      </Col>
      <Col md={8} lg={3}>
        <FooterMini />
        <Annuncio />
      </Col>
    </Row>
  );
};

export default MessaggiMain;

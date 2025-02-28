import { Col, Row } from "react-bootstrap";
import User from "../Home/User";
import FooterMini from "../Nav_Footer/FooterMini";
import Notifiche from "./Notifiche";

const NotificheMain = () => {
  return (
    <Row xs={1} md={2} lg={3}>
      <Col md={4} lg={3}>
        <User />
      </Col>
      <Col md={8} lg={6} className="mb-5">
        <Notifiche />
      </Col>
      <Col md={8} lg={3}>
        <FooterMini />
      </Col>
    </Row>
  );
};

export default NotificheMain;

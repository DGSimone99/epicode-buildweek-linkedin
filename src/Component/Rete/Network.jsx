import { Col, Row } from "react-bootstrap";
import FooterMini from "../Nav_Footer/FooterMini";
import MyNetwork from "./MyNetwork";
import Invites from "./Invites";
import Popular from "./Popular";
import Conoscenti from "./Conoscenti";

const Network = () => {
  return (
    <>
      <Row xs={1} md={2} className="mb-5">
        <Col md={4}>
          <MyNetwork />
          <div className="d-none d-md-block">
            <FooterMini />
          </div>
        </Col>
        <Col md={8}>
          <Invites />
          <Conoscenti />
          <Popular />
        </Col>
      </Row>
    </>
  );
};

export default Network;

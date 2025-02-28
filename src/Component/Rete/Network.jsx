import { Col, Row } from "react-bootstrap";
import FooterMini from "../Nav_Footer/FooterMini";
import MyNetwork from "./MyNetwork";
import Invites from "./Invites";

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
        </Col>
      </Row>
    </>
  );
};

export default Network;

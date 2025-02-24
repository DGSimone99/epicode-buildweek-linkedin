import { Col, Row } from "react-bootstrap";
import CreaPost from "./CreaPost";
import PrimoPiano from "./PrimoPiano";
import User from "./User";

const MyHome = () => {
  return (
    <>
      <Row>
        <User />

        <Col xs={6}>
          <CreaPost />
        </Col>
        <Col xs={3}>
          <PrimoPiano />
        </Col>
      </Row>
    </>
  );
};
export default MyHome;

import { Col, Row } from "react-bootstrap";
import User from "../Home/User";
import OffertePrincipali from "./OffertePrincipali";

const PageLavoro = () => {
  return (
    <>
      <Row xs={1} md={2}>
        <Col md={4}>
          <User />
        </Col>
        <Col md={8}>
          <OffertePrincipali />
        </Col>
      </Row>
    </>
  );
};
export default PageLavoro;

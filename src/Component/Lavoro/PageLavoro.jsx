import { Col, Row } from "react-bootstrap";
import OffertePrincipali from "./OffertePrincipali";
import OffertePremium from "./OffertePremium";
import AltreOfferte from "./AltreOfferte";
import FooterMini from "../Nav_Footer/FooterMini";
import UserLavoro from "./UserLavoro";

const PageLavoro = () => {
  return (
    <>
      <Row xs={1} md={2} className="mb-5">
        <Col md={4}>
          <UserLavoro />
          <div className="d-none d-md-block">
            <FooterMini />
          </div>
        </Col>
        <Col md={8}>
          <OffertePrincipali />
          <OffertePremium />
          <AltreOfferte />
        </Col>
      </Row>
    </>
  );
};
export default PageLavoro;

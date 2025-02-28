import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import OffertePrincipali from "./OffertePrincipali";
import OffertePremium from "./OffertePremium";
import AltreOfferte from "./AltreOfferte";
import FooterMini from "../Nav_Footer/FooterMini";
import UserLavoro from "./UserLavoro";
import SpazioCercaLavoro from "./SpazioCercaLavoro";
import Loader from "../Loader";

const PageLavoro = () => {
  const { jobs, loading } = useSelector((state) => state.jobs);

  const hasAnnuncioSingolo = jobs && jobs.length > 0;

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
          {loading && <Loader />}
          {!loading && !hasAnnuncioSingolo && <SpazioCercaLavoro />}
          {hasAnnuncioSingolo && <OffertePrincipali />}
          {hasAnnuncioSingolo && <OffertePremium />}
          {hasAnnuncioSingolo && <AltreOfferte />}
        </Col>
      </Row>
    </>
  );
};

export default PageLavoro;

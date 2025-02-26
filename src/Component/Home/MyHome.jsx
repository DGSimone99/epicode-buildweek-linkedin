import { Col, Row } from "react-bootstrap";
import CreaPost from "./CreaPost";
import PrimoPiano from "./PrimoPiano";
import User from "./User";
import ConsigliPerTe from "./ConsigliPerTe";
import PostsHome from "./PostsHome";
import FooterMini from "../Nav_Footer/FooterMini";

const MyHome = () => {
  return (
    <>
      <Row xs={1} md={2} lg={3}>
        <Col md={4} lg={3}>
          <User />
        </Col>
        <Col md={8} lg={6} className="mb-5">
          <CreaPost />
          <ConsigliPerTe />
          <PostsHome />
        </Col>
        <Col md={8} lg={3}>
          <PrimoPiano />
          <FooterMini />
        </Col>
      </Row>
    </>
  );
};
export default MyHome;

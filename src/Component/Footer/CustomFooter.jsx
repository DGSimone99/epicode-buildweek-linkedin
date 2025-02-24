import { Container, Row, Col } from "react-bootstrap";
import FooterList from "./FooterList";
import FooterList2 from "./FooterList2";

const CustomFooter = () => (
  <footer className="linkedIn-footer">
    <Container className="footerContainer">
      <Row>
        <Col md={6}>
          <FooterList />
        </Col>
        <Col md={6}>
          <FooterList2 />
        </Col>
        <p>LinkedIn Corporation © 2025</p>
      </Row>
    </Container>
  </footer>
);

export default CustomFooter;

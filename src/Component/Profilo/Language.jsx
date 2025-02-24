import { Button, Col, Container, Row } from "react-bootstrap";
import { Pen } from "react-bootstrap-icons";

const Language = () => {
  return (
    <Container fluid className="border rounded-3 my-4 bg-white">
      <Row className="my-3">
        <Col lg={10} xs={9} className="fw-bold">
          Lingua del profilo
        </Col>
        <Col lg={2} xs={3}>
          <Button className="border-0 bg-white m-0 p-0">
            <Pen size={20} color="black" />
          </Button>
        </Col>
        <Col className="text-secondary">Italiano</Col>
      </Row>
      <hr />
      <Row className="my-3">
        <Col lg={10} xs={9} className="fw-bold">
          Profilo pubblico e URL
        </Col>
        <Col lg={2} xs={3}>
          <Button className="border-0 bg-white m-0 p-0">
            <Pen size={20} color="black" />
          </Button>
        </Col>
        <Col className="text-secondary">www.linkedin.com/in/team-3-epicode-b88053353</Col>
      </Row>
    </Container>
  );
};

export default Language;

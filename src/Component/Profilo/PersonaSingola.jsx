import { Button, Col, Container, Row } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";

const PersonaSingola = (props) => {
  return (
    <>
      <Container fluid className="px-0">
        <Row>
          <Col xs={3}>
            <img
              src={props.profile.image}
              alt={props.profile.name + " propic"}
              className="rounded-circle"
              width="60rem"
              height="60rem"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Col>
          <Col xs={9} className="d-flex flex-column">
            <p>
              <strong>
                {props.profile.name} {props.profile.surname}
              </strong>
            </p>
            <p className="textTruncate">{props.profile.bio}</p>
            <Button
              variant="light"
              className="rounded-pill border border-black fw-bold d-flex align-items-center justify-content-center me-auto"
            >
              <PersonPlusFill className="text-black me-2" />
              Collegati
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PersonaSingola;

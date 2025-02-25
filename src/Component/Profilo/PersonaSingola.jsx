import { Button, Col, Container, Row } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

const PersonaSingola = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid className="px-0 pointer">
        <Row
          onClick={() => {
            navigate("/" + props.profile._id);
          }}
        >
          <Col xs={3}>
            <img
              src={props.profile.image}
              alt={props.profile.name + " propic"}
              className="rounded-circle"
              width="50rem"
              height="50rem"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Col>
          <Col xs={9} className="d-flex flex-column">
            <p className="mb-1">
              <strong className="fw-semibold">
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

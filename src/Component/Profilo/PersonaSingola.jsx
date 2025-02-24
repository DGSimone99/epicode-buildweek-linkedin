import { Button, Col, Container, Row } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";

const PersonaSingola = (props) => {
  return (
    <>
      <Container fluid className="px-0">
        <Row>
          <Col xs={3}>
            <img
              src="https://thumbs.dreamstime.com/z/shrek-est-un-ogre-vert-fictif-madame-tussauds-uk-personnage-d-cr%C3%A9%C3%A9-par-l-auteur-am%C3%A9ricain-william-steig-la-voix-de-mike-myers-216406315.jpg"
              alt="propic"
              className="rounded-circle"
              width="120rem"
              height="120rem"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Col>
          <Col xs={9} className="d-flex flex-column">
            <p>
              <strong>
                {props.nome} {props.cognome}
              </strong>
            </p>
            <p className="text-truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid consequatur nesciunt
            </p>
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

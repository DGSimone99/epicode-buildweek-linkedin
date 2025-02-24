import { Card, Col, Container, Image, Navbar, NavLink } from "react-bootstrap";
import { PeopleFill, PersonPlusFill } from "react-bootstrap-icons";
import { BiCalendar, BiCalendarAlt } from "react-icons/bi";
import { BsFillBookmarkFill, BsFillSlashSquareFill, BsPlus } from "react-icons/bs";

const User = () => {
  return (
    <Col xs={3}>
      <Container className="cardBox rounded-3 px-0 my-2">
        <Card>
          <Card.Img
            variant="top"
            src="https://www.reliant-rehab.com/wp-content/uploads/2019/02/reliant-generic-background-1.jpg"
            className="imgTeam2 position-relative"
          />
          <div className="userImg2">
            <Image
              src="https://i.pinimg.com/736x/f3/d1/ed/f3d1edf10d63c40e1fa06364176fa502.jpg"
              fluid
              className="rounded-circle position-relative"
              width={68}
            ></Image>
            <BsPlus className="position-absolute bottom-0 end-0 rounded-circle plusImg2"></BsPlus>
          </div>
          <Card.Body className="mt-4 px-2">
            <Container>
              <Card.Title className="fs-3 mb-0">Team 3 Epicode</Card.Title>
              <Card.Text className="mb-0">Studente presso EPICODE</Card.Text>
              <Card.Text className="text-secondary my-0">Roma, Lazio</Card.Text>
              <Card.Text className="my-1">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&amp;v=beta&amp;t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                  width={32}
                ></img>
                EPICODE
              </Card.Text>
            </Container>
          </Card.Body>
        </Card>
      </Container>

      <Container className="cardBox rounded-3 px-0 my-2">
        <Card>
          <Card.Body className="px-2">
            <Container>
              <Card.Text className="fw-bold mb-3">Visualizza tutte le analisi</Card.Text>
              <div className="d-flex justify-content-between">
                <div>
                  <Card.Text className="mb-0 fw-bold">Collegamenti</Card.Text>
                  <Card.Text className="text-secondary my-0">Espandi la tua rete</Card.Text>
                </div>
                <div>
                  <PersonPlusFill className="text-black"></PersonPlusFill>
                </div>
              </div>
            </Container>
          </Card.Body>
        </Card>
      </Container>

      <Container className="cardBox rounded-3 px-0">
        <Card>
          <Card.Body className="px-2">
            <Container>
              <Card.Text className="text-secondary mb-3">Accedi a strumenti e informazioni in esclusiva</Card.Text>
              <Card.Text className="mb-0 fw-bold d-flex align-items-center">
                <BsFillSlashSquareFill className="me-2" style={{ color: "#E7A33E" }}></BsFillSlashSquareFill> Prova
                Premium per 0 EUR
              </Card.Text>
            </Container>
          </Card.Body>
        </Card>
      </Container>

      <Container className="cardBox rounded-3 px-0 mt-2">
        <Card>
          <Card.Body className="px-2">
            <Container className="d-flex flex-column align-items-start">
              <NavLink className="fw-bold py-0 d-flex align-items-center">
                <BsFillBookmarkFill className="me-2"></BsFillBookmarkFill>Elementi Salvati
              </NavLink>
              <NavLink className="fw-bold my-2 py-0 d-flex align-items-center">
                <PeopleFill className="me-2 text-black"></PeopleFill>Gruppi
              </NavLink>
              <NavLink className="fw-bold py-0 d-flex align-items-center">
                <BiCalendarAlt className="me-2 text-black"></BiCalendarAlt>Eventi
              </NavLink>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </Col>
  );
};

export default User;

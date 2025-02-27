import { Card, Container, Dropdown, Image, NavLink } from "react-bootstrap";
import { ListUl, PencilSquare } from "react-bootstrap-icons";
import { BsFillBookmarkFill, BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const UserLavoro = () => {
  const user = useSelector((state) => state.user.content);
  return (
    <div>
      <Container className="cardBox rounded-3 px-0 mb-2">
        <Card as={Link} to="/me" className="nav-link">
          <Card.Img
            variant="top"
            src="https://www.reliant-rehab.com/wp-content/uploads/2019/02/reliant-generic-background-1.jpg"
            className="imgTeam2 position-relative"
          />
          <div className="userImg2">
            <Image
              src={user.image}
              fluid
              className="rounded-circle position-relative"
              style={{
                width: "68px",
                height: "68px",
                objectFit: "cover",
              }}
            ></Image>
            <BsPlus className="position-absolute bottom-0 end-0 rounded-circle plusImg2"></BsPlus>
          </div>
          <Card.Body className="mt-4 px-2">
            <Container>
              <Card.Title className="fs-3 mb-0">{user.name + " " + user.surname}</Card.Title>
              <Card.Text className="mb-0">{user.title}</Card.Text>
              <Card.Text className="text-secondary my-0">{user.area}</Card.Text>
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

      <Container id="preferenze" className="cardBox rounded-3 px-0 mt-2">
        <Card>
          <Card.Body className="px-2">
            <Container className="d-flex flex-column align-items-start">
              <NavLink className="fw-semibold py-0 d-flex align-items-center">
                <ListUl className="me-2 fs-5" />
                Preferenze
              </NavLink>
              <NavLink className="fw-semibold mt-3 py-0 d-flex align-items-center">
                <BsFillBookmarkFill className="me-2 fs-5" />
                Le mie offerte di lavoro
              </NavLink>
              <div className="w-100">
                <hr className="w-100 my-4" />
              </div>
              <NavLink className="fw-semibold py-0 d-flex align-items-center text-primary">
                <PencilSquare className="me-2 text-black fs-5" />
                Pubblica offerta gratuita
              </NavLink>
            </Container>
          </Card.Body>
        </Card>
      </Container>

      <Container id="preferenze2" className="cardBox rounded-3 px-0 my-3 d-block d-md-none">
        <Card>
          <Card.Body className="px-2">
            <Container className="d-flex justify-content-between">
              <NavLink className="fw-semibold py-0 d-flex align-items-center">
                <ListUl className="me-2 fs-5" />
                Preferenze
              </NavLink>
              <Dropdown>
                <Dropdown.Toggle variant="white" className="text-dark border-0">
                  Altro
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end p-3" style={{ width: "250px" }}>
                  <NavLink className="fw-semibold mb-2 py-0 d-flex align-items-center">
                    <BsFillBookmarkFill className="me-2 fs-5" />
                    Le mie offerte di lavoro
                  </NavLink>
                  <hr className="my-3" />
                  <NavLink className="fw-semibold py-0 d-flex align-items-center text-primary">
                    <PencilSquare className="me-2 text-black fs-5" />
                    Pubblica offerta gratuita
                  </NavLink>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default UserLavoro;

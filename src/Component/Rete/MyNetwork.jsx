import { Card, Container, NavLink } from "react-bootstrap";
import { PeopleFill, PersonFill, Calendar3, Building, Newspaper } from "react-bootstrap-icons";
import { HiUserGroup } from "react-icons/hi";

const MyNetwork = () => {
  return (
    <>
      <Card>
        <Card.Body className="px-2">
          <Container className="d-flex flex-column align-items-start">
            <Card.Text className="fw-bold fs-6 mb-0">Gestisci la tua rete</Card.Text>
            <hr className="w-100" />
            <NavLink className="fw-semibold py-0 d-flex align-items-center">
              <PeopleFill className="me-3" size={23} />
              Collegamenti
            </NavLink>
            <NavLink className="fw-semibold mt-3 py-0 d-flex align-items-center">
              <PersonFill className="me-3" size={23} />
              Persone che segui e follower
            </NavLink>
            <NavLink className="fw-semibold mt-3 py-0 d-flex align-items-center">
              <HiUserGroup className="me-3" size={23} color="grey" />
              Gruppi
            </NavLink>
            <NavLink className="fw-semibold mt-3 mt-3 py-0 d-flex align-items-center">
              <Calendar3 className="me-3" size={20} />
              Eventi
            </NavLink>
            <NavLink className="fw-semibold mt-3 py-0 d-flex align-items-center">
              <Building className="me-3" size={20} />
              Pagine
            </NavLink>
            <NavLink className="fw-semibold mt-3 py-0 d-flex align-items-center">
              <Newspaper className="me-3" size={20} />
              Newsletter
            </NavLink>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyNetwork;

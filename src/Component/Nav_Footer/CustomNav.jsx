import { useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  Container,
  Dropdown,
  InputGroup,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
  Search,
  SquareFill,
  CompassFill,
  FileEarmarkBarGraphFill,
  LaptopFill,
  InfoCircleFill,
  Bullseye,
  PlayBtnFill,
} from "react-bootstrap-icons";

import { fetchUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

const CustomNav = () => {
  const user = useSelector((state) => state.user.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <Navbar bg="white" expand="lg" className="px-3 shadow-sm container-fluid sticky-top ">
      <Container>
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              width="34"
              height="34"
              alt="LinkedIn Logo"
            />
          </Navbar.Brand>
          <Form>
            <InputGroup style={{ backgroundColor: "#F4F2EE", borderRadius: "4px", overflow: "hidden" }}>
              <InputGroup.Text style={{ backgroundColor: "#F4F2EE", border: "none" }}>
                <Search />
              </InputGroup.Text>
              <FormControl type="search" placeholder="Cerca" style={{ backgroundColor: "#F4F2EE", border: "none" }} />
            </InputGroup>
          </Form>
        </div>
        <Nav className="d-flex align-items-center">
          <NavLink to="/" className="text-secondary text-center nav-link">
            <HouseDoorFill size={20} className="mb-1 mx-4" />
            <div>Home</div>
          </NavLink>
          <Nav.Link href="#" className="text-secondary text-center">
            <PeopleFill size={20} className="mb-1 mx-4" />
            <div>Rete</div>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary text-center">
            <BriefcaseFill size={20} className="mb-1 mx-4" />
            <div>Lavoro</div>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary text-center">
            <ChatDotsFill size={20} className="mb-1 mx-4" />
            <div>Messaggistica</div>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary text-center">
            <BellFill size={20} className="mb-1 mx-4" />
            <div>Notifiche</div>
          </Nav.Link>

          <Dropdown className="border-end ">
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              <Image src={user.image} roundedCircle width="24" height="24" className=" d-block" />
              <span>Tu</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end mt-2">
              <Dropdown>
                <Button className="d-flex aling-items-center bg-transparent text-black border-0" as={Link} to="/me">
                  <div>
                    <Image src={user.image} roundedCircle width="50" height="50" className="me-1 d-block" />
                  </div>
                  <div className="align-content-center">
                    <h6 className="m-0">{user.name + " " + user.surname}</h6>
                    <p className="m-0 mt-1">{user.title}</p>
                  </div>
                </Button>
                <div className=" ms-auto">
                  <Button
                    as={Link}
                    to="/me"
                    variant="outline-primary"
                    className="rounded-pill fw-semibold px-5 py-0 my-2 mx-3"
                  >
                    Visualizza profilo
                  </Button>
                </div>
              </Dropdown>
              <Dropdown.Item href="#">
                <h6>Account</h6>
                <p className="fw-semibold text-secondary">
                  <SquareFill className="me-1" style={{ color: "rgb(173, 131, 51)" }} /> Prova 1 mese di Premium per 0
                  EUR
                </p>
                <p>Impostazioni e privacy</p>
                <p>Guida</p>
                <p>Lingua</p>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                <h6>Gestisci</h6>
                <p>Post e attività</p>
                <p>Account per la pubblicazione di of...</p>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                <p className="m-0">Esci</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              <Grid3x3GapFill size={20} className="mb-1 mx-4 d-block" />
              <span>Per le aziende</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end mt-2" style={{ width: "680px" }}>
              <Container className="p-4">
                <Row xs={1} md={2}>
                  <Col className="border-end">
                    <div href="#">
                      <h5>Le mie App</h5>
                      <p className="mt-4 fw-semibold">
                        <CompassFill /> Trova lead
                      </p>
                      <p className="my-4 fw-semibold">
                        <PeopleFill /> Gruppi
                      </p>
                      <p className="fw-semibold text-secondary mt-4">Talent</p>
                      <p className="my-4 fw-semibold">
                        <FileEarmarkBarGraphFill />
                        Talent Insights
                      </p>
                      <p className="my-4 fw-semibold">
                        <LaptopFill /> Pubblica un'offerta di lavoro
                      </p>
                      <p className="fw-semibold text-secondary mt-4">Vendite</p>
                      <p className="my-4 fw-semibold">
                        <InfoCircleFill /> Marketplace dei servizi
                      </p>
                      <p className="fw-semibold text-secondary mt-4">Marketing</p>
                      <p className="my-4 fw-semibold">
                        <Bullseye /> Pubblicizza
                      </p>
                      <p className="fw-semibold text-secondary mt-4">Learning</p>
                      <p className="my-4 fw-semibold">
                        <PlayBtnFill /> Learning
                      </p>
                    </div>
                  </Col>
                  <Col className="ps-4">
                    <div href="#">
                      <h5>Scopri altro per il business</h5>
                      <p className="mt-4 mb-1 fw-semibold">Assumi su Linkedin</p>
                      <p className="pAziende">Trova, attrai e assumi</p>
                      <p className="mt-4 mb-1 fw-semibold">Vendi con Linkedin</p>
                      <p className="pAziende">Sblocca nuove opportunità di vendita</p>
                      <p className="mt-4 mb-1 fw-semibold">Offerta di lavoro gratuita</p>
                      <p className="pAziende">Ottieni rapidamente candidati qualificati</p>
                      <p className="mt-4 mb-1 fw-semibold">Fai pubblicità su Linkedin</p>
                      <p className="pAziende">Acquisisci clienti e fai crescere la tua azienda</p>
                      <p className="mt-4 mb-1 fw-semibold">Inizia con Premium</p>
                      <p className="pAziende">Amplia e sfrutta la tua rete</p>
                      <p className="mt-4 mb-1 fw-semibold">Impara con Linkedin</p>
                      <p className="pAziende">Corsi per formare i tuoi dipendenti</p>
                      <p className="mt-4 mb-1 fw-semibold">Admin Center</p>
                      <p className="pAziende">Gestisci i dettagli di fatturazione e account</p>
                      <p className="mt-4 mb-1 fw-semibold">Crea una pagina aziendale +</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link
            href="#"
            className="text-center"
            style={{ color: "rgb(131, 97, 24)", textDecorationLine: "underline" }}
          >
            <div>Prova Premium per 0 EUR</div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNav;

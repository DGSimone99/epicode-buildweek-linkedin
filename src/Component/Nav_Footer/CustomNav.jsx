import { useEffect, useState } from "react";
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
  CompassFill,
  FileEarmarkBarGraphFill,
  LaptopFill,
  InfoCircleFill,
  Bullseye,
  PlayBtnFill,
  GeoAltFill,
} from "react-bootstrap-icons";

import { fetchGetPost, fetchJobs, fetchUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router";
import { BsFillSlashSquareFill } from "react-icons/bs";

const CustomNav = () => {
  const user = useSelector((state) => state.user.content);
  const dispatch = useDispatch();
  const location = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchGetPost());
  }, [dispatch]);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchJobs(query));
    }
  };

  return (
    <Navbar id="navbar" bg="white" expand="lg" className="px-3 shadow-sm container-fluid sticky-top ">
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
          <Form className="d-flex">
            <InputGroup className="custom-input-group d-flex flex-nowrap">
              <InputGroup.Text
                className="search-icon d-flex align-items-center pe-0"
                style={{ backgroundColor: "#F4F2EE", border: "none" }}
              >
                <Search onClick={handleSearch} />
              </InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Cerca"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="d-none d-md-block"
                style={{ backgroundColor: "#F4F2EE", border: "none" }}
              />
            </InputGroup>

            {location.pathname === "/jobs" && (
              <InputGroup className="custom-input-group ms-3 d-flex flex-nowrap">
                <InputGroup.Text
                  className="search-icon d-flex align-items-center pe-0"
                  style={{ backgroundColor: "#F4F2EE", border: "none" }}
                >
                  <GeoAltFill />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  placeholder="Città, stato o CAP"
                  className="d-none d-md-block"
                  style={{ backgroundColor: "#F4F2EE", border: "none" }}
                />
              </InputGroup>
            )}
          </Form>
        </div>
        <Nav className="d-flex flex-row align-items-center">
          <NavLink to="/" className={`text-center nav-link ${location.pathname === "/" ? "navActive" : ""}`}>
            <HouseDoorFill size={20} className="mb-1 mx-4" />
            <p>Home</p>
          </NavLink>
          <Nav.Link to="" className={`text-center nav-link ${location.pathname === "" ? "navActive" : ""}`}>
            <PeopleFill size={20} className="mb-1 mx-4" />
            <p>Rete</p>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/jobs"
            className={`text-center nav-link ${location.pathname === "/jobs" ? "navActive" : ""}`}
          >
            <BriefcaseFill size={20} className="mb-1 mx-4" />
            <p>Lavoro</p>
          </Nav.Link>
          <Nav.Link to="" className={`text-center nav-link ${location.pathname === "" ? "navActive" : ""}`}>
            <ChatDotsFill size={20} className="mb-1 mx-4" />
            <p>Messaggistica</p>
          </Nav.Link>
          <Nav.Link to="" className={`text-center nav-link ${location.pathname === "" ? "navActive" : ""}`}>
            <BellFill size={20} className="mb-1 mx-4" />
            <p>Notifiche</p>
          </Nav.Link>

          <Dropdown className="border-end ">
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              <Image
                src={user.image}
                roundedCircle
                className=" d-block"
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "cover",
                }}
              />
              <span>Tu</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end mt-2">
              <Dropdown href="#" className="mx-3">
                <Button className="nav-link p-0" to="/me" variant="white">
                  <div className="d-flex aling-items-center">
                    <div>
                      <Image
                        src={user.image}
                        roundedCircle
                        className="me-2 d-block"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="d-flex flex-column align-items-start align-content-center">
                      <h6 className="m-0 text-black">{user.name + " " + user.surname}</h6>
                      <div className="m-0 mt-1">{user.title}</div>
                    </div>
                  </div>
                </Button>
                <Button
                  as={Link}
                  to="/me"
                  variant="outline-primary"
                  className="rounded-pill fw-semibold w-100 py-0 my-2"
                >
                  Visualizza profilo
                </Button>
              </Dropdown>
              <Dropdown.Item href="#">
                <h6>Account</h6>
                <div className="fw-semibold text-secondary">
                  <BsFillSlashSquareFill className="me-2" style={{ color: "#E7A33E" }}></BsFillSlashSquareFill> Prova 1
                  mese di Premium per 0 EUR
                </div>
                <div>Impostazioni e privacy</div>
                <div>Guida</div>
                <div>Lingua</div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                <h6>Gestisci</h6>
                <div>Post e attività</div>
                <div>Account per la pubblicazione di of...</div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                <div className="m-0">Esci</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown id="dropdownAziende">
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
                      <h6 className="mt-4 fw-semibold">
                        <CompassFill /> Trova lead
                      </h6>
                      <h6 className="my-4 fw-semibold">
                        <PeopleFill /> Gruppi
                      </h6>
                      <h6 className="fw-semibold text-secondary mt-4">Talent</h6>
                      <h6 className="my-4 fw-semibold">
                        <FileEarmarkBarGraphFill />
                        Talent Insights
                      </h6>
                      <h6 className="my-4 fw-semibold">
                        <LaptopFill /> Pubblica un&apos; offerta di lavoro
                      </h6>
                      <h6 className="fw-semibold text-secondary mt-4">Vendite</h6>
                      <h6 className="my-4 fw-semibold">
                        <InfoCircleFill /> Marketplace dei servizi
                      </h6>
                      <h6 className="fw-semibold text-secondary mt-4">Marketing</h6>
                      <h6 className="my-4 fw-semibold">
                        <Bullseye /> Pubblicizza
                      </h6>
                      <h6 className="fw-semibold text-secondary mt-4">Learning</h6>
                      <h6 className="my-4 fw-semibold">
                        <PlayBtnFill /> Learning
                      </h6>
                    </div>
                  </Col>
                  <Col className="ps-4">
                    <div href="#">
                      <h5>Scopri altro per il business</h5>
                      <h6 className="mt-4 mb-1 fw-semibold">Assumi su Linkedin</h6>
                      <p className="pAziende">Trova, attrai e assumi</p>
                      <h6 className="mt-4 mb-1 fw-semibold">Vendi con Linkedin</h6>
                      <p className="pAziende">Sblocca nuove opportunità di vendita</p>
                      <h6 className="mt-4 mb-1 fw-semibold">Offerta di lavoro gratuita</h6>
                      <p className="pAziende">Ottieni rapidamente candidati qualificati</p>
                      <h6 className="mt-4 mb-1 fw-semibold">Fai pubblicità su Linkedin</h6>
                      <p className="pAziende">Acquisisci clienti e fai crescere la tua azienda</p>
                      <h6 className="mt-4 mb-1 fw-semibold">Inizia con Premium</h6>
                      <p className="pAziende">Amplia e sfrutta la tua rete</p>
                      <h6 className="mt-4 mb-1 fw-semibold">Impara con Linkedin</h6>
                      <p className="pAziende">Corsi per formare i tuoi dipendenti</p>
                      <h6 className="mt-4 mb-1 fw-semibold">Admin Center</h6>
                      <p className="pAziende">Gestisci i dettagli di fatturazione e account</p>
                      <h6 className="mt-4 mb-1 fw-semibold">Crea una pagina aziendale +</h6>
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
            <p>Prova Premium per 0 EUR</p>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNav;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Navbar, Nav, Form, FormControl, Image, Container, Dropdown, InputGroup } from "react-bootstrap";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
  Search,
  GeoAltFill,
} from "react-bootstrap-icons";
import { fetchGetPost, fetchJobs, fetchUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router";

const CustomNav = () => {
  const user = useSelector((state) => state.user.content);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchGetPost());
  }, [dispatch]);

  useEffect(() => {
    setQuery("");
    setJobLocation("");
  }, [location.pathname]);

  const handleSearch = () => {
    if (query.trim() || jobLocation.trim()) {
      navigate("/jobs");
      let searchType = "search";
      let searchValue = query.trim();

      if (query.startsWith("company:")) {
        searchType = "company";
        searchValue = query.replace("company:", "").trim();
      } else if (query.startsWith("category:")) {
        searchType = "category";
        searchValue = query.replace("category:", "").trim();
      }

      dispatch(fetchJobs(searchType, searchValue, jobLocation.trim()));
    }
  };

  return (
    <Navbar id="navbar" bg="white" expand="lg" className="px-3 shadow-sm container-fluid sticky-top">
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
                onClick={handleSearch}
              >
                <Search />
              </InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Cerca"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
                className="d-none d-md-block"
                style={{ backgroundColor: "#F4F2EE", border: "none", outline: "none", boxShadow: "none" }}
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
                  type="text"
                  placeholder="Città, stato o CAP"
                  value={jobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSearch();
                    }
                  }}
                  className="d-none d-md-block"
                  style={{ backgroundColor: "#F4F2EE", border: "none", outline: "none", boxShadow: "none" }}
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
          <Nav.Link
            as={Link}
            to="/network"
            className={`text-center nav-link ${location.pathname === "/network" ? "navActive" : ""}`}
          >
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
            <p>Messaggi</p>
          </Nav.Link>
          <Nav.Link to="" className={`text-center nav-link ${location.pathname === "" ? "navActive" : ""}`}>
            <BellFill size={20} className="mb-1 mx-4" />
            <p>Notifiche</p>
          </Nav.Link>

          <Dropdown className="border-end">
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              <Image
                src={user.image}
                roundedCircle
                className="d-block"
                style={{ width: "24px", height: "24px", objectFit: "cover" }}
              />
              <span>Tu</span>
            </Dropdown.Toggle>
          </Dropdown>

          <Dropdown id="dropdownAziende">
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              <Grid3x3GapFill size={20} className="mb-1 mx-4 d-block" />
              <span>Per le aziende</span>
            </Dropdown.Toggle>
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

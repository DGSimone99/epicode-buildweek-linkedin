import React from "react";
import { Navbar, Nav, Form, FormControl, Image, Container, NavDropdown, Dropdown } from "react-bootstrap";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
} from "react-bootstrap-icons";

const CustomNav = () => {
  return (
    <Navbar bg="white" expand="lg" className="px-3 shadow-sm container-fluid">
      <Container>
        <Navbar.Brand href="#">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            width="34"
            height="34"
            alt="LinkedIn Logo"
          />
        </Navbar.Brand>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Cerca" className="me-2" style={{ backgroundColor: "#F4F2EE" }} />
        </Form>
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#" className="text-secondary text-center">
            <HouseDoorFill size={20} className="mb-1 mx-4" />
            <div>Home</div>
          </Nav.Link>
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

          <Dropdown>
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              <Image
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                roundedCircle
                width="24"
                height="24"
                className="me-1 d-block"
              />
              <span>Tu</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Profilo</Dropdown.Item>
              <Dropdown.Item href="#">Account</Dropdown.Item>
              <Dropdown.Item href="#">Gestisci</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Esci</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="vr mx-2"></div>

          <Dropdown>
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              <Grid3x3GapFill size={20} className="mb-1 mx-4 d-block" />
              <span>Per le aziende</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Le mie App</Dropdown.Item>
              <Dropdown.Item href="#">Scopri altro per il business</Dropdown.Item>
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

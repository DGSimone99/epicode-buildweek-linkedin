import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { QuestionCircleFill, GearFill, ShieldShaded } from "react-bootstrap-icons";

const CustomFooter = () => {
  return (
    <footer className="pt-5 pb-3">
      <Container>
        <Row>
          <Col md={9}>
            <Row>
              <Col xs={6} sm={3} className="mb-3">
                <div className="footer-links">
                  <p>
                    <a className="link-secondary" href="#">
                      Informazioni
                    </a>
                  </p>
                  <p>
                    <a className="link-secondary" href="#">
                      Informativa sulla community professionale
                    </a>
                  </p>
                  <Dropdown drop="up">
                    <Dropdown.Toggle className="text-secondary p-0 pb-3" variant="" id="dropdown-footer">
                      Privacy e condizioni
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <p>
                    <a className="link-secondary" href="#">
                      Sales e Solutions
                    </a>
                  </p>
                  <p>
                    <a className="link-secondary" href="#">
                      Centro sicurezza
                    </a>
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={3} className="mb-3">
                <div className="footer-links">
                  <p>
                    <a className="link-secondary" href="#">
                      Accessibilità
                    </a>
                  </p>
                  <p>
                    <a className="link-secondary" href="#">
                      Carriera
                    </a>
                  </p>
                  <p>
                    <a className="link-secondary" href="#">
                      Opzioni per gli annunci pubblicitari
                    </a>
                  </p>
                  <p>
                    <a className="link-secondary" href="#">
                      Mobile
                    </a>
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={3} className="mb-3">
                <div className="footer-links">
                  <p>
                    <a className="link-secondary" href="#">
                      Talent Solutions
                    </a>
                  </p>
                  <p>
                    <a className="link-secondary" href="#">
                      Soluzioni di marketing
                    </a>
                  </p>
                  <p>
                    <a className="link-secondary" href="#">
                      Pubblicità
                    </a>
                  </p>
                  <p>
                    <a className="link-secondary" href="#">
                      Piccole imprese
                    </a>
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={3} className="mb-3">
                <div className="footer-links">
                  <p>
                    <QuestionCircleFill size={20} />
                    <a className="link-secondary mx-1" href="#">
                      Domande?
                    </a>
                  </p>
                  <p>
                    <GearFill size={20} />
                    <a className="link-secondary mx-1" href="#">
                      Gestisci il tuo account e la tua privacy
                    </a>
                  </p>
                  <p>
                    <ShieldShaded size={20} />
                    <a className="link-secondary mx-1" href="#">
                      Trasparenza sui conenuti consigliati
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="d-flex align-items-start">
            <Dropdown drop="up">
              <span className="d-flex">Seleziona lingua</span>
              <Dropdown.Toggle className="border-secondary" variant="light">
                Italiano (Italiano)
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="">
            <small>LinkedIn Corporation &copy; 2025</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;

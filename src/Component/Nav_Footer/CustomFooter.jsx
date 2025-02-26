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
                    <Dropdown.Toggle className="text-secondary p-0 pb-3 border-0" variant="" id="dropdown-footer">
                      Privacy e condizioni
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Informativa sulla privacy</Dropdown.Item>
                      <Dropdown.Item href="#">Contratto di licenza</Dropdown.Item>
                      <Dropdown.Item href="#">Termini e condizioni delle pagine</Dropdown.Item>
                      <Dropdown.Item href="#">Informativa sui cookie</Dropdown.Item>
                      <Dropdown.Item href="#">Informativa sul copyright</Dropdown.Item>
                      <Dropdown.Item href="#">
                        Opzioni relative all&lsquo;informativa sulla privacy (Stato della California)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <small>
                    <a className="link-secondary" href="#">
                      Sales e Solutions
                    </a>
                  </small>
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
                <Dropdown.Item href="#">عربي (Arabo)</Dropdown.Item>
                <Dropdown.Item href="#">বাংলা (Bengali)</Dropdown.Item>
                <Dropdown.Item href="#">čeština (Ceco)</Dropdown.Item>
                <Dropdown.Item href="#">Dansk (Danese)</Dropdown.Item>
                <Dropdown.Item href="#">Deutsch (Tedesco)</Dropdown.Item>
                <Dropdown.Item href="#">ελληνικά (Greco)</Dropdown.Item>
                <Dropdown.Item href="#">English (Inglese)</Dropdown.Item>
                <Dropdown.Item href="#">Español (Spagnolo)</Dropdown.Item>
                <Dropdown.Item href="#">فارسی (Persiano)</Dropdown.Item>
                <Dropdown.Item href="#">Suomi (Finlandese)</Dropdown.Item>
                <Dropdown.Item href="#">Français (Francese)</Dropdown.Item>
                <Dropdown.Item href="#">हिंदी (Hindi)</Dropdown.Item>
                <Dropdown.Item href="#">Magyar (Ungherese)</Dropdown.Item>
                <Dropdown.Item href="#">Bahasa Indonesia (Indonesiano)</Dropdown.Item>
                <Dropdown.Item href="#">Italiano (Italiano)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col>
            <small>LinkedIn Corporation &copy; 2025</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;

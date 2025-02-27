import { Container, Dropdown } from "react-bootstrap";
const FooterMini = () => {
  return (
    <footer className="py-3 text-muted text-center m-auto sticky-top footerSticky">
      <Container>
        <div className="d-flex flex-wrap justify-content-center">
          <p id="pFooter" className="text-muted text-decoration-none my-1 mx-2" href="#">
            Informazioni
          </p>
          <p id="pFooter" className="text-muted text-decoration-none my-1 mx-2" href="#">
            Accessibilità
          </p>
          <p id="pFooter" className="text-muted text-decoration-none my-1 mx-2" href="#">
            Centro assistenza
          </p>
          <Dropdown>
            <Dropdown.Toggle id="pFooter" variant="link" className="p text-muted text-decoration-none border-0 p-0">
              Privacy e condizioni
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item id="pFooter" href="#">
                Informativa sulla privacy
              </Dropdown.Item>
              <Dropdown.Item id="pFooter" href="#">
                Contratto di licenza
              </Dropdown.Item>
              <Dropdown.Item id="pFooter" href="#">
                Termini e condizioni
              </Dropdown.Item>
              <Dropdown.Item id="pFooter" href="#">
                Informativa sui cookie
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id="pFooter" className="text-muted text-decoration-none my-1 mx-2" href="#">
            Opzioni per gli annunci pubblicitari
          </p>
          <p id="pFooter" className="text-muted text-decoration-none my-1 mx-2" href="#">
            Pubblicità
          </p>
          <Dropdown>
            <Dropdown.Toggle id="pFooter" variant="link" className="p text-muted text-decoration-none border-0 p-0">
              Servizi alle aziende
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item id="pFooter" href="#">
                Assumi su LinkedIn
              </Dropdown.Item>
              <Dropdown.Item id="pFooter" href="#">
                Vendi con LinkedIn
              </Dropdown.Item>
              <Dropdown.Item id="pFooter" href="#">
                Offerta di lavoro gratuita
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p id="pFooter" className="text-muted text-decoration-none my-1 mx-2" href="#">
            Scarica l’app LinkedIn
          </p>
          <p id="pFooter" className="text-muted text-decoration-none my-1 mx-2" href="#">
            Altro
          </p>
        </div>

        <div className="mt-2 text-center d-flex justify-content-center">
          <p id="pFooter" className="fw-bold text-primary me-1 d-flex align-items-center">
            Linked{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              width={12}
              height={12}
              alt="logo"
            />
          </p>
          <p id="pFooter">LinkedIn Corporation &copy; 2025</p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterMini;

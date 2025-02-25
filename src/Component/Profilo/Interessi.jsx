import { Button, Container, Image, Nav } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";

const Interessi = () => {
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 pt-3 mt-3 pb-3">
      <Container>
        <h3>Interessi</h3>
        <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="text-success active">
              Aziende
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="text-secondary">
              Scuole o università
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr className="m-0" />
        <div className="d-flex aling-items-center mt-3">
          <div>
            <Image
              src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
              roundedCircle
              className="me-1 d-block"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="align-content-center ">
            <h6 className="m-0 text-black">EPICODE</h6>
            <p className="m-0 mt-1">18.839 follower</p>
            <div>
              <Button id="skill-btn" className="ps-2 py-0 mt-2">
                <Check size={30} className="m-0" /> Già segui
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};
export default Interessi;

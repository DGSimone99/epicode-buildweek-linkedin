import { Button, Container, Image } from "react-bootstrap";
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";

const Giochi = () => {
  return (
    <Container className="bg-white border rounded-3 p-3 ">
      <div className="d-flex align-items-center mb-3">
        <p className="mb-0">Rimani in contatto con giochi giornalieri</p>
        <div className="d-flex ms-auto">
          <div className="rounded-circle p-1 me-2" style={{ backgroundColor: "#E8E8E8" }}>
            <ChevronCompactLeft />
          </div>
          <div className="p-1 rounded-circle" style={{ backgroundColor: "#E8E8E8" }}>
            <ChevronCompactRight />
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="d-flex justify-content-between border-end me-3">
          <Image src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" height={48} />
          <div className="d-block ms-2">
            <p className="mb-0">
              <strong>Queens</strong> #304
            </p>
            <p className="mb-0">Friday, Feb 28</p>
          </div>
          <Button variant="outline-primary" className="rounded-pill mx-3">
            <strong>Risolvi</strong>
          </Button>
        </div>

        <div className="d-flex">
          <Image src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6" height={48} />
          <div className="d-block ms-2">
            <p className="mb-0">
              <strong>Tango</strong> #144
            </p>
            <p className="mb-0">Friday, Feb 28</p>
          </div>
          <Button variant="outline-primary" className="rounded-pill mx-3">
            <strong>Risolvi</strong>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Giochi;

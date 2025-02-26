import { Container, Image } from "react-bootstrap";
import { ArrowRight, XLg } from "react-bootstrap-icons";
import { BsFillSlashSquareFill } from "react-icons/bs";

const OffertePremium = () => {
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 p-0 mt-3">
      <Container className="p-4 border-top border-4 border-warning rounded-3">
        <p className="fw-semibold text-secondary">
          <BsFillSlashSquareFill className="me-2" style={{ color: "#E7A33E" }}></BsFillSlashSquareFill> PREMIUM
        </p>
        <h5 className="fw-bold">Offerte di lavoro per cui hai più chance di ricevere un riscontro</h5>
        <p className="text-secondary">In base alle tue probabilità di ricevere una risposta</p>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <div className="d-flex align-items-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
              roundedCircle
              className="me-2"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <h6 className="m-0 text-black">Nome offerta</h6>
              <p className="m-0 mt-1">Tipo di Lavoro · Luogo</p>
            </div>
          </div>
          <button className="btn p-0 border-0">
            <XLg className="fw-bold text-dark" />
          </button>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between mt-3">
          <div className="d-flex align-items-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
              roundedCircle
              className="me-2"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <h6 className="m-0 text-black">Nome offerta</h6>
              <p className="m-0 mt-1">Tipo di Lavoro · Luogo</p>
            </div>
          </div>
          <button className="btn p-0 border-0">
            <XLg className="fw-bold text-dark" />
          </button>
        </div>
      </Container>
      <div className="border-top py-3">
        <p className="fw-bold text-center mb-0 ">
          Mostra tutto <ArrowRight />
        </p>
      </div>
    </Container>
  );
};
export default OffertePremium;

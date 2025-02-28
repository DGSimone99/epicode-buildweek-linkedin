import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { BsFillSlashSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import AnnuncioSingolo from "./AnnuncioSingolo";
import { Link } from "react-router";

const OffertePremium = () => {
  const { jobs } = useSelector((state) => state.jobs);

  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 p-0 mt-3">
      <Container className="p-4 pb-0 border-top border-4 border-warning rounded-3">
        <p className="fw-semibold text-secondary">
          <BsFillSlashSquareFill className="me-2" style={{ color: "#E7A33E" }}></BsFillSlashSquareFill> PREMIUM
        </p>
        <h5 className="fw-bold">Offerte di lavoro per cui hai più chance di ricevere un riscontro</h5>
        <p className="text-secondary">In base alle tue probabilità di ricevere una risposta</p>

        {jobs.length === 0 && (
          <p style={{ color: "rgba(61, 159, 204, 0.7)" }}>Cerca un lavoro nella barra di ricerca</p>
        )}
        {jobs.slice(4, 6).map((job) => (
          <AnnuncioSingolo key={job._id} job={job} />
        ))}
      </Container>
      {jobs.length > 0 && (
        <div className="pb-3 text-center">
          <Link to="/pagedettagli" className="fw-bold text-center mb-0 text-black text-decoration-none ">
            Mostra tutto <ArrowRight />
          </Link>
        </div>
      )}
    </Container>
  );
};
export default OffertePremium;

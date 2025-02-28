import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import AnnuncioSingolo from "./AnnuncioSingolo";
import { useDispatch, useSelector } from "react-redux";
import { removeJob } from "../redux/actions";
import { Link } from "react-router";

const OffertePrincipali = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);

  const handleRemove = (jobId) => dispatch(removeJob(jobId));

  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 p-0">
      <Container className="p-4 pb-0">
        <h5 className="fw-bold">Le principali offerte di lavoro per te</h5>
        <p className="text-secondary">
          In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi
        </p>
        {jobs.length === 0 && (
          <p style={{ color: "rgba(61, 159, 204, 0.7)" }}>Cerca un lavoro nella barra di ricerca</p>
        )}
        {jobs.slice(0, 3).map((job) => (
          <AnnuncioSingolo key={job._id} job={job} onRemove={handleRemove} />
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
export default OffertePrincipali;

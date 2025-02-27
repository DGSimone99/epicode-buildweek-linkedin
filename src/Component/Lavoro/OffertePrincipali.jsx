import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import AnnuncioSingolo from "./AnnuncioSingolo";
import { useDispatch, useSelector } from "react-redux";
import { removeJob } from "../redux/actions";

const OffertePrincipali = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const handleRemove = (jobId) => dispatch(removeJob(jobId));

  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 p-0">
      <Container className="p-4 pb-0">
        <h5 className="fw-bold">Le principali offerte di lavoro per te</h5>
        <p className="text-secondary">
          In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi
        </p>
        {loading && <p>Caricamento...</p>}
        {error && <p>Errore: {error}</p>}
        {!loading && !error && jobs.length === 0 && (
          <p style={{ color: "rgba(61, 159, 204, 0.7)" }}>Cerca un lavoro nella barra di ricerca</p>
        )}
        {!loading &&
          !error &&
          jobs.slice(0, 3).map((job) => <AnnuncioSingolo key={job._id} job={job} onRemove={handleRemove} />)}
      </Container>
      {!loading && !error && jobs.length > 0 && (
        <div className="pb-3">
          <p className="fw-bold text-center mb-0 ">
            Mostra tutto <ArrowRight />
          </p>
        </div>
      )}
    </Container>
  );
};
export default OffertePrincipali;

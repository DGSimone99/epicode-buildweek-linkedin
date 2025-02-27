import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import AnnuncioSingolo from "./AnnuncioSingolo";
import { Link } from "react-router";

const AltreOfferte = () => {
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 p-0  mt-3">
      <Container className="p-4 pb-0">
        <h5 className="fw-bold">Altre offerte di lavoro per te</h5>
        <p className="text-secondary">
          In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi
        </p>
        {loading && <p>Caricamento...</p>}
        {error && <p>Errore: {error}</p>}
        {!loading && !error && jobs.length === 0 && (
          <p style={{ color: "rgba(61, 159, 204, 0.7)" }}>Cerca un lavoro nella barra di ricerca</p>
        )}
        {!loading && !error && jobs.slice(7, 10).map((job) => <AnnuncioSingolo key={job._id} job={job} />)}
      </Container>
      {!loading && !error && jobs.length > 0 && (
        <div className="pb-3 text-center">
          <Link to="/pagedettagli" className="fw-bold text-center mb-0 text-black text-decoration-none ">
            Mostra tutto <ArrowRight />
          </Link>
        </div>
      )}
    </Container>
  );
};
export default AltreOfferte;

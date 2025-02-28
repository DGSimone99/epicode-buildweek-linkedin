import { Button, Container } from "react-bootstrap";
import { Link } from "react-router";
import { fetchJobs } from "../redux/actions";
import { useDispatch } from "react-redux";

const SpazioCercaLavoro = () => {
  const dispatch = useDispatch();
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 p-0">
      <Container className="p-4 text-center">
        <img src="https://static.licdn.com/aero-v1/sc/h/e7ufxrklstvt6scuvejy6t4sx" width={50} className="mb-2"></img>
        <h5>Cerca offerte di lavoro</h5>
        <p className=" fs-6 text-secondary">
          Avvia una ricerca e condivideremo le opportunità che corrispondono ai tuoi criteri
        </p>

        <Link className="fw-bold text-center mb-0 text-black text-decoration-none ">
          <Button
            variant="outline-primary"
            className="rounded-pill fw-bold mx-2 px-3"
            onClick={() => dispatch(fetchJobs("search", "job"))}
          >
            Cerca subito
          </Button>
        </Link>
      </Container>
    </Container>
  );
};
export default SpazioCercaLavoro;

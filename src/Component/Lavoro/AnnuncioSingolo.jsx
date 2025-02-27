import { Image } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";

const AnnuncioSingolo = ({ job, onRemove }) => (
  <>
    <div className="d-flex align-items-center justify-content-between mt-3">
      <div className="d-flex align-items-center">
        <Image
          src={
            job.company_logo_url ||
            "https://media.licdn.com/dms/image/v2/C4D0BAQEv4iZCWCWMsA/company-logo_200_200/company-logo_200_200/0/1647188299217/ca_silca_logo?e=2147483647&v=beta&t=cV2jOR6v2lO3P0a6HP0hJNgs8HaZMomC9_wtK75uZNI"
          }
          style={{ objectFit: "cover", width: "50px", height: "50px" }}
        />
        <div className="ms-3">
          <h6 className="m-0">{job.title}</h6>
          <p className="m-0 text-secondary">
            {job.company_name} · {job.candidate_required_location}
          </p>
        </div>
      </div>
      <button className="btn p-0 border-0" onClick={() => onRemove(job._id)}>
        <XLg className="fw-bold text-dark" />
      </button>
    </div>
    <hr />
  </>
);

export default AnnuncioSingolo;

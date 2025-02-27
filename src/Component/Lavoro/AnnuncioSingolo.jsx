import { Image } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";

const AnnuncioSingolo = ({ job }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center">
          <Image
            src={
              job.company_logo_url ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kJDojQTm_yBdrWpp4yWLjhWXLJkWPNqmkw&s"
            }
            roundedCircle
            style={{ objectFit: "cover", width: "50px", height: "50px" }}
          />
          <div className="ms-3">
            <h6 className="m-0">{job.title}</h6>
            <p className="m-0 text-secondary">
              {job.company_name} · {job.candidate_required_location}
            </p>
          </div>
        </div>
        <button className="btn p-0 border-0">
          <XLg className="fw-bold text-dark" />
        </button>
      </div>
      <hr />
    </>
  );
};
export default AnnuncioSingolo;

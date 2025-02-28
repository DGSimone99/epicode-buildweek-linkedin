import { Container, Image } from "react-bootstrap";

const SingoloLavoro = ({ job }) => {
  return (
    <Container className="bg-white mt-0 border p-3">
      <div className=" d-flex justify-content-start">
        <div className="me-4">
          <Image
            src={
              job.company_logo_url ||
              "https://media.licdn.com/dms/image/v2/C4D0BAQEv4iZCWCWMsA/company-logo_200_200/company-logo_200_200/0/1647188299217/ca_silca_logo?e=2147483647&v=beta&t=cV2jOR6v2lO3P0a6HP0hJNgs8HaZMomC9_wtK75uZNI"
            }
            style={{ objectFit: "cover", width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <h5 className="text-primary pointer2">{job.title}</h5>
          <p className="mb-0 pointer2">{job.company_name}</p>
          <p className="text-secondary mb-0 pointer2">{job.candidate_required_location}</p>
          <p className="mb-0 pointer2">Visualizzato • Promosso </p>
        </div>
      </div>
    </Container>
  );
};
export default SingoloLavoro;

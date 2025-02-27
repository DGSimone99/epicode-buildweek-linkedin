import { Col, Container, Image, Row } from "react-bootstrap";

const SingoloLavoro = () => {
  return (
    <Container className="bg-white mt-0 border p-3">
      <div className=" d-flex justify-content-start">
        <div className="me-4">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E0BAQEv3QBJew9V4A/company-logo_100_100/company-logo_100_100/0/1719821230020/hays_logo?e=1748476800&v=beta&t=gsOkLQTxRSjOSnfsoYbhZgUCzvBy-G9elG_0beBZ7uw"
            width={70}
            height={70}
          />
        </div>
        <div>
          <h5 className="text-primary">Junior Amministrativo Categorie Protetta (JOBS:NOME)</h5>
          <p className="mb-0">Hays</p>
          <p className="text-secondary mb-0">Roma</p>
          <p className="mb-0">Visualizzato • Promosso </p>
        </div>
      </div>
    </Container>
  );
};
export default SingoloLavoro;

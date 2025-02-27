import { Button, Container, Image } from "react-bootstrap";

const Invites = () => {
  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 p-0 mb-3">
      <Container className="d-flex border-bottom pt-2 align-items-center text-secondary">
        <h6>Inviti</h6>
        <Button className="ms-auto border-0 bg-white text-dark fw-semibold">Mostra tutto</Button>
      </Container>
      <Container className="d-flex ps-3 py-3">
        <Image
          className="rounded-1 me-2"
          src="https://media.licdn.com/dms/image/v2/C4D0BAQH_sxPLw-Vfjw/company-logo_100_100/company-logo_100_100/0/1630574580547/linkedin_notizie_logo?e=2147483647&v=beta&t=DmYMJD9HmbNgZQIXPgS-6MTn9WiF3V_GCsv2UQFqXdY"
          width={80}
        />
        <div className="align-self-center">
          <span>Newsletter • Mensile</span>
          <p className="fs-6">LinkedIn Notizie ti hainvitato a iscriverti a Tech in breve</p>
        </div>

        <div className="ms-auto align-self-center">
          <Button className="me-3 border-0 text-secondary bg-white fw-semibold">Ignora</Button>
          <Button className="rounded-pill text-primary bg-white fw-semibold">Accetta</Button>
        </div>
      </Container>
    </Container>
  );
};

export default Invites;

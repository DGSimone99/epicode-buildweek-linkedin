import { Button, Container, Image } from "react-bootstrap";
import notifications from "../../assets/Notifications.png";
import { Link } from "react-router";

const Notifiche = () => {
  return (
    <div>
      <Container className="bg-white rounded-3 p-3 border">
        <div className="d-flex">
          <Button className="fw-semibold rounded-pill" variant="success">
            Tutto
          </Button>
          <Button className="fw-semibold rounded-pill mx-2" variant="outline-secondary">
            Lavoro
          </Button>
          <Button className="fw-semibold rounded-pill" variant="outline-secondary">
            I miei post
          </Button>
          <Button className="fw-semibold rounded-pill mx-2" variant="outline-secondary">
            Menzioni
          </Button>
        </div>
      </Container>

      <Container className="bg-white rounded-3 p-3 border mt-3 text-center">
        <div>
          <Image src={notifications}></Image>
          <h3>Nessuna nuova notifica</h3>
          <h5 className="text-secondary fw-normal">
            Visualizza altri aggiornamenti sulla tua <br></br> home page
          </h5>
          <Button as={Link} to="/" className="rounded-pill bg-transparent morePostsBtn mt-3">
            Vai alla home
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Notifiche;

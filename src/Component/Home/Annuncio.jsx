import { Container, Image } from "react-bootstrap";

const Annuncio = () => {
  return (
    <Container className="border rounded-3 mt-3 p-0">
      <Image
        src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt="Annuncio"
        className="rounded-3"
      />
    </Container>
  );
};

export default Annuncio;

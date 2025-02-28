import { Image } from "react-bootstrap";
import { PersonFillAdd } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardUtenti({ profile }) {
  return (
    <Card
      className="d-flex flex-column"
      style={{
        flex: "1 1 300px",
        minHeight: "300px",
        display: "flex",
      }}
    >
      <Card.Img
        variant="top"
        src="https://www.reliant-rehab.com/wp-content/uploads/2019/02/reliant-generic-background-1.jpg"
        className="imgTeam2 position-relative"
      />
      <div className="cardUserImg2">
        <Image
          src={profile.image}
          fluid
          className="rounded-circle position-relative"
          style={{
            width: "68px",
            height: "68px",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title className="mt-5 nome-profile mb-0">
          {profile.name} {""} {profile.surname}
        </Card.Title>
        <Card.Text className="text-secondary title-profile">{profile.title}</Card.Text>
        <Button variant="outline-primary" className="rounded-pill  px-3">
          <PersonFillAdd className="me-1" />
          <strong>Collegati</strong>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardUtenti;

import { Image } from "react-bootstrap";
import { PersonFillAdd } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router";

function CardUtenti({ profile }) {
  const navigate = useNavigate();

  return (
    <Card
      className="d-flex flex-column "
      style={{
        flex: "1 1 300px",
        minHeight: "280px",
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
          className="rounded-circle position-relative pointer"
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
          }}
          onClick={() => {
            navigate("/user/" + profile._id);
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
        <div>
          <Card.Title
            className="mt-5 nome-profile mb-0 text-truncate text-center"
            style={{
              maxWidth: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={`${profile.name} ${profile.surname}`}
          >
            {profile.name} {profile.surname}
          </Card.Title>
          <Card.Text className="text-secondary title-profile text-center mb-0">{profile.title}</Card.Text>
        </div>
        <Button variant="outline-primary" className="rounded-pill  px-3">
          <PersonFillAdd className="me-1" />
          <strong>Collegati</strong>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardUtenti;

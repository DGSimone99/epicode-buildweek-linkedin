import { useEffect } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { fetchOtherUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Utente = () => {
  const user = useSelector((state) => state.otherUser.content);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOtherUser(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <Container className="cardBox rounded-3 px-0">
        <Card className="mb-3">
          <Card.Img
            variant="top"
            src="https://www.reliant-rehab.com/wp-content/uploads/2019/02/reliant-generic-background-1.jpg"
            className="imgTeam position-relative"
          />
          <div className="userImg">
            <Image
              src={user.image}
              fluid
              className="rounded-circle position-relative"
              style={{
                width: "152px",
                height: "152px",
                objectFit: "cover",
              }}
            ></Image>
          </div>
          <Card.Body className="mt-5 px-4 position-relative">
            <Row>
              <Col xs={8}>
                <Card.Title className="fs-2 mb-0">{user.name + " " + user.surname}</Card.Title>
                <Card.Text className="fs-5">{user.title}</Card.Text>
                <Card.Text className="text-secondary">
                  {user.area} <a href="#">Informazioni di contatto</a>
                </Card.Text>
              </Col>
              <Col>
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&amp;v=beta&amp;t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                  width={32}
                ></img>
                EPICODE
              </Col>
            </Row>
            <div className="mt-4">
              <Button variant="primary" className="rounded-pill fw-bold">
                Collegati
              </Button>
              <Button variant="outline-primary" className="rounded-pill fw-bold mx-2">
                Messaggio
              </Button>
              <Button variant="outline-secondary" className="rounded-pill fw-bold">
                Altro
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <Container className="cardBox rounded-3 px-0">
        <Card className="p-3">
          <h5 className="mb-0">
            <strong>Informazioni</strong>
          </h5>
          <p>{user.bio}</p>
        </Card>
      </Container>
    </div>
  );
};

export default Utente;

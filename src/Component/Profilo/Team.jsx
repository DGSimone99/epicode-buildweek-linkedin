import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { BsFillCameraFill, BsPlus, BsXLg } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { useSelector } from "react-redux";

const Team = () => {
  const user = useSelector((state) => state.user.content);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="cardBox rounded-3 px-0 my-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://www.reliant-rehab.com/wp-content/uploads/2019/02/reliant-generic-background-1.jpg"
          className="imgTeam position-relative"
        />
        <Button className="position-absolute cameraDiv bg-white rounded-circle p-2">
          <BsFillCameraFill className="camera"></BsFillCameraFill>
        </Button>
        <div className="userImg">
          <Image src={user.image} fluid className="rounded-circle position-relative" width={152}></Image>
          <BsPlus className="position-absolute bottom-0 end-0 rounded-circle bg-white plusImg"></BsPlus>
        </div>
        <Card.Body className="mt-5 px-4 position-relative">
          <BiPencil className="position-absolute pencil"></BiPencil>
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
              Disponibile per
            </Button>
            <Button variant="outline-primary" className="rounded-pill fw-bold mx-2">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="outline-primary" className="rounded-pill fw-bold me-2">
              Migliora profilo
            </Button>
            <Button variant="outline-secondary" className="rounded-pill fw-bold">
              Risorse
            </Button>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="mt-5">
            <Carousel.Item>
              <Row>
                <Col>
                  <div className="border border-1 px-3 py-2 rounded-3 position-relative">
                    <p className="mb-0 pe-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio voluptates earum
                      blanditiis amet, tempore.
                    </p>
                    <a href="#">Inizia</a>
                    <BsXLg className="position-absolute xCarousel"></BsXLg>
                  </div>
                </Col>
                <Col>
                  <div className="border border-1 px-3 py-2 rounded-3 position-relative">
                    <p className="mb-0 pe-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio voluptates earum
                      blanditiis amet, tempore.
                    </p>
                    <a href="#">Inizia</a>
                    <BsXLg className="position-absolute xCarousel"></BsXLg>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <div className="border border-1 px-3 py-2 rounded-3 position-relative">
                    <p className="mb-0 pe-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio voluptates earum
                      blanditiis amet, tempore.
                    </p>
                    <a href="#">Inizia</a>
                    <BsXLg className="position-absolute xCarousel"></BsXLg>
                  </div>
                </Col>
                <Col>
                  <div className="border border-1 px-3 py-2 rounded-3 position-relative">
                    <p className="mb-0 pe-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio voluptates earum
                      blanditiis amet, tempore.
                    </p>
                    <a href="#">Inizia</a>
                    <BsXLg className="position-absolute xCarousel"></BsXLg>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Team;

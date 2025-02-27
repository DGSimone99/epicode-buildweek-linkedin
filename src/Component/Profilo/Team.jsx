import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import { BsFillCameraFill, BsPlus, BsXLg } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { useSelector } from "react-redux";
import EditProfilo from "./EditProfilo";
import PictureModal from "./PictureModal";

const Team = () => {
  const user = useSelector((state) => state.user.content);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalPictureShow, setModalPictureShow] = React.useState(false);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="cardBox rounded-3 px-0">
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
          <BsPlus
            className="position-absolute bottom-0 end-0 rounded-circle bg-white plusImg"
            onClick={() => setModalPictureShow(true)}
          ></BsPlus>
        </div>
        <Card.Body className="mt-5 px-4 position-relative">
          <BiPencil className="position-absolute pencil" onClick={() => setModalShow(true)}></BiPencil>
          <Row>
            <Col xs={8}>
              <Card.Title className="fs-2 mb-0 pointer">{user.name + " " + user.surname}</Card.Title>
              <Card.Text className="fs-5">{user.title}</Card.Text>
              <Card.Text className="text-secondary">
                {user.area} <a href="#">Informazioni di contatto</a>
              </Card.Text>
            </Col>
            <Col className="pointer2">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&amp;v=beta&amp;t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                width={32}
              ></img>
              EPICODE
            </Col>
          </Row>
          <div className="mt-4">
            <Button variant="primary" className="rounded-pill fw-bold my-1">
              Disponibile per
            </Button>
            <Button variant="outline-primary" className="rounded-pill fw-bold my-1 mx-2">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="outline-primary" className="rounded-pill fw-bold my-1 me-2">
              Migliora profilo
            </Button>
            <Button variant="outline-secondary" className="rounded-pill fw-bold my-1">
              Risorse
            </Button>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="mt-5">
            <Carousel.Item>
              <Row>
                <Col>
                  <div className="border border-1 px-3 py-2 rounded-3 position-relative h-100 pointer3">
                    <p className="mb-0 pe-5">
                      <span className="fw-bold text-black" style={{ fontSize: "16px" }}>
                        Mostra ai recruiter che sei disponibile a lavorare
                      </span>
                      : sei tu che decidi chi può vedere questa informazione.
                    </p>
                    <a href="#">Inizia</a>

                    <BsXLg className="position-absolute xCarousel"></BsXLg>
                  </div>
                </Col>
                <Col>
                  <div className="border border-1 px-3 py-2 rounded-3 position-relative h-100 pointer3">
                    <p className="mb-0 pe-5">
                      <span className="fw-bold text-black" style={{ fontSize: "16px" }}>
                        Fai sapere che stai facendo selezione&nbsp;
                      </span>
                      e attrai candidati qualificati.
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
                  <div className="border border-1 px-3 py-2 rounded-3 position-relative h-100 pointer3">
                    <p className="mb-0 pe-5">
                      <span className="fw-bold text-black" style={{ fontSize: "16px" }}>
                        Metti in risalto i tuoi servizi&nbsp;
                      </span>
                      in un&apos;apposita sezione sul tuo profilo, così sarà più facile trovarti.
                    </p>
                    <a href="#">Inizia</a>
                    <BsXLg className="position-absolute xCarousel"></BsXLg>
                  </div>
                </Col>
                <Col>
                  <div className="border border-1 px-3 py-2 rounded-3 position-relative h-100 pointer3">
                    <p className="mb-0 pe-5">
                      <span className="fw-bold text-black" style={{ fontSize: "16px" }}>
                        Mostra ai recruiter che sei disponibile a lavorare
                      </span>
                      : sei tu che decidi chi può vedere questa informazione.{" "}
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
      <EditProfilo show={modalShow} onHide={() => setModalShow(false)} />
      <PictureModal show={modalPictureShow} onHide={() => setModalPictureShow(false)} />
    </Container>
  );
};

export default Team;

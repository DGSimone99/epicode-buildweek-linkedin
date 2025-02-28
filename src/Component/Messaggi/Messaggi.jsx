import { Button, Col, Container, Form, FormControl, Image, InputGroup, Row } from "react-bootstrap";
import { EmojiSmile, PencilSquare, Search, ThreeDots } from "react-bootstrap-icons";
import messages from "../../assets/NoMessage.png";
import { BsImage } from "react-icons/bs";
import { GiPaperClip } from "react-icons/gi";

const Messaggi = () => {
  return (
    <div>
      <Container className="bg-white rounded-3 p-3 border">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <h5 className="me-3">Messaggistica</h5>
            <InputGroup className="custom-input-group d-flex flex-nowrap">
              <InputGroup.Text className="search-icon d-flex align-items-center pe-0" style={{ backgroundColor: "#F4F2EE", border: "none" }}>
                <Search />
              </InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Cerca messaggi"
                className="d-none d-md-block"
                style={{ backgroundColor: "#F4F2EE", border: "none", outline: "none", boxShadow: "none" }}
              />
            </InputGroup>
          </div>
          <div className="d-flex align-items-center">
            <ThreeDots className="fs-4 text-black me-3 pointer"></ThreeDots>
            <PencilSquare className="fs-4 pointer" color="black"></PencilSquare>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex">
          <Button className="rounded-pill" variant="success">
            Posta in arrivo
          </Button>{" "}
          <Button className="rounded-pill mx-2" variant="outline-secondary">
            Da leggere
          </Button>
          <Button className="rounded-pill" variant="outline-secondary">
            I miei collegamenti
          </Button>
          <Button className="rounded-pill mx-2" variant="outline-secondary">
            Messaggi InMail
          </Button>
          <Button className="rounded-pill d-none d-md-block " variant="outline-secondary">
            Contrassegnati con una stella
          </Button>
        </div>
        <hr></hr>
        <Row style={{ height: "calc(100vh - 270px)" }}>
          <Col xs={12} md={4} className="text-center border-end">
            <Image src={messages}></Image>
            <h4 className="fw-semibold">Ancora nessun messaggio</h4>
            <p className="m-3">Entra in contatto e dai il via a una conversazione per far decollare la tua carriera</p>
            <Button className="rounded-pill" variant="outline-dark">
              Invia un messaggio
            </Button>
          </Col>
          <Col xs={0} md={8} className="d-flex flex-column justify-content-between">
            <div>
              <h5 className="ms-2">Nuovo messaggio</h5>
              <hr className="my-1"></hr>
              <Form className="pb-0">
                <Form.Group>
                  <Form.Control className="rounded-pill border-0" type="text" placeholder="Digita un nome o più nomi" />
                </Form.Group>
              </Form>
              <hr className="my-1"></hr>
            </div>
            <div className="border-top border-3">
              <Form className="m-2 mt-3">
                <Form.Group controlId="exampleTextarea">
                  <Form.Control as="textarea" rows={4} placeholder="Scrivi un messaggio..." style={{ backgroundColor: "#F4F2EE" }} />
                </Form.Group>
                <div className="d-flex justify-content-between mt-3 ms-1">
                  <div className="d-flex align-items-center ">
                    <BsImage className="fs-5 pointer"></BsImage>
                    <GiPaperClip className="fs-5 text-dark mx-3 pointer"></GiPaperClip>
                    <h5 className="my-0 pointer">GIF</h5>
                    <EmojiSmile className="fs-5  mx-3 text-black pointer"></EmojiSmile>
                  </div>
                  <div>
                    <Button className="border-0 rounded-pill text-secondary" style={{ backgroundColor: "#E8E8E8" }}>
                      Invia
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Messaggi;

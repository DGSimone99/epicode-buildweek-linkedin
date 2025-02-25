import { Col, Container, Row } from "react-bootstrap";
import { Calendar3, Image, TextIndentLeft } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const CreaPost = () => {
  const user = useSelector((state) => state.user.content);

  return (
    <Container className="bg-white rounded-3 p-3">
      <Row className="d-flex border-secondary align-items-center">
        <Col xs={2}>
          <div>
            <img className="rounded-circle" src={user.image} alt="" width={80} />
          </div>
        </Col>
        <Col xs={10}>
          <div className="border rounded-5 p-3">Crea un post</div>
        </Col>
      </Row>
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex align-items-center">
          <Image color="#378FE9" />
          <p className="ms-2 mb-0">Contenuti Multimediali</p>
        </div>

        <div className="d-flex align-items-center">
          <Calendar3 color="#C37D16" /> <p className="ms-2 mb-0">Evento</p>
        </div>
        <div className="d-flex align-items-center">
          <TextIndentLeft color="#E06847" />
          <p className="ms-2 mb-0">Scrivi un articolo</p>
        </div>
      </div>
    </Container>
  );
};
export default CreaPost;

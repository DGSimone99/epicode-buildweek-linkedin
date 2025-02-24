import { Col, Container, Row } from "react-bootstrap";
import { Calendar3, Image, TextIndentLeft } from "react-bootstrap-icons";

const CreaPost = () => {
  return (
    <Container className="bg-white rounded-3 p-3">
      <Row className="d-flex border-secondary align-items-center">
        <Col xs={1}>
          <div className="rounded-circle">
            <img
              src="data:image/png;base64,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"
              alt=""
              width={80}
            />
          </div>
        </Col>
        <Col xs={11}>
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

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router";
import silsil from "../assets/silsil.jpg";

const FdMp = () => {
  return (
    <>
      <h1 className="text-center">FUORI DALLA MIA PALUDE</h1>
      <Row className="justify-content-center" style={{ backgroundImage: `url(${silsil})` }}>
        <Col className="d-flex flex-column align-items-center">
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/QeSAdifXDGk?si=fR6bjGIxJVEXH4cj&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Link to="/">
            <p className="text-center fs-1">TORNA ALLA HOME</p>
          </Link>
        </Col>
      </Row>
    </>
  );
};
export default FdMp;

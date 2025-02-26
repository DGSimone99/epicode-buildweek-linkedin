import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Calendar, CaretDownFill, Clock, Image, Plus, PlusLg } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import Emoji from "./Emoji";

function ModalePost(props) {
  const user = useSelector((state) => state.user.content);
  const [postText, setPostText] = useState("");

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="border-0" closeButton>
        <div className="d-flex align-items-start">
          <img
            className="rounded-circle"
            src={user.image}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
          />
          <div className="ms-3">
            <div className="d-flex align-items-center">
              <h3 className="me-3 mb-0">
                {user.name} {""} {user.surname}
              </h3>
              <CaretDownFill />
            </div>
            <p style={{ fontSize: 12 }}>Pubblica: Chiunque</p>
          </div>
        </div>
      </Modal.Header>
      <Emoji value={postText} onChange={setPostText} />
      <div className="d-flex ms-3 mb-3">
        <Image />
        <Calendar className=" ms-4" />
        <PlusLg className=" ms-4" />
      </div>

      <Modal.Footer>
        <div className="d-flex align-items-center ms-auto mb-2 ">
          <Button variant="outline-light" className="border-0 rounded-circle ">
            <Clock />
          </Button>
          <Button variant="light" className="rounded-pill mx-2">
            Pubblica
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalePost;

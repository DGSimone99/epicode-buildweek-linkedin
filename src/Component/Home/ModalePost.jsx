import { useState } from "react";
import { Calendar, CaretDownFill, Clock, Image, PlusLg } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import Emoji from "./Emoji";
import { fetchSharePost } from "../redux/actions";
import { Form } from "react-bootstrap";

const ModalePost = (props) => {
  const user = useSelector((state) => state.user.content);
  const [postText, setPostText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setPostText(event.target.value);
  };

  const [picture, setPicture] = useState([]);
  const handlePicture = (event) => {
    setPicture(event.target.files);
  };

  const newPost = () => {
    dispatch(fetchSharePost(postText, picture[0]));
    setPostText("");
  };

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
        <Form.Group controlId="formFile" className="d-flex align-items-center">
          <Form.Control type="file" className="me-3" name="picture" onChange={handlePicture} />
        </Form.Group>
      </Modal.Header>
      <div>
        <Form.Control
          as="textarea"
          className="border-0 shadow-none me-2 pb-5"
          placeholder="Di cosa vorresti parlare?"
          value={postText}
          onChange={handleChange}
          rows={4}
        />
      </div>
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
          <Button
            variant="light"
            className="rounded-pill mx-2"
            onClick={() => {
              newPost();
              props.onHide();
            }}
          >
            Pubblica
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalePost;

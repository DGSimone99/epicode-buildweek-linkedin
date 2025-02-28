import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TextareaAutosize from "react-textarea-autosize";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetComments } from "../redux/actions";
function EditComment(props) {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.content);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  console.log(props.commentId);
  const handleSubmit = (e) => {
    e.preventDefault();
    editComment(comment, props.commentId, dispatch)();
  };
  const editComment = (comment, id, dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGRjY2U3MDMzNzAwMTUzMTZkYjEiLCJpYXQiOjE3NDAzOTM5MzIsImV4cCI6MTc0MTYwMzUzMn0.1t8kxCm5d0UPnuFQqZs9G6-VZkPjsGpIMIhIadrrE4Q",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          console.log("commento inviato");
        } else {
          alert("il post non è stato pubblicato");
        }
        dispatch(fetchGetComments());
      })
      .catch((err) => console.error(err));
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modifica commento</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0" style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <Container className="pb-3">
          <Row className="px-3">
            <Col xs={2} md={1} className="d-flex justify-content-center align-items-center">
              <img
                className="rounded-circle fluid"
                src={user.image}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col className="d-flex align-items-center">
              <TextareaAutosize
                className="form-control rounded-5"
                placeholder="Aggiungi il tuo commento..."
                onKeyDown={handleKeyDown}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></TextareaAutosize>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={(e) => {
            handleSubmit(e);
            props.onHide();
          }}
        >
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditComment;

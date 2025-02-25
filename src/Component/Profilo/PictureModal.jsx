import { useState } from "react";
import { Form, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { editUserImage } from "../redux/actions";

function PictureModal(props) {
  const [picture, setPicture] = useState([]);
  const handlePicture = (event) => {
    setPicture(event.target.files);
    console.log(event.target.files);
  };

  const dispatch = useDispatch();

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Aggiungi foto</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5" style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <h4 className="text-center w-50 mx-auto fw-normal">
          La tua foto non deve per forza essere un tuo primo piano!<br></br>Ma qualcosa che ti rappresenti.
        </h4>
        <div className="text-center mt-4">
          <Image
            fluid
            src="https://static.licdn.com/aero-v1/sc/h/c5ybm82ti04zuasz2a0ubx7bu"
            className="mx-auto"
          ></Image>
          <Image fluid src={picture} className="mx-auto"></Image>
          <p className="mt-5 text-secondary">
            Chiediamo agli utenti di LinkedIn di utilizzare le loro vere identità, quindi scatta o carica una tua foto.
            Poi ritagliala, applica dei filtri e perfezionala come vuoi.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Form.Group controlId="formFile" className="d-flex align-items-center">
          <Form.Control type="file" className="me-3" name="picture" onChange={handlePicture} />
          <Button className="rounded-pill w-50" onClick={() => dispatch(editUserImage(picture[0]))}>
            Carica foto
          </Button>
        </Form.Group>
      </Modal.Footer>
    </Modal>
  );
}
export default PictureModal;

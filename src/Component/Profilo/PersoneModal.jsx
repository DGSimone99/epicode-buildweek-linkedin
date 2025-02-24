import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PersonaSingola from "./PersonaSingola";
import { Spinner } from "react-bootstrap";

function PersoneModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Persone che potresti conoscere</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5" style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <h4>Dalla tua scuola o università</h4>
        <hr />
        {props.profiles.length > 0 ? (
          props.profiles.map((profile, i) => {
            return (
              <div key={profile._id}>
                <PersonaSingola profile={profile} />
                {i < props.profiles.length - 1 && <hr />}
              </div>
            );
          })
        ) : (
          <Spinner animation="grow" />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PersoneModal;
